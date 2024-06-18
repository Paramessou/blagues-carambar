document.getElementById('boutonBlague').addEventListener('click', async () => { // Ajout d'un écouteur d'événements sur le boutonBlague pour gérer le clic de l'utilisateur
    try {
        const response = await fetch('https://blagues-carambar.onrender.com/api/blagues/aleatoire'); // Envoi d'une requête GET à l'API pour récupérer une blague aléatoire
        if (!response.ok) {
            throw new Error('La réponse du réseau n\'est pas correcte');
        }
        const blague = await response.json(); // Récupération de la blague au format JSON
        document.getElementById('affichageBlague').innerText = `${blague.contenu} - ${blague.chute}`; // Affichage de la blague dans l'élément affichageBlague
    } catch (error) {
        console.error('Erreur lors de la récupération de la blague:', error);
        document.getElementById('affichageBlague').innerText = 'Erreur lors de la récupération de la blague.';
    }
});

document.getElementById('formAjoutBlague').addEventListener('submit', async (event) => { // Ajout d'un écouteur d'événements sur le formulaire pour gérer la soumission du formulaire
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
    const contenu = document.getElementById('contenu').value; // Récupération de la valeur du champ contenu
    const chute = document.getElementById('chute').value; // Récupération de la valeur du champ chute

    try {
        const response = await fetch('https://blagues-carambar.onrender.com/api/blagues', { // Envoi d'une requête POST à l'API pour ajouter une nouvelle blague
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ contenu, chute }) // Envoi des données au format JSON
        });

        if (!response.ok) {
            throw new Error('La réponse du réseau n\'est pas correcte');
        }

        document.getElementById('messageAjout').innerText = 'Blague ajoutée avec succès!';
        document.getElementById('formAjoutBlague').reset();
    } catch (error) {
        console.error('Erreur lors de l\'ajout de la blague:', error);
        document.getElementById('messageAjout').innerText = 'Erreur lors de l\'ajout de la blague.';
    }
});

document.getElementById('boutonAfficherToutes').addEventListener('click', async () => {
    try {
        const response = await fetch('https://blagues-carambar.onrender.com/api/blagues');
        if (!response.ok) {
            throw new Error('La réponse du réseau n\'est pas correcte');
        }
        const blagues = await response.json();
        const affichageToutesBlagues = document.getElementById('affichageToutesBlagues');
        affichageToutesBlagues.innerHTML = '';
        blagues.forEach(blague => {
            const div = document.createElement('div');
            div.innerText = `${blague.contenu} - ${blague.chute}`;
            affichageToutesBlagues.appendChild(div);
        });
        // Afficher le bouton "Cacher toutes les blagues"
        document.getElementById('boutonCacherToutes').style.display = 'block';
    } catch (error) {
        console.error('Erreur lors de la récupération des blagues:', error);
    }
});

document.getElementById('boutonCacherToutes').addEventListener('click', () => {
    const affichage = document.getElementById('affichageToutesBlagues');
    affichage.innerHTML = '';

    // Masquer le bouton "Cacher toutes les blagues"
    document.getElementById('boutonCacherToutes').style.display = 'none';
});