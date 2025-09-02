const API_URL = "http://localhost:30001/api/students"; // NodePort backend

document.getElementById("studentForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const course = document.getElementById("course").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, course }),
  });

  loadStudents();
});

async function loadStudents() {
  const res = await fetch(API_URL);
  const students = await res.json();
  const list = document.getElementById("studentList");
  list.innerHTML = "";
  students.forEach((s) => {
    const li = document.createElement("li");
    li.textContent = `${s.name} - ${s.email} - ${s.course}`;
    list.appendChild(li);
  });
}

loadStudents();
