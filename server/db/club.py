from psycopg2.sql import SQL, Identifier

from utils import fetch_many, fetch_one, commit


def get_all_clubs():
    """ Get all clubs """
    return fetch_many("SELECT * FROM club")


def get_club(name):
    """ Get one club by name """
    return fetch_one("SELECT * FROM club WHERE name = %s", (name,))


def insert_club(**kwargs):
    """ Insert a new club """
    commit("""
        INSERT INTO club (name, genre, city, capacity, threshold) VALUES (%s)
    """, (tuple(kwargs.values())))


def update_club(id, **kwargs):
    """ Update a club's info """
    if len(kwargs) == 1:
        query = SQL("""
            UPDATE club SET {} = %s WHERE id = %s
        """).format(SQL(', ').join(map(Identifier, list(kwargs.keys()))))

        commit(query, (tuple(kwargs.values()), id))
    else:
        query = SQL("""
            UPDATE club SET ({}) = %s WHERE id = %s
        """).format(SQL(', ').join(map(Identifier, list(kwargs.keys()))))

        commit(query, (tuple(kwargs.values()), id))


def delete_club(id):
    """ Delete a club """
    commit("""
    DELETE FROM club WHERE id = %s
""", (id,))
