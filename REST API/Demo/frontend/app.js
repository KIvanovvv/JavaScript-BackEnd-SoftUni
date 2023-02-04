document.getElementById("btn").addEventListener("click", getData);

async function getData(e) {
  const res = await fetch("http://localhost:3030/");
  const data = await res.json();
  console.log(data);
}
