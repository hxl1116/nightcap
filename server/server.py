from flask import Flask
from flask_restful import Api

from api.example import ExampleApi
from util import exec_file

app = Flask(__name__)

api = Api(app)

api.add_resource(ExampleApi, '/example_api')


def init():
    print("Initializing database")
    exec_file('people.sql')


def main():
    print("Starting server")
    app.run(debug=True)


if __name__ == '__main__':
    init()
    main()
