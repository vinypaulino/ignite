import { Router } from "express";

const categoriesRoute = Router();

const categories = [];

categoriesRoute.post("/categories", (request, response) => {
    const {name, description} = request.body;

    categories.push({
        name,
        description
    });

    return response.status(201).send();
})

export { categoriesRoute }