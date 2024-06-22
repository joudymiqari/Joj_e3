fetch('data.json')
  .then(res => res.json())
  .then(data => {
    handeldata(data);

  })


document.getElementById("purchaseForm").style.display = "none";
document.getElementById("submit").disabled = true;



let arrdetalis = [];





function handeldata(flats) {

  const flat = document.getElementById("flats");
  flats.forEach(myFlat => {
    let flat1 = creatrow(myFlat);
    let flatdetal = addDetal(myFlat);
    flat.appendChild(flat1);
    flat.appendChild(flatdetal);

  });

}


function creatrow(myflat) {

  const row = document.createElement("tr");
  for (let i = 0; i < 5; i++) {
    const cell = document.createElement("td");
    row.appendChild(cell)
  }



  row.children[0].textContent = `${myflat.city}`;


  row.children[1].textContent = `${myflat.dital}`;


  row.children[2].textContent = `${myflat.rent}`;

  const chek = document.createElement("input");
  chek.setAttribute("type", "checkbox");
  chek.onclick = function () {

    chek.parentElement.parentElement.nextElementSibling.classList.toggle("hid");

  }
  row.children[3].appendChild(chek);



  const radio = document.createElement("input");
  radio.setAttribute("type", "radio");
  radio.setAttribute("name", radio)
  radio.onchange = function () {


    document.getElementById("submit").disabled = false;
    for (let index = 0, index1 = 0; index < 5; index++, index1++) {
      arrdetalis[index1] = (this.parentElement.parentElement.children[index].innerText);
    }

  }
  row.children[4].appendChild(radio);


  return row;
}
//----------------------------------------------------------

function addDetal(myFlat) {

  const row = document.createElement("tr");
  row.classList.add("hid")
  row.innerHTML = `
  <td colspan="5">
                     <div class="info">
                      <ul class="text">
                       <li> المنطقة: ${myFlat.aria} </li>
                       <li>متوفر كراج: ${myFlat.garage} </li>
                       <li>الطابق: ${myFlat.storey} </li>
                       <li>الملكية: ${myFlat.property} </li>
                       <li>مساحة بلكون: ${myFlat.space} </li>
                       <li>مفروشة: ${myFlat.furnished} </li>
                     </ul>
                     <div class="imge">
                     <img src="${myFlat.img1}" alt="">
                     <img src="${myFlat.img2}" alt="">
                     <img src="${myFlat.img3}" alt="">
                      </div>


                    </div> 
                  </td>`
  return row;
}

function submitFunc() {
  document.getElementById("purchaseForm").style.display = "block";
}

function Captcha() {
  // Define the characters that can be used in the captcha code
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  // Generate a random string of 6 characters
  let captchaCode = "";
  for (let i = 0; i < 6; i++) {
    captchaCode += chars[Math.floor(Math.random() * chars.length)];
  }

  // Set the value of the txtCaptcha element to the captcha code
  document.getElementById("txtCaptcha").value = captchaCode;
}
let sub = document.getElementById("sub");
sub.onclick = function () {


  var txtCompare = document.getElementById("txtCompare").value;

  var captcha = document.getElementById("txtCaptcha").value;

  if (captcha == "") {
    alert("يرجى إدخال رمز التحقق من الكابتشا");
    return false;
  }

  if (captcha != txtCompare) {
    alert("رمز التحقق من الكابتشا غير صحيح");
    return false;
  }

  var numberPattern = /^(0[1-9]|1[0-5])[0-9]{9}$/;
  if (!numberPattern.test(nationalID.value)) {
    alert("يرجى إدخال رقم وطني صالح بين 01 و 15");
    return false;
  }

  alert(" لقد تم حجز شقة بنجاح \n"
    + "مدينة " + arrdetalis[0] + "\n"
    + " " + arrdetalis[1] + "\n"
    + "بسعر " + arrdetalis[2] + "\n")


}





