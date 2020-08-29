//https://covid-19.dataflowkit.com/v1/world

//for all the world in one endpoinrt
//https://covid-19.dataflowkit.com/v1


const ctyCmb = document.querySelector("#country_select");
const cty_table = document.querySelector("#country_table")
const world_card = document.querySelector("#world_card")
const bdy = document.querySelector('body');

loadEventListeners();
function loadEventListeners() {
    ctyCmb.addEventListener("change", getCovidFacts);
    cty_table.addEventListener("click", removeRow);
    bdy.addEventListener('load', runWorld)
}


class countryRow {
    constructor(country, total_cases, total_death, total_recovered, active_cases) {
        this.country = country;
        this.total_cases = total_cases;
        this.total_death = total_death;
        this.total_recovered = total_recovered;
        this.active_cases = active_cases;
    }
    addRow() {
        //get the table object
        let cty_table_body = document.querySelector("#country_row");
        const tr = document.createElement("tr");
        tr.innerHTML = `
                        <td>${this.country}</td>
                        <td>${this.total_cases}</td>
                        <td>${this.total_death}</td>
                        <td>${this.total_recovered}</td>
                        <td>${this.active_cases}</td>
                        <td><a><i class="far fa-trash-alt"></i></a></td>
                      ` ;
        cty_table_body.appendChild(tr);
    }


}

//populate country select box
let strt = 0
let output = [];
let cty_opt = ''
xhr = new XMLHttpRequest();
xhr.open('GET', 'https://covid-19.dataflowkit.com/v1', true);
xhr.onload = function () {
    if (xhr.status === 200) {
        //this gets all the countryies
        data = JSON.parse(this.responseText);
        data.forEach(function (cty) {

            if (typeof cty.Country_text !== "undefined" || cty.Country_text != "World") {
                output[strt] = cty.Country_text;
                strt += 1;
                output.sort();

            }

        })
    }

    output.forEach(function (country) {
        cty_opt += `<option>${country}</option>`
    })
    ctyCmb.innerHTML = cty_opt;
}
xhr.send();

//this function uses the fetch method to get covid 19 number through API( https://covid-19.dataflowkit.com/v1/world)
function getCovidFacts() {
    runWorld();
    let coutry_select = ctyCmb.value;
    xhr = new XMLHttpRequest;
    xhr.open("GET", `https://covid-19.dataflowkit.com/v1/${coutry_select}`, true)
    xhr.onload = function () {
        if (xhr.status === 200) {
            let data = JSON.parse(this.responseText);

            last_update_date = `Last Update : ${data["Last Update"]}`;
            total_cases = data["Total Cases_text"];
            total_death = data["Total Deaths_text"];
            total_recovered = data["Total Recovered_text"];
            total_active_cases = data["Active Cases_text"];
            country_info = new countryRow(coutry_select, total_cases, total_death, total_recovered, total_active_cases);
            country_info.addRow();

            let msg_con = document.querySelector("#message");

            
        }

    }

    xhr.send()
}



// this removes a row from the table 
function removeRow(e) {

    if (e.target.className == "far fa-trash-alt") {
        e.target.parentElement.parentElement.parentElement.remove();
    }
    e.preventDefault();
}


function runWorld(){


xhr_world = new XMLHttpRequest();
xhr_world.open("GET", 'https://covid-19.dataflowkit.com/v1/World', true);
xhr_world.onload = function () {
    if (xhr_world.status === 200) {
        let wcb = document.querySelector("#world_card_body");
        let wlu = document.querySelector("#world_last_update");
        let data = JSON.parse(this.responseText);

        last_update_date = `Last Update : ${data["Last Update"]}`;
        total_cases = data["Total Cases_text"];
        total_death = data["Total Deaths_text"];
        total_recovered = data["Total Recovered_text"];
        total_active_cases = data["Active Cases_text"];

        console.log( total_recovered);
        world_num = `
                    <ul class="list-group">
                        <li class="list-group-item text-left h4 small">Total Cases: ${total_cases}</li>
                        <li class="list-group-item text-left h4 small">Total Death: ${total_death}</li>
                        <li class="list-group-item text-left h4 small">Total Recovered: ${ total_recovered}</li>
                        <li class="list-group-item text-left h4 small">Active Cases: ${total_active_cases}</li>
                      
                    </ul>
                    `
                    wcb.innerHTML = world_num;
                    wlu.innerText = last_update_date;

    }
}

xhr_world.send();

};