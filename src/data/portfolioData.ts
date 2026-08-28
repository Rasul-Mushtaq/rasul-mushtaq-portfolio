// Single source of content: profile info, projects, skills, and EN/AR translations.
export type Language = "en" | "ar";

export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "email";
}

export interface Project {
  id: string;
  title: string;
  date: string;
  stack: string[];
  details: string;
  repo: string;
}

export interface Education {
  degree: string;
  period: string;
  institution: string;
}

export interface Honor {
  title: string;
  date: string;
}

export interface Certification {
  title: string;
  date: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Translation {
  nav: {
    projects: string;
    skills: string;
    education: string;
    honors: string;
    certifications: string;
    contact: string;
    viewResume: string;
  };
  hero: {
    name: string;
    nameAccent: string;
    role: string;
    location: string;
    bio: string;
    viewResume: string;
  };
  sections: {
    projects: string;
    skills: string;
    education: string;
    honors: string;
    certifications: string;
    contact: string;
  };
  projects: {
    viewLabel: string;
    titles: Record<string, string>;
    details: Record<string, string>;
  };
  skills: {
    languages: string;
    ai: string;
    data: string;
    web: string;
    tools: string;
    spoken: string;
  };
  honors: {
    items: {
      tag: string;
      date: string;
      title: string;
    }[];
  };
  certifications: {
    trainingLabel: string;
    certLabel: string;
    items: {
      title: string;
      date: string;
    }[];
  };
  education: {
    degree: string;
    period: string;
    institution: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    location: string;
    sendEmail: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
}

export interface PortfolioData {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  socials: SocialLink[];
  summary: string;
  projects: Project[];
  education: Education;
  honors: Honor[];
  certifications: Certification[];
  skillGroups: SkillGroup[];
  translations: Record<Language, Translation>;
}

export const portfolioData: PortfolioData = {
  name: "Rasul Mushtaq",
  role: "Data Science Student",
  location: "Baghdad, Iraq",
  email: "rasul.mhussien@gmail.com",
  phone: "+9647734710889",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/Rasul-Mushtaq",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/rasul-mushtaq",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:rasul.mhussien@gmail.com",
      icon: "email",
    },
  ],
  summary:
    "Data Science student at the University of Baghdad. I build ML pipelines, analysis dashboards, and small web tools in Python, R, SQL, and TypeScript. Most of my projects started as problems from my own coursework.",
  projects: [
    {
      id: "socio-dashboard",
      title: "Interactive Socioeconomic Analytics Dashboard",
      date: "AUG 2026",
      stack: ["R", "Shiny", "Plotly", "DT"],
      repo: "https://github.com/Rasul-Mushtaq/gapminder-dashboard",
      details:
        "Most global development reports hide behind static tables. This Shiny dashboard opens up demographic and economic data from 142 countries so anyone can filter, compare, and actually play with the trends.",
    },
    {
      id: "deltalab",
      title: "DeltaLab - Data Health Inspector",
      date: "AUG 2026",
      stack: ["JavaScript", "TypeScript", "React", "Tailwind CSS"],
      repo: "https://github.com/Rasul-Mushtaq/deltalab",
      details:
        "Every broken model I ever trained traced back to dirty data. DeltaLab is a lightweight browser tool that inspects datasets for missing values and structural surprises before they reach your pipeline.",
    },
    {
      id: "anemia-prediction",
      title: "Conjunctiva Deep Learning Anemia Detector",
      date: "JUN 2026",
      stack: ["Python", "TensorFlow", "Keras", "Scikit-Learn"],
      repo: "https://github.com/Rasul-Mushtaq/anemia-prediction",
      details:
        "A deep learning pipeline that screens for anemia from conjunctiva images, no needles required. Trained in TensorFlow and Keras, evaluated honestly with scikit-learn metrics.",
    },
    {
      id: "diseases-prediction",
      title: "Multi-Disease Prediction System",
      date: "JUN 2026",
      stack: ["Python", "Scikit-Learn", "Streamlit"],
      repo: "https://github.com/Rasul-Mushtaq/disease-prediction",
      details:
        "Describe how you feel, get a structured risk read across several conditions. A Streamlit app wrapping scikit-learn models, built to explain its predictions rather than just print them.",
    },
    {
      id: "solar-view",
      title: "Interactive Solar System View",
      date: "MAY 2026",
      stack: ["JavaScript", "HTML", "CSS"],
      repo: "https://github.com/Rasul-Mushtaq/solar-view",
      details:
        "A little corner of the web where you can tour the planets, take a cosmic quiz, and survive a round of arcade mode. Hand-built with vanilla JavaScript.",
    },
    {
      id: "cv-builder",
      title: "CV Builder Application",
      date: "FEB 2026",
      stack: ["HTML", "CSS", "JavaScript"],
      repo: "https://github.com/Rasul-Mushtaq/cv-builder",
      details:
        "Resumes shouldn't fight you. This tool walks you from a blank page to a clean, formatted, downloadable CV in minutes.",
    },
  ],
  education: {
    degree: "Bachelor of Science in Data Science",
    period: "AUG 2025 - AUG 2029 (Expected Graduation)",
    institution:
      "University of Baghdad, College of Excellence, Department of Data Science",
  },
  honors: [
    {
      title:
        "Ministry Recognition Certificate - NURAI 2026, Ministry of Higher Education and Scientific Research",
      date: "AUG 2026",
    },
    {
      title:
        "1st Annual Student Forum for AI Projects - Certificate of Participation",
      date: "JUN 2026",
    },
    {
      title:
        "2nd Place in Cohort - Department of Data Science, College of Excellence, University of Baghdad",
      date: "MAY 2026",
    },
    {
      title:
        "3rd Place Winner - Data Science Hackathon (University of Baghdad & Al-Farabi University)",
      date: "MAR 2026",
    },
    {
      title: "Excellence Hackathon 2026 - Certificate of Appreciation",
      date: "FEB 2026",
    },
    {
      title:
        "Scientific Output Exhibition - College of Excellence, University of Baghdad",
      date: "FEB 2026",
    },
  ],
  certifications: [
    {
      title: "Summer Training Program - Supercell Network",
      date: "AUG 2026",
    },
    {
      title: "AI Fluency: Framework & Foundations - Claude Academy",
      date: "AUG 2026",
    },
    {
      title: "Python Programming Basics - Huawei ICT Academy",
      date: "APR 2026",
    },
    {
      title: "Fundamentals of Deep Learning - NVIDIA Deep Learning Institute",
      date: "MAR 2026",
    },
    {
      title: "Introduction to Data Concepts - IBM SkillsBuild",
      date: "NOV 2025",
    },
  ],
  skillGroups: [
    {
      category: "Programming Languages",
      skills: ["Python", "R", "SQL", "JavaScript", "TypeScript"],
    },
    {
      category: "AI & Machine Learning",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "Scikit-Learn",
        "AI Agents",
        "AI Automation",
      ],
    },
    {
      category: "Data Analysis & Visualization",
      skills: ["Pandas", "NumPy", "Matplotlib", "Excel", "Power BI"],
    },
    {
      category: "Web Development",
      skills: ["HTML", "CSS", "React", "Tailwind CSS", "Streamlit", "Gradio"],
    },
    {
      category: "Developer Tools",
      skills: ["Git", "GitHub", "Netlify"],
    },
    {
      category: "Languages",
      skills: ["Arabic (Native)", "English (Fluent)"],
    },
  ],
  translations: {
    en: {
      nav: {
        projects: "Projects",
        skills: "Skills",
        education: "Education",
        honors: "Honors",
        certifications: "Certifications",
        contact: "Contact",
        viewResume: "View CV",
      },
      hero: {
        name: "Rasul",
        nameAccent: "Mushtaq",
        role: "Data Science Student",
        location: "Baghdad, Iraq",
        bio: "I study Data Science at the University of Baghdad and build ML pipelines and web tools in Python, R, and TypeScript. Recent work: an anemia screening model trained in TensorFlow, a dataset inspector for catching bad data before training runs, and an R dashboard covering 142 countries.",
        viewResume: "View Resume",
      },
      sections: {
        projects: "Featured Projects",
        skills: "Skills",
        education: "Education",
        honors: "Honors & Awards",
        certifications: "Certifications & Training",
        contact: "Contact",
      },
      projects: {
        viewLabel: "View Project",
        titles: {
          "socio-dashboard": "Interactive Socioeconomic Analytics Dashboard",
          deltalab: "DeltaLab - Data Health Inspector",
          "anemia-prediction": "Conjunctiva Deep Learning Anemia Detector",
          "diseases-prediction": "Multi-Disease Prediction System",
          "solar-view": "Interactive Solar System View",
          "cv-builder": "CV Builder Application",
        },
        details: {
          "socio-dashboard":
            "Most global development reports hide behind static tables. This Shiny dashboard opens up demographic and economic data from 142 countries so anyone can filter, compare, and actually play with the trends.",
          deltalab:
            "Every broken model I ever trained traced back to dirty data. DeltaLab is a lightweight browser tool that inspects datasets for missing values and structural surprises before they reach your pipeline.",
          "anemia-prediction":
            "A deep learning pipeline that screens for anemia from conjunctiva images, no needles required. Trained in TensorFlow and Keras, evaluated honestly with scikit-learn metrics.",
          "diseases-prediction":
            "Describe how you feel, get a structured risk read across several conditions. A Streamlit app wrapping scikit-learn models, built to explain its predictions rather than just print them.",
          "solar-view":
            "A little corner of the web where you can tour the planets, take a cosmic quiz, and survive a round of arcade mode. Hand-built with vanilla JavaScript.",
          "cv-builder":
            "Resumes shouldn't fight you. This tool walks you from a blank page to a clean, formatted, downloadable CV in minutes.",
        },
      },
      skills: {
        languages: "Programming Languages",
        ai: "AI & Machine Learning",
        data: "Data Analysis & Visualization",
        web: "Web Development",
        tools: "Developer Tools",
        spoken: "Languages",
      },
      honors: {
        items: [
          {
            tag: "Recognition",
            date: "AUG 2026",
            title:
              "Ministry Recognition Certificate - NURAI 2026, Ministry of Higher Education and Scientific Research",
          },
          {
            tag: "Exhibition",
            date: "JUN 2026",
            title:
              "1st Annual Student Forum for AI Projects - Certificate of Participation",
          },
          {
            tag: "Recognition",
            date: "MAY 2026",
            title:
              "2nd Place in Cohort - Department of Data Science, College of Excellence, University of Baghdad",
          },
          {
            tag: "Hackathon",
            date: "MAR 2026",
            title:
              "3rd Place Winner - Data Science Hackathon (University of Baghdad & Al-Farabi University)",
          },
          {
            tag: "Hackathon",
            date: "FEB 2026",
            title: "Excellence Hackathon 2026 - Certificate of Appreciation",
          },
          {
            tag: "Exhibition",
            date: "FEB 2026",
            title:
              "Scientific Output Exhibition - College of Excellence, University of Baghdad",
          },
        ],
      },
      certifications: {
        trainingLabel: "Training",
        certLabel: "Certification",
        items: [
          {
            title: "Summer Training Program - Supercell Network",
            date: "AUG 2026",
          },
          {
            title: "AI Fluency: Framework & Foundations - Claude Academy",
            date: "AUG 2026",
          },
          {
            title: "Python Programming Basics - Huawei ICT Academy",
            date: "APR 2026",
          },
          {
            title:
              "Fundamentals of Deep Learning - NVIDIA Deep Learning Institute",
            date: "MAR 2026",
          },
          {
            title: "Introduction to Data Concepts - IBM SkillsBuild",
            date: "NOV 2025",
          },
        ],
      },
      education: {
        degree: "Bachelor of Science in Data Science",
        period: "AUG 2025 - AUG 2029 (Expected Graduation)",
        institution:
          "University of Baghdad, College of Excellence, Department of Data Science",
      },
      contact: {
        title: "Get in touch",
        subtitle:
          "Have a project in mind, or want to collaborate? My inbox is always open :)",
        email: "Email",
        phone: "Phone",
        location: "Location",
        sendEmail: "Send Email",
      },
      footer: {
        rights: "All rights reserved.",
      },
    },
    ar: {
      nav: {
        projects: "المشاريع",
        skills: "المهارات",
        education: "التعليم",
        honors: "الجوائز",
        certifications: "الشهادات",
        contact: "تواصل",
        viewResume: "السيرة الذاتية",
      },
      hero: {
        name: "رسول مشتاق",
        nameAccent: "",
        role: "طالب علم البيانات",
        location: "بغداد، العراق",
        bio: "أدرس علم البيانات في جامعة بغداد وأبني خطوط تعلم آلي وأدوات ويب بلغة Python وR وTypeScript. من أعمالي الأخيرة: نموذج للكشف عن فقر الدم مدرّب بـ TensorFlow، وأداة لفحص جودة البيانات قبل التدريب، ولوحة بيانات بـ R تغطي 142 دولة.",
        viewResume: "عرض السيرة الذاتية",
      },
      sections: {
        projects: "المشاريع المميزة",
        skills: "المهارات",
        education: "التعليم",
        honors: "الجوائز والتكريمات",
        certifications: "الشهادات والتدريب",
        contact: "تواصل",
      },
      projects: {
        titles: {
          "socio-dashboard": "لوحة تحليلات اجتماعية واقتصادية تفاعلية",
          deltalab: "DeltaLab - كاشف جودة البيانات",
          "anemia-prediction": "كاشف فقر الدم بالتعلم العميق من صور الملتحمة",
          "diseases-prediction": "كشف الأمراض المتعددة",
          "solar-view": "استكشاف النظام الشمسي",
          "cv-builder": "منشئ السيرة الذاتية",
        },
        viewLabel: "عرض المشروع",
        details: {
          "socio-dashboard":
            "معظم التقارير التنموية العالمية تختبئ خلف جداول ثابتة. هذه اللوحة المبنية بـ Shiny تفتح بيانات 142 دولة الديموغرافية والاقتصادية ليتصفحها أي شخص ويقارن بينها بحرية.",
          deltalab:
            "كل نموذج فاشل دربته كان السبب وراءه بيانات غير نظيفة. DeltaLab أداة خفيفة في المتصفح تفحص مجموعات البيانات وتكشف القيم المفقودة قبل أن تصل إلى خط التدريب.",
          "anemia-prediction":
            "خط أنابيب تعلم عميق يفحص فقر الدم من صور الملتحمة دون إبر. دُرّب باستخدام TensorFlow وKeras وقُيّم بمقاييس scikit-learn.",
          "diseases-prediction":
            "تصف كيف تشعر، فتحصل على قراءة منظمة لمؤشرات الخطر عبر عدة حالات صحية. تطبيق Streamlit يغلّف نماذج scikit-learn ويعطي توصيات صحية بسيطة .",
          "solar-view":
            "زاوية صغيرة على الويب تجول فيها بين الكواكب وتخوض اختبارًا فضائيًا وتنجو من جولة في وضع الأركيد. مبنية يدويًا بـ JavaScript الخالصة.",
          "cv-builder":
            "لا يجب أن تكون السيرة الذاتية معركة. هذه الأداة تأخذك من صفحة فارغة إلى سيرة منسقة وقابلة للتحميل في دقائق.",
        },
      },
      skills: {
        languages: "لغات البرمجة",
        ai: "الذكاء الاصطناعي والتعلم الآلي",
        data: "تحليل البيانات والتصور",
        web: "تطوير الويب",
        tools: "أدوات المطور",
        spoken: "اللغات",
      },
      honors: {
        items: [
          {
            tag: "تكريم",
            date: "آب 2026",
            title:
              "شهادة تقدير وزارية - NURAI 2026، وزارة التعليم العالي والبحث العلمي",
          },
          {
            tag: "معرض",
            date: "حزيران 2026",
            title:
              "الملتقى الطلابي الأول لمشاريع الذكاء الاصطناعي - شهادة مشاركة",
          },
          {
            tag: "تكريم",
            date: "أيار 2026",
            title:
              "المرتبة الثانية على القسم - قسم علم البيانات، كلية التميز، جامعة بغداد",
          },
          {
            tag: "هاكاثون",
            date: "آذار 2026",
            title:
              "المركز الثالث - هاكاثون علم البيانات (جامعة بغداد وجامعة الفارابي)",
          },
          {
            tag: "هاكاثون",
            date: "شباط 2026",
            title: "هاكاثون التميز 2026 - شهادة شكر وتقدير",
          },
          {
            tag: "معرض",
            date: "شباط 2026",
            title: "معرض النتاجات العلمية - كلية التميز، جامعة بغداد",
          },
        ],
      },
      certifications: {
        trainingLabel: "تدريب",
        certLabel: "شهادة",
        items: [
          {
            title: "البرنامج التدريبي الصيفي - Supercell Network",
            date: "آب 2026",
          },
          {
            title:
              "الطلاقة في الذكاء الاصطناعي: إطار العمل والأساسيات - أكاديمية Claude",
            date: "حزيران 2026",
          },
          {
            title:
              "أساسيات البرمجة بلغة بايثون - أكاديمية هواوي لتقنية المعلمات",
            date: "نيسان 2026",
          },
          {
            title: "أساسيات التعلم العميق - معهد NVIDIA للتعلم العميق",
            date: "آذار 2026",
          },
          {
            title: "مقدمة في مفاهيم البيانات - IBM SkillsBuild",
            date: "تشرين الثاني 2025",
          },
        ],
      },
      education: {
        degree: "بكالوريوس علوم في علم البيانات",
        institution: "جامعة بغداد، كلية التميز، قسم علم البيانات",
        period: "آب 2025 - آب 2029 (التخرج المتوقع)",
      },
      contact: {
        title: "تواصل معي",
        subtitle: "إذا عندك فكرة مشروع لا تتردد :)",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        location: "الموقع",
        sendEmail: "إرسال بريد إلكتروني",
      },
      footer: {
        rights: "جميع الحقوق محفوظة.",
      },
    },
  },
};
