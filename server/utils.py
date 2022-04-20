import psycopg2
import yaml
import os

from psycopg2.extras import RealDictCursor

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


def cursor():
    conn = connect()
    cur = conn.cursor(cursor_factory=RealDictCursor)

    return conn, cur


def seed():
    conn, cur = cursor()

    cur.execute("CALL reload_club_data()")

    conn.commit()
    conn.close()


def exec_file(path):
    conn, cur = cursor()

    with open(os.path.join(os.path.dirname(__file__), res, f'{path}'), 'r') as file:
        cur.execute(file.read())

    conn.commit()
    conn.close()


def fetch_one(sql, args=None):
    conn, cur = cursor()

    cur.execute(sql, args)

    result = cur.fetchone()
    conn.close()

    return result


def fetch_many(sql, args=None):
    conn, cur = cursor()

    cur.execute(sql, args)

    results = cur.fetchall()
    conn.close()

    return results


def commit(sql, args=None):
    conn, cur = cursor()

    result = cur.execute(sql, args)

    conn.commit()
    conn.close()

    return result
