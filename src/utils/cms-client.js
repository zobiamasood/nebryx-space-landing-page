// src/utils/cms-client.js
// CMS Configuration - Choose one approach based on your needs

// ============================================
// OPTION 1: SANITY.IO (Recommended)
// ============================================
// Installation: npm install next-sanity @sanity/client

/*
import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: process.env.VITE_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true,
  token: process.env.VITE_SANITY_TOKEN,
});

// Query examples:
const HERO_QUERY = `*[_type == "hero"][0]`;
const SERVICES_QUERY = `*[_type == "service"] | order(order asc)`;
const PORTFOLIO_QUERY = `*[_type == "portfolioItem"] | order(order asc)`;
const PRICING_QUERY = `*[_type == "pricingTier"] | order(order asc)`;

export async function fetchFromSanity(query) {
  try {
    const data = await sanityClient.fetch(query);
    return data;
  } catch (error) {
    console.error('Sanity fetch error:', error);
    return null;
  }
}

// Usage in components:
// const heroData = await fetchFromSanity(HERO_QUERY);
*/

// ============================================
// OPTION 2: FIREBASE (Simpler, No Backend)
// ============================================
// Installation: npm install firebase

/*
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VITE_FIREBASE_DATABASE_URL,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export async function fetchFromFirebase(path) {
  try {
    const snapshot = await get(ref(database, path));
    return snapshot.val();
  } catch (error) {
    console.error('Firebase fetch error:', error);
    return null;
  }
}

// Usage:
// const services = await fetchFromFirebase('services');
// const portfolio = await fetchFromFirebase('portfolio');
*/

// ============================================
// OPTION 3: SIMPLE JSON FILE + FETCH
// ============================================
// (For MVP/testing - easiest to start with)

export async function fetchContent(contentPath) {
  try {
    const response = await fetch(`/data/${contentPath}.json`);
    if (!response.ok) throw new Error('Failed to fetch');
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${contentPath}:`, error);
    return null;
  }
}

// Usage:
// const heroData = await fetchContent('hero');
// const services = await fetchContent('services');

// ============================================
// ENVIRONMENT VARIABLES (.env.local)
// ============================================
/*
// For Sanity:
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_TOKEN=your_token

// For Firebase:
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_DATABASE_URL=your_database_url
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
*/

// ============================================
// CONTENT STRUCTURE SCHEMA (for reference)
// ============================================
/*
HERO:
{
  title: string
  subtitle: string
  cta1: { text, link }
  cta2: { text, link }
  backgroundImage: imageUrl
  backgroundVideo: videoUrl
}

SERVICES:
{
  id: string
  icon: string (emoji or SVG)
  title: string
  description: string
  order: number
}

PORTFOLIO:
{
  id: string
  title: string
  category: string
  description: string
  image: imageUrl
  tags: [string]
  link: string
  order: number
}

PRICING:
{
  id: string
  name: string
  price: string
  features: [string]
  cta: string
  featured: boolean
  order: number
}

CONTACT:
{
  email: string
  phone: string
  address: string
  social: {
    twitter: url
    linkedin: url
    github: url
  }
}
*/
