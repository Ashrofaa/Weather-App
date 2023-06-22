import React from 'react';

export default function GetWeather({userInput, count}) {


    
    const [key, setKey] = React.useState();
    const [degree, setDegree] = React.useState();
    React.useEffect(() => {
        let urlLocation = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=ReGBM40TYhEgZf6jSjrL9H2b084tYhci&q=" + userInput.city;
        fetch(urlLocation)
        .then(response => {
            if (response.ok) {
                return response.json();
            } 
            throw response;})
        .then(json => setKey(json.filter(c => c.Country.LocalizedName === userInput.country)[0].Key));
    }, [count]);
    React.useEffect(() => {
        let urlWeather = "http://dataservice.accuweather.com/currentconditions/v1/" + key + "?apikey=ReGBM40TYhEgZf6jSjrL9H2b084tYhci";
        fetch(urlWeather)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then(json => setDegree(json[0].Temperature.Metric.Value))
        .catch(e => console.log(e));
    }, [key]);

  return (
    <div>
      {key && <h1>It is now {degree}°C in {userInput.city}</h1>}
    </div>
  )
}
