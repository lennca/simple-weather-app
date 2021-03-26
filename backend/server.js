import express from 'express'

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.static('public'))

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`))