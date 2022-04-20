from flask_restful import Resource


class Club(Resource):
    @staticmethod
    def get():
        from utils import fetch_many

        res = fetch_many("SELECT * FROM club")

        return res
