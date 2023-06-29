
let startStop = document.querySelector(".start-stop");
let clear = document.querySelector(".clear");
let msec = document.querySelector(".msec");
let sec = document.querySelector(".sec");
let min = document.querySelector(".min");
let hour = document.querySelector(".hour");

let second = 1;
let minute = 1;
let hour1 = 1;
let clickCount = 0;
let timer;
let number;

let ms, s, m, h;

let button = startStop.addEventListener("click", () => {
  if (clickCount % 2 == 0) {
    function timerMilSec(from, to) {
      timer = setInterval(() => {
        if (from <= 9) {
          msec.innerText = "0" + from;
        } else if (from < to) {
          msec.innerText = from;
          ms = msec.innerText;
        } else {
          msec.innerText = "00";
          ms = msec.innerText;
          from = 0;
          if (second <= 9) {
            sec.innerText = "0" + second;
          } else if (second < to) {
            sec.innerText = second;
          } else {
            sec.innerText = "00";
            second = 1;
            if (minute <= 9) {
              min.innerText = "0" + minute;
            } else if (minute < to) {
              min.innerText = minute;
            } else {
              min.innerText = "00";
              minute = 1;
              if (hour1 <= 9) {
                hour.innerText = "0" + hour1;
              } else if (hour1 < 24) {
                hour.innerText = hour1;
              }
              hour1++;
            }

            minute++;
          }
          second++;
        }
        from++;
      }, 16.66666666666667);
    }
    timerMilSec(0, 60);
    clickCount++;
  }
   else {
		  clearInterval(timer);
  	    clickCount++;
  }
});

clear.addEventListener("click", () => {
  clearInterval(timer);
  from = 0;
  second = 1;
  minute = 1;
  hour1 = 1;
  msec.innerText = "00";
  sec.innerText = "00";
  min.innerText = "00";
  hour.innerText = "00";
  clickCount = 0;
});
