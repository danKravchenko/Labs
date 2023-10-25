function showCountLetterCase() {
        wordLetter = [];
        let UpperLeltterCount = 0;
        let LowerLeltterCount = 0;
        let field = document.getElementById("text-field").value;
        let textResultShow = document.getElementById("result-text-task-1");
        wordLetter = Array.from(field);

        for (i = 0; i < wordLetter.length; i++) {
                if (wordLetter[i] == wordLetter[i].toUpperCase() && wordLetter[i] != " ") {
                        UpperLeltterCount++;
                }

                if (wordLetter[i] == wordLetter[i].toLowerCase() && wordLetter[i] != " ") {
                        LowerLeltterCount++;
                }
        }

        textResultShow.innerHTML = "Letter with Upper Case in row: " + UpperLeltterCount +
                "<br></br>" + "Letter with Lower Case in row: " + LowerLeltterCount;
}


let names = [];
let selectPerson = document.getElementById("select-person");

function chooseName() {
        let textResultShow = document.getElementById("result-text-task-2");
        textResultShow.innerHTML = "Id of person : " + selectPerson.selectedIndex;
}

function addname(id, namePerson) {
        let optionForSelectPerson = document.createElement('option');

        let person = {
                id: id,
                namePerson: namePerson
        }

        names.unshift(person);
        names.reverse();
        optionForSelectPerson.innerHTML = Object.values(person)[1];
        optionForSelectPerson.id = Object.values(person)[0];
        selectPerson.appendChild(optionForSelectPerson);
}

addname(1, "Dan");
addname(2, "Illa");
