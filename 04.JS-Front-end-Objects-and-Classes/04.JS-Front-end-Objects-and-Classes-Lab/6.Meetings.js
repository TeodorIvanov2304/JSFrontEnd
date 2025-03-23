function meetings(meetingsArr) {
    let calendar = {};

    for(let meeting of meetingsArr) {
        let [day,name] = meeting.split(' ');

        if(calendar.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        }
        else {
            console.log(`Scheduled for ${day}`);
            calendar[day] = name;
        }
    }

    let entries = Object.entries(calendar);

    for(let [day,name] of entries) {
        console.log(`${day} -> ${name}`)
    }
}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
meetings(['Friday Bob', 'Saturday Ted', 'Monday Bill', 'Monday John', 'Wednesday George',]);
