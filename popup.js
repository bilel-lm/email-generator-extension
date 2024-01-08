if (window.addEventListener) {
  window.addEventListener("load", genererAdresseEmail, false);
}

function genererAdresseEmail() {
  const caracteresPermis = "abcdefghijklmnopqrstuvwxyz0123456789";
  const longueurNom = Math.floor(Math.random() * (10 - 5 + 1)) + 5; // Longueur aléatoire entre 5 et 10 caractères
  let nomUtilisateur = "";

  for (let i = 0; i < longueurNom; i++) {
    let indiceCaractere = Math.floor(Math.random() * caracteresPermis.length);
    nomUtilisateur += caracteresPermis.charAt(indiceCaractere);
  }

  const domaine = ["gmail.com", "yahoo.com", "hotmail.com", "fiba.com"];
  const domaineAleatoire = domaine[Math.floor(Math.random() * domaine.length)];

  document.getElementById("email-container").innerHTML =
    nomUtilisateur + "@" + domaineAleatoire;
}

const newEmailButton = document.querySelector(".newEmailButton");
newEmailButton.addEventListener("click", function () {
  genererAdresseEmail();
});
