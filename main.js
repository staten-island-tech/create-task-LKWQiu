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
    <button class="removebutton"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQT0ptWXk3sANLSPaRgC77z4tMTCe6GIZ0A&usqp=CAU" alt="BROKEN"></button>
    </div>
    `;
    DomSelectors.Main.insertAdjacentHTML("beforeend", CardPRNT);
}
DomSelectors.form1.addEventListener("submit", function(e){
    e.preventDefault();
    const callV = CallValues()
    CardCreate(callV);
    ResetValues();
});
function RemoveCard(e){
    if(e.target.classList.contains("removebutton")){
        e.target.closest("NewCard").remove()
    }
}
DomSelectors.Main.addEventListener("click", RemoveCard);