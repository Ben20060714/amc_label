/**
 * ========================================
 * 🎵 AMC ARTISTS DATABASE - Base de données
 * ========================================
 * Contient tous les artistes et leurs chansons
 * Utilisée par le lecteur Howler.js et les pages artistes
 * 
 * Structure:
 * - AMC_ARTISTS_DB: Objet principal avec tous les artistes
 * - Chaque artiste a: id, name, profileImage, genres, bio, stats, playlist
 * - Chaque chanson a: titre, artiste, fichier, duree, image
 * 
 * Utilisation:
 * - getArtistPlaylist(artistId) - Récupérer les chansons d'un artiste
 * - getAllArtists() - Récupérer tous les artistes
 * - getArtistData(artistId) - Récupérer les données d'un artiste
 * 
 * ⚠️ POUR AJOUTER UN NOUVEL ARTISTE:
 * 1. Ajouter une nouvelle clé dans AMC_ARTISTS_DB
 * 2. Remplir tous les champs (id, name, profileImage, genres, bio, stats)
 * 3. Ajouter le tableau playlist avec les chansons
 * 4. Utiliser des chemins valides pour les fichiers MP3
 * ========================================
 */

const AMC_ARTISTS_DB = {
    /**
     * 🎤 ARTISTE 1: MR. BARON
     * Producteur de beats amapiano de qualité professionnelle
     */
    'mr-baron': {
        id: 'mr-baron', // ID unique (utilisé dans les URLs et requêtes)
        name: 'Mr. Baron', // Nom d'affichage
        profileImage: 'Assets/Images/Mrbaron0.jpg', // Photo de profil
        genres: 'Rap • Gospel', // Genres musicaux
        bio: 'Producteur et artiste gospel, Mr. Baron développe une identité musicale énergique entre rap et amapiano.',
//        stats: {
//            albums: 1, // Nombre d'albums
//            tracks: 5, // Nombre de chansons
//            followers: '10K' // Nombre d'abonnés
//        },
        playlist: [
            // 🎵 Chaque chanson contient ces infos:
            {
                titre: 'Amapiano Beat', // Nom de la chanson
                artiste: 'Mr. Baron', // Nom de l'artiste
                fichier: 'Assets/Musics/Amapiano(128k).mp3', // Chemin du fichier MP3
                duree: '2:47', // Durée au format MM:SS
                image: 'Assets/Images/Mrbaron0.jpg' // Image de l'album
            },
            {
                titre: 'Amapiano Beat (Remix)',
                artiste: 'Mr. Baron',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Mrbaron0.jpg'
            },
            {
                titre: 'Amapiano Beat (Extended)',
                artiste: 'Mr. Baron',
                fichier: 'Assets/Musics/Call_of_the_Night_Season_2_Opening___Creepy_Nuts_-_Mirage__Official_Instrumental_(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Mrbaron0.jpg'
            },
            {
                titre: 'Amapiano Beat (Lofi)',
                artiste: 'Mr. Baron',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Mrbaron0.jpg'
            },
            {
                titre: 'Amapiano Beat (Acoustic)',
                artiste: 'Mr. Baron',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Mrbaron0.jpg'
            }
        ]
    },

    /**
     * 🎤 ARTISTE 2: MR. OBJECTIF
     * Spécialisé dans la musique traditionnelle avec touches modernes
     */
    'mr-objectif': {
        id: 'mr-objectif',
        name: 'Mr. Objectif',
        profileImage: 'Assets/Images/Mrobjectif.JPG',
        genres: 'Rap • Gospel',
        bio: 'Artiste spécialisé dans la musique traditionnelle avec des touches modernes et contemporaines.',
//        stats: {
//            albums: 1, // Nombre d'albums
//            tracks: 5, // Nombre de chansons
//            followers: '10K' // Nombre d'abonnés
//        },
        playlist: [
            {
                titre: 'Mungu njo chefu',
                artiste: 'Mr. Objectif',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Mrobjectif.JPG'
            },
            {
                titre: 'Objectif 026',
                artiste: 'Mr. Objectif',
                fichier: 'Assets/Musics/Call_of_the_Night_Season_2_Opening___Creepy_Nuts_-_Mirage__Official_Instrumental_(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Mrobjectif.JPG'
            },
            {
                titre: 'Voix Ancestrale',
                artiste: 'Mr. Objectif',
                fichier: 'Assets/Musics/Call_of_the_Night_Season_2_Opening___Creepy_Nuts_-_Mirage__Official_Instrumental_(128k).mp3',
                duree: '2:38',
                image: 'Assets/Images/Mrobjectif.JPG'
            },
            {
                titre: 'Fusion Moderne',
                artiste: 'Mr. Objectif',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Mrobjectif.JPG'
            },
            {
                titre: 'Célébration',
                artiste: 'Mr. Objectif',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Mrobjectif.JPG'
            },
            {
                titre: 'Épilogue',
                artiste: 'Mr. Objectif',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Mrobjectif.JPG'
            }
        ]
    },

    // ===== ARTISTE 3: MACKLINE =====
    'mackline': {
        id: 'mackline',
        name: 'Mackline',
        profileImage: 'Assets/Images/Mackline0.jpg',
        genres: 'Rap • Gospel',
        bio: 'Artiste polyvalent proposant différents styles musicaux adaptés à tous les goûts.',
//        stats: {
//            albums: 1, // Nombre d'albums
//            tracks: 5, // Nombre de chansons
//            followers: '10K' // Nombre d'abonnés
//        },
        playlist: [
            {
                titre: 'Call of the night (OP2)',
                artiste: 'Mackline',
                fichier: 'Assets/Musics/Call_of_the_Night_Season_2_Opening___Creepy_Nuts_-_Mirage__Official_Instrumental_(128k).mp3',
                duree: '2:38',
                image: 'Assets/Images/Mackline0.jpg'
            },
            {
                titre: 'In da club',
                artiste: 'Mackline',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '3:23',
                image: 'Assets/Images/Mackline0.jpg'
            },
            {
                titre: 'Titre 3',
                artiste: 'Mackline',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Mackline0.jpg'
            },
            {
                titre: 'Titre 4',
                artiste: 'Mackline',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Mackline0.jpg'
            }
        ]
    },

    // ===== ARTISTE 4: AARON ASEMBA =====
    'aaron-asemba': {
        id: 'aaron-asemba',
        name: 'Aaron Asemba',
        profileImage: 'Assets/Images/artist6.jpg',
        genres: 'Rap • Gospel',
        bio: 'Artiste talentueux avec une discographie variée et des collaborations internationales.',
//        stats: {
//            albums: 1, // Nombre d'albums
//            tracks: 5, // Nombre de chansons
//            followers: '10K' // Nombre d'abonnés
//        },
        playlist: [
            {
                titre: 'Track 1',
                artiste: 'Aaron Asemba',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/artist6.jpg'
            },
            {
                titre: 'A thousand years',
                artiste: 'Aaron Asemba',
                fichier: 'Assets/Musics/Brooklyn_Duo_-_A_Thousand_Years_[WEDDING_VERSION](128k).mp3',
                duree: '5:00',
                image: 'Assets/Images/artist6.jpg'
            },
            {
                titre: 'Track 3',
                artiste: 'Aaron Asemba',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/artist6.jpg'
            },
            {
                titre: 'Track 4',
                artiste: 'Aaron Asemba',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/artist6.jpg'
            },
            {
                titre: 'Track 5',
                artiste: 'Aaron Asemba',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/artist6.jpg'
            }
        ]
    },

    // ===== ARTISTE 5: BIG DEMM =====
    'big-demm': {
        id: 'big-demm',
        name: 'Big Demm',
        profileImage: 'Assets/Images/artist5.jpg',
        genres: 'Dub • Reggae',
        bio: 'Spécialiste des sonorités reggae et dub avec des influences rhythmiques authentiques.',
//        stats: {
//            albums: 1, // Nombre d'albums
//            tracks: 5, // Nombre de chansons
//            followers: '10K' // Nombre d'abonnés
//        },
        playlist: [
            {
                titre: 'Reggae Vibes 1',
                artiste: 'Big Demm',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/artist5.jpg'
            },
            {
                titre: 'Dub Connection',
                artiste: 'Big Demm',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/artist5.jpg'
            },
            {
                titre: 'Island Vibes',
                artiste: 'Big Demm',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/artist5.jpg'
            },
            {
                titre: 'Roots Movement',
                artiste: 'Big Demm',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/artist5.jpg'
            },
            {
                titre: 'Reggae Dreaming',
                artiste: 'Big Demm',
                fichier: 'Assets/Musics/Call_of_the_Night_Season_2_Opening___Creepy_Nuts_-_Mirage__Official_Instrumental_(128k).mp3',
                duree: '2:38',
                image: 'Assets/Images/artist5.jpg'
            },
            {
                titre: 'Dub Echo',
                artiste: 'Big Demm',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/artist5.jpg'
            }
        ]
    },

    // ===== ARTISTE 6: FRED S. =====
    'fred-s': {
        id: 'fred-s',
        name: 'Fred S.',
        profileImage: 'Assets/Images/artist6.jpg',
        genres: 'Jazz • Fondu',
        bio: 'Musicien virtuose explorant les horizons du jazz contemporain et de la fusion musicale.',
//        stats: {
//            albums: 1, // Nombre d'albums
//            tracks: 5, // Nombre de chansons
//            followers: '10K' // Nombre d'abonnés
//        },
        playlist: [
            {
                titre: 'Jazz Exploration',
                artiste: 'Fred S.',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/artist6.jpg'
            },
            {
                titre: 'Smooth Fusion',
                artiste: 'Fred S.',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/artist6.jpg'
            },
            {
                titre: 'Midnight Sax',
                artiste: 'Fred S.',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/artist6.jpg'
            },
            {
                titre: 'Urban Jazz',
                artiste: 'Fred S.',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/artist6.jpg'
            },
            {
                titre: 'Contemporary Soul',
                artiste: 'Fred S.',
                fichier: 'Assets/Musics/Call_of_the_Night_Season_2_Opening___Creepy_Nuts_-_Mirage__Official_Instrumental_(128k).mp3',
                duree: '2:38',
                image: 'Assets/Images/artist6.jpg'
            },
            {
                titre: 'Bebop Dreams',
                artiste: 'Fred S.',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/artist6.jpg'
            },
            {
                titre: 'Jazz Finale',
                artiste: 'Fred S.',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/artist6.jpg'
            }
        ]
    },

    // ===== ARTISTE 7: ZEHIIICKEY2.8 =====
    'zehiiickey': {
        id: 'zehiiickey',
        name: 'Zehiiickey2.8',
        profileImage: 'Assets/Images/Zehiiickey2.8-0.jpg',
        genres: 'Rap • Gospel',
        bio: 'Musicien virtuose explorant les horizons du jazz contemporain et de la fusion musicale.',
//        stats: {
//            albums: 1, // Nombre d'albums
//            tracks: 5, // Nombre de chansons
//            followers: '10K' // Nombre d'abonnés
//        },
        playlist: [
            {
                titre: 'Gospel Flow 1',
                artiste: 'Zehiiickey2.8',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Zehiiickey2.8-0.jpg'
            },
            {
                titre: 'Rap Gospel',
                artiste: 'Zehiiickey2.8',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Zehiiickey2.8-0.jpg'
            },
            {
                titre: 'Holy Beat',
                artiste: 'Zehiiickey2.8',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Zehiiickey2.8-0.jpg'
            },
            {
                titre: 'Spiritual Rhymes',
                artiste: 'Zehiiickey2.8',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Zehiiickey2.8-0.jpg'
            },
            {
                titre: 'Gospel Anthem',
                artiste: 'Zehiiickey2.8',
                fichier: 'Assets/Musics/Call_of_the_Night_Season_2_Opening___Creepy_Nuts_-_Mirage__Official_Instrumental_(128k).mp3',
                duree: '2:38',
                image: 'Assets/Images/Zehiiickey2.8-0.jpg'
            },
            {
                titre: 'Rap Prayer',
                artiste: 'Zehiiickey2.8',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Zehiiickey2.8-0.jpg'
            },
            {
                titre: 'Zehiiickey Finale',
                artiste: 'Zehiiickey2.8',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Zehiiickey2.8-0.jpg'
            }
        ]
    },

    // ===== ARTISTE 8: MIRADEL BADY =====
    'miradel-bady': {
        id: 'miradel-bady',
        name: 'Miradel Bady',
        profileImage: 'Assets/Images/Miradel Bady0.jpg',
        genres: 'Rap • Gospel',
        bio: 'Musicien virtuose explorant les horizons du jazz contemporain et de la fusion musicale.',
//        stats: {
//            albums: 1, // Nombre d'albums
//            tracks: 5, // Nombre de chansons
//            followers: '10K' // Nombre d'abonnés
//        },
        playlist: [
            {
                titre: 'Bady Track 1',
                artiste: 'Miradel Bady',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Miradel Bady0.jpg'
            },
            {
                titre: 'Bady Track 2',
                artiste: 'Miradel Bady',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Miradel Bady0.jpg'
            },
            {
                titre: 'Bady Track 3',
                artiste: 'Miradel Bady',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Miradel Bady0.jpg'
            },
            {
                titre: 'Bady Track 4',
                artiste: 'Miradel Bady',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Miradel Bady0.jpg'
            },
            {
                titre: 'Bady Track 5',
                artiste: 'Miradel Bady',
                fichier: 'Assets/Musics/Call_of_the_Night_Season_2_Opening___Creepy_Nuts_-_Mirage__Official_Instrumental_(128k).mp3',
                duree: '2:38',
                image: 'Assets/Images/Miradel Bady0.jpg'
            },
            {
                titre: 'Bady Track 6',
                artiste: 'Miradel Bady',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Miradel Bady0.jpg'
            },
            {
                titre: 'Bady Track 7',
                artiste: 'Miradel Bady',
                fichier: 'Assets/Musics/Amapiano(128k).mp3',
                duree: '2:47',
                image: 'Assets/Images/Miradel Bady0.jpg'
            }
        ]
    }
};

