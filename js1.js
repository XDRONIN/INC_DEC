let dec = document.getElementById("dec");
let res = document.getElementById("res");
let inc = document.getElementById("inc");
let countlabel = document.getElementById("myp");

let count = 0;
dec.onclick = function () {
  count--;
  countlabel.textContent = count;
};
res.onclick = function () {
  count = 0;
  countlabel.textContent = count;
};
inc.onclick = function () {
  count++;
  countlabel.textContent = count;
};
