function addUser() {
  const data = { 
    email: document.querySelector('#email').value,
    firstName: document.querySelector('#firstName').value,
    lastName: document.querySelector('#lastName').value,
    address: document.querySelector('#address').value,
    gender: "male",
    active: true
  };
  
  fetch('https://it-academy-js-api-zmicerboksha.vercel.app/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function deleteUser() {
  let userId = document.querySelector('#user-id').value; 
  
  fetch(`https://it-academy-js-api-zmicerboksha.vercel.app/api/user/${userId}`, {
    method: 'DELETE',
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function getUsers() {
  fetch("https://it-academy-js-api-zmicerboksha.vercel.app/api/user")
  .then(responce => responce.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      let user = document.createElement("div");
      user.classList.add('user');
      user.innerHTML = `
        <p>Пользователь: ${data[i].firstName} ${data[i].lastName}</p>
        <p>ID: ${data[i].id}</p>
        <p>Email: ${data[i].email}</p>
        <p>Адресс: ${data[i].address}</p>
        <p>Пол: ${data[i].gender}</p>
        <p>Active: ${data[i].active}</p>
      `;
      document.querySelector('.result').appendChild(user);
    }
  })
}