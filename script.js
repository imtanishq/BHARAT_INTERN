function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
  }
  
  function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  
  function convertCelsiusToKelvin(celsius) {
    return celsius + 273.15;
  }
  
  function convertKelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }
  
  function updateTemperatures() {
    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusInput = document.getElementById("celsius");
    const kelvinInput = document.getElementById("kelvin");
  
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = parseFloat(celsiusInput.value);
    const kelvin = parseFloat(kelvinInput.value);
  
    if (!isNaN(fahrenheit)) {
      celsiusInput.value = convertFahrenheitToCelsius(fahrenheit).toFixed(2);
      kelvinInput.value = convertCelsiusToKelvin(
        convertFahrenheitToCelsius(fahrenheit)
      ).toFixed(2);
    } else if (!isNaN(celsius)) {
      fahrenheitInput.value = convertCelsiusToFahrenheit(celsius).toFixed(2);
      kelvinInput.value = convertCelsiusToKelvin(celsius).toFixed(2);
    } else if (!isNaN(kelvin)) {
      celsiusInput.value = convertKelvinToCelsius(kelvin).toFixed(2);
      fahrenheitInput.value = convertCelsiusToFahrenheit(
        convertKelvinToCelsius(kelvin)
      ).toFixed(2);
    }
  }
  
  document.getElementById("convertBtn").addEventListener("click", updateTemperatures);