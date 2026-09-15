# 💾 CMS SETUP & DYNAMIC CONTENT GUIDE

## 🎯 Quick Decision Matrix

| Feature | Sanity | Firebase | Custom JSON | Strapi |
|---------|--------|----------|------------|--------|
| **Setup Time** | 20 min | 15 min | 5 min | 1 hour |
| **Cost** | Free tier ✓ | Free tier ✓ | Free ✓ | Free (self-hosted) |
| **Best For** | This project ⭐ | Real-time apps | MVP/Testing | Enterprise |
| **Learning Curve** | Medium | Easy | Very Easy | Hard |
| **Content Modeling** | Excellent | Good | Limited | Excellent |
| **Image Optimization** | Built-in | CDN available | Manual | Manual |
| **Admin UI** | Beautiful | Firebase console | Manual JSON | Full CMS UI |
| **Scalability** | Excellent | Good | Limited | Excellent |

---

## 🏆 RECOMMENDED: Sanity.io

**Why Sanity for your space website?**
- Purpose-built for headless CMS
- Excellent React integration
- Real-time preview while editing
- Built-in image optimization
- Beautiful, intuitive admin interface
- Perfect for your content types
- Free tier is perfect for this project

### Installation & Setup

```bash
# Step 1: Create Sanity project
npm install -g @sanity/cli
sanity init

# Step 2: Follow the prompts
# - Project name: "space-website"
# - Use default dataset configuration
# - Dataset visibility: "private"
# - Project template: "Blog (recommended)"

# Step 3: Install React client
npm install next-sanity @sanity/client @sanity/image-url
```

### Environment Variables (.env.local)

```env
VITE_SANITY_PROJECT_ID=your_project_id_here
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
VITE_SANITY_USE_CDN=true
VITE_SANITY_TOKEN=your_token_here
```

### Sanity Schema (Content Model)

Create `schemas/hero.js`:

```javascript
export default {
  name: 'hero',
  type: 'document',
  title: 'Hero Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
    },
    {
      name: 'backgroundVideo',
      type: 'file',
      title: 'Background Video (optional)',
      options: {
        accept: 'video/*'
      }
    },
    {
      name: 'cta1',
      type: 'object',
      title: 'Primary CTA',
      fields: [
        { name: 'text', type: 'string' },
        { name: 'link', type: 'string' }
      ]
    },
    {
      name: 'cta2',
      type: 'object',
      title: 'Secondary CTA',
      fields: [
        { name: 'text', type: 'string' },
        { name: 'link', type: 'string' }
      ]
    }
  ]
}
```

Create `schemas/service.js`:

```javascript
export default {
  name: 'service',
  type: 'document',
  title: 'Service',
  fields: [
    {
      name: 'icon',
      type: 'string',
      title: 'Icon (emoji or URL)',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Service Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Display Order',
    }
  ],
  preview: {
    select: {
      title: 'title',
      icon: 'icon'
    },
    prepare({ title, icon }) {
      return {
        title: title,
        subtitle: icon
      }
    }
  }
}
```

Create `schemas/portfolioItem.js`:

```javascript
export default {
  name: 'portfolioItem',
  type: 'document',
  title: 'Portfolio Item',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Project Title',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Web Development', value: 'web' },
          { title: 'AI Solutions', value: 'ai' },
          { title: 'E-commerce', value: 'ecommerce' },
          { title: 'Mobile App', value: 'mobile' },
        ]
      }
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Project Image',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Technologies',
      of: [{ type: 'string' }]
    },
    {
      name: 'link',
      type: 'url',
      title: 'Project Link',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Display Order',
    }
  ]
}
```

Create `schemas/pricingTier.js`:

```javascript
export default {
  name: 'pricingTier',
  type: 'document',
  title: 'Pricing Tier',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Plan Name',
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price',
      description: 'e.g., "999" or "Custom"'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [{ type: 'string' }]
    },
    {
      name: 'cta',
      type: 'string',
      title: 'CTA Button Text',
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured Plan?',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Display Order',
    }
  ]
}
```

### React Component Integration

Create `src/utils/sanity-client.js`:

```javascript
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
  useCdn: import.meta.env.VITE_SANITY_USE_CDN === 'true',
  token: import.meta.env.VITE_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};

// Query functions
export async function getHero() {
  const query = '*[_type == "hero"][0]';
  return await client.fetch(query);
}

export async function getServices() {
  const query = '*[_type == "service"] | order(order asc)';
  return await client.fetch(query);
}

export async function getPortfolioItems() {
  const query = '*[_type == "portfolioItem"] | order(order asc)';
  return await client.fetch(query);
}

export async function getPricingTiers() {
  const query = '*[_type == "pricingTier"] | order(order asc)';
  return await client.fetch(query);
}
```

Create a Hook `src/hooks/useSanityData.js`:

