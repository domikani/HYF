const getFullname = (firstname, lastname, useFormalName = false, gender) => {
  let fullname;

  if (firstname != null || lastname != null) {
    const input = `${firstname} ${lastname}`;
    const inputArray = input.split(" ");
    //console.log(inputArray);
    for (let letter = 0; letter < inputArray.length; letter++) {
      inputArray[letter] =
        inputArray[letter].charAt(0).toUpperCase() +
        inputArray[letter].slice(1).toLowerCase();
    }
    fullname = inputArray.join(" ");
    let checkGenderSpelling = gender.toLowerCase();
    if (useFormalName && checkGenderSpelling == "female") {
      return `Lady ${fullname}`;
    } else if (useFormalName && checkGenderSpelling == "male") {
      return `Lord ${fullname}`;
    } else {
      return fullname;
    }
  } else {
    fullname = `Please fill in the form with your details`;
    return fullname;
  }
};

const fullname1 = getFullname("domna", "kanaRi", true, "Female");
const fullname2 = getFullname("nikolas", "chatzinikolaou", true, "male");
const fullname3 = getFullname();

console.log(`${fullname1}\n${fullname2}\n${fullname3}`);
