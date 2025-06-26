function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };

  return fetch("http://localhost:3000/users", config)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      // Append new id to DOM
      const idElement = document.createElement('p');
      idElement.textContent = data.id;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      // Append error message to DOM
      const errorElement = document.createElement('p');
      errorElement.textContent = error.message;
      document.body.appendChild(errorElement);
    });
}

// Make available for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { submitData };
}