// Les fichiers réellement distribués par le projet sont la source de vérité.
// On évite ainsi d'afficher plusieurs faux titres pour le même fichier audio.
const AMC_AUDIO_METADATA = {
    'Assets/Musics/Amapiano(128k).mp3': { titre: 'Amapiano — Démo AMC', duree: '2:47' },
    'Assets/Musics/Call_of_the_Night_Season_2_Opening___Creepy_Nuts_-_Mirage__Official_Instrumental_(128k).mp3': { titre: 'Mirage — Instrumental', duree: '2:38' },
    'Assets/Musics/Brooklyn_Duo_-_A_Thousand_Years_[WEDDING_VERSION](128k).mp3': { titre: 'A Thousand Years', duree: '5:00' }
};

Object.values(AMC_ARTISTS_DB).forEach(artist => {
    const uniqueTracks = new Map();
    artist.playlist.forEach(track => {
        const metadata = AMC_AUDIO_METADATA[track.fichier];
        if (!metadata || uniqueTracks.has(track.fichier)) return;
        uniqueTracks.set(track.fichier, {
            ...track,
            ...metadata
        });
    });
    artist.playlist = [...uniqueTracks.values()];
});

// ========================================
// 🔧 FONCTIONS UTILITAIRES DE LA BASE DE DONNÉES
// ========================================
// Fonctions pour accéder facilement aux données des artistes

