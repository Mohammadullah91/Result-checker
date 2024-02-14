function checkResult() {
    var roll = document.getElementById("roll").value;
    var examYear = document.getElementById("examYear").value;

    var apiUrl = `https://sresult.bise-ctg.gov.bd/s${examYear}/individual/result.php`;
    var requestData = `roll=${roll}&button2=Submit`;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: requestData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById("resultContainer").innerHTML = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
