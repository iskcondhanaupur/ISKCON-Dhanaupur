'use client'
import { motion } from 'framer-motion'
import {
  CalendarDays, MapPin, ChevronRight, Quote,
  Sparkles, Music4, UtensilsCrossed, Moon,
} from 'lucide-react'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'

interface Props {
  lang: Lang
  onBack: () => void
}

const devoteeExperiences = {
  en: [
    {
      quote: 'I first visited ISKCON Dhanaupur in 2023 , and since then, it has become a very special place for me. For the last three years, I have been attending the Janmashtami festival here, and every visit has been a wonderful experience. The kirtans fill the whole temple with devotion, and the darshan of Sri Sri Radha Shyam Sundar Ji is always mesmerizing . Seeing the beautifully decorated Deities brings so much peace and happiness. I also love that every devotee gets a chance to perform the Abhishek of Lord Krishna, which makes the celebration even more special.',
      name: 'Vaishnavi Singh',
      
    },
    {
      quote: ' I had the opportunity to celebrate Janmashtami at ISKCON Dhanaupur. It was a wonderful experience featuring beautiful kirtan 🥳 and various Vaishnava bhajans, alongside the magnificent *darshan* of Sri Sri Radha Shyam Sundar and Gaur Nitai Sundar, as well as the supremely merciful Jagannath, Baladev, and Subhadra Maharani—all in the company of their loving devotees. The most captivating aspect of the temple is that Sri Shyam Prabhu Ji gives devotees—including all visiting devotees—the chance to perform the *Abhishek* of Lord Sri Radha Shyam Sundar 🪷.',
      name: 'Shivani Mishra',
    },
    {
      quote: 'Attending the Janmashtami celebration at the temple of Shri Shri Radha Shyam sundar mandir was a truly divine and memorable experience. The temple was beautifully decorated with flowers and lights, creating a peaceful and spiritual atmosphere. The devotional bhajans, kirtans, and the midnight celebration of Lord Krishnas birth filled everyones heart with joy and devotion. I learned that Janmashtami is not only a festival but also a reminder to follow the teachings of Lord Krishna, such as truth, kindness, and selfless service',
      name: 'Pranjal Dubey',
    },
    {

      quote: 'Even though thousands of devotees come, the crowd management is excellent . The volunteers serve everyone with a smiling face, proper dress code is maintained, and the separate seating arrangement for Matajis and Prabhujis helps keep the atmosphere peaceful and devotional . Every Janmashtami at ISKCON Dhanaupur leaves me with beautiful memories and inspires me to come back again. My heartfelt gratitude to all the devotees and volunteers for organizing such a wonderful festival.',
      name: 'Vaishnavi Singh',
    },
    {
      quote: 'It was a moment that truly heightened my happiness. My sister and I were laid low by a fever, yet our pain vanished amidst such a beautiful festival. We even had the opportunity to decorate some of the pots for the *Abhishek*, and receiving the *Mahaprasad* after the birth celebration added even more to our joy. 🙌🏼 It was my first festival at the temple, and now I make it a point to attend every celebration there. Jai Prabhupada 🪷',
      name: 'Shivani Mishra',
    },
    {
      quote: 'We celebrated the occasion with prayers, reading from the Bhagavad Gita, and the distribution of prasadam. The event inspired me to live a life of compassion, discipline, and devotion. I sincerely thank the temple authorities and all the volunteers for organizing such a wonderful and meaningful celebration. This Janmashtami has strengthened my faith and encouraged me to celebrate every festival with devotion and gratitude.',
      name: 'Pranjal Dubey',
    },
  ],
  hi: [
    {
      quote: 'मैं पहली बार 2023 में इस्कॉन धनऊपुर गई थी, और तब से यह मेरे लिए एक बहुत खास जगह बन गई है। पिछले तीन सालों से मैं यहाँ जन्माष्टमी का उत्सव मना रही हूँ, और हर बार का अनुभव बहुत शानदार रहा है। यहाँ के कीर्तन पूरे मंदिर को भक्तिमय बना देते हैं, और श्री श्री राधा श्याम सुंदर जी के दर्शन हमेशा मनमोहक होते हैं। सुंदर ढंग से सजाई गई विग्रह को देखकर बहुत शांति और खुशी मिलती है। मुझे यह बात भी बहुत अच्छी लगती है कि हर भक्त को भगवान कृष्ण का अभिषेक करने का मौका मिलता है, जिससे यह उत्सव और भी खास हो जाता है।',
      name: 'वैष्णवी सिंह',
      
    },
    {
      quote: 'मुझे मिला इस्कॉन धनऊपुर में जन्माष्टमी मनाने का अवसर यहां सुंदर कीर्तन🥳,अनेक वैष्णव भजनों के साथ अद्भुत दर्शन श्री श्री राधा श्याम सुंदर जी, गौर निताई सुंदर,साथ में बहुत ही कृपा से भरे जगन्नाथ बलदेव सुभद्रा महारानी और उनके प्यारे भक्तों के संग मिला मंदिर की सबसे आकर्षक बात,श्री श्याम प्रभु जी भक्तों से भगवान श्री राधाश्याम सुंदर का अभिषेक करने का मौका देते है  वो भी सभी आगंतुक भक्तों को🪷',
      name: 'शिवानी मिश्रा',
    },
    {
      quote: 'श्री श्री राधा श्याम सुंदर मंदिर में जन्माष्टमी के जश्न में शामिल होना सचमुच एक दिव्य और यादगार अनुभव था। मंदिर को फूलों और रोशनी से बहुत खूबसूरती से सजाया गया था, जिससे वहाँ का माहौल शांत और आध्यात्मिक बन गया था। भक्तिपूर्ण भजन, कीर्तन और आधी रात को भगवान कृष्ण के जन्म का उत्सव - इन सबने सभी के दिलों को खुशी और भक्ति से भर दिया। मुझे यह एहसास हुआ कि जन्माष्टमी सिर्फ़ एक त्योहार नहीं है, बल्कि भगवान कृष्ण की शिक्षाओं - जैसे सच्चाई, दया और निस्वार्थ सेवा - को अपनाने की याद दिलाने वाला एक मौका भी है।',
      name: 'प्रांजल दुबे',
    },
    {
      quote: 'भले ही यहाँ हज़ारों भक्त आते हैं, लेकिन भीड़ का प्रबंधन बहुत बढ़िया होता है। स्वयंसेवक हमेशा मुस्कुराते हुए सबकी सेवा करते हैं, *यहाँ सही ड्रेस कोड का पालन किया जाता है, और माताओं व प्रभुजी के लिए अलग-अलग बैठने की व्यवस्था से माहौल शांत और भक्तिपूर्ण बना रहता है। इस्कॉन धनऊपुर में मनाई गई हर जन्माष्टमी मेरे लिए खूबसूरत यादें छोड़ जाती है और मुझे दोबारा आने के लिए प्रेरित करती है। इतने शानदार उत्सव का आयोजन करने के लिए सभी भक्तों और स्वयंसेवकों का दिल से आभार। हरे कृष्ण🌸',
      name: 'वैष्णवी सिंह',
    },
    {

      quote: 'ये मेरी खुशी को ओर बढ़ाने वाला पल था, मैं और मेरी दीदी बुखार से लस्त थे लेकिन इतने सुंदर महोत्सव में हमारा दर्द गायब हो गया था उसमें अभिषेक के कुछ मटकियों को भी सजाने का मौका और जन्मोत्सव के बाद महाप्रसाद मिला जिससे हमारा आनंद और बढ़ गया  🙌🏼मंदिर में मेरा पहला उत्सव था और अब मैं सभी उत्सवों में यहां पहुंचने की कोशिश करती हूं जय प्रभुपाद 🪷',
      name: 'शिवानी मिश्रा',
    },
    {

      quote: ' हमने प्रार्थना करके, भगवद गीता का पाठ करके और प्रसाद बाँटकर यह त्योहार मनाया। इस कार्यक्रम ने मुझे दया, अनुशासन और भक्ति से भरा जीवन जीने की प्रेरणा दी। इतने शानदार और सार्थक आयोजन के लिए मैं मंदिर के अधिकारियों और सभी स्वयंसेवकों का दिल से धन्यवाद करता हूँ। इस जन्माष्टमी ने मेरी आस्था को और मज़बूत किया है और मुझे हर त्योहार को पूरी श्रद्धा और कृतज्ञता के साथ मनाने के लिए प्रेरित किया है।',
      name: 'प्रांजल दुबे',
    },
  ],
}

