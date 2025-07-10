# 🗳️ API de Votación

Este proyecto es una API REST creada con Node.js, Express y MongoDB que simula un sistema de votación. Permite registrar votantes y candidatos, emitir votos, y obtener estadísticas del proceso electoral.
ademas tambien nos permite listar a los votantes, los candidatos y los diferente votos registrados asi como tambien podemos acceder a sus datos de manera individual.
---

## 🚀 Instrucciones para ejecutar el proyecto localmente

### 1. Clonar el repositorio

```bash
git clone https://github.com/MiguelJimenez99/Prueba-Tecnica.git
cd Prueba-tecnica
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Crear archivo `.env`

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
PUERTO=3000
URL_DATABASE=mongodb://localhost:27017/votaciones
```

### 4. Iniciar el servidor

```bash
npm run dev
```

El servidor estará disponible en:  
📍 `http://localhost:3000`

---

## 📬 Endpoints disponibles

### ➕ Registrar votante

`POST /api/voters`

**Ejemplo :**

```json
{
  "name": "Carlos Pérez",
  "email": "carlos@email.com"
}
```
---
### ➕ listar votantes

`GET /api/voters`

**Ejemplo :**

```json
[
	{
		"_id": "686f3165205e83e58eb82739",
		"name": "Miguel Alejandro Jimenez Arteta",
		"email": "migueljimenez1234@gmail.com",
		"has_voted": true,
		"__v": 0
	},
	{
		"_id": "686f318f205e83e58eb8273c",
		"name": "Yerlin Molina Padilla",
		"email": "yerlinmolina1234@gmail.com",
		"has_voted": true,
		"__v": 0
	},
	{
		"_id": "686f4ab03dbe99e0ad2c8a5f",
		"name": "Camilo Andres Hernandez Perez",
		"email": "camiloperez1234@gmail.com",
		"has_voted": true,
		"__v": 0
	}
]
```

---

### ➕ Registrar candidato

`POST /api/candidates`

**Ejemplo :**

```json
{
  "name": "Ana Gómez",
  "party": "Partido Verde"
}
```

---

### 🗳️ Emitir un voto

`POST /api/votes`

```json
{
  "voter_id": "ID_DEL_VOTANTE",
  "candidate_id": "ID_DEL_CANDIDATO"
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
			"candidate 1": 2,
			"Candidato 2": 1
		},
		"percentageCandidate": {
			"candidate 1": "66.67%",
			"Candidato 2": "33.33%"
		},
		"totalVotersVoted": 3
	}
}
```

---

## 📷 Capturas de estadísticas

📸 A continuación se muestran capturas del endpoint `/votes/statistics` en Postman:

> Guarda tus capturas en una carpeta llamada `capturas/`  
> y reemplaza los enlaces de imagen por los reales.

![Captura de estadísticas](./capturas/statistics_postman.png)

---

## 🧰 Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB + Mongoose
- Dotenv
- Swagger UI para documentación

---

## 👤 Autor

**Miguel Jiménez**  
🔗 GitHub: [https://github.com/🔁TU_USUARIO](https://github.com/🔁TU_USUARIO)

---

## 📜 Licencia

Este proyecto está bajo la licencia MIT.
