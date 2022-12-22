 var form =document.getElementById('addForm');
 var itemlist=document.getElementById('items');
 var filter=document.getElementById('filter');

 
 //console.log(form)
 form.addEventListener('submit', additem);

 itemlist.addEventListener('click',removeItem);

 filter.addEventListener('keyup',filteritems);

 function additem(e) {

    e.preventDefault();
    
    var newitem=document.getElementById('item').value

    var li=document.createElement('li');
    li.className="list-group-item"

    li.appendChild(document.createTextNode(newitem));

    itemlist.appendChild(li);

    // deleye btn addition 

    var deletebtn=document.createElement('button');
    deletebtn.className="btn btn-danger btn-sm float-right delete";
    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);

    // edit button addition
    var editb=document.createElement('button');
    editb.className="btn btn-danger btn-sm float-right delete";
    editb.appendChild(document.createTextNode('edit'));
    li.appendChild(editb);

 }

 function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemlist.removeChild(li);
      }
    }
  }

  function filteritems(e){
    var text=e.target.value.toLowerCase();

    var items= itemlist.getElementsByTagName('li')
    
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display="block";
        
        }
        else{
            item.style.display="none"
        }
    });
  }
 
 
