const inputDiv = document.querySelector('inputDiv');
const input = document.getElementById('input');
const button = document.getElementById('button');
const contentDiv = document.querySelector('.contentDiv');




var say = 0;
button.addEventListener("click", myFunction);

function myFunction() {

    if(input.value != ""){
        say++;
    var paragraf = document.createElement('p');
    var deleteButton=document.createElement('div');
    deleteButton.classList.add('deleteButton');
    deleteButton.innerText = "Delete";
    paragraf.innerText = say + '=' + input.value;
    contentDiv.appendChild(paragraf);
    paragraf.appendChild(deleteButton)
    input.value = "";

    deleteButton.addEventListener('click',function(){
        say--;
        contentDiv.removeChild(paragraf);
    
    });

    

    




} 
}


    

    





    
