from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(80), unique=False, nullable=True)
    surname = db.Column(db.String(80), unique=False, nullable=True)
    birth = db.Column(db.String(80), unique=False, nullable=True)
    gender = db.Column(db.String(80), unique=False, nullable=True)
    city = db.Column(db.String(80), unique=False, nullable=True)
    sports = db.Column(db.String(80), unique=False, nullable=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=True)
    


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "surname": self.surname,
            "birth": self.birth,
            "gender": self.gender,
            "city": self.city,
            "sports": self.sports,
            
      
            # do not serialize the password, its a security breach
        }