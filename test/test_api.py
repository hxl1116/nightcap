import unittest
import json
from util import *


class TestExample(unittest.TestCase):
    def test_api(self):
        result = get_rest_call(self, 'http://localhost:5000/example_api')
        self.assertEqual(3, len(result), "Should have returned a length of '3'")
        print("API test successfully returned a list of '3' ")
        print(result)
