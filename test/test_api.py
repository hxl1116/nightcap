from unittest import TestCase

from server.utils import fetch_many, commit
from test_utils import get_rest_call


class TestClub(TestCase):
    endpoint = 'http://localhost:5000/clubs'

    def setUp(self) -> None:
        self.clubs = fetch_many("SELECT * FROM club")

    def test_get(self):
        res = get_rest_call(self, self.endpoint)

        self.assertEqual(len(self.clubs), len(res), f'Results length should be {len(self.clubs)}')

    def tearDown(self) -> None:
        commit("CALL reload_club_data()")