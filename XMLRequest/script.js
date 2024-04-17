// First HTTP Request

// https://restcountries.com/v3.1/name/{name}

const countriesContainer = document.querySelector('.countries');

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = (JSON.parse(this.response))
    // console.log()
    console.log(data)

    const html = `
    <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
			+data.population / 1000000
		).toFixed(1)} people</p>
     
    </div>
  </article>
    `;

    countriesContainer.insertAdjacentHTML('afterbegin', html);
    countriesContainer.style.opacity = 1;
  })
}

function renderCountry(data) {
  const html = `
    <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
			+data.population / 1000000
		).toFixed(1)} people</p>
     
    </div>
  </article>
    `;

  countriesContainer.insertAdjacentHTML('afterbegin', html);
  countriesContainer.style.opacity = 1;
}

// getCountryData('niger')
// getCountryData('puerto')
// getCountryData('germany')


const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.response);
    console.log(data);

    // Render our first country
    renderCountry(data)

    const [neighbour] = data.borders;

    // Making second call for Neighbour
    const request = new XMLHttpRequest();
	  request.open('GET', `https://restcountries.com/v3.1/name/${neighbour}`);
	  request.send();

    request.addEventListener('load', function () {
      const [data] = JSON.parse(this.response);
		console.log(data);

		// Render our neighbouring country
		renderCountry(data);
    })


  })
}


getCountryAndNeighbour('nigeria');
getCountryAndNeighbour('spain')
getCountryAndNeighbour('canada')





/*
const getCountryAndNeighbour = function (country) {
	// AJAX call country 1
	const request = new XMLHttpRequest();
	request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
	request.send();

	request.addEventListener('load', function () {
		const [data] = JSON.parse(this.responseText);
		console.log(data);

		// Render country 1
		renderCountry(data);

		// Get neighbour country (2)
		const [neighbour] = data.borders;

		if (!neighbour) return;

		// AJAX call country 2
		const request2 = new XMLHttpRequest();
		request2.open(
			'GET',
			`https://restcountries.eu/rest/v2/alpha/${neighbour}`
		);
		request2.send();

		request2.addEventListener('load', function () {
			const data2 = JSON.parse(this.responseText);
			console.log(data2);

			renderCountry(data2, 'neighbour');
		});
	});
};
*/
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('germany');
*/