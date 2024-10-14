document.getElementById("addButton").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Masukkan tugas!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-button";
    editButton.onclick = function() {
        editTask(taskInput, li);
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Hapus";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function() {
        deleteTask(li);
    };

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function editTask(taskInput, li) {
    const currentTask = li.firstChild.textContent;
    taskInput.value = currentTask;
    deleteTask(li);
}

function deleteTask(li) {
    li.remove();
}
