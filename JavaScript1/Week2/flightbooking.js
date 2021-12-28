const getFullName = (firstname,lastname)=>{
    const input = `${firstname} ${lastname}`
    const inputArray = input.split(" ");
    console.log(inputArray);
    for (let letter=0; letter<inputArray.length; letter++){
       

        inputArray[letter] = inputArray[letter].charAt(0).toUpperCase() + inputArray[letter].slice(1).toLowerCase();
        
    }

    const fullname = inputArray.join(" ");
    //const firstName = firstname.charAt(0).toUpperCase() + firstname.slice(1).toLowerCase();
    //const lastName = lastnamecharAt(0).toUpperCase() + lastname.slice.toLowerCase
    return fullname;
}

console.log(getFullName("doMNa", "kanaRI"));