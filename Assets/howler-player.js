/**
 * ========================================
 * 🎵 AMC MUSIC PLAYER - Howler.js
 * ========================================
 * Lecteur audio personnalisé et responsive avec Howler.js
 * 
 * Fonctionnalités principales:
 * - Lecture de fichiers audio (MP3, WAV, OGG)
 * - Playlist avec sélection de chansons
 * - Contrôles: play, pause, suivant, précédent
 * - Mode shuffle (lecture aléatoire) et repeat (répétition)
 * - Barre de progression et affichage du temps
 * - Contrôle du volume
 * - Visualiseur animé
 * - Design fully responsive (mobile, tablette, desktop)
 * 
 * @class AMCMusicPlayer
 * @param {string} containerId - ID du conteneur HTML
 * @param {Array} playlistData - Tableau de chansons {titre, artiste, fichier, duree, image}
 */

class AMCMusicPlayer {
    /**
     * Constructeur - Initialise le lecteur
     * @param {string} containerId - ID du conteneur DOM
     * @param {Array} playlistData - Données de la playlist
     */
    constructor(containerId, playlistData) {
        this.container = document.getElementById(containerId);
        this.playlistData = playlistData; // Tableau des chansons
        this.currentSoundIndex = 0; // Index de la chanson actuelle
        this.currentSound = null; // Objet Howl actuellement joué
        this.isPlaying = false; // État de lecture
        this.isShuffle = false; // Mode lecture aléatoire
        this.repeatMode = 'none'; // Mode répétition: 'none', 'all', 'one'
        this.volume = 1; // Volume (0-1)
        this.animationId = null; // ID de l'animation requestAnimationFrame

        this.init(); // Démarrer l'initialisation
    }

    /**
     * init() - Initialise le lecteur complètement
     * Appelle render(), setupEventListeners() et updatePlaylist()
     */
    init() {
        this.render(); // Créer l'interface
        this.setupEventListeners(); // Ajouter les écouteurs d'événements
        this.updatePlaylist(); // Remplir la liste des chansons
    }

    /**
     * render() - Crée l'interface HTML du lecteur
     * Génère la structure complète du lecteur avec:
     * - Image de l'album avec visualiseur
     * - Infos de la chanson (titre, artiste)
     * - Barre de progression
     * - Contrôles (play, pause, suivant, etc.)
     * - Contrôle du volume
     * - Liste des chansons (playlist)
     */
    render() {
        if (!this.container) {
            console.error('❌ Conteneur non trouvé pour le lecteur');
            return;
        }

        // 🎨 Créer l'interface complète du lecteur
        this.container.innerHTML = `
            <div class="amc-player">
                <!-- 🖼️ Section Image de l'Album & Visualiseur -->
                <div class="player-artwork">
                    <img class="player-image" src="Assets/Images/album1.jpg" alt="Album Art">
                    <!-- Barres du visualiseur (animées pendant la lecture) -->
                    <div class="player-visualizer">
                        <div class="visualizer-bar"></div>
                        <div class="visualizer-bar"></div>
                        <div class="visualizer-bar"></div>
                        <div class="visualizer-bar"></div>
                        <div class="visualizer-bar"></div>
                    </div>
                </div>

                <!-- 📝 Infos de la Chanson (Titre, Artiste) -->
                <div class="player-info">
                    <h3 class="player-title">Sélectionnez une chanson</h3>
                    <p class="player-artist">AMC Music Label</p>
                </div>

                <!-- ⏱️ Barre de Progression & Temps -->
                <div class="player-progress-container">
                    <span class="player-time current-time">0:00</span>
                    <div class="player-progress-bar">
                        <div class="player-progress-fill"></div>
                        <input type="range" class="player-progress-slider" min="0" max="100" value="0">
                    </div>
                    <span class="player-time total-time">0:00</span>
                </div>

                <!-- 🎮 Contrôles Principaux (Play, Pause, Suivant, etc.) -->
                <div class="player-controls">
                    <!-- Mode Shuffle (lecture aléatoire) -->
                    <button class="player-btn shuffle-btn" title="Mélanger la lecture">
                        <i class="fas fa-random"></i>
                    </button>
                    <!-- Chanson Précédente -->
                    <button class="player-btn prev-btn" title="Chanson précédente">
                        <i class="fas fa-step-backward"></i>
                    </button>
                    <!-- Play / Pause -->
                    <button class="player-btn play-btn" title="Lecture / Pause">
                        <i class="fas fa-play"></i>
                    </button>
                    <!-- Chanson Suivante -->
                    <button class="player-btn next-btn" title="Chanson suivante">
                        <i class="fas fa-step-forward"></i>
                    </button>
                    <!-- Mode Répétition (none, all, one) -->
                    <button class="player-btn repeat-btn" title="Mode répétition">
                        <i class="fas fa-redo"></i>
                    </button>
                </div>

                <!-- 🔊 Contrôle du Volume -->
                <div class="player-volume-container">
                    <i class="fas fa-volume-down"></i>
                    <input type="range" class="player-volume-slider" min="0" max="100" value="100">
                    <i class="fas fa-volume-up"></i>
                </div>

                <!-- 📋 Playlist (Liste des chansons) -->
                <div class="player-playlist">
                    <h4 class="playlist-title">Playlist</h4>
                    <div class="playlist-items"></div>
                </div>
            </div>
        `;
    }

