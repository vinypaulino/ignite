import express, { response } from 'express';
import { categoriesRoute } from './routes/categories.routes';

const app = express();

app.use(express.json());

app.use(categoriesRoute);

app.get("/heathcheck", (request, response) => {
    return response.json({message: "OK!"});
})

app.listen(3333, () => console.log("Server is running!"));