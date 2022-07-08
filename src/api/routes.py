"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Sports, Details, Pistas, Events, UserEvents, UserSports
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
""" import cloudinary
import cloudinary.uploader """
""" /*hola uapa*/s """

api = Blueprint('api', __name__)

@api.route('/login',methods=['POST'])
def login_user():
    body_email = request.json.get('email')
    body_password = request.json.get('password')
    if body_email and body_password:
        user = User.query.filter_by(email=body_email).filter_by(password=body_password).first()
        if user:
            access_token = create_access_token(identity=user.id)
            return jsonify({"logged": True, "user": user.serialize(), "access_token": access_token}),200
        else:
             return jsonify({"logged": False, "msg": "Información incorrecta"}), 400
    else: 
        return jsonify({"logged": False, "msg": "Información incorrecta"}), 400
       

@api.route('/register', methods=['POST'])
def register_user():
    print ('@@@@@@@@@@@@@@@@@@@@@')
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    if body_email and body_password:
        new_user = User(email=body_email, password=body_password)
        db.session.add(new_user)
        db.session.commit()
        access_token = create_access_token(identity=new_user.id)
        return jsonify({"access_token": access_token, "User": new_user.serialize(), "registered": True}), 200
    else:
        return jsonify({"registered": False, "msg": "Campo vacio"}), 400

@api.route('/userprofile', methods=['POST'])
@jwt_required()
def update_details():
    print(request.json)
    user_id = get_jwt_identity()
    print(user_id)
    user = User.query.get(user_id)
    if user:
        print("@@@@@@@@@@@@@@@@@@2")
        body_birth = request.json.get("birth")
        body_name = request.json.get("name")
        body_surname = request.json.get("surname")
        body_city =request.json.get("city")
        body_gender =request.json.get("gender")
        body_sports = request.json.get("sports")
        print("@@@@@@@@@@@@@@@@@@3")
        print(body_sports)
        print(body_birth, body_city, body_name, body_surname)
        if body_name and body_birth and body_surname and body_city and body_gender:
            print("@@@@@@@@@@@@@@@@4")
            user_details = Details(name=body_name, birth=body_birth, surname=body_surname, city=body_city, gender=body_gender)
            db.session.add(user_details)
            db.session.commit()
            user.detail=user_details
            db.session.commit()
            for sport_name in body_sports:
                sport = Sports.query.filter_by(name = sport_name).first()
                user_sports = UserSports(user=user, sports=sport)
                db.session.add(user_sports)
            db.session.commit()
            print("@@@@@@@@@@@@@@@@@5")
            
            return jsonify({"details": user_details.serialize(), "Update": True}), 200
        else:
            return jsonify({"Error": "Error en userprofile1"}), 400
    else:
        return jsonify({"Error": "Error en userprofile2"}), 400


@api.route('/sports', methods=['GET'])
def get_all_sports():
    sports = Sports.query.all()
    sports_serialized = list(map(lambda x: x.serialize(), sports))
    return jsonify({"response": sports_serialized}), 200

@api.route('/details', methods=['GET'])
def get_details():
    details = Details.query.all()
    details_serialized = list(map(lambda x: x.serialize(), details))
    return jsonify({"response": details_serialized}), 200


@api.route('/user', methods=['GET'])
def get_all_users():
    users = User.query.all()
    users_serialized = list(map(lambda x: x.serialize(), users))
    return jsonify({"response": users_serialized}), 200

@api.route('/pistas', methods=['GET'])
def get_all_pistas():
    pistas = Pistas.query.all()
    pistas_serialized = list(map(lambda x: x.serialize(), pistas))
    return jsonify({"response": pistas_serialized}), 200

@api.route('/events', methods=['GET'])
def get_all_events():
    events = Events.query.all()
    events_serialized = list(map(lambda x: x.serialize(), events))
    return jsonify({"response": events_serialized}), 200

@api.route('/userEvents', methods=['GET'])
@jwt_required()
def get_userEvents():
    user_id = get_jwt_identity()
    userEvents = User.query.get(user_id).events
    userEvents_serialized = list(map(lambda x: x.serialize(), userEvents))
    return jsonify({"response": userEvents_serialized}), 200

@api.route('/currentUser', methods=['GET'])
@jwt_required()
def get_currentUser():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    return jsonify({"response": user.serialize()}), 200


@api.route('/userCity', methods=['GET'])
@jwt_required()
def get_userCity():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    city = Details.query.filter_by(city=user.detail.city)
    city_serialized = list(map(lambda x: x.serialize(), city))
    return jsonify({"response": city_serialized}), 200

@api.route('/events', methods=['POST'])
@jwt_required()
def create_Events():

    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if user:
     
        body_name = request.json.get("name")
        body_city = request.json.get("city")
        body_address = request.json.get("address")
        body_date = request.json.get("date")
        body_time = request.json.get("time")
        body_description = request.json.get("description")
             
   
        if body_name and body_address and body_date and body_time and body_description and body_city:
        
            events = Events(name=body_name, city=body_city, address=body_address, date=body_date, time=body_time, description=body_description, user_id=user_id)           
            db.session.add(events)
            user_events = UserEvents(user=user, events=events)
            db.session.add(user_events)
            db.session.commit()
           
            
            return jsonify({"events": events.serialize(), "Event_Created": True}), 200
        else:
            return jsonify({"Error": "Error"}), 400
    else:
        return jsonify({"Error": "Error"}), 400


@api.route('/joinEvent', methods=['POST'])
@jwt_required()
def join_Events():
   
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
      
    body_event_id = request.json.get("id")    
    event = Events.query.get(body_event_id)    
    user_events = UserEvents(user=user, events=event)
    db.session.add(user_events)
    db.session.commit()
  
    return jsonify({"events": user_events.serialize(), "Joined_to_Event": True}), 200


@api.route('/editprofile', methods=['PUT'])
@jwt_required()
def update_user():
    print(request.json)
    user_id = get_jwt_identity()
    user = Details.query.get(user_id)
    if user:
        print("@@@@@@@@@@@@@@@@@@2")
        body_birth = request.json.get("birth")
        body_name = request.json.get("name")
        body_surname = request.json.get("surname")
        body_city =request.json.get("city")
        body_gender =request.json.get("gender")
        print("@@@@@@@@@@@@@@@@@@3")
        
        print(body_birth, body_city, body_name, body_surname)

        user.name=body_name
        user.birth=body_birth
        user.surname=body_surname
        user.city=body_city
        user.gender=body_gender
        db.session.commit()
        return jsonify({"user": details.serialize()})
    else:
        return jsonify({"Error": "Error en update-user"}), 400


@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify({"user_id": current_user, "logged_in": True}), 200
    

""" @api.route('/user/<int:user_id>/image', methods=['POST'])
def handle_upload(user_id):
    if 'profile_image' in request.files:
        result = cloudinary.uploader.upload(request.files['profile_image'])

        user1= User.query.get(user_id)
        user1.profile_image_url = result['secure_url']

        db.session.add(user1)
        db.session.commit()

        return jsonify(user1.serialize()), 200
    else:
        raise APIException('Missing profile_image on the FormData')
  """