/**
 * getArtistPlaylist(artistId)
 * Récupère la liste des chansons d'un artiste
 * @param {string} artistId - ID de l'artiste (ex: 'mr-baron')
 * @returns {Array} - Tableau des chansons, ou array vide si artiste non trouvé
 * 
 * Exemple:
 *   const songs = getArtistPlaylist('mr-baron');
 *   console.log(songs); // Affiche les 5 chansons de Mr. Baron
 */
function getArtistPlaylist(artistId) {
    const artist = AMC_ARTISTS_DB[artistId];
    return artist ? artist.playlist : []; // Retourner la playlist ou array vide
}

/**
 * getAllArtists()
 * Récupère TOUS les artistes de la base de données
 * @returns {Array} - Tableau de tous les objets artistes
 * 
 * Exemple:
 *   const artists = getAllArtists();
 *   console.log(artists.length); // Affiche le nombre total d'artistes
 */
function getAllArtists() {
    return Object.values(AMC_ARTISTS_DB); // Convertir l'objet en tableau
}

/**
 * getArtistData(artistId)
 * Récupère TOUTES les données d'un artiste (pas juste ses chansons)
 * @param {string} artistId - ID de l'artiste
 * @returns {Object} - Objet complet de l'artiste, ou null si non trouvé
 * 
 * Exemple:
 *   const artist = getArtistData('mr-baron');
 *   console.log(artist.name); // "Mr. Baron"
 *   console.log(artist.stats); // {albums: 1, tracks: 5, followers: '10K'}
 */
function getArtistData(artistId) {
    return AMC_ARTISTS_DB[artistId] || null; // Retourner l'artiste ou null
}
