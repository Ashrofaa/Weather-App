import React from 'react';
import GetWeather from './GetWeather';

export default function App() {

  const [userInput, setUserInput] = React.useState({
    'country': '',
    'city': ''
  });
  const [visible, setVisibilty] = React.useState(false);
  const [count, setCount] = React.useState(0);

  function handleChange(event) {
    let newName = event.target.name;
    let newValue = event.target.value;
    setUserInput(prevValues => {
      return {
        ...prevValues,
        [newName]: newValue
      }
    });
  }

  function handleClick() {
    let country = userInput.country;
    let city = userInput.city;
    setUserInput({
      'country' : country[0].toUpperCase() + country.slice(1).toLowerCase(),
      'city' : city[0].toUpperCase() + city.slice(1).toLowerCase()
    });
    setVisibilty(true);
    setCount(count + 1);
  }

  return (
    <div>
      <div>
        <label htmlFor='country'>Country: </label>
        <input id='country' type='text' name='country' onChange={handleChange} value={userInput.country}></input>
        <label htmlFor='city'>City: </label>
        <input id='city' type='text' name='city' onChange={handleChange} value={userInput.city}></input>
        <button type='button' onClick={handleClick}>Set</button>
        {visible && <GetWeather userInput={userInput} count={count} />}
      </div>
    </div>
  )
}
