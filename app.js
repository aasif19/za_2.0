// const service_images = document.querySelectorAll(".service__image");

// window.addEventListener('scroll',checkBoxes);



// function checkBoxes(){
//     const triggerBottom=window.innerHeight/10*4;


// service_images.forEach(service__image=>{
//     const boxTop = service__image.getBoundingClientRect().top;

//     if(boxTop<triggerBottom){
//         service__image.classList.add('show')
//     }else{
//         service__image.classList.remove("show");
//     }
// })
// }
// checkBoxes();

// window.addEventListener("scroll", reveal);

// function reveal(){
//     let reveals = document.querySelectorAll(".reveal");
//     for (let i=0;i<reveal.length;i++){
//         let windowheight=window.innerHeight;
//         let revealtop=reveals[i].getBoundingClientRect().top;
//         let revealpoint=100;
//         if(revealtop <windowheight-revealpoint){
//             reveals[i].classList.add('active')
//         }
//         else{
//            reveals[i].classList.remove("active"); 
//         }
//     }
// }   


// let mobile = document.getElementById("mobile");
// let badcolor = "red";
// mobile.addEventListener("click", function check() {
//   if (mobile.value > 10 && mobile.value < 10) {
//     mobile.style.backgroundColor = badcolor;
//     alert("Enter valid mobile number");
//   }
// });

// let submit = document.getElementById("#form-submit");

// submit.addEventListener("click", function messages() {
//   alert("Got your mail. We will reach you soon :)");
// });

// function resetform() {
//   document.getElementById("reset").reset();
// }




let submit = document.getElementById("#form-submit");

submit.addEventListener("click", function messages() {
  alert("Got your mail. We will reach you soon :)");
});

function resetform() {
  document.getElementById("reseting").reset();
}


function revealFunction(){
  window.sr =ScrollReveal({duration:1000, distance:'100px',easing:'ease-out'});

  sr.reveal('.reveal__left',{origin:'left', reset:false});
}

window.addEventListener('load',()=>{
  revealFunction();
})

