const pharmacies=[

{
name:"صيدلية الفتح",
phone:"0528863442",
address:"Lot El Fath 01"
},

{
name:"صيدلية أبوزيد",
phone:"0528601500",
address:"Route Aglou"
},

{
name:"صيدلية السوق",
phone:"0528860200",
address:"Route Tafraoute"
},

{
name:"صيدلية إراك",
phone:"0528600346",
address:"Lotissement Erac"
},

{
name:"صيدلية طريق كلميم",
phone:"0528866778",
address:"Boulevard Bir Anzarane"
},

{
name:"صيدلية الأمل",
phone:"0528861729",
address:"Avenue 30 Afrag"
},

{
name:"صيدلية أوروبا",
phone:"0528863545",
address:"Amicale des fonctionnaires"
},

{
name:"صيدلية الشريف الإدريسي",
phone:"0528602525",
address:"Bab Aglou"
},

{
name:"صيدلية أفراك",
phone:"0528600788",
address:"Boulevard Driss El Harti"
},

{
name:"صيدلية بن عمر",
phone:"0528600814",
address:"Avenue 30 Afrag"
},

{
name:"صيدلية الصحة",
phone:"0528602526",
address:"Hay Al Massira"
},

{
name:"صيدلية إكرام",
phone:"0707150651",
address:"Route Aglou"
},

{
name:"صيدلية الشعب",
phone:"0528601755",
address:"Rue Allal Ben Abdellah"
},

{
name:"صيدلية الجنوب",
phone:"0528601400",
address:"Amicale des fonctionnaires"
},

{
name:"صيدلية الجديدة",
phone:"0528862742",
address:"Avenue Sidi Abderrahmane"
},

{
name:"صيدلية نصيري",
phone:"0528600721",
address:"Avenue Mohammed V"
},

{
name:"صيدلية بلحاج",
phone:"0528601782",
address:"Souk Si Blaid"
},

{
name:"صيدلية التكوين",
phone:"0525255060",
address:"Route Tafraoute"
},

{
name:"صيدلية حي النخيل",
phone:"0528861949",
address:"Hay Nakhil"
},

{
name:"صيدلية المحطة",
phone:"0667134940",
address:"Souk El Khmiss"
},

{
name:"صيدلية إيليغ",
phone:"0528860289",
address:"Saaidia"
},

{
name:"صيدلية ابن سينا",
phone:"0528860285",
address:"Route Guelmim"
},

{
name:"صيدلية الكبرى",
phone:"0528600814",
address:"Avenue Mohammed V"
},

{
name:"صيدلية فوق الواد",
phone:"0528601061",
address:"Agadir Assif"
},

{
name:"صيدلية المختار السوسي",
phone:"0528863565",
address:"Près hôpital Houmane"
},

{
name:"صيدلية رحمة الله",
phone:"0528866233",
address:"Lotissement Nahda"
},

{
name:"الصيدلية الإقليمية",
phone:"0528600775",
address:"Route Agadir"
},

{
name:"صيدلية المستقبل",
phone:"0528602111",
address:"Lotissement Al Oubour"
},

{
name:"صيدلية المستشفى",
phone:"0528863285",
address:"Route Aglou"
},

{
name:"صيدلية الأطلس",
phone:"0528601534",
address:"Route Ifni"
},

{
name:"صيدلية سهل سوس",
phone:"0528861741",
address:"Place El Mechouar"
},

{
name:"صيدلية طريق إفني",
phone:"0528601296",
address:"Route Ifni"
},

{
name:"الصيدلية المركزية",
phone:"0528861731",
address:"Amicale des fonctionnaires"
}

]

function today(){

const day=new Date().getDate()

return pharmacies[day%pharmacies.length]

}

function showToday(){

const p=today()

document.getElementById("today").innerHTML=

`<h2>🌙 صيدلية المداومة اليوم</h2>

<h3>${p.name}</h3>

<p>${p.address}</p>

<button class="call" onclick="location.href='tel:${p.phone}'">📞 اتصال</button>`

}

function showList(data){

const list=document.getElementById("list")

list.innerHTML=""

data.forEach(p=>{

list.innerHTML+=

`<div class="card">

<h3>${p.name}</h3>

<p>${p.address}</p>

<button class="call" onclick="location.href='tel:${p.phone}'">📞 اتصال</button>

<button class="map" onclick="window.open('https://maps.google.com/?q=${p.name}+Tiznit')">🗺️ خريطة</button>

</div>`

})

}

document.getElementById("search").addEventListener("input",function(){

const value=this.value

const result=pharmacies.filter(p=>p.name.includes(value))

showList(result)

})

showToday()

showList(pharmacies)
