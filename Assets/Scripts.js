// ========================================
// 🎵 LECTEUR AUDIO MODERNE AMC
// Site: AMC Music Label
// Description: Gestion complète de la navigation, recherche, et lecteur audio
// ========================================

// ========================================
// 📱 RESPONSIVE MENU BURGER
// ========================================
// Gère l'ouverture/fermeture du menu mobile (hamburger menu)
// - Affiche/masque le menu au clic sur le burger
// - Ferme le menu quand on clique sur un lien
// - Ferme le menu quand on clique en dehors
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        // 🔘 Bascule le menu ouvert/fermé au clic sur le burger
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // 🔗 Ferme le menu automatiquement quand on clique sur un lien
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // 🖱️ Ferme le menu au clic en dehors (pour une meilleure expérience UX)
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickInsideHamburger = hamburger.contains(event.target);

            if (!isClickInsideNav && !isClickInsideHamburger && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// ========================================
// GESTION DES ALBUMS ET LECTEUR MUSICAL
// ========================================
// 
// GUIDE D'ADMINISTRATION:
// Pour ajouter ou modifier les albums et titres, allez à la section "BASE DE DONNÉES DES ALBUMS"
// Chaque album contient un tableau de titres avec durée
// Format: { titre: "Nom du titre", duree: "MM:SS" }
//

// ========================================
// BASE DE DONNÉES DES ALBUMS (À MODIFIER)
// ========================================
// 
// GUIDE ADMIN: Pour ajouter un nouvel album:
// 1. Copiez un album existant et changez l'ID (album-5, album-6, etc.)
// 2. Modifiez: nom, artiste, image
// 3. Ajoutez les titres avec le chemin exact du fichier MP3
// 4. Chemin des fichiers: Assets/Musics/NOMFICHIER.mp3
// 


/* START_ALBUMS_DATA */


//const albumsData = {
//    'album-1': {
//        nom: 'Sponsor officiel',
//        artiste: 'Muzuba beats',
//        image: 'Assets/Images/album1.jpg',  // ADMIN: Changez cette image
//        titres: [
//            { titre: 'Amapiano Beat', fichier: 'Assets/Musics/Amapiano(128k).mp3', duree: '2:47' },
//            { titre: 'Amapiano Beat (Remix)', fichier: 'Assets/Musics/Amapiano(128k).mp3', duree: '2:47' },
//            { titre: 'Amapiano Beat (Extended)', fichier: 'Assets/Musics/Amapiano(128k).mp3', duree: '2:47' },
//            { titre: 'Amapiano Beat (Lofi)', fichier: 'Assets/Musics/Amapiano(128k).mp3', duree: '2:47' },
//            { titre: 'Amapiano Beat (Acoustic)', fichier: 'Assets/Musics/Amapiano(128k).mp3', duree: '2:47' }
//        ]
//    },
//    'album-2': {
//        nom: 'Moko na nkalanga',
//        artiste: 'Mufti miji',
//        image: 'Assets/Images/album2.jpg',  // ADMIN: Changez cette image
//        titres: [
//            { titre: 'Ouverture Mélodique', fichier: 'Assets/Musics/Amapiano(128k).mp3', duree: '2:47' },
//            { titre: 'Danse Traditionnelle', fichier: 'Assets/Musics/Amapiano(128k).mp3', duree: '2:47' },
//            { titre: 'Voix Ancestrale', fichier: 'Assets/Musics/Call_of_the_Night_Season_2_Opening___Creepy_Nuts_-_Mirage__Official_Instrumental_(128k).mp3', duree: '2:47' },
//            { titre: 'Fusion Moderne', fichier: 'Assets/Musics/Amapiano(128k).mp3', duree: '2:47' },
//            { titre: 'Célébration', fichier: 'Assets/Musics/Amapiano(128k).mp3', duree: '2:47' },
//            { titre: 'Épilogue', fichier: 'Assets/Musics/Amapiano(128k).mp3', duree: '2:47' }
//        ]
//    },
//    'album-3': {
//        nom: 'Golo',
//        artiste: 'Zamba',
//        image: 'Assets/Images/album3.jpg',  // ADMIN: Changez cette image
//        titres: [
//            { titre: 'Call of the night (OP2)', fichier: 'Assets/Musics/Call_of_the_Night_Season_2_Opening___Creepy_Nuts_-_Mirage__Official_Instrumental_(128k).mp3', duree: '2:38' },
//            { titre: 'In da club', fichier: 'Assets/Musics/50_cent_in_da_club_karaoke_version_mp3_15345.mp3', duree: '3:23' },
//            { titre: 'Titre 3', fichier: 'Assets/Musics/Amapiano(128k).mp3', duree: '2:47' },
//            { titre: 'Titre 4', fichier: 'Assets/Musics/Amapiano(128k).mp3', duree: '2:47' }
//        ]
//    },
//    'album-4': {
//        nom: 'Album 4',
//        artiste: 'Artiste 4',
//        image: 'Assets/Images/album4.jpg',  // ADMIN: Changez cette image
//        titres: [
//            { titre: 'Track 1', fichier: 'Assets/Musics/Amapiano(128k).mp3', duree: '2:47' },
//            { titre: 'A thousand years', fichier: 'Assets/Musics/Brooklyn_Duo_-_A_Thousand_Years_[WEDDING_VERSION](128k).mp3', duree: '5:00' },
//            { titre: 'Track 3', fichier: 'Assets/Musics/Amapiano(128k).mp3', duree: '2:47' },
//            { titre: 'Track 4', fichier: 'Assets/Musics/Amapiano(128k).mp3', duree: '2:47' },
//            { titre: 'Track 5', fichier: 'Assets/Musics/Amapiano(128k).mp3', duree: '2:47' }
//        ]
//    }
//};


/* END_ALBUMS_DATA */


// ========================================
// BASE DE DONNÉES DES ARTISTES
// ========================================
//const artistsData = {
//    'artist-1': {
//        name: 'Mr. Baron',
//        profileImage: 'Assets/Images/Mrbaron0.jpg',
//        genres: 'Rap • Gospel',
//        bio: 'Lorem ipsum dolor si amet adipiscing consectetur.',
//        albums: ['album-1'],
//        totalTracks: 5,
//        followers: '10K',
//        socials: [
//            { name: 'YouTube', url: '#', icon: 'fab fa-youtube' },
//            { name: 'Spotify', url: '#', icon: 'fab fa-spotify' }
//        ]
//    },
//    'artist-2': {
//        name: 'Mr. Objectif',
//        profileImage: 'Assets/Images/Mrobjectif.jpg',
//        genres: 'Rap • Gospel',
//        bio: 'Lorem ipsum dolor si amet adipiscing consectetur.',
//        albums: ['album-2'],
//        totalTracks: 6,
//        followers: '8K',
//        socials: [
//            { name: 'YouTube', url: '#', icon: 'fab fa-youtube' },
//            { name: 'Instagram', url: '#', icon: 'fab fa-instagram' }
//        ]
//    },
//    'artist-3': {
//        name: 'Zamba',
//        profileImage: 'Assets/Images/artist3.jpg',
//        genres: 'Variété, Anime',
//        bio: 'Artiste polyvalent proposant différents styles musicaux.',
//        albums: ['album-3'],
//        totalTracks: 4,
//        followers: '5K',
//        socials: [
//            { name: 'YouTube', url: '#', icon: 'fab fa-youtube' }
//        ]
//    },
//    'artist-4': {
//        name: 'Artiste 4',
//        profileImage: 'Assets/Images/artist4.jpg',
//        genres: 'Généraliste',
//        bio: 'Artiste talentueux avec une discographie variée.',
//        albums: ['album-4'],
//        totalTracks: 5,
//        followers: '3K',
//        socials: [
//            { name: 'YouTube', url: '#', icon: 'fab fa-youtube' }
//        ]
//    }
//};


// ========================================
// 🔍 BARRE DE RECHERCHE - ARTISTES & MUSIQUE
// ========================================
// Permet de chercher des artistes, des chansons ou des albums
// La recherche s'adapte à la page (Artistes.html ou Musique.html)
// - Cherche dans les titres, genres, bios et noms d'artistes
// - Filtre les résultats en temps réel
// - Affiche/cache un bouton pour effacer la recherche
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('ArtistesSearch');
  if (!searchInput) return;

  // 🔎 Fonction de recherche au fur et à mesure de la saisie
  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase(); // Convertir en minuscules pour ignorer la casse
    const isArtistPage = window.location.pathname.includes('Artistes');
    const isMusicPage = window.location.pathname.includes('Musique');
    
    if (isArtistPage) {
      // 🎤 Si on est sur la page Artistes: chercher dans les cartes artistes
      document.querySelectorAll('.artist-card').forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const genre = card.querySelector('.genre').textContent.toLowerCase();
        const bio = card.querySelector('.artist-bio').textContent.toLowerCase();
        
        // Affiche la carte si elle correspond à la recherche, sinon la cache
        if (title.includes(query) || genre.includes(query) || bio.includes(query)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    } else if (isMusicPage) {
      // 🎵 Si on est sur la page Musique: chercher dans les albums et playlists
      document.querySelectorAll('.album-card, .playlist-card').forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const artist = card.querySelector('.artist-name')?.textContent.toLowerCase() || '';
        
        if (title.includes(query) || artist.includes(query)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    }
  });

  // ❌ Bouton pour effacer la recherche (créé dynamiquement)
  const searchBar = document.querySelector('.artistes-search-bar');
  if (searchBar && !searchBar.querySelector('.search-clear-btn')) {
    const clearBtn = document.createElement('button');
    clearBtn.className = 'search-clear-btn';
    clearBtn.innerHTML = '✕'; // Symbole de fermeture
    clearBtn.type = 'button';
    clearBtn.style.display = 'none';
    
    // Au clic: effacer la recherche et re-afficher tous les résultats
    clearBtn.addEventListener('click', function() {
      searchInput.value = '';
      searchInput.dispatchEvent(new Event('input')); // Déclencher la recherche vide
      clearBtn.style.display = 'none';
      searchInput.focus(); // Redonner le focus à l'input
    });
    
    searchInput.parentElement.style.position = 'relative';
    searchInput.parentElement.appendChild(clearBtn);
    
    // Afficher/masquer le bouton effacer selon que l'input est vide
    searchInput.addEventListener('input', function() {
      clearBtn.style.display = this.value ? 'block' : 'none';
    });
  }
});

