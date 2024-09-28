import MealItem from "./MealsItems";


export default function MealsGrid({meals}:any) {
    return(
       <ul className="mx-auto my-8 max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {meals.map((meal:any) => <li key={meal.id}>
            <MealItem {...meal}/>
        </li>)}
       </ul>
    )
}