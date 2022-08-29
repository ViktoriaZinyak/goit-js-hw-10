export default function fetchCountries(inputValue) {
  const url = `https://restcountries.com/v2/name/${inputValue}?fields=name,capital,population,flag,languages`;
  return fetch(url).then(response => response.json());
  // .then(data => data);
}
