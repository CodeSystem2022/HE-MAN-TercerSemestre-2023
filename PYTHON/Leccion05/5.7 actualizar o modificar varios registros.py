import psycopg2 # esto es para poder conectar postgre
conexion = psycopg2.connect(
    user="postgres",
    password ="admin",
    host="127.0.0.1",
    port="5432",
    database="test_bd"
)
try:
    with conexion:
        with conexion.cursor() as cursor: #cierra el cursor  no hace falta hacerlo automatico
            sentencia = "UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s"
            valores = ('juan carlos','Roldan','rcarlos@gmail.com', 1 )
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()
