document.getElementById('boutonBlague').addEventListener('click', async () => { // Ajoute un écouteur d'événement sur le bouton avec l'ID 'boutonBlague'
    const response = await fetch('https://paramessou.github.io/blagues-carambar/'); // Envoie une requête GET à l'URL spécifiée
    const blague = await response.json(); // Convertit la réponse en objet JavaScript (ici, un objet blague)
    document.getElementById('affichageBlague').innerText = `${blague.contenu} - ${blague.chute}`; // Affiche la blague dans la page web
});
