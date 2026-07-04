export type Lang = 'en' | 'hi'

export const content = {
  en: {
    welcome: 'Hare Krishna',
    selectLang: 'Please select your preferred language',
    langEn: 'English',
    langHi: 'हिन्दी',

    menuTitle: 'How may we serve you?',
    menuSubtitle: 'Sri Sri Radha ShyamSundar Mandir, Dhanaupur',

    menu: [
      { id: 'darshan',     label: 'Auspicious Darshan',   sub: 'View deity darshan timings' },
      { id: 'events',      label: 'Upcoming Festivals',   sub: 'Festivals & celebrations' },
      { id: 'ekadashi',    label: 'Upcoming Ekadashi',    sub: '2026 dates & fasting guide' },
      { id: 'programs',    label: 'Weekly Programs',      sub: 'Daily schedule & seva' },
      { id: 'course',      label: 'Courses',              sub: 'Spiritual learning programs' },
      { id: 'iyf',         label: 'ISKCON Youth Forum',   sub: 'Community for young devotees' },
      { id: 'donation',    label: 'Donation',             sub: 'Support the temple seva' },
      { id: 'yatra',       label: 'Dham Yatras',          sub: 'Holy pilgrimages' },
      { id: 'about',       label: 'About Us',             sub: 'About ISKCON Dhanaupur' },
      { id: 'iskcon',      label: 'About ISKCON',         sub: 'About the organisation' },
      { id: 'social',      label: 'Social Media',         sub: 'Follow us online' },
      { id: 'connect',     label: 'Contact',              sub: 'Reach out to the temple' },
    ],

    darshan: {
      title: 'Auspicious Darshan',
      subtitle: 'Sri Sri Radha ShyamSundar',
      schedule: [
        { time: '4:30 AM',  name: 'Mangal Arati',        desc: 'The first darshan of the day — devotees gather in the pre-dawn hours to greet the Lord.' },
        { time: '7:15 AM',  name: 'Tulasi Puja & Arati',  desc: 'Offering of prayers and arati to the sacred Tulasi Devi.' },
        { time: '7:30 AM',  name: 'Darshan Arati',        desc: 'Morning darshan — the deity is beautifully dressed and adorned for the day.' },
        { time: '12:30 PM', name: 'Raj Bhog Arati',       desc: 'The midday offering — a grand feast is offered to the Lord.' },
        { time: '1:00 PM',  name: 'Deity Rest (Vishram)',  desc: 'The temple closes for the Lord\'s midday rest.' },
        { time: '4:30 PM',  name: 'Utthapan Arati',       desc: 'The Lord awakens from rest — devotees welcome Him with kirtan.' },
        { time: '6:45 PM',  name: 'Sandhya Arati',        desc: 'Evening arati — one of the most attended and joyful ceremonies.' },
        { time: '8:30 PM',  name: 'Shayana Arati',        desc: 'The final arati of the day — the Lord retires for the night.' },
      ],
    },

    course: {
      title: 'Courses',
      subtitle: 'Spiritual Learning & Development',
      sections: [
        {
          id: 1,
          name: 'ISKCON Disciple Course',
          description:
            'A comprehensive course designed for devotees to deepen their understanding of Krishna consciousness and the teachings of Srila Prabhupada.',
        },
        {
          id: 2,
          name: 'Bhakti Sastri Course',
          description:
            'An in-depth study of the principles of bhakti-yoga, covering the philosophy, practices, and scriptures of the Vaishnava tradition.',
        },
        {
          id: 3,
          name: 'Gita Diploma Course',
          description:
            'A structured program focused on the Bhagavad-gita, exploring its teachings, commentaries, and practical applications in daily life.',
        },
        {
          id: 4,
          name: 'Meditation & Mindfulness',
          description:
            'Learn meditation techniques for inner peace and spiritual development.',
        },
      ],
      comingSoon: 'More courses coming soon',
    },

    iyf: {
      title: 'ISKCON Youth Forum',
      subtitle: 'Community for Young Devotees',
      description:
        'A dedicated platform for young members of ISKCON to connect, learn, and grow together in Krishna consciousness.',
      features: [
        {
          id: 1,
          name: 'Scrutinized study of Srila Prabhupada\'s Books',
          description: 'Engage in group readings and discussions of Srila Prabhupada\'s books to deepen your understanding of Krishna consciousness.',
        },
        {
          id: 2,
          name: 'Knowledge Sharing',
          description: 'Share spiritual insights and learn from each other\'s experiences.',
        },
        {
          id: 3,
          name: 'Youth Events',
          description: 'Participate in exclusive events, kirtans, and spiritual activities.',
        },
        {
          id: 4,
          name: 'Mentorship',
          description: 'Get guidance from experienced devotees in your spiritual journey.',
        },
        {
          id: 5,
          name: 'Service Opportunities',
          description:
            'Engage in meaningful seva and contribute to ISKCON community projects.',
        },
        {
          id: 6,
          name: 'Networking',
          description:
            'Build lasting friendships and connections with youth from different parts of India.',
        },
      ],
      mission: 'Inspiring Youth, Building Consciousness',

    },

    about: {
      title: 'About Us',
      subtitle: 'ISKCON Dhanaupur',
      sections: [
        {
          heading: 'Concept and Establishment',
          paragraphs: [
            'Sri Shyam Das, who has dedicated his life to the Hare Krishna Movement since 2008, is the co-founder of Sri Sri Radha Shyamsundar Temple. In 2007–08, Sri Shyamcharan Prabhuji (his instructing spiritual master) was working at IIT Bombay, where they first met. Inspired by his beloved instructing spiritual master, he decided to serve the rural preaching mission.',
            'With the permission of his spiritual master, Sri Shyam Prabhuji returned to his village, Dhanaupur, and donated a major portion of his family\'s agricultural resources to begin the construction of this temple. The foundation laying and inauguration of the temple were personally conducted by Sriman Gauranga Prabhuji (Director, Govardhan Eco Village).',
          ],
        },
        {
          heading: 'Goals and Activities',
          list: [
            'Programs for transformation in society.',
            'Weekly Nagar Sankirtan in villages.',
            'Scheduled lectures two days a week in nearby towns and villages.',
            'Sunday Festival: lecture, kirtan, and prasadam for everyone.',
            'Attractive sessions for the youth of towns and villages.',
            'Distribution of the Bhagavat Darshan magazine for devotional awareness.',
          ],
        },
      ],
      address: 'Dhanaupur, Dostpur, Kadipur, Sultanpur, Uttar Pradesh — 228131',
      phone: '+91 8127443777',
      email: 'iskcondhanaupur@gmail.com',
    },

    iskcon: {
      title: 'About ISKCON',
      subtitle: 'International Society for Krishna Consciousness',
      body: 'The International Society for Krishna Consciousness (ISKCON), widely known as the Hare Krishna Movement, is the worldwide spiritual mission established to fulfill the prophecy and desire of Sri Chaitanya Mahaprabhu—that the holy names of Krishna would be chanted in every town and village of the world. Founded in 1966 in New York City by His Divine Grace A. C. Bhaktivedanta Swami Srila Prabhupada, ISKCON is dedicated to sharing the timeless teachings of Bhagavad-gita and Srimad-Bhagavatam and helping people revive their eternal relationship with Lord Sri Krishna. At the age of sixty-nine, Srila Prabhupada journeyed alone from India to America with little more than faith in Krishna and the instructions of his spiritual master. Through his unwavering devotion, profound spiritual wisdom, and tireless efforts, he introduced Krishna consciousness to people across the globe. His books, lectures, and personal example continue to inspire millions of people on the path of bhakti-yoga and devotional service.Today, ISKCON has grown into a global spiritual family with more than 700 temples, centers, farm communities, and educational projects worldwide. Millions of devotees, congregational members, and well-wishers participate in its activities, including chanting the Hare Krishna maha-mantra, studying Vedic scriptures, honoring prasadam, and engaging in devotional service.More than an organization, ISKCON is a spiritual movement dedicated to awakening love for God in the hearts of all living beings. Guided by the teachings of Sri Chaitanya Mahaprabhu and the mercy of Srila Prabhupada, ISKCON continues to inspire people from all backgrounds to live a life of devotion, compassion, wisdom, and service to Krishna.',
      founder: 'Founder: His Divine Grace A.C. Bhaktivedanta Swami Prabhupada',
      website: 'www.iskcondesiretree.com',
    },

    donation: {
      title: 'Donation',
      subtitle: 'Seva is the highest form of worship',
      desc: 'Your generous contribution supports daily deity seva, temple maintenance, prasadam distribution, and educational programs for the community.',
      categories: [
        { id: 'General Donation', label: 'General Seva' },
        { id: 'Rathyatra',   label: 'Shri Jagannath Rathyatra' },
        { id: 'Temple Maintenance',   label: 'Temple Maintenance' },
        { id: 'Sringar Seva',   label: 'Sringar Seva' },
        { id: 'Flower Seva',   label: 'Flower Seva' },
        { id: 'RajBhog Prasad',    label: 'Raj Bhog Prasad Seva' },
        { id: 'Annadan', label: 'Annadan Seva' },
        { id: 'Janamasthami Abhishek',     label: 'Janamasthami Abhishek' },
        { id: 'Gau Seva',   label: 'Gau Seva' },
        { id: 'Shrimad Bhagavad-gita daan Seva',   label: 'Shrimad Bhagavad-gita daan Seva' },
      ],
      amounts: [108, 251, 501, 1001, 2100, 5100, 5500, 11000, 21000, 51000],
      custom: 'Enter custom amount',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      proceed: 'Proceed to Pay',
    },

    events: {
      title: 'Upcoming Festivals',
      subtitle: 'Festivals & Celebrations 2026',
      list: [
        { date: '21', month: 'JUL', name: 'Rathyatra',                   slug: 'rathyatra',                     active: true,  desc: 'The annual chariot procession celebrating Lord Krishna\'s divine pastimes.' },
        { date: '04', month: 'SEP', name: 'Janmashtami',                 slug: 'janmashtami',                   active: false, desc: 'The most celebrated festival — Lord Krishna\'s appearance day. Midnight ceremony, drama, and grand abhishek.' },
        { date: '05', month: 'SEP', name: 'Srila Prabhupada Appearance', slug: 'srila-prabhupada-appearance',   active: false, desc: 'Celebration of the Founder-Acharya\'s appearance day. Guru Puja & special feast.' },
        { date: '19', month: 'SEP', name: 'Radhastami',                  slug: 'radhastami',                    active: false, desc: 'Appearance day of Srimati Radharani. Special kirtan, abhishek, and feast.' },
        { date: '02', month: 'NOV', name: 'Radha Kund Appearance',       slug: 'radha-kund-appearance',         active: false, desc: 'Special programme at the sacred kund. Bathing festival and extended kirtan.' },
        { date: '09', month: 'NOV', name: 'Diwali',                      slug: 'diwali',                        active: false, desc: 'Festival of lights — celebration of good over evil.' },
        { date: '04', month: 'DEC', name: 'Vaikuntha Ekadashi',          slug: 'vaikuntha-ekadashi',            active: false, desc: 'Fasting and special programmes on this most auspicious Ekadashi of the year.' },
      ],
      viewMore: 'View More',
    },

    rathyatra: {
      label: 'Festival',
      title: 'Shri Jagannath Rathyatra',
      subtitle: 'ISKCON Dhanaupur',
      intro: 'The ISKCON Rath Yatra is a vibrant, global chariot festival celebrating Lord Jagannath (Krishna), his brother Baladeva, and sister Subhadra. Introduced globally by ISKCON\'s founder, A.C. Bhaktivedanta Swami Prabhupada, millions of devotees pull massive, decorated chariots through city streets accompanied by ecstatic sankirtana (chanting) and dancing.',
      local: 'Following the same, each year ISKCON Dhanaupur also organizes Shri Jagannath Rathyatra at district levels both in Ambedkarnagar and Sultanpur.',
      tabsLabel: 'Select District',
      locations: [
        {
          id: 'ambedkarnagar',
          label: 'Ambedkarnagar',
          date: '21 July 2026',
          routeStops: [
            'Start — 2:00 PM — City Palace',
            'Jetli Vidyalaya',
            'Shri Ram Janki Mandir',
            'Fawwara Tiraha',
            'Mahaprasad & Conclusion — 8:00 PM — City Palace',
          ],
          venue: 'ISKCON – Hare Krishna Kendra, beside Priyavar Dulhaghar, Shri Ram Mandir, Barat Ghar, Shahjadpur, Akbarpur',
          slipImage: '/rathyatra-ambedkarnagar-slip.jpeg', // TODO: Shraddha — add this image to /public
        },
        {
          id: 'sultanpur',
          label: 'Sultanpur',
          date: '22 July 2026',
          routeStops: [
            'Start — 2:00 PM — Ramkali Chauraha',
            'Agra Mission Bhandar',
            'Ghantaghar',
            'Shahganj Chauraha',
            'Post Office Chauraha',
            'Mahaprasad & Conclusion — 9:00 PM — Ramkali Chauraha',
          ],
          venue: 'ISKCON Sultanpur – Hare Krishna Kendra, Dulhan Marriage Lawn, Gabhariya Road, Sultanpur',
          slipImage: '/rathyatra-sultanpur-slip.jpg', // TODO: Shraddha — add this image to /public
        },
      ],
      dateLabel: 'Date',
      routeLabel: 'Route',
      slipLabel: 'Collection report',
      venueLabel: 'Venue',
      donateCta: 'Contribute via WhatsApp',
    },

    programs: {
      title: 'Weekly Programs',
      subtitle: 'Daily Schedule',
      weekday: 'Weekdays',
      weekend: 'Weekends & Festivals',
      schedule: [
        { time: '4:30 AM',  prog: 'Mangala Arati',       detail: 'Prayers, kirtan & Tulasi puja' },
        { time: '7:30 AM',  prog: 'Darshan Arati',       detail: 'Morning greeting of the Lord' },
        { time: '8:00 AM',  prog: 'Srimad Bhagavatam',   detail: 'Daily class & discussion' },
        { time: '12:30 PM', prog: 'Raj Bhog Arati',      detail: 'Midday offering' },
        { time: '4:30 PM',  prog: 'Utthapan Arati',      detail: 'Afternoon darshan' },
        { time: '5:00 PM',  prog: 'Bhagavad Gita Class', detail: 'Study & lecture' },
        { time: '6:45 PM',  prog: 'Sandhya Arati',       detail: 'Evening kirtan & arati' },
        { time: '8:30 PM',  prog: 'Shayana Arati',       detail: 'Final darshan of the day' },
      ],
      special: [
        { name: 'Sunday Love Feast',       desc: 'Every Sunday — kirtan, Bhagavatam discourse, and sumptuous prasadam for all visitors. Open to everyone.' },
        { name: 'Kids Sankirtan Party',    desc: 'Vedic education for children every Sunday morning. Stories, values, and fun activities.' },
        { name: 'Sangini Saloni Program',  desc: 'A special program for women, focusing on devotional service and community bonding.' },
      ],
    },

    yatra: {
      title: 'Dham Yatras',
      subtitle: 'Holy Pilgrimages',
      desc: 'Join us on sacred pilgrimages to the holy dhams. These yatras are organised by the temple and are open to all devotees.',
      list: [
        { name: 'Vrindavan Yatra',    desc: 'Visit the sacred land of Lord Krishna\'s pastimes. Parikrama of Vrindavan, Govardhan, and Barsana.' },
        { name: 'Mayapur Yatra',      desc: 'Pilgrimage to the birthplace of Sri Chaitanya Mahaprabhu and ISKCON world headquarters.' },
        { name: 'Jagannath Puri Yatra', desc: 'Visit the famous Jagannath Temple and witness the grand Rathyatra festival.' },
        { name: 'Dwarka Yatra',       desc: 'Journey to the ancient kingdom of Lord Krishna on the western coast of India.' },
      ],
      contact: 'To register or know more, contact: +91 8127443777',
    },

    social: {
      title: 'Social Media',
      subtitle: 'Stay connected with us',
      desc: 'Follow ISKCON Dhanaupur on social media for daily darshan photos, event updates, spiritual content, and more.',
      links: [
        { platform: 'Facebook',  handle: 'ISKCON Dhanaupur',  url: 'https://facebook.com',       icon: 'F', profileImg: '/images/fb-profile.jpg' },
        { platform: 'YouTube',   handle: 'ISKCON Dhanaupur',  url: 'https://youtube.com',        icon: 'Y', profileImg: '/images/yt-profile.jpg' },
        { platform: 'Instagram', handle: '@iskcondhanaupur',  url: 'https://instagram.com',      icon: 'I', profileImg: '/images/ig-profile.jpg' },
        { platform: 'WhatsApp',  handle: '+91 8127443777',    url: 'https://wa.me/918127443777', icon: 'W', profileImg: '/images/wa-profile.jpg' },
      ],
    },

    connect: {
      title: 'Contact',
      subtitle: 'We are here to serve you',
      form: {
        name:    'Your Name',
        email:   'Email Address',
        phone:   'Phone Number',
        message: 'Your message or inquiry',
        send:    'Send Message',
      },
      info: [
        { label: 'Address', value: 'Dhanaupur, Dostpur, Kadipur, Sultanpur, Uttar Pradesh — 228131' },
        { label: 'Phone',   value: '+91 8127443777' },
        { label: 'Email',   value: 'iskcondhanaupur@gmail.com' },
        { label: 'Hours',   value: 'Open daily 4:30 AM – 9:00 PM' },
      ],
    },

    ekadashi: {
      title: 'Ekadashi Vrat',
      subtitle: '2026 Ekadashi Calendar',
      about: 'Ekadashi is the eleventh day of the lunar fortnight. Fasting on this day is highly recommended in Vaishnava tradition for spiritual purification and advancement.',
      fasting: 'Fasting Guidelines',
      fastingRules: [
        'Abstain from grains, beans, and certain vegetables',
        'Eat only fruits, nuts, milk, and roots (Ekadashi-approved foods)',
        'Increase chanting of Hare Krishna Mahamantra',
        'Read scriptures and engage in devotional service',
        'Break fast (Paran) the following morning after sunrise',
      ],
      list: [
        { date: 'Jan 14', name: 'Shattila Ekadashi',             paran: 'Jan 15' },
        { date: 'Jan 29', name: 'Jaya Ekadashi',                 paran: 'Jan 30' },
        { date: 'Feb 13', name: 'Vijaya Ekadashi',               paran: 'Feb 14' },
        { date: 'Feb 27', name: 'Amalaki Ekadashi',              paran: 'Feb 28' },
        { date: 'Mar 15', name: 'Papamochani Ekadashi',          paran: 'Mar 16' },
        { date: 'Mar 29', name: 'Kamada Ekadashi',               paran: 'Mar 30' },
        { date: 'Apr 13', name: 'Varuthini Ekadashi',            paran: 'Apr 14' },
        { date: 'Apr 27', name: 'Mohini Ekadashi',               paran: 'Apr 28' },
        { date: 'May 13', name: 'Apara Ekadashi',                paran: 'May 14' },
        { date: 'May 27', name: 'Padmini Ekadashi',              paran: 'May 28' },
        { date: 'Jun 11', name: 'Parama Ekadashi',               paran: 'Jun 12' },
        { date: 'Jun 25', name: 'Nirjala Ekadashi',              paran: 'Jun 26' },
        { date: 'Jul 10', name: 'Yogini Ekadashi',               paran: 'Jul 11' },
        { date: 'Jul 25', name: 'Devshayani Ekadashi',           paran: 'Jul 26' },
        { date: 'Aug 09', name: 'Kamika Ekadashi',               paran: 'Aug 10' },
        { date: 'Aug 23', name: 'Shravana Putrada Ekadashi',     paran: 'Aug 24' },
        { date: 'Sep 07', name: 'Aja Ekadashi',                  paran: 'Sep 08' },
        { date: 'Sep 22', name: 'Parsva Ekadashi',               paran: 'Sep 23' },
        { date: 'Oct 06', name: 'Indira Ekadashi',               paran: 'Oct 07' },
        { date: 'Oct 22', name: 'Papankusha Ekadashi',           paran: 'Oct 23' },
        { date: 'Nov 05', name: 'Rama Ekadashi',                 paran: 'Nov 06' },
        { date: 'Nov 20', name: 'Devutthana Ekadashi',           paran: 'Nov 21' },
        { date: 'Dec 04', name: 'Utpanna Ekadashi',              paran: 'Dec 05' },
        { date: 'Dec 20', name: 'Mokshada Ekadashi',             paran: 'Dec 21' },
      ],
    },

    back: 'Main Menu',
  },

  hi: {
    welcome: 'हरे कृष्ण',
    selectLang: 'कृपया अपनी पसंदीदा भाषा चुनें',
    langEn: 'English',
    langHi: 'हिन्दी',

    menuTitle: 'हम आपकी सेवा कैसे कर सकते हैं?',
    menuSubtitle: 'श्री श्री राधा श्यामसुंदर मंदिर, धनऊपुर',

    menu: [
      { id: 'darshan',  label: 'शुभ दर्शन',        sub: 'दर्शन के समय देखें' },
      { id: 'events',   label: 'आगामी महोत्सव',    sub: 'उत्सव और समारोह' },
      { id: 'ekadashi', label: 'आगामी एकादशी',   sub: '२०२६ तिथियाँ और व्रत विधि' },
      { id: 'programs', label: 'साप्ताहिक कार्यक्रम', sub: 'दैनिक कार्यक्रम और सेवा' },
      { id: 'course',   label: 'पाठ्यक्रम',         sub: 'आध्यात्मिक शिक्षा कार्यक्रम' },
      { id: 'iyf',      label: 'इस्कॉन यूथ फोरम', sub: 'युवा भक्तों का समुदाय' },
      { id: 'donation', label: 'दान कल्याण',        sub: 'मंदिर सेवा में सहयोग करें' },
      { id: 'yatra',    label: 'धाम यात्राएं',      sub: 'पवित्र तीर्थ यात्राएं' },
      { id: 'about',    label: 'हमारे बारे में',    sub: 'इस्कॉन धनऊपुर के बारे में' },
      { id: 'iskcon',   label: 'इस्कॉन संस्था',    sub: 'संस्था के बारे में जानें' },
      { id: 'social',   label: 'सोशल मीडिया',      sub: 'हमसे जुड़ें' },
      { id: 'connect',  label: 'संपर्क',            sub: 'मंदिर से जुड़ें' },
    ],

    darshan: {
      title: 'शुभ दर्शन',
      subtitle: 'श्री श्री राधा श्यामसुंदर',
      schedule: [
        { time: '4:30 AM',  name: 'मंगल आरती',        desc: 'दिन का पहला दर्शन — ब्रह्ममुहूर्त में भक्त भगवान का दर्शन पाते हैं।' },
        { time: '7:15 AM',  name: 'तुलसी पूजा व आरती', desc: 'पवित्र तुलसी देवी को पुष्प और आरती अर्पण।' },
        { time: '7:30 AM',  name: 'दर्शन आरती',        desc: 'प्रातःकालीन दर्शन — भगवान दिन के लिए सुंदर वस्त्राभूषणों से सज्जित होते हैं।' },
        { time: '12:30 PM', name: 'राज भोग आरती',     desc: 'मध्याह्न भोग — भगवान को विशेष महाभोग अर्पण।' },
        { time: '1:00 PM',  name: 'विश्राम',           desc: 'भगवान के विश्राम के लिए मंदिर बंद होता है।' },
        { time: '4:30 PM',  name: 'उत्थापन आरती',     desc: 'भगवान विश्राम के बाद जागते हैं — भक्त कीर्तन से स्वागत करते हैं।' },
        { time: '6:45 PM',  name: 'संध्या आरती',      desc: 'सायंकालीन आरती — सबसे अधिक उपस्थिति वाला और आनंदमय कार्यक्रम।' },
        { time: '8:30 PM',  name: 'शयन आरती',        desc: 'दिन की अंतिम आरती — भगवान रात्रि विश्राम के लिए पधारते हैं।' },
      ],
    },

    course: {
      title: 'पाठ्यक्रम',
      subtitle: 'आध्यात्मिक शिक्षा और विकास',
      sections: [
        {
          id: 1,
          name: 'इस्कॉन शिष्य पाठ्यक्रम',
          description:
            'भक्तों के लिए डिज़ाइन किया गया एक व्यापक पाठ्यक्रम जो कृष्ण चेतना और श्रील प्रभुपाद की शिक्षाओं की गहरी समझ विकसित करने में मदद करता है।',
        },
        {
          id: 2,
          name: 'भक्ति शास्त्र पाठ्यक्रम',
          description:
            'भक्ति-योग के सिद्धांतों का गहन अध्ययन, जो वैष्णव परंपरा के दर्शन, प्रथाओं और शास्त्रों को कवर करता है।',
        },
        {
          id: 3,
          name: 'गीता डिप्लोमा पाठ्यक्रम',
          description:
            'भगवद्गीता पर केंद्रित एक संरचित कार्यक्रम, जो इसकी शिक्षाओं, व्याख्याओं और दैनिक जीवन में व्यावहारिक अनुप्रयोगों की खोज करता है।',
        },
      ],
      comingSoon: 'अधिक पाठ्यक्रम जल्द आ रहे हैं',
    },

    iyf: {
      title: 'इस्कॉन यूथ फोरम',
      subtitle: 'युवा भक्तों के लिए समुदाय',
      description:
        'इस्कॉन के युवा सदस्यों के लिए एक समर्पित मंच जहां वे कृष्ण चेतना में एक साथ जुड़ सकते हैं, सीख सकते हैं और बढ़ सकते हैं।',
      features: [
        {
          id: 1,
          name: 'श्रील प्रभुपाद की पुस्तकों का गहन अध्ययन',
          description: 'श्रील प्रभुपाद की पुस्तकों के समूह पाठ और चर्चा में भाग लें और कृष्ण चेतना की समझ को गहरा करें।',
        },
        {
          id: 2,
          name: 'ज्ञान साझाकरण',
          description: 'आध्यात्मिक अंतर्दृष्टि साझा करें और एक दूसरे के अनुभवों से सीखें।',
        },
        {
          id: 3,
          name: 'यूथ इवेंट्स',
          description: 'विशेष कार्यक्रमों, कीर्तनों और आध्यात्मिक गतिविधियों में भाग लें।',
        },
        {
          id: 4,
          name: 'मार्गदर्शन',
          description: 'अपनी आध्यात्मिक यात्रा में अनुभवी भक्तों से मार्गदर्शन प्राप्त करें।',
        },
        {
          id: 5,
          name: 'सेवा के अवसर',
          description: 'सार्थक सेवा में संलग्न हों और इस्कॉन समुदाय परियोजनाओं में योगदान दें।',
        },
        {
          id: 6,
          name: 'नेटवर्किंग',
          description: 'भारत के विभिन्न हिस्सों से युवाओं के साथ दीर्घकालीन मित्रता और जुड़ाव बनाएं।',
        },
      ],
      mission: 'यूथ को प्रेरित करना, चेतना का निर्माण करना',

    },

    about: {
      title: 'हमारे बारे में',
      subtitle: 'इस्कॉन धनऊपुर',
      sections: [
        {
          heading: 'संकल्पना और स्थापना',
          paragraphs: [
            'श्री श्याम दास, जिन्होंने 2008 से अपना जीवन हरे कृष्ण आंदोलन को समर्पित किया है, श्री श्री राधा श्यामसुंदर मंदिर के सह-संस्थापक हैं। 2007–08 में, श्री श्यामचरण प्रभुजी (उनके शिक्षागुरु) आई.आई.टी. बॉम्बे में कार्यरत थे, जहाँ उनकी पहली भेंट हुई। अपने प्रिय शिक्षागुरु से प्रेरित होकर, उन्होंने ग्रामीण प्रचार मिशन की सेवा करने का निश्चय किया।',
            'अपने गुरु की अनुमति से, श्री श्याम प्रभुजी अपने गाँव धनऊपुर लौटे और इस मंदिर के निर्माण हेतु अपने परिवार की कृषि संपत्ति का एक बड़ा भाग दान कर दिया। मंदिर के शिलान्यास और उद्घाटन की विधि श्रीमान गौरांग प्रभुजी (निर्देशक, गोवर्धन इको विलेज) द्वारा स्वयं संपन्न की गई।',
          ],
        },
        {
          heading: 'लक्ष्य और गतिविधियाँ',
          list: [
            'समाज में परिवर्तन हेतु कार्यक्रम।',
            'गाँवों में साप्ताहिक नगर संकीर्तन।',
            'आस-पास के नगरों और गाँवों में सप्ताह में दो दिन निर्धारित प्रवचन।',
            'रविवार महोत्सव: प्रवचन, कीर्तन और सभी के लिए प्रसाद।',
            'नगरों और गाँवों के युवाओं के लिए आकर्षक सत्र।',
            'भक्ति जागरूकता हेतु भागवत दर्शन पत्रिका का वितरण।',
          ],
        },
      ],
      address: 'धनऊपुर, दोस्तपुर, कादीपुर, सुल्तानपुर, उत्तर प्रदेश — 228131',
      phone: '+91 8127443777',
      email: 'iskcondhanaupur@gmail.com',
    },

    iskcon: {
      title: 'इस्कॉन संस्था के बारे में',
      subtitle: 'इंटरनेशनल सोसायटी फॉर कृष्णा कॉन्शसनेस',
      body: 'इंटरनेशनल सोसाइटी फॉर कृष्णा कॉन्शसनेस (ISKCON), जिसे विश्वभर में हरे कृष्ण आंदोलन के नाम से जाना जाता है, श्री चैतन्य महाप्रभु की उस दिव्य भविष्यवाणी और करुणा का विस्तार है जिसमें उन्होंने कहा था कि भगवान श्रीकृष्ण के पवित्र नाम का कीर्तन संसार के प्रत्येक नगर और गांव में होगा। इस दिव्य मिशन को पूरा करने के लिए परम पूज्य ए. सी. भक्तिवेदांत स्वामी श्रील प्रभुपाद ने वर्ष 1966 में न्यूयॉर्क सिटी में ISKCON की स्थापना की। इसका उद्देश्य भगवद्गीता और श्रीमद्भागवत के शुद्ध संदेश को जन-जन तक पहुंचाना तथा प्रत्येक व्यक्ति को भगवान श्रीकृष्ण के साथ उसके शाश्वत संबंध का बोध कराना है। 69 वर्ष की आयु में श्रील प्रभुपाद अपने आध्यात्मिक गुरु के आदेश का पालन करते हुए अकेले भारत से अमेरिका गए। अनेक कठिनाइयों और चुनौतियों के बावजूद उन्होंने कृष्णभावनामृत के संदेश को पूरे विश्व में फैलाया। अपनी गहन भक्ति, अद्वितीय आध्यात्मिक दृष्टि और अथक प्रयासों के माध्यम से उन्होंने असंख्य लोगों के जीवन को भगवान श्रीकृष्ण की भक्ति की ओर प्रेरित किया। आज भी उनकी पुस्तकें, शिक्षाएं और आदर्श जीवन लाखों लोगों के लिए आध्यात्मिक मार्गदर्शन का स्रोत हैं। वर्तमान में ISKCON विश्वभर में 700 से अधिक मंदिरों, नामहट्ट केंद्रों, फार्म समुदायों, गुरुकुलों और प्रचार परियोजनाओं के माध्यम से कार्य कर रहा है। लाखों भक्त, शुभचिंतक और आध्यात्मिक साधक इस आंदोलन से जुड़े हुए हैं तथा हरिनाम संकीर्तन, शास्त्र अध्ययन, प्रसाद सेवा और भक्ति-योग के अभ्यास द्वारा अपने जीवन को आध्यात्मिक रूप से समृद्ध बना रहे हैं। ISKCON केवल एक संस्था नहीं, बल्कि भगवान श्रीकृष्ण के प्रति प्रेम और भक्ति को जागृत करने वाला एक वैश्विक आध्यात्मिक आंदोलन है। श्री चैतन्य महाप्रभु की कृपा और श्रील प्रभुपाद के मार्गदर्शन में यह आंदोलन आज भी संसार के लोगों को भक्ति, करुणा, सदाचार और कृष्ण-प्रेम से परिपूर्ण जीवन की ओर प्रेरित कर रहा है।',
      founder: 'संस्थापक: श्रील ए.सी. भक्तिवेदांत स्वामी प्रभुपाद',
      website: 'www.iskcondesiretree.com',
    },

    donation: {
      title: 'दान कल्याण',
      subtitle: 'सेवा ही सर्वोच्च उपासना है',
      desc: 'आपका उदार योगदान दैनिक देवी-देवता सेवा, मंदिर रखरखाव, प्रसाद वितरण और सामुदायिक शिक्षा कार्यक्रमों को संभव बनाता है।',
      categories: [
        { id: 'General Seva', label: 'सामान्य दान ' },
        { id: 'Rathyatra', label: 'श्री जगन्नाथ रथयात्रा' },
        { id: 'Temple Maintenance', label: 'मंदिर रखरखाव' },
        { id: 'Sringar Seva', label: 'श्रृंगार सेवा' },
        { id: 'Flower Seva', label: 'फूल सेवा' },
        { id: 'RajBhog Prasad', label: 'राज भोग प्रसाद सेवा' },
        { id: 'Annadan', label: 'अन्नदान सेवा' },
        { id: 'Janamasthami Abhishek', label: 'जन्माष्टमी अभिषेक' },
        { id: 'Gau Seva', label: 'गौ सेवा' },
        { id: 'Shrimad Bhagavad-gita daan Seva', label: 'श्रीमद् भगवद्गीता दान सेवा' },
      ],
      amounts: [108, 251, 501, 1001, 2100, 5100, 5500, 11000, 21000, 51000],
      custom: 'अन्य राशि दर्ज करें',
      name: 'पूरा नाम',
      email: 'ईमेल पता',
      phone: 'फोन नंबर',
      proceed: 'भुगतान करें',
      note: '₹500 से अधिक के दान पर 80G कर छूट प्रमाण पत्र मिलेगा।',
    },

    events: {
      title: 'आगामी महोत्सव',
      subtitle: 'उत्सव और समारोह २०२६',
      list: [
        { date: '21', month: 'जुल', name: 'रथयात्रा',                    slug: 'rathyatra',                   active: true,  desc: 'भगवान जगन्नाथ की वार्षिक रथ यात्रा।' },
        { date: '04', month: 'सित', name: 'जन्माष्टमी',                  slug: 'janmashtami',                 active: false, desc: 'सबसे बड़ा उत्सव — भगवान श्री कृष्ण का प्रकट उत्सव।' },
        { date: '05', month: 'सित', name: 'श्रील प्रभुपाद प्रकट उत्सव', slug: 'srila-prabhupada-appearance', active: false, desc: 'संस्थापक-आचार्य का प्रकट दिवस उत्सव। गुरु पूजा और विशेष भोज।' },
        { date: '19', month: 'सित', name: 'राधाष्टमी',                   slug: 'radhastami',                  active: false, desc: 'श्रीमती राधारानी का प्रकट उत्सव। विशेष कीर्तन, अभिषेक और भोज।' },
        { date: '02', month: 'नव',  name: 'राधा कुण्ड प्रकट उत्सव',     slug: 'radha-kund-appearance',       active: false, desc: 'पवित्र कुण्ड पर विशेष कार्यक्रम। स्नान उत्सव और विस्तारित कीर्तन।' },
        { date: '09', month: 'नव',  name: 'दीपावली',                      slug: 'diwali',                      active: false, desc: 'प्रकाश का त्योहार — अच्छाई की बुराई पर विजय।' },
        { date: '04', month: 'दिस', name: 'वैकुण्ठ एकादशी',              slug: 'vaikuntha-ekadashi',          active: false, desc: 'वर्ष की सबसे शुभ एकादशी पर व्रत और विशेष कार्यक्रम।' },
      ],
      viewMore: 'अधिक जानें',
    },

    rathyatra: {
      label: 'महोत्सव',
      title: 'श्री जगन्नाथ रथयात्रा',
      subtitle: 'इस्कॉन धनऊपुर',
      intro: 'इस्कॉन रथयात्रा भगवान जगन्नाथ (कृष्ण), उनके भाई बलदेव और बहन सुभद्रा को समर्पित एक भव्य, वैश्विक रथ महोत्सव है। इस्कॉन के संस्थापक ए.सी. भक्तिवेदांत स्वामी प्रभुपाद द्वारा विश्वभर में प्रारंभ किया गया यह उत्सव — लाखों भक्त सजे हुए विशाल रथों को नगर की सड़कों पर संकीर्तन और नृत्य के साथ खींचते हैं।',
      local: 'इसी परंपरा का अनुसरण करते हुए, इस्कॉन धनऊपुर प्रतिवर्ष अंबेडकरनगर और सुल्तानपुर — दोनों जिलों में श्री जगन्नाथ रथयात्रा का आयोजन करता है।',
      tabsLabel: 'जिला चुनें',
      locations: [
        {
          id: 'ambedkarnagar',
          label: 'अंबेडकरनगर',
          date: '21 जुलाई 2026',
          routeStops: [
            'शुभारंभ — दोपहर 2 बजे — सिटी पैलेस',
            'जेटली विद्यालय',
            'श्रीराम जानकी मंदिर',
            'फव्वारा तिराहा',
            'महाप्रसाद व समापन — सायं 8 बजे — सिटी पैलेस',
          ],
          venue: 'इस्कॉन – हरे कृष्ण केंद्र, प्रियवर दुल्हाघर के बगल, श्रीराम मंदिर, बारात घर, शहजादपुर, अकबरपुर',
          slipImage: '/rathyatra-ambedkarnagar-slip.jpeg',
        },
        {
          id: 'sultanpur',
          label: 'सुल्तानपुर',
          date: '22 जुलाई 2026',
          routeStops: [
            'शुभारंभ — दोपहर 2 बजे — रामकली चौराहा',
            'आगरा मिशन भंडार',
            'घंटाघर',
            'शाहगंज चौराहा',
            'पोस्ट ऑफिस चौराहा',
            'महाप्रसाद व समापन — रात्रि 9 बजे — रामकली चौराहा',
          ],
          venue: 'इस्कॉन सुल्तानपुर – हरे कृष्ण केंद्र, दुल्हन मैरिज लॉन, गभड़िया रोड, सुल्तानपुर',
          slipImage: '/rathyatra-sultanpur-slip.jpg',
        },
      ],
      dateLabel: 'तिथि',
      routeLabel: 'मार्ग',
      slipLabel: 'कलेक्शन रिपोर्ट',
      venueLabel: 'स्थान',
      donateCta: 'WhatsApp पर सहयोग करें',
    },

    programs: {
      title: 'साप्ताहिक कार्यक्रम',
      subtitle: 'दैनिक कार्यक्रम',
      weekday: 'सप्ताहिक दिन',
      weekend: 'सप्ताहांत और उत्सव',
      schedule: [
        { time: '4:30 AM',  prog: 'मंगल आरती',        detail: 'प्रार्थना, कीर्तन और तुलसी पूजा' },
        { time: '7:30 AM',  prog: 'दर्शन आरती',        detail: 'प्रातःकालीन भगवद दर्शन' },
        { time: '8:00 AM',  prog: 'श्रीमद् भागवतम्',   detail: 'दैनिक पाठ और चर्चा' },
        { time: '12:30 PM', prog: 'राज भोग आरती',     detail: 'मध्याह्न भोग अर्पण' },
        { time: '4:30 PM',  prog: 'उत्थापन आरती',     detail: 'अपराह्न दर्शन' },
        { time: '5:00 PM',  prog: 'भगवद गीता कक्षा',  detail: 'अध्ययन और प्रवचन' },
        { time: '6:45 PM',  prog: 'संध्या आरती',      detail: 'संध्याकालीन कीर्तन और आरती' },
        { time: '8:30 PM',  prog: 'शयन आरती',        detail: 'दिन का अंतिम दर्शन' },
      ],
      special: [
        { name: 'रविवार प्रेम भोज',       desc: 'प्रत्येक रविवार — कीर्तन, भागवतम् प्रवचन और सभी आगंतुकों के लिए प्रसाद।' },
        { name: 'किड्स संकीर्तन पार्टी', desc: 'प्रत्येक रविवार प्रातः बच्चों के लिए वैदिक शिक्षा।' },
        { name: 'संगिनी सलोनी कार्यक्रम', desc: 'महिलाओं के लिए विशेष भक्ति सेवा और सामुदायिक कार्यक्रम।' },
      ],
    },

    yatra: {
      title: 'धाम यात्राएं',
      subtitle: 'पवित्र तीर्थ यात्राएं',
      desc: 'पवित्र धामों की तीर्थ यात्राओं में हमारे साथ जुड़ें। ये यात्राएं मंदिर द्वारा आयोजित की जाती हैं और सभी भक्तों के लिए खुली हैं।',
      list: [
        { name: 'वृंदावन यात्रा',    desc: 'भगवान कृष्ण की लीलाओं की पवित्र भूमि का दर्शन। वृंदावन, गोवर्धन और बरसाना की परिक्रमा।' },
        { name: 'मायापुर यात्रा',    desc: 'श्री चैतन्य महाप्रभु की जन्मभूमि और इस्कॉन मुख्यालय की तीर्थ यात्रा।' },
        { name: 'जगन्नाथ पुरी यात्रा', desc: 'प्रसिद्ध जगन्नाथ मंदिर के दर्शन और भव्य रथयात्रा महोत्सव में भाग लेने का अवसर।' },
        { name: 'द्वारका यात्रा',    desc: 'भारत के पश्चिमी तट पर भगवान कृष्ण की प्राचीन राजधानी द्वारका की यात्रा।' },
      ],
      contact: 'पंजीकरण या अधिक जानकारी के लिए: +91 8127443777',
    },

    social: {
      title: 'सोशल मीडिया',
      subtitle: 'हमसे जुड़े रहें',
      desc: 'इस्कॉन धनऊपुर को सोशल मीडिया पर फॉलो करें — प्रतिदिन दर्शन फोटो, आयोजन अपडेट, और आध्यात्मिक सामग्री के लिए।',
      links: [
        { platform: 'Facebook',  handle: 'ISKCON Dhanaupur',  url: 'https://facebook.com',       icon: 'F', profileImg: '/images/fb-profile.jpg' },
        { platform: 'YouTube',   handle: 'ISKCON Dhanaupur',  url: 'https://youtube.com',        icon: 'Y', profileImg: '/images/yt-profile.jpg' },
        { platform: 'Instagram', handle: '@iskcondhanaupur',  url: 'https://instagram.com',      icon: 'I', profileImg: '/images/ig-profile.jpg' },
        { platform: 'WhatsApp',  handle: '+91 8127443777',    url: 'https://wa.me/918127443777', icon: 'W', profileImg: '/images/wa-profile.jpg' },
      ],
    },

    connect: {
      title: 'संपर्क',
      subtitle: 'हम आपकी सेवा के लिए उपस्थित हैं',
      form: {
        name:    'आपका नाम',
        email:   'ईमेल पता',
        phone:   'फोन नंबर',
        message: 'आपका संदेश या प्रश्न',
        send:    'संदेश भेजें',
      },
      info: [
        { label: 'पता',   value: 'धनऊपुर, दोस्तपुर, कादीपुर, सुल्तानपुर, उत्तर प्रदेश — 228131' },
        { label: 'फोन',   value: '+91 8127443777' },
        { label: 'ईमेल', value: 'iskcondhanaupur@gmail.com' },
        { label: 'समय',   value: 'प्रतिदिन प्रातः 4:30 बजे से रात्रि 9:00 बजे तक' },
      ],
    },

    ekadashi: {
      title: 'एकादशी व्रत',
      subtitle: 'एकादशी कैलेंडर २०२६',
      about: 'एकादशी चंद्र पक्ष का ग्यारहवां दिन है। वैष्णव परंपरा में आत्मशुद्धि और आध्यात्मिक उन्नति के लिए इस दिन व्रत रखना अत्यंत शुभ माना जाता है।',
      fasting: 'व्रत के नियम',
      fastingRules: [
        'अनाज, दाल और कुछ सब्जियों से परहेज करें',
        'केवल फल, मेवे, दूध और कंद-मूल ग्रहण करें',
        'हरे कृष्ण महामंत्र का जप अधिक करें',
        'शास्त्र पाठन करें और भक्ति सेवा में लगे रहें',
        'अगले दिन सूर्योदय के बाद पारण करें',
      ],
      list: [
        { date: 'Jan 14', name: 'Shattila Ekadashi',             paran: 'Jan 15' },
        { date: 'Jan 29', name: 'Jaya Ekadashi',                 paran: 'Jan 30' },
        { date: 'Feb 13', name: 'Vijaya Ekadashi',               paran: 'Feb 14' },
        { date: 'Feb 27', name: 'Amalaki Ekadashi',              paran: 'Feb 28' },
        { date: 'Mar 15', name: 'Papamochani Ekadashi',          paran: 'Mar 16' },
        { date: 'Mar 29', name: 'Kamada Ekadashi',               paran: 'Mar 30' },
        { date: 'Apr 13', name: 'Varuthini Ekadashi',            paran: 'Apr 14' },
        { date: 'Apr 27', name: 'Mohini Ekadashi',               paran: 'Apr 28' },
        { date: 'May 13', name: 'Apara Ekadashi',                paran: 'May 14' },
        { date: 'May 27', name: 'Padmini Ekadashi',              paran: 'May 28' },
        { date: 'Jun 11', name: 'Parama Ekadashi',               paran: 'Jun 12' },
        { date: 'Jun 25', name: 'Nirjala Ekadashi',              paran: 'Jun 26' },
        { date: 'Jul 10', name: 'Yogini Ekadashi',               paran: 'Jul 11' },
        { date: 'Jul 25', name: 'Devshayani Ekadashi',           paran: 'Jul 26' },
        { date: 'Aug 09', name: 'Kamika Ekadashi',               paran: 'Aug 10' },
        { date: 'Aug 23', name: 'Shravana Putrada Ekadashi',     paran: 'Aug 24' },
        { date: 'Sep 07', name: 'Aja Ekadashi',                  paran: 'Sep 08' },
        { date: 'Sep 22', name: 'Parsva Ekadashi',               paran: 'Sep 23' },
        { date: 'Oct 06', name: 'Indira Ekadashi',               paran: 'Oct 07' },
        { date: 'Oct 22', name: 'Papankusha Ekadashi',           paran: 'Oct 23' },
        { date: 'Nov 05', name: 'Rama Ekadashi',                 paran: 'Nov 06' },
        { date: 'Nov 20', name: 'Devutthana Ekadashi',           paran: 'Nov 21' },
        { date: 'Dec 04', name: 'Utpanna Ekadashi',              paran: 'Dec 05' },
        { date: 'Dec 20', name: 'Mokshada Ekadashi',             paran: 'Dec 21' },
      ],
    },

    back: 'मुख्य मेनू',
  },
}