// ⌨️ Navigation au clavier pour les cartes
// Permet de naviguer et sélectionner avec Enter ou Espace
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.artist-card, .album-card, .playlist-card').forEach(card => {
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click(); // Déclencher le clic de la carte
      }
    });
  });
});
// Modal functionality
    const modalOverlay = document.getElementById('modalOverlay');
    const modalImg = document.getElementById('modalImg');
    const modalText = document.getElementById('modalText');
    const closeModal = document.getElementById('closeModal');

    document.querySelectorAll('ArtistesSearch').forEach(card => {
      card.addEventListener('click', () => {
        modalImg.src = card.getAttribute('data-img');
        modalText.textContent = card.getAttribute('data-text');
        modalOverlay.style.display = 'flex';
      });
    });





// ================================================
// 🎼 CLASSE LECTEUR AUDIO - Music Player Legacy
// ================================================
// Gère la lecture audio pour les pages Artistes et Albums
// Note: Ce lecteur est utilisé en complément de Howler.js pour les modales
// 
// Fonctionnalités:
// - Création d'un élément audio persistant
// - Gestion des modales pour albums et artistes
// - Sélection et lecture de pistes
// - Barre de progression et contrôles
// ================================================

class MusicPlayer {
    /**
     * Constructeur du MusicPlayer
     * Initialise l'élément audio et les modales
     */
    constructor() {
        this.audio = null; // Élément audio HTML
        this.currentTrack = null; // Piste actuellement sélectionnée
        this.currentAlbumId = null; // ID de l'album actuellement joué
        this.isPlaying = false; // État de lecture (true = en cours, false = pause)
        
        this.initAudio(); // Créer l'élément audio une fois
        this.init(); // Initialiser les modales et écouteurs
    }

