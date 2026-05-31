import Work1 from "../../assets/portfolio/work1.jpg";
import Work2 from "../../assets/portfolio/work2.jpg";
import Work3 from "../../assets/portfolio/work3.jpg";
import Work4 from "../../assets/portfolio/work4.jpg";
import Work5 from "../../assets/portfolio/work5.jpg";

/*
 * HOW TO ADD / EDIT A PROJECT
 * ---------------------------
 * Each project supports the following fields:
 *
 *   image:      main cover image (required, used as the card thumbnail)
 *   images:     array of extra screenshots, e.g.
 *               images: [Screenshot1, Screenshot2, Screenshot3]
 *               (import the files at the top of this file like Work1/Work2)
 *   video:      a demo video URL. Supports:
 *                 - YouTube/Vimeo embed URL (e.g. "https://www.youtube.com/embed/XXXX")
 *                 - Direct .mp4 / .webm file URL or imported local mp4
 *   categories: ARRAY of category keys — a project can belong to several
 *               filters at once, and will appear under each matching tab.
 *               Keys must match entries in `projectsNav` below.
 *
 * Available category keys (must match `projectsNav` below):
 *   "machine learning", "deep learning", "computer vision",
 *   "full stack", "backend", "databases", "security",
 *   "java", "python"
 *
 * `images` and `video` are optional — leave them empty and the card
 * just shows the main image + GitHub link.
 */
export const projectsData = [
  {
    id: 1,
    image: Work1,
    images: [], // add extra screenshots here later
    video: "",  // add a YouTube embed URL or .mp4 link here later
    title: "Brain Hemorrhage Detection",
    description:
      "Bachelor thesis (Grade A+). Deep learning pipeline that detects brain hemorrhages in CT images using YOLOv5 in PyTorch, with OpenCV preprocessing for grayscale conversion and image normalization. Wrapped in a Flask web app for interactive inference.",
    tech: "Python · PyTorch · YOLOv5 · OpenCV · Flask · TensorFlow · Scikit-learn",
    github:
      "https://github.com/mohamedFabdrabo/flask-app-brain-hemorrhage",
    year: "2021 - 2022",
    categories: ["deep learning", "computer vision", "machine learning", "python"],
  },
  {
    id: 2,
    image: Work2,
    images: [],
    video: "",
    title: "Customer Churn Prediction",
    description:
      "End-to-end machine learning pipeline on a telecom dataset of 7,000+ customers. Compares Logistic Regression, Random Forest and XGBoost classifiers with hyperparameter tuning, and surfaces churn drivers through feature-importance analysis.",
    tech: "Python · Scikit-learn · XGBoost · Pandas · NumPy · Matplotlib",
    github: "https://github.com/mohamedFabdrabo/Customer-Churn-Prediction",
    year: "2021",
    categories: ["machine learning", "python"],
  },
  {
    id: 3,
    image: Work3,
    images: [],
    video: "",
    title: "Contour Detection & Image Segmentation",
    description:
      "Research-style project comparing classical computer vision (Sobel/Canny edge detection and morphological operations) against PyTorch encoder–decoder networks for semantic segmentation, with ablation studies on both approaches.",
    tech: "Python · PyTorch · OpenCV · Scikit-image · NumPy",
    github:
      "https://github.com/mohamedFabdrabo/contour_detection_and_image_segmentation",
    year: "2022",
    categories: ["computer vision", "deep learning", "machine learning", "python"],
  },
  {
    id: 4,
    image: Work4,
    images: [],
    video: "",
    title: "Advanced Computer Lab — Staff Management System",
    description:
      "Course project built as two separate repositories: a Node.js/Express backend exposing REST APIs over MongoDB with JWT-based role access for 5 user roles, and a React single-page app for HR workflows (attendance, leave requests, course assignments, schedules). I additionally wrote a Docker wrapper that pulls both repos and runs them together with a single command so visitors can try the app without manual setup.",
    tech: "Node.js · Express · React · MongoDB · Docker · JWT · REST APIs",
    github:
      "https://github.com/mohamedFabdrabo/AdvancedComputerLab-DockerWrapper",
    year: "2022",
    categories: ["full stack", "backend"],
  },
  {
    id: 5,
    image: Work5,
    images: [],
    video: "",
    title: "Lightweight Database Engine",
    description:
      "Java database engine built from scratch: B+ tree indexing with automatic node balancing for O(log n) lookups, R-tree spatial indexing for 2D range and intersection queries, and a paged storage layer with clustering keys and serialization to disk.",
    tech: "Java · B+ Trees · R-Trees · Storage Engine",
    github: "https://github.com/eslamHegazy/Database_Engine",
    year: "2020",
    categories: ["databases", "backend", "java"],
  },
  {
    id: 6,
    image: Work1,
    images: [],
    video: "",
    title: "EHR Blockchain Simulation",
    description:
      "Simulation of an electronic health records blockchain in Java: configurable proof-of-work consensus, transaction hashing and immutable block chaining, AES-256 encryption for patient records, and credential-based role access for patients and providers.",
    tech: "Java · Blockchain · AES-256 · Cryptography",
    github: "https://github.com/NourGhazal/EHR_BlockChain_Simulation",
    year: "2021",
    categories: ["security", "backend", "java"],
  },
];

// Filter categories — clicking one of these shows every project whose
// `categories` array contains the same key.
export const projectsNav = [
  { name: "all" },
  { name: "machine learning" },
  { name: "deep learning" },
  { name: "computer vision" },
  { name: "full stack" },
  { name: "backend" },
  { name: "databases" },
  { name: "security" },
  { name: "java" },
  { name: "python" },
];
