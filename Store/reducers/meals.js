import {MEALS} from '../../data/dummy-data';
import { TOGGLE_FAVORITE , TOGGLE_FILTER } from '../actions/meals';

const initialState={
    meals:MEALS ,
    filteredMeals:MEALS,
    favouriteMeals:[],
}

const mealReducer =(state= initialState , action)=>{
   switch(action.type)
   {
    case TOGGLE_FAVORITE:
        const existingIndex = state.favouriteMeals.findIndex(meal => meal.id == action.mealId);
        if(existingIndex>=0){
            const updateFavMeals= [...state.favouriteMeals];
            updateFavMeals.splice(existingIndex,1);
            return {...state , favouriteMeals:updateFavMeals}
        }else{
            const meal = state.meals.find(meal => meal.id == action.mealId);
            return{...state, favouriteMeals:state.favouriteMeals.concat(meal)}
        }
    case TOGGLE_FILTER:
        const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: updatedFilteredMeals };    
    default:
        return state    
   }
}

export default mealReducer;