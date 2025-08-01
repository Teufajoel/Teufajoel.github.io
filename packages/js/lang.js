document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        en: {
            'Home': 'Home',
            'About': 'About',
            'Skills': 'Skills',
            'Services': 'Services',
            'Portfolio': 'Portfolio',
            'Contact': 'Contact',
            'About Me': 'About Me',
            'My Introduction': 'My Introduction',
            'My technical level': 'My technical level',
            'Qualification': 'Qualification',
            'My personal journey': 'My personal journey',
            'What I offer': 'What I offer',
            'Most recent works': 'Most recent works',
            'Testimonials': 'Testimonials',
            'My client saying': 'My client saying',
            'Contact me': 'Contact me',
            'Get in touch': 'Get in touch',
            'Call me': 'Call me',
            'E-mail': 'E-mail',
            'Location': 'Location',
            'Name': 'Name',
            'Subject': 'Subject',
            'Description': 'Description',
            'Send message': 'Send message',
            'Scroll Down': 'Scroll Down',
            'Contact Me': 'Contact Me',
            'Download CV': 'Download CV',
            'View more': 'View more',
            'Demo': 'Demo',
            'You have a new project?': 'You have a new project?',
            'Contact me now and get discounts on your Web development projects.': 'Contact me now and get discounts on your Web development projects.'
        },
        fr: {
            'Home': 'Accueil',
            'About': 'À propos',
            'Skills': 'Compétences',
            'Services': 'Services',
            'Portfolio': 'Portfolio',
            'Contact': 'Contact',
            'About Me': 'À propos de moi',
            'My Introduction': 'Mon introduction',
            'My technical level': 'Mon niveau technique',
            'Qualification': 'Diplômes',
            'My personal journey': 'Mon parcours personnel',
            'What I offer': 'Ce que je propose',
            'Most recent works': 'Travaux récents',
            'Testimonials': 'Témoignages',
            'My client saying': 'Avis de mes clients',
            'Contact me': 'Contactez-moi',
            'Get in touch': 'Entrer en contact',
            'Call me': 'Appelez-moi',
            'E-mail': 'E-mail',
            'Location': 'Localisation',
            'Name': 'Nom',
            'Subject': 'Sujet',
            'Description': 'Description',
            'Send message': 'Envoyer',
            'Scroll Down': 'Faire défiler',
            'Contact Me': 'Contactez-moi',
            'Download CV': 'Télécharger le CV',
            'View more': 'Voir plus',
            'Demo': 'Démo',
            'You have a new project?': 'Vous avez un nouveau projet ?',
            'Contact me now and get discounts on your Web development projects.': 'Contactez-moi maintenant et obtenez des réductions sur vos projets web.'
        }
    };

    function switchLanguage(lang) {
        document.querySelectorAll('[data-lang-en]').forEach(function (el) {
            const enText = el.getAttribute('data-lang-en');
            if (translations[lang][enText]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][enText];
                } else {
                    el.textContent = translations[lang][enText];
                }
            }
        });
    }

    // Listen to language switcher
    const select = document.getElementById('lang-switcher');
    if (select) {
        select.addEventListener('change', function () {
            switchLanguage(this.value);
        });
    }

    // Set default language
    switchLanguage('en');
});
