// format REST Countries API response to keep same structure
// as data.json(to be used in offline mode)
const responseRemap = (reponseData) => reponseData.map((country) => ({
  name: country.name.common,
  native: Object.keys(country.name.nativeName).map((nativeName) => ({
    common: country.name.nativeName[nativeName].common,
    official: country.name.nativeName[nativeName].official,
  }))[0]?.common,
  capital: country.capital[0],
  flags: country.flags,
  topLevelDomain: country.tld,
  region: country.region,
  subregion: country.subregion,
  population: country.population,
  currencies: Object.keys(country.currencies).map((currency) => ({
    code: currency,
    name: country.currencies[currency].name,
    symbol: country.currencies[currency].symbol,
  })),
  languages: Object.keys(country.languages).map((language) => ({
    iso639_2: language,
    name: country.languages[language],
  })),
  alpha2Code: country.cca2,
  alpha3Code: country.cca3,
  altSpellings: country.altSpellings,
  borders: country.borders,
}));

export default responseRemap;