const highlights = {
  en: [
    { icon: Sparkles, label: 'Special Abhishek', desc: 'Divine bathing of Sri Sri Radha ShyamSundar' },
    { icon: Music4, label: 'Kirtan & Bhajans', desc: 'Soulful kirtans throughout the day & night' },
    { icon: UtensilsCrossed, label: 'Bhog Offering', desc: '56 Bhog & special offerings to Sri Krishna' },
    { icon: Moon, label: 'Midnight Celebration', desc: 'Grand aarati, kirtan & dressing of Sri Sri Radha ShyamSundar at midnight' },
  ],
  hi: [
    { icon: Sparkles, label: 'विशेष अभिषेक', desc: 'श्री श्री राधा श्यामसुंदर का दिव्य स्नान' },
    { icon: Music4, label: 'कीर्तन व भजन', desc: 'दिन-रात मधुर कीर्तन' },
    { icon: UtensilsCrossed, label: 'भोग अर्पण', desc: '56 भोग व विशेष अर्पण श्री कृष्ण को' },
    { icon: Moon, label: 'मध्यरात्रि उत्सव', desc: 'भव्य आरती, कीर्तन व मध्यरात्रि श्री श्री राधा श्यामसुंदर का श्रृंगार' },
  ],
}

const scheduleItems = {
  en: [
    { time: '', event: 'Mangala Aarti & Darshan' },
    { time: ' PM', event: 'Special Abhishek & Alankar' },
    { time: ' PM', event: 'Kirtan, Bhagwad Katha' },
    { time: '08:00 PM', event: 'Janma Aarti & Maha Abhishek' },
  ],
  hi: [
    { time: '', event: 'मंगला आरती व दर्शन' },
    { time: '', event: 'विशेष अभिषेक व अलंकार' },
    { time: '', event: 'कीर्तन, भागवत कथा' },
    { time: '08:00 PM', event: 'जन्म आरती व महाभिषेक' },
  ],
}

