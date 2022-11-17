let list=[]
let addBTN= document.getElementById('addToDo');
let toDoContainer= document.getElementById('toDoContainer');
let txtText=document.getElementById('txtText')
let clearBtn=document.getElementById('clearToDo')
let consoleBas=document.getElementById('consoleBas')

addBTN.addEventListener('click', function(){
    let parag = document.createElement('p')
    parag.classList.add('parag-style')
    toDoContainer.appendChild(parag);
    list.push(txtText.value)
    parag.innerHTML=txtText.value;
    txtText.value="";
    
    
    parag.addEventListener('click', function(){
        parag.style.textDecoration = 'line-through';
    })
    parag.addEventListener('dblclick', function(){
        toDoContainer.removeChild(parag)
        const listIcı= list.childiren
        list.splice(list.indexOf(listIndex,1))
        
    })

    clearBtn.addEventListener('click', function(){
        parag.remove()
        list=[]
        
       
    })
    consoleBas.addEventListener('click', function(){
       console.log(list)
        
       
    })
})