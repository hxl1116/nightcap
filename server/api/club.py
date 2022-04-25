from flask_restful import Resource
from flask_restful.reqparse import RequestParser

from db.club import get_all_clubs, update_club, delete_club, insert_club


class Club(Resource):
    def __init__(self):
        self.put_parser = RequestParser()
        self.put_parser.add_argument('name', type=str)
        self.put_parser.add_argument('genre', type=str)
        self.put_parser.add_argument('city', type=str)
        self.put_parser.add_argument('volume', type=str)

    def put(self, club_id):
        args = self.put_parser.parse_args()

        args = {key: val for key, val in args.items() if val is not None}

        print(args)

        # TODO: Validate club id
        update_club(club_id, **args)

        return '', 201

    @staticmethod
    def delete(club_id):
        # TODO: Validate club id
        delete_club(club_id)

        return '', 200


class ClubList(Resource):
    def __init__(self):
        self.post_parser = RequestParser()
        self.post_parser.add_argument('name', type=str, required=True)
        self.post_parser.add_argument('genre', type=str, required=True)
        self.post_parser.add_argument('city', type=str, required=True)
        self.post_parser.add_argument('capacity', type=str, required=True)
        self.post_parser.add_argument('threshold', type=int, required=True)

    @staticmethod
    def get():
        return get_all_clubs(), 200

    def post(self):
        args = self.post_parser.parse_args()

        insert_club(**args)

        return '', 201
