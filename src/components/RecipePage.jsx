import Recipe from '../data/Recipe';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import Nutrition from './Nutrition';
import PreparationTime from './PreparationTime';

export default function RecipePage() {
  console.log(Recipe);
  return (
    <div className='dt:--dt-style'>
      {Recipe.map((recipe, index) => (
        <div
          key={index}
          className='bg-white text-dark-charcoal font-body dt:p-10 dt:rounded-xl'
        >
          <img src={recipe.image} alt='' className='rounded-lg' />
          <div className='p-8'>
            <h1 className='text-[36px] font-title font-medium leading-10 mb-5'>
              {recipe.title}
            </h1>
            <p className='font-light mb-5'>{recipe.description}</p>
            <PreparationTime prepareTime={recipe.preparationTime} />
            <Ingredients ingredients={recipe.ingredients} />
            <Instructions instructions={recipe.instructions} />
            <Nutrition
              nutrition={recipe.nutrition}
              nutritionInfo={recipe.nutritionInfo}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
