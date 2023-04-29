#declaramos una variable
try:
    archivo = open('prueba.txt', 'w',encoding='utf8') #La w es de write que significa escribir
    archivo.write('programamos con diferentes tipos de archivos, ahora en txt\n')
    archivo.write('Los acentos son importantes para las palabras \n')
    archivo.write('como por ej: acción ,ejecución y producción\n')
    archivo.write('#las letras son: ''\n r: read ''\n w: write ''\n a: append''\n x: crea un archivo ')
    archivo.write('\n n: para texto txt \n n: archivos binarios \n w+ escribir y leer')
    archivo.write('con esto terminamos')
except Exception as e:
    print(e)
finally: # siempre se ejecuta:
    archivo.close() #con esto se va a cerrar el archivo
#  archivo.write('todo quedo correctamente') <-------ESTO ES UN ERROR