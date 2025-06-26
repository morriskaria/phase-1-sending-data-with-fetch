function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(data => {
      // Append the new id to the DOM
      document.body.innerHTML += data.id;
    })
    .catch(error => {
      // Append the error message to the DOM
      document.body.innerHTML += error.message;
    });
}