const copy = {
  en: {
    label: 'Festival, 2026',
    title: 'Janmashtami',
    subtitle: 'Celebrate the Appearance of Lord Sri Krishna',
    quote: '',
    eventName: 'Janmashtami 2026',
    date: '04 Sep 2026, Friday',
    venue: 'ISKCON Dhanaupur Temple',
    experiencesTitle: 'Devotee Experiences',
    highlightsTitle: 'Festival Highlights',
    scheduleTitle: 'Festival Schedule',
    ctaTitle: 'Be a Part of the Celebration',
    ctaDesc: 'Come with your family & friends and take blessings of Lord Krishna on this auspicious day.',
    
    
    back: 'Back',
  },
  hi: {
    label: 'महोत्सव, 2026',
    title: 'जन्माष्टमी',
    subtitle: 'भगवान श्री कृष्ण के प्रकट उत्सव का उल्लास',
    quote: '',
    eventName: 'जन्माष्टमी 2026',
    date: '04 सितंबर 2026, शुक्रवार',
    venue: 'इस्कॉन धनऊपुर मंदिर',
    experiencesTitle: 'भक्तों के अनुभव',
    highlightsTitle: 'उत्सव की झलकियाँ',
    scheduleTitle: 'उत्सव कार्यक्रम',
    ctaTitle: 'उत्सव का हिस्सा बनें',
    ctaDesc: 'अपने परिवार व मित्रों के साथ आइये और इस शुभ अवसर पर भगवान कृष्ण का आशीर्वाद प्राप्त करें।',
    ctaBtn: 'अपनी यात्रा तय करें',
    
    back: 'पीछे जाएँ',
  },
}

