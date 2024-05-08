// Created the variable weather for insert the code html
let weather = document.querySelector("#weather");
weather.innerHTML = `
    <h2 class="weather-title">Weather</h2>
        <picture class="hero-2">
            <source media="(max-width: 739px)" srcset="./images/place/clima.svg"/>
            <img src="./images/place/clima.svg" alt="sun-and-cloud" width="100px" height="100px" class="image"/>
        </picture>
    <h3>Temperature: <span> 16°C </span></h3>
    <h3>Conditions: <span> Partly Cloudy</span></h3>
    <h3>Wind: <span> 5 km/h </span></h3>
    <h3>Wind Chill: <span id="windChill"></span></h3>`;

// This function could calculate the wind chill for °C   
    const calculateWindChill = (temperature, windSpeed) => {
        // Check if the conditions for calculating the thermal sensation are met
        if (temperature <= 10 && windSpeed > 4.8) {
            // Calculate wind chill using the Wind Chill formula
            let windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
            return windChill.toFixed(1) + " °C";
        } else {
            // If conditions are not met, display "N/A"
            return "N/A";
        }
    }
    
    // Define static variables for temperature and wind speed
    const temperature = 10; // Temperature in degrees Celsius
    const windSpeed = 5; // Wind speed in kilometers per hour
    
    // Calculate the wind chill factor
    const windChill = calculateWindChill(temperature, windSpeed);
    
    // Show wind chill factor in HTML
    document.getElementById("windChill").textContent = windChill;

// Create the global variables
const year = document.querySelector("#currentyear");
const modified = document.querySelector("#lastModified");

// I created this arrow funtion only for have the date and hour. Function to format the date
const formatDate = (date) => {
    let options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };
    return date.toLocaleDateString("es-ES", options);
}

// Use the date object
const today = new Date();
const oLastModif = new Date(document.lastModified);
const formattedDate = formatDate(oLastModif);

// assigning to variable "year" the current date
year.innerHTML = `${today.getFullYear()}`;

// assigning to variable modified the last modication
modified.innerHTML = ` Last Modification: ${formattedDate}`;