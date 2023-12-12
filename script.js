let vars = [-1, 1, 1, 1,1];
function openorclose(name) {
  let ButtonNumber = name.id[1];
  if (vars[ButtonNumber]) {
    document.getElementById("b" + ButtonNumber).style.backgroundImage = "url('assets/images/icon-minus.svg')";
    document.getElementById("p" + ButtonNumber).style.visibility = 'visible';
    document.getElementById("p" + ButtonNumber).style.height ="auto";
  } else {
    document.getElementById("b" + ButtonNumber).style.backgroundImage = "url('assets/images/icon-plus.svg')";
    document.getElementById("p" + ButtonNumber).style.visibility = 'hidden';
    document.getElementById("p" + ButtonNumber).style.height = "0px";
  }
  vars[ButtonNumber] ^= 1;
}