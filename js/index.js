// This gets the copyright container and then dynamically set the year

const copy_rt = document.querySelector("#copyright");

let today_date = new Date();
copy_rt.innerText = "Copyright © Your Website " + today_date.getFullYear()