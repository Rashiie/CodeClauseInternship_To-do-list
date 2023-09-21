

inputBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

listContainer.addEventListener("click", function(e)
{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData()
{
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask()
{
    listContainer.innerHTML= localStorage.getItem("data");
}
showTask();
