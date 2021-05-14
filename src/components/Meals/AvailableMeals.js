import Card from '../UI/Card'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Udon Noodle',
    description: 'A single, dense noodle in Miso ramen soup.',
    price: '5.99',
  },
  {
    id: 'm2',
    name: 'Rice Noodle',
    description: 'Delicious rice noodle cooked to perfection.',
    price: '5.99',
  },
  {
    id: 'm3',
    name: 'Sweet and Sour Chicken',
    description: 'Chicken that is both sweet and sour.',
    price: '7.99',
  },
  {
    id: 'm4',
    name: 'Barbeque Pork',
    description: 'Slow cooked pork in red sauce.',
    price: '8.99',
  }
]

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => <MealItem 
    key={meal.id} 
    name={meal.name} 
    description={meal.description} 
    price={meal.price}/>)

  return <section className={classes.meals}>
    <Card>
      <ul>
        {mealsList}
      </ul>
    </Card>
  </section>
}

export default AvailableMeals