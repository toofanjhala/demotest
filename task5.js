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

let change= document.getElementsByTagName('li');
//console.log(change);
change[0].textContent="New item1";

let edit=document.getElementsByClassName("list-group-item");
// for(var i=0;i<edit.length;i++)
// {    i=i+1;
//     edit[i].style.backgroundColor="#ccc"
// }

for(var i=0;i<change.length;i++)
{    
    change[i].style.fontWeight="bold"
}