#Para leer un archivo hay varios modos, el primero es el modo R que es por defecto.

archivo = open('prueba.txt','r' encoding='utf8') # Abrimos el archivos y la r (read - leer ) es para leer el archivo
print (archivo.read())
print(archivo.read(15))# Mostrar los primeros 15 caracteres de la primer letra del archivo.txt
print(archivo.read(7))#Continuamos desde linea anterior 
print(archivo.readline())#Nos lee la primer linea del texto dentro del archivo.txt
# Agregamos o anexamos informacion al archivos
# La letra a  (append - anexa) lo que hacemos es agregar informacion
archivo = open('prueba.txt','a' encoding='utf8')

# La letra x lo que hace es para crear un archivo especificado
archivo = open('prueba.txt','x' encoding='utf8')