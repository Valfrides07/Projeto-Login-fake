const formulario = document.querySelector(".form_login");

formulario.addEventListener("submit", function (event) {
  // pra pagina nao carregar quando for clicada no botao
  event.preventDefault();

  // Capturar o click no botao e envio nos input email e senha
  const email = document.getElementById("email").value;
  const senha = document.getElementById("pass").value;

  // definindo const com login e senha
  const verfica_email = "Admin@admin.com";
  const verfica_senha = "admin12345";

  // Criar uma verificação entre o value de senha e email
  if (email === verfica_email && senha === verfica_senha) {
    alert("Login realizado com sucesso!");

    localStorage.setItem("Email", email);
    localStorage.setItem("Senha", senha);

    const EmailSalvo = localStorage.getItem("Email");
    const SenhaSalva = localStorage.getItem("Senha");

    // manda para Home caso o login seja efetuado corretamente
    window.location.href = "../html/home.html";
  } else {
    alert("Email ou senha inválidos");
  }
});
