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
            sentencia = "DELETE FROM persona WHERE id_persona =%s"
            entrada = input("digite el numero de registro a eliminar")
            valores = (entrada, )
            cursor.execute(sentencia, valores)# De esta manera ejecutamos la sentencia
            registros_eliminados = cursor.rowcount#ingresamos cada columna
            print(f"Los registros Eliminados son: {registros_eliminados}")

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()
