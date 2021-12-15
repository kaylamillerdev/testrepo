// Switch statements

// The syntax

/*switch(expression){
    case a:
        // stuff to be executed
        break;
    case b:
        // stuff to be executed
        break;
    case c:
        // stuff to be executed
        break;
    default:
        // stuff to be executed if none of the other cases match
        break;
}*/

// Example of switch statement

function testingSwitchStatements(){

    // Declare a variable of type const
    const isMatinee = prompt("Are you going to the matinee?");

    switch(isMatinee){
        case "yes":
            alert("Yay! We are excited to see you!");
            break; // Pulls you out of the switch statement because there is no point in testing the rest (the conditions were met for this case)

        case "no":
            alert("Aww! We will miss you. Hope to see you next time!");
            break;

        default:
            alert("invalid response. Please try again!");
            break;
    }
}

// calling the function
testingSwitchStatements();