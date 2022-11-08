import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Schmackvolles Schnitzel',
            'Ein köstliches Schnitzel',
            'https://img.chefkoch-cdn.de/rezepte/1547301261293255/bilder/1430637/crop-960x720/das-echte-wiener-schnitzel.jpg',
            [
                new Ingredient('Fleisch', 2),
                new Ingredient('Panier', 1)
            ]),
        new Recipe(
            'Big Burger',
            'Der klassische Burger',
            'https://www.gutekueche.at/storage/media/recipe-category/7755/conv/burger-rezepte-default.jpg',
            [
                new Ingredient('Tomate', 2),
                new Ingredient('Brot', 2)
            ])
    ];

    getRecipes(){
        return this.recipes.slice();
    }

}