form.addEventListener("submit", () => {
 
  const login = {
    email: email.value,
    password: password.value
  };
 
  fetch("/api/login", {
    method: "post",
    body: JSON.stringify(login),
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((res) => res.json())
    .then((data) => {
     
      if (data.status == "error") {
        error.style.display = "block";
        success.style.display = "none";
        error.innerText = data.error;
      } else {
        error.style.display = "none";
        success.style.display = "block";
        success.innerText = data.success;
      }
    });
});
