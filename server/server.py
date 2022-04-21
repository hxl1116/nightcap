from flask import Flask
from flask_restful import Api

from api.club import Club, ClubList
from utils import exec_file, seed

app = Flask(__name__)

api = Api(app)

api.add_resource(Club, '/clubs/<string:club_id>')
api.add_resource(ClubList, '/clubs')


def init():
    print("Initializing database")
    exec_file('schema.sql')
    seed()


def main():
    print("Starting server")
    app.run(debug=True)


if __name__ == '__main__':
    init()
    main()
