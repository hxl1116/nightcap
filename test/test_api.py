from unittest import TestCase

from server.utils import fetch_many, commit, fetch_one
from test_utils import get_rest_call, put_rest_call, post_rest_call, delete_rest_call


class TestClub(TestCase):
    endpoint = 'http://localhost:5000/clubs'

    def setUp(self) -> None:
        self.clubs = fetch_many("SELECT * FROM club")
        self.club = fetch_one("SELECT * FROM club")

    def test_get(self):
        res = get_rest_call(self, self.endpoint)

        self.assertEqual(len(self.clubs), len(res), f'Results length should be {len(self.clubs)}')

    def test_put_one_arg(self):
        name = 'Goofy Ahh'

        put_rest_call(self, f'{self.endpoint}/{self.club["id"]}', {'name': name})

        club = fetch_one("SELECT * FROM club WHERE id = %s", (self.club['id'],))

        self.assertEqual(name, club['name'])

    def test_put_two_arg(self):
        name, city = 'Goofy Ahh', 'Quan Dale'

        put_rest_call(self, f'{self.endpoint}/{self.club["id"]}', {'name': name, 'city': city})

        club = fetch_one("SELECT * FROM club WHERE id = %s", (self.club['id'],))

        self.assertEqual(name, club['name'])
        self.assertEqual(city, club['city'])

    # TODO: Add assert
    def test_post(self):
        params = {'name': 'Goofy Ahh', 'city': 'Quan Dale', 'genre': 'Dingle', 'capacity': 100, 'threshold': 80}

        post_rest_call(self, f'{self.endpoint}', params)

    def test_delete(self):
        delete_rest_call(self, f'{self.endpoint}/{self.club["id"]}')

    def tearDown(self) -> None:
        commit("CALL reload_club_data()")
