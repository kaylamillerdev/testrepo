//clean switch statement (best practice)
switch(expression){
    case 1 :
        // some code here
        break;
    case 2:
        // some code here
        // more code here
        break;
    case 3:
        // some code here
        // more code here
        // even more code here
        break;
    case 4: 
        /*some code here more code here even more code here ome code here more code here even more code hereome code here more code here even more code hereome code here more code here even more code hereome code here more code here even more code here */ 
        break; 
}

//Not clean switch statement (NOT reccomended)
switch(expression){
    case 1: /*some code here*/ break;
    case 2: /*some code here more code here */ break;
    case 3: /*some code here more code here even more code here */ break;
    case 4: /*some code here more code here even more code here ome code here more code here even more code hereome code here more code here even more code hereome code here more code here even more code hereome code here more code here even more code here */ break; 
}

switch(expression){
    case 1 :
        console.log("Case 1");
        break;
    case 2:
        console.log("Case 2");
        console.log("Case 2");
        break;
    case 3:
        console.log("Case 3");
        console.log("Case 3");
        console.log("Case 3");
        break;
}
