const timer = document.getElementById('stopwatch');

var hr = 0;
var min = 0;
var sec = 0;
var stop_timer_var = true;

function start_timer() {
  if (stop_timer_var == true) {
    document.querySelector(".start").style['box-shadow'] = 'none';
    setTimeout(() => {
      document.querySelector(".start").style['box-shadow'] = '1px 1px gray';
    }, 100);
    stop_timer_var = false;
    timer_func();
  }
}
function stop_timer() {
  if (stop_timer_var == false) {
    document.querySelector(".pause").style['box-shadow'] = 'none';
    setTimeout(() => {
      document.querySelector(".pause").style['box-shadow'] = '1px 1px gray';
    }, 100);
    document.querySelector(".start").innerHTML = "Resume";
    stop_timer_var = true;
  }
}

function timer_func() {
  if (stop_timer_var == false) {
    sec = sec + 1;
    if (sec == 60) {
      //for every 60s one min is added and then sec is made zero
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      //similar is the case for min and hours
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    let timer_print='';
    if (hr < 10) {
      timer_print += '0';//string
    }
    timer_print += hr + ': ';
    if (min < 10) {
      timer_print += '0';//string
    }
    timer_print+=min + ': ';
    if (sec < 10) {
      timer_print+= '0'//string
    }
    timer_print+=sec;
    timer.innerHTML =timer_print;
    setTimeout("timer_func()", 1000);
  }
}
function reset_timer() {
  document.querySelector(".reset").style['box-shadow'] = 'none';
  setTimeout(() => {
    document.querySelector(".reset").style['box-shadow'] = '1px 1px gray';
  }, 100);
  timer.innerHTML = '00: 00: 00';
  hr = 0;
  min = 0;
  sec = 0;
  stop_timer_var = true;
  document.querySelector(".start").innerHTML = "Start";
}
