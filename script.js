const getNutritionAPI = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5ef0a389f2msh11866c287896cb0p101bc7jsn1c10fa4b94f1",
    "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
  },
};
let variable = "Tuna"
fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${variable}`,getNutritionAPI)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
  
const fitnessOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5ef0a389f2msh11866c287896cb0p101bc7jsn1c10fa4b94f1',
		'X-RapidAPI-Host': 'calories-burned-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=skiing', fitnessOptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));