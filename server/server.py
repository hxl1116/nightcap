from flask import Flask
from flask_restful import Api

from api.club import Club
from utils import exec_file

app = Flask(__name__)

api = Api(app)

api.add_resource(Club, '/clubs')


def init():
    print("Initializing database")
    exec_file('schema.sql')


def main():
    print("Starting server")
    app.run(debug=True)


if __name__ == '__main__':
    init()
    main()
