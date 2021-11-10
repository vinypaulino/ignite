import express, { response } from 'express';

const app = express();

app.use(express.json());

app.get("/heathcheck", (request, response) => {
    return response.json({message: "OK!"});
})

app.listen(3333, () => console.log("Server is running!"));