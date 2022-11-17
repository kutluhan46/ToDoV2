let list=[]
let addBTN= document.getElementById('addToDo');
let toDoContainer= document.getElementById('toDoContainer');
let txtText=document.getElementById('txtText')
let clearBtn=document.getElementById('clearToDo')
let consoleBas=document.getElementById('consoleBas')


addBTN.addEventListener('click', function(){
    list.push(txtText.value)
    // console.clear()
    txtText.value=""
    toDoContainer.innerHTML=""
    
    for(let i=0;i<list.length;i++){
        let parag=document.createElement('p')
        parag.classList.add('parag-style')
        toDoContainer.appendChild(parag)
        parag.innerHTML=list[i]

        clearBtn.addEventListener('click', function(){
            parag.remove()
            list=[]
        })


        parag.addEventListener('dblclick',function(){
            toDoContainer.removeChild(parag)
            let ara= parag.innerHTML
             let bln= list.indexOf(ara)
            list.splice(bln,1)
            
        
            
        })
        // console.log(list[i])
    }
    consoleBas.addEventListener('click', function(){
        console.log(list)
         
        
     })

})