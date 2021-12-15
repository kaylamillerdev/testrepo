// Define some constants
const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;
const MATINEE_DISCOUNT = 3;

function buyTicket(){
    const age = prompt("What is your age?");
    const isAttending = prompt("are you attending a matinee");
    let cost = getBaseTicketCost(age);
    if((isAttending === 'yes') || (isAttending === 'y')){
        cost = cost - MATINEE_DISCOUNT;
    } 
    alert('Your ticket will cost: $' + cost);
}

function getBaseTicketCost(age){
    if((age <= 12) || (age >= 65)){
        return CHILD_AND_SENIOR_TICKET_COST;
    } else {
        return GENERAL_ADMISSION_TICKET_COST;
    }
}

// Their way