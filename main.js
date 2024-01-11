const DomSelectors = {
    form1 : document.getElementById("form1"),
    Subject : document.getElementById("Subject"),
    Work : document.getElementById("Work"),
    DueDate : document.getElementById("DueDate"),
    Main: document.getElementById("main")
}
function CallValues(){
    const CallSubject = DomSelectors.Subject.value;
    const CallWork = DomSelectors.Work.value;
    const CallDueDate = DomSelectors.DueDate.value;

    return{
        Subject: CallSubject,
        Work: CallWork,
        DueDate: CallDueDate,
    };
}
function ResetValues(){
    DomSelectors.Subject.value = "";
    DomSelectors.Work.value = "";
    DomSelectors.DueDate.value = "";
}
function CardCreate(x){
    const CardPRNT = 
    `
    <div id="NewCard" class="NewCard">
    <h3>Due Date: ${x.DueDate}</h3>
    <p>Subject:${x.Subject}</p>
    <p>Assignment:${x.Work}</p>
    <button class="removebutton">Completed</button>
    </div>
    `;
    // DomSelectors.Main.insertAdjacentHTML("beforeend", CardPRNT);
}

DomSelectors.form1.addEventListener("submit", function(e){
    e.preventDefault();
    const callV = CallValues();
    CardCreate(callV);
    ResetValues();
});
function RemoveCard(e){
    if(e.target.classList.contains("removebutton")){
        e.target.closest(".NewCard").remove()
    }
}
DomSelectors.Main.addEventListener("click", RemoveCard);

