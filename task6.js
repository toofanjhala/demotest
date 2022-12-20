//console.log(document.all);
//document.all[10].textContent="hello"
//let doc=document.querySelectorAll("main-header");
 headertitle=document.getElementById("main-header")
//headertitle.textContent="hello world"

headertitle.style.borderBottom="solid 5px #000";
var newitem=document.getElementsByClassName("title");
//console.log(newitem)
newitem[0].style.color="green"
newitem[0].style.fontWeight="bold"

//var secnditem=document.querySelector(".list-group-item:nth-child(2)");
// secnditem.style.backgroundColor="green"

// var thirditem=document.querySelector(".list-group-item:nth-child(3)");
// thirditem.style="display: none"
 

// using all query selector

var items=document.querySelectorAll('li');
items[1].style.backgroundColor="green"

var allitems=document.querySelectorAll('li');
for(var i=0;i<allitems.length;i++)
{
    items[i].style.backgroundColor="orange"
}
