"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Sports, Details, UserSports
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
import cloudinary
import cloudinary.uploader

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
            user_details = Details(name=body_name, birth=body_birth, surname=body_surname, city=body_city, gender=body_gender,user_id=user_id)
            db.session.add(user_details)
            db.session.commit()
            for sport_name in body_sports:
                sport = Sports.query.filter_by(name = sport_name).first()
                user_sports = UserSports(user=user, sports=sport)
                db.session.add(user_sports)
                db.session.commit()
            print("@@@@@@@@@@@@@@@@@5")
            
            return jsonify({"details": user_details.serialize(), "Update": True}), 200
        else:
            return jsonify({"Error": "Error"}), 400
    else:
        return jsonify({"Error": "Error"}), 400

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
        return jsonify({"Error": "Error"}), 400


@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify({"user_id": current_user, "logged_in": True}), 200

@api.route('/sports', methods=['GET'])
def get_all_sports():
    sports = Sports.query.all()
    sports_serialized = list(map(lambda x: x.serialize(), sports))
    return jsonify({"response": sports_serialized}), 200


@api.route('/user', methods=['GET'])
def get_all_users():
    users = User.query.all()
    users_serialized = list(map(lambda x: x.serialize(), users))
    return jsonify({"response": users_serialized}), 200

@api.route('/user/<int:user_id>/image', methods=['POST'])
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
