window.addEventListener("load", initSite)
document.getElementById("saveBtn").addEventListener("click", setDate)
document.getElementById("getBtn").addEventListener("click", getDate)

function initSite(){


  
}

let getSign = [
  "Stenbocken",
  "Vattumannen",
  "Fiskarna",
  "Väduren",
  "Oxen",
  "Tvillingarna",
  "Kräftan",
  "Lejonet",
  "Jungfrun",
  "Vågen",
  "Skorpionen",
  "Skytten"
];

function getHoroscope() {

    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;
    let result = " skriv in ett giltigt datum.";
    
    if((month == 12 && day >=22) || (month == 1 && day <= 19)) {
      result = "Ditt stjärntecken är" + " " + getSign[0];
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
      result = "Ditt stjärntecken är" + " " + getSign[1];
    } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
      result = "Ditt stjärntecken är" + " " + getSign[2];
    } else if((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
      result = "Ditt stjärntecken är" + " " + getSign[3];
    } else if((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
      result = "Ditt stjärntecken är" + " " + getSign[4];
    } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
      result = "Ditt stjärntecken är" + " " + getSign[5];
    } else if((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
      result = "Ditt stjärntecken är" + " " + getSign[6];
    } else if((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
      result = "Ditt stjärntecken är" + " " + getSign[7];
    } else if((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
      result = "Ditt stjärntecken är" + " " + getSign[8];
    } else if((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
      result = "Ditt stjärntecken är" + " " + getSign[9];
    } else if((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
      result = "Ditt stjärntecken är" + " " + getSign[10];
    } else if((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
      result = "Ditt stjärntecken är" + " " + getSign[11];


    }
    Output.innerText = result
}

async function setDate(){

    const monthToSave = document.getElementById("month").value
    const dayToSave = document.getElementById("day").value
  
    
    const body = new FormData()
    body.set("monthInput", monthToSave),
    body.set("dayInput", dayToSave)

    const savedDate= await makeRequest("./server/addHoroscope.php", "POST", body)
}


async function getDate() {
    const dateOutput = document.getElementById("Output")
    const savedDate = await makeRequest("./server/viewHoroscope.php", "GET", undefined)
    
    
    
    dateOutput.innerText = "Ditt stjärntecken är" + " " + savedDate


}


async function makeRequest(path, method, body){
    try {
    const response = await fetch(path, {
        method,
        body
    })
        console.log(response)
        return response.json()
    } catch(err) {
        console.error(err)
    }
}

