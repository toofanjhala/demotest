//console.log(document.all);
//document.all[10].textContent="hello"
//let doc=document.querySelectorAll("main-header");
 headertitle=document.getElementById("main-header")
//headertitle.textContent="hello world"

headertitle.style.borderBottom="solid 5px #000";
newitem=document.getElementsByClassName("title");
//console.log(newitem)
newitem[0].style.color="green"
newitem[0].style.fontWeight="bold"

let items =document.querySelectorAll(".list-group")
items[0].style.border="solid 2px red"

let listman =document.querySelectorAll(".list-group-item")
listman[0].style.backgroundColor = "#dfdfdf";
listman[1].style.backgroundColor = "#aaa";
listman[2].style.backgroundColor = "#dfdfdf";
listman[3].style.backgroundColor = "#aaa";