const backTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', (e) => { 
    if (window.scrollY >= 100) {
        backTop.style.opacity = '1' 
    } else {
        backTop.style.opacity = '0' 
    } 
})

const backSvg = document.querySelector('.back-to-top svg')

backSvg.addEventListener('click', () => {
    window.location = '#header';
})

AOS.init();


const form = document.querySelector("form")
const fullName = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const subject = document.getElementById("subject")
const mess = document.getElementById("message")


function sendEmail () {
    const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value} <br> Phone: ${phone.value} <br> Message: ${mess.value}`


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rentacargrom@gmail.com",
        Password : "FB19894D37CFD0A8FB526229AB32004B65A0",
        To : 'rentacargrom@gmail.com',
        From : "rentacargrom@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Uspesno!",
                text: "Uskoro ocekujte!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})
