const pharmacies=[

{name:"صيدلية الفتح",address:"Lot El Fath 01 أمام مسجد الفتح",phone:"0528863442"},
{name:"صيدلية أبوزيد",address:"طريق أكلو قرب مستشفى الحسن الأول",phone:"0528601500"},
{name:"صيدلية السوق",address:"طريق تفراوت الحي الصناعي",phone:"0528860200"},
{name:"صيدلية إراك",address:"شارع 30 تجزئة إراك",phone:"0528600346"},
{name:"صيدلية طريق كلميم",address:"شارع بئر أنزاران طريق كلميم",phone:"0528866778"},
{name:"صيدلية الأمل",address:"شارع 30 أفراك قرب مقهى فينيسيا",phone:"0528861729"},
{name:"صيدلية أسفار ن إسفارن",address:"شارع الحسن الثاني تجزئة الحرية",phone:"0528862434"},
{name:"صيدلية أوروبا",address:"ودادية الموظفين أمام حديقة مولاي عبد الله",phone:"0528863545"},
{name:"صيدلية الوداديات",address:"أمام مسجد السنة",phone:"0528861550"},
{name:"صيدلية الشريف الإدريسي",address:"خارج باب أكلو قرب عيادة جاسم",phone:"0528602525"},
{name:"صيدلية شارع 30",address:"شارع 30 قرب ثانوية الوحدة",phone:"0528864433"},
{name:"صيدلية أفراك",address:"شارع دريس الحارتي قرب مسجد القدس",phone:"0528600788"},
{name:"صيدلية بن عمر",address:"شارع 30 أفراك مقابل BMCE",phone:"0528600814"},
{name:"صيدلية الصحة",address:"حي المسيرة بين حمام أسكتي وشارع الوفاق",phone:"0528602526"},
{name:"صيدلية إكرام",address:"عمارة نصر طريق أكلو",phone:"0707150651"},
{name:"صيدلية الشعب",address:"قرب المحكمة الابتدائية شارع علال بن عبد الله",phone:"0528601755"},
{name:"صيدلية الجنوب",address:"قرب ودادية الموظفين",phone:"0528601400"},
{name:"صيدلية الجديدة",address:"شارع سيدي عبد الرحمان",phone:"0528862742"},
{name:"صيدلية نصيري",address:"رقم 1 شارع محمد الخامس اليوسفية",phone:"0528600721"},
{name:"صيدلية بلحاج",address:"سوق سي بلعيد",phone:"0528601782"},
{name:"صيدلية التكوين",address:"طريق تفراوت قرب التكوين المهني",phone:"0525255060"},
{name:"صيدلية حي النخيل",address:"الشارع الرئيسي حي النخيل",phone:"0528861949"},
{name:"صيدلية المحطة",address:"طريق تفراوت قرب سوق الخميس",phone:"0667134940"},
{name:"صيدلية إيليغ",address:"السعيدية قرب مدرسة يعقوبي",phone:"0528860289"},
{name:"صيدلية ابن سينا",address:"طريق كلميم أمام محطة شيل",phone:"0528860285"},
{name:"صيدلية الكبرى",address:"شارع محمد الخامس اليوسفية",phone:"0528600814"},
{name:"صيدلية فوق الواد",address:"فوق الواد اتجاه تاركا قرب مدرسة 18 نونبر",phone:"0528601061"},
{name:"صيدلية المختار السوسي",address:"أمام مستشفى حمان الفتوكي",phone:"0528863565"},
{name:"صيدلية الشفاء",address:"الطريق القديم لأكلو قرب مدرسة الصفا",phone:"0707735712"},
{name:"صيدلية رحمة الله",address:"تجزئة نهضة 2 أمام مؤسسة رواد النهضة",phone:"0528866233"},
{name:"الصيدلية الإقليمية",address:"طريق أكادير",phone:"0528600775"},
{name:"صيدلية المستقبل",address:"تجزئة العبور العين الزرقة قرب خزان المياه",phone:"0528602111"},
{name:"صيدلية المستشفى",address:"طريق أكلو أمام مستشفى الحسن الأول",phone:"0528863285"},
{name:"صيدلية الأطلس",address:"تقاطع طريق إفني وشارع 30",phone:"0528601534"},
{name:"صيدلية سهل سوس",address:"ساحة المشوار",phone:"0528861741"},
{name:"صيدلية طريق إفني",address:"طريق إفني قرب محطة أفريقيا",phone:"0528601296"},
{name:"الصيدلية المركزية",address:"رقم 186 بلوك B ودادية الموظفين",phone:"0528861731"},
{name:"صيدلية المرس",address:"شارع المرس أمام المركز الصحي",phone:"0528860728"}

]

function showToday(){

let day=new Date().getDate()
let p=pharmacies[day % pharmacies.length]

document.getElementById("todayPharmacy").innerHTML=
`
<b>${p.name}</b>
<p>${p.address}</p>
`

}

function showList(data){

let list=document.getElementById("pharmacyList")

list.innerHTML=""

data.forEach(p=>{

list.innerHTML+=`

<li>

<div class="name">${p.name}</div>
<div class="address">${p.address}</div>

<div class="buttons">

<button class="call" onclick="window.location.href='tel:${p.phone}'">📞 اتصال</button>

<button class="map" onclick="window.open('https://maps.google.com/?q=${p.address} Tiznit')">🗺️ خريطة</button>

</div>

</li>

`

})

}

document.getElementById("search").addEventListener("input",function(){

let value=this.value
let filtered=pharmacies.filter(p=>p.name.includes(value))

showList(filtered)

})

showToday()
showList(pharmacies)
