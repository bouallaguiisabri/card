
let plus = Array.from(document.querySelectorAll("#plus"))
let moin = Array.from(document.querySelectorAll("#moin"))
let compteur = Array.from(document.querySelectorAll(".compteur"))
let prix = Array.from(document.querySelectorAll(".prix"))
let like = Array.from(document.querySelectorAll("#like"))
let delet = Array.from(document.querySelectorAll("#delet"))
let card = Array.from(document.querySelectorAll("#card"))

let arrOfCompteur= []
let arrOfPrix= []
for(let i in compteur){
    arrOfCompteur[i]=0;
}
for(let i in prix){
    arrOfPrix[i] = +prix[i].innerHTML;
}

console.log(plus,moin,compteur,prix,like,delet,card)
function updateTotal() {
    let Total =0
    for(let i in compteur){
        Total+=arrOfPrix[i]*arrOfCompteur[i];
        document.getElementById('prix_total').textContent=
        `PRIX TOTAL :${Total}$` 
        
    }
}
updateTotal();
for(let i in plus){
    plus[i].addEventListener("click",function(){
        arrOfCompteur[i]++;
        compteur[i].innerHTML =arrOfCompteur[i];
        updateTotal();
    })
}
for(let i in moin){
    moin[i].addEventListener("click",function(){
        if(arrOfCompteur[i]>0){
        arrOfCompteur[i]--;
        compteur[i].innerHTML=arrOfCompteur[i];
        updateTotal();
    }
    })
}
for(let i in like){
    like[i].addEventListener("click",function(){
        like[i].classList.toggle('liketg')
})}
for(let i in delet){
    delet[i].addEventListener("click",function(){
        arrOfCompteur[i]=0;
        updateTotal();
        card[i].remove()
    })
}



