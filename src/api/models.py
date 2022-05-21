from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Deportes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)



class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    nombre = db.Column(db.String(80), unique=False, nullable=False)
    apellidos = db.Column(db.String(80), unique=False, nullable=False)
    nacimiento = db.Column(db.String(80), unique=False, nullable=False)
    genero = db.Column(db.String(80), unique=False, nullable=False)
    foto_perfil = db.Column(db.String(80), unique=False, nullable=True)
    deportes_id = db.Column(db.Integer, db.ForeignKey('deportes.id'))
    deporte = db.relationship(Deportes)
    


  

    def serialize(self):
        return {
            "id": self.id,
            "user_name": self.user_name,
            "email": self.email,
            "nombre": self.nombre,
            "apellidos": self.apellidos,
            "nacimiento": self.nacimiento,
            "foto_perfil": self.foto_perfil,
            "genero": self.genero,
      
            # do not serialize the password, its a security breach
        }

class Siguiendo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship(User)
