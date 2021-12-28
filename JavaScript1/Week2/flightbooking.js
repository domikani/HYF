const getFullName = (firstname,lastname, useFormalName=false)=>{
    
    
    if(firstname != null || lastname != null)
    {
    const input = `${firstname} ${lastname}`
    const inputArray = input.split(" ");
    //console.log(inputArray);
    for (let letter=0; letter<inputArray.length; letter++){
       

        inputArray[letter] = inputArray[letter].charAt(0).toUpperCase() + inputArray[letter].slice(1).toLowerCase();
        
    }
    const fullname = inputArray.join(" ");
    const firstName = firstname.charAt(0).toUpperCase() + firstname.slice(1).toLowerCase();
    const lastName = lastname.charAt(0).toUpperCase() + lastname.slice.toLowerCase
        if(useFormalName){
            return `Lord ${fullname}`;
        }else
        {
            return fullname;
        }
    }else 
    {
        return `Please fill in the form with your details!`
    }  
}

const fullname1 = getFullName("domna","kanaRi", false);
const fullname2 = getFullName("nikolas","chatzinikolaou", true);
const fullname3 = getFullName();

console.log(`${fullname1}\n${fullname2}\n${fullname3}`);