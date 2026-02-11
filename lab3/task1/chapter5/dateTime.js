let d1 = new Date(2012, 1, 20, 3, 12);
alert( d1 );



function getWeekDay(date) {
  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  return days[date.getDay()];
}

let date = new Date(2014, 0, 3);
alert( getWeekDay(date) ); 



function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) { 
    day = 7;
  }

  return day;
}



function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date1 = new Date(2015, 0, 2);

alert( getDateAgo(date1, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date1, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date1, 365) ); // 2, (2 Jan 2014)



function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

alert( getLastDayOfMonth(2012, 0) ); 
alert( getLastDayOfMonth(2012, 1) ); 
alert( getLastDayOfMonth(2013, 1) );



function getSecondsToday() {
  let now = new Date();

  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; 
  return Math.round(diff / 1000); 
}

alert( getSecondsToday() );