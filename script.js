document.getElementById('boutonBlague').addEventListener('click', async () => {
    try {
        const response = await fetch('https://blagues-carambar.onrender.com/api/blagues/');
        if (!response.ok) {
            throw new Error('La réponse du réseau n\'est pas correcte');
        }
        const blague = await response.json();
        document.getElementById('affichageBlague').innerText = `${blague.contenu} - ${blague.chute}`;
    } catch (error) {
        console.error('Erreur lors de la récupération de la blague:', error);
        document.getElementById('affichageBlague').innerText = 'Erreur lors de la récupération de la blague.';
    }
});
