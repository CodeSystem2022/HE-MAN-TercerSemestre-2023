import self as self

from logger_base import log

class Persona: #Clase Persona

	def __init__(self, id_persona, nombre, apellido, email):
		self._id_persona = id_persona
		self._nombre = nombre
		self._apellido = apellido
		self._email = email
	def __str__(self):

		return f'''
			id	Persona:{self._id_persona},
			Nombre:{self._nombre},
			Apellido:{self._apellido},
			Email:{self._email}
		'''
	#Metodos Getters and Setters
	@property
	def id_persona(self):
		return self._id_persona

	@id_persona.setter
	def nombre(self, id_persona):
		self._id_persona = id_persona

	@property
	def nombre(self):
		return self._nombre

	@nombre.setter
	def nombre(self, nombre):
		self._nombre = nombre

	@property
	def apellido(self):
		return self._apellido

	@apellido.setter
	def apellido(self,apellido):
		self._apellido = apellido

	@property
	def email(self):
		return self._email

	@email.setter
	def email(self, email):
		self._email = email

	# Prueba de la Clase Persona

if __name__ == '__main__':
	persona1 = Persona(1,'Juan',' Perez','perz@gmail.com')
	log.debug(persona1)

	persona2 = Persona(2,'Carlos',' Pechoi','pechoi@gmail.com')
	log.debug(persona2)

	persona1 = Persona(id_persona = 1)
	log.debug(persona1)