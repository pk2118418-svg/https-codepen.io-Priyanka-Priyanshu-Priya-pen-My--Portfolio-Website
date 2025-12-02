// =========================================================
// PROJECT 1: PORTFOLIO (Smooth Scroll)
// =========================================================
document.querySelectorAll('.portfolio-header a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// =========================================================
// PROJECT 2: IMAGE GALLERY (Modal Logic)
// =========================================================
const modalP2 = document.getElementById('image-modal-p2');
const modalImageP2 = document.getElementById('modal-image-p2');
const closeBtnP2 = document.getElementsByClassName('close-btn-p2')[0];
const galleryItemsP2 = document.querySelectorAll('.gallery-img-p2');

galleryItemsP2.forEach(item => {
    item.addEventListener('click', function() {
        modalP2.style.display = "block";
        modalImageP2.src = this.src;
    });
});

closeBtnP2.onclick = function() { modalP2.style.display = "none"; }
window.onclick = function(event) {
    if (event.target == modalP2) { modalP2.style.display = "none"; }
}

// =========================================================
// PROJECT 3: TO-DO LIST (Functionality and Local Storage)
// =========================================================
const todoInputP3 = document.getElementById("todo-input-p3");
const taskListP3 = document.getElementById("task-list-p3");
const addTaskBtnP3 = document.getElementById("add-task-btn-p3");

function addTask() {
    if (todoInputP3.value === '') {
        alert("Please enter a task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = todoInputP3.value;
        taskListP3.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        span.className = "delete-btn-p3"; 
        li.appendChild(span);
    }
    todoInputP3.value = "";
    saveTodoData();
}

// Event listeners for the button and list clicks
addTaskBtnP3.addEventListener('click', addTask); // Added button listener

taskListP3.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTodoData();
    } else if (e.target.tagName === "SPAN" && e.target.className === "delete-btn-p3") {
        e.target.parentElement.remove();
        saveTodoData();
    }
}, false);

function saveTodoData() {
    localStorage.setItem("pk_todo_data", taskListP3.innerHTML);
}

function showTodoTasks() {
    taskListP3.innerHTML = localStorage.getItem("pk_todo_data") || "";
}
showTodoTasks(); 

// =========================================================
// PROJECT 4: CALCULATOR (Logic)
// =========================================================
let calcScreenP4 = document.getElementById("calc-screen-p4");

function calcDisplayP4(num) {
    if (calcScreenP4.value === "Error") {
        calcScreenP4.value = "";
    }
    calcScreenP4.value += num;
}

function calcCalculateP4() {
    try {
        // WARNING: eval() is used here for simplicity.
        calcScreenP4.value = eval(calcScreenP4.value);
    } catch (err) {
        calcScreenP4.value = "Error";
    }
}

function calcClearP4() {
    calcScreenP4.value = "";
}

function calcDelP4() {
    calcScreenP4.value = calcScreenP4.value.slice(0, -1);
}

// Note: Project 5 is a placeholder and requires no JavaScript.
