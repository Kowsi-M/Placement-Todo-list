function addTask() {
  const taskName = document.getElementById("taskName").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const priority = document.getElementById("priority").value;

  if (!taskName || !startDate || !endDate) {
    alert("Please fill all fields.");
    return;
  }

  const table = document.getElementById("taskList");
  const row = table.insertRow();

  row.insertCell(0).textContent = taskName;
  row.insertCell(1).textContent = startDate;
  row.insertCell(2).textContent = endDate;
  row.insertCell(3).textContent = priority;

  const statusCell = row.insertCell(4);
  statusCell.textContent = "Pending";

  const actionsCell = row.insertCell(5);
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✅";
  completeBtn.onclick = () => {
    row.classList.toggle("completed");
    statusCell.textContent = row.classList.contains("completed") ? "Completed" : "Pending";
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.onclick = () => {
    row.remove();
  };

  actionsCell.appendChild(completeBtn);
  actionsCell.appendChild(deleteBtn);

  // Reset inputs
  document.getElementById("taskName").value = "";
  document.getElementById("startDate").value = "";
  document.getElementById("endDate").value = "";
  document.getElementById("priority").value = "High";
}







