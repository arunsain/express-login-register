form.addEventListener("submit", () => {
  alert("dhdhdh");
  const login = {
    email: email.value,
    password: password.value,
  };
  console.log(login);
  fetch("/api/login", {
    method: "post",
    body: JSON.stringify(login),
    header: {
      "Content-Type": "appplication/json",
    },
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
        error.innerText = data.success;
      }
    });
});
