from os import name
import sqlite3
import pandas as pd
import json

initial = pd.read_csv(r'C:\Users\willi\OneDrive\Documents\projeto\public\data\pokemon.csv')

data = pd.DataFrame(initial, columns=['name', 'hp', 'type1', 'type2', 'abilities'])

#print(data["name"])

conn = sqlite3.connect(r"C:\Users\willi\OneDrive\Documents\projeto\src\Database\database.sqlite")

def create():
    sql = '''CREATE TABLE Pokes(
        Name VARCHAR NOT NULL PRIMARY KEY,
        hp  INTEGER NOT NULL,
        Type VARCHAR NOT NULL,
        Secundary_type VARCHAR,
        Abilities VARCHAR ARRAY[1000]
    )'''
    cursor.execute(sql)
    conn.commit()

def insert():
    for row in data.itertuples():
        Name = row.name
        Hp = row.hp
        type1 = row.type1
        type2 = row.type2
        abilities = row.abilities
        try:
            sql = '''INSERT INTO Pokes(Name, hp, Type, Secundary_type) 
                VALUES
                ("{0}", {1}, '{2}', '{3}')'''.format(Name, Hp, type1, type2,abilities)
        
            cursor.execute( sql)
        except sqlite3.OperationalError:
            print(Name)
                
        conn.commit()

def exclude():
    cursor.execute('DROP TABLE Pokes')

cursor = conn.cursor()

#exclude()
create()
insert()

conn.close()