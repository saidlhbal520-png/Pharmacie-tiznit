const pharmacies=[

{
name:"Pharmacie El Fath",
name_ar:"صيدلية الفتح",
address:"Lot El Fath 01 Tiznit",
phone:"0528863442"
},

{
name:"Pharmacie Abouzaid",
name_ar:"صيدلية أبوزيد",
address:"Route Aglou près Hôpital Hassan I",
phone:"0528601500"
},

{
name:"Pharmacie Europe",
name_ar:"صيدلية أوروبا",
address:"Amicale des fonctionnaires",
phone:"0528863545"
},

{
name:"Pharmacie Charif Idrissi",
name_ar:"صيدلية الشريف الإدريسي",
address:"Bab Aglou",
phone:"0528602525"
},

{
name:"Pharmacie Ibn Sina",
name_ar:"صيدلية ابن سينا",
address:"Route Guelmim",
phone:"0528860285"
},

{
name:"Pharmacie Al Amal",
name_ar:"صيدلية الأمل",
address:"Avenue 30 Afrag",
phone:"0528861729"
},

{
name:"Pharmacie Souk",
name_ar:"صيدلية السوق",
address:"Route Tafraoute",
phone:"0528860200"
},

{
name:"Pharmacie Erac",
name_ar:"صيدلية إراك",
address:"Lotissement Erac",
phone:"0528600346"
},

{
name:"Pharmacie Ben Omar",
name_ar:"صيدلية بن عمر",
address:"Rue Afrak",
phone:"0528600814"
},

{
name:"Pharmacie Nassiri",
name_ar:"صيدلية نصيري",
address:"Avenue Mohammed V",
phone:"0528600721"
},

{
name:"Pharmacie Ikram",
name_ar:"صيدلية إكرام",
address:"Route Aglou",
phone:"0707150651"
}

]

function todayPharmacy(){

const day=new Date().getDate()
return pharmacies[day % pharmacies.length]

}

function showToday(){

const p=todayPharmacy()

document.getElementById("today").innerHTML=

`<h2>🌙 صيدلية المداومة اليوم</h2>

<h3>${p.name_ar}</h3>

<p>${p.address}</p>

<a class="btn call" href="tel:${p.phone}">📞 اتصال</a>`

}

function display(data){

const container=document.getElementById("pharmacies")

container.innerHTML=""

data.forEach(p=>{

container.innerHTML+=

`<div class="card">

<h3>${p.name_ar}</h3>

<p>${p.address}</p>

<div class="buttons">

<a class="btn call" href="tel:${p.phone}">📞 اتصال</a>

<a class="btn map" target="_blank"
href="https://www.google.com/maps/search/${p.name}+Tiznit">🗺️ خريطة</a>

</div>

</div>`

})

}

document.getElementById("search").addEventListener("input",function(){

const value=this.value

const result=pharmacies.filter(p=>p.name_ar.includes(value))

display(result)

})

showToday()

display(pharmacies)
