try:
    x = int(input("Ingresa un número: "))
    y = int(input("Ingresa otro número: "))
    resultado = x / y
except ZeroDivisionError: #Si el segundo número es cero, se producirá una excepción ZeroDivisionError, se ejecutara el bloque else y se imprimira un error
    print("No es posible dividir entre cero")
else: # si la division es posible se ejecuta el else y se imprime que el resultado es posible
    print("El resultado de la división es:", resultado)



