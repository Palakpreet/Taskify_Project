function save1() {
  const textarea = document.getElementById("9amdata");
  const data = textarea.value;
  localStorage.setItem("9amdata", data);
}
function save2() {
  const textarea = document.getElementById("10amdata");
  const data = textarea.value;
  localStorage.setItem("10amdata", data);
}
function save3() {
  const textarea = document.getElementById("11amdata");
  const data = textarea.value;
  localStorage.setItem("11amdata", data);
}
function save4() {
  const textarea = document.getElementById("12amdata");
  const data = textarea.value;
  localStorage.setItem("12amdata", data);
}
function save5() {
  const textarea = document.getElementById("1amdata");
  const data = textarea.value;
  localStorage.setItem("1amdata", data);
}
function save6() {
  const textarea = document.getElementById("2amdata");
  const data = textarea.value;
  localStorage.setItem("2amdata", data);
}
function save7() {
  const textarea = document.getElementById("3amdata");
  const data = textarea.value;
  localStorage.setItem("3amdata", data);
}
function save8() {
  const textarea = document.getElementById("4amdata");
  const data = textarea.value;
  localStorage.setItem("4amdata", data);
}
function save9() {
  const textarea = document.getElementById("5amdata");
  const data = textarea.value;
  localStorage.setItem("5amdata", data);
}
window.onload = function () {
  const storedData1 = localStorage.getItem("9amdata");
  if (storedData1) {
    document.getElementById("9amdata").value = storedData1;
  }
  const storedData2 = localStorage.getItem("10amdata");
  if (storedData2) {
    document.getElementById("10amdata").value = storedData2;
  }
  const storedData3 = localStorage.getItem("11amdata");
  if (storedData3) {
    document.getElementById("11amdata").value = storedData3;
  }
  const storedData4 = localStorage.getItem("12amdata");
  if (storedData4) {
    document.getElementById("12amdata").value = storedData4;
  }
  const storedData5 = localStorage.getItem("1amdata");
  if (storedData5) {
    document.getElementById("1amdata").value = storedData5;
  }
  const storedData6 = localStorage.getItem("2amdata");
  if (storedData6) {
    document.getElementById("2amdata").value = storedData6;
  }
  const storedData7 = localStorage.getItem("3amdata");
  if (storedData7) {
    document.getElementById("3amdata").value = storedData7;
  }
  const storedData8 = localStorage.getItem("4amdata");
  if (storedData8) {
    document.getElementById("4amdata").value = storedData8;
  }
  const storedData9 = localStorage.getItem("5amdata");
  if (storedData9) {
    document.getElementById("5amdata").value = storedData9;
  }
};
