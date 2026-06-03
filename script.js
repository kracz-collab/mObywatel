const editBtn = document.getElementById("editBtn");

editBtn.addEventListener("click", () => {
  const name = prompt("Imię:");
  const surname = prompt("Nazwisko:");
  const pesel = prompt("PESEL:");
  const birth = prompt("Data urodzenia:");

  if (name) document.getElementById("name").textContent = name;
  if (surname) document.getElementById("surname").textContent = surname;
  if (pesel) document.getElementById("pesel").textContent = pesel;
  if (birth) document.getElementById("birth").textContent = birth;

  saveData();
});

function saveData() {
  const data = {
    name: document.getElementById("name").textContent,
    surname: document.getElementById("surname").textContent,
    pesel: document.getElementById("pesel").textContent,
    birth: document.getElementById("birth").textContent,
  };

  localStorage.setItem("idData", JSON.stringify(data));
}

function loadData() {
  const data = JSON.parse(localStorage.getItem("idData"));

  if (data) {
    document.getElementById("name").textContent = data.name;
    document.getElementById("surname").textContent = data.surname;
    document.getElementById("pesel").textContent = data.pesel;
    document.getElementById("birth").textContent = data.birth;
  }
}

loadData();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
