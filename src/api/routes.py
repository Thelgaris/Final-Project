"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


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

  
 