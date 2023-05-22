import psycopg2 # para conectars a Postgrade

conexion = psycopg2.connect(
    user = 'postgres',
    password = 'admin',
    host = '127.0.0.1',
    port = '5432',
    database='test_bd'
)
cursor = conexion.cursor() #un cursor es un objeto que permite ejecutar sentencias 
sentencia = 'SELECT * FROM persona'
sentencia2= 'INSERT INTO persona(nombre,apellido, email) VALUES (%s,%s,%s)'
datos = ('Jorge', 'Almirón','jorgealmironboquita@mail.com')
cursor.execute(sentencia2, datos)
conexion.commit()
cursor.execute(sentencia) # así ejecutamos la sentencia

registros = cursor.fetchall()#recuperamos los registros que serán una lista

print(registros)

cursor.close()
conexion.close()



