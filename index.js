const btn=document.querySelector('#btn');
const check=document.querySelectorAll(".ch");
const inputCount=document.querySelectorAll(".count");
const total=document.querySelector("#total");
const Uname=document.querySelector('#name');
const sername=document.querySelector('#sername');
    




function calculate (){
        let schet=0;
        for (let i = 0; i < check.length; i++) {
        if (check[i].checked) {
            if (inputCount[i].value==0){ 
                inputCount[i].value=1};
            
                schet+=Number(check[i].value)*inputCount[i].value;
            
        }
    }
    console.log (`schet=${schet} `)
    total.textContent=`${schet} р.`;
}


check.forEach(element => {
    element.addEventListener("change", function  (){
        calculate()
        btn.style.background="green";
    });

    inputCount.forEach(inC =>{
        inC.addEventListener("change", function (){
            calculate();
            btn.style.background="violet";
        })
    });

})
btn.addEventListener("click", function(){
    if (Uname.value !="" && sername.value!=""){
        confirm(`Вы подтверждаете заказ?
        Заказчик: ${Uname.value} ${sername.value}
        Сумма заказа: ${total.textContent}`)
    }
    else {
        Uname.style.border="3px solid #ff0000"
        Uname.style.placeholderColor="#ff0000"
    }
});
