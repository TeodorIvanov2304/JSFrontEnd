function oddOccurences(elements){
    let elementCount = {};

    //Split all elements by ' '
    let tokens = elements.split(' ');

    //For each token
    for(let token of tokens) {

        //Cast the token to new variable - toLowerCase
        let lower = token.toLowerCase();

        //Check if item with the same key exists. If don't create it and set the count to 1
        if(elementCount.hasOwnProperty(lower)){
            elementCount[lower]++;
        }
        else {
            elementCount[lower] = 1;
        }
    }

    //Create array with only the keys, where value % 2 != 0
    let filtered = Object.entries(elementCount)
    .filter(o => o[1] % 2 != 0)
    //Take only the keys
    .map(([key,value]) => key)
    .join(' ');

    //Print result
    console.log(filtered);
}

oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurences('Cake IS SWEET is Soft CAKE sweet Food');