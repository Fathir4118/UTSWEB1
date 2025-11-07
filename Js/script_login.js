function login() {

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let pengguna = dataPengguna.find(
    user => user.email === email && user.password === password
  );

  if (pengguna) {
    alert("Login berhasil 👍");
    sessionStorage.setItem("userLogin", JSON.stringify(pengguna));
    window.location.href = "dashboard.html";
  } else {
    alert("Email atau password salah!");
  }
}