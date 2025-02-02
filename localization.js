const translations = {
    hu: {
        date: '2025. szeptember 6.',
        rsvpTitle: 'Kérjük, jelezz vissza!',
        rsvpText: 'Kérjük, válaszolj <span style="font-weight: bolder;">június 1-ig,</span> hogy véglegesíthessük az esküvő részleteit!',
        rsvpNames: 'Neved/Neveitek',
        rsvpEmail: 'Email (fő kapcsolattartó)',
        rsvpAttendance: 'Részt veszel?',
        rsvpYes: 'Igen, ott leszek/leszünk!',
        rsvpNo: 'Sajnos nem tudok/tudunk jönni :(',
        rsvpGuests: 'Vendégek száma',
        rsvpDietary: 'Speciális étrend',
        rsvpSend: 'Visszajelzés küldése',

        songTitle: 'Zenék',
        songText: 'Küldjetek dalokat, amik eszünkbe juttatnak közös emlékeket, vagy amiktől táncra perdültök!',
        songRequest: 'Előadó - Dal Címe',
        songReason: 'Miért különleges számotokra ez a dal? (opcionális)',
        songSend: 'Kérés Küldése',

        successPopup: 'A kérésed sikeresen el lett küldve!',
        closePopup: 'Bezárás',

        venueTitle: 'Helyszín és Program',
        venueTimeHeader: 'Időpont',
        venueLocationHeader: 'Helyszín',
        venueTime: 'Érkezés <span style="font-weight: bolder;">16:00-tól</span>, a ceremónia <strong>17:00-kor kezdődik. <strong> Részletek hamarosan!',
        venueGettingThere: 'Megközelítés',
        venueByCar: 'Autóval',
        venueParkingDetails: 'A helyszínen bőséges parkolási lehetőség áll rendelkezésre. Ha alkoholt fogyasztasz, javasoljuk, hogy használd a következő alkalmazást sofőr hívásához, aki biztonságosan hazavisz téged az autóddal együtt: <a href="https://soforhivo.hu/">https://soforhivo.hu/</a>',
        venueByTaxi: 'Taxi (ajánlott)',
        venueByTaxiDetails: '',
        venueByPublicTransport: 'Tömegközlekedés',
        venueByPublicTransportDetails: '<p>Nappal a <strong>795-ös busz</strong> közlekedik <strong>Széll Kálmán térről</strong> <strong>Budakeszi, Szőlőtelep</strong> felé. A busz <strong>30 percenként</strong> jár, azonban az utolsó járat <strong>23:00-kor</strong> indul.</p><p>Éjszaka ugyan nincs közvetlen buszjárat, de a helyszín ingyenes transzferszolgáltatást biztosít az éjszakai busz megállójához, ahonnan a <strong>922-es busz</strong> <strong>30 percenként</strong> indul a Széll Kálmán térre.</p>',

        giftsTitle: 'Nászajándékok',
        giftsText: 'A jelenlétetek a legnagyobb ajándék számunkra! Ha azonban szeretnétek hozzájárulni a nászutas élményeinkhez, egy borítékban megtehetitek.',

        galleryTitle: 'Galéria',
        contactTitle: 'Kapcsolat',
        contactText: 'Ha bármilyen kérdésed van, nyugodtan keress meg minket ezen az email-címen, vagy a kedvenc platformodon, ahol beszélgetni szoktunk!',

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
        rsvpYes: 'Yes, We / I\'ll be there!',
        rsvpNo: 'Sorry, We / I can\'t make it :(',
        rsvpGuests: 'Number of guests',
        rsvpDietary: 'Any dietary restrictions?',
        rsvpSend: 'Send RSVP',

        songTitle: 'Request some Songs',
        songText: 'Send us all the songs that remind you of some shared memories with us :) Or, just send some songs that make you hit the dance floor!',
        songRequest: 'Artist - Song Title',
        songReason: 'Why is this song special? (optional)',
        songSend: 'Send Request',

        successPopup: 'Your request has been submitted successfully!',
        closePopup: 'Close',

        venueTitle: 'Venue and Program',
        venueTimeHeader: 'Time',
        venueLocationHeader: 'Location',
        venueTime: 'Arrival from <span style="font-weight: bolder;">4:00 PM</span>, the ceremony starts at <strong>5:00 PM</strong>. Details coming soon!',
        venueGettingThere: 'Getting There',
        venueByCar: 'By Car',
        venueParkingDetails: 'The venue offers plenty of parking spaces. If you plan to drink alcohol, we recommend using this app to call a driver who can take you and your car home: <a href="https://soforhivo.hu/">https://soforhivo.hu/</a>',
        venueByTaxi: 'Taxi',
        venueByTaxiDetails: 'Recommended: Uber / Bolt',
        venueByPublicTransport: 'Public Transport',
        venueByPublicTransportDetails: '<p>During the day, you can take <strong>bus number 795</strong> from <strong>Széll Kálmán tér</strong> to <strong>Budakeszi, Szőlőtelep</strong>. The bus runs every <strong>30 minutes</strong>, but the last bus departs at <strong>11 PM.</strong></p><p>While there is no direct bus at night, the venue provides a free shuttle service to the night bus stop, where nightbus <strong>922</strong> depart for Széll Kálmán tér  <strong>every 30 minutes</strong>.</p>',

        giftsTitle: 'Wedding Gifts',
        giftsText: 'Your presence at our wedding is the greatest gift of all! However, if you would like to help us create unforgettable honeymoon memories, you are welcome to contribute in an envelope.',

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
    document.querySelector('.success-message-rsvp').innerHTML = t.successPopup;
    document.querySelector('#success-popup-rsvp button').innerHTML = t.closePopup;

    
    // Update Song Request section
    document.querySelector('#song .song-text').innerHTML = t.songText;

    // Update success popup
    document.querySelector('.success-message-song').innerHTML = t.successPopup;
    document.querySelector('#success-popup-song button').innerHTML = t.closePopup;

    // Update Venue section
    document.querySelector('.venue-info').innerHTML = `<h3>Time</h3>${t.venueTime}`;
    document.querySelector('.venue-info h3').innerHTML = `${t.venueTimeHeader}`;
    document.querySelector('.venue-address h3').innerHTML = `${t.venueLocationHeader}`;

    document.querySelector('.getting-there').innerHTML = `
    <h3>${t.venueGettingThere}</h3>
    <p><strong>${t.venueByCar}</strong><br>
    ${t.venueParkingDetails} 
    <p><strong>${t.venueByTaxi}</strong><br>
    ${t.venueByTaxiDetails}</p>
    <p><strong>${t.venueByPublicTransport}</strong><br>
    ${t.venueByPublicTransportDetails}</p>

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
