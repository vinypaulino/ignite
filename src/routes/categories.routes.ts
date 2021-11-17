import { Router } from "express";

import { Category } from "../model/Category";

const categoriesRoute = Router();

const categories: Category[] = [];

categoriesRoute.post("/", (request, response) => {
    const {name, description} = request.body;

    const category = new Category();
    
    Object.assign(category, {
        name,
        description,
        created_at: new Date()
    });
    
    categories.push(category);
    console.log(categories);
    return response.status(201).send();
})

export { categoriesRoute }