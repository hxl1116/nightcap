from unittest import TestCase

from test_utils import get_rest_call


class TestExample(TestCase):
    def test_api(self):
        result = get_rest_call(self, 'http://localhost:5000/example_api')
        self.assertEqual(3, len(result), "Should have returned a length of '3'")
        print("API test successfully returned a list of '3' ")
        print(result)
