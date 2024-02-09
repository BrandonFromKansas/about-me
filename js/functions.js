//let color = prompt("What color would you paint your dog?");

//document.write("Heck yeah, " + color + " is an awesome color!\n");

//let fish = prompt("How many fish did you catch?");

//document.write("Damn, " + fish + " is a lot of fish!");


//Lab 07 code attempt
function dogShoes() {
    if (confirm ("Have you tried making your dog wear booties during walks? ")) {
        document.write("How did you do it?! Mine got so fed up that he just sits down until I take them off. ");
    } else {
        alert("No worries, my dog hates wearing them too. He refuses to move until I've taken them off."); 
    }
}
//dogShoes()



//Lab 07 code attempt 2
function petName() {
    let helloPet = prompt("What is your pet's name?");
    if (helloPet) {
        document.write("That's a great name for a pet!");
        return "Great name for a pet!";
    } else {
        document.write("No worries, pets are not for everyone!");
        return "No worries, pets are not for everyone!";
    }
}
//petName()



//Lab 08 code attempt: Loops
function favoriteColor() {

    let numberOfGuesses = 0;

    while ( numberOfGuesses < 2 ) {
        let answer = prompt("What is your favorite color?");
        if( answer != "black") {
            alert("Not bad. Good choice.")
            numberOfGuesses++;
        }
        else {
            alert("Oh YEAH!");
            break;
        }
    }
    document.write("Black is definitely the best!")
}
favoriteColor()















//ALL OF THE ONES BELOW ARE WORKS IN PROGRESS
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

