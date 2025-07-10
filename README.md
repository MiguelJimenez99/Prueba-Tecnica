# 🗳️ API de Votación

Este proyecto es una API REST creada con Node.js, Express y MongoDB que simula un sistema de votación. Permite registrar votantes y candidatos, emitir votos, y obtener estadísticas del proceso electoral.

---

## 🚀 Instrucciones para ejecutar el proyecto localmente

### 1. Clonar el repositorio

```bash
git clone https://github.com/🔁TU_USUARIO/🔁TU_REPOSITORIO.git
cd 🔁TU_REPOSITORIO
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
npm start
```

El servidor estará disponible en:  
📍 `http://localhost:3000`

---

## 📬 Endpoints disponibles

### ➕ Registrar votante

`POST /api/voter/newVoter`

```json
{
  "name": "Carlos Pérez",
  "email": "carlos@email.com"
}
```

---

### ➕ Registrar candidato

`POST /api/candidate/newCandidate`

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
  "total_voters_that_voted": 5,
  "total_votes": 5,
  "votes_by_candidate": {
    "Ana Gómez": 3,
    "Luis Pérez": 2
  },
  "percentage_by_candidate": {
    "Ana Gómez": "60.00%",
    "Luis Pérez": "40.00%"
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

## 📘 Documentación Swagger

Una vez levantado el servidor, puedes consultar la documentación interactiva aquí:

👉 `http://localhost:3000/api-docs`

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