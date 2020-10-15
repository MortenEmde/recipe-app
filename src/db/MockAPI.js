import { recipes, categories } from './MockData';

export function getRecipies(categoryId) {
  const recipesArray = [];
  recipes.map(recipe => {
    if (recipe.categoryId == categoryId) {
      recipesArray.push(recipe);
    }
  });
  return recipesArray;
};
