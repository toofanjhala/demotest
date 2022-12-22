

const form= document.querySelector('#my-form');

const Name= document.querySelector('#name');

const email= document.querySelector('#email');



form.addEventListener('submit',onsubmit);

function onsubmit(e)
{

  e.preventDefault();


    let myobj={
      name:`${Name.value}`,
      email:`${email.value}`
    }
       //no string type
    //console.log(myobj);
    //localStorage.setItem("candidate",myobj)

   let myobj_converted=JSON.stringify(myobj);

    localStorage.setItem("myobj",myobj_converted);

   let myobjreconverted=JSON.parse(localStorage.getItem('myobj'))
   console.log("1" + myobj)
   console.log("2"+ myobj_converted)
   console.log("3" +myobjreconverted);
     
   

  Name.value=" " ;
  email.value=" ";
   }
  

