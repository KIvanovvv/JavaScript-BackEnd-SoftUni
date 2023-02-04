document.getElementById("btn").addEventListener("click", getData);
document.getElementById("reg-form").addEventListener("submit", register);

async function getData(e) {
  const res = await fetch("http://localhost:3030/");
  const data = await res.json();
  console.log(data);
}

async function register(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  // console.log(data);
  const res = await fetch("http://localhost:3030/auth/register", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const userData = await res.json();
  console.log(userData);
  sessionStorage.setItem("user", JSON.stringify(userData));
}
