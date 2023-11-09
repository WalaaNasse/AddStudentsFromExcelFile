fetch('https://excel-api-xd9r.onrender.com/students')
      .then(response => response.json())
      .then(data => {console.log(data)
  let ul=document.getElementById('sel');
      data.forEach(student => {
      var li=document.createElement('li')
        li.innerHTML=student.name;
        var img=document.createElement('img');
        img.src=student.imgUrl;
        li.appendChild(img)
        ul.appendChild(li)
        
      })});

      function addStudent(){
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
let id=document.getElementById('idd');
let name1=document.getElementById('txt_name');
let imgUrl=document.getElementById('img1')
var raw = JSON.stringify({
  "id": id.value,
  "name": name1.value,
  "imgUrl": imgUrl.value,
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://excel-api-xd9r.onrender.com/addStudents", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
      }