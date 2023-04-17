#codigo de PYTHON
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