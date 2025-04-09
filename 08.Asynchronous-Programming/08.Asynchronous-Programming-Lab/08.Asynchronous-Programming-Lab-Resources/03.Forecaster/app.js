async function attachEvents() {
  let btn = document.getElementById('submit');
  btn.addEventListener('click', onClick);

  async function onClick(e) {
    e.preventDefault();
    let input = document.getElementById('location').value;
    let locationLink = `http://localhost:3030/jsonstore/forecaster/locations`;

    try {
      // Get locations
      let response = await fetch(locationLink);
      let data = await response.json();

      // Find the location by name
      let loc = data.find((l) => l.name.toLowerCase() === input.toLowerCase());
      
      if (!loc) {
        throw new Error('Location not found');
      }

      // Get current weather
      let todayLink = `http://localhost:3030/jsonstore/forecaster/today/${loc.code}`;
      let tResponse = await fetch(todayLink);
      let tData = await tResponse.json();

      // Visualise the current weather
      let forecast = document.getElementById('forecast');
      forecast.style.display = 'block';
        
      let symbol = checkSymbol(tData.forecast.condition);

      let current = document.getElementById('current');
      let forecasts = document.createElement('span');
      forecasts.className = 'forecasts';
      current.appendChild(forecasts);

      let conditionSymbol = document.createElement('span');
      conditionSymbol.className = 'condition symbol';
      conditionSymbol.innerHTML = symbol;
      forecasts.appendChild(conditionSymbol);

      let condition = document.createElement('span');
      condition.className = 'condition';

      let forecastData1 = document.createElement('span');
      forecastData1.className = 'forecast-data';
      forecastData1.textContent = tData.name;
      condition.appendChild(forecastData1);

      let forecastData2 = document.createElement('span');
      forecastData2.className = 'forecast-data';
      forecastData2.textContent = `${tData.forecast.low}°/${tData.forecast.high}°`;
      condition.appendChild(forecastData2);
      
      let forecastData3 = document.createElement('span');
      forecastData3.className = 'forecast-data';
      forecastData3.textContent = tData.forecast.condition;
      condition.appendChild(forecastData3);

      forecasts.appendChild(condition);

      // Get the 3 day forecast
      let threeDayLink = `http://localhost:3030/jsonstore/forecaster/upcoming/${loc.code}`;
      let threeDayResponse = await fetch(threeDayLink);
      let threeDayData = await threeDayResponse.json();

      //Add 3 day forecast
      let forecastInfo = document.createElement('div');
      forecastInfo.className = 'forecast-info';
      let upcomingDiv = document.getElementById('upcoming');
      upcomingDiv.appendChild(forecastInfo);

      threeDayData.forecast.forEach(day => {
        let upcomingSpan = document.createElement('span');
        upcomingSpan.className = 'upcoming';

        let symbol = checkSymbol(day.condition);
        upcomingSpan.innerHTML = `
        <span class="symbol">${symbol}</span>
        <span class="forecast-data">${day.low}°/${day.high}°</span>
        <span class="forecast-data">${day.condition}</span>`;
        forecastInfo.appendChild(upcomingSpan);
      });
    } catch (error) {
      
      let forecast = document.getElementById('forecast');
      forecast.style.display = 'block';
      forecast.textContent = 'Error';
    }
  }

  //Check for symbols
  function checkSymbol(condition) {
    switch (condition) {
      case 'Sunny':
        return '&#x2600;'; 
      case 'Partly sunny':
        return '&#x26C5;'; 
      case 'Overcast':
        return '&#x2601;'; 
      case 'Rain':
        return '&#x2614;'; 
      default:
        return ''; 
    }
  }
}

attachEvents();