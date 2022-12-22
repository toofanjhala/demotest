const btn= document.querySelector('.btn');

const container= document.querySelector('.container');

const form= document.querySelector('#my-form');

const Name= document.querySelector('#name');

const email= document.querySelector('#email');

const msg= document.querySelector('.msg');

const userlist= document.querySelector('#users')

form.addEventListener('submit',onsubmit);

function onsubmit(e)
{

  e.preventDefault();

  if(Name.value===" " || email.value===" ")
  {
   msg.classList.add('error'); 
   msg.innerHTML="PLEASE ENTER ALL FIELD"
   setTimeout(() => {
   msg.remove()
   }, 3000);
  }
else
   {
   localStorage.setItem('name',`${Name.value}`);
   localStorage.setItem('email',`${email.value}`)

  Name.value=" " ;
  email.value=" ";
   }
  

}