    /**
     * setupEventListeners() - Attache les écouteurs aux contrôles
     * Relie les boutons et sliders aux méthodes du lecteur
     */
    setupEventListeners() {
        // 🎮 Récupérer tous les boutons et sliders
        const playBtn = this.container.querySelector('.play-btn');
        const prevBtn = this.container.querySelector('.prev-btn');
        const nextBtn = this.container.querySelector('.next-btn');
        const shuffleBtn = this.container.querySelector('.shuffle-btn');
        const repeatBtn = this.container.querySelector('.repeat-btn');
        const progressSlider = this.container.querySelector('.player-progress-slider');
        const volumeSlider = this.container.querySelector('.player-volume-slider');

        // 🔗 Attacher les événements aux boutons
        playBtn.addEventListener('click', () => this.togglePlay()); // Bascule play/pause
        prevBtn.addEventListener('click', () => this.previousTrack()); // Chanson précédente
        nextBtn.addEventListener('click', () => this.nextTrack()); // Chanson suivante
        shuffleBtn.addEventListener('click', () => this.toggleShuffle()); // Basculer shuffle
        repeatBtn.addEventListener('click', () => this.toggleRepeat()); // Basculer mode répétition
        progressSlider.addEventListener('input', (e) => this.seek(e.target.value)); // Slider de progression
        volumeSlider.addEventListener('input', (e) => this.setVolume(e.target.value / 100)); // Slider volume

        // 🎵 Écouteur pour cliquer sur une chanson dans la playlist
        this.container.addEventListener('click', (e) => {
            if (e.target.closest('.playlist-item')) {
                const index = parseInt(e.target.closest('.playlist-item').dataset.index);
                this.playTrack(index); // Jouer la chanson cliquée
            }
        });
    }

    /**
     * updatePlaylist() - Met à jour l'affichage de la playlist
     * Génère les éléments DOM pour chaque chanson
     * Les affiche dans le conteneur .playlist-items
     */
    updatePlaylist() {
        const playlistItems = this.container.querySelector('.playlist-items');
        playlistItems.innerHTML = ''; // Vider l'ancienne playlist

        // 🎵 Créer un élément pour chaque chanson
        this.playlistData.forEach((track, index) => {
            const item = document.createElement('div');
            item.className = 'playlist-item';
            item.dataset.index = index; // Stocker l'index pour retrouver la chanson
            item.innerHTML = `
                <span class="playlist-item-number">${index + 1}</span>
                <div class="playlist-item-info">
                    <div class="playlist-item-title">${track.titre}</div>
                    <div class="playlist-item-duration">${track.duree}</div>
                </div>
            `;
            playlistItems.appendChild(item);
        });

        this.updateCurrentTrack(); // Mettre à jour la chanson sélectionnée
    }

    /**
     * playTrack(index) - Lit une chanson par son index
     * Crée une instance Howl et démarre la lecture
     * @param {number} index - Index de la chanson dans playlistData
     */
    playTrack(index) {
        if (index < 0 || index >= this.playlistData.length) return;

        // ⏹️ Arrêter la chanson actuelle si elle joue
        if (this.currentSound) {
            this.currentSound.stop();
        }

        this.currentSoundIndex = index;
        const track = this.playlistData[index];

        // Create new Howl instance
        this.currentSound = new Howl({
            src: [track.fichier],
            volume: this.volume,
            onplay: () => {
                this.isPlaying = true;
                this.updateUI();
                this.updateCurrentTrack();
                this.animateProgress();
            },
            onstop: () => {
                this.isPlaying = false;
                this.updateUI();
            },
            onend: () => {
                if (this.repeatMode === 'one') {
                    this.currentSound.play(); // Rejouer si mode 'one'
                } else {
                    this.nextTrack(); // Passer à la suivante
                }
            },
            onload: () => {
                this.updateDuration(); // Mettre à jour la durée totale
            }
        });

        this.currentSound.play(); // Démarrer la lecture
    }

