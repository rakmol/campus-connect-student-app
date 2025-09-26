const API_URL = "http://backend-service:5000";

document.getElementById("studentForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const age = document.getElementById("age").value;
  const dob = document.getElementById("dob").value;
  const placeOfBirth = document.getElementById("placeOfBirth").value;

  await fetch(`${API_URL}/students`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fullName, age, dob, placeOfBirth })
  });

  loadStudents();
});

async function loadStudents() {
  const res = await fetch(`${API_URL}/students`);
  const students = await res.json();

  const list = document.getElementById("studentsList");
  list.innerHTML = "";
  students.forEach(s => {
    const li = document.createElement("li");
    li.textContent = `${s.fullName} - ${s.age} years old (Born: ${s.dob}, Place: ${s.placeOfBirth})`;
    list.appendChild(li);
  });
}

loadStudents();
