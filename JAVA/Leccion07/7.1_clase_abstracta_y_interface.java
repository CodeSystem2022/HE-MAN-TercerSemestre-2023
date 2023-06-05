/*  CLASE ABSTRACTAS Y INTERFACES

En Java, tanto las clases abstractas como las interfaces son mecanismos que permiten definir
contratos y proporcionar abstracciones en la programación orientada a objetos. Aunque ambos
conceptos tienen similitudes, también existen diferencias importantes. Aquí te explico las diferencias
clave entre clases abstractas e interfaces en Java:

Clase abstracta:

1. Una clase abstracta es una clase que no se puede instanciar directamente, es decir, no se pueden
crear objetos de ella. Se utiliza como una superclase para proporcionar una base común para las
subclases.
2. Puede contener variables miembro, métodos concretos (implementados) y métodos abstractos
(sin implementación).
3. Puede tener constructores, lo que permite inicializar variables y realizar tareas comunes.
4. Puede extender solo una clase abstracta o una clase concreta, limitando la herencia a una sola 
clase.
5. Permite lograr una implementación parcial de la funcionalidad compartida entre las subclases, ya 
que los métodos abstractos deben ser implementados por las subclases.

Interface:

1. Una interfaz en Java es un contrato que especifica un conjunto de métodos que una clase debe
implementar. Define qué se debe hacer, pero no cómo se debe hacer.
2. Solo puede contener métodos abstractos y constantes (variables estáticas y finales).
3. No puede tener constructores, ya que no puede ser instanciada directamente.
4. Una clase puede implementar múltiples interfaces, permitiendo la implementación de múltiples 
contratos.
5. Proporciona una forma de lograr la herencia múltiple en Java, ya que una clase puede 
implementar varias interfaces.
6. Se utiliza para definir un comportamiento común que puede ser compartido por diferentes clases, 
incluso si esas clases no están relacionadas entre sí.

En resumen, una clase abstracta se utiliza principalmente para proporcionar una base común para la
herencia, mientras que una interfaz se utiliza para definir contratos que pueden ser implementados
por diferentes clases, incluso si no están relacionadas entre sí. Las clases abstractas pueden tener
métodos implementados y pueden extender una clase concreta, mientras que las interfaces solo 
pueden tener métodos abstractos y pueden ser implementadas por múltiples clases. */