function hidePage() {
  let page = document.getElementsByClassName("commic-type");
  let btn = document.getElementsByClassName("nav_content_link");
  for (let item of page) {
    item.style.visibility = "hidden";
    item.style.opacity = "0";
  }
  for (let item of btn) {
    item.style.backgroundColor = "#e4e4e4";
  }
}

function showPage(page, event, color) {
  hidePage();
  let pageComic = document.getElementById(page);
  pageComic.style.visibility = "visible";
  pageComic.style.opacity = "1";
  event.target.style.backgroundColor = color;
}