document.getElementById('boutonBlague').addEventListener('click', async () => { // Ajout d'un écouteur d'événements sur le bouton pour récupérer une blague aléatoire lors du clic asynch() = fonction asynchrone qui permet d'attendre la fin de l'appel à l'API avant de continuer
    try {
        const response = await fetch('https://blagues-carambar.onrender.com/api/blagues/aleatoire/'); // Appel de l'API pour récupérer une blague aléatoire depuis l'URL
        if (!response.ok) {
            throw new Error('La réponse du réseau n\'est pas correcte');
        }
        const blague = await response.json(); // Récupération de la blague sous forme d'objet JSON
        document.getElementById('affichageBlague').innerText = `${blague.contenu} - ${blague.chute}`; // Affichage de la blague dans la page HTML avec le contenu et la chute de la blague récupérée depuis l'API
    } catch (error) {
        console.error('Erreur lors de la récupération de la blague:', error);
        document.getElementById('affichageBlague').innerText = 'Erreur lors de la récupération de la blague.';
    }
});
