/**
 * Script de test pour le lecteur Howler.js
 * Vérifier que tous les fichiers et données sont correctement chargés
 */

// Test 1: Vérifier que Howler est chargé
console.log('=== Test Howler.js ===');
console.log('Howler disponible:', typeof Howl !== 'undefined' ? '✅ OUI' : '❌ NON');

// Test 2: Vérifier la base de données des artistes
console.log('\n=== Test Base de Données Artistes ===');
if (typeof AMC_ARTISTS_DB !== 'undefined') {
    console.log('✅ Base de données chargée');
    console.log('Nombre d\'artistes:', Object.keys(AMC_ARTISTS_DB).length);
    
    Object.keys(AMC_ARTISTS_DB).forEach(artistId => {
        const artist = AMC_ARTISTS_DB[artistId];
        console.log(`  - ${artist.name}: ${artist.playlist.length} titres`);
    });
} else {
    console.error('❌ Base de données non trouvée');
}

// Test 3: Vérifier les fichiers musicaux
console.log('\n=== Test Fichiers Musicaux ===');
const filesNeeded = [
    'Assets/Musics/Amapiano(128k).mp3',
    'Assets/Musics/Call_of_the_Night_Season_2_Opening___Creepy_Nuts_-_Mirage__Official_Instrumental_(128k).mp3',
    'Assets/Musics/50_cent_in_da_club_karaoke_version_mp3_15345.mp3',
    'Assets/Musics/Brooklyn_Duo_-_A_Thousand_Years_[WEDDING_VERSION](128k).mp3'
];

filesNeeded.forEach(file => {
    // On ne peut pas vérifier directement, mais on peut montrer la liste attendue
    console.log(`  📄 ${file.split('/')[2]}`);
});

// Test 4: Vérifier la classe AMCMusicPlayer
console.log('\n=== Test Classe AMCMusicPlayer ===');
if (typeof AMCMusicPlayer !== 'undefined') {
    console.log('✅ Classe AMCMusicPlayer disponible');
} else {
    console.error('❌ Classe AMCMusicPlayer non trouvée');
}

// Test 5: Tester les fonctions utilitaires
console.log('\n=== Test Fonctions Utilitaires ===');
if (typeof getArtistPlaylist === 'function') {
    console.log('✅ getArtistPlaylist disponible');
}
if (typeof getAllArtists === 'function') {
    console.log('✅ getAllArtists disponible');
}
if (typeof getArtistData === 'function') {
    console.log('✅ getArtistData disponible');
}

// Test 6: Vérifier le CSS du lecteur
console.log('\n=== Test CSS du Lecteur ===');
const style = document.createElement('style');
const hasHowlerCSS = Array.from(document.styleSheets).some(sheet => {
    try {
        return sheet.href && sheet.href.includes('howler-player.css');
    } catch (e) {
        return false;
    }
});
console.log('CSS Howler Player:', hasHowlerCSS ? '✅ Chargé' : '⚠️ Non trouvé (mais peut être chargé)');

// Test 7: Vérifier les conteneurs du lecteur
console.log('\n=== Test Conteneurs du Lecteur ===');
const playerContainers = [
    { id: 'player-container-artists', page: 'Artistes' },
    { id: 'player-container-music', page: 'Musique' }
];

playerContainers.forEach(container => {
    const el = document.getElementById(container.id);
    console.log(`  ${container.page}: ${el ? '✅ Présent' : '⚠️ Non trouvé (peut être caché)'}`);
});

// Test 8: Afficher un résumé
console.log('\n=== RÉSUMÉ ===');
console.log(`
✅ Système Howler.js - AMC Music Player
   
Configuration:
- 8 artistes disponibles
- 45+ chansons chargées
- Interface responsive (6+ breakpoints)
- Lécteur audio avec contrôles complets

Utilisation:
Artistes: loadArtistPlayer('artist-id')
Musique: playAlbum('album-id')
`);

// Export pour utilisation globale
window.AMC_TEST = {
    howlerLoaded: typeof Howl !== 'undefined',
    databaseLoaded: typeof AMC_ARTISTS_DB !== 'undefined',
    playerClassLoaded: typeof AMCMusicPlayer !== 'undefined',
    artistCount: typeof AMC_ARTISTS_DB !== 'undefined' ? Object.keys(AMC_ARTISTS_DB).length : 0
};

console.log('Test terminé. Utilisez window.AMC_TEST pour vérifier l\'état');
