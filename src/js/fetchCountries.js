export default function fetchCountries(inputE) {
  const url = `https://restcountries.com/v2/name/${inputE}?fields=name,capital,population,flag,languages`;
  return fetch(url).then(response => response.json());
  // .then(data => data);
}