export default function JanmashtamiView({ lang, onBack }: Props) {
  const isHi = lang === 'hi'
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'
  const c = copy[lang]
  const experiences = devoteeExperiences[lang]
  const hl = highlights[lang]
  const schedule = scheduleItems[lang]
  return (
    <section className="section" style={{ background: 'transparent' }}>
      <PageBackground />
      <div className="container" style={{ maxWidth: 480 }}>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="back-btn"
          onClick={onBack}
          style={{ marginBottom: 32 }}
        >
          {c.back}
        </motion.button>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 28 }}>
          <p className="t-label" style={{ marginBottom: 6 }}>{c.label}</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 34px)', color: 'var(--maroon)', marginBottom: 4, fontFamily: ff, fontWeight: 600 }}>
            {c.title}
          </h1>
          <p style={{ fontSize: 17, color: 'var(--gold)', fontFamily: ff, marginBottom: 10 }}>
            {c.subtitle}
          </p>
          <p style={{ fontSize: 14, color: 'var(--maroon)', opacity: 0.7, fontStyle: 'italic', fontFamily: isHi ? ff : 'Crimson Text, serif' }}>
            {c.quote}
          </p>
          <div className="gold-line" style={{ maxWidth: 60, marginTop: 14 }} />
        </motion.div>

        {/* Event info card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 12,
            background: 'var(--parchment)',
            border: '1.5px solid var(--gold)',
            borderRadius: 16,
            padding: '16px 18px',
            marginBottom: 32,
          }}
        >
          <div>
            <p style={{ fontFamily: ff, fontWeight: 600, fontSize: 16, color: 'var(--maroon)', marginBottom: 6 }}>
              {c.eventName}
            </p>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--gold)', fontFamily: 'Crimson Text, serif', marginBottom: 3 }}>
              <CalendarDays size={13} /> {c.date}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--muted)', fontFamily: 'Crimson Text, serif' }}>
              <MapPin size={13} /> {c.venue}
            </span>
          </div>
        </motion.div>

        {/* Devotee Experiences — horizontal scroll */}
       <div style={{ marginBottom: 36 }}>
          <p className="t-label" style={{ marginBottom: 14, textAlign: 'center' }}>{c.experiencesTitle}</p>
          <div
            style={{
              display: 'flex',
              gap: 14,
              overflowX: 'auto',
              paddingBottom: 8,
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              justifyContent: experiences.length <= 1 ? 'center' : 'flex-start',
            }}
          >
            {experiences.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.07 * i }}
                style={{
                  width: 330,
                  height: 330,
                  flex: '0 0 auto',
                  scrollSnapAlign: 'center',
                  background: 'var(--parchment)',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  padding: 16,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  overflow: 'hidden',
                }}
              >
                <Quote size={18} color="var(--gold)" strokeWidth={1.8} />
                <p
                  style={{
                    fontSize: 12.5,
                    color: 'var(--text)',
                    fontFamily: isHi ? ff : 'Crimson Text, serif',
                    lineHeight: 1.5,
                    flex: 1,
                    display: '-webkit-box',
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {d.quote}
                </p>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--maroon)', fontFamily: ff }}>{d.name}</p>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Festival Highlights */}
        <div style={{ marginBottom: 36 }}>
          <p className="t-label" style={{ marginBottom: 14, textAlign: 'center' }}>{c.highlightsTitle}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {hl.map((h, i) => {
              const Icon = h.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i }}
                  style={{
                    background: 'var(--parchment)',
                    border: '1px solid var(--border)',
                    borderRadius: 16,
                    padding: 16,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'var(--maroon)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={20} color="var(--gold-lt)" strokeWidth={1.8} />
                  </div>
                  <p style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--maroon)', fontFamily: ff }}>{h.label}</p>
                  <p style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'Crimson Text, serif', lineHeight: 1.5 }}>{h.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Festival Schedule */}
        <div
          style={{
            background: 'var(--parchment)',
            border: '1.5px solid var(--border)',
            borderRadius: 16,
            padding: 20,
            marginBottom: 32,
          }}
        >
          <p className="t-label" style={{ marginBottom: 14 }}>{c.scheduleTitle}</p>
          {schedule.map((s, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 0',
                borderTop: i === 0 ? 'none' : '1px dashed var(--border)',
              }}
            >
              <span style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--maroon)', fontFamily: ff }}>{s.time}</span>
              <span style={{ fontSize: 13.5, color: 'var(--muted)', fontFamily: 'Crimson Text, serif' }}>{s.event}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: 'var(--maroon)',
            borderRadius: 20,
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            marginBottom: 28,
          }}
        >
          <div>
            <p style={{ color: 'var(--gold)', fontWeight: 600, fontSize: 16, fontFamily: ff, marginBottom: 4 }}>{c.ctaTitle}</p>
            <p style={{ color: '#fff', opacity: 0.85, fontSize: 13, fontFamily: 'Crimson Text, serif', lineHeight: 1.6 }}>{c.ctaDesc}</p>
          </div>
        </motion.div>

        {/* Closing shloka */}
       
      </div>
    </section>
  )
}