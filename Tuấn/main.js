let allType = document.getElementById("all-type");
let coDai = document.getElementById("codai");
let manHua = document.getElementById("manhua");
let ngonTinh = document.getElementById("ngontinh");
let thieuNhi = document.getElementById("thieunhi");
let damMy = document.getElementById("dammy");

let defaultBtn = document.getElementById("default-btn");
let codaiBtn = document.getElementById("codai-btn");
let manhuaBtn = document.getElementById("manhua-btn");
let ngontinhBtn = document.getElementById("ngontinh-btn");
let thieunhiBtn = document.getElementById("thieunhi-btn");
let dammyBtn = document.getElementById("dammy-btn");

function hidePage() {
  allType.style.visibility = "hidden";
  allType.style.opacity = "0";
  coDai.style.visibility = "hidden";
  coDai.style.opacity = "0";
  manHua.style.visibility = "hidden";
  manHua.style.opacity = "0";
  ngonTinh.style.visibility = "hidden";
  ngonTinh.style.opacity = "0";
  thieuNhi.style.visibility = "hidden";
  thieuNhi.style.opacity = "0";
  damMy.style.visibility = "hidden";
  damMy.style.opacity = "0";
  defaultBtn.style.backgroundColor = "#e4e4e4";
  codaiBtn.style.backgroundColor = "#e4e4e4";
  manhuaBtn.style.backgroundColor = "#e4e4e4";
  ngontinhBtn.style.backgroundColor = "#e4e4e4";
  thieunhiBtn.style.backgroundColor = "#e4e4e4";
  dammyBtn.style.backgroundColor = "#e4e4e4";
}

function showPageDefault() {
  hidePage();
  allType.style.visibility = "visible";
  allType.style.opacity = "1";
  defaultBtn.style.backgroundColor = "#f9f9f9";
}

function showPageCoDai() {
  hidePage();
  coDai.style.visibility = "visible";
  coDai.style.opacity = "1";
  codaiBtn.style.backgroundColor = "coral";
}

function showPageManHua() {
  hidePage();
  manHua.style.visibility = "visible";
  manHua.style.opacity = "1";
  manhuaBtn.style.backgroundColor = "rgb(255, 208, 80)";
}

function showPageNgonTinh() {
  hidePage();
  ngonTinh.style.visibility = "visible";
  ngonTinh.style.opacity = "1";
  ngontinhBtn.style.backgroundColor = "rgb(100, 255, 80)";
}

function showPageThieuNhi() {
  hidePage();
  thieuNhi.style.visibility = "visible";
  thieuNhi.style.opacity = "1";
  thieunhiBtn.style.backgroundColor = "rgb(80, 156, 255)";
}

function showPageDamMy() {
  hidePage();
  damMy.style.visibility = "visible";
  damMy.style.opacity = "1";
  dammyBtn.style.backgroundColor = "rgb(255, 80, 232)";
}
