function checkMonth() {
  var inputMonth = document.getElementById('month').value;

  switch (parseInt(inputMonth)) {
    case 1:
      document.getElementById('buwan').innerHTML = "January";
      break;
    case 2:
      document.getElementById('buwan').innerHTML = "February";
      break;
    case 3:
      document.getElementById('buwan').innerHTML = "March";
      break;
    case 4:
      document.getElementById('buwan').innerHTML = "April";
      break;
    case 5:
      document.getElementById('buwan').innerHTML = "May";
      break;
    case 6:
      document.getElementById('buwan').innerHTML = "June";
      break;
    case 7:
      document.getElementById('buwan').innerHTML = "July";
      break;
    case 8:
      document.getElementById('buwan').innerHTML = "August";
      break;
    case 9:
      document.getElementById('buwan').innerHTML = "September";
      break;
    case 10:
      document.getElementById('buwan').innerHTML = "October";
      break;
    case 11:
      document.getElementById('buwan').innerHTML = "November";
      break;
    case 12:
      document.getElementById('buwan').innerHTML = "December";
      break;
    default:
      document.getElementById('buwan').innerHTML = "Invalid input. Enter a number between 1 and 12.";
  }
}
