export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export const addIngredient = (ingredient) => ({
    type: ADD_INGREDIENT,
    payload: ingredient,
});

export const removeIngredient = (ingredientId) => ({
    type: REMOVE_INGREDIENT,
    payload: { ingredientId },
});