const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;
const MATINEE_DISCOUNT = 3;

var matchLowerY = /[^y]/;
var matchUpperY = /[^Y]/;

function buyTicket() {
    const age = prompt('What is your age?');
    const isMatinee = prompt ('Are you attending a matinee show?');
    let cost = matineeCost(isMatinee, age);
    alert("Your ticket will cost: $" + cost);
}

function getBaseTicketCost(age) {
    if ((age <= 12) || (age >= 65)) {
        return CHILD_AND_SENIOR_TICKET_COST;
    } else {
        return GENERAL_ADMISSION_TICKET_COST;
    }
}

function matineeCost(isMatinee, age) {
    if (isMatinee.match(matchLowerY) || isMatinee.match(matchUpperY))
    {
        return getBaseTicketCost(age) - MATINEE_DISCOUNT;
    } else { // if they answered no 
        return getBaseTicketCost(age);
    }  
}

    // MY WAY