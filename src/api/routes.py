"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Sports, Details
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

api = Blueprint('api', __name__)

@api.route('/login',methods=['POST'])
def login_user():
    body_email = request.json.get('email')
    body_password = request.json.get('password')
    if body_email and body_password:
        user = User.query.filter_by(email=body_email).filter_by(password=body_password).first()
        if user:
            access_token = create_access_token(identity=user.id)
            return jsonify({"logged": True, "access_token": access_token}),200
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
        return jsonify({"User": new_user.serialize(), "registered": True}), 200
    else:
        return jsonify({"registered": False, "msg": "Informacion incompleta"}), 400

@api.route('/userprofile', methods=['POST'])
@jwt_required()
def update_details():
    print(1)
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if user:
        print(2)
        body_birth = request.json.get("birth")
        body_name = request.json.get("name")
        body_surname = request.json.get("surname")
        body_city =request.json.get("city")
        body_gender =request.json.get("gender")
        print(3)
        if body_name and body_birth and body_surname and body_city:
            print(4)
            user_details = Details(name=body_name, birth=body_birth, surname=body_surname, city=body_city, gender=body_gender,user_id=user_id)
            db.session.add(user_details)
            db.session.commit()
            print(5)
            
            return jsonify({"details": user_details.serialize(), "Update": True}), 200
        else:
            return jsonify({"Error": "Error"}), 400
    else:
        return jsonify({"Error": "Error"}), 400

"""     # Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200 """

# @app.route("/protected", methods=["GET"])
# @jwt_required()
# def protected():
#     # Access the identity of the current user with get_jwt_identity
#     current_user = get_jwt_identity()
#     return jsonify(logged_in_as=current_user), 200

@api.route('/sports', methods=['GET'])
def get_all_sports():
    sports = Sports.query.all()
    sports_serialized = list(map(lambda x: x.serialize(), sports))
    return jsonify({"response": sports_serialized}), 200


@api.route('/user', methods=['GET'])
@jwt_required()
def get_all_users():
    user = User.query.all()
    user_serialized = list(map(lambda x: x.serialize(), user))
    return jsonify({"response": user_serialized}), 200

@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_id = get_jwt_identity()
    user = User.query.get(current_id)
    if user:
        return jsonify({"logged_in": True, "user_id": current_id}), 200
    else:
        return jsonify({"logged_in": False}), 400