    /**
     * initAudio() - Crée et configure l'élément audio persistant
     * Cet élément sera réutilisé pour toutes les lectures du site
     * Crée les écouteurs pour: timeupdate, ended, error
     */
    initAudio() {
        try {
            this.audio = document.createElement('audio');
            this.audio.id = 'amc-player';
            this.audio.crossOrigin = 'anonymous'; // Permet de charger les fichiers cross-domain
            this.audio.volume = 1.0; // Volume au maximum (0-1)
            this.audio.style.display = 'none'; // Caché de l'interface
            document.body.appendChild(this.audio);

            // 🔊 Écouteurs pour tracker la progression et les événements
            this.audio.addEventListener('timeupdate', () => this.onTimeUpdate()); // Mise à jour du temps
            this.audio.addEventListener('ended', () => this.onTrackEnd()); // Fin de la piste
            this.audio.addEventListener('error', (e) => this.onError(e)); // Erreur de lecture
            
            console.log('✅ Lecteur audio créé avec succès');
        } catch (e) {
            console.error('❌ Erreur création audio:', e);
            this.audio = null;
        }
    }

    /**
     * onError() - Gère les erreurs de lecture audio
     * Affiche les détails de l'erreur dans la console pour debug
     */
    onError(e) {
        const error = this.audio.error;
        console.error('❌ Erreur audio:', error);
        if (this.currentTrack) {
            console.error('   Fichier concerné:', this.currentTrack.fichier);
        }
    }

