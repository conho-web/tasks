function checkLogin() {
  let login = document.querySelector('#inputLogin').value;
  console.log(login)

  if (login === "kristina") {
    window.location.href = "/notes.html"
  }
}