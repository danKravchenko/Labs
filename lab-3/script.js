let students = []; //// array of studets
let filtredStudents = [];
let ForRemoveStudents = [];
let count = 0;
let choosenRows;
let elements = document.getElementsByTagName("tr");
let changeData = false;
let rowsCellsNumber = 1; /// from 0 to 4
let sortCount = 1;

function createElementInTable() {
        let table = document.getElementById("tb-body");
        let elem = document.createElement("tr");
        table.appendChild(elem);
        createTextRows(elem);
}

function createTextRows(element) {
        let student = students[count];

        for (i = 0; i < 6; i++) {
                let elem = document.createElement("td");

                if (Object.keys(student)[i] == 'gender' && Object.values(student)[i] == true) {
                        elem.innerHTML = "male";
                }

                else if (Object.keys(student)[i] == 'gender' && Object.values(student)[i] == false) {
                        elem.innerHTML = "female";
                }

                else {
                        elem.innerHTML = Object.values(student)[i];
                }

                if (Object.values(student)[i] == null) {
                        elem.innerHTML = '<img src="#" class="change-btn" onclick="openDialogWindow(2)"></div>' +
                                '<img src="#" class="delete-btn" onclick="deleteStudent()"></div>';
                }

                element.appendChild(elem);
        }
        count++;

        filterRows(false);
}

function addNewStudent(rating, firstName, lastName, gender, id) {
        let student = {
                rating: rating,
                firstName: firstName,
                lastName: lastName,
                gender: gender,
                id: id
        }

        students.push(student);
        createElementInTable();

        let newRow = document.getElementById("tb-body").lastElementChild;
        newRow.addEventListener("mouseover", overInTableElement);
        newRow.addEventListener("mouseout", outInTableElement);
}

function changeDataStudent(rating, firstName, lastName, gender, id) {
        let ratingRows = choosenRows.childNodes[0];
        let firstNameRows = choosenRows.childNodes[1];
        let lastNameRows = choosenRows.childNodes[2];
        let genderRows = choosenRows.childNodes[3];
        let idRows = choosenRows.childNodes[4];

        for (i = 0; i < students.length; i++) {
                let studentValues = students[i];

                if (Object.keys(studentValues)[4] == 'id' && Object.values(studentValues)[4] == idRows.innerHTML) {

                        let student = {
                                rating: rating,
                                firstName: firstName,
                                lastName: lastName,
                                gender: gender,
                                id: id
                        }

                        students.splice(i, 1, student);

                        ratingRows.innerHTML = rating;
                        firstNameRows.innerHTML = firstName;
                        lastNameRows.innerHTML = lastName;

                        if (gender == true) {
                                genderRows.innerHTML = "male";
                        }

                        else {
                                genderRows.innerHTML = "female";
                        }

                        idRows.innerHTML = id;
                }
        }
}

function save() {
        let ratingFieldValue = document.getElementById("rating").value;
        let firstNameFieldValue = document.getElementById("firstName").value;
        let lastNameFieldValue = document.getElementById("lastName").value;
        let genderMaleFieldValue = document.getElementById("genderMale");
        let genderFemaleFieldValue = document.getElementById("genderFemale");
        let idFieldValue = document.getElementById("idStudent").value;

        if (ratingFieldValue > 0 && firstNameFieldValue.length > 0 && lastNameFieldValue.length > 0 && idFieldValue > 0) {

                let gender = true;

                if (genderMaleFieldValue.checked != genderFemaleFieldValue.checked) {
                        if (genderMaleFieldValue.checked) {
                                gender = true;
                        }

                        if (genderFemaleFieldValue.checked) {
                                gender = false;
                        }

                        if (changeData == false) {
                                addNewStudent(ratingFieldValue, firstNameFieldValue, lastNameFieldValue, gender, idFieldValue);
                        }

                        else {
                                changeDataStudent(ratingFieldValue, firstNameFieldValue, lastNameFieldValue, gender, idFieldValue);
                        }

                        cancel();
                }
        }
}

function deleteStudent() {
        let idRows = choosenRows.childNodes[4];

        for (i = 0; i < students.length; i++) {
                let studentValues = students[i];

                if (Object.keys(studentValues)[4] == 'id' && Object.values(studentValues)[4] == idRows.innerHTML) {

                        let table = document.getElementById("tb-body").children;
                        students.splice(i, 1);
                        if (students.length >= 0) {
                                table[i + 1].remove();
                                count--;
                        }
                }
        }
}

function cancel() {
        let dialogWindow = document.getElementById("dialogWindow");
        dialogWindow.style.display = "none";
        let btnsAdd = document.getElementById("dialog-btns-add");
        btnsAdd.style.display = "flex";
        let btnsChange = document.getElementById("dialog-btns-change");
        btnsChange.style.display = "inherit";
        let shadowBackground = document.getElementById("shadow-bg");
        shadowBackground.style.display = "none";
        changeData = false;
}

function filterRows(filterState) {
        let FilterField = document.getElementById("filterField");
        let table = document.getElementById("tb-body");
        let tableChild = table.children;
        let textAtention = document.getElementById("text-no-results");
        let checkedValue = false;

        if (filterState == true) {
                for (let i = 0; i < filtredStudents.length; i++) {
                        addNewStudent(...Object.values(filtredStudents[i]));
                }

                filtredStudents = [];
        }

        for (i = 0; i < students.length; i++) {
                let studentsCount = students[i];
                let result = Object.values(studentsCount)[rowsCellsNumber].includes(FilterField.value);
                if (result) {
                        checkedValue = true;
                }

                else {
                        filtredStudents.unshift(studentsCount);
                        count--;
                }

                if (i === students.length - 1) {
                        lastIteration = true;
                }

                if (checkedValue == false) {
                        textAtention.style.display = "block";
                }

                else {
                        textAtention.style.display = "none";
                }
        }

        for (let i = students.length - 1; i >= 0; i--) {
                if (filtredStudents.includes(students[i])) {
                        students.splice(i, 1);
                }
        }

        for (let i = tableChild.length - 1; i >= 1; i--) {
                let row = tableChild[i];
                let cellValue = row.children[1].innerHTML;

                if (!cellValue.includes(FilterField.value)) {
                        row.remove();
                }
        }
}

