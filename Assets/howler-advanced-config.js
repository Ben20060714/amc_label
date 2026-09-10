/**
 * Configurations avancées optionnelles pour Howler.js Player
 * Décomenté les sections que vous voulez utiliser
 */

// ============================================
// CONFIGURATION 1: Auto-play au chargement
// ============================================
// Décommentez pour que le lecteur démarre automatiquement
/*
document.addEventListener('DOMContentLoaded', function() {
    // Auto-charger le premier artiste sur la page Artistes
    if (document.getElementById('player-container-artists')) {
        setTimeout(() => loadArtistPlayer('mr-baron'), 500);
    }
});
*/

// ============================================
// CONFIGURATION 2: Clavier Raccourcis
// ============================================
// Décommentez pour activer les raccourcis clavier
/*
document.addEventListener('keydown', function(e) {
    const player = window.artistPlayer || window.musicPagePlayer;
    if (!player) return;
    
    switch(e.code) {
        case 'Space':
            e.preventDefault();
            player.togglePlay();
            break;
        case 'ArrowRight':
            e.preventDefault();
            player.nextTrack();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            player.previousTrack();
            break;
        case 'ArrowUp':
            e.preventDefault();
            const newVol = Math.min(1, player.volume + 0.1);
            player.setVolume(newVol);
            break;
        case 'ArrowDown':
            e.preventDefault();
            const newVolDown = Math.max(0, player.volume - 0.1);
            player.setVolume(newVolDown);
            break;
    }
});
*/

// ============================================
// CONFIGURATION 3: Sauvegarde du volume
// ============================================
// Décommentez pour sauvegarder le volume dans localStorage
/*
class PersistentAMCPlayer extends AMCMusicPlayer {
    constructor(containerId, playlistData) {
        super(containerId, playlistData);
        
        // Charger le volume sauvegardé
        const savedVolume = localStorage.getItem('amc-player-volume');
        if (savedVolume) {
            this.setVolume(parseFloat(savedVolume));
        }
    }
    
    setVolume(vol) {
        super.setVolume(vol);
        localStorage.setItem('amc-player-volume', vol);
    }
}

// Utilisation:
// const player = new PersistentAMCPlayer('container-id', playlistData);
*/

// ============================================
// CONFIGURATION 4: Notifications du navigateur
// ============================================
// Décommentez pour afficher les notifications du système
/*
function showNowPlayingNotification(player) {
    if (!('Notification' in window)) return;
    
    if (Notification.permission === 'granted') {
        const track = player.playlistData[player.currentSoundIndex];
        new Notification('AMC Music Player', {
            body: `En train de jouer: ${track.titre}`,
            icon: track.image,
            tag: 'amc-player-notification'
        });
    }
}

// Ajouter dans la méthode onplay du Howl:
// showNowPlayingNotification(this);

// Demander la permission:
// if ('Notification' in window && Notification.permission === 'default') {
//     Notification.requestPermission();
// }
*/

// ============================================
// CONFIGURATION 5: Statistiques d'écoute
// ============================================
// Décommentez pour tracker les statistiques d'écoute
/*
class TrackingAMCPlayer extends AMCMusicPlayer {
    constructor(containerId, playlistData) {
        super(containerId, playlistData);
        this.stats = {
            tracksPlayed: 0,
            totalListeningTime: 0,
            startTime: null
        };
    }
    
    playTrack(index) {
        super.playTrack(index);
        this.stats.tracksPlayed++;
        this.stats.startTime = Date.now();
        this.logStats();
    }
    
    logStats() {
        console.log('📊 Statistiques Écoute:', {
            tracksPlayed: this.stats.tracksPlayed,
            totalTime: Math.floor(this.stats.totalListeningTime / 1000) + 's'
        });
    }
}
*/

// ============================================
// CONFIGURATION 6: Thème sombre/clair
// ============================================
// Décommentez pour ajouter un toggle thème
/*
function togglePlayerTheme() {
    const player = document.querySelector('.amc-player');
    if (!player) return;
    
    player.classList.toggle('light-theme');
    localStorage.setItem('amc-player-theme', 
        player.classList.contains('light-theme') ? 'light' : 'dark'
    );
}

// Dans howler-player.css, ajouter:
// .amc-player.light-theme {
//     --player-bg: #ffffff;
//     --player-accent: #001eff;
//     --player-text: #000000;
//     --player-muted: #666666;
// }

// Charger le thème sauvegardé au démarrage:
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('amc-player-theme');
    if (savedTheme === 'light') {
        setTimeout(() => {
            const player = document.querySelector('.amc-player');
            if (player) player.classList.add('light-theme');
        }, 100);
    }
});
*/

