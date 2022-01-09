const seriesDurations = [
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
      },
      {
        title: "Friends",
        days: 4,
        hours: 2,
        minutes: 20,
      },
      {
        title: "The Big Bang Theory",
        days: 4,
        hours: 6,
        minutes: 18,
      },
  
  ];

  function logOutSeriesText(myseriesArray) {
      const averageLifeSpanYears = 80;
      for(let serie=0; serie<myseriesArray.length; serie++){
          const daysToMinutess = (myseriesArray[serie].days * 1440)
          const hoursToMinutes = (myseriesArray[serie].hours * 60 );
          const minutes = myseriesArray[serie].minutes;
          const serieTitle = myseriesArray[serie].title;
          const totalSpentMinutes = (daysToMinutess + hoursToMinutes + minutes);

          const totalMinutesToYears = totalSpentMinutes/525600;
          const timeSpent = ((totalMinutesToYears/averageLifeSpanYears)*100).toFixed(3);
          console.log(`${serieTitle} took ${timeSpent}% of my life!`)

          
      }
    
  }
  
  logOutSeriesText(seriesDurations); 