window.onload = function () {};

var Init = [
  "20204583",
  "Đinh Công Mạnh",
  "2020",
  "Đại học đại trà",
  "Khoa học Máy tính 2020",
  "Trường Công nghệ Thông tin và Truyền thông",
  "Học",
  "Nam",
  "Khoa học Máy tính 02 - K65",
  "K65",
  "manh.dc204583@sis.hust.edu.vn",
];

var len = Init.length;
const nut = document.getElementsByTagName("button");
var anh = document.querySelector("input[type=file]");

function edit() {
  for (var v = 1; v < nut.length; v++) {
    nut[v].hidden = false;
  }
  anh.hidden = false;
  var editable = document.getElementsByClassName("name");
  for (let i = 0; i < len; i++) {
    editable[i].disabled = false;
  }
}
var TTSV = [
  "20204583",
  "Đinh Công Mạnh",
  "2020",
  "Đại học đại trà",
  "Khoa học Máy tính 2020",
  "Trường Công nghệ Thông tin và Truyền thông",
  "Học",
  "Nam",
  "Khoa học Máy tính 02 - K65",
  "K65",
  "manh.dc204583@sis.hust.edu.vn",
];
var IMG = ["./image/avatar.png"];
var InitIMG = "./image/avatar.png";

function previewFile() {
  var preview = document.getElementsByClassName("avatar");
  var file = document.querySelector("input[type=file]").files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    preview[0].src = reader.result;
  };

  reader.readAsDataURL(file);
}

function OK() {
  anh.hidden = true;
  for (var v = 1; v < nut.length; v++) {
    nut[v].hidden = true;
  }
  var ok = document.getElementsByClassName("name");

  for (let i = 0; i < len; i++) {
    ok[i].disabled = true;
    TTSV[i] = ok[i].value;
  }
  console.log(TTSV);

  var preview = document.getElementsByClassName("avatar");
  var file = document.querySelector("input[type=file]").files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    preview[0].src = reader.result;
    IMG[0] = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

function CANCEL() {
  anh.hidden = true;

  for (var v = 1; v < nut.length; v++) {
    nut[v].hidden = true;
  }
  var cancel = document.getElementsByClassName("name");

  for (let i = 0; i < len; i++) {
    cancel[i].disabled = true;
    cancel[i].value = TTSV[i];
  }
  console.log(TTSV);

  var preview = document.getElementsByClassName("avatar");
  var file = document.querySelector("input[type=file]").files[0];
  var reader = new FileReader();

  preview[0].src = IMG[0];
  if (file) {
    reader.readAsDataURL(file);
  }
}

function RESET() {
  anh.hidden = true;
  for (var v = 1; v < nut.length; v++) {
    nut[v].hidden = true;
  }
  var reset = document.getElementsByClassName("name");

  for (let i = 0; i < len; i++) {
    reset[i].disabled = true;
    reset[i].value = Init[i];
  }
  console.log(TTSV);
  var preview = document.getElementsByClassName("avatar");
  var file = document.querySelector("input[type=file]").files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    preview[0].src = InitIMG;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

function previewFile() {
  var preview = document.getElementsByClassName("avatar");
  var file = document.querySelector("input[type=file]").files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    preview[0].src = reader.result;
  };
  if (file) {
    reader.readAsDataURL(file);
  }
}
