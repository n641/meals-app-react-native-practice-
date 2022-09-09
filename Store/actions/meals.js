export const TOGGLE_FAVORITE ='TOGGLE_FAVORITE';
export const TOGGLE_FILTER ='TOGGLE_FILTER';


export const togglrFavorite = (id)=>{
    return {type: TOGGLE_FAVORITE, mealId:id}
} 


export const setFilters = (filterSettings)=>{
    return {type: TOGGLE_FILTER, filters: filterSettings}
} 