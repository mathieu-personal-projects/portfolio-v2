import { createContext, useContext, useState, type ReactNode } from "react";

export type Language = "en" | "fr";

const translations = {
  en: {
    nav: {
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      skills: "Skills",
    },
    hero: {
      status: "Open to opportunities",
      title: "Data Engineer",
      bio1: "Currently working as a Data Engineer intern at Crédit Agricole Assurances Solutions, my thriving passion and curiosity for Big Data, Blockchain/Web3, AI & Cloud infrastructures motivate me to develop my skills and explore new technologies.",
      bio2: "Eager to push further and materialise my skills, I'm willing to get certifications (GCP, AWS, TOGAF, Oracle/Sun Microsystems…) and learn continuously throughout my career.",
      getInTouch: "Get in touch",
      resume: "My Resume (WIP)",
      stats: [
        { value: "2+", label: "Years experience" },
        { value: "2nd", label: "Place Hackathon" },
        { value: "2", label: "Certifications" },
        { value: "5+", label: "Projects" },
      ],
    },
    experience: {
      title: "Experience",
      subtitle: "Professional career",
      items: [
        {
          company: "Crédit Agricole Assurances",
          role: "Data Engineer · Apprentice",
          period: "Sep 2025 – Present",
          location: "Paris",
          bullets: [
            "Featured new management rules on Java Spring Boot Kafka Streams & ksqlDB Big Data pipelines.",
            "Upgraded an API handling insurance claims from Spring Boot 3 to Spring Boot 4 (Spring Security, K8s, SVC, Composites).",
            "Refactored 8+ projects from legacy SQL to clean Spark sessions, with Jenkins pipelines and code coverage up to ≥ 75%.",
            "Updated technical documentation and coached colleagues on Git workflows and code quality improvements.",
            "Deployed and assisted deployments (SAFe context) on all environments using Artifactory, Docker, K8s and ArgoCD.",
          ],
        },
        {
          company: "Caisse Primaire d'Assurance Maladie (CPAM)",
          role: "Application Designer & Developer · Apprentice",
          period: "Sep 2024 – Jul 2025",
          location: "Créteil",
          bullets: [
            "Rebuilt a local IT asset management tool in PHP, used by secretaries and technicians to streamline administrative processes.",
            "Designed and developed a Symfony web platform supporting the monitoring of 800k beneficiaries of the MisAS health aid campaigns.",
            "Introduced a DevOps culture to bring the department up to modern standards.",
          ],
        },
        {
          company: "Société Générale",
          role: "DevOps Hybrid Cloud · Trainee",
          period: "Apr 2024 – Jun 2024",
          location: "Val-de-Fontenay",
          bullets: [
            "Discovered hybrid-cloud network and architecture, DevOps practices and agility.",
            "Built a Python script to interrogate and report AWS Public Cloud transit gateways.",
          ],
        },
        {
          company: "Assistance Publique des Hopitaux de Paris (APHP)",
          role: "Administrative Assistant · Trainee",
          period: "Jun 2024 – Jul 2024",
          location: "Boulogne Billancourt",
          bullets: [
            "Regular and emergency patient admissions",
            "Helped patients with their records",
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Personal and academic work",
      items: [
        {
          tagline: "Self-hosted Cloud",
          description:
            "Self-hosted cloud on a repurposed Dell Latitude and a Raspberry Pi. Includes Sentra, an API to remotely administrate the server through SSH tunnels, and a WireGuard VPN to bounce to the server's local network.",
        },
        {
          tagline: "Military Topology & Streaming",
          description:
            "Military topology interactive map built on large GeoJSON datasets. ETL + ELT streaming pipeline ingesting raw data into PostGIS, building SQL analytical tables, publishing replayed events to Kafka and serving a Grafana dashboard.",
        },
        {
          tagline: "MLOps & Cloud Computing",
          description:
            "MLOps ecosystem automating the machine learning lifecycle through local cloud computing. Orchestrated data retrieval, model training and evaluation through serverless functions in a fully containerized environment.",
        },
        {
          tagline: "Carbon Emissions Pipeline",
          description:
            "ELT pipeline ingesting global carbon emissions: extraction into B2 buckets, cleaning/transformation and loading into Google Cloud BigQuery. Centralized secrets management with Aiven Valkey.",
        },
        {
          tagline: "Shared Housing Platform",
          description:
            "Shared-housing management web platform: full design and implementation. RESTful API on a custom Python HTTP server, React frontend, OWASP-compliant security with RBAC, ANSSI-grade passwords, and GDPR compliance.",
        },
      ],
    },
    education: {
      title: "Education",
      subtitle: "Academic background",
      certifications: "Certifications",
      items: [
        {
          school: "ESILV",
          degree: "MSc Data Engineering & AI",
          period: "Sep 2025 – Aug 2027",
          location: "Nanterre",
          coursework:
            "Relevant coursework : Advanced OOP (Java, Spring Boot), ETL & Pipeline Orchestration (Kafka, Airflow), DevOps (Ansible, Terraform, AWS, K8s, Docker), Databases (Oracle), Machine Learning (Scikit-learn, TensorFlow).",
        },
        {
          school: "Efrei Panthéon-Assas",
          degree: "BSc Développement & Data",
          period: "Sep 2022 – Aug 2025",
          location: "Villejuif",
          coursework:
            "Relevant coursework : OOP (Java, Spring Boot), Web Development (JavaScript, PHP, APIs), Cybersecurity (OWASP, CVEs, UML), Databases (PostgreSQL, MySQL, MongoDB), Linux Systems & Kernel.",
        },
        {
          school: "Lycée Alexandre Dumas",
          degree: "Baccalauréat NSI, Physics-Chemistry & Complementary Maths",
          period: "Sep 2019 – Jun 2022",
          location: "St-Cloud",
          coursework:
            "Relevant coursework : Graph Theory, Data Structures, Networking, Algorithms, Thermodynamics, Waves & Signals.",
        },
      ],
    },
    achievements: {
      title: "Research & Achievements",
      subtitle: "Publications, challenges, and competitions",
      paper: "Paper",
      paperDesc:
        "Demo paper addressing: “To what extent can a dynamic model-selection mechanism, guided by a Region of Competence and Dynamic Weight Selection, improve anomaly detection in heterogeneous microservice systems compared with single static detectors?”",
      hackathon: "Hackathon",
      hackathonDesc:
        "Placed 2nd among 160+ participants. Built agents that modified functional documentation based on developers' Jira ticket states, created dashboards for managers, and proposed documentation improvements.",
      puzzle: "Puzzle",
      puzzleDesc:
        "“Andy's Afternoon Amble” puzzle by modelling the random walk as a Markov chain on distance from the starting tile. I set up the resulting system of linear equations and solved it exactly in Java using a custom BigInteger fraction class and Gaussian elimination, which gave an exact answer of 11/20",
    },
    skills: {
      title: "Skills & Interests",
      subtitle: "Technologies and tools",
      categories: [
        { label: "Languages" },
        { label: "Technologies" },
        { label: "Frameworks" },
        { label: "Concepts" },
        { label: "AI Tools" },
        { label: "Spoken Languages" },
        { label: "Interests" },
        { label: "Technological watch" },
      ],
    },
    footer: {
      contact: "06 ── Contact",
      title: "Let's connect",
      subtitle:
        "Interested in collaborating or have a question? Feel free to reach out through any of these platforms.",
      getInTouch: "Get in touch",
      location: "Garches, France",
    },
  },
  fr: {
    nav: {
      experience: "Expérience",
      projects: "Projets",
      education: "Formation",
      skills: "Compétences",
    },
    hero: {
      status: "Ouvert aux opportunités",
      title: "Ingénieur Data",
      bio1: "Actuellement en alternance en tant qu'Ingénieur Data chez Crédit Agricole Assurances Solutions, ma passion débordante et ma curiosité pour le Big Data, la Blockchain/Web3, l'IA et les infrastructures Cloud me poussent à développer mes compétences et à explorer de nouvelles technologies.",
      bio2: "Désireux d'aller plus loin et de concrétiser mes compétences, je souhaite obtenir des certifications (GCP, AWS, TOGAF, Oracle/Sun Microsystems…) et apprendre en continu tout au long de ma carrière.",
      getInTouch: "Me contacter",
      resume: "Mon CV (WIP)",
      stats: [
        { value: "2+", label: "Ans d'expérience" },
        { value: "2e", label: "Place Hackathon" },
        { value: "2", label: "Certifications" },
        { value: "5+", label: "Projets" },
      ],
    },
    experience: {
      title: "Expérience",
      subtitle: "Parcours professionnel",
      items: [
        {
          company: "Crédit Agricole Assurances",
          role: "Ingénieur Data · Alternant",
          period: "Sep 2025 – Présent",
          location: "Paris",
          bullets: [
            "Nouvelles règles de gestion sur des pipelines Big Data Java Spring Boot Kafka Streams & ksqlDB.",
            "Montée de version d'une API de gestion des sinistres de Spring Boot 3 vers Spring Boot 4 (Spring Security, K8s, SVC, Composites).",
            "Refonte de 8+ projets de SQL legacy vers des sessions Spark propres, avec pipelines Jenkins et couverture de code ≥ 75%.",
            "Mise à jour de la documentation technique et accompagnement des collègues sur les workflows Git et l'amélioration de la qualité du code.",
            "Déploiements et assistance aux déploiements (contexte SAFe) sur tous les environnements avec Artifactory, Docker, K8s et ArgoCD.",
          ],
        },
        {
          company: "Caisse Primaire d'Assurance Maladie (CPAM)",
          role: "Concepteur Développeur d'Applications · Alternant",
          period: "Sep 2024 – Juil 2025",
          location: "Créteil",
          bullets: [
            "Refonte d'un outil local de gestion de parc informatique en PHP, utilisé par les secrétaires et techniciens pour fluidifier les processus administratifs.",
            "Conception et développement d'une plateforme web Symfony pour le suivi de 800 000 bénéficiaires des campagnes d'aide à la santé MisAS.",
            "Introduction d'une culture DevOps pour amener le service aux standards modernes.",
          ],
        },
        {
          company: "Société Générale",
          role: "DevOps Cloud Hybride · Stagiaire",
          period: "Avr 2024 – Juin 2024",
          location: "Val-de-Fontenay",
          bullets: [
            "Découverte du réseau et de l'architecture hybride-cloud, des pratiques DevOps et de l'agilité.",
            "Création d'un script Python pour interroger et rapporter les transit gateways AWS Public Cloud.",
          ],
        },
        {
          company: "Assistance Publique des Hôpitaux de Paris (APHP)",
          role: "Assistant Administratif · Stagiaire",
          period: "Juin 2024 – Juil 2024",
          location: "Boulogne Billancourt",
          bullets: [
            "Admissions régulières et d'urgence des patients",
            "Aide aux patients dans leurs démarches",
          ],
        },
      ],
    },
    projects: {
      title: "Projets",
      subtitle: "Travaux personnels et académiques",
      items: [
        {
          tagline: "Cloud Auto-hébergé",
          description:
            "Cloud auto-hébergé sur un Dell Latitude reconditionné et un Raspberry Pi. Inclut Sentra, une API pour administrer le serveur à distance via des tunnels SSH, et un VPN WireGuard pour rebondir sur le réseau local du serveur.",
        },
        {
          tagline: "Topologie Militaire & Streaming",
          description:
            "Carte interactive de topologie militaire construite sur de grands datasets GeoJSON. Pipeline ETL + ELT ingérant des données brutes dans PostGIS, construisant des tables analytiques SQL, publiant des événements rejoués sur Kafka et servant un dashboard Grafana.",
        },
        {
          tagline: "MLOps & Cloud Computing",
          description:
            "Écosystème MLOps automatisant le cycle de vie du machine learning via du cloud computing local. Orchestration de la récupération de données, de l'entraînement et de l'évaluation de modèles via des fonctions serverless dans un environnement entièrement conteneurisé.",
        },
        {
          tagline: "Pipeline d'Émissions Carbone",
          description:
            "Pipeline ELT ingérant les émissions carbone mondiales : extraction dans des buckets B2, nettoyage/transformation et chargement dans Google Cloud BigQuery. Gestion centralisée des secrets avec Aiven Valkey.",
        },
        {
          tagline: "Plateforme de Colocation",
          description:
            "Plateforme web de gestion de colocation : conception et implémentation complètes. API RESTful sur un serveur HTTP Python custom, frontend React, sécurité conforme OWASP avec RBAC, mots de passe niveau ANSSI et conformité RGPD.",
        },
      ],
    },
    education: {
      title: "Formation",
      subtitle: "Parcours académique",
      certifications: "Certifications",
      items: [
        {
          school: "ESILV",
          degree: "MSc Ingénierie de la Donnée & IA",
          period: "Sep 2025 – Août 2027",
          location: "Nanterre",
          coursework:
            "Cours pertinents : POO avancée (Java, Spring Boot), Orchestration de pipelines ETL (Kafka, Airflow), DevOps (Ansible, Terraform, AWS, K8s, Docker), Bases de données (Oracle), Machine Learning (Scikit-learn, TensorFlow).",
        },
        {
          school: "Efrei Panthéon-Assas",
          degree: "BSc Développement & Data",
          period: "Sep 2022 – Août 2025",
          location: "Villejuif",
          coursework:
            "Cours pertinents : POO (Java, Spring Boot), Développement Web (JavaScript, PHP, APIs), Cybersécurité (OWASP, CVEs, UML), Bases de données (PostgreSQL, MySQL, MongoDB), Systèmes Linux & Noyau.",
        },
        {
          school: "Lycée Alexandre Dumas",
          degree: "Baccalauréat NSI, Physique-Chimie & Maths Complémentaires",
          period: "Sep 2019 – Juin 2022",
          location: "St-Cloud",
          coursework:
            "Cours pertinents : Théorie des graphes, Structures de données, Réseaux, Algorithmes, Thermodynamique, Ondes & Signaux.",
        },
      ],
    },
    achievements: {
      title: "Recherche & Réalisations",
      subtitle: "Publications, défis et compétitions",
      paper: "Article",
      paperDesc:
        "Article de démonstration répondant à : « Dans quelle mesure un mécanisme dynamique de sélection de modèles, guidé par une Région de Compétence et une Sélection Dynamique de Poids, peut-il améliorer la détection d'anomalies dans des systèmes microservices hétérogènes par rapport à des détecteurs statiques uniques ? »",
      hackathon: "Hackathon",
      hackathonDesc:
        "Classé 2e parmi plus de 160 participants. Création d'agents modifiant la documentation fonctionnelle en fonction des états des tickets Jira des développeurs, création de tableaux de bord pour les managers et proposition d'améliorations de la documentation.",
      puzzle: "Puzzle",
      puzzleDesc:
        "Puzzle « Andy's Afternoon Amble » résolu en modélisant la marche aléatoire comme une chaîne de Markov sur la distance depuis la tuile de départ. J'ai mis en place le système d'équations linéaires résultant et l'ai résolu exactement en Java avec une classe de fractions BigInteger custom et l'élimination de Gauss, ce qui a donné une réponse exacte de 11/20",
    },
    skills: {
      title: "Compétences & Intérêts",
      subtitle: "Technologies et outils",
      categories: [
        { label: "Langages" },
        { label: "Technologies" },
        { label: "Frameworks" },
        { label: "Concepts" },
        { label: "Outils IA" },
        { label: "Langues parlées" },
        { label: "Centres d'intérêt" },
        { label: "Veille technologique" },
      ],
    },
    footer: {
      contact: "06 ── Contact",
      title: "Restons en contact",
      subtitle:
        "Intéressé par une collaboration ou avez une question ? N'hésitez pas à me contacter via l'une de ces plateformes.",
      getInTouch: "Me contacter",
      location: "Garches, France",
    },
  },
};

export type Translations = (typeof translations)["en"];

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

const STORAGE_KEY = "portfolio-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "fr") return stored;
    } catch {}
    return "en";
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
