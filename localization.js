const translations = {
    hu: {
        date: '2025. szeptember 6.',
        rsvpTitle: 'Kérjük, jelezz vissza!',
        rsvpText: 'Kérjük, válaszolj <span style="font-weight: bolder;">június 1-ig,</span> hogy véglegesíthessük az esküvő részleteit!',
        rsvpNames: 'Neved/Neveitek',
        rsvpEmail: 'Email (fő kapcsolattartó)',
        rsvpAttendance: 'Részt veszel?',
        rsvpYes: 'Igen, ott leszek!',
        rsvpNo: 'Sajnos nem tudok/tudunk jönni :(',
        rsvpGuests: 'Vendégek száma',
        rsvpDietary: 'Speciális étrend',
        rsvpSend: 'Visszajelzés küldése',

        songTitle: 'Zenék',
        songText: 'Küldjetek dalokat, amik eszünkbe juttatnak közös emlékeket, vagy amiktől táncra perdültök!',
        songRequest: 'Előadó - Dal Címe',
        songReason: 'Miért különleges számotokra ez a dal? (opcionális)',
        songSend: 'Kérés Küldése',

        venueTitle: 'Helyszín és Program',
        venueTimeHeader: 'Időpont',
        venueLocationHeader: 'Helyszín',
        venueTime: 'Csatlakozz hozzánk <span style="font-weight: bolder;">délután 4 órától</span>. Részletek hamarosan!',
        venueGettingThere: 'Megközelítés',
        venueTaxi: 'Taxi (ajánlott)',
        venuePublicTransport: 'Tömegközlekedés',
        venuePublicTransportDetails: 'A <strong>795-ös buszt</strong> veheted a <strong>Széll Kálmán térről</strong> a <strong>Budakeszi, Szőlőtelep</strong> megállóig. A busz <strong>30 percenként</strong> jár, de az utolsó busz <strong>este 11-kor</strong> indul, ezután taxit kell majd hívnod.',

        giftsTitle: 'Nászajándékok',
        giftsText: 'Jelenléted a legnagyobb ajándék számunkra ❤️ ! Ha azonban szeretnél hozzájárulni ahhoz, hogy felejthetetlen legyen a nászutunk, az alábbi pénznemekben tudsz támogatni minket:',

        galleryTitle: 'Galéria',
        contactTitle: 'Kapcsolat',
        contactText: 'Ha bármilyen kérdésed van, nyugodtan keress meg minket ezen az email-címen, vagy a kedvenc platformodon, ahol általában beszélgetni szoktunk!',

        countdownDays: 'nap',
        countdownHours: 'óra',
        countdownMinutes: 'perc',
        countdownSeconds: 'másodperc'
    },
    en: {
        date: '6 September 2025',
        rsvpTitle: 'RSVP',
        rsvpText: 'Please reply by the <span style="font-weight: bolder;">1st of June</span> so we can finalize our arrangements and plan ahead to make the day enjoyable and fun for everyone!',
        rsvpNames: 'Your Names',
        rsvpEmail: 'Email (main contact)',
        rsvpAttendance: 'Will you attend?',
        rsvpYes: 'Yes, I\'ll be there!',
        rsvpNo: 'Sorry, I can\'t make it :(',
        rsvpGuests: 'Number of guests',
        rsvpDietary: 'Any dietary restrictions?',
        rsvpSend: 'Send RSVP',

        songTitle: 'Request some Songs',
        songText: 'Send us all the songs that remind you of some shared memories with us :) Or, just send some songs that make you hit the dance floor!',
        songRequest: 'Artist - Song Title',
        songReason: 'Why is this song special? (optional)',
        songSend: 'Send Request',

        venueTitle: 'Venue and Program',
        venueTimeHeader: 'Time',
        venueLocationHeader: 'Location',
        venueTime: 'Join us from <span style="font-weight: bolder;">4PM</span> onwards. More details coming soon!',
        venueGettingThere: 'Getting There',
        venueTaxi: 'Taxi (recommended)',
        venuePublicTransport: 'Public Transport',
        venuePublicTransportDetails: 'You can take <strong>bus number 795</strong> from <strong>Széll Kálmán tér</strong> to <strong>Budakeszi, Szőlőtelep</strong>. The bus runs every <strong>30 minutes</strong>, but the last bus departs at <strong>11 PM</strong>, so you\'ll need a taxi for your return journey after that.',

        giftsTitle: 'Wedding Gifts',
        giftsText: 'Your presence at our wedding is the greatest gift of all ❤️ ! However, if you wish to help us create unforgettable honeymoon memories, we welcome contributions in any of the following currencies:',

        galleryTitle: 'Our Gallery',
        contactTitle: 'Contact Us',
        contactText: 'If you have any questions, feel free to reach out to us using this email address, or your preffered platform where we usually communicate!',

        countdownDays: 'days',
        countdownHours: 'hours',
        countdownMinutes: 'minutes',
        countdownSeconds: 'seconds'
    }
};