    /**
     * onTimeUpdate() - Met à jour la barre de progression en temps réel
     * Appelée environ 4 fois par seconde pendant la lecture
     * Met à jour: la barre de progression, le temps actuel, les deux modales
     */
    onTimeUpdate() {
        if (!this.audio || !this.audio.duration) return;
        
        // Mettre à jour les deux barres (album et artiste)
        const progress = (this.audio.currentTime / this.audio.duration) * 100;
        
        const albumBar = document.getElementById('player-progress');
        const artistBar = document.getElementById('player-progress-artist');
        
        if (albumBar) albumBar.value = progress;
        if (artistBar) artistBar.value = progress;
        
        // Mettre à jour les temps
        const albumTime = document.getElementById('player-time-current');
        const artistTime = document.getElementById('player-time-current-artist');
        const albumTotal = document.getElementById('player-time-total');
        const artistTotal = document.getElementById('player-time-total-artist');
        
        const formatted = this.formatTime(this.audio.currentTime);
        const totalFormatted = this.formatTime(this.audio.duration);
        
        if (albumTime) albumTime.textContent = formatted;
        if (artistTime) artistTime.textContent = formatted;
        if (albumTotal) albumTotal.textContent = totalFormatted;
        if (artistTotal) artistTotal.textContent = totalFormatted;
    }

    // Fin de piste
    onTrackEnd() {
        this.nextTrack();
    }

