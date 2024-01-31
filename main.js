const DomSelectors = {
    form1: document.getElementById("form1"),
    Subject: document.getElementById("Subject"),
    Work: document.getElementById("Work"),
    DueDate: document.getElementById("DueDate"),
    Main: document.getElementById("main"),
    Day1: document.getElementById("Day1"),
    Day2: document.getElementById("Day2"),
    Day3: document.getElementById("Day3"),
    Day4: document.getElementById("Day4"),
    Day5: document.getElementById("Day5"),
    Day6: document.getElementById("Day6"),
    Day7: document.getElementById("Day7"),
    Monday: document.getElementById("Monday"),
    Tuesday: document.getElementById("Tuesday"),
    Wednesday: document.getElementById("Wednesday"),
    Thursday: document.getElementById("Thursday"),
    Friday: document.getElementById("Friday"),
    Saturday: document.getElementById("Saturday"),
    Sunday: document.getElementById("Sunday"),
};

function CallValues() {
    const CallSubject = DomSelectors.Subject.value;
    const CallWork = DomSelectors.Work.value;
    const CallDueDate = DomSelectors.DueDate.value;

    return {
        Subject: CallSubject,
        Work: CallWork,
        DueDate: CallDueDate,
    };
}

function ResetValues() {
    DomSelectors.Subject.value = "";
    DomSelectors.Work.value = "";
    DomSelectors.DueDate.value = "";
}

function RemoveCard(e) {
    if (e.target.classList.contains("removebutton")) {
        e.target.closest(".NewCard").remove();
    }
}

function CardCreate(x, targetElement) {
    if (!targetElement) {
        console.log("Error");
        return;
    }

    const CardPRNT = `
        <div id="NewCard" class="NewCard">
            <h3>Due Date: ${x.DueDate}</h3>
            <p>Subject: ${x.Subject}</p>
            <p>Assignment: ${x.Work}</p>
            <button class="removebutton">Completed</button>
        </div>
    `;

    if (typeof targetElement.insertAdjacentHTML === "function") {
        targetElement.insertAdjacentHTML("beforeend", CardPRNT);
    } else {
        console.log(
            "error"
        );
    }
}

function PRINTER() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    for (let i = 0; i < days.length; i++) {
        DomSelectors[`Day${i + 1}`].addEventListener("click", function (e) {
            e.preventDefault();
            const printdiv = DomSelectors[days[i]];
            CardCreate(CallValues(), printdiv);
            ResetValues();
        });
    }
};

PRINTER();
DomSelectors.Main.addEventListener("click", RemoveCard);


PRINTER();
DomSelectors.Main.addEventListener("click", RemoveCard);
