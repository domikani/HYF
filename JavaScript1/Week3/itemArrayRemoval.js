const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad";
  
  // Write some code here
  for(let name=0; name<names.length; name++){
      if (names[name] == nameToRemove){
          names.splice(name,1);
      }
  }
  
  
  // Code done
  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

  //Alternative Do it with FIlter
  let newNames = names.filter(name => name != nameToRemove);
  console.log(newNames); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
