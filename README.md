# API de Votación

Este proyecto es una API REST creada con Node.js, Express y MongoDB que simula un sistema de votación. Permite registrar votantes y candidatos, emitir votos, y obtener estadísticas del proceso electoral.
ademas tambien nos permite listar a los votantes, los candidatos y los diferente votos registrados asi como tambien podemos acceder a sus datos de manera individual y aparte de eso tambien nos permite eliminar a votantes y candidatos.
---

## Instrucciones para ejecutar el proyecto localmente

### 1. Clonar el repositorio

```bash
git clone https://github.com/MiguelJimenez99/Prueba-Tecnica.git
cd Prueba-Tecnica
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Crear archivo `.env`

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
# MongoDB local
PUERTO=3000
URL_DATABASE=mongodb://localhost:27017/votaciones

# MongoDB Atlas (opcional)
# URL_DATABASE=mongodb+srv://usuario:clave@cluster.mongodb.net/votaciones
```

### 4. Iniciar el servidor

```bash
npm run dev
```

El servidor estará disponible en:  
`http://localhost:3000`

---

### Ejemplo de uso con insomnia

1. Abre Insomnia y crea una nueva **solicitud** según el método (POST, GET, DELETE, etc.).

**Ejemplo crear votante: solicitud POST**

2. URL: `http://localhost:3000/api/voters`
3. En **Body**, selecciona `JSON` y coloca:

```json
{
  "name": "Carlos Pérez",
  "email": "carlos@email.com"
}
```

Haz clic en Send y deberías recibir una respuesta como:

```json
{
  "message": "Nuevo votante registrado correctamente"
}
```

## Endpoints disponibles

### Registrar votante

`POST /api/voters`

**Ejemplo :**

```json
{
  "name": "Carlos Pérez",
  "email": "carlos@email.com"
}
```
---
### listar votantes

`GET /api/voters`

**Ejemplo de salida:**

si hay votantes registrados.

```json
{
	"message": "Votantes obtenidos correctamente",
	"voters": [
		{
			"_id": "686fb139bffe1cb0c9dee2e7",
			"name": "Miguel Alejandro Jimenez Arteta",
			"email": "migueljimenez1234@gmail.com",
			"has_voted": true,
			"__v": 0
		},
		{
			"_id": "686fb1e0bffe1cb0c9dee2ea",
			"name": "Camilo Andres Herrera Ortiz",
			"email": "camiloherrera1234@gmail.com",
			"has_voted": true,
			"__v": 0
		},
		{
			"_id": "686fb203bffe1cb0c9dee2ed",
			"name": "Nohelia Redondo Ortiz",
			"email": "noheliaredondo1234@gmail.com",
			"has_voted": true,
			"__v": 0
		}
	]
}
```

Si no hay votantes registrados.

```json
{
  "message": "No hay votantes registrados",
  "voters": []
}
```
---
### Obtener detalles de votante por id

`GET /api/voters/id`

**Ejemplo de salida:**

si el votante esta registrado

```json
{
	"message": "detalles del votante obtenidos correctamente",
	"voter": {
		"_id": "686fb139bffe1cb0c9dee2e7",
		"name": "Miguel Alejandro Jimenez Arteta",
		"email": "migueljimenez1234@gmail.com",
		"has_voted": true,
		"__v": 0
	}
}
```
si el votante no esta registrado.

```json
{
  "message": "Votante no se encuentra registrado"
}
```
---

### Eliminar un votante por id
`DELETE /api/voters/id`

**Ejemplo de salida:**

si el id del votante existe.

```json
{
   "message": "Votante eliminado correctamente"
}
```

si el id del votante no existe.

```json
{
   "message": "Error al eliminar, votante no registrado"
}
```

---

### Registrar candidato

`POST /api/candidates`

**Ejemplo :**

```json
{
  "name": "Ana Gómez",
  "party": "Partido Verde"
}
```
---

### Listar candidatos

`GET /api/candidates`

**Ejemplo :**

Si hay candidatos registrados.

