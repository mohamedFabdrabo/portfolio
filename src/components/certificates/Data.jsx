import awsCertifiedDataEngineer from "../../assets/certificates/AWS Cerified data engineer.pdf";
import dataEngineeringEssentials from "../../assets/certificates/Data Engineering essentials 55h.pdf";
import dataEngineeringForBeginners from "../../assets/certificates/data engineering for begginners.pdf";
import dataLakeFundamentals from "../../assets/certificates/Data Lake Fundementals.pdf";
import dataLakeQuickGuide from "../../assets/certificates/Data Lake Quick guide intro.pdf";

export const certificatesData = [
  {
    id: 1,
    title: "AWS Certified Data Engineer",
    provider: "Amazon Web Services",
    type: "Certification",
    date: "2024",
    credentialUrl: awsCertifiedDataEngineer,
    skills: "AWS, Data Engineering, Cloud Architecture",
  },
  {
    id: 2,
    title: "Data Engineering Essentials",
    provider: "Professional Training",
    type: "Online Course",
    date: "2024",
    credentialUrl: dataEngineeringEssentials,
    skills: "ETL, Data Pipelines, Data Processing",
  },
  {
    id: 3,
    title: "Data Engineering for Beginners",
    provider: "Professional Training",
    type: "Online Course",
    date: "2024",
    credentialUrl: dataEngineeringForBeginners,
    skills: "Data Engineering Fundamentals, Best Practices",
  },
  {
    id: 4,
    title: "Data Lake Fundamentals",
    provider: "Professional Training",
    type: "Training",
    date: "2024",
    credentialUrl: dataLakeFundamentals,
    skills: "Data Lake Architecture, Data Management",
  },
  {
    id: 5,
    title: "Data Lake Quick Guide & Introduction",
    provider: "Professional Training",
    type: "Training",
    date: "2024",
    credentialUrl: dataLakeQuickGuide,
    skills: "Data Lake Concepts, Quick Start Guide",
  },
];
