from ManejodeArchivo import ManejoArchivos

with ManejoArchivos('archivo.txt') as archivo:
    print(archivo.read())