function sortRows(cell) {
        let sortArrow = document.getElementById("sort-arrow");

        if (sortCount == 2) {
                sortCount = 0;
        }

        sortCount++;

        if (cell == 0) {
                let sortedRating = [];
                let newArray = [];
                for (i = 0; i < students.length; i++) {
                        let studentsCount = students[i];
                        let ratingValues = Object.values(studentsCount)[0];
                        sortedRating.push(ratingValues);

                        if (sortCount == 1) {
                                sortedRating.sort(function (a, b) {
                                        sortArrow.style.rotate = "360deg";
                                        return a - b;
                                })
                        }

                        else {
                                sortedRating.sort(function (a, b) {
                                        sortArrow.style.rotate = "180deg";
                                        return b - a;
                                })
                        }
                }

                for (let i = 0; i < students.length; i++) {
                        for (let j = 0; j < students.length; j++) {
                                let studentCount = students[j];
                                if (sortedRating[i] === Object.values(studentCount)[0]) {
                                        let student = {
                                                rating: Object.values(studentCount)[0],
                                                firstName: Object.values(studentCount)[1],
                                                lastName: Object.values(studentCount)[2],
                                                gender: Object.values(studentCount)[3],
                                                id: Object.values(studentCount)[4]
                                        };

                                        newArray.push(student);

                                        for (k = 0; k < 5; k++) {
                                                elements[i + 2].children[k].innerHTML = Object.values(student)[k];
                                        }

                                        if (Object.values(studentCount)[3] == true) {
                                                elements[i + 2].children[3].innerHTML = "male";
                                        }

                                        else {
                                                elements[i + 2].children[3].innerHTML = "female";
                                        }

                                        break;
                                }
                        }
                }

                students.splice(0, students.length);
                students = newArray.slice();
        }
}

function openDialogWindow(idWindow) {
        let dialogWindow = document.getElementById("dialogWindow");
        let btnsChange = document.getElementById("dialog-btns-change");
        let textInfo = document.getElementById("text-info");
        let shadowBackground = document.getElementById("shadow-bg");
        let btnsAdd = document.getElementById("dialog-btns-add");

        if (idWindow == 1) {
                dialogWindow.style.display = "inherit";
                btnsChange.style.display = "none";
                btnsAdd.style.display = "flex";
                textInfo.innerHTML = "Please, add data for create a student";
                shadowBackground.style.display = "inherit";
        }

        if (idWindow == 2) {
                dialogWindow.style.display = "inherit";
                btnsAdd.style.display = "none";
                btnsChange.style.display = "flex";
                textInfo.innerHTML = "Change data of this student ?";
                shadowBackground.style.display = "inherit";
                changeData = true;
        }

        if (changeData == true) {
                changeLines(false);
        }

        else {
                changeLines(true);
        }
}

function changeLines(clearLines) {
        /// if true the lines are cleared

        let genderMaleFieldValue = document.getElementById("genderMale");
        let genderFemaleFieldValue = document.getElementById("genderFemale");
        let genderRows = choosenRows.childNodes[3];

        if (!clearLines) {
                document.getElementById("rating").value = choosenRows.children[0].innerHTML;
                document.getElementById("firstName").value = choosenRows.children[1].innerHTML;
                document.getElementById("lastName").value = choosenRows.children[2].innerHTML;
                document.getElementById("idStudent").value = choosenRows.children[4].innerHTML;

                if (genderRows.innerHTML == "male") {
                        genderMaleFieldValue.checked = true;
                        genderFemaleFieldValue.checked = false;
                }

                else if (genderRows.innerHTML == "female") {
                        genderMaleFieldValue.checked = false;
                        genderFemaleFieldValue.checked = true;
                }
        }

        else {
                document.getElementById("rating").value = null;
                document.getElementById("firstName").value = null;
                document.getElementById("lastName").value = null;
                document.getElementById("idStudent").value = null;
                genderMaleFieldValue.checked = true;
                genderFemaleFieldValue.checked = false;
        }
}

for (i = 2; i < elements.length; i++) {
        let elem = elements[i];
        elem.addEventListener("mouseover", overInTableElement);
        elem.addEventListener("mouseout", outInTableElement);
}

function overInTableElement() {
        this.style.backgroundColor = "#acd5f0";
        if (changeData == false) {
                choosenRows = this;
                let lastCell = choosenRows.lastElementChild;
                let childrenCell = lastCell.children;
                childrenCell[0].style.display = "inline";
                childrenCell[1].style.display = "inline";
        }
}

function outInTableElement() {
        this.style.backgroundColor = "#fff";
        let lastCell = choosenRows.lastElementChild;
        let childrenCell = lastCell.children;
        childrenCell[0].style.display = "none";
        childrenCell[1].style.display = "none";
}

addNewStudent(2, "Dan", "Kravchenko", true, 345);
addNewStudent(1, "firstName", "lastName", false, 282);
addNewStudent(3, "firstName", "lastName", true, 286);
