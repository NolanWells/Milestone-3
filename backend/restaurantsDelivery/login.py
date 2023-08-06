from flask import Blueprint, request
from flask_cors import CORS
from flask_bcrypt import Bcrypt

bp = Blueprint('login', __name__, url_prefix="/login")
CORS(bp, resources={r"/login/*": {"origins": "http://localhost:3000"}})

bcrypt = Bcrypt()


@bp.route('/', methods = ['POST'])
def login():
    data = request.get_json()
    username = data.get('Username')
    password = data.get('Password')
    
    # Generate a hashed password with a random salt

    print(username + password)
    hashed_password = bcrypt.generate_password_hash('123',10)
    print(bcrypt.check_password_hash(hashed_password, password))

    return f'---------------'



