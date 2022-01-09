const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };

  const calculateTime = (obj) =>{
     const speedInKm = obj.speed;
     const distance = obj.destinationDistance;
     const calculateTimeInHours = distance/speedInKm; 
     const roundHours = Math.floor(calculateTimeInHours);
     const minutes = (calculateTimeInHours - roundHours)*60;
     const roundMinutes = Math.floor(minutes);

     return `${roundHours} hour (s) and ${roundMinutes} minute(s)`
  }
  
  const travelTime = calculateTime(travelInformation);
  console.log(travelTime); // 8 hours and 38 minutes

  