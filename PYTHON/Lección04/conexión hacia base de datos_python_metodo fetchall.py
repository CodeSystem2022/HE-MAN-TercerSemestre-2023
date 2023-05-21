import psycopg2 # para conectars a Postgrade

conexion = psycopg2.connect(
    user = 'postgres',
    password = 'admin',
    host = '127.0.0.1',
    port = '5432',
    database='test_bs'
)
cursor = conexion.cursor()
sentencia = 'SELECT * FROM persona'
cursor.execute(sentencia) # así ejecutamos la sentencia
registros = cursor.fetchall()#recuperamos los registros que serán una lista
