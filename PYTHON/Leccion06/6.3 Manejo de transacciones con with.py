import  psycopg2  as bd # Esto es para poder conectarse a postgre

conexion = bd.connect(

        user=  'postgres',
        password= 'admin',
        host=  '127.0.0.1',
        port= '5432',
        database ='test_bd'

)
try:
        with conexion:
                with conexion.cursor() as cursor:
                        sentencia = 'INSERT INTO persona(nombre, apellido, gmail) VALUES (%s, %s, %s)'
                        valores = ('Marta', 'Coco', 'marta@gmail.com')
                        cursor.execute(sentencia, valores)
                        

                        sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, gmail=%s WHERE id_persona=%s'
                        valores = ('Juan', 'Jutre', 'jutris@gmail.com', 1)
                        cursor.execute(sentencia, valores)

except Exception as e:
        print(f'Ocurrio un erro, se hizo un rollback: {e}')
finally:
        conexion.close()

print('Termina la transaccion')
# htpps://www.psycopq.org/docs/usage.html