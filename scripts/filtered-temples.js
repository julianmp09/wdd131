// The funtions for hamburger button.

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Add temples
const templesElement = document.querySelector(".figure-container");
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Caracas Venezuela",
      location: "Caracas, Venezuela",
      dedicated: "2000, August, 20",
      area: 1425,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/caracas-venezuela/800x450/caracas_venezuela_temple_detail_1691066_2400x1200.jpg"
    },
    {
      templeName: "Buenos Aires Argentina",
      location: "Buenos Aires, Argentina",
      dedicated: "1986, January, 17",
      area: 50000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/800x500/buenos-airies-argentina-temple-1009069-wallpaper.jpg"
    },
    {
      templeName: "Cordoba Argentina",
      location: "Cordoba City, Argentina",
      dedicated: "2015, May, 17",
      area: 20959,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cordoba-argentina/800x500/cordoba-argentina-temples-buildings-1436937-wallpaper.jpg"
    },
    {
      templeName: "Rome Italy",
      location: "Rome Italy",
      dedicated: "2019, March, 10",
      area: 60700,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/800x500/6-Rome-Temple-2160338.jpg"
    },
    {
      templeName: "Lisbon Portugal",
      location: "Lisbon, Portugal",
      dedicated: "2019, September, 15",
      area: 2205,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lisbon-portugal/800x500/03-045a97e8471a9f581e927698521a1d184f4b3753.jpeg"
    },
  ];

const displayTemples = (temples) =>{
    temples.forEach(temple => {
        let figure = document.createElement("figure");
        let figcaption = document.createElement("figcaption");
        let name = document.createElement("h3");
        let dedication = document.createElement("p");
        dedication.classList.add("title-card");
        let location = document.createElement("p");
        location.classList.add("title-card");
        let area = document.createElement("p");
        location.classList.add("title-card");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        figure.appendChild(figcaption)
        figcaption.appendChild(name)
        figcaption.appendChild(location)
        figcaption.appendChild(dedication)
        figcaption.appendChild(area)
        figcaption.appendChild(img)

        document.querySelector(".figure-container").appendChild(figure);

        // Another way of make the HTML with DOM
        // const figure = document.createElement("figure");
        // figure.innerHTML = `
        // <figcaption>
        //     <h3>${temple.templeName}</h3>
        //     <p>Location: ${temple.location}</p>
        //     <p>Dedicated: ${temple.dedicated}</p>
        //     <p>Size: ${temple.area} sq ft</p>
        // </figcaption>
        // <img src="${temple.imageUrl} " alt="${temple.templeName}" loading="lazy">`;
        // templesElement.appendChild(figure);
    })
}

displayTemples(temples);

//Include temples according to their characteristics

const oldTemples = document.querySelector("#old");

oldTemples.addEventListener("click", () => {
    document.querySelector(".figure-container").innerHTML = "";
    let filtaredTemples = temples.filter(temple => Number(temple.dedicated.split(",")[0] < 1900));
    displayTemples(filtaredTemples);
})

const newTemples = document.querySelector("#new");

newTemples.addEventListener("click", () => {
    document.querySelector(".figure-container").innerHTML = "";
    let filtaredTemples = temples.filter(temple => Number(temple.dedicated.split(",")[0] > 2000));
    displayTemples(filtaredTemples);
})

const largeTemples = document.querySelector("#large");

largeTemples.addEventListener("click", () => {
    document.querySelector(".figure-container").innerHTML = "";
    let filtaredTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(filtaredTemples);
})

const smallTemples = document.querySelector("#small");

smallTemples.addEventListener("click", () => {
    document.querySelector(".figure-container").innerHTML = "";
    let filtaredTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(filtaredTemples);
})

const homeTemples = document.querySelector("#home");

homeTemples.addEventListener("click", () => {
    document.querySelector(".figure-container").innerHTML = "";
    displayTemples(temples);
})

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