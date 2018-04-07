var timerArray = new Array();
var board = document.getElementById('board');

const init_data = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const blinker = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const beacon = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

var now_data = init_data;

var canvas = [];



// function start_interval() {
//   timerArray.push(('write(blinker)', 5000));
// }

function test() {
  write(beacon);
  timerArray.push(setInterval('write(next(now_data))', 500));
}

function write(x) {
  board.innerHTML = '';
  for (var i = 0; i < 10; i++) {
    // var tmp = [];
    for (var j = 0; j < 10; j++) {
      if (x[i][j] == 0) {
        board.innerHTML +='□';
        // document.write('□');
        // tmp.push('□')
      } else if (x[i][j] == 1) {
        board.innerHTML +='■';
        // document.write('■');
        // tmp.push('■')
      }
    }
    board.innerHTML +='<br>';
    // document.write('<br>');
    // canvas.push(tmp);
  }
};

function next(a_data) {
  now_data = [];
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      var array_tmp = [];
      var sum_tmp = 0, position = '';
      var lenght_tmp = a_data.length;
      
      var now_position = a_data[i][j];

      if (now_position == [0][j])                       position = 'top';
      if (now_position == [lenght_tmp][j])              position = 'under';
      if (now_position == [i][0])                       position = 'left';
      if (now_position == [i][lenght_tmp])              position = 'right';
      if (now_position == [0][0])                   position = 'top-left';
      if (now_position == [0][lenght_tmp])          position = 'top-right';
      if (now_position == [lenght_tmp][0])          position = 'under-left';
      if (now_position == [lenght_tmp][lenght_tmp]) position = 'under-right';
      
      
      if (position == 'top')         sum_tmp = a_data[0][j-1] + a_data[0][j+1] + a_data[1][j-1] + a_data[1][j] + a_data[1][j+1];
      if (position == 'under')       sum_tmp = a_data[lenght_tmp][j-1] + a_data[lenght_tmp][j+1] + a_data[lenght_tmp][j-1] + a_data[lenght_tmp][j] + a_data[lenght_tmp][j+1];
      if (position == 'left')        sum_tmp = a_data[i-1][j] + a_data[i+1][j] + a_data[i-1][j+1] + a_data[i][j+1] + a_data[i+1][j+1];
      if (position == 'right')       sum_tmp = a_data[i-1][j] + a_data[i+1][j] + a_data[i-1][j-1] + a_data[i][j-1] + a_data[i+1][j-1];
      if (position == 'top-left')    sum_tmp = a_data[0][1] + a_data[1][0] + a_data[1][1];
      if (position == 'top-right')   sum_tmp = a_data[0][lenght_tmp - 1] + a_data[1][lenght_tmp] + a_data[1][lenght_tmp - 1];
      if (position == 'under-left')  sum_tmp = a_data[lenght_tmp - 1][0] + a_data[lenght_tmp][1] + a_data[lenght_tmp - 1][1];
      if (position == 'under-right') sum_tmp = a_data[lenght_tmp][lenght_tmp - 1] + a_data[lenght_tmp -1 ][lenght_tmp] + a_data[lenght_tmp - 1][lenght_tmp - 1];

      if (position == '')            sum_tmp = a_data[i-1][j-1] + a_data[i-1][j] + a_data[i-1][j+1] + a_data[i][j-1] + a_data[i][j+1] + a_data[i+1][j-1] + a_data[i+1][j] + a_data[i+1][j+1];

      if (now_position == 0 && sum_tmp == 3) now_position = 1;
      if (now_position == 1 && sum_tmp == 2 || sum_tmp == 3) continue;
      if (now_position == 1 && sum_tmp > 4) now_position = 0

      array_tmp.push(now_position);
    }
    now_data.push(array_tmp);
  }
  return now_data;
}

function stop_interval() {
  if (timerArray.length > 0) {
    for (var i = 0, j = timerArray.length; i < j; i++) {
      clearInterval(timerArray .shift());
    }
  }
}
