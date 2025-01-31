function validateForm() {
    let isValid = true;

    // Récupérer les données du formulaire
    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const adresse = document.getElementById('adresse');
    const codePostal = document.getElementById('code-postal');
    const ville = document.getElementById('ville');
    const motDePasse = document.getElementById('mot-de-passe');
    const adresseEmail = document.getElementById('adresse-email');
    const numeroTelephone = document.getElementById('numero-telephone');
    const roles = document.getElementById('roles');
    const siret=document.getElementById('siret');
   const RaisonSociale=document.getElementById('raison-sociale');

    const fields = [nom, prenom, adresse, codePostal, ville, motDePasse, adresseEmail, numeroTelephone, roles, siret, RaisonSociale];

    // Vérifier si tous les champs sont remplis
    fields.forEach(field => {
        if (field.value.trim() === '') {
            field.classList.add('error');
            isValid = false;
        } else {
            field.classList.remove('error');
        }
    });

    // Afficher ou masquer le message d'erreur
    const errorMessage = document.getElementById('error-message');
    if (!isValid) {
        errorMessage.style.display = 'block';
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        errorMessage.style.display = 'none';
    }

    return isValid;
}

document.getElementById('submitBtn').addEventListener('click', function(event) {
    if (!validateForm()) {
        // Si la validation échoue, arrêtez la soumission du formulaire
        event.preventDefault();
        return;
    }

    // Récupérer les données du formulaire
    const formData = {
        Nom: document.getElementById('nom').value,
        Prenom: document.getElementById('prenom').value,
        NomRue: document.getElementById('adresse').value,
        CodePostale: document.getElementById('code-postal').value,
        Ville: document.getElementById('ville').value,
        MotDePasse: document.getElementById('mot-de-passe').value,
        AdresseEmail: document.getElementById('adresse-email').value, // Champ ajouté
        NumeroTelephone: document.getElementById('numero-telephone').value,
        Roles: document.getElementById('roles').value,
        Siret: document.getElementById('siret').value,
        RaisonSociale: document.getElementById('raison-sociale').value // Champ ajouté
    };

    // Envoyer les données à l'API avec fetch
    fetch('http://localhost:8080/api/inscription', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        // Afficher la réponse de l'API dans le conteneur prévu
        document.getElementById('responseContainer').innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error('Erreur lors de la récupération des données:', error));
});



const passwordInput = document.getElementById('mot-de-passe');
const passwordMessage = document.getElementById('passwordMessage');
const iconLength = document.getElementById('iconLength');
const iconUpperCase = document.getElementById('iconUpperCase');
const iconLowerCase = document.getElementById('iconLowerCase');
const iconNumber = document.getElementById('iconNumber');
const iconSymbol = document.getElementById('iconSymbol');

// Fonction pour valider le mot de passe
function validatePassword(password) {
    // Vérifier la longueur du mot de passe
    const isLengthValid = password.length >= 12;

    // Vérifier s'il y a au moins une majuscule
    const isUpperCaseValid = /[A-Z]/.test(password);

    // Vérifier s'il y a au moins une minuscule
    const isLowerCaseValid = /[a-z]/.test(password);

    // Vérifier s'il y a au moins un chiffre
    const isNumberValid = /\d/.test(password);

    // Vérifier s'il y a au moins un symbole
    const isSymbolValid = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    // Mettre à jour les icônes en fonction de la validation
    iconLength.className = isLengthValid ? 'icon-valid' : 'icon-invalid';
    iconUpperCase.className = isUpperCaseValid ? 'icon-valid' : 'icon-invalid';
    iconLowerCase.className = isLowerCaseValid ? 'icon-valid' : 'icon-invalid';
    iconNumber.className = isNumberValid ? 'icon-valid' : 'icon-invalid';
    iconSymbol.className = isSymbolValid ? 'icon-valid' : 'icon-invalid';

    // Vérifier si toutes les conditions sont remplies
    return isLengthValid && isUpperCaseValid && isLowerCaseValid && isNumberValid && isSymbolValid;
}

passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    const isPasswordValid = validatePassword(password);

    // Afficher un message d'erreur si le mot de passe n'est pas valide
    if (!isPasswordValid) {
        passwordMessage.style.display = 'block';
    } else {
        passwordMessage.style.display = 'none';
    }
    document.addEventListener('DOMContentLoaded', function() {
const emailInput = document.getElementById('adresse-email');

emailInput.addEventListener('mouseover', function() {
emailInput.setAttribute('title', "L'adresse e-mail doit être unique et respecter le format standard.");
emailInput.setAttribute('placeholder', "Entrez une adresse e-mail unique");
});
});
});
 document.addEventListener('DOMContentLoaded', function() {
            const menuIcon = document.getElementById('menuIcon');
            const navMenu = document.getElementById('navMenu');
            const container = document.querySelector('.container');

            menuIcon.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                container.classList.toggle('menu-open');
            });
        });
