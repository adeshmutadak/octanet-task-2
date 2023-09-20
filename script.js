const taskInput = document.getElementById("task");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        const timestamp = new Date().toLocaleString(); // Get current timestamp
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <span class="timestamp">${timestamp}</span>
            <button class="deleteBtn">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";
        addDeleteListener(taskItem);
    }
}

function addDeleteListener(taskItem) {
    const deleteBtn = taskItem.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
    });
}
