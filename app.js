// api url
const api_url =
  "https://raw.githubusercontent.com/HackersOfSweden/Ekonomy/main/Levfakturor_Lidingo_Stad_2018.json";
const SEARCHAPI = newFunction();
function newFunction() {
  return "https://raw.githubusercontent.com/HackersOfSweden/Ekonomy/main/Levfakturor_Lidingo_Stad_2018.json";
}

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  show(data);
}
// Calling that async function
getapi(api_url);
async function funcName(url) {
  const response = await fetch(url);
  var data = await response.json();
}
// Function to hide the loader
function hideloader() {
  document.getElementById("loading").style.display = "none";
  const search = document.getElementById("search");
}
// Function to define innerHTML for HTML table
function show(data) {
  let tab = `<tr>
      <th>Faktnr</th>
      <th>Förvaltning</th>
      <th>Konterat</th>
      <th>Konto</th>
      <th>Leverantör</th>
      <th>Orgnr</th>
      </tr>`;
  // Loop to access all rows
  for (let r of data) {
    tab += `<tr> 
  <td>${r["fakt.nr"]} </td>
  <td>${r.forvaltning}</td>
  <td>${r.konterat}</td> 
  <td>${r.konto}</td> 
  <td>${r.leverantor}</td>
  <td>${r["org.nr"]}</td>                 
  </tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("Transaktioner").innerHTML = tab;
}
