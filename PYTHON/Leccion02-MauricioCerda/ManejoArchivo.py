#Declaramos una variable, la cual necesitamos un metodo (open ())

try:
	archivo = open('prueba.txt', 'w', encoding='utf8') #Aca abrimos el archivo  prueba.txt,  w quiere decir escribir (write) y encoding es para las palabras con acentos
	archivo.write('Programamos con diferentes tipos de archivo, ahora en txt.\n') # Con esto lo q hacemos es agregar algo al archivo txt
	archivo.write('Los acentos son importantes para las palabras\n')
	archivos.write('como por ejemplo: acciòn, ejecuciòn y producciòn\n')
	archivo.write('\nt esta es para texto o text, \nb es para archivos binario,\nw+ es un modo combinado y sirve para lee y escribe, \nr+ es un modo combinado y sirve para abrir y leer y escribir\n')
	archivo.write('Con esto terminamos!!!!!')
except Exception as e: # Aca lo que hacemos es si llega a saltar un error, podremos ver que tipo de error es con el Exception a traves de la palabra e 
	print (e) # aca mostra el tipo de error
finally: # siempre se ejecuta el finally 
	archivo.close() # con esto se cierra el archivo y si queremos poner mas cosas al archivo.txt ya no podremos  

archivo.write('Todo quedo perfecto!') # aca salta un error ya que el archivo.txt ya se cerro. Todo tiene un orden como lo hicimos arriba 