let currentLanguage = 'hu';

function setLanguage(lang) {
    currentLanguage = lang;
    updatePageContent();
    updateFormPlaceholders();
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
}

function updatePageContent() {
    const t = translations[currentLanguage];

    // Update date
    document.querySelector('.date').textContent = t.date;
    
    // Update section titles
    document.querySelector('#rsvp .section-header h2').textContent = t.rsvpTitle;
    document.querySelector('#song .section-header h2').textContent = t.songTitle;
    document.querySelector('#venue .section-header h2').textContent = t.venueTitle;
    document.querySelector('#gifts .section-header h2').textContent = t.giftsTitle;
    document.querySelector('#gallery .section-header h2').textContent = t.galleryTitle;
    document.querySelector('#contact .section-header h2').textContent = t.contactTitle;
    document.querySelector('#contact-text').textContent = t.contactText;


    // Update RSVP section
    document.querySelector('#rsvp .song-text').innerHTML = t.rsvpText;
    
    // Update Song Request section
    document.querySelector('#song .song-text').innerHTML = t.songText;

    // Update Venue section
    document.querySelector('.venue-info').innerHTML = `<h3>Time</h3>${t.venueTime}`;
    document.querySelector('.venue-info h3').innerHTML = `${t.venueTimeHeader}`;
    document.querySelector('.venue-address h3').innerHTML = `${t.venueLocationHeader}`;

    document.querySelector('.getting-there').innerHTML = `
        <h3>${t.venueGettingThere}</h3>
        <p>${t.venueTaxi}</p>
        <p><strong>${t.venuePublicTransport}</strong><br>
        ${t.venuePublicTransportDetails}</p>
    `;

    // Update Gifts section
    document.querySelector('.gifts-info').innerHTML = t.giftsText;
}

function updateFormPlaceholders() {
    const t = translations[currentLanguage];
    
    // RSVP Form
    document.querySelector('#rsvp-form input[name="names"]').placeholder = t.rsvpNames;
    document.querySelector('#rsvp-form input[name="email"]').placeholder = t.rsvpEmail;
    document.querySelector('#rsvp-form select[name="attendance"]').innerHTML = `
        <option value="" disabled selected>${t.rsvpAttendance}</option>
        <option value="yes">${t.rsvpYes}</option>
        <option value="no">${t.rsvpNo}</option>
    `;
    document.querySelector('#rsvp-form input[name="guests"]').placeholder = t.rsvpGuests;
    document.querySelector('#rsvp-form textarea[name="dietary"]').placeholder = t.rsvpDietary;

    // Accommodation select - only show in English
    const accommodationSelect = document.querySelector('#rsvp-form select[name="accommodation"]');
    if (accommodationSelect) {
        if (currentLanguage === 'en') {
            accommodationSelect.style.display = 'block';
            accommodationSelect.innerHTML = `
                <option value="" disabled selected>Need help finding accommodation?</option>
                <option value="yes">Yes, please help me!</option>
                <option value="no">I've got my accommodation sorted</option>
            `;
        } else {
            accommodationSelect.style.display = 'none';
        }
    }

    document.querySelector('#rsvp-form button').textContent = t.rsvpSend;

    // Song Request Form
    document.querySelector('#song-form input[name="song"]').placeholder = t.songRequest;
    document.querySelector('#song-form textarea[name="reason"]').placeholder = t.songReason;
    document.querySelector('#song-form button').textContent = t.songSend;
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('hu');  // Default to Hungarian
});