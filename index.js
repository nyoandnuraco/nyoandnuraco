const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const oAuth2Client = new OAuth2(
  "767772632654-ki4m3i5dt5b2fuij17u80kc0ngba8c09.apps.googleusercontent.com",
  "7e-EIgrRcv0cjQlYTIlFkB1p"
);

oAuth2Client.setCredentials({
  refresh_token:
    "1//04fAw5mvV3sB_CgYIARAAGAQSNwF-L9IroRfS3TUCDYtPWr0scxJRHDdS5tsNSTBdg0qnS5GA0zrz8W6pgFxN7s-LybHDR1bib0c",
});

const calendar = google.calendar({ version: "v3", auth: oAuth2Client });
var alltime = [];
/* create an event that we can add to the calendar as well as start and end times ...in prod we do it in a form and send that info to back end */

const eventStartTime = new Date();
/*push cal event to start tomorrow instead by calling the setdate method on the eventstarttime instance*/

eventStartTime.setDate(eventStartTime.getDay() + 1);
eventStartTime.setMinutes(eventStartTime.getMinutes() - 920);
//create event end time

const eventEndTime = new Date();
eventEndTime.setDate(eventEndTime.getDay() + 2);

eventEndTime.setMinutes(eventEndTime.getMinutes() - 860);

//create actual event

const event = {
  summary: "nyera dfjsdlf",
  location: "11100 W 62nd St W, Eden Prairie, MN 55344",
  description: "Initial Consultation to discuss redesign",
  start: {
    dateTime: eventStartTime,
    timeZone: "America/Chicago",
  },
  end: {
    dateTime: eventEndTime,
    timeZone: "America/Chicago",
  },
  colorId: 2,
};

/* Next step is to add our event we just declared to our calendar. But what if we are busy or if we have something scheduled for this specific time and date Google calendar has freebusy query we send off a query to that calendar and check if there are any events within that timespan have a db with appts and open slots then when page is hit check db and see what days are open once a date is selected query calendar to check times. then reserve that time and date in the db and then send that event to calendar with meeting info inside summary or description of the event */

/* prevent other events from being booked during already taken up timeslot. call calendar instance hit freebusy method and query it.  the query takes an object and returns an arrow function and the arrow function has either error or response  items specifies an array of objects for each calendar we want to check if we are busy. id is equal to each cal we are checking  */

calendar.freebusy.query(
  {
    resource: {
      timeMin: eventStartTime,
      timeMax: eventEndTime,
      timeZone: "America/Chicago",
      items: [{ id: "primary" }],
    },
  },
  (err, res) => {
    if (err) return console.error("Error: Free Busy Query ERROR: ", err);

    const eventsArrs = res.data.calendars.primary.busy;
console.log('res',res);
    if (eventsArrs.length === 0)
      return calendar.events.insert(
        { calendarId: "primary", resource: event },
        (err) => {
          if (err) return console.error("Calendar Event Creation ERROR!", err);
          return console.log("Calendar Event Created!!", eventsArrs);
        }
      );

    let dte = eventsArrs[0].start.split("T")[0].split("-");
    let timestart = eventsArrs[0].start.split("T")[1].split(":");

    let timeend = eventsArrs[0].end.split("T")[1].split(":");
    var book = "Open Slot";
console.log('timeend', timeend,timestart, 'timestart');
    let hoursBookedForDay = Math.round(timeend[0]) - Math.round(timestart[0]);
    var table = [
      {
        Date: dte.join("/"),
        times: [
          { "0900-1000": book },
          { "1000-1100": book },
          { "1200-1300": book },
          { "1300-1400": book },
          { "1400-1500": book },
          { "1500-1600": book },
          { "1600-1700": book },
          { "1800-1900": book },
        ],
      },
    ];

    if (hoursBookedForDay === 8) {
      console.warn("Calendar Full Today No Empty Slots");
      console.log(hoursBookedForDay);
    } else {
      let findtime = timestart[0] + timestart[1];
      findtime = findtime.toString();
  
      var key;
      for (var i = 0; i < 8; i++) {
        key = Object.keys(table[0].times[i])[0];
        var value = table[key];
        let result = key.match(findtime)? true : false;
        
        if (result) {
          //console.log(result);
         // console.log(table.length);
            table[0].times[7]= {"1800-1900":"BOOKED!"}
       console.table(table[0].times);
        //console.table(table.map(table => console.table(table.times)))
       
        } 
      
    
      }

      

    }
  }
);
