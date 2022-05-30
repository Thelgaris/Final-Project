"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Sports
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity,jwt_required

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

@api.route('/register', methods=['PUT'])
def Register_user():
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    body_name = request.json.get("name")
    body_birth = request.json.get("birth")
    body_surname = request.json.get("surname")
    body_sports =request.json.get("sports")
    body_city =request.json.get("city")
    body_gender =request.json.get("gender")
    if body_email and body_password and body_name and body_birth:
        new_user = User(email=body_email, password=body_password, name=body_name, birth=body_birth, surname=body_surname, sports=body_sports, city=body_city, gender=body_gender)
        user = User.query.filter_by(email=body_email).filter_by(password=body_password).first()
        access_token = create_access_token(identity=user.id)
        db.session.add(new_user)
        db.session.commit()
        
        return jsonify({"access_token": access_token, "User": new_user.serialize(), "registered": True}), 200
    else:
        return jsonify({"Error": "Error"}), 400

    

@api.route('/sports', methods=['GET'])
def get_all_sports():
    sports = Sports.query.all()
    sports_serialized = list(map(lambda x: x.serialize(), sports))
    return jsonify({"response": sports_serialized}), 200

@api.route('/user', methods=['GET'])
def get_data_user():
