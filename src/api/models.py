from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    detail = db.relationship('Details', backref='user', lazy=True)
    sports = db.relationship('UserSports')
    # profile_image_url = db.Column(db.String(255), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=True)
    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # "profile_image_url": self.profile_image_url,
        }

class Details(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    name = db.Column(db.String(80), unique=False, nullable=True)
    surname = db.Column(db.String(80), unique=False, nullable=True)
    birth = db.Column(db.String(80), unique=False, nullable=True)
    gender = db.Column(db.String(80), unique=False, nullable=True)
    city = db.Column(db.String(80), unique=False, nullable=True)   
 
    def __rper__(self):
        return f'<details {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "surname": self.surname,
            "birth": self.birth,
            "gender": self.gender,
            "city": self.city,
        }


class Sports(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True)
    user_sports = db.relationship('UserSports')

    def __repr__(self):
        return f'<Sports {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }

class UserSports(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    sport_id = db.Column(db.Integer, db.ForeignKey('sports.id'))
    sports = db.relationship('Sports')
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship('User')

# One to many
#   class Parent(Base):
#     __tablename__ = "parent"
#     id = Column(Integer, primary_key=True)
#     children = relationship("Child")


# class Child(Base):
#     __tablename__ = "child"
#     id = Column(Integer, primary_key=True)
#     parent_id = Column(Integer, ForeignKey("parent.id"))

# One to many bidirectional
# class Parent(Base):
#     __tablename__ = "parent"
#     id = Column(Integer, primary_key=True)
#     children = relationship("Child", back_populates="parent")


# class Child(Base):
#     __tablename__ = "child"
#     id = Column(Integer, primary_key=True)
#     parent_id = Column(Integer, ForeignKey("parent.id"))
#     parent = relationship("Parent", back_populates="children")

# class Userdata(db.Model):
#     id=db.Column(db.Integer, primary_key=True)
#     details_id =db.Column(db.Integer, db.ForeignKey('details.id'))
#     details = db.relationship('Details')
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
#     user = db.relationship('User')
