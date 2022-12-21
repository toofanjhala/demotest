let itemlist=document.querySelector('#items')
//console.log(itemlist)

//parentnode

//itemlist.parentNode.style.backgroundColor="#red"
//console.log(itemlist.parentNode)
//itemlist.parentNode.style.color="red"


// parent element
//console.log(itemlist.parentElement.parentElement)
//itemlist.parentElement.parentElement.style.border=" 5px solid red";


//childnode or children
//childnode select text and not usefull
//itemlist.children[1].style.color="red"

  
//firstelement or firstchild 
//console.log(itemlist.firstChild) same as child node 
//itemlist.firstElementChild.textContent="hello"

//lastelementchild or lastchild

//console.log(itemlist.lastChild) 
//itemlist.lastElementChild.textContent="hellohello"


//sibling nextsibling previoussibling previouselementsibling
//itemlist.previousElementSibling.textContent="content"

// create a div 

 let newdiv= document.createElement("li")

newdiv.className="list-group-item"
 //newdiv.id="name"
 //newdiv.setAttribute('title','head')
 //console.log(newdiv)
var newdiv1= document.createTextNode("hello")

newdiv.appendChild(newdiv1);
 console.log(newdiv)

// var container=document.querySelector('header .container')
// var h1 =document.querySelector('header h1');
// container.insertBefore(newdiv,h1)

parentnode=document.getElementById('items')
//console.log(parentnode)
parentnode.innerhtml="<li>hello</li>"+"parentnode.innerhtml"






