from manejoArchivos import manejoArchivos
#Manejo de contexto with (es una forma mas simplicada para abrir una archivo.txt y mostrar su contenido y cerrar el archivo)
with open('prueba.txt','r' encoding='utf8') as archivo:
	 print(archivo.read())

# No hace falta ni el try, ni el finally
# En el contexto de with lo que se ejecuta de manera automatica son los metodos (enter)
# Utiliza diferentes metodos: __ enter__ (es donde se habre el recuros)
# El otro es el metodo __exit__  (el el metodo que cierra el recurso)

with manejoArchivos('prueba.txt) as archivo:
	print(archivo.read())