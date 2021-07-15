var orderlist = document.getElementById("orderlist");

function insert(){
    var input = document.getElementById("inputtext");
    var li = document.createElement("li");
    var litext = document.createTextNode(input.value);
    li.appendChild(litext);
    orderlist.appendChild(li);
    var editbutton = document.createElement("button");
    var editbuttontext = document.createTextNode("Edit Text");
    editbutton.appendChild(editbuttontext);
    li.appendChild(editbutton);
    var deletbutton = document.createElement("button");
    var deletbuttontext = document.createTextNode("Delet Raw");
    deletbutton.appendChild(deletbuttontext);
    li.appendChild(deletbutton);

   


    input.value=""
    deletbutton.setAttribute("onclick","delet(this)");
    editbutton.setAttribute("onclick","edit(this)");

    editbutton.setAttribute("class","editbtn")
    
}

function deletall(){
    orderlist.innerHTML=""
}

function delet(e){
    console.log(e)
e.parentNode.remove();
}

function edit(f){
    var reedit = prompt("Enter New Text");
    var editt = reedit.charAt(0).toUpperCase() + reedit.slice(1);
    f.parentNode.firstChild.nodeValue = editt;
}




