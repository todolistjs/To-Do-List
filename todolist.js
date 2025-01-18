function addtask()
{
    var taskinput = document.getElementById("taskinput").value
    var tasklist = document.getElementById("tasklist")
    if(taskinput == "")
    {
        alert("Task is empty. Please enter the task..!")
        return
    }


    var listitems = document.createElement('li')
    listitems.innerText = taskinput
    tasklist.appendChild(listitems)

    var buttoncontainer = document.createElement('div')
    listitems.appendChild(buttoncontainer)
    buttoncontainer.className="task-button"

    var deletebutton = document.createElement('button')
    buttoncontainer.appendChild(deletebutton)
    deletebutton.innerText="Delete"
    deletebutton.onclick=function(){
        tasklist.removeChild(listitems)
    }

    var completebutton = document.createElement('button')
    buttoncontainer.appendChild(completebutton)
    completebutton.innerText="Complete"
    completebutton.onclick=function() {
        listitems.classList.toggle('completed')
    }

    document.getElementById("taskinput").value = ""

}
