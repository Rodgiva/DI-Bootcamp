import requests
import json

import psycopg2

from random import randint

DB_NAME = "countries"
USER = "postgres"
PASSWORD = "917364"
HOST = "localhost"
PORT = "5432"

try:
    connection = psycopg2.connect(
        dbname = DB_NAME,
        user = USER,
        password = PASSWORD,
        host = HOST,
        port = PORT
    )
    
except Exception as err:
    print(f"Error :{err}")

url = "https://restcountries.com/v3.1/all"

class country_manager:
    @staticmethod
    def add_country(name, capital, flag, subregion, population):
        cursor = connection.cursor()
        query = f'''
        insert into Country (name, capital, flag, subregion, population)
        values ('{name}', '{capital}', '{flag}', '{subregion}', '{population}')
        '''
        cursor.execute(query)
        connection.commit()
        cursor.close()

    @staticmethod
    def add_ten_coutries():
        res = requests.get(url)
        data = res.json()
        for _ in range(100):
            rand_nb = randint(0, len(data))
            print(rand_nb)
            try:
                country_name = json.dumps(data[rand_nb]["name"]["common"]).replace("\"", "")
                country_capital = json.dumps(data[rand_nb]["capital"][0]).replace("\"", "").replace("\'", "")
                country_flag = json.dumps(data[rand_nb]["flag"]).replace("\"", "")
                country_subregion = json.dumps(data[rand_nb]["subregion"]).replace("\"", "")
                country_population = json.dumps(data[rand_nb]["population"])
                country_manager.add_country(country_name, country_capital, country_flag, country_subregion, country_population)
            except Exception as err:
                print(f"Error :{err}")

country_manager.add_ten_coutries()
# country_manager.add_country("France")

# res = requests.get("https://restcountries.com/v3.1/all")
# data = res.json()
# print(json.dumps(data[48]["capital"][0], indent=1))