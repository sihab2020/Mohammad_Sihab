var date=new Date();
var day=date.getDate();
var month=date.getMonth();
var year=date.getFullYear();
var Month=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
function ShowDate() {
    date=Month[month]+" "+day+","+year;
    return date;
}

document.querySelector(".time").innerHTML=ShowDate();
document.querySelector(".time1").innerHTML=ShowDate();
document.querySelector(".time2").innerHTML=ShowDate();
document.querySelector(".time3").innerHTML=ShowDate();
document.querySelector(".time4").innerHTML=ShowDate();
document.querySelector(".time5").innerHTML=ShowDate();
document.querySelector(".time6").innerHTML=ShowDate();
document.querySelector(".time7").innerHTML=ShowDate();
document.querySelector(".time8").innerHTML=ShowDate();

// <!-- Place this script at the end of the body tag 
    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)     