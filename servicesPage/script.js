class Ticket {
    constructor(ticketName, info, price) {
        this.name = ticketName;
        this.info = info;
        this.price = price;
    }
}

class Info {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}

let tickets = [];

async function loadTickets() {
    try {
        const response = await fetch('./info.json');
        const ticketsFromServer = await response.json();
        tickets = ticketsFromServer;
        console.log(tickets);
    } catch (error) {
        console.error('Error loading tickets:', error);
    }
}

loadTickets();

function info(id) {
    let abc = id;
    console.log(id);

    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].ticketName === id) {
            let infoNameText = tickets[i].ticketName
            document.getElementById("infoName").innerHTML = infoNameText;
            console.log(tickets[i]);
        } else {
            /*---ide még kellene valammi---*/
        }
        for (let j = 0; j < tickets[i].info.length; j++) {
            if (tickets[i].ticketName === id) {
                let infoDescriptionText = tickets[i].info[j].description;
                document.getElementById("infoDescription").innerHTML = infoDescriptionText;
                console.log(tickets[i].info[j]);
        }     else {
                /*---ide még kellene valammi---*/
            }   
        }
    }
}

let cart = [];
let totalPrice = 0;

function addToCart(id) {
    let def = id.id;
    console.log(id.id);

    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].ticketName === def) {
            let cartContentText = tickets[i].ticketName + " - " + tickets[i].price;
            document.getElementById("cartContent").innerHTML += cartContentText + "Ft" + "<br>";
            console.log(tickets[i]);
            totalPrice += tickets[i].price;
            console.log(totalPrice);
            document.getElementById("totalPrice").innerHTML = totalPrice + " Ft";
            cart.push(tickets[i].ticketName);
            console.log(cart);
        } else {
            /*---ide még kellene valammi---*/
        }
    }
}

function removeFromCart(id) {
    let ghi = id.id;
    console.log(id.id);

    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].ticketName === ghi) {
            let cartContentText = tickets[i].ticketName + " - " + tickets[i].price;
            document.getElementById("cartContent").innerHTML = document.getElementById("cartContent").innerHTML.replace(cartContentText + "Ft" + "<br>", "");
            totalPrice -= tickets[i].price;
            document.getElementById("totalPrice").innerHTML = totalPrice + " Ft";
            cart = cart.filter(item => item !== tickets[i].ticketName);
            console.log(cart);
        }
    }
}