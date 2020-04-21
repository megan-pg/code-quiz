// Set the body to a variable
var body = document.body;

// Create all necessary elements
var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var h2El = document.createElement("h3");
var questionsEl = document.createElement("div");
var answersEl = document.createElement("div");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// Store our li elements in a variable
var listItems = document.getElementsByTagName("li");

// Set the text content of relevant elements
h1El.textContent = "Deep Space Nine Challenge";
h2El.textContent = "Try to answer for the highest score before time runs out!";
questionsEl.textContent = "";
answersEl.textContent = "Choose One";
li1.textContent = "";
li2.textContent = "";
li3.textContent = "";
li4.textContent = "";

// Append all of our elements
body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(h3El);
body.appendChild(infoEl);
infoEl.appendChild(nameEl);
body.appendChild(answersEl);
answersEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

// Questions and Answers?
var listEl = document.querySelector("#grocery-list");
var shoppingCartEl = document.querySelector("#shopping-cart");
var groceries = ["Bananas", "Apples", "Oranges", "Grapes", "Blueberries"];

listEl.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.matches("button")) {
        var item = document.createElement("div");
        item.textContent = groceries[event.target.parentElement.id];
        shoppingCartEl.append(item);
    }
});