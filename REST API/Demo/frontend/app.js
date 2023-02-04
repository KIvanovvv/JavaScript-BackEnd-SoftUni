document.getElementById("btn").addEventListener("click", loadCatalog);
document.getElementById("reg-form").addEventListener("submit", register);
document.getElementById("login-form").addEventListener("submit", login);

async function loadCatalog(e) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (sessionStorage.getItem("user")) {
    const user = JSON.parse(sessionStorage.getItem("user"));
    options.headers["X-Authorization"] = user.accessToken;
  }

  try {
    const res = await fetch("http://localhost:3030/catalog", options);
    if (res.status !== 200) {
      const error = await res.json();
      throw new Error(error.message);
    }
    const data = await res.json();
    const list = document.getElementById("list");
    data.forEach((x) => {
      const li = document.createElement("li");
      li.textContent = `${x.name}: ${x.price}lv.`;
      list.appendChild(li);
    });
    console.log(data);
  } catch (error) {
    alert(error.message);
  }
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

async function login(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  try {
    const res = await fetch(`http://localhost:3030/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.status !== 200) {
      const error = await res.json();
      throw new Error(error.message);
    }
    const userData = await res.json();
    sessionStorage.setItem("user", JSON.stringify(userData));
  } catch (error) {
    alert(error.message);
  }
}
