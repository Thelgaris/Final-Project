from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

user_following = db.Table(
    'user_following', 
    db.Column('user_id', db.Integer, db.ForeignKey("user.id"), primary_key=True),
    db.Column('following_id', db.Integer, db.ForeignKey("user.id"), primary_key=True)
)
   

class User(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    detail_id= db.Column(db.Integer, db.ForeignKey("details.id"))
    detail = db.relationship('Details', backref="user", lazy=True)
    sports = db.relationship('UserSports') 
    events = db.relationship('UserEvents')
    following = db.relationship(
        'User', lambda: user_following,
        primaryjoin=lambda: User.id == user_following.c.user_id,
        secondaryjoin=lambda: User.id == user_following.c.following_id,
        backref='followers'
    )
    is_active = db.Column(db.Boolean(), unique=False, nullable=True)
    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
       
       
        return {
            "id": self.id,
            "email": self.email,
            "detail": self.detail.serialize() if self.detail is not None else None,
            # "sports": list(map(lambda sport:sport.sports.serialize(), self.sports)) if self.sports is not None else [],
            "events": list(map(lambda event:event.events.serialize(), self.events)) if self.events is not None else [],
            # "followings": len(self.following),
            # "followers": len(self.followers),  
            "followings": list(map(lambda following:following.id, self.following)) if self.following is not None else [],
            "followers": list(map(lambda followers:followers.id, self.followers)) if self.followers is not None else [],

        }



# class UserFollowers(db.Model):
#    id=db.Column(db.Integer, primary_key=True) 
 
#    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
#    follower_id = db.Column(db.Integer, db.ForeignKey('user.id'))






class Details(db.Model):
    id = db.Column(db.Integer, primary_key=True)   
    name = db.Column(db.String(80), unique=False, nullable=True)
    surname = db.Column(db.String(80), unique=False, nullable=True)
    birth = db.Column(db.String(80), unique=False, nullable=True)
    gender = db.Column(db.String(80), unique=False, nullable=True)
    city = db.Column(db.String(80), unique=False, nullable=True)  
    profile_image_url = db.Column(db.String(255), unique=False, nullable=True) 
 
    def __rper__(self):
        return f'<Details {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "surname": self.surname,
            "birth": self.birth,
            "gender": self.gender,
            "city": self.city,
            "profile_image_url": self.profile_image_url,
        }


class Sports(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True)
    user_sports = db.relationship('UserSports')
    # events_id = db.Column(db.Integer, db.ForeignKey('events.id'))

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

class Pistas(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=True)
    address = db.Column(db.String(80), unique=False, nullable=True)
    description = db.Column(db.String(240), unique=False, nullable=True)
    photo = db.Column(db.String(140), unique=False, nullable=True)
    # events_id = db.Column(db.Integer, db.ForeignKey('events.id'))
    # cities_id = db.Column(db.Integer, db.ForeignKey('cities.id'))
   
    

    def __repr__(self):
        return f'<Pistas {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "address": self.address,
            "description": self.description,
            "photo": self.photo,
        }

class Events(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship('User')
    name = db.Column(db.String(80), unique=False, nullable=False)
    city = db.Column(db.String(80), unique=False, nullable=False)  
    address = db.Column(db.String(80), unique=False, nullable=False)
    date = db.Column(db.String(80), unique=False, nullable=False)
    time = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(240), unique=False, nullable=False)
    photo = db.Column(db.String(140), unique=False, nullable=True)
    user_events = db.relationship('UserEvents')
    # sport = db.relationship('Sports', backref='events', lazy=True)
    # pista = db.relationship('Pistas', backref='pistas', lazy=True)

    def __repr__(self):
        return f'<Events {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "city": self.city,
            "address": self.address,
            "date": self.date,
            "time": self.time,
            "description": self.description,
            "participants": len(self.user_events), #lista de userevents que nos trae los usuarios y con el len los contamos
            "photo": self.photo,
        }

class UserEvents(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    events_id = db.Column(db.Integer, db.ForeignKey('events.id'))
    events = db.relationship('Events')
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship('User')
    
    def serialize(self):
        return {
            "id": self.id,                
        }



class Cities(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    # pista = db.relationship('Pistas', backref='cities', lazy=True)
    
    
    def __repr__(self):
        return f'<Cities {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }














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
