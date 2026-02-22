// – взяти https://dummyjson.com/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.


const recipesDiv = document.getElementById('recipes');

fetch('https://dummyjson.com/recipes')
	.then(value => value.json())
	.then(recipesObject => {
		const { recipes } = recipesObject;

		for (const recipe of recipes) {

			const div = document.createElement('div');
			div.classList.add('recipe-container');

		
			const divWithInfo = document.createElement('div');
			divWithInfo.innerHTML = `
				<p>UserId: ${recipe.userId}</p>
				<p>Rating: ${recipe.rating}</p>
				<p>Review count: ${recipe.reviewCount}</p>
				<p>Meal type: ${recipe.mealType}</p>
			`;

		
			const title = document.createElement('h2');
			title.innerText = recipe.name;

	
			const img = document.createElement('img');
			img.src = recipe.image;

		
			const ingredientsTitle = document.createElement('h3');
			ingredientsTitle.innerText = 'Ingredients:';

			const ingredientsList = document.createElement('ul');

			for (const ingredient of recipe.ingredients) {
				const li = document.createElement('li');
				li.innerText = ingredient;
				ingredientsList.appendChild(li);
			}


			const instructions = document.createElement('p');
			instructions.innerText = recipe.instructions;

			div.append(
				title,
				img,
				divWithInfo,
				ingredientsTitle,
				ingredientsList,
				instructions
			);

			recipesDiv.appendChild(div);
		}
	});


