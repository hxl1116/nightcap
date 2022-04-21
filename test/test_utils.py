import requests


def get_rest_call(test, url, params=None, get_header=None, expected_code=200):
    response = requests.get(url, params, headers=get_header)
    test.assertEqual(expected_code, response.status_code, f'Response code to {url} not {expected_code}')
    return response.json()


def put_rest_call(test, url, params=None, put_header=None, expected_code=201):
    response = requests.put(url, params, headers=put_header)
    test.assertEqual(expected_code, response.status_code, f'Response code to {url} not {expected_code}')
    return response.json()


def post_rest_call(test, url, params=None, post_header=None, expected_code=200):
    response = requests.post(url, params, headers=post_header)
    test.assertEqual(expected_code, response.status_code, f'Response code to {url} not {expected_code}')
    return response.json()


def delete_rest_call(test, url, expected_code=200):
    response = requests.delete(url)
    test.assertEqual(expected_code, response.status_code, f'Response code to {url} not {expected_code}')
    return response.json()
