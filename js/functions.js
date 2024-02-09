let color = prompt("What color would you paint your dog?");

document.write("Heck yeah, " + color + " is an awesome color!\n");

let fish = prompt("How many fish did you catch?");

document.write("Damn, " + fish + " is a lot of fish!");



/*
    Function Name: takeDogsForWalk
    Parameter:
    Output:
    Return: 
*/
function takeDogsForWalk() {
    let allDone = false; 
    let tiredDogs = true; // do the work?
    let leashesAway = true; // do the work?

    if ( tiredDogs && leashesAway ) {allDone = true; }
    console.log(allDone);
    return allDone; 
}
//takeDogsForWalk()



/*
    Function Name: goSwimming
    Parameter: person
    Output: console messages (conditional)
    Return: none
*/
function goSwimming( person ) {
    if( person ) {
      console.log("Right on. Have a splash with " + person);  
    } else {
        console.log("No worries, it will still be a good time!")
    }
}
//goSwimming("Amber"); 
//goSwimming();








function doYouWatchShameless() {
    let shameless = confirm("Do you watch the TV show, Shameless?");
    if( shameless ) { return "Awesome, me too."; }
    else { return "I don't blame you. It's a heavy watch sometimes."; }
}
doYouWatchShameless()