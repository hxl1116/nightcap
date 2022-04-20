import psycopg2
import yaml
import os

res = '../res/db/'


def connect():
    yml_path = os.path.join(os.path.dirname(__file__), res, 'db.yml')

    with open(yml_path, 'r') as file:
        config = yaml.load(file, Loader=yaml.FullLoader)

    return psycopg2.connect(dbname=config['database'],
                            user=config['user'],
                            password=config['pass'],
                            host=config['host'],
                            port=config['port'])


def exec_file(path):
    full_path = os.path.join(os.path.dirname(__file__), res, f'{path}')
    conn = connect()
    cur = conn.cursor()
    with open(full_path, 'r') as file:
        cur.execute(file.read())
    conn.commit()
    conn.close()


def fetch_one(sql, args=None):
    conn = connect()
    cur = conn.cursor()
    cur.execute(sql, args)
    one = cur.fetchone()
    conn.close()
    return one


def fetch_many(sql, args=None):
    conn = connect()
    cur = conn.cursor()
    cur.execute(sql, args)
    list_of_tuples = cur.fetchall()
    conn.close()
    return list_of_tuples


def commit(sql, args=None):
    conn = connect()
    cur = conn.cursor()
    result = cur.execute(sql, args)
    conn.commit()
    conn.close()
    return result
