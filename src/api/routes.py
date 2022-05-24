"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity,jwt_required

api = Blueprint('api', __name__)

@api.route('/register',methods=['POST'])
def register_user():
    body_email = request.json.get('email')
    body_password = request.json.get('password')
    if body_email and body_password:
        new_user = User(email=body_email, password=body_password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"created": True}), 200
    else:
        return jsonify({"created": False, "msg": "No existe información"}), 400

<<<<<<< HEAD

@api.route('/login',methods=['POST'])
def login_user():
    body_email = request.json.get('email')
    body_password = request.json.get('password')
    if body_email and body_password:
        user = User.query.filter_by(email=body_email).filter_by(password=body_password).filter_by(is_active=True).first()
        if user:
            access_token = create_access_token(identity=user.id)
            return jsonify({"logged": True, "user": user.serialize(), "access_token": access_token}),200
        else:
             return jsonify({"logged": False, "msg": "Información incorrecta"}), 400
    else: 
        return jsonify({"logged": False, "msg": "Información incorrecta"}), 400
=======
@api.route('/register', methods=['POST'])
def Register_user():
        body_email = request.json.get("email")
        body_password = request.json.get("password")
        body_nombre = request.json.get("nombre")
        body_nacimiento = request.json.get("nacimiento")
        new_user = User(email=body_email, password=body_password, nombre=body_nombre, nacimiento=body_nacimiento)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"User": new_user.serialize()}), 200

  
 
>>>>>>> develop
