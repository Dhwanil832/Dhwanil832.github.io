// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Complete list of publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research projects and demos.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "PhD application CV — Dhwanil R. Chauhan. Graduate Researcher at CIVS, Purdue University Northwest. Multimodal AI · Audio-Visual Learning · Multi-Agent Systems · Industrial AI Safety.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-our-paper-development-of-trialing-image-detection-for-a-melt-shop-safety-tool-has-been-accepted-at-aistech-2026-multi-camera-spatial-reasoning-system-for-real-time-dynamic-safety-zone-reconfiguration-in-active-industrial-environments",
          title: 'Our paper Development of Trialing Image Detection for a Melt Shop Safety Tool...',
          description: "",
          section: "News",},{id: "news-our-paper-visual-geometry-grounded-novel-view-acoustic-synthesis-has-been-accepted-at-the-cvpr-workshop-2026-first-unified-framework-for-novel-view-acoustic-synthesis-bypassing-explicit-3d-reconstruction-via-feed-forward-visual-geometry-grounding",
          title: 'Our paper Visual Geometry Grounded Novel-View Acoustic Synthesis has been accepted at the...',
          description: "",
          section: "News",},{id: "projects-novel-view-acoustic-synthesis",
          title: 'Novel-View Acoustic Synthesis',
          description: "Feed-forward framework for viewpoint-accurate binaural audio synthesis without 3D reconstruction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-dynamic-safety-zone-monitoring",
          title: 'Dynamic Safety Zone Monitoring',
          description: "Multi-camera spatial reasoning for real-time hazard boundary reconfiguration in active melt shop environments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-ai-assisted-accident-investigation",
          title: 'AI-Assisted Accident Investigation',
          description: "Conversational AI system for structured industrial safety incident reporting — from monolithic pipeline to multi-agent architecture",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-vlm-robustness-benchmark",
          title: 'VLM Robustness Benchmark',
          description: "Systematic evaluation of 20 vision-language models under simultaneous visual and linguistic degradation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/dhwanil_cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%61%75%68%61%35%36@%70%75%72%64%75%65.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Dhwanil832", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/dhwanil-chauhan", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=rGG7kXMAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0000-7481-622X", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
