
var plus=document.querySelector('#plus')
var moin=document.querySelector('#moin')
var compteur=document.querySelector('#compteur')
var prix_total=document.querySelector('#prix_total')
var prix=document.querySelector('#prix')

//console.log(plus,moin,compteur)

plus.addEventListener("click",function(){
    compteur.innerHTML++;

 })
moin.addEventListener("click",function(){
    compteur.innerHTML--;
})
var delet=document.querySelector('#delet')
var like=document.querySelector('#like')
//console.log(delet,like)
delet.addEventListener("click",function(){
    card.remove()
})
like.addEventListener("click",function(){
    like.classList.toggle('liketg')
})
var plus1=document.querySelector('#plus1')
var moin1=document.querySelector('#moin1')
var compteur1=document.querySelector('#compteur1')
var prix_total1=document.querySelector('#prix_total1')
var prix1=document.querySelector('#prix1')
plus1.addEventListener("click",function(){
    compteur1.innerHTML++;

 })
moin1.addEventListener("click",function(){
    compteur1.innerHTML--;
})
var delet1=document.querySelector('#delet1')
var like1=document.querySelector('#like1')
//console.log(delet,like)
delet1.addEventListener("click",function(){
    card1.remove()
})
like1.addEventListener("click",function(){
    like1.classList.toggle('liketg')
})
var plus2=document.querySelector('#plus2')
var moin2=document.querySelector('#moin2')
var compteur2=document.querySelector('#compteur2')
var prix_total2=document.querySelector('#prix_total2')
var prix2=document.querySelector('#prix2')

//console.log(plus,moin,compteur)

plus2.addEventListener("click",function(){
    compteur2.innerHTML++;

 })
moin2.addEventListener("click",function(){
    compteur2.innerHTML--;
})
var delet2=document.querySelector('#delet2')
var like2=document.querySelector('#like2')
//console.log(delet,like)
delet2.addEventListener("click",function(){
    card2.remove()
})
like2.addEventListener("click",function(){
    like2.classList.toggle('liketg')
})


function total(){
    var prix = document.getElementById('prix')[0]
    for (i=0;i<length.card;i++){
        var prix = document.getElementById('prix')[0]
        var compteur = document.getElementById('compteur')
       // console.log(prix,compteur)
    }


}
