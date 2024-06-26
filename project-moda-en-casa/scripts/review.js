document.addEventListener("DOMContentLoaded", () => {
    // Increase revision counter in localStorage
    if (localStorage.getItem("reviewCount")) {
        localStorage.setItem("reviewCount", Number(localStorage.getItem("reviewCount")) + 1);
    } else {
        localStorage.setItem("reviewCount", 1);
    }

    // Show revision counter
    const reviewCount = localStorage.getItem("reviewCount");
    document.getElementById("review-count").textContent = `You have completed ${reviewCount} reviews.`;
});


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