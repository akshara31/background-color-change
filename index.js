const colors = ["#676FA3", "#A2D2FF", "#FFAFAF", "#FFEBCC", "#C8E3D4", "#F6D7A7", "#FFCCD2"];


function changeColor(col) {
  document.body.style.background = col;
}

function run() {
  var n = Number(document.getElementById("num").value);
  console.log(n);
  for (let i = 0; i < colors.length; i++) {
    if (n === i) {
      color = colors[i];
      changeColor(color);
      break;
    }
  }
}
