// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {
    myName.innerHTML = "Will";
    myHobby.innerHTML = "I like to play videogames";
    myLocation.innerHTML = "Freddy Fazbear Pizzeria"
});

image1Button.addEventListener("mouseover", function() {
    image.src = "https://media1.tenor.com/m/UdqKHuwbEL4AAAAC/freddy-fazbear.gif"
});

image2Button.addEventListener("click", function() {
    image.src = "https://otakuowlet.com/cdn/shop/files/00033439914_02.jpg?v=1725422646"
});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.





// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.


// BONUS
// 7. Try using different event types for your buttons.
