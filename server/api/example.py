from flask_restful import Resource


class ExampleApi(Resource):
    @staticmethod
    def get():
        from utils import fetch_many

        result = fetch_many("SELECT * FROM people")
        return result