    // Formater le temps
    formatTime(seconds) {
        if (!seconds || isNaN(seconds)) return '0:00';
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    // Initialiser les modales et écouteurs
    init() {
        document.addEventListener('click', (e) => {
            const albumCard = e.target.closest('.album-card');
            if (albumCard) {
                e.preventDefault();
                const albumId = this.getAlbumId(albumCard);
                this.openAlbumModal(albumId);
                return;
            }

            const artistLink = e.target.closest('.artist-link');
            if (artistLink) {
                e.preventDefault();
                const artistCard = artistLink.closest('.artist-card');
                const artistId = this.getArtistId(artistCard);
                this.openArtistModal(artistId);
                return;
            }

            const artistCard = e.target.closest('.artist-card');
            if (artistCard && !artistLink) {
                e.preventDefault();
                const artistId = this.getArtistId(artistCard);
                this.openArtistModal(artistId);
                return;
            }
        });

        // Fermer les modales quand on clique en dehors
        document.addEventListener('click', (e) => {
            if (e.target.id === 'modal-album') {
                this.closeAlbumModal();
            }
            if (e.target.id === 'modal-artist') {
                this.closeArtistModal();
            }
        });
    }

    // Récupérer les IDs des cartes
    getAlbumId(card) {
        const index = Array.from(document.querySelectorAll('.album-card')).indexOf(card);
        return 'album-' + (index + 1);
    }

    getArtistId(card) {
        const index = Array.from(document.querySelectorAll('.artist-card')).indexOf(card);
        return 'artist-' + (index + 1);
    }

    // Ouvrir la modal album
    openAlbumModal(albumId) {
        const album = albumsData[albumId];
        if (!album) return;

        this.currentAlbumId = albumId;

        let modal = document.getElementById('modal-album');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'modal-album';
            modal.className = 'modal-album';
            document.body.appendChild(modal);
        }

        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" onclick="window.player.closeAlbumModal()">✕</button>
                
                <div class="modal-header">
                    <img src="${album.image}" alt="${album.nom}" class="modal-image">
                    <div class="modal-info">
                        <h2>${album.nom}</h2>
                        <p class="modal-artist">${album.artiste}</p>
                        <p class="modal-count">${album.titres.length} titres</p>
                    </div>
                </div>

                <div class="modal-player">
                    <div class="now-playing">
                        <p id="now-playing-text">🎵 Sélectionnez un titre</p>
                    </div>
                    <div class="player-controls">
                        <button class="control-btn" onclick="window.player.play()">▶ Lecture</button>
                        <button class="control-btn" onclick="window.player.pause()">⏸ Pause</button>
                        <button class="control-btn" onclick="window.player.stop()">⏹ Arrêter</button>
                        <div class="progress-container">
                            <span id="player-time-current">0:00</span>
                            <input type="range" id="player-progress" class="player-progress" min="0" max="100" value="0">
                            <span id="player-time-total">0:00</span>
                        </div>
                    </div>
                </div>

                <div class="modal-tracklist">
                    <h3>Liste des titres</h3>
                    <ul class="tracklist">
                        ${album.titres.map((track, idx) => `
                            <li class="track-item" data-album="${albumId}" data-index="${idx}">
                                <span class="track-number">${idx + 1}</span>
                                <span class="track-title">${track.titre}</span>
                                <span class="track-duration">${track.duree}</span>
                                <button class="track-play-btn" title="Écouter">♫</button>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;

        modal.style.display = 'flex';

        // Ajouter les écouteurs aux titres
        document.querySelectorAll('#modal-album .track-item').forEach(trackEl => {
            trackEl.addEventListener('click', (e) => {
                if (!e.target.closest('.track-play-btn')) {
                    const idx = parseInt(trackEl.getAttribute('data-index'));
                    this.selectTrack(album.titres[idx], trackEl);
                }
            });

            const playBtn = trackEl.querySelector('.track-play-btn');
            if (playBtn) {
                playBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const idx = parseInt(trackEl.getAttribute('data-index'));
                    this.selectTrack(album.titres[idx], trackEl);
                    setTimeout(() => this.play(), 100);
                });
            }
        });

        // Ajouter écouteur à la barre de progression
        const progressBar = document.getElementById('player-progress');
        if (progressBar) {
            progressBar.addEventListener('change', (e) => {
                if (this.audio && this.audio.duration) {
                    this.audio.currentTime = (e.target.value / 100) * this.audio.duration;
                }
            });
        }
    }
    



    // Ouvrir la modal artiste
    openArtistModal(artistId) {
        const artist = artistsData[artistId];
        if (!artist) return;

        let modal = document.getElementById('modal-artist');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'modal-artist';
            modal.className = 'modal-artist';
            document.body.appendChild(modal);
        }

        modal.innerHTML = `
            <div class="modal-content-artist">
                <button class="modal-close" onclick="window.player.closeArtistModal()">✕</button>

                <div class="modal-artist-header">
                    <img src="${artist.profileImage}" alt="${artist.name}" class="artist-profile-image">
                    <div class="artist-header-info">
                        <h2>${artist.name}</h2>
                        <p class="artist-genres">${artist.genres}</p>
                        <p class="artist-bio">${artist.bio}</p>
                        <div class="artist-stats">
                            <div class="stat"><strong>${artist.albums.length}</strong> Albums</div>
                            <div class="stat"><strong>${artist.totalTracks}</strong> Titres</div>
                            <div class="stat"><strong>${artist.followers}</strong> Abonnés</div>
                        </div>
                    </div>
                </div>

                <div class="modal-artist-player">
                    <div class="now-playing">
                        <p id="now-playing-text-artist">🎵 Sélectionnez un titre</p>
                    </div>
                    <div class="player-controls">
                        <button class="control-btn" onclick="window.player.play()">▶ Lecture</button>
                        <button class="control-btn" onclick="window.player.pause()">⏸ Pause</button>
                        <button class="control-btn" onclick="window.player.stop()">⏹ Arrêter</button>
                        <div class="progress-container">
                            <span id="player-time-current-artist">0:00</span>
                            <input type="range" id="player-progress-artist" class="player-progress" min="0" max="100" value="0">
                            <span id="player-time-total-artist">0:00</span>
                        </div>
                    </div>
                </div>

                <div class="modal-artist-body">
                    <h3>Albums & Titres</h3>
                    <div class="artist-albums-list">
                        ${artist.albums.map((albumId) => {
                            const album = albumsData[albumId] || { nom: albumId, titres: [] };
                            return `
                                <div class="artist-album-block">
                                    <div class="artist-album-header">
                                        <img src="${album.image || 'Assets/Images/album1.jpg'}" alt="${album.nom}">
                                        <div>
                                            <h4>${album.nom}</h4>
                                            <p class="muted">${album.titres.length} titres</p>
                                        </div>
                                    </div>
                                    <ul class="tracklist">
                                        ${album.titres.map((t, ti) => `
                                            <li class="track-item" data-album="${albumId}" data-index="${ti}">
                                                <span class="track-number">${ti + 1}</span>
                                                <span class="track-title">${t.titre}</span>
                                                <span class="track-duration">${t.duree || ''}</span>
                                                <button class="track-play-btn" title="Écouter">♫</button>
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                            `;
                        }).join('')}
                    </div>

                    <div class="modal-artist-socials">
                        <h3>Réseaux Sociaux</h3>
                        <div class="socials-links">
                            ${artist.socials.map(social => `<a href="${social.url}" target="_blank" class="social-link" title="${social.name}"><i class="${social.icon}"></i></a>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;

        modal.style.display = 'flex';

        // Ajouter les écouteurs aux titres
        document.querySelectorAll('#modal-artist .track-item').forEach(trackEl => {
            const albumId = trackEl.getAttribute('data-album');
            const idx = parseInt(trackEl.getAttribute('data-index'));

            trackEl.addEventListener('click', (e) => {
                if (!e.target.closest('.track-play-btn')) {
                    const album = albumsData[albumId];
                    if (album && album.titres[idx]) {
                        this.selectTrack(album.titres[idx], trackEl);
                    }
                }
            });

            const playBtn = trackEl.querySelector('.track-play-btn');
            if (playBtn) {
                playBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const album = albumsData[albumId];
                    if (album && album.titres[idx]) {
                        this.selectTrack(album.titres[idx], trackEl);
                        setTimeout(() => this.play(), 100);
                    }
                });
            }
        });

        // Ajouter écouteur à la barre de progression artiste
        const progressBar = document.getElementById('player-progress-artist');
        if (progressBar) {
            progressBar.addEventListener('change', (e) => {
                if (this.audio && this.audio.duration) {
                    this.audio.currentTime = (e.target.value / 100) * this.audio.duration;
                }
            });
        }
    }

    // Fermer les modales
    closeAlbumModal() {
        const modal = document.getElementById('modal-album');
        if (modal) modal.style.display = 'none';
        this.stop();
    }

    closeArtistModal() {
        const modal = document.getElementById('modal-artist');
        if (modal) modal.style.display = 'none';
        this.stop();
    }

    // Sélectionner un titre
    selectTrack(track, trackElement) {
        if (!track) return;

        // Retirer l'actif précédent
        document.querySelectorAll('.track-item').forEach(el => el.classList.remove('active'));
        
        // Marquer celui-ci comme actif
        if (trackElement) trackElement.classList.add('active');
        
        // Stocker la piste courante
        this.currentTrack = track;
        
        // Mettre à jour le texte des deux modales
        const albumText = document.getElementById('now-playing-text');
        const artistText = document.getElementById('now-playing-text-artist');
        
        if (albumText) albumText.textContent = `🎵 ${track.titre}`;
        if (artistText) artistText.textContent = `🎵 ${track.titre}`;
        
        // Charger le fichier dans l'élément audio
        if (this.audio) {
            this.audio.src = track.fichier;
            this.audio.load();
        }
        
        // Réinitialiser l'état (pas de lecture automatique)
        this.isPlaying = false;
    }

    // Lecture
    play() {
        if (!this.currentTrack) {
            alert('⚠️ Veuillez sélectionner un titre');
            return;
        }

        if (!this.audio) {
            alert('❌ Lecteur audio non disponible');
            return;
        }

        // Assurer que le bon fichier est chargé.
        // Note: this.audio.src est une URL complète, on ne peut pas la comparer directement.
        // On s'assure que la source se termine par le chemin du fichier pour éviter les rechargements inutiles.
        if (!this.audio.src.endsWith(this.currentTrack.fichier)) {
            this.audio.src = this.currentTrack.fichier;
        }

        const promise = this.audio.play();
        
        if (promise !== undefined) {
            promise
                .then(() => {
                    this.isPlaying = true;
                    console.log('🎵 Lecture: ' + this.currentTrack.titre);
                    console.log('🔊 Volume: 100%');
                })
                //.catch((err) => {
                    //console.error('❌ Erreur play():', err);
                    //console.error('   Fichier:', this.currentTrack.fichier);
                    //alert('❌ Impossible de lire:\n' + this.currentTrack.titre);
                    //this.isPlaying = false;
                //});
        }
    }

    // Pause
    pause() {
        if (this.audio) {
            this.audio.pause();
        }
        this.isPlaying = false;
        console.log('⏸ Pause');
    }

    // Stop
    //stop() {
        //if (this.audio) {
            //this.audio.pause();
            //this.audio.currentTime = 0;
        //}
        //this.isPlaying = false;
        
        // Réinitialiser l'affichage
        //const progress = document.getElementById('player-progress');
        //const progressArtist = document.getElementById('player-progress-artist');
        //if (progress) progress.value = 0;
        //if (progressArtist) progressArtist.value = 0;
        
        //const timeCur = document.getElementById('player-time-current');
        //const timeArtist = document.getElementById('player-time-current-artist');
        //if (timeCur) timeCur.textContent = '0:00';
        //if (timeArtist) timeArtist.textContent = '0:00';
        
        //console.log('⏹ Arrêt');
    //}

    // Piste suivante
    nextTrack() {
        const album = albumsData[this.currentAlbumId];
        if (!album || !album.titres) return;

        const idx = album.titres.indexOf(this.currentTrack);
        if (idx >= 0 && idx < album.titres.length - 1) {
            const nextTrack = album.titres[idx + 1];
            const nextEl = document.querySelector(`.track-item[data-index="${idx + 1}"]`);
            this.selectTrack(nextTrack, nextEl);
            setTimeout(() => this.play(), 100);
        }
    }
}

// ========================================
// 🎵 INITIALISER LE LECTEUR AUDIO
// ========================================
// Crée une instance globale du lecteur audio (window.player)
// Accessible partout sur le site pour les opérations de lecture
window.player = new MusicPlayer();

// ========================================
// 📰 SYSTÈME D'ACTUALITÉS & PERSISTENCE
// ========================================
// Gère les actualités (news) du site avec sauvegarde locale (localStorage)
// Les actualités sont persistées même après fermeture du navigateur
// 
// Utilisation:
// - publishNewsFromTrack(track, album) - Publier une actualité
// - loadPersistedNews() - Charger les actualités sauvegardées
// - addTrackToAlbum(albumId, trackObj) - Ajouter une chanson et publier une news
// ========================================

const NEWS_STORAGE_KEY = 'amcNews'; // Clé localStorage pour stocker les actualités

/**
 * createNewsCardElement(entry)
 * Crée un élément HTML pour afficher une actualité
 * @param {Object} entry - Objet avec: id, date, title, excerpt, image, link
 * @returns {Element} - Élément article HTML
 */
function createNewsCardElement(entry) {
    const article = document.createElement('article');
    article.className = 'news-card';
    article.innerHTML = `
        <div class="news-image">
            <img src="${entry.image}" alt="${entry.title}">
            <span class="news-date">${entry.date}</span>
        </div>
        <h3>${entry.title}</h3>
        <p>${entry.excerpt}</p>
        <a href="${entry.link || '#'}" class="read-more">Lire plus →</a>
    `;
    return article;
}

/**
 * loadPersistedNews()
 * Charge les actualités sauvegardées dans localStorage
 * Les affiche au début de la grille des actualités (les plus récentes en premier)
 */
function loadPersistedNews() {
    try {
        // Récupérer les actualités du localStorage (ou array vide si aucune)
        const raw = localStorage.getItem(NEWS_STORAGE_KEY) || '[]';
        const items = JSON.parse(raw); // Convertir le JSON en objet JavaScript
        if (!Array.isArray(items) || items.length === 0) return;

        const grid = document.querySelector('.news-grid');
        if (!grid) return;

        // 📌 Ajouter les actualités au début (prepend = plus récentes en premier)
        items.forEach(entry => {
            const el = createNewsCardElement(entry);
            grid.prepend(el);
        });
        console.log(`✅ ${items.length} actualité(s) restaurée(s) depuis localStorage (${NEWS_STORAGE_KEY})`);
    } catch (err) {
        console.error('Erreur lors du chargement des actualités depuis localStorage', err);
    }
}

/**
 * publishNewsFromTrack(track, album)
 * Publie une nouvelle actualité à partir d'une chanson et d'un album
 * Sauvegarde dans localStorage et affiche dans le DOM
 * @param {Object} track - Objet chanson avec: titre, fichier, duree, artiste
 * @param {Object} album - Objet album avec: nom, image, artiste
 */
function publishNewsFromTrack(track, album) {
    if (!track || !album) return;

    // 📅 Créer une entrée actualité avec la date actuelle (format français)
    const now = new Date();
    const dateStr = now.toLocaleDateString('fr-FR', { year: 'numeric', month: 'short', day: 'numeric' });
    
    const entry = {
        id: 'news-' + now.getTime(), // ID unique basé sur le timestamp
        date: dateStr, // Date formatée en français
        title: `${track.titre} — ${album.nom}`, // Titre avec chanson et album
        excerpt: `${album.artiste} publie un nouveau titre : ${track.titre}. Écoutez-le maintenant sur notre lecteur.`,
        image: album.image || 'Assets/Images/Album3.jpg', // Image de l'album
        link: '#' // Lien (peut être modifié)
    };

    // 💾 Sauvegarder dans localStorage (stockage local du navigateur)
    try {
        const raw = localStorage.getItem(NEWS_STORAGE_KEY) || '[]';
        const items = JSON.parse(raw);
        items.unshift(entry); // Ajouter au début (plus récente)
        
        // 🔒 Limiter à 50 actualités maximum pour ne pas surcharger le stockage
        if (items.length > 50) items.length = 50;
        localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(items));
    } catch (err) {
        console.error('Erreur lors de la sauvegarde de l\'actualité', err);
    }

    // 🖥️ Insérer l'actualité dans le DOM (affichage immédiat si page chargée)
    const grid = document.querySelector('.news-grid');
    if (grid) {
        const el = createNewsCardElement(entry);
        grid.prepend(el); // Ajouter au début de la grille
    }
    console.log('📰 Actualité publiée:', entry.title);
}

/**
 * addTrackToAlbum(albumId, trackObj, publish)
 * Ajoute une chanson à un album existant
 * Peut automatiquement publier une actualité
 * @param {String} albumId - ID de l'album (clé dans albumsData)
 * @param {Object} trackObj - Objet chanson avec: titre, fichier, duree, artiste
 * @param {Boolean} publish - Publier une actualité? (défaut: true)
 * @returns {Boolean} - true si succès, false si album non trouvé
 */
function addTrackToAlbum(albumId, trackObj, publish = true) {
    const album = albumsData[albumId];
    if (!album) {
        console.warn(`Album introuvable: ${albumId}`);
        return false;
    }

    // ➕ Ajouter la chanson au tableau des titres de l'album
    album.titres.push(trackObj);
    console.log(`➕ Titre ajouté à ${albumId}:`, trackObj.titre);

    // 📰 Publier une actualité si demandé (par défaut: oui)
    if (publish) {
        publishNewsFromTrack(trackObj, album);
    }

    return true; // Succès
}

// ========================================
// 🌐 EXPOSITION DES FONCTIONS GLOBALES
// ========================================
// Expose les fonctions à la portée globale (window)
// Pour pouvoir les appeler depuis la console du navigateur ou d'autres scripts
// Utiles pour l'administration et les tests
// ========================================

window.publishNewsFromTrack = publishNewsFromTrack; // Publier une actualité
window.addTrackToAlbum = addTrackToAlbum; // Ajouter une chanson
window.loadPersistedNews = loadPersistedNews; // Charger les actualités

// ========================================
// 🚀 INITIALISATION AU CHARGEMENT DE LA PAGE
// ========================================
// Exécuté quand le DOM est complètement chargé
// Initialise les fonctionnalités principales du site
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Lecteur d\'albums initialisé avec succès!');
    console.log('📁 Fichiers MP3 chargés depuis: Assets/Musics/');
    console.log('📢 Fonctions disponibles: publishNewsFromTrack, addTrackToAlbum, loadPersistedNews');
    
    // Charger et afficher les actualités persistées (sauvegardées précédemment)
    loadPersistedNews();
});

// ========================================
// 🔧 OUTILS DE DÉBOGAGE
// ========================================
// Fonctions utiles pour tester et déboguer le lecteur audio
// À utiliser dans la console du navigateur (F12)

/**
 * testAudioPlayback(filePath)
 * Teste la lecture d'un fichier audio
 * Utile pour vérifier que les fichiers sont accessibles
 * @param {String} filePath - Chemin du fichier MP3
 * 
 * Exemple d'utilisation:
 *   testAudioPlayback('Assets/Musics/Amapiano(128k).mp3')
 */
window.testAudioPlayback = async function(filePath) {
    try {
        if (!window.player) {
            console.error('❌ Lecteur non disponible');
            return;
        }
        if (!window.player.audio) {
            console.error('❌ Élément audio non initialisé');
            return;
        }
        console.log('🔧 Test playback:', filePath);
        window.player.audio.src = filePath;
        window.player.audio.load();
        const promise = window.player.audio.play();
        if (promise !== undefined) {
            await promise;
        }
        console.log('✅ Test playback réussi pour', filePath);
    } catch (err) {
        console.error('❌ Test playback échoué:', err);
    }
};