```javascript
import { useState, useEffect } from 'react';
import { client } from '../utils/sanity-client';

export function useSanityData(query) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .fetch(query)
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Sanity fetch error:', err);
        setError(err);
        setLoading(false);
      });
  }, [query]);

  return { data, loading, error };
}
```

### Usage in Components

```jsx
import { useSanityData } from '../hooks/useSanityData';
import { urlFor } from '../utils/sanity-client';

export default function ServicesSection() {
  const { data: services, loading } = useSanityData(
    '*[_type == "service"] | order(order asc)'
  );

  if (loading) return <div>Loading services...</div>;

  return (
    <section>
      {services?.map((service) => (
        <div key={service._id}>
          <span>{service.icon}</span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </section>
  );
}
```

---

## 🔥 ALTERNATIVE: Firebase (Fastest Setup)

**Best for**: Real-time updates, no backend needed

### Setup

```bash
npm install firebase

# Create project at firebase.google.com
# Get your config credentials
```

Create `src/utils/firebase-client.js`:

```javascript
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

export { app, database, storage };

export async function fetchData(path) {
  try {
    const snapshot = await get(ref(database, path));
    return snapshot.val();
  } catch (error) {
    console.error(`Error fetching ${path}:`, error);
    return null;
  }
}
```

### Hook for Firebase

```javascript
export function useFirebaseData(path) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(path).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, [path]);

  return { data, loading };
}
```

---

## 📄 SIMPLE OPTION: JSON Files (MVP)

**Best for**: Quick prototyping, no backend setup

### Create `public/data/` folder structure:

```
public/data/
├── hero.json
├── services.json
├── portfolio.json
├── pricing.json
└── contact.json
```

### `public/data/services.json`:

```json
{
  "services": [
    {
      "id": "1",
      "icon": "🚀",
      "title": "Web Development",
      "description": "Custom React apps and modern web solutions built for speed and scalability."
    },
    {
      "id": "2",
      "icon": "🤖",
      "title": "AI Solutions",
      "description": "Machine learning models and AI automation to power your business."
    }
  ]
}
```

### Hook for JSON

```javascript
export function useFetchJSON(fileName) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/data/${fileName}.json`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [fileName]);

  return { data, loading };
}
```

---

## 🎛️ ADMIN DASHBOARD (Optional - Phase 3)

### Simple Admin Setup with Firebase + React

```jsx
// src/pages/AdminDashboard.jsx
import React, { useState } from 'react';
import { database } from '../utils/firebase-client';
import { ref, update } from 'firebase/database';

export default function AdminDashboard() {
  const [services, setServices] = useState([]);

  const handleUpdateService = async (id, updatedData) => {
    try {
      await update(ref(database, `services/${id}`), updatedData);
      alert('Updated successfully!');
    } catch (error) {
      console.error('Error updating:', error);
    }
  };

  return (
    <div className="min-h-screen bg-space-dark p-8">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8">Admin Dashboard</h1>
      
      {/* Services Manager */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
        {/* Add service form */}
        {/* List services with edit capability */}
      </div>

      {/* Portfolio Manager */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Portfolio</h2>
        {/* Add portfolio form */}
      </div>

      {/* Pricing Manager */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Pricing</h2>
        {/* Pricing editor */}
      </div>
    </div>
  );
}
```

---

## 🚀 DEPLOYMENT

### Sanity + Vercel (Recommended)

```bash
# Deploy to Vercel
vercel
```

### Firebase + Netlify

```bash
# Deploy to Netlify
netlify deploy --prod
```

---

## 📊 COMPARISON SUMMARY

### For Your Project, I Recommend:

**Phase 1 (MVP)**: Use JSON files + fetch
- Fastest to implement
- Works immediately
- Good for testing design

**Phase 2 (Production)**: Switch to Sanity.io
- Professional CMS
- Admin dashboard
- Content management UI
- Scales well

**Phase 3 (Optional)**: Build custom admin dashboard
- Full control
- Custom workflows
- Enterprise features

---

## ⚙️ SETUP CHECKLIST

### For Sanity.io:
- [ ] Create Sanity account
- [ ] Initialize Sanity project
- [ ] Create schemas (hero, service, portfolio, pricing)
- [ ] Add environment variables
- [ ] Install React client library
- [ ] Create custom hooks
- [ ] Update components to fetch from Sanity
- [ ] Test in development
- [ ] Deploy to production

### For Firebase:
- [ ] Create Firebase project
- [ ] Enable Realtime Database
- [ ] Enable Storage
- [ ] Get credentials
- [ ] Add environment variables
- [ ] Install Firebase SDK
- [ ] Create custom hooks
- [ ] Update components
- [ ] Set up Firebase rules (security)
- [ ] Deploy

### For JSON (MVP):
- [ ] Create `public/data/` folder
- [ ] Create JSON files for each section
- [ ] Create fetch hook
- [ ] Update components
- [ ] Test locally

---

**QUICK START**: Use JSON files first to get your site working, then migrate to Sanity when you're ready for a full CMS! 🚀

