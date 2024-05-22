//
document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { id: "fc-1888", name: "flux capacitor", avg_rating: 4.5 },
        { id: "fc-2050", name: "power laces", avg_rating: 4.7 },
        { id: "fs-1987", name: "time circuits", avg_rating: 3.5 },
        { id: "ac-2000", name: "low voltage reactor", avg_rating: 3.9 },
        { id: "jj-1969", name: "warp equalizer", avg_rating: 5.0 }
    ];

    const productSelect = document.getElementById("product");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
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