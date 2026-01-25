// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)



// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами

// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом

// ========================




let coursesArray = [
	{
		title: 'JavaScript Complex',
		monthDuration: 5,
		hourDuration: 909,
		modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
	},
	{
		title: 'Java Complex',
		monthDuration: 6,
		hourDuration: 909,
		modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
	},
	{
		title: 'Python Complex',
		monthDuration: 6,
		hourDuration: 909,
		modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
	},
	{
		title: 'QA Complex',
		monthDuration: 4,
		hourDuration: 909,
		modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
	},
	{
		title: 'FullStack',
		monthDuration: 7,
		hourDuration: 909,
		modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
	},
	{
		title: 'Frontend',
		monthDuration: 4,
		hourDuration: 909,
		modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
	}
];



const container = document.createElement('courses-container');

for (const course of coursesArray) {
	const courseDiv = document.createElement('div');
	courseDiv.classList.add('course');

	const titleDiv = document.createElement('div');
	titleDiv.classList.add('property');

	const titleLabel = document.createElement('div');
	titleLabel.classList.add('property-title');
	titleLabel.textContent = `Title: ${course.title}`;
	titleDiv.appendChild(titleLabel);

	const monthDiv = document.createElement('div');
	monthDiv.classList.add('property');
	const monthLabel = document.createElement('div');
	monthLabel.classList.add('property-title');
	monthLabel.classList.add('box');
	monthLabel.textContent = `Month Duration: ${course.monthDuration}`;
	monthDiv.appendChild(monthLabel);

	const hourDiv = document.createElement('div');
	hourDiv.classList.add('property');


	const hourLabel = document.createElement('div');
	hourLabel.classList.add('property-title');
	hourLabel.classList.add('box1');
	hourLabel.textContent = `Hour Duration: ${course.hourDuration}`;
	hourDiv.appendChild(hourLabel);

	const modulesDiv = document.createElement('div');
	modulesDiv.classList.add('property');

	const modulesLabel = document.createElement('div');
	modulesLabel.classList.add('property-title');
	modulesLabel.textContent = 'Modules:';
	const modulesList = document.createElement('ul');
	modulesList.classList.add('modules-list');

	for (const module of course.modules) {
		const li = document.createElement('li');
		li.textContent = module;
		modulesList.appendChild(li);
	}

	modulesDiv.appendChild(modulesLabel);
	modulesDiv.appendChild(modulesList);

	courseDiv.appendChild(titleDiv);
	courseDiv.appendChild(monthDiv);
	courseDiv.appendChild(hourDiv);
	courseDiv.appendChild(modulesDiv);

	container.appendChild(courseDiv);
}
document.body.appendChild(container);

