/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]

//SVOLGIMENTO PARTE 1

//Creo la funzione research che ha la funzione di ricercare la location e il title nell'array "jobs" fornito

function research(location, title) {

  /*
  -Creo una variabile result che conterrà un array contentente i risultati della funzione filter dell'array  "jobs"
  -Nella funzione filter, filtro l'elemento "job"(un oggetto) contentente(includes), nei valori delle rispettive chiavi "title" e "location" in minuscole(tolowerCase), i parametri che ho inserito nella funzione in minuscolo(tolowerCase) che per comodità ho chiamato "location" e "title"
  -Ponendo tutti in minuscolo la ricerca diventa "case insensitive"
  */
  let result = jobs.filter((job) => job.title.toLowerCase().includes(title.toLowerCase()) && job.location.toLowerCase().includes(location.toLowerCase()));

  //Creo la variabile count che mi restituisce la lunghezza dell'array "result" e quindi il numero dei risultati
  let count = result.length;

  //ritorno "result" e "count"
  return {result, count};
}


//SVLOGIMENTO PARTE 2

//Creo le varie variabili, prendendole 
let locationInput = document.getElementById("location");
let titleInput = document.getElementById("title");
let submitButton = document.getElementById("button");
let resultsList = document.getElementById("resultsList")
let noResultsAlert = document.getElementById("noResultsAlert")
let insertLocationOrTitle = document.getElementById("insertLocationOrTitle")
let resultsCount = document.getElementById("resultsCount")

submitButton.addEventListener("click", () => {
  
  /*
  -Resetto la lista ad ogni click sul bottone in modo tale che non mi riaggiunga di nuovo i risultati della funzione alla lista dei risultati all'infinito
  -Rimuovo la classe che mi fa comparire le varie notifiche
  */
  resultsList.innerHTML = '';
  noResultsAlert.classList.remove("display-block")
  insertLocationOrTitle.classList.remove("display-block")
  resultsCount.classList.remove("display-block")
  

  //Uso un if per verificare che effetivamente sia stato inserito qualcosa come input altrimenti ne richiedo almeno uno all'utente
  if (locationInput.value === "" && titleInput.value === "") {

    //Nel caso non ci siano input applico la classe che fa apparire il div contente l'avviso di inserirne almeno uno
    insertLocationOrTitle.classList.add("display-block")
  } else {

    //Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 
    let inputsResult = research(locationInput.value, titleInput.value);

    //Creo una condizione per cui se non ci sono risultati l'algoritmo me lo riferisce altrimenti me li fa comparire in una lista
    if (inputsResult.result.length === 0) {

      //Faccio apparire l'avviso che non ci sono risultati aggiungendo una classe che fa apparire l'avviso
      noResultsAlert.classList.add("display-block")
    } 
    else {

      //Faccio apparire la notifica di quanti risultano ci siano tramite l'aggiunta della classe diplay-block
      resultsCount.classList.add("display-block")

      //Faccio un if in modo tale che sia grammaticalmente corretto quando appare un solo risultato, non una cosa fondamentale ma una precisione che mi sentivo di fare
      if (inputsResult.count > 1) {
        resultsCount.innerHTML= `Approximately ${inputsResult.count} results`
      } else {
        resultsCount.innerHTML= `There is only ${inputsResult.count} result`
      }

      //Aggiungo un item alla lista per ogni elemento dell'array "inputsResult" grazie anche alla funzionalità dei backtick
      inputsResult.result.forEach(function (result) {
        let newIL = document.createElement('il');
        newIL.textContent = `Title: ${result.title} - Location: ${result.location}`
        resultsList.appendChild(newIL);
      })
    }
  }
  
});

//EXTRA INUTILE
let userIcon = document.getElementById("userIcon");
let loginDiv = document.getElementById("loginDiv")

userIcon.addEventListener("click", () => {
  loginDiv.classList.toggle("display-flex");
})
