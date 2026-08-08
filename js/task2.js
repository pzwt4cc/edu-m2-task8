const city = 'Київ, Львів, Одеса, Харків';

const cityArray = city.split(', ');

cityArray.push('Дніпро');

const resultCity = cityArray.join(' - ');

console.log(resultCity);
