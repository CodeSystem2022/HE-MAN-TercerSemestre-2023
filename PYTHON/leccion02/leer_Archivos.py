archivo = open('prueba.txt','r',encoding='utf8')
print(archivo.read())

archivo = open('prueba.txt','x',encoding='utf8') # las letras son: r,a,w,x
print(archivo.read())

print(archivo.read(5)) # Lee las primeras palabras
print(archivo.read(10)) # Continuamos desde la linea anterior
print(archivo.readline())
print(archivo.readline())
