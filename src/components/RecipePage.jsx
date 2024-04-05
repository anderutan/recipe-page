import Recipe from '../data/Recipe';
import Ingredients from './Ingredients';
import PreparationTime from './PreparationTime';

export default function RecipePage() {
  console.log(Recipe);
  return (
    <div>
      {Recipe.map((recipe, index) => (
        <div key={index} className='bg-white text-dark-charcoal font-body'>
          <img src={recipe.image} alt='' className='' />
          <div className='p-8'>
            <h1 className='text-[36px] font-title font-medium leading-10 mb-5'>
              {recipe.title}
            </h1>
            <p className='font-light mb-5'>{recipe.description}</p>
            <PreparationTime prepareTime={recipe.preparationTime} />
            <Ingredients ingredients={recipe.ingredients} />
          </div>
        </div>
      ))}
    </div>
  );
}
