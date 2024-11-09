let listContainer = document.getElementById('list-container');
let inputBox = document.getElementById('input-box');

function addTask() {
    if(inputBox.value === '') 
    {
        alert('Add Your Task First')
    }
    else {
        let tasks = document.createElement('li')
        tasks.innerHTML = inputBox.value;
        listContainer.appendChild(tasks);

        let span = document.createElement('span');
        span.textContent = '\u00d7';
        tasks.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveData();
    }
    else if(e.target.tagName == 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }

}, false)


function saveData() {
    localStorage.setItem("task", listContainer.innerHTML)
}

function showData()  {
    listContainer.innerHTML = localStorage.getItem('task')

}
showData();