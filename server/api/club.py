from flask_restful import Resource

from db.club import get_all_clubs


class Club(Resource):
    @staticmethod
    def get():
        return get_all_clubs()
