window.addEventListener("load", initSite)
document.getElementById("saveBtn").addEventListener("click", addHoroscope)
document.getElementById("getBtn").addEventListener("click", updateHoroscope)
document.getElementById("deleteBtn").addEventListener("click", deleteHoroscope)

function initSite() {

    let savedDate = document.getElementById('dateInput').value;

    fetch("./server/viewHoroscope.php", {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((json) => {
            viewHoroscope(json);            
        });
}

function viewHoroscope(horoscopeToView) {
    let horoscopeResult = document.getElementById('output');
    horoscopeResult.innerText = horoscopeToView;
}

function addHoroscope() {

    let formData = new FormData();

    formData.append('savedDate', document.getElementById('dateInput').value);

    fetch("./server/addHoroscope.php", {
            method: 'POST',
            body: formData
        }).then(initSite());
}

function updateHoroscope() {

    let savedDate = document.getElementById('dateInput').value;
    let queryString = "savedDate="+savedDate;

    fetch("./server/updateHoroscope.php", {
            method: 'PUT',
            body: queryString
        }).then(initSite());
        
}

function deleteHoroscope() {
    
    let savedDate = document.getElementById('dateInput').value;
    let queryString = "savedDate="+savedDate;

    fetch("./server/deleteHoroscope.php", {
            method: 'DELETE'
        }).then((response) => response.json())
        .then((json) => {
            if (json) {
                initSite();
            }
        });
        
}