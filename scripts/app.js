// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.


// if we do a if statement to see if the name starts with either 'R' or 'r' 
// if it does then we return the proper string
// if it doesnt't then return the other string
function areYouPlayingBanjo(name){
    if(name[0] == "r" || name[0] == "R"){
        return name + " plays banjo";
    }else{
        return name + " does not play banjo";
    }
}