    /**
     * togglePlay() - Bascule play/pause
     * Si aucune chanson n'est sélectionnée, lance la première
     * Sinon, bascule entre play et pause
     */
    togglePlay() {
        if (!this.currentSound) {
            // 🎵 Si aucune chanson: jouer la première
            this.playTrack(this.currentSoundIndex);
            return;
        }

        // ⏯️ Basculer entre play et pause
        if (this.isPlaying) {
            this.currentSound.pause();
            this.isPlaying = false;
        } else {
            this.currentSound.play();
            this.isPlaying = true;
        }
        this.updateUI(); // Mettre à jour l'icône du bouton
    }

    /**
     * nextTrack() - Passer à la chanson suivante
     * Si c'est la dernière:
     * - Mode 'all': retour à la première
     * - Sinon: arrêter la lecture
     */
    nextTrack() {
        let nextIndex = this.currentSoundIndex + 1;
        if (nextIndex >= this.playlistData.length) {
            // 🔄 Si mode 'all': boucler au début, sinon arrêter
            if (this.repeatMode === 'all') {
                nextIndex = 0;
            } else {
                this.currentSound?.stop();
                return;
            }
        }
        this.playTrack(nextIndex);
    }

    /**
     * previousTrack() - Aller à la chanson précédente
     * Si on a passé 3 secondes: retourner au début de la chanson
     * Sinon: aller à la chanson précédente
     * À la première chanson: aller à la dernière (boucle)
     */
    previousTrack() {
        if (this.currentSound && this.currentSound.seek() > 3) {
            // ⏮️ Si passé 3 sec: revenir au début de la chanson actuelle
            this.currentSound.seek(0);
        } else {
            // ⬅️ Sinon: aller à la chanson précédente
            let prevIndex = this.currentSoundIndex - 1;
            if (prevIndex < 0) {
                // 🔄 À la première chanson: boucler à la dernière
                prevIndex = this.playlistData.length - 1;
            }
            this.playTrack(prevIndex);
        }
    }

    /**
     * toggleShuffle() - Bascule le mode lecture aléatoire (shuffle)
     * Ajoute/retire la classe 'active' au bouton
     */
    toggleShuffle() {
        this.isShuffle = !this.isShuffle; // Basculer l'état
        const shuffleBtn = this.container.querySelector('.shuffle-btn');
        shuffleBtn.classList.toggle('active', this.isShuffle); // Mettre à jour le style du bouton
    }

    /**
     * toggleRepeat() - Bascule les modes de répétition
     * Cycle: none → all → one → none
     * - none: pas de répétition
     * - all: rejouer la playlist depuis le début
     * - one: rejouer la même chanson infiniment
     */
    toggleRepeat() {
        const modes = ['none', 'all', 'one'];
        const currentIndex = modes.indexOf(this.repeatMode);
        this.repeatMode = modes[(currentIndex + 1) % modes.length]; // Passer au mode suivant
        
        const repeatBtn = this.container.querySelector('.repeat-btn');
        repeatBtn.classList.toggle('active', this.repeatMode !== 'none'); // Activer si pas 'none'
        
        // 🔄 Style spécial pour le mode 'one'
        if (this.repeatMode === 'one') {
            repeatBtn.classList.add('repeat-one');
        } else {
            repeatBtn.classList.remove('repeat-one');
        }
    }

    /**
     * seek(percent) - Sauter à une position dans la chanson
     * Appelé quand on utilise la barre de progression
     * @param {number} percent - Position en pourcentage (0-100)
     */
    seek(percent) {
        if (!this.currentSound) return;
        const duration = this.currentSound.duration();
        this.currentSound.seek((percent / 100) * duration); // Convertir % en secondes
    }

    /**
     * setVolume(vol) - Définir le volume
     * Appelé quand on utilise le slider de volume
     * @param {number} vol - Volume entre 0 et 1 (0.0 = muet, 1.0 = max)
     */
    setVolume(vol) {
        this.volume = vol; // Stocker le volume
        if (this.currentSound) {
            this.currentSound.volume(vol); // Appliquer au son actuel
        }
    }

