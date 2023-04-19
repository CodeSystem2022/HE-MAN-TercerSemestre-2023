<<<<<<< HEAD
#codigo de PYTHON
=======

>>>>>>> master
try :
    a = int(input("digite un numero")) #agregamos input
    b = int(input("digite otro numero"))
    resultado = a / b
except TypeError as e:
    print(f"TypeError - Ha ocurrido un Error{type(e)} ")
except ZeroDivisionError as e:
    print(f"ZeroDivisionError -Ha ocurrido un ERROR {type(e)} ")
except Exception as e:
    print(f"Ocurrio un error : {e} ")

print(f"El resultado es {resultado} ")
<<<<<<< HEAD

# Procesamiento de excepciones
resultado = None
a = 10
b = 0
try :
    resultado = a / b
except Exception as e:
    print(f"Ocurrio un error : {e} ")

print(f"El resultado es {resultado} ")
print("seguimos...")
=======
>>>>>>> master
