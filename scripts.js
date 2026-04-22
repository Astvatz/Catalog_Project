/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const San_Fernando_Valley_URL = 
  "https://upload.wikimedia.org/wikipedia/commons/e/e2/San_Fernando_Valley_vista.jpg";
const San_Gabriel_Valley_URL =
  "https://upload.wikimedia.org/wikipedia/commons/e/e6/SanGabrielMountains.jpg";
const South_Bay_URL =
  "https://bunny-wp-pullzone-aoqpl4b4bk.b-cdn.net/wp-content/uploads/2022/03/Redondo-beach-South-Bay-LA-860x573.jpg";
// This is an array of strings (TV show titles)
const laCountyAreas = {
  "San Fernando Valley": [
    { name: "Burbank", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Burbank_media_district_from_Griffith_Park_2015-11-07.jpg/1920px-Burbank_media_district_from_Griffith_Park_2015-11-07.jpg" },
    { name: "Calabasas", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Airborne_over_Calabasas%2C_California.jpg/960px-Airborne_over_Calabasas%2C_California.jpg" },
    { name: "Glendale", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Glendale%2C_California_skyline.jpg/960px-Glendale%2C_California_skyline.jpg" },
    { name: "Hidden Hills", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Long_Valley_Road_gate%2C_Hidden_Hills%2C_California.jpg/500px-Long_Valley_Road_gate%2C_Hidden_Hills%2C_California.jpg" },
    { name: "Los Angeles", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/960px-Los_Angeles_with_Mount_Baldy.jpg" },
    { name: "San Fernando", image: "https://www.sylmarneighborhoodcouncil.org/assets/photos/13/page63f4912a2d1ec.jpg" }
  ],
  "San Gabriel Valley": [
    { name: "Alhambra", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Alhambra%2C_CA.jpg/500px-Alhambra%2C_CA.jpg" },
    { name: "Arcadia", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_msI2m1Pp1_vpg-s4d8RbQ-DIXOIN7Op7w&s" },
    { name: "Azuza", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Azusa_City_Hall.jpg/500px-Azusa_City_Hall.jpg" },
    { name: "Baldwin Park", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Baldwin_Park_City_Hall_Complex.JPG/500px-Baldwin_Park_City_Hall_Complex.JPG" },
    { name: "Claremont", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Verbal_Building_and_intersection%2C_Claremont%2C_California_%28cropped%29.jpg/500px-Verbal_Building_and_intersection%2C_Claremont%2C_California_%28cropped%29.jpg" },
    { name: "Covina", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Covina_Downtown.jpg/500px-Covina_Downtown.jpg" },
    { name: "Duarte", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Statue_of_Andr%C3%A9s_Avelino_Duarte_%28Duarte%2C_California%29.png/500px-Statue_of_Andr%C3%A9s_Avelino_Duarte_%28Duarte%2C_California%29.png" },
    { name: "El Monte", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Friendly_El_Monte.jpg/500px-Friendly_El_Monte.jpg" },
    { name: "Glendora", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Glendora_Village.jpg/500px-Glendora_Village.jpg" },
    { name: "Industry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFwzVUk4SuzT9kDkxjEa3tX9acfQjmj9AoKQ&s" },
    { name: "Irwindale", image: "https://www.irwindaleca.gov/ImageRepository/Document?documentID=4800" },
    { name: "La Canada Flintridge", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/La_Ca%C3%B1ada_Flintridge_%26_the_210_Freeway.jpg/500px-La_Ca%C3%B1ada_Flintridge_%26_the_210_Freeway.jpg" },
    { name: "La Puente", image: "https://lapuente.org/wp-content/uploads/2022/06/City-of-La-Puente-Welcome-smushed-300x169.webp" },
    { name: "Monrovia", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Monrovia_CA_San_Gabriel_Mountains_i210.JPG/500px-Monrovia_CA_San_Gabriel_Mountains_i210.JPG" },
    { name: "Monterey Park", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Monterey_Park_January_2013_002.jpg/500px-Monterey_Park_January_2013_002.jpg" },
    { name: "Pasadena", image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Pasadena_City_Hall_David_Wakely_%28cropped%29.jpg" },
    { name: "Pomona", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Downtown_Pomona_04_-_panoramio.jpg/330px-Downtown_Pomona_04_-_panoramio.jpg" },
    { name: "Rosemead", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTujDJiEEdLMV1gpOtfGJG2l5Bs2o05DmSOpw&s" },
    { name: "San Dimas", image: "https://us1-photo.nextdoor.com/post_photos/88/a0/88a00b65f7c344178f9444238e385550" },
    { name: "San Gabriel", image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/I_Like_a_Place_with_Benches_%286315511083%29_%28cropped%29.jpg" },
    { name: "San Marino", image: "https://imagescdn.homes.com/i2/GcOuoxicvxDnNgJeHIzX-A92RZ07OgXHPj2SLeqpmCs/117/san-marino-ca-3.jpg?p=1" },
    { name: "South El Monte", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfIl6BQFdJbRPU6RPxnL6zpIid87xG0uNmg&s" },
    { name: "Temple City", image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Temple_City_Park.jpg" },
    { name: "West Covina", image: "https://i.ytimg.com/vi/Pk_Wuo-4ycA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDG66Bh-OgCnDDZlTYLZundTUXDeQ" }
  ],
  "South Bay": [
    { name: "Carson", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Carson_city_hall.jpg/500px-Carson_city_hall.jpg" },
    { name: "El Segundo", image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/New_El_Segundo_welcome_sign.jpg" },
    { name: "Gardena", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Gardena_High_School_2024_Feb.jpg/250px-Gardena_High_School_2024_Feb.jpg" },
    { name: "Hawthorne", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhPo-Yns-s1HYg_SzOTXAeA4Ke9oIAUb_ydA&s" },
    { name: "Hermosa Beach", image: "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/3f232be2-2c15-4383-8b32-14d49e199d8d" },
    { name: "Inglewood", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XYTIkUj70dD66c-XF6wIUEs8aD7rzug8JQ&s" },
    { name: "Lawndale", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyKnABCT879dBXj1hKzBj_9_jP3yIeywa2tw&s" },
    { name: "Lomita", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl0P3lj6kN2WaVHqhHyRl18xgxxFp4oRi6Ng&s" },
    { name: "Manhattan Beach", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7llp1wecMUJU5qB9r3rM0SWNkrRLm9ppmjA&s" },
    { name: "Palos Verdes Estates", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnf13TjAct-PY9_LuAhLbxfWkVTtbXFpqISg&s" },
    { name: "Rancho Palos Verdes", image: "https://cms.inspirato.com/ImageGen.ashx?image=%2Fmedia%2F9472173%2Fimage-1-hero-shot.jpg&width=1081.5" },
    { name: "Redondo Beach", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpGbMmJvIvp399N5f0ApMHjsFG8YzJXevsoA&s" },
    { name: "Rolling Hills", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFmRWNORjlmDVAp_N1WN_jhK1caSOeaUpaBA&s" },
    { name: "Rolling Hills Estates", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPOwd6MYx0pV2gA8ybYlgRa5-KTyPbII3HQ&s" },
    { name: "Torrance", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfpzw9Gi8xtRQcojezmTeGcVfIORg8T4THcQ&s" }
  ],
};

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.getElementById("card-template"); // ← updated
  const titles = Object.keys(laCountyAreas); // ["San Fernando Valley", "San Gabriel Valley", "South Bay"]
  const imageURLs = [San_Fernando_Valley_URL, San_Gabriel_Valley_URL, South_Bay_URL];

  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];
    let imageURL = imageURLs[i];

    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, title, imageURL);
    cardContainer.appendChild(nextCard);
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  card.querySelector("h2").textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // Add list of cities below the image
  let cityList = card.querySelector("ul");
  if (!cityList) {
    cityList = document.createElement("ul");
    card.querySelector(".card-content").appendChild(cityList);
  }
  cityList.innerHTML = "";

  for (const city of laCountyAreas[newTitle]) {
    const li = document.createElement("li");
    li.textContent = city.name;
    cityList.appendChild(li);
  }

  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", function () {
  showCards();
  buildDropdown();
});


function getRandomCity() {
  const regions = Object.keys(laCountyAreas);
  const randomRegion = regions[Math.floor(Math.random() * regions.length)];
  const cities = laCountyAreas[randomRegion];
  const randomCity = cities[Math.floor(Math.random() * cities.length)];

  const templateCard = document.getElementById("card-template");
  const randomCard = templateCard.cloneNode(true);
  randomCard.style.display = "block";
  randomCard.querySelector("h2").textContent = randomCity.name;
  randomCard.querySelector("img").src = randomCity.image;
  randomCard.querySelector("img").alt = randomCity.name;
  randomCard.querySelector("ul").innerHTML = "";  // ← clears the city list

  const resultContainer = document.getElementById("random-city-result");
  resultContainer.innerHTML = "<h2>Random City</h2>";
  resultContainer.appendChild(randomCard);
}



function buildDropdown() {
  const container = document.getElementById("dropdown-container");

  const select = document.createElement("select");
  const defaultOption = document.createElement("option");
  defaultOption.textContent = "-- Select a Region --";
  defaultOption.value = "";
  select.appendChild(defaultOption);

  for (const region of Object.keys(laCountyAreas)) {
    const option = document.createElement("option");
    option.value = region;
    option.textContent = region;
    select.appendChild(option);
  }

  select.addEventListener("change", function () {
    const cityCardContainer = document.getElementById("city-card-container");
    cityCardContainer.innerHTML = "";

    const selectedRegion = this.value;
    if (!selectedRegion) return;

    const templateCard = document.getElementById("card-template"); // ← here

    for (const city of laCountyAreas[selectedRegion]) {
      const newCard = templateCard.cloneNode(true);
      newCard.style.display = "block";

      newCard.querySelector("h2").textContent = city.name;
      newCard.querySelector("img").src = city.image;
      newCard.querySelector("img").alt = city.name;
      newCard.querySelector("ul").innerHTML = "";

      cityCardContainer.appendChild(newCard);
    }
  });

  container.appendChild(select);
}