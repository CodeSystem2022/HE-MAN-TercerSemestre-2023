
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

# exepciones personalizadas en python
try:
     a = int(input(" digite el primer numero: "))
     b = int(input(" digite el segundo numero: "))
     if a == b:
        raise NumerosIgualesException("Son numeros iguales") # la palabra raise nos permite arrojar cualquier excepcion
     resultado = a / b # modificamos
except TypeError as e:
    print(f"TypeError - ocurrio un error: {type(e)}")
except ZeroDivisionError as e:
     print(f"ZeroDivisionError - ocurrio un error: {type(e)}")
except Exception as e:
      print(f"ocurrio un error: {type(e)}")
  else:
      print("No se arrojo ninguna excepcion")
  finally: # siempre se va a ejecutar
      print("ejecucion de este bloque finalizada")

print(f"el resultado es: {resultado}")
print("seguimos")