//function for form validation\\
function validateForm() {
    let name = document.getElementById("name").value;
    let Eid = document.getElementById("Eid").value;
    let date = document.getElementById("date").value;

    if (name == "") {
        alert("Name required!");
        return false;
    }
    if (Eid == "") {
        alert("Employee ID required!");
        return false;
    }
    else if (Eid.length < 5) {
        alert("Employee ID must be at least 5 characters!");
        return false;
    }
    if (date == "") {
        alert("Date should be set!");
        return false;
    }
    return true;
}
