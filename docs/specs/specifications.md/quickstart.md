# Quickstart Guide: Physical AI & Humanoid Robotics Textbook Platform

## Overview
This guide will help you set up and start working with the Physical AI & Humanoid Robotics Textbook Platform.

## Prerequisites

- Node.js v18 or higher
- npm or yarn package manager
- Python 3.11+ (for data processing scripts)
- Git

## Local Development Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Install dependencies

```bash
# Install frontend dependencies (Docusaurus)
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### 3. Environment Configuration

Create a `.env` file in the backend directory with the following variables:

```env
# OpenAI API key for RAG functionality
OPENAI_API_KEY=your_openai_api_key_here

# Qdrant vector database configuration
QDRANT_URL=your_qdrant_url
QDRANT_API_KEY=your_qdrant_api_key

# BetterAuth configuration
BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=http://localhost:3000

# Database configuration
DATABASE_URL=your_database_url

# Application configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Database Setup

1. Set up your Neon Postgres database
2. Run the database migrations:
```bash
cd backend
npx prisma migrate dev
```

### 5. Vector Database Setup

1. Set up Qdrant vector database
2. Initialize the vector collections for textbook content

### 6. Running the Application

#### Frontend (Docusaurus)

```bash
cd frontend
npm start
```

This will start the Docusaurus development server at `http://localhost:3000`.

#### Backend Services

```bash
cd backend
npm run dev
```

This will start the backend services at `http://localhost:4000`.

## Project Structure

```
project-root/
├── backend/
│   ├── src/
│   │   ├── models/          # Database models
│   │   ├── services/        # Business logic
│   │   │   ├── rag/         # RAG chatbot services
│   │   │   ├── auth/        # Authentication services
│   │   │   ├── translation/ # Translation services
│   │   │   └── personalization/ # Personalization services
│   │   └── api/             # API route handlers
│   ├── package.json
│   └── prisma/              # Database schema
├── frontend/
│   ├── src/                 # React components
│   ├── docs/                # Textbook content
│   ├── static/              # Static assets
│   ├── docusaurus.config.js # Docusaurus configuration
│   ├── sidebars.js          # Navigation configuration
│   └── package.json
└── specs/                   # Project specifications
    └── 001-textbook-docusaurus-platform/
```

## Adding New Content

To add a new chapter to the textbook:

1. Create a new Markdown file in `frontend/docs/`
2. Add the file to `frontend/sidebars.js` to include it in the navigation
3. Update the data model if needed in backend schema

Example chapter file (`frontend/docs/chapter-1.md`):
```md
---
title: Physical AI Foundations
sidebar_position: 1
---

# Chapter 1: Physical AI Foundations

## Learning Objectives
- Understand the basic concepts of Physical AI
- Identify key principles of embodied intelligence

## Introduction
Physical AI combines artificial intelligence with physical systems...

## Section 1: Key Concepts
- Concept 1
- Concept 2

## Exercises
1. Exercise 1
2. Exercise 2
```

## Working with the RAG System

The RAG (Retrieval Augmented Generation) system allows the chatbot to answer questions based on textbook content:

1. Content is embedded and stored in the Qdrant vector database
2. When a query is received, relevant content is retrieved
3. The OpenAI API generates a response based on the retrieved context

To reindex content after updates:
```bash
cd backend
npm run reindex-content
```

## Working with Translations

The platform supports Urdu translation of content:

1. Translated content is stored in the database
2. Translation requests can be made through the API
3. The UI includes a language switcher

To add a translation:
1. Create a translation entry in the database
2. Update the translation status to 'published'

## Personalization Features

The platform includes personalization options:

- Theme selection (light/dark mode)
- Font size adjustment
- Reading speed preferences
- Custom styling options

User preferences are stored in the database and persist across sessions.

## Deployment

The frontend is designed for deployment to GitHub Pages:

1. Build the static site: `npm run build`
2. The output will be in the `build/` directory
3. Configure GitHub Actions workflow for automatic deployment

A sample GitHub Actions workflow is included in `.github/workflows/deploy.yml`.

## Troubleshooting

### Common Issues

1. **Port already in use**: Change the port in your dev server configuration
2. **API keys not working**: Verify your environment variables are set correctly
3. **Content not appearing**: Check that the sidebar configuration includes your new content

### Useful Commands

- `npm run build` - Build the static Docusaurus site
- `npm run serve` - Serve the built site locally for testing
- `npm run swizzle` - Customize Docusaurus components
- `npm run docusaurus -- --help` - Show all Docusaurus CLI commands

## Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Make your changes
4. Submit a pull request with a clear description of your changes