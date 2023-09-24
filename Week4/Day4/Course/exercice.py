import psycopg2

DB_NAME = "hollywood"
USER = "postgres"
PASSWORD = "917364"
HOST = "localhost"
PORT = "5432" #5433

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

# -------------------------------------------

# cursor = connection.cursor()

# def create_table(table_name: str):

#     query = f'''
#     create table {table_name}(
#         id serial primary key,
#         num integer not null
#     );
#     '''

#     # Execute the query
#     cursor.execute(query)
#     # Make changes to the database
#     connection.commit()

# create_table("table1")
# create_table("table2")

# def insert_into_table(table_name: str, num_value:int):
#     query = f'''
#     insert into {table_name}
#     value ({num_value})
#     '''
#     cursor.execute(query)
#     connection.commit()
# insert_into_table("table1", 100)
# insert_into_table("table1", 150)

# table_name = 'table1'
# query = f'''
# select * from {table_name}
# '''

# cursor.execute(query)
# output = cursor.fetchall()

# print(output)

# # At the end, close the connection
# connection.close()