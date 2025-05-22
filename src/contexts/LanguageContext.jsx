
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define translations
const translations = {
  en: {
    // Header
    home: "Home",
    about: "About",
    academics: "Academics",
    admissions: "Admissions",
    contact: "Contact",
    
    // Hero Section
    welcomeTo: "Welcome to Mansarovar Public School",
    heroSubtitle: "Building the foundation for a lifetime of success through knowledge, character, and excellence.",
    applyForAdmission: "Apply for Admission",
    learnMore: "Learn More",
    
    // About Preview
    aboutOurSchool: "About Our School",
    aboutDesc1: "Mansarovar Public School in Ghanghari, Barkattha, Hazaribagh is committed to providing quality education that develops the intellectual, physical, and ethical potential of each student.",
    aboutDesc2: "Our school provides a nurturing environment where students can develop critical thinking skills, creativity, and a strong moral character that will serve them throughout their lives.",
    readMore: "Read More",
    
    // Principal Section
    messageFromPrincipal: "Message from the Principal",
    principalName: "Mr. Sonu Kumar",
    principalMsg1: "Welcome to Mansarovar Public School! As Principal, I am honored to lead this institution dedicated to providing quality education and shaping the future of our children. Our school strives to create an environment where every student can discover their potential and grow academically, socially, and morally.",
    principalMsg2: "We believe in holistic education that nurtures creativity, critical thinking, and character. Our dedicated faculty works tirelessly to ensure that each student receives personalized attention and guidance. Together, we are committed to excellence in education and preparing our students for the challenges of tomorrow.",
    readFullMessage: "Read Full Message",
    
    // Services
    ourServices: "Our Services",
    servicesDesc: "Comprehensive services designed to enhance the educational experience at Mansarovar Public School",
    schoolBusTitle: "School Bus Service",
    schoolBusDesc: "Safe and reliable transportation for students with experienced drivers and well-maintained buses covering all major routes.",
    onlineLearningTitle: "Online Learning Platform",
    onlineLearningDesc: "Access to digital learning resources, interactive lessons, and educational content for continuous learning beyond the classroom.",
    virtualClassroomTitle: "Virtual Classrooms",
    virtualClassroomDesc: "Interactive virtual classroom sessions with live teacher interaction, designed to complement traditional classroom learning.",
    digitalLibraryTitle: "Digital Library",
    digitalLibraryDesc: "Extensive digital library with e-books, research materials, and educational videos to support academic excellence.",
    
    // Footer
    quickLinks: "Quick Links",
    schoolHours: "School Hours",
    mondayToSaturday: "Monday - Saturday",
    officeHours: "Office Hours",
    allRightsReserved: "All rights reserved.",
  },
  hi: {
    // Header
    home: "होम",
    about: "हमारे बारे में",
    academics: "शिक्षा",
    admissions: "प्रवेश",
    contact: "संपर्क",
    
    // Hero Section
    welcomeTo: "मानसरोवर पब्लिक स्कूल में आपका स्वागत है",
    heroSubtitle: "ज्ञान, चरित्र और उत्कृष्टता के माध्यम से जीवन भर की सफलता के लिए आधार बनाना।",
    applyForAdmission: "प्रवेश के लिए आवेदन करें",
    learnMore: "और जानें",
    
    // About Preview
    aboutOurSchool: "हमारे स्कूल के बारे में",
    aboutDesc1: "घनघरी, बरकट्ठा, हजारीबाग में मानसरोवर पब्लिक स्कूल प्रत्येक छात्र के बौद्धिक, शारीरिक और नैतिक क्षमता को विकसित करने वाली गुणवत्तापूर्ण शिक्षा प्रदान करने के लिए प्रतिबद्ध है।",
    aboutDesc2: "हमारा स्कूल एक पोषक वातावरण प्रदान करता है जहां छात्र महत्वपूर्ण सोच कौशल, रचनात्मकता और एक मजबूत नैतिक चरित्र विकसित कर सकते हैं जो उन्हें पूरे जीवन में काम आएगा।",
    readMore: "और पढ़ें",
    
    // Principal Section
    messageFromPrincipal: "प्रधानाचार्य का संदेश",
    principalName: "श्री सोनू कुमार",
    principalMsg1: "मानसरोवर पब्लिक स्कूल में आपका स्वागत है! प्रधानाचार्य के रूप में, मुझे इस संस्था का नेतृत्व करने का सम्मान प्राप्त है जो गुणवत्तापूर्ण शिक्षा प्रदान करने और हमारे बच्चों के भविष्य को आकार देने के लिए समर्पित है। हमारा स्कूल ऐसा वातावरण बनाने का प्रयास करता है जहां हर छात्र अपनी क्षमता की खोज कर सके और अकादमिक, सामाजिक और नैतिक रूप से विकसित हो सके।",
    principalMsg2: "हम समग्र शिक्षा में विश्वास करते हैं जो रचनात्मकता, महत्वपूर्ण सोच और चरित्र को पोषित करती है। हमारे समर्पित शिक्षक यह सुनिश्चित करने के लिए अथक प्रयास करते हैं कि प्रत्येक छात्र को व्यक्तिगत ध्यान और मार्गदर्शन मिले। साथ मिलकर, हम शिक्षा में उत्कृष्टता और अपने छात्रों को कल की चुनौतियों के लिए तैयार करने के लिए प्रतिबद्ध हैं।",
    readFullMessage: "पूरा संदेश पढ़ें",
    
    // Services
    ourServices: "हमारी सेवाएं",
    servicesDesc: "मानसरोवर पब्लिक स्कूल में शैक्षिक अनुभव को बढ़ाने के लिए डिज़ाइन की गई व्यापक सेवाएं",
    schoolBusTitle: "स्कूल बस सेवा",
    schoolBusDesc: "अनुभवी चालकों और अच्छी तरह से बनाए गए बसों के साथ छात्रों के लिए सुरक्षित और विश्वसनीय परिवहन जो सभी प्रमुख मार्गों को कवर करता है।",
    onlineLearningTitle: "ऑनलाइन लर्निंग प्लेटफॉर्म",
    onlineLearningDesc: "डिजिटल शिक्षण संसाधनों, इंटरैक्टिव पाठों और शैक्षिक सामग्री तक पहुंच कक्षा के बाहर निरंतर सीखने के लिए।",
    virtualClassroomTitle: "वर्चुअल क्लासरूम",
    virtualClassroomDesc: "लाइव शिक्षक इंटरैक्शन के साथ इंटरैक्टिव वर्चुअल क्लासरूम सेशन, पारंपरिक कक्षा शिक्षा को पूरक बनाने के लिए डिज़ाइन किए गए।",
    digitalLibraryTitle: "डिजिटल लाइब्रेरी",
    digitalLibraryDesc: "ई-बुक्स, अनुसंधान सामग्री और शैक्षिक वीडियो के साथ व्यापक डिजिटल लाइब्रेरी जो शैक्षिक उत्कृष्टता का समर्थन करती है।",
    
    // Footer
    quickLinks: "त्वरित लिंक",
    schoolHours: "स्कूल समय",
    mondayToSaturday: "सोमवार - शनिवार",
    officeHours: "कार्यालय समय",
    allRightsReserved: "सर्वाधिकार सुरक्षित।",
  }
};

// Create the language context
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    // Load translations
    import(`../translations/${language}.json`)
      .then(module => {
        setTranslations(module.default);
      })
      .catch(error => {
        console.error('Error loading translations:', error);
        // Fallback to hardcoded translations
        setTranslations(translations[language]);
      });
  }, [language]);

  const changeLanguage = (lang) => {
    if (lang === 'en' || lang === 'hi') {
      setLanguage(lang);
      localStorage.setItem('preferredLanguage', lang);
    }
  };

  // Initialize with saved preference or browser language
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      const browserLang = navigator.language.split('-')[0];
      setLanguage(browserLang === 'hi' ? 'hi' : 'en');
    }
  }, []);

  // For immediate access without waiting for imports
  const t = (key) => {
    if (Object.keys(translations).length > 0) {
      return translations[key] || translations[language]?.[key] || key;
    }
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, translations: translations[language] || {} }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
