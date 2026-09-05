const workEx = [
  {
    orgName: "HeyBubba.ai",
    position: "Software Development Engineer - 2 (Full Stack)",
    duration: "Jun 2026 - Present",
    description: [
      "Built and evolved a React Native mobile application spanning web containers and native iOS/Android components,owning features across architecture, native integrations, reliability, UX and release cycles.",
      "• Reduced battery consumption 35% by integrating VAD into the foreground wake-word service; later migrated ONNX inference to LiteRT , reducing battery consumption and bundle size by approximately 50% while maintaining backward compatibility. Built a full fledge voice only wake service which launches the voice socket and floating interactions.",
      "Reworked the iOS audio pipeline around a shared, demand-driven audio engine coordinating wake-word detection, recording, and playback, with resilient state management and recovery from race conditions and audio interruptions.",
      "Built native Android notification flows using FCM and full-screen intents for time-sensitive driver alerts; resolved deep-linking and WebView issues and expanded the application to iPad",
      "Established and maintained Expo remote-build infrastructure and mobile CI/CD workflows using Expo and Bitrise.",
      "Worked on the electron based desktop app Loadsurf⁠ app, maintained and developed features and release pipelines. Took complete ownership of all the native releases across Play console and App store connect",
    ],
  },
  {
    orgName: "HeyBubba.ai",
    position: "Software Development Engineer - 1 (Full Stack)",
    duration: "Nov 2025 - June 2026",
    description: [
      "Built full stack driver-load smart recommendation engine as part of new project HeyBubba.ai",
      "Migrated all the recommendation algorithm to a Google Operational Research Tools",
      "Implemented Multi-Load Matching via Pickup-and-Delivery Problem with Time Windows (PDPTW), classic NP hard problem",
      "Introduced data set pruning using K-Means++ geographical clustering of trucks and loads in order to optimize processing and API response by 3x",
      "Used Hungarian algorithm with weighted scoring technique to find best load-truck matches",
      "Used SciPy and NumPy for optimized graph-based calculations on bipartite matching (50+ drivers and loads).",
      "Built bid management Kanban tool for carriers using Gemini-Flash to parse XLSX files and extract structured data.",
      "Wrote APIs for updating statuses and managing lane-level bids.",
      "Tech: React.js, FastAPI, Google OR tools",
    ],
  },

  {
    orgName: "TruckX Inc",
    position: "Software Development Engineer - 1",
    duration: "June 2024 - Nov 2025",
    description: [
      "Worked on the main customer-facing Driver Logbook App using React Native framework.",
      "Extensively used Redux-Saga, Axios, Async-Storage, RN-SQLite database, and RN-FileSystem.",
      "Exposed to the whole build-to-release pipelines for both Google Play Console and App Store Connect.",
      "Integrated self-hosted Microsoft's open source code-push-standalone server in the app.",
      "Worked with native modules for IoT integrations in iOS for BLE devices.",
      "Contributed to a private NPM package involving core business logic for HOS computations to comply with FMCSA regulations.",
      "Responsible for the complete UI redesign of the app, ensuring pixel-perfect implementation with the design.",
    ],
  },
  {
    orgName: "TruckX Inc",
    position: "Mobile Application Developer Intern",
    duration: "May 2023 - June 2024",
    description: [
      "Worked on the Fleet Management App using React Native framework.",
      "Implemented localization in the app using Context API with support for over 15 languages.",
      "Implemented Strategy Pattern for dynamically switching between multiple countries.",
      "Served as an on-call engineer directly reporting to the Customer Support Team.",
    ],
  },
  {
    orgName: "CabRiver",
    position: "Mobile Application Developer Intern",
    duration: "Dec 2022 - Jan 2023",
    description: [
      "Built an app from scratch with Flutter to develop a cross-platform Ola/Uber-like service for boats in Varanasi.",
      "Used Pushy Cloud messaging service for push notifications, with 2000+ lines of Dart code.",
      "Implemented authentication via phone OTP protocol, state management using Provider, geocode autocomplete, polyline, and reverse geocoding.",
      "Used Firebase RTDB as the backend database, with data transfer via REST API.",
    ],
  },
];

export default workEx;
