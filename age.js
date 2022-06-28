function age(dob,currentDate) {
    let timeDiff = Date.parse(currentDate) - Date.parse(dob);
    let age = Math.floor(timeDiff / 31557600000) ;
    return age
    } 
    console.log(age("2000-06-12",Date()))