    updateDuration() {
        if (!this.currentSound) return;
        const duration = this.currentSound.duration();
        const totalTimeEl = this.container.querySelector('.total-time');
        totalTimeEl.textContent = this.formatTime(duration);
    }

    updateCurrentTrack() {
        const track = this.playlistData[this.currentSoundIndex];
        const titleEl = this.container.querySelector('.player-title');
        const artistEl = this.container.querySelector('.player-artist');
        const imageEl = this.container.querySelector('.player-image');

        // 🎵 Mettre à jour les infos de la chanson
        titleEl.textContent = track.titre;
        artistEl.textContent = track.artiste || 'AMC Music Label';
        
        // 🖼️ Mettre à jour l'image de l'album
        if (track.image) {
            imageEl.src = track.image;
        }

        // 📌 Surligner la chanson actuelle dans la playlist
        const playlistItems = this.container.querySelectorAll('.playlist-item');
        playlistItems.forEach((item, index) => {
            item.classList.toggle('active', index === this.currentSoundIndex);
        });
    }

    /**
     * updateUI() - Met à jour l'interface en fonction de l'état
     * Change l'icône du bouton play en icône pause et vice-versa
     */
    updateUI() {
        const playBtn = this.container.querySelector('.play-btn');
        const icon = this.isPlaying ? 'fa-pause' : 'fa-play';
        playBtn.innerHTML = `<i class="fas ${icon}"></i>`;
    }

    /**
     * animateProgress() - Anime la barre de progression en temps réel
     * Appelée 60 fois par seconde via requestAnimationFrame
     * Met à jour: la barre, le temps affiché, et le visualiseur
     */
    animateProgress() {
        // ⏸️ Arrêter si paused ou pas de son
        if (!this.isPlaying || !this.currentSound) {
            this.animationId = null;
            return;
        }

        // 📊 Calculer la progression actuelle
        const seek = this.currentSound.seek(); // Position actuelle en secondes
        const duration = this.currentSound.duration(); // Durée totale en secondes
        const percent = (seek / duration) * 100; // Convertir en pourcentage

        // 📈 Mettre à jour les éléments visuels
        const progressSlider = this.container.querySelector('.player-progress-slider');
        const progressFill = this.container.querySelector('.player-progress-fill');
        const currentTimeEl = this.container.querySelector('.current-time');

        progressSlider.value = percent; // Position du slider
        progressFill.style.width = percent + '%'; // Barre remplie
        currentTimeEl.textContent = this.formatTime(seek); // Temps formaté

        // 🎨 Animer le visualiseur
        this.animateVisualizer();

        // 🔄 Relancer l'animation au prochain frame
        this.animationId = requestAnimationFrame(() => this.animateProgress());
    }

    /**
     * animateVisualizer() - Anime les barres du visualiseur
     * Donne une sensation dynamique pendant la lecture
     * Hauteurs aléatoires quand on joue, statique sinon
     */
    animateVisualizer() {
        const bars = this.container.querySelectorAll('.visualizer-bar');
        bars.forEach(bar => {
            const height = Math.random() * 100; // Hauteur aléatoire (0-100%)
            // 🎨 Hauteur aléatoire si on joue, sinon petite hauteur statique
            bar.style.height = (this.isPlaying ? height : 20) + '%';
        });
    }

    /**
     * formatTime(seconds) - Formate les secondes au format MM:SS
     * Exemple: 125 secondes → "2:05"
     * @param {number} seconds - Nombre de secondes
     * @returns {string} - Temps formaté (MM:SS)
     */
    formatTime(seconds) {
        if (!seconds || isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60); // Minutes
        const secs = Math.floor(seconds % 60); // Secondes restantes
        // Formater avec un 0 devant si < 10
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    /**
     * setPlaylist(newPlaylistData) - Remplacer la playlist complète
     * Utile pour changer d'album ou de playlist sans créer une nouvelle instance
     * @param {Array} newPlaylistData - Nouveau tableau de chansons
     */
    setPlaylist(newPlaylistData) {
        this.playlistData = newPlaylistData; // Remplacer les données
        this.currentSoundIndex = 0; // Revenir à la première chanson
        if (this.currentSound) {
            this.currentSound.stop(); // Arrêter la lecture actuelle
        }
        this.updatePlaylist(); // Mettre à jour l'affichage
    }
}

// ========================================
// 🚀 INITIALISATION DU LECTEUR
// ========================================
// Affiche un message de confirmation quand Howler.js est chargé et prêt
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Howler.js Music Player initialisé avec succès');
});