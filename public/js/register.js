form.addEventListener("submit", () => {
  alert("dhdhdh");
  const register = {
    email: email.value,
    password: password.value
  };
 
  fetch("/api/register", {
    method: "post",
    body: JSON.stringify(register),
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
