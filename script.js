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
// function to showData\\
// function showData() {
//     let peopleList;
//     if (localStorage.getItem("peopleList") == null) {
//         peopleList = [];
//     }
//     else {
//         peopleList = JSON.parse(localStorage.getItem("peopleList"));
//     }
//     let html = "";
//     peopleList.forEach(function (element, index) {
//         html += "<tr>";
//         html += "<td>" + element.name + "</td>";
//         html += "<td>" + element.Eid + "</td>";
//         html += "<td>" + element.date + "</td>";
//         html += '<td><button onclick="deleteData(' +
//             index +
//             ')"class="btn btn-danger>delete</button><button onclick="update(' +
//             index +
//             ')"class="btn btn-danger>Update</button></td>';
//         html += "</tr>";
//     });
//     document.querySelector("#crudTable tbody").innerHTML =
//         html;
// }
// //loads all data or page load\\
// document.onload = showData();

// //function to add data\\
// function addData() {
//     //if form is validate\\
//     if (validateForm() == true) {
//         let name = document.getElementById("name").value;
//         let Eid = document.getElementById("Eid").value;
//         let Date = document.getElementById("date").value;

//         let peopleList;
//         if (localStorage.getItem("peopleList") == null) {
//             peopleList = [];
//         } else {
//             peopleList = JSON.parse(localStorage.getItem("peopleList"))
//         }
//         peopleList.push({
//             name: name,
//             Eid: Eid,
//             date: Date,
//         });
//         localStorage.setItem("peopleList", JSON.stringify(peopleList));
//         showData();
//         document.getElementById("name").value = "";
//         document.getElementById("Eid").value = "";
//         document.getElementById("date").value = "";
//     }
// }
// function deleteData(index) {
//     let peopleList;
//     if (localStorage.getItem("peopleList") == null) {
//         peopleList = [];
//     }
//     else {
//         peopleList = JSON.parse(localStorage.getItem("peopleList"));
//     }
//     peopleList.splice(index, 1);
//     localStorage.setItem("peopleList", JSON.stringify(peopleList));
//     showData();
// }