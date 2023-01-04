const button=document.getElementById('b1');

button.addEventListener("click", function(){
    const trash=document.createElement('trash')
    trash.innerHTML='<i class="fa fa-trash"></i>'
    const div= document.createElement('div')
    const input=document.getElementById('input')
    const newtext = document.createTextNode(input.value);
     const elem=div.appendChild(newtext)
    div.appendChild(trash)
    trash.classList.add("delete")

    const tasks=document.getElementById('tasks')
    tasks.appendChild(div);
    div.classList.add("best")
    const table=document.getElementsByClassName('delete')
    for(let i=0;i<table.length;i++){
        table[i].onclick=function(){
        this.parentNode.remove()};
        
    }
    

});



const b2=document.getElementById('b2');

b2.addEventListener("click", function(){
  
    document.getElementById('tasks').innerHTML=""

})

  















    
   
    


 
 