```json

{
	"message": "Candidatos obtenidos correctamente",
	"candidates": [
		{
			"_id": "686fb297bffe1cb0c9dee2f1",
			"name": "Ana Milena Alba de la Hoz",
			"party": "Partido verde",
			"votes": 4,
			"__v": 0
		},
		{
			"_id": "686fb324bffe1cb0c9dee2f5",
			"name": "Yerlin Molina Coronell",
			"votes": 2,
			"__v": 0,
			"party": "Partido rojo"
		}
	]
}

```

Si no hay candidatos registrados.

```json
{
  "message": "No hay candidatos registrados",
  "voters": []
}
```

---

### Obtener detalles de candidato por id

`GET /api/candidates/id`

**Ejemplo :**

Si el candidato esta registrados.

```json
{
	"message": "Detalles del candidato obtenido correctamente",
	"candidate": {
		"_id": "686fb297bffe1cb0c9dee2f1",
		"name": "Ana Milena Alba de la Hoz",
		"party": "Partido verde",
		"votes": 4,
		"__v": 0
	}
}

```

Si el candidato no esta registrados.

```json
{
  "message": "El candidato no se encuentra registrado"
}

```
### Eliminar un candidato por id
`DELETE /api/candidates/id`

**Ejemplo de salida:**

si el id del candidato existe.

```json
{
   "message": "Candidato eliminado correctamente"
}
```

si el id del candidato no existe.

```json
{
   "message": "Error al eliminar, candidato no registrado"
}
```
---

### Emitir un voto

`POST /api/votes`

```json
{
  "voter_id": "ID_DEL_VOTANTE",
  "candidate_id": "ID_DEL_CANDIDATO"
}
```

---

### Obtener todos los votos

`GET /api/votes`

**Ejemplo :**

si hay votos registrados.

```json
{
	"message": "Votos registrados",
	"votes": [
	{
		"_id": "686fb4c0bffe1cb0c9dee317",
		"voter_id": {
			"_id": "686fb139bffe1cb0c9dee2e7",
			"name": "Miguel Alejandro Jimenez Arteta",
			"email": "migueljimenez1234@gmail.com"
		},
		"candidate_id": {
			"_id": "686fb324bffe1cb0c9dee2f5",
			"name": "Yerlin Molina Coronell",
			"party": "Partido rojo"
		},
		"__v": 0
	},
	{
		"_id": "686fb4d8bffe1cb0c9dee31d",
		"voter_id": {
			"_id": "686fb1e0bffe1cb0c9dee2ea",
			"name": "Camilo Andres Herrera Ortiz",
			"email": "camiloherrera1234@gmail.com"
		},
		"candidate_id": {
			"_id": "686fb297bffe1cb0c9dee2f1",
			"name": "Ana Milena Alba de la Hoz",
			"party": "Partido verde"
		},
		"__v": 0
	},
	{
		"_id": "686fb4f3bffe1cb0c9dee326",
		"voter_id": {
			"_id": "686fb203bffe1cb0c9dee2ed",
			"name": "Nohelia Redondo Ortiz",
			"email": "noheliaredondo1234@gmail.com"
		},
		"candidate_id": {
			"_id": "686fb297bffe1cb0c9dee2f1",
			"name": "Ana Milena Alba de la Hoz",
			"party": "Partido verde"
		},
		"__v": 0
	}
	]
}

```

si no hay votos registrados

```json
{
  "message": "No hay votos registrados",
  "votes": []
}
```

---

### 📊 Obtener estadísticas

`GET /api/votes/statistics`

**Ejemplo de respuesta:**

```json
{
	"message": "Estadistica optenidas correctamente",
	"statistics": {
		"votesByCandidate": {
			"Yerlin Molina Coronell": 1,
			"Ana Milena Alba de la Hoz": 2
		},
		"percentageCandidate": {
			"Yerlin Molina Coronell": "33.33%",
			"Ana Milena Alba de la Hoz": "66.67%"
		},
		"totalVotersVoted": 3
	}
}
```

---

## Capturas de estadísticas

A continuación se muestran capturas del endpoint `/votes/statistics` en insomnia:

![Captura de estadísticas](./src/assets/capturas/Estadisticas_votaciones.png)

---

## Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB + Mongoose
- Dotenv


