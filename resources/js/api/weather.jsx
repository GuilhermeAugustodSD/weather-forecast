
const autoCompleteRequisition = async (search) => {
  const response = await fetch(route(`weather.getAutoCompleteLocation`, { search: search }), {
    method: 'GET',
  })
    .then(response => response.json())
    .catch(error => console.error('Error:', error));

  return response
}

const fetchDataWeather = async (search) => {
  const response = await fetch(route(`weather.getWeather`, { search: search }), {
    method: 'GET',
  })
    .then((response) => response.json())
    .catch((error) => console.error('Error:', error));

  return response
}

export { autoCompleteRequisition, fetchDataWeather }
