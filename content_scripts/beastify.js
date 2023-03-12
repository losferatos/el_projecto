  if (window.hasRun) {
    return;
  }
  window.hasRun = true;
  
  const options = {
	method: 'GET',
	headers: {
		'User-Agent': 'RapidAPI Playground',
		'Accept-Encoding': 'identity',
		'X-RapidAPI-Key': '9405aa31e6mshe38dcd2addc059bp15c3d2jsn382226d7e291',
		'X-RapidAPI-Host': 'rocket-league1.p.rapidapi.com'
	}
};

fetch('https://rocket-league1.p.rapidapi.com/ranks/76561198132530802', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));