import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoute = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoute.post("/", (request, response) => {
    const {name, description} = request.body;

    const categoryAlreadyExists = categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
        return response.status(400).json({error: "Category Already exists!"})
    }
    categoriesRepository.create({name, description});
    
    return response.status(201).send();
});

categoriesRoute.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.status(200).json(all);
});

export { categoriesRoute }