

export type Bi = { en: string; hi: string }

export const KARTIK = {
  
  heroImage: '/kartik.jpg' as string | null,   
  yatraPoster: '/Vraja.jpeg' as string | null, 

  contact: {
    phone: '8127443777',      
    whatsapp: '918127443777',
  },

  hero: {
    
    title: { en: 'Kartik Maas', hi: 'कार्तिक मास' },
    subtitle: { en: 'Sri Damodara Month', hi: 'श्री दामोदर मास' },
    description: {
      en: 'A sacred month to deepen our devotion to Lord Krishna through service, chanting and remembrance of Sri Damodara.',
      hi: 'सेवा, जप और श्री दामोदर के स्मरण द्वारा भगवान श्रीकृष्ण के प्रति भक्ति को गहरा करने का पावन मास।',
    },
    imagePlaceholder: { en: 'Glories of Kartik Maas — image here', hi: 'कार्तिक मास की महिमा — चित्र यहाँ लगाएँ' },
  },

  nav: [
    { id: 'yatra', label: { en: 'Dham Yatra', hi: 'धाम यात्रा' } },
    { id: 'katha', label: { en: 'Katha', hi: 'कथा' } },
    { id: 'vrat', label: { en: 'Vrat Niyam', hi: 'व्रत नियम' } },
    { id: 'damodarashtakam', label: { en: 'Damodarashtakam', hi: 'दामोदराष्टकम्' } },
    { id: 'deepdan', label: { en: 'Deepdan', hi: 'दीपदान' } },
  ],

  yatra: {
    title: { en: 'Kartik Special Vrindavan Dham Yatra', hi: 'कार्तिक विशेष वृंदावन धाम यात्रा' },
    dates: { en: '1 – 5 November 2026', hi: '1 – 5 नवंबर 2026' }, 
    description: {
      en: 'Spend Kartik in the holy dham. Join ISKCON Dhanaupur for a sacred journey to Sri Vrindavan Dham.',
      hi: 'कार्तिक मास पावन धाम में बिताएँ। इस्कॉन धनऊपुर के साथ श्री वृंदावन धाम की पवित्र यात्रा में सम्मिलित हों।',
    },
    posterPlaceholder: { en: 'Yatra poster', hi: 'यात्रा पोस्टर' },
    cta: { en: 'Contact Temple to Register', hi: 'पंजीकरण हेतु मंदिर से संपर्क करें' },
    waText: 'Hare Krishna! I would like details about the Kartik Vrindavan Dham Yatra.',
  },

  katha: {
    title: { en: 'Damodara Lila & the Glory of Kartik', hi: 'दामोदर लीला एवं कार्तिक की महिमा' },
    paras: [
      {
        head: { en: 'Why Kartik is dear to the Lord', hi: 'कार्तिक भगवान को क्यों प्रिय है' },
        body: {
          en: 'Kartik is known as Damodara month, also called Urja-vrata. In the Padma Purana, Satyavrata Muni explains to Narada Muni that even a little devotional service done in this month pleases Lord Hari greatly. This is why Vaishnavas take up extra vows of chanting, hearing and worship in Kartik, especially in Sri Vrindavan Dham.',
          hi: 'कार्तिक को दामोदर मास तथा ऊर्जा-व्रत भी कहा जाता है। पद्म पुराण में सत्यव्रत मुनि नारद मुनि को बताते हैं कि इस मास में किया गया थोड़ा सा भक्ति-कार्य भी भगवान श्रीहरि को अत्यंत प्रसन्न करता है। इसीलिए वैष्णव इस मास में, विशेषकर श्री वृंदावन धाम में, जप, श्रवण और पूजन के विशेष व्रत लेते हैं।',
        },
      },
      {
        head: { en: 'Mother Yashoda binds Krishna', hi: 'माता यशोदा द्वारा कृष्ण को बाँधना' },
        body: {
          en: 'Srimad Bhagavatam (10.9) narrates that one day mother Yashoda was churning butter when baby Krishna came to nurse. She set Him aside to attend to milk boiling on the fire. Displeased, Krishna broke a pot of yogurt and began eating butter. Seeing this, Yashoda took a stick; Krishna ran in fear, but she caught Him. To restrain Him she tried to tie Him to a mortar, but every rope she brought was short by two fingers, however much she added. Seeing His mother tired, her hair-flowers fallen and her body covered in perspiration, Krishna allowed Himself to be bound. The Lord who is beyond all bondage is conquered by the love of His devotee. Because He was tied with a rope (dama) around His belly (udara), He is called Damodara.',
          hi: 'श्रीमद्भागवतम् (10.9) में वर्णन है कि एक दिन माता यशोदा दही मथ रही थीं कि बाल कृष्ण स्तनपान के लिए आ गए। यशोदा जी उन्हें छोड़कर अग्नि पर उबलते दूध को देखने चली गईं। रुष्ट होकर कृष्ण ने दही का मटका फोड़ दिया और माखन खाने लगे। यह देख यशोदा जी छड़ी लेकर आईं; कृष्ण भय से भागे, पर उन्होंने उन्हें पकड़ लिया। उन्हें ऊखल से बाँधने के लिए वे जितनी भी रस्सी जोड़तीं, वह दो अंगुल कम ही रह जाती। माता को थका हुआ, केशों से फूल गिरे हुए और पसीने से भीगा देखकर कृष्ण स्वयं बँधने को तैयार हो गए। जो भगवान सब बंधनों से परे हैं, वे अपने भक्त के प्रेम से वश में हो जाते हैं। उदर पर रस्सी (दाम) से बँधने के कारण वे दामोदर कहलाए।',
        },
      },
      {
        head: { en: 'Liberation of Nalakuvera and Manigriva', hi: 'नलकुबेर और मणिग्रीव का उद्धार' },
        body: {
          en: 'Still bound to the mortar, Krishna crawled between two arjuna trees; the mortar got stuck and the trees fell. From them appeared Nalakuvara and Manigriva, sons of Kuvera, who had been cursed by Narada Muni to become trees. Freed, they offered prayers to Krishna and asked only for devotion at His lotus feet (Srimad Bhagavatam 10.10). The Damodarashtakam echoes this prayer: not liberation, but prema-bhakti.',
          hi: 'ऊखल से बँधे हुए ही कृष्ण दो अर्जुन वृक्षों के बीच से निकले; ऊखल अटक गया और दोनों वृक्ष गिर पड़े। उनमें से कुबेर के पुत्र नलकूबर और मणिग्रीव प्रकट हुए, जिन्हें नारद मुनि के शाप से वृक्ष बनना पड़ा था। मुक्त होकर उन्होंने कृष्ण की स्तुति की और केवल उनके चरणकमलों की भक्ति माँगी (श्रीमद्भागवतम् 10.10)। दामोदराष्टकम् की प्रार्थना भी यही है: मोक्ष नहीं, प्रेम-भक्ति।',
        },
      },
    ],
    source: {
      en: 'Source: Srimad Bhagavatam, Canto 10, Chapters 9–10; Padma Purana.',
      hi: 'स्रोत: श्रीमद्भागवतम्, स्कंध 10, अध्याय 9–10; पद्म पुराण।',
    },
  },

  vrat: {
    title: { en: 'Kartik Vrat Niyam', hi: 'कार्तिक व्रत नियम' },
    intro: {
      en: 'Take up these vows according to your capacity, with the blessings of the Vaishnavas.',
      hi: 'अपनी क्षमता के अनुसार, वैष्णवों के आशीर्वाद से इन नियमों को अपनाएँ।',
    },
    items: [
      { en: 'Rise early (brahma-muhurta), bathe and attend or see Mangala Arati.', hi: 'ब्रह्म मुहूर्त में उठें, स्नान करें और मंगला आरती में सम्मिलित हों या दर्शन करें।' },
      { en: 'Chant your daily rounds of the Hare Krishna maha-mantra without fail, and if possible add extra rounds this month.', hi: 'हरे कृष्ण महामंत्र की अपनी नित्य माला बिना चूके करें, और संभव हो तो इस मास अतिरिक्त माला जोड़ें।' },
      { en: 'Sing Damodarashtakam and offer a ghee lamp to Lord Damodara every day.', hi: 'प्रतिदिन दामोदराष्टकम् का गान करें और भगवान दामोदर को घी का दीप अर्पित करें।' },
      { en: 'Read or hear Srimad Bhagavatam, Krishna book (Damodara lila) or other books of Srila Prabhupada daily.', hi: 'प्रतिदिन श्रीमद्भागवतम्, कृष्ण बुक (दामोदर लीला) या श्रील प्रभुपाद की अन्य पुस्तकें पढ़ें या सुनें।' },
      { en: 'Worship Tulasi Devi: offer water, a lamp and parikrama daily.', hi: 'तुलसी देवी की सेवा करें: प्रतिदिन जल, दीप और परिक्रमा अर्पित करें।' },
      { en: 'Observe Ekadashi as per the Vaishnava calendar.', hi: 'वैष्णव पंचांग के अनुसार एकादशी का पालन करें।' },
      { en: 'Take only sattvic Krishna-prasadam. Avoid meat, fish, eggs, onion and garlic, and follow the four regulative principles strictly.', hi: 'केवल सात्विक कृष्ण-प्रसाद ग्रहण करें। मांस, मछली, अंडा, प्याज और लहसुन से बचें और चार नियामक सिद्धांतों का कड़ाई से पालन करें।' },
      { en: 'Avoid gossip, criticism of devotees and unnecessary sense gratification.', hi: 'व्यर्थ वार्ता, भक्तों की निंदा और अनावश्यक इंद्रिय-भोग से बचें।' },
      { en: 'Serve the temple and devotees: seva, book distribution and charity are especially dear to the Lord.', hi: 'मंदिर और भक्तों की सेवा करें: सेवा, ग्रंथ वितरण और दान भगवान को विशेष प्रिय हैं।' },
    ],
    // TODO(temple): add any food restrictions the temple follows in Kartik (e.g. urad dal) only after confirmation.
    
  },

  damodarashtakam: {
    title: { en: 'Sri Damodarashtakam', hi: 'श्री दामोदराष्टकम्' },
    intro: {
      en: 'Sung daily throughout Kartik while offering a ghee lamp. From the Padma Purana, spoken by Satyavrata Muni to Narada Muni.',
      hi: 'पूरे कार्तिक मास में घी का दीप अर्पित करते हुए प्रतिदिन गाया जाता है। पद्म पुराण से, सत्यव्रत मुनि द्वारा नारद मुनि को कहा गया।',
    },
    verses: [
      {
        // FIXED: last line was "परामृष्टमत्यं ततो द्रुत्य गोप्या" — correct reading is "परामृष्टमत्यन्ततो द्रुत्य गोप्या"
        sa: 'नमामीश्वरं सच्चिदानन्दरूपं\nलसत्कुण्डलं गोकुले भ्राजमानम्।\nयशोदाभियोलूखलाद्धावमानं\nपरामृष्टमत्यन्ततो द्रुत्य गोप्या॥',
        tr: 'namāmīśvaraṁ sac-cid-ānanda-rūpaṁ\nlasat-kuṇḍalaṁ gokule bhrājamānam\nyaśodā-bhiyolūkhalād dhāvamānaṁ\nparāmṛṣṭam atyantato drutya gopyā',
        mean: {
          en: 'I bow to Lord Damodara, whose form is eternal, full of knowledge and bliss, whose earrings swing, who shines in Gokula, who ran in fear from the mortar and from mother Yashoda, but was caught by her running swiftly behind Him.',
          hi: 'मैं उन भगवान दामोदर को नमन करता हूँ, जिनका रूप सत्-चित्-आनंदमय है, जिनके कुंडल झूल रहे हैं, जो गोकुल में सुशोभित हैं, जो माता यशोदा के भय से ऊखल से कूदकर भागे, पर उनके द्वारा तेज़ दौड़कर पकड़ लिए गए।',
        },
      },
      {
        sa: 'रुदन्तं मुहुर्नेत्रयुग्मं मृजन्तं\nकराम्भोजयुग्मेन सातङ्कनेत्रम्।\nमुहुः श्वासकम्पत्रिरेखाङ्ककण्ठ-\nस्थितग्रैवदामोदरं भक्तिबद्धम्॥',
        tr: 'rudantaṁ muhur netra-yugmaṁ mṛjantam\nkarāmbhoja-yugmena sātaṅka-netram\nmuhuḥ śvāsa-kampa-trirekhāṅka-kaṇṭha-\nsthita-graiva-dāmodaraṁ bhakti-baddham',
        mean: {
          en: 'He weeps again and again, rubbing His eyes with His lotus hands; His eyes are full of fear, His neck, marked with three lines, trembles with sobs, and the rope is tied around His belly. He is bound only by devotion.',
          hi: 'वे बार-बार रोते हैं और अपने कमल जैसे हाथों से आँखें मलते हैं; उनके नेत्र भय से भरे हैं, तीन रेखाओं वाला कंठ सिसकियों से काँप रहा है और उदर पर रस्सी बँधी है। वे केवल भक्ति से बँधे हैं।',
        },
      },
      {
        sa: 'इतीदृक्स्वलीलाभिरानन्दकुण्डे\nस्वघोषं निमज्जन्तमाख्यापयन्तम्।\nतदीयेशितज्ञेषु भक्तैर्जितत्वं\nपुनः प्रेमतस्तं शतावृत्ति वन्दे॥',
        tr: 'itīdṛk sva-līlābhir ānanda-kuṇḍe\nsva-ghoṣaṁ nimajjantam ākhyāpayantam\ntadīyeśita-jñeṣu bhaktair jitatvaṁ\npunaḥ prematas taṁ śatāvṛtti vande',
        mean: {
          en: 'By such childhood pastimes He immerses the people of Gokula in a pool of bliss, and shows to devotees who know His majesty that He is conquered only by devotion. With love I bow to Him hundreds of times.',
          hi: 'ऐसी बाल-लीलाओं से वे गोकुलवासियों को आनंद के सरोवर में डुबोते हैं, और अपने ऐश्वर्य को जानने वाले भक्तों को दिखाते हैं कि वे केवल भक्ति से जीते जाते हैं। मैं प्रेम से उन्हें सैकड़ों बार प्रणाम करता हूँ।',
        },
      },
      {
        sa: 'वरं देव मोक्षं न मोक्षावधिं वा\nन चान्यं वृणेऽहं वरेशादपीह।\nइदं ते वपुर्नाथ गोपालबालं\nसदा मे मनस्याविरास्तां किमन्यैः॥',
        tr: 'varaṁ deva mokṣaṁ na mokṣāvadhiṁ vā\nna cānyaṁ vṛṇe \'haṁ vareśād apīha\nidaṁ te vapur nātha gopāla-bālaṁ\nsadā me manasy āvirāstāṁ kim anyaiḥ',
        mean: {
          en: 'O Lord, I do not ask for liberation, nor for Vaikuntha, nor any other boon. I only pray that this child form of Gopala may always remain manifest in my heart. What is the use of anything else?',
          hi: 'हे देव! मैं न मोक्ष माँगता हूँ, न वैकुंठ, न कोई अन्य वरदान। मेरी यही प्रार्थना है कि आपका यह गोपाल-बालक रूप सदा मेरे हृदय में प्रकट रहे। अन्य वस्तुओं से मुझे क्या प्रयोजन?',
        },
      },
      {
        sa: 'इदं ते मुखाम्भोजमत्यन्तनीलै-\nर्वृतं कुन्तलैः स्निग्धरक्तैश्च गोप्या।\nमुहुश्चुम्बितं बिम्बरक्ताधरं मे\nमनस्याविरास्तामलं लक्षलाभैः॥',
        tr: 'idaṁ te mukhāmbhojam atyanta-nīlair\nvṛtaṁ kuntalaiḥ snigdha-raktaiś ca gopyā\nmuhuś cumbitaṁ bimba-raktādharaṁ me\nmanasy āvirāstām alaṁ lakṣa-lābhaiḥ',
        mean: {
          en: 'Your lotus face, framed by dark curling locks, with lips red like the bimba fruit, kissed again and again by mother Yashoda: may it always appear in my heart. I have no need of lakhs of other gains.',
          hi: 'आपका कमल-सा मुख, घने काले घुँघराले केशों से घिरा, बिंबाफल जैसे लाल अधरों वाला, जिसे माता यशोदा बार-बार चूमती हैं, वह सदा मेरे हृदय में प्रकट रहे। लाखों अन्य लाभों से मुझे कोई प्रयोजन नहीं।',
        },
      },
      {
        sa: 'नमो देव दामोदरानन्त विष्णो\nप्रसीद प्रभो दुःखजालाब्धिमग्नम्।\nकृपादृष्टिवृष्ट्यातिदीनं बतानु-\nगृहाणेश मामज्ञमेध्यक्षिदृश्यः॥',
        tr: 'namo deva dāmodarānanta viṣṇo\nprasīda prabho duḥkha-jālābdhi-magnam\nkṛpā-dṛṣṭi-vṛṣṭyāti-dīnaṁ batānu-\ngṛhāṇeśa mām ajñam edhy akṣi-dṛśyaḥ',
        mean: {
          en: 'O Damodara, infinite Vishnu, be merciful. I am drowning in an ocean of sorrows. Shower Your merciful glance on this fallen and ignorant soul and become visible before my eyes.',
          hi: 'हे दामोदर, हे अनंत विष्णु! मुझ पर कृपा कीजिए। मैं दुःखों के सागर में डूब रहा हूँ। मुझ दीन और अज्ञानी पर कृपा-दृष्टि की वर्षा कीजिए और मेरे नेत्रों के सामने प्रकट हो जाइए।',
        },
      },
      {
        sa: 'कुबेरात्मजौ बद्धमूर्त्यैव यद्वत्\nत्वया मोचितौ भक्तिभाजौ कृतौ च।\nतथा प्रेमभक्तिं स्वकां मे प्रयच्छ\nन मोक्षे ग्रहो मेऽस्ति दामोदरेह॥',
        tr: 'kuberātmajau baddha-mūrtyaiva yadvat\ntvayā mocitau bhakti-bhājau kṛtau ca\ntathā prema-bhaktiṁ svakāṁ me prayaccha\nna mokṣe graho me \'sti dāmodareha',
        mean: {
          en: 'As You freed the two sons of Kuvera from their tree forms and made them recipients of devotion, so please grant me Your own prema-bhakti. I have no desire for liberation.',
          hi: 'जैसे आपने कुबेर के दोनों पुत्रों को वृक्ष-योनि से मुक्त कर अपनी भक्ति का पात्र बनाया, वैसे ही मुझे भी अपनी प्रेम-भक्ति प्रदान कीजिए। मुझे मोक्ष की कोई कामना नहीं।',
        },
      },
      {
        sa: 'नमस्तेऽस्तु दाम्ने स्फुरद्दीप्तिधाम्ने\nत्वदीयोदरायाथ विश्वस्य धाम्ने।\nनमो राधिकायै त्वदीयप्रियायै\nनमोऽनन्तलीलाय देवाय तुभ्यम्॥',
        tr: 'namas te \'stu dāmne sphurad-dīpti-dhāmne\ntvadīyodarāyātha viśvasya dhāmne\nnamo rādhikāyai tvadīya-priyāyai\nnamo \'nanta-līlāya devāya tubhyam',
        mean: {
          en: 'I bow to the rope that binds Your radiant belly, the abode of the whole universe. I bow to Sri Radhika, Your beloved, and to You, O Lord of unlimited pastimes.',
          hi: 'मैं आपके तेजस्वी उदर को बाँधने वाली रस्सी को नमन करता हूँ, जो सम्पूर्ण विश्व का आधार है। मैं आपकी प्रिया श्रीमती राधिका को नमन करता हूँ और आप अनंत लीलाओं वाले देव को भी प्रणाम करता हूँ।',
        },
      },
    ],
  },

  deepdan: {
    title: { en: 'How to Offer a Deepdan', hi: 'दीपदान करने का तरीका' },
    intro: {
      en: 'Offer a ghee lamp to Lord Damodara daily during Kartik, in the temple or before the altar or picture at home. The evening is the usual time, or the time fixed by your temple.',
      hi: 'कार्तिक मास में प्रतिदिन भगवान दामोदर को घी का दीप अर्पित करें, मंदिर में या घर पर वेदी/चित्र के सामने। सामान्यतः संध्या का समय उत्तम है, या वह समय जो आपके मंदिर ने निर्धारित किया हो।',
    },
    steps: [
      { title: { en: 'Prepare yourself', hi: 'स्वयं को तैयार करें' }, body: { en: 'Bathe, wear clean clothes and wash your hands.', hi: 'स्नान करें, स्वच्छ वस्त्र पहनें और हाथ धोएँ।' } },
      { title: { en: 'Prepare the lamp', hi: 'दीप तैयार करें' }, body: { en: 'Use pure ghee and cotton wicks. The temple uses a five-wick ghee lamp; at home a single-wick ghee lamp is enough.', hi: 'शुद्ध घी और रुई की बाती का प्रयोग करें। मंदिर में पाँच बत्ती वाला घी का दीपक होता है; घर पर एक बत्ती का घी का दीपक पर्याप्त है।' } },
      { title: { en: 'Offer obeisances', hi: 'प्रणाम करें' }, body: { en: 'Place the lamp before the Deity or picture of Lord Damodara, light it and offer your obeisances.', hi: 'दीप को भगवान दामोदर के श्रीविग्रह या चित्र के सामने रखें, उसे प्रज्वलित करें और प्रणाम करें।' } },
      { title: { en: 'Sing Damodarashtakam', hi: 'दामोदराष्टकम् गाएँ' }, body: { en: 'Sing Damodarashtakam with devotion while offering the lamp. You can also chant the Hare Krishna maha-mantra.', hi: 'दीप अर्पित करते हुए भक्तिपूर्वक दामोदराष्टकम् गाएँ। आप हरे कृष्ण महामंत्र का जप भी कर सकते हैं।' } },
      { title: { en: 'Wave the lamp in circles', hi: 'दीप को गोल घुमाकर अर्पित करें' }, body: { en: 'Offer the lamp to the Lord in this order, the same way arati is offered to the Deity:', hi: 'जैसे श्रीविग्रह को आरती अर्पित की जाती है, उसी प्रकार दीप को इस क्रम में अर्पित करें:' } },
      { title: { en: 'Offer to Mother Yashoda and Srila Prabhupada', hi: 'माता यशोदा और श्रील प्रभुपाद को अर्पित करें' }, body: { en: 'Many temples then offer the lamp to Mother Yashoda (7 circles) and to the face of Srila Prabhupada (3 circles). Follow your temple\'s practice.', hi: 'कई मंदिरों में इसके बाद दीप माता यशोदा को (7 बार) और श्रील प्रभुपाद के मुख पर (3 बार) अर्पित किया जाता है। अपने मंदिर की पद्धति का पालन करें।' } },
      { title: { en: 'Pray', hi: 'प्रार्थना करें' }, body: { en: 'Pray for devotion at the lotus feet of Lord Damodara, and keep the lamp in a safe place.', hi: 'भगवान दामोदर के चरणकमलों में भक्ति की प्रार्थना करें और दीप को सुरक्षित स्थान पर रखें।' } },
    ],
    // Circle counts for the "Wave the lamp in circles" step (same as deity arati).
    circles: [
      { part: { en: 'Lotus feet', hi: 'चरणकमल' }, count: 4 },
      { part: { en: 'Navel', hi: 'नाभि' }, count: 2 },
      { part: { en: 'Face', hi: 'मुख' }, count: 3 },
      { part: { en: 'Whole body', hi: 'सम्पूर्ण विग्रह' }, count: 7 },
    ],

    circlesUnit: { en: 'circles', hi: 'बार' },
    circlesNote: {
      en: 'These are the standard arati-style circles used while offering the lamp to Lord Damodara.',
      hi: 'ये भगवान दामोदर को दीप अर्पित करते समय उपयोग की जाने वाली आरती-शैली की मानक परिक्रमा-गिनती हैं।',
    },
    cta: { en: 'Deepdan Timings: 8:00 AM & 7:00 PM', hi: 'दीपदान का समय: सुबह 8 बजे एवं शाम 7 बजे' },
    waText: 'Hare Krishna! Please share the Kartik deepdan timings at the temple.',
  },

}