# Textbook Platform API Contracts

## Overview
API contracts for the Physical AI & Humanoid Robotics Textbook Platform

## Endpoints

### Chapter Management

#### GET /api/chapters
**Description**: Retrieve list of all textbook chapters
**Parameters**: None
**Response**: 
- 200: Array of Chapter objects
  ```json
  [
    {
      "id": "ch1",
      "title": "Physical AI foundations",
      "position": 1,
      "topic": "Physical AI foundations",
      "learningObjectives": ["Understand basic concepts", "Identify key principles"],
      "prerequisites": [],
      "resources": []
    }
  ]
  ```

#### GET /api/chapters/{id}
**Description**: Retrieve a specific textbook chapter by ID
**Parameters**: 
- id (path): Chapter ID
**Response**:
- 200: Chapter object with full content
  ```json
  {
    "id": "ch1",
    "title": "Physical AI foundations",
    "content": "# Chapter 1: Physical AI foundations...",
    "position": 1,
    "topic": "Physical AI foundations",
    "learningObjectives": ["Understand basic concepts", "Identify key principles"],
    "prerequisites": [],
    "resources": [
      {
        "id": "res1",
        "type": "code-example",
        "title": "Basic AI Agent",
        "content": "```python\n# Sample code here\n```"
      }
    ],
    "createdAt": "2025-12-12T00:00:00Z",
    "updatedAt": "2025-12-12T00:00:00Z",
    "version": "1.0.0"
  }
  ```
- 404: Chapter not found

### Learning Progress

#### GET /api/users/{userId}/progress
**Description**: Retrieve user's learning progress
**Parameters**:
- userId (path): User ID
**Response**:
- 200: Array of LearningProgress objects
  ```json
  [
    {
      "id": "lp1",
      "userId": "user1",
      "chapterId": "ch1",
      "isCompleted": false,
      "progressPercentage": 65,
      "timeSpent": 1800,
      "lastAccessed": "2025-12-12T00:00:00Z",
      "notes": "Key concepts noted",
      "assessmentsCompleted": ["asmt1"]
    }
  ]
  ```

#### POST /api/users/{userId}/progress
**Description**: Update user's learning progress for a chapter
**Parameters**:
- userId (path): User ID
**Request Body**:
```json
{
  "chapterId": "ch1",
  "progressPercentage": 75,
  "isCompleted": false,
  "timeSpent": 1800,
  "notes": "Key concepts noted"
}
```
**Response**:
- 200: Updated LearningProgress object
- 400: Invalid request data

### RAG Chatbot

#### POST /api/chat/query
**Description**: Submit a query to the RAG chatbot
**Request Body**:
```json
{
  "query": "Explain reinforcement learning in robotics",
  "userId": "user1",  // Optional
  "context": "chapter1"  // Optional, specify context for the query
}
```
**Response**:
- 200: Chat response with context
  ```json
  {
    "id": "cq1",
    "query": "Explain reinforcement learning in robotics",
    "response": "Reinforcement learning in robotics involves agents learning to perform tasks through trial and error...",
    "context": "Chapter 1 content about AI foundations...",
    "timestamp": "2025-12-12T00:00:00Z",
    "chapterContextId": "ch1"
  }
  ```
- 400: Invalid query

#### POST /api/chat/feedback
**Description**: Submit feedback on a chat response
**Request Body**:
```json
{
  "queryId": "cq1",
  "isHelpful": true,
  "feedbackText": "The explanation was clear and concise"
}
```
**Response**:
- 200: Success message
- 400: Invalid request data

### Translation

#### GET /api/translations/{sourceId}/{language}
**Description**: Retrieve translated content
**Parameters**:
- sourceId (path): ID of the source content
- language (path): Target language code (e.g., "ur")
**Response**:
- 200: Translated content
  ```json
  {
    "id": "tr1",
    "sourceId": "ch1",
    "sourceType": "chapter",
    "targetLanguage": "ur",
    "translatedContent": "# فزیکل ای آئی کی بنیادیں...",
    "status": "published",
    "createdAt": "2025-12-12T00:00:00Z",
    "updatedAt": "2025-12-12T00:00:00Z"
  }
  ```

#### POST /api/translations
**Description**: Request new translation or update existing
**Request Body**:
```json
{
  "sourceId": "ch1",
  "sourceType": "chapter",
  "targetLanguage": "ur",
  "translatedContent": "# فزیکل ای آئی کی بنیادیں...",
  "status": "in-review"
}
```
**Response**:
- 200: Translation object
- 400: Invalid request data

### User Preferences

#### GET /api/users/{userId}/preferences
**Description**: Retrieve user's personalization preferences
**Parameters**:
- userId (path): User ID
**Response**:
- 200: UserPreferences object
  ```json
  {
    "userId": "user1",
    "theme": "light",
    "fontSize": "medium",
    "language": "en",
    "readingSpeed": "normal",
    "notificationsEnabled": true,
    "customStyle": {}
  }
  ```

#### PUT /api/users/{userId}/preferences
**Description**: Update user's personalization preferences
**Parameters**:
- userId (path): User ID
**Request Body**:
```json
{
  "theme": "dark",
  "fontSize": "large",
  "language": "ur",
  "readingSpeed": "slow",
  "notificationsEnabled": false,
  "customStyle": {"--primary-color": "#007acc"}
}
```
**Response**:
- 200: Updated UserPreferences object
- 400: Invalid request data

## Authentication

Most endpoints require authentication using BetterAuth. Include the authentication token in the request headers:

```
Authorization: Bearer {token}
```

Some endpoints (like chapter content access) may allow unauthenticated access for public content.