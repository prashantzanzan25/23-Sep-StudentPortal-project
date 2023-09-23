document.addEventListener("DOMContentLoaded", function () {
     let studentData = [];
 
     fetch('https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json')
         .then(response => response.json())
         .then(data => {
             studentData = data;
             displayStudents(studentData);
         })
         .catch(error => console.error('Error fetching data:', error));
         function displayStudents(students) {
          const tableBody = document.getElementById("student-data");
          tableBody.innerHTML = '';
          students.forEach(student => {
               const row = document.createElement('tr');
               row.innerHTML = `<td>${student.id}</td><td>${student.first_name} ${student.last_name}</td><td>${student.gender}</td><td>${student.class}</td><td>${student.marks}</td><td>${student.passing ? 'Passing' : 'Failed'}</td><td>${student.email}</td>`;
               
               tableBody.appendChild(row);
          });
     }

    function populateTable() {
  const tableBody = document.querySelector("#table tbody");

  tableBody.innerHTML = "";

  arr.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${student.id}</td>
            <td><img src="${student.img_src}" width="10%" alt="${
      student.name
    }"> ${student.first_name} ${student.last_name}</td>
            <td>${student.email}</td>
            <td>${student.gender}</td>
            <td>${student.class}</td>
            <td>${student.marks}</td>
            <td>${student.passing ? "Yes" : "No"}</td>
            <td>${student.city}</td>
        `;
    tableBody.appendChild(row);
  });
}

populateTable();

// ...

function sortByNameAZ() {
  arr.sort((a, b) =>
    (a.first_name + " " + a.last_name).localeCompare(
      b.first_name + " " + b.last_name
    )
  );
  populateTable();
}

function sortByNameZA() {
  arr.sort((a, b) =>
    (b.first_name + " " + b.last_name).localeCompare(
      a.first_name + " " + a.last_name
    )
  );
  populateTable();
}

function sortByMarks() {
  arr.sort((a, b) => a.marks - b.marks);
  populateTable();
}

function sortByPassing() {
  arr.sort((a, b) => (a.passing === b.passing ? 0 : a.passing ? -1 : 1));
  populateTable();
}

function sortByClass() {
  arr.sort((a, b) => {
    const classA = a.class;
    const classB = b.class;

    if (typeof classA === "number" && typeof classB === "number") {
      return classA - classB;
    }

    return classA.toString().localeCompare(classB.toString());
  });

  populateTable();
}

function sortByGender() {
  arr.sort((a, b) => a.gender.localeCompare(b.gender));
  populateTable();
}

document.getElementById("sortAZ").addEventListener("click", sortByNameAZ);
document.getElementById("sortZA").addEventListener("click", sortByNameZA);
document.getElementById("sortByMarks").addEventListener("click", sortByMarks);
document
  .getElementById("sortByPassing")
  .addEventListener("click", sortByPassing);
document.getElementById("sortByClass").addEventListener("click", sortByClass);
document.getElementById("sortByGender").addEventListener("click", sortByGender);

function performSearch(query) {
  const results = arr.filter((student) => {
    const firstNameMatch = student.first_name
      .toLowerCase()
      .includes(query.toLowerCase());
    const lastNameMatch = student.last_name
      .toLowerCase()
      .includes(query.toLowerCase());
    const emailMatch = student.email
      .toLowerCase()
      .includes(query.toLowerCase());
    const genderMatch = student.gender
      .toLowerCase()
      .includes(query.toLowerCase());
    const classMatch = student.class
      .toString()
      .toLowerCase()
      .includes(query.toLowerCase());
    const passingMatch = student.passing
      .toString()
      .toLowerCase()
      .includes(query.toLowerCase());
    const cityMatch = student.city.toLowerCase().includes(query.toLowerCase());

    return (
      firstNameMatch ||
      lastNameMatch ||
      emailMatch ||
      genderMatch ||
      classMatch ||
      passingMatch ||
      cityMatch
    );
  });

  displaySearchResults(results);
}

function displaySearchResults(results) {
  const tableBody = document.querySelector("#table tbody");
  tableBody.innerHTML = "";
     
  results.forEach((student) => {
    const row = document.createElement("tr");
    
       row.innerHTML = `<td>${student.id}</td><td><img src="${student.img_src}" width="10%" alt="${student.name}"> ${student.first_name} ${student.last_name}</td><td>${student.email}</td><td>${student.gender}</td><td>${student.class}</td><td>${student.marks}</td><td>${student.passing ? "Yes" : "No"}</td><td>${student.city}</td>`;
    
       tableBody.appendChild(row);
  });
}

document.getElementById("searchButton").addEventListener("click", () => {
  const searchInput = document.getElementById("searchInput");
  const query = searchInput.value.trim();

  if (query !== "") {
    performSearch(query);
  } 
  else {
    populateTable();
  }

});
 
