archivo = open('prueba.txt','r' encoding='utf8')

#Vamos  a iterar el archivo, cada una de las lineas

for linea in archivo:
	print(linea) #ietramos todos los elementos del archivo


print(archivo.readlines()) # accedemos al archivos y nos muestra todo como si fuera una lista, separada por coma
print(archivo.readlines()[1]) # nos muestra solamente la linea 1 o la que pongamos nosotros, lo ponemos entre corchete ya q se toma el archivo como si fuera una lista
