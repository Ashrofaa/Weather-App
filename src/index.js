// const url = "http://dataservice.accuweather.com/currentconditions/v1/126995?apikey=ReGBM40TYhEgZf6jSjrL9H2b084tYhci";
// let code = 126995;

// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json[0].Temperature.Metric.Value));

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);