// ============================================
// CONFIGURATION 7: Playlist mélangée aléatoire
// ============================================
// Décommentez pour créer une playlist aléatoire
/*
function getRandomPlaylist(artistCount = 3) {
    const artists = getAllArtists();
    const shuffled = artists.sort(() => 0.5 - Math.random());
    const selectedArtists = shuffled.slice(0, artistCount);
    
    const randomPlaylist = [];
    selectedArtists.forEach(artist => {
        randomPlaylist.push(...artist.playlist);
    });
    
    return randomPlaylist.sort(() => 0.5 - Math.random());
}

// Utilisation:
// const mixedPlaylist = getRandomPlaylist(4);
// const player = new AMCMusicPlayer('container', mixedPlaylist);
*/

// ============================================
// CONFIGURATION 8: Partage sur les réseaux
// ============================================
// Décommentez pour ajouter les boutons de partage
/*
function generateShareText(player) {
    const track = player.playlistData[player.currentSoundIndex];
    return `🎵 En train d'écouter "${track.titre}" par ${track.artiste} sur @AMCMusicLabel`;
}

function shareOnSocial(platform, player) {
    const text = generateShareText(player);
    const url = 'https://amclabel.com';
    
    const shareUrls = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
    };
    
    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank');
    }
}

// Ajouter des boutons dans le lecteur:
// <button onclick="shareOnSocial('twitter', artistPlayer)">
//     <i class="fab fa-twitter"></i>
// </button>
*/

// ============================================
// CONFIGURATION 9: Mode lecture continue
// ============================================
// Décommentez pour auto-jouer la playlist infinie
/*
class ContinuousAMCPlayer extends AMCMusicPlayer {
    constructor(containerId, playlistData) {
        super(containerId, playlistData);
        this.continuousMode = true;
    }
    
    nextTrack() {
        super.nextTrack();
        // Si à la fin, recommencer depuis le début
        if (this.currentSoundIndex === 0 && this.continuousMode) {
            this.playTrack(0);
        }
    }
}
*/

// ============================================
// CONFIGURATION 10: Intégration Spotify/Apple Music
// ============================================
// Décommentez pour ajouter des liens externes
/*
function generateExternalLinks(track) {
    return {
        spotify: `https://open.spotify.com/search/${encodeURIComponent(track.titre + ' ' + track.artiste)}`,
        apple: `https://music.apple.com/search?term=${encodeURIComponent(track.titre)}`,
        youtube: `https://www.youtube.com/results?search_query=${encodeURIComponent(track.titre + ' ' + track.artiste)}`
    };
}

// Ajouter dans le lecteur:
// const links = generateExternalLinks(track);
// <a href="${links.spotify}" target="_blank">Spotify</a>
*/

// ============================================
// NOTES IMPORTANTES
// ============================================
/*
1. Ces configurations sont optionnelles
2. Testez bien avant de déployer en production
3. Certaines configurations nécessitent des permissions utilisateur
4. Sauvegardez toujours le code original avant modification
5. Utilisez localStorage avec prudence (limite 5-10MB)
6. Les notifications nécessitent HTTPS en production
7. Vérifiez la compatibilité navigateur pour chaque feature
*/

// ============================================
// UTILITAIRES HELPERS
// ============================================

/**
 * Convertir les secondes en format MM:SS
 */
function secondsToTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Obtenir la durée totale d'une playlist en minutes
 */
function getPlaylistDuration(playlist) {
    return playlist.reduce((total, track) => {
        const parts = track.duree.split(':');
        const minutes = parseInt(parts[0]) || 0;
        const seconds = parseInt(parts[1]) || 0;
        return total + (minutes * 60) + seconds;
    }, 0);
}

/**
 * Créer une playlist basée sur un genre
 */
function getPlaylistByGenre(genre) {
    const artists = getAllArtists();
    const filtered = artists.filter(a => a.genres.includes(genre));
    
    const playlist = [];
    filtered.forEach(artist => {
        playlist.push(...artist.playlist);
    });
    
    return playlist;
}

/**
 * Chercher une chanson dans toutes les playlists
 */
function searchTrack(query) {
    const artists = getAllArtists();
    const results = [];
    
    artists.forEach(artist => {
        artist.playlist.forEach(track => {
            if (track.titre.toLowerCase().includes(query.toLowerCase()) ||
                track.artiste.toLowerCase().includes(query.toLowerCase())) {
                results.push({...track, artistName: artist.name});
            }
        });
    });
    
    return results;
}

/**
 * Exporter les statistiques d'écoute
 */
function exportListeningStats(stats) {
    const csv = 'Titre,Artiste,Durée,Date\n' + 
        stats.map(s => `${s.titre},${s.artiste},${s.duration},${s.date}`).join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'amc-stats.csv';
    a.click();
}

console.log('✅ Configurations avancées chargées (optionnelles)');
console.log('Utilitaires disponibles: secondsToTime, getPlaylistDuration, getPlaylistByGenre, searchTrack, exportListeningStats');
