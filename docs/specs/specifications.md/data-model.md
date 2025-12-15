# Data Model: Physical AI & Humanoid Robotics Textbook Platform

## Overview
Data model for the textbook platform, representing the core entities and their relationships.

## Core Entities

### TextbookChapter
Represents a chapter of the textbook with its content and metadata.

**Fields**:
- id: string (unique identifier for the chapter)
- title: string (chapter title)
- content: string (chapter content in Markdown format)
- position: number (chapter number in the sequence)
- topic: string (main topic of the chapter, e.g. "Physical AI foundations", "ROS2 fundamentals")
- learningObjectives: string[] (list of learning objectives for the chapter)
- prerequisites: string[] (list of prerequisite knowledge or chapters)
- resources: Resource[] (associated resources like code examples, exercises, etc.)
- createdAt: Date
- updatedAt: Date
- version: string (version of the content)

**Relationships**:
- One-to-many with Resource (hasMany)
- Previous/Next chapter links for navigation

### User
Represents a student or learner using the platform.

**Fields**:
- id: string (unique identifier)
- email: string (user's email, optional for guest access)
- name: string (user's display name, optional)
- preferences: UserPreferences (personalization settings)
- learningProgress: LearningProgress[] (tracking progress through chapters)
- createdAt: Date
- updatedAt: Date
- lastActiveAt: Date

**Relationships**:
- One-to-many with LearningProgress
- One-to-many with ChatQuery (optional, if tracking conversations)

### UserPreferences
Holds personalization settings for the user.

**Fields**:
- userId: string (reference to the User)
- theme: string (e.g., "light", "dark", "auto")
- fontSize: string (e.g., "small", "medium", "large")
- language: string (e.g., "en", "ur") - default language preference
- readingSpeed: string (reading speed preference)
- notificationsEnabled: boolean (whether to receive notifications)
- customStyle: object (custom CSS properties for personalization)

### LearningProgress
Tracks a user's progress through the textbook.

**Fields**:
- id: string (unique identifier)
- userId: string (reference to the User)
- chapterId: string (reference to the TextbookChapter)
- isCompleted: boolean (whether the chapter has been completed)
- progressPercentage: number (0-100 percentage of completion)
- timeSpent: number (time spent on the chapter in seconds)
- lastAccessed: Date (when the chapter was last accessed)
- notes: string (user notes on the chapter)
- assessmentsCompleted: string[] (IDs of completed assessments)

### Resource
Represents associated resources for a chapter.

**Fields**:
- id: string (unique identifier)
- type: string (e.g., "code-example", "exercise", "video", "diagram")
- title: string
- content: string (the actual content or URL)
- chapterId: string (reference to the TextbookChapter)
- position: number (order within the chapter)
- createdAt: Date

### ChatQuery
Represents a question from the user to the RAG chatbot.

**Fields**:
- id: string (unique identifier)
- userId: string (optional, reference to the User)
- query: string (the user's question)
- response: string (the AI's response)
- context: string (relevant textbook content that informed the response)
- timestamp: Date
- isHelpful: boolean (user feedback on response quality)
- chapterContextId: string (optional, the chapter context for the query)

### Translation
Represents translated versions of textbook content.

**Fields**:
- id: string (unique identifier)
- sourceId: string (ID of the original content - either chapter ID or resource ID)
- sourceType: string (e.g., "chapter", "resource")
- targetLanguage: string (e.g., "ur" for Urdu)
- translatedContent: string (the translated content)
- status: string (e.g., "pending", "in-review", "approved", "published")
- translator: string (who performed the translation)
- createdAt: Date
- updatedAt: Date

## Relationships

- User -- LearningProgress (one-to-many)
- TextbookChapter -- Resource (one-to-many)
- User -- ChatQuery (one-to-many, optional)
- TextbookChapter -- LearningProgress (one-to-many)
- TextbookChapter -- Translation (one-to-one per language)
- Resource -- Translation (one-to-one per language)

## Validation Rules

### TextbookChapter
- title is required and must be 5-200 characters
- content is required and must be at least 1000 characters
- position must be unique within a textbook
- topic must be one of the predefined topics from the requirements

### User
- email, if provided, must be a valid email address
- name, if provided, must be 2-50 characters

### LearningProgress
- progressPercentage must be between 0 and 100
- userId and chapterId must form a unique combination
- isCompleted implies progressPercentage is 100

### ChatQuery
- query must be 5-2000 characters
- response must not be empty when status is "completed"

## State Transitions

### Translation
- "pending" → "in-review" → "approved" → "published"
- Can go back from "approved" to "in-review" if changes are needed
- Can go back from "in-review" to "pending" if more work is needed