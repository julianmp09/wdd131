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