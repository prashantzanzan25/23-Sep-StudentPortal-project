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

     function sortByNameAscending() {
          students.sort((a, b) => a.name.localeCompare(b.name));
     }

     function sortByNameDescending() {
          students.sort((a, b) => b.name.localeCompare(a.name));
     }

     function sortByMarksAscending() {
          students.sort((a, b) => a.marks - b.marks);
     }

     function sortByPassing() {
          students = students.filter(student => student.passing);
     }
        
     function sortByClassAscending() {
          students.sort((a, b) => a.class.localeCompare(b.class));
     }
        
     function sortByClassAscending() {
          students.sort((a, b) => a.class.localeCompare(b.class));
     }
     
});
 