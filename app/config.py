import os

class Configuration:
    SECRET_KEY = os.environ.get('SECRET_KEY')
    FLASK_ENV = os.getenv('FLASK_ENV')
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        'DATABASE_URL').replace('postgres://', 'postgresql://', 1)
    SCHEMA = os.environ.get('SCHEMA')
