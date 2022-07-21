function clickCounter1() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount1) {
      localStorage.clickcount1 = Number(localStorage.clickcount1)+1;
    } else {
      localStorage.clickcount1 = 1;
    }
    document.getElementById("result1").innerHTML = "You liked the Albuquerque New Mexico Temple " + localStorage.clickcount1 + " time(s).";
    document.getElementById("b1").innerHTML="Liked";
  } else {
    document.getElementById("result1").innerHTML = "Sorry, your browser does not support web storage...";
  }
}


function clickCounter2() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount2) {
        localStorage.clickcount2 = Number(localStorage.clickcount2)+1;
      } else {
        localStorage.clickcount2 = 1;
      }
      document.getElementById("result2").innerHTML = "You liked the Anchorage Alaska Temple " + localStorage.clickcount2 + " time(s).";
      document.getElementById("b2").innerHTML="Liked";
    } else {
      document.getElementById("result2").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }


  function clickCounter3() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount3) {
        localStorage.clickcount3 = Number(localStorage.clickcount3)+1;
      } else {
        localStorage.clickcount3 = 1;
      }
      document.getElementById("result3").innerHTML = "You liked the Apia Samoa Temple " + localStorage.clickcount3 + " time(s).";
      document.getElementById("b3").innerHTML="Liked";
    } else {
      document.getElementById("result3").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }


  function clickCounter4() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount4) {
        localStorage.clickcount4 = Number(localStorage.clickcount4)+1;
      } else {
        localStorage.clickcount4 = 1;
      }
      document.getElementById("result4").innerHTML = "You liked the Arequipa Peru Temple " + localStorage.clickcount4 + " time(s).";
      document.getElementById("b4").innerHTML="Liked";
    } else {
      document.getElementById("result4").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }

