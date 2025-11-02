# Gnosis Mobile Application - Complete Specification Document

## Table of Contents
1. [Current Application Overview](#1-current-application-overview)
2. [Mobile Framework Recommendation](#2-mobile-framework-recommendation)
3. [Mobile Application Feature Specifications](#3-mobile-application-feature-specifications)
4. [Mobile UI/UX Design Specifications](#4-mobile-uiux-design-specifications)
5. [Technical Architecture](#5-technical-architecture)
6. [Project Structure](#6-project-structure)
7. [Implementation Roadmap](#7-implementation-roadmap)
8. [Testing Strategy](#8-testing-strategy)
9. [Deployment & Distribution](#9-deployment--distribution)
10. [Dependencies & Third-Party Libraries](#10-dependencies--third-party-libraries)

---

## 1. Current Application Overview

### Executive Summary

**Gnosis** (also branded as "Divine Guide") is a comprehensive Catholic spiritual companion web application built with Next.js 13.5.1. It serves as a digital platform for Catholic faith practice, combining traditional prayers, Bible study, AI-powered spiritual guidance, devotional music, and community interaction. The application targets Catholic Christians seeking to deepen their faith through modern technology while maintaining reverence for traditional practices.

### Complete Feature Inventory

#### 1.1 AI Spiritual Chat (Chat Feature)
- **Purpose**: Provides AI-powered spiritual guidance and biblical wisdom
- **Technology**: Groq API with Llama 3.3 70B model
- **Features**:
  - Real-time conversational interface with spiritual AI assistant
  - System prompt configured to respond with biblical wisdom and scripture references
  - Message history persistence during session
  - Markdown rendering for formatted responses
  - Scripture-based tone (calm, poetic, reverent)
  - Automatic inclusion of Bible verses in responses
  - Gentle redirection for non-spiritual queries

#### 1.2 Bible Reader
- **Purpose**: Complete Bible reading and study interface
- **API**: API.Bible (bba9f40183526463-01 - English version)
- **Features**:
  - Full Bible text access (Old and New Testament)
  - Book selection with 66 books
  - Chapter navigation
  - Verse-by-verse display with numbering
  - Search functionality (planned/partial)
  - Bookmark capability (UI present, backend pending)
  - Responsive chapter content rendering
  - HTML parsing for formatted scripture text

#### 1.3 Catholic Prayers Library
- **Purpose**: Comprehensive collection of traditional Catholic prayers
- **Categories**:
  - Traditional (Our Father, Hail Mary, Apostles' Creed, etc.)
  - Marian (Memorare, Hail Holy Queen, etc.)
  - Devotional (Morning Prayer, Evening Prayer, etc.)
  - Liturgical (Grace Before/After Meals, etc.)
- **Features**:
  - 10+ prayers with full text
  - Malayalam translations for select prayers
  - Historical context and background
  - "When to recite" guidance
  - Category-based filtering
  - Search functionality
  - Individual prayer detail pages
  - Beautiful typography with Crimson Text font

#### 1.4 Holy Rosary Guide
- **Purpose**: Interactive guide for praying the Holy Rosary
- **Features**:
  - Four mystery sets: Joyful, Sorrowful, Glorious, Luminous
  - Day-based mystery recommendations (automatic)
  - 20 mysteries total (5 per set)
  - Complete prayer texts:
    - Opening prayers (Sign of Cross, Apostles' Creed, Our Father, Hail Mary, Glory Be)
    - Decade prayers
    - Offering prayers
    - Litany of Blessed Virgin Mary
    - Closing prayers (Hail Holy Queen, Final Prayer)
  - Scripture references for each mystery
  - Meditation points for each mystery
  - Visual mystery cards with icons and colors
  - Tab-based navigation between mystery sets

#### 1.5 Devotional Music (Spotify Integration)
- **Purpose**: Access to Christian devotional music and hymns
- **Technology**: Spotify Web API
- **Features**:
  - Default Malayalam Christian music playlist
  - Search functionality for songs and artists
  - Track preview playback (when available)
  - Spotify embed player fallback
  - Album artwork display
  - Artist information
  - 12-16 tracks per search result
  - Responsive grid layout

#### 1.6 Community Groups
- **Purpose**: Connect believers for prayer, study, and fellowship
- **Group Types**:
  - Community Groups (Jesus Youth Teens, Campus, Professionals)
  - Prayer Circles (Prayer requests, Thanksgiving)
  - Study Groups (Scripture Study, Catechism Study)
  - Counselling (Spiritual guidance - availability-based)
- **Features**:
  - Group browsing and filtering
  - Member count display
  - Latest message preview
  - Real-time chat interface (mock data currently)
  - Group creation dialog
  - Private/public group options
  - Moderator information
  - Activity timestamps
  - Counsellor availability status

#### 1.7 Saints Library
- **Purpose**: Learn about Catholic saints and their lives
- **Features**:
  - 6+ saint biographies (St. Alphonsa, St. Francis of Assisi, St. Joan of Arc, St. Mother Teresa, St. Mariam Thresia, St. Augustine)
  - Full life stories in markdown format
  - Birth/death dates and canonization dates
  - Era-based categorization (Ancient, Recent, Modern)
  - Search functionality
  - Individual saint detail pages
  - Icon-based visual identification
  - Legacy descriptions

#### 1.8 Authentication System
- **Technology**: Clerk Authentication
- **Features**:
  - Sign up / Sign in
  - User profile management
  - Session management
  - Protected routes (middleware-based)
  - OAuth support (via Clerk)
  - User button component

#### 1.9 Theme System
- **Features**:
  - Light/Dark mode toggle
  - System preference detection
  - Persistent theme selection
  - Custom sacred color palette
  - Smooth transitions

### Current Technology Stack

#### Frontend Framework
- **Next.js 13.5.1** (React 18.2.0)
  - App Router architecture
  - Server Components and Client Components
  - Server Actions enabled
  - TypeScript 5.2.2

#### UI Framework & Styling
- **Tailwind CSS 3.3.3**
  - Custom design system with sacred theme
  - CSS variables for theming
  - Responsive utilities
- **shadcn/ui** (Radix UI primitives)
  - 40+ pre-built components
  - Accessible by default
  - Customizable with Tailwind
- **Fonts**:
  - Inter (sans-serif, primary)
  - Crimson Text (serif, headings)
  - Google Fonts integration

#### State Management
- **React Hooks** (useState, useEffect)
- **Client-side state only** (no global state management library)
- Session storage for chat messages

#### API Integration
- **Axios 1.9.0** for HTTP requests
- **Next.js API Routes** for backend endpoints

#### External Services
1. **Groq AI API** - Llama 3.3 70B model for spiritual chat
2. **API.Bible** - Bible text content (English version)
3. **Spotify Web API** - Music streaming and search
4. **Clerk** - Authentication and user management

#### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

### Application Architecture

#### Folder Structure
```
/app
  /action - Server actions (AI chat)
  /api - API routes (chatbot, bible, spotify-token)
  /auth - Authentication pages (login, register)
  /bible - Bible reader page
  /chat - AI chat interface
  /community - Community groups
  /music - Devotional music
  /prayers - Prayer library and detail pages
  /rosary - Rosary guide
  /saints - Saints library and detail pages
  globals.css - Global styles and theme
  layout.tsx - Root layout with providers
  page.tsx - Home page

/components
  /ui - shadcn/ui components (40+ components)
  navigation.tsx - Main navigation header
  footer.tsx - Footer component
  theme-provider.tsx - Theme context provider
  mode-toggle.tsx - Dark mode toggle

/data
  prayers-data.ts - Prayer content and schemas
  rosary-data.ts - Rosary mysteries and prayers
  saints.ts - Saint biographies

/utils
  spotify.ts - Spotify API helpers

/lib
  utils.ts - Utility functions (cn for className merging)

/hooks
  use-toast.ts - Toast notification hook
```

#### Data Flow
1. **Client → API Route → External Service** (Bible, Spotify, AI)
2. **Client → Server Action → External Service** (AI Chat alternative)
3. **Static Data** (Prayers, Rosary, Saints) loaded from TypeScript files

#### Routing
- File-based routing (Next.js App Router)
- Dynamic routes: `/prayers/[id]`, `/saints/[id]`
- Protected routes via Clerk middleware

### Identified Strengths

1. **Rich Content**: Comprehensive Catholic spiritual resources
2. **Modern UX**: Beautiful, responsive design with sacred aesthetics
3. **AI Integration**: Innovative spiritual guidance feature
4. **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
5. **Performance**: Server-side rendering, optimized images
6. **Theming**: Professional light/dark mode implementation
7. **Type Safety**: Full TypeScript implementation
8. **Component Reusability**: Well-structured component library

### Identified Limitations

1. **No Offline Support**: Requires internet for all features
2. **No Data Persistence**: User data (bookmarks, favorites) not saved
3. **Limited Bible Features**: No highlighting, notes, or study tools
4. **Mock Community Data**: Community groups use static mock data
5. **No Push Notifications**: No engagement reminders
6. **No User Profiles**: Limited personalization
7. **Single Language**: Primarily English (some Malayalam prayers)
8. **No Audio Rosary**: Text-only rosary guide
9. **Limited Music Features**: No playlists, downloads, or offline playback
10. **Web-Only**: Not optimized for mobile app experience

---

## 2. Mobile Framework Recommendation

### Recommended Framework: **Flutter**

#### Detailed Justification

**1. Cross-Platform Excellence**
- Single codebase for iOS and Android (90%+ code sharing)
- Native performance on both platforms
- Consistent UI/UX across devices
- Reduced development time and cost (vs. native development)

**2. Rich UI Capabilities**
- Material Design and Cupertino widgets built-in
- Excellent for custom, beautiful UIs (matches Gnosis's sacred aesthetic)
- Smooth animations and transitions (60fps standard)
- Flexible theming system (perfect for light/dark mode)
- Custom font support (Crimson Text, Inter)

**3. Strong Ecosystem**
- 30,000+ packages on pub.dev
- Excellent packages for all required features:
  - `http`/`dio` for API calls
  - `flutter_secure_storage` for sensitive data
  - `sqflite`/`hive` for local database
  - `just_audio` for music playback
  - `cached_network_image` for image caching
  - `flutter_markdown` for content rendering
  - `share_plus` for sharing quotes
  - `firebase_messaging` for push notifications

**4. Offline-First Architecture**
- Easy implementation of local-first data patterns
- Built-in support for SQLite databases
- Efficient caching mechanisms
- Background sync capabilities

**5. Performance**
- Compiled to native ARM code (not JavaScript bridge)
- Fast startup times
- Smooth scrolling and animations
- Efficient memory management
- Excellent for content-heavy apps like Gnosis

**6. Developer Experience**
- Hot reload for rapid development
- Excellent debugging tools
- Strong typing with Dart
- Comprehensive documentation
- Large community support

**7. Feature Alignment**
- **Bible Reader**: Excellent text rendering, search, and highlighting
- **Music Player**: Robust audio playback libraries
- **Chat Interface**: Smooth real-time UI updates
- **Community**: WebSocket support for real-time chat
- **Offline Mode**: Superior offline capabilities vs. React Native

**8. Long-Term Viability**
- Backed by Google
- Used by major apps (Google Ads, Alibaba, BMW, eBay)
- Growing adoption in enterprise
- Regular updates and improvements
- Flutter 3.x with stable releases

#### Alternative Frameworks Considered

**React Native**
- ❌ **Not Selected** because:
  - JavaScript bridge can cause performance issues with heavy content
  - More complex offline implementation
  - Less consistent UI across platforms
  - Requires more native modules for advanced features
- ✅ **Advantages**:
  - Easier transition for React developers
  - Large ecosystem
  - Hot reload

**Native (Swift/Kotlin)**
- ❌ **Not Selected** because:
  - Requires two separate codebases
  - 2x development time and cost
  - Harder to maintain feature parity
  - Requires two development teams
- ✅ **Advantages**:
  - Best possible performance
  - Full platform API access
  - Platform-specific features

**Ionic/Capacitor**
- ❌ **Not Selected** because:
  - WebView-based (not truly native)
  - Performance limitations for complex UIs
  - Less smooth animations
  - Larger app size
- ✅ **Advantages**:
  - Web technology reuse
  - Easy for web developers

### Conclusion
Flutter is the optimal choice for Gnosis mobile app due to its superior UI capabilities, excellent offline support, strong performance, and ability to create a beautiful, custom-designed spiritual app that works seamlessly on both iOS and Android.

---

## 3. Mobile Application Feature Specifications

### 3.1 Core Features (Parity with Web App)

#### 3.1.1 AI Spiritual Chat
**Mobile Adaptations**:
- Bottom-anchored input field (keyboard-aware)
- Swipe-to-dismiss keyboard
- Message bubbles optimized for mobile screens
- Pull-to-refresh for chat history
- Haptic feedback on message send
- Voice input option (speech-to-text)
- Copy message text with long-press
- Share responses via native share sheet
- Offline queue for messages (send when online)

**Technical Requirements**:
- Groq API integration (same as web)
- Local message caching
- Retry logic for failed messages
- Loading indicators
- Error handling with user-friendly messages

#### 3.1.2 Bible Reader
**Mobile Adaptations**:
- Swipe navigation between chapters
- Bottom sheet for book/chapter selection
- Adjustable font size (accessibility)
- Reading progress indicator
- Verse highlighting with tap-and-hold
- Quick verse sharing
- Reading mode (distraction-free)
- Night mode optimized for reading
- Verse of the day widget (home screen)

**New Mobile Features**:
- **Bookmarks**: Save verses with notes
- **Highlights**: Color-coded highlighting system
- **Reading Plans**: Daily reading schedules
- **Offline Access**: Download books for offline reading
- **Search**: Full-text search across Bible
- **Cross-references**: Tap verse numbers for references
- **Audio Bible**: Text-to-speech or audio recordings (future)

#### 3.1.3 Catholic Prayers Library
**Mobile Adaptations**:
- Card-based layout optimized for scrolling
- Quick access favorites bar
- Prayer reminders (notifications)
- Adjustable text size
- Audio prayer option (text-to-speech)
- Prayer history tracking
- Offline access to all prayers

**New Mobile Features**:
- **Prayer Journal**: Record prayer intentions and reflections
- **Prayer Streaks**: Track daily prayer habits
- **Reminders**: Scheduled prayer notifications
- **Favorites**: Quick access to frequently used prayers

#### 3.1.4 Holy Rosary Guide
**Mobile Adaptations**:
- Step-by-step guided mode
- Progress tracking through decades
- Bead counter visualization
- Haptic feedback for bead progression
- Auto-advance option
- Background audio support
- Lock screen controls

**New Mobile Features**:
- **Audio Rosary**: Guided audio prayers
- **Timer Mode**: Timed meditation for each mystery
- **Rosary Counter**: Visual bead representation
- **History**: Track completed rosaries
- **Reminders**: Daily rosary notifications

#### 3.1.5 Devotional Music
**Mobile Adaptations**:
- Native audio player with background playback
- Lock screen controls
- Notification player controls
- Playlist management
- Download for offline playback
- Sleep timer
- Repeat/shuffle modes
- Queue management

**Significant Modifications**:
- Replace Spotify embed with native player
- Implement download management
- Add offline playback capability
- Create custom playlists
- Integrate with device media controls

#### 3.1.6 Community Groups
**Mobile Adaptations**:
- Real-time chat with WebSocket
- Push notifications for new messages
- Image/file sharing in chat
- Voice messages
- Typing indicators
- Read receipts
- Group member profiles
- Swipe actions (delete, pin messages)

**Backend Requirements**:
- Real-time messaging backend (Firebase/Supabase)
- User authentication and profiles
- Message persistence
- File storage for media
- Push notification service

#### 3.1.7 Saints Library
**Mobile Adaptations**:
- Swipeable saint cards
- Feast day calendar integration
- Saint of the day feature
- Share saint stories
- Offline access to all biographies
- Image galleries for saints
- Related saints suggestions

#### 3.1.8 Authentication
**Mobile Adaptations**:
- Biometric authentication (Face ID, Touch ID, Fingerprint)
- Social login (Google, Apple, Facebook)
- Remember me functionality
- Secure token storage
- Auto-login on app launch
- Profile management screen

### 3.2 New Mobile-Specific Features

#### 3.2.1 Saved/Bookmarked Bible Quotes
**Feature Description**:
A comprehensive system for saving, organizing, and sharing favorite Bible verses and spiritual quotes.

**User Stories**:
- As a user, I want to save my favorite Bible verses so I can easily find them later
- As a user, I want to organize my saved verses by topic so I can find relevant verses quickly
- As a user, I want to share verses with friends via social media or messaging apps
- As a user, I want to create custom collections of verses for different purposes

**Detailed Specifications**:

**Saving Mechanism**:
- Tap bookmark icon on any verse in Bible reader
- Add personal notes/reflections to saved verses
- Automatic metadata capture (book, chapter, verse, date saved)
- Quick save from AI chat responses

**Organization System**:
- **Categories**: Pre-defined (Faith, Hope, Love, Comfort, Strength, Wisdom, etc.)
- **Custom Tags**: User-created tags for personalization
- **Collections**: Group verses into themed collections (e.g., "Wedding Verses", "Grief Support")
- **Favorites**: Star most important verses for quick access

**Search & Filter**:
- Full-text search within saved verses
- Filter by category, tag, date saved, book
- Sort by date, book order, or custom order
- Search within notes

**Sharing Functionality**:
- **Text Share**: Plain text via native share sheet
- **Image Share**: Beautiful verse cards with customizable backgrounds
  - Multiple design templates (minimalist, floral, sacred art)
  - Font selection
  - Color schemes
  - Add/remove attribution
- **Social Media**: Direct sharing to Instagram, Facebook, Twitter, WhatsApp
- **Copy to Clipboard**: Quick copy for pasting elsewhere

**Export Options**:
- **PDF**: Formatted document of all saved verses
- **Text File**: Plain text export
- **Backup**: JSON export for data portability
- **Print**: Formatted for printing

**UI Components**:
- Saved verses list screen
- Category management screen
- Verse detail screen with notes
- Share preview screen
- Export options dialog

**Data Model**:
```dart
class SavedVerse {
  String id;
  String book;
  int chapter;
  int verseNumber;
  String verseText;
  String? personalNote;
  List<String> tags;
  String? category;
  DateTime savedDate;
  bool isFavorite;
  String? collectionId;
}
```

#### 3.2.2 Favorite Music/Hymns Library
**Feature Description**:
A complete music management system for devotional music with offline playback, playlists, and background audio support.

**User Stories**:
- As a user, I want to save my favorite hymns so I can listen to them anytime
- As a user, I want to download songs for offline listening during commute
- As a user, I want to create playlists for different prayer moods
- As a user, I want to listen to music while using other apps or when screen is off

**Detailed Specifications**:

**Music Browsing & Search**:
- Browse curated devotional music collections
- Search by song title, artist, album, genre
- Filter by language (English, Malayalam, Latin, Spanish, etc.)
- Categories: Hymns, Worship, Meditation, Gregorian Chant, Contemporary Christian
- Trending/Popular section
- New releases section

**Favorites Management**:
- Heart icon to favorite any track
- Favorites library screen
- Sort favorites by date added, artist, title
- Remove from favorites with swipe action
- Batch operations (add multiple to playlist)

**Playlist System**:
- Create custom playlists
- Add/remove songs from playlists
- Reorder songs (drag and drop)
- Playlist cover image selection
- Share playlists with other users
- Collaborative playlists (future)
- Pre-made playlists: "Morning Prayer", "Evening Meditation", "Rosary Music", "Adoration"

**Offline Playback**:
- Download individual songs
- Download entire playlists
- Download quality selection (low, medium, high)
- Storage management screen
- Auto-delete after X days option
- Wi-Fi only download option
- Download progress indicator
- Pause/resume downloads

**Audio Player**:
- **Playback Controls**:
  - Play/Pause
  - Next/Previous track
  - Seek bar with time display
  - Repeat (off, one, all)
  - Shuffle
  - Playback speed (0.5x - 2x)
- **Queue Management**:
  - View current queue
  - Reorder queue
  - Clear queue
  - Add to queue
- **Background Playback**:
  - Continue playing when app is backgrounded
  - Continue playing when screen is locked
  - Audio focus management (pause for calls)
- **Lock Screen Controls**:
  - Album artwork
  - Song title and artist
  - Play/pause, skip controls
- **Notification Controls**:
  - Persistent notification with controls
  - Quick actions

**Lyrics Display**:
- Synchronized lyrics (if available)
- Static lyrics display
- Auto-scroll with music
- Font size adjustment
- Translate lyrics option (future)

**Sleep Timer**:
- Set timer to stop playback (15, 30, 45, 60 minutes, custom)
- Fade out option
- End of current track option

**Audio Settings**:
- Equalizer (preset and custom)
- Bass boost
- Crossfade between tracks
- Gapless playback
- Audio quality preference

**Social Features**:
- Share currently playing song
- Share playlists
- See what friends are listening to (future)

**Data Model**:
```dart
class Track {
  String id;
  String title;
  String artist;
  String album;
  String? albumArtUrl;
  Duration duration;
  String streamUrl;
  String? downloadedPath;
  bool isFavorite;
  List<String> playlists;
  String? lyrics;
  String language;
  String genre;
}

class Playlist {
  String id;
  String name;
  String? description;
  String? coverImageUrl;
  List<String> trackIds;
  DateTime createdDate;
  DateTime modifiedDate;
  bool isDownloaded;
}
```

**Music Source**:
- Option 1: Continue Spotify integration (requires Premium for downloads)
- Option 2: Custom music library with licensed content
- Option 3: YouTube Music API integration
- Option 4: Hybrid approach (streaming + owned content)

#### 3.2.3 Additional Mobile-Specific Features

**Daily Devotional**:
- Daily scripture reading
- Saint of the day
- Daily prayer intention
- Reflection prompt
- Push notification reminder

**Prayer Reminders**:
- Customizable prayer time reminders
- Morning, Noon, Evening prayer notifications
- Rosary reminder
- Mass time reminders
- Customizable notification sounds

**Widgets** (iOS/Android Home Screen):
- Verse of the day widget
- Daily prayer widget
- Rosary progress widget
- Music player widget
- Saint of the day widget

**Apple Watch / Wear OS Support** (Future):
- Quick prayers
- Rosary counter
- Music controls
- Daily verse

**Accessibility Features**:
- VoiceOver/TalkBack support
- Dynamic text sizing
- High contrast mode
- Reduce motion option
- Screen reader optimized

**Localization**:
- Multi-language support (English, Spanish, Malayalam, Portuguese, French)
- RTL language support (Arabic)
- Localized content (prayers, saints)

**Analytics & Insights**:
- Prayer streak tracking
- Bible reading progress
- Listening time statistics
- Favorite prayers/verses
- Spiritual growth insights

---

## 4. Mobile UI/UX Design Specifications

### 4.1 Design Philosophy

**Sacred Minimalism**: Clean, uncluttered interfaces that promote focus and contemplation while maintaining the reverent, sacred aesthetic of the web app.

**Principles**:
1. **Reverence**: Design should inspire prayer and reflection
2. **Accessibility**: Easy to use for all ages and abilities
3. **Clarity**: Clear hierarchy and intuitive navigation
4. **Beauty**: Aesthetically pleasing with sacred art influences
5. **Performance**: Fast, smooth, responsive interactions

### 4.2 Color Palette

**Light Mode**:
- Primary: `#2D4A6B` (Deep Indigo - Sacred)
- Secondary: `#E8EDF5` (Light Indigo)
- Accent: `#D4AF37` (Warm Gold)
- Background: `#FEFEFE` (Pure Off-White)
- Surface: `#F8F9FA` (Soft Gray)
- Text Primary: `#1A1A1A` (Near Black)
- Text Secondary: `#718096` (Light Gray)
- Sacred Teal: `#4A9B9B`
- Sacred Light: `#F0F4F8`

**Dark Mode**:
- Primary: `#4A6FA5` (Lighter Indigo)
- Secondary: `#2A3F5F` (Dark Indigo)
- Accent: `#E8C468` (Soft Gold)
- Background: `#0F1419` (Deep Dark)
- Surface: `#1A202C` (Dark Gray)
- Text Primary: `#F7FAFC` (Off-White)
- Text Secondary: `#A0AEC0` (Medium Gray)

### 4.3 Typography

**Font Families**:
- **Headings**: Crimson Text (Serif) - 600 weight
- **Body**: Inter (Sans-serif) - 400, 500, 600 weights
- **Scripture**: Crimson Text (Serif) - 400 weight

**Type Scale**:
- H1: 32sp (Mobile), 40sp (Tablet)
- H2: 24sp
- H3: 20sp
- H4: 18sp
- Body: 16sp
- Caption: 14sp
- Small: 12sp

**Line Heights**:
- Headings: 1.2
- Body: 1.6
- Scripture: 1.8

### 4.4 Screen-by-Screen Breakdown

#### Screen 1: Splash Screen
**Purpose**: App launch screen with branding
**Components**:
- App logo/icon (centered)
- App name "Gnosis" in Crimson Text
- Tagline: "Your Spiritual Companion"
- Loading indicator
- Version number (bottom)

**Duration**: 1-2 seconds (or until app ready)

#### Screen 2: Onboarding (First Launch Only)
**Purpose**: Introduce app features to new users
**Screens** (3-4 swipeable screens):
1. Welcome screen with app overview
2. Bible & Prayers feature highlight
3. AI Spiritual Guide introduction
4. Music & Community features
5. Notification permissions request

**Components**:
- Illustration/icon for each feature
- Title and description
- Progress dots
- Skip button (top right)
- Next/Get Started button

#### Screen 3: Home/Dashboard
**Purpose**: Central hub for quick access to all features
**Layout**: Scrollable vertical layout

**Components**:
1. **Header**:
   - App logo/name
   - Profile avatar (top right)
   - Notifications bell icon
   
2. **Daily Devotional Card** (Top):
   - Verse of the day
   - Saint of the day
   - Daily prayer intention
   - "Read More" button

3. **Quick Actions Grid** (2x3 or 2x4):
   - Bible (Book icon)
   - Prayers (Praying hands icon)
   - Rosary (Rosary beads icon)
   - Chat (Message icon)
   - Music (Music note icon)
   - Community (People icon)
   - Saints (Halo icon)
   - More (Grid icon)

4. **Continue Reading** (if applicable):
   - Last read Bible chapter
   - Resume button

5. **Prayer Streak Card**:
   - Current streak count
   - Motivational message
   - Calendar visualization

6. **Recommended Content**:
   - Featured prayer
   - Suggested saint
   - Trending music

**Navigation**: Bottom navigation bar (5 tabs)

#### Screen 4: Bible Reader
**Purpose**: Read and study the Bible

**Top App Bar**:
- Back button
- Current book & chapter (e.g., "John 3")
- Search icon
- More options (•••)

**Main Content**:
- Scrollable chapter text
- Verse numbers (left margin or inline)
- Highlight-able verses (long-press)
- Bookmark icon (floating action button)

**Bottom Sheet** (Book/Chapter Selector):
- Tabs: Old Testament | New Testament
- Book list (scrollable)
- Chapter grid for selected book

**Verse Context Menu** (Long-press):
- Highlight (color picker)
- Bookmark
- Add Note
- Share
- Copy

**Navigation**:
- Swipe left/right for next/previous chapter
- Bottom navigation bar

#### Screen 5: Saved Verses
**Purpose**: Manage bookmarked and highlighted verses

**Top App Bar**:
- Title: "Saved Verses"
- Search icon
- Filter icon
- More options

**Filter Chips** (Horizontal scroll):
- All
- Favorites
- By Category (Faith, Hope, Love, etc.)
- By Book
- Recent

**Verse Cards** (List):
- Verse reference (e.g., "John 3:16")
- Verse text (truncated if long)
- Personal note preview (if exists)
- Tags/category badges
- Favorite star icon
- Swipe actions: Delete, Share

**Floating Action Button**: Add verse manually

**Empty State**: "No saved verses yet" with illustration

#### Screen 6: Prayers Library
**Purpose**: Browse and access Catholic prayers

**Top App Bar**:
- Title: "Prayers"
- Search icon
- Favorites icon

**Category Tabs** (Horizontal scroll):
- All
- Traditional
- Marian
- Devotional
- Liturgical
- Favorites

**Prayer Cards** (Grid or List):
- Prayer icon/emoji
- Prayer title
- Subtitle (if exists)
- Category badge
- Favorite heart icon

**Tap Action**: Navigate to prayer detail

#### Screen 7: Prayer Detail
**Purpose**: Display full prayer text and options

**Top App Bar**:
- Back button
- Prayer title
- Favorite icon
- Share icon
- More options

**Content** (Scrollable):
- Prayer icon (large)
- Prayer title
- Subtitle
- Category badge
- "When to Recite" section
- Full prayer text (large, readable font)
- Malayalam translation (if available)
- Historical context (collapsible)

**Bottom Actions**:
- "Pray Now" button (starts audio or timer)
- "Add Reminder" button
- "Share" button

#### Screen 8: Rosary Guide
**Purpose**: Guide users through praying the Rosary

**Top App Bar**:
- Back button
- Title: "Holy Rosary"
- Settings icon (audio, auto-advance)

**Mystery Selection** (Top):
- Tabs: Joyful | Sorrowful | Glorious | Luminous
- "Today's Mystery" badge
- Mystery description

**Guided Mode**:
- Current prayer text (large, centered)
- Bead visualization (progress indicator)
- Current decade/mystery indicator
- Previous/Next buttons
- Auto-advance toggle

**Mystery Cards** (Alternative View):
- 5 mystery cards (swipeable)
- Mystery title
- Scripture reference
- Meditation point
- "Pray This Mystery" button

**Audio Controls** (if audio enabled):
- Play/Pause
- Seek bar
- Volume

#### Screen 9: AI Spiritual Chat
**Purpose**: Conversational AI for spiritual guidance

**Top App Bar**:
- Back button
- Title: "Spiritual Guide"
- Clear chat icon

**Chat Interface**:
- Message bubbles (user: right, AI: left)
- Timestamps
- AI avatar (left side)
- User avatar (right side)
- Markdown rendering in AI messages
- Copy message (long-press)
- Share message

**Input Area** (Bottom):
- Text input field
- Voice input button (microphone icon)
- Send button
- Keyboard-aware (pushes content up)

**Suggested Prompts** (Empty State):
- "How can I grow in faith?"
- "Explain this Bible verse..."
- "I'm struggling with..."
- "Prayer for guidance"

#### Screen 10: Music Library
**Purpose**: Browse and play devotional music

**Top App Bar**:
- Title: "Music"
- Search icon
- Downloads icon

**Tabs**:
- Browse
- Playlists
- Favorites
- Downloads

**Browse Tab**:
- Featured playlists (horizontal scroll)
- Categories (Hymns, Worship, Meditation, etc.)
- New Releases
- Popular Tracks

**Track List Item**:
- Album artwork (thumbnail)
- Track title
- Artist name
- Duration
- More options (•••)
- Download icon/progress

**Now Playing Bar** (Bottom, above navigation):
- Mini player (album art, title, artist)
- Play/Pause button
- Tap to expand to full player

#### Screen 11: Music Player (Full Screen)
**Purpose**: Full music playback interface

**Layout**:
- Album artwork (large, centered)
- Track title (below artwork)
- Artist name
- Playback progress bar with time
- Playback controls (Previous, Play/Pause, Next)
- Secondary controls (Shuffle, Repeat)
- Volume slider
- Lyrics button
- Queue button
- Favorite heart icon
- Share icon
- Download icon
- More options (•••)

**Swipe Down**: Minimize to mini player

#### Screen 12: Playlists
**Purpose**: Manage music playlists

**Top App Bar**:
- Title: "Playlists"
- Create playlist button (+)

**Playlist Cards** (Grid):
- Playlist cover image
- Playlist name
- Track count
- Download status icon

**Create Playlist Dialog**:
- Playlist name input
- Description input
- Cover image selection
- Create button

#### Screen 13: Community Groups
**Purpose**: Connect with other believers

**Top App Bar**:
- Title: "Community"
- Search icon
- Create group button (+)

**Tabs**:
- All
- Prayer Circles
- Study Groups
- Counselling

**Group Cards** (List):
- Group icon/image
- Group name
- Description (truncated)
- Member count
- Latest message preview
- Timestamp
- Unread badge (if applicable)

**Tap Action**: Open group chat

#### Screen 14: Group Chat
**Purpose**: Real-time group messaging

**Top App Bar**:
- Back button
- Group name
- Group icon
- Member count
- More options (group info, mute, leave)

**Chat Interface**:
- Message bubbles with sender name
- Timestamps
- User avatars
- Typing indicators
- Read receipts
- Image/file attachments
- Voice messages

**Input Area**:
- Text input
- Attach file button
- Voice record button
- Send button

**Swipe Actions on Messages**:
- Reply
- Delete (own messages)
- Pin (moderators)

#### Screen 15: Saints Library
**Purpose**: Learn about Catholic saints

**Top App Bar**:
- Title: "Saints"
- Search icon
- Calendar icon (feast days)

**Saint Cards** (Grid or List):
- Saint icon/image
- Saint name
- Short description
- Era badge (Ancient, Recent, Modern)
- Feast day (if today)

**Tap Action**: Navigate to saint detail

#### Screen 16: Saint Detail
**Purpose**: Display full saint biography

**Top App Bar**:
- Back button
- Saint name
- Share icon

**Content** (Scrollable):
- Saint image (large)
- Saint name
- Dates (birth, death, canonization)
- Full biography (markdown formatted)
- Related saints section
- "Share Story" button

#### Screen 17: Profile/Settings
**Purpose**: User profile and app settings

**Profile Section**:
- Profile photo
- User name
- Email
- Edit profile button

**Settings Sections**:

**Account**:
- Change password
- Email preferences
- Delete account

**Notifications**:
- Prayer reminders
- Daily devotional
- Community messages
- Music recommendations
- Push notification toggle

**Appearance**:
- Theme (Light, Dark, System)
- Font size
- Language

**Audio**:
- Audio quality
- Download quality
- Auto-play
- Crossfade

**Data & Storage**:
- Downloaded content (size)
- Clear cache
- Manage downloads

**About**:
- App version
- Privacy policy
- Terms of service
- Licenses
- Contact support

**Sign Out Button**

### 4.5 Navigation Pattern

**Bottom Navigation Bar** (5 tabs):
1. **Home** (House icon)
2. **Bible** (Book icon)
3. **Pray** (Praying hands icon) - Opens prayer/rosary menu
4. **Music** (Music note icon)
5. **More** (Grid icon) - Community, Saints, Profile

**Rationale**: Bottom navigation provides easy thumb access on mobile devices and clearly separates primary features.

### 4.6 Gestures & Interactions

**Standard Gestures**:
- **Tap**: Select, activate
- **Long-press**: Context menu, highlight text
- **Swipe left/right**: Navigate between chapters, screens
- **Swipe down**: Refresh, dismiss
- **Swipe up**: Reveal more content
- **Pinch**: Zoom (images, text)
- **Pull-to-refresh**: Reload content

**Haptic Feedback**:
- Button taps (light)
- Successful actions (medium)
- Errors (heavy)
- Rosary bead progression (light)
- Long-press activation (medium)

### 4.7 Responsive Design

**Phone (Portrait)**:
- Single column layouts
- Bottom navigation
- Stacked cards
- Full-width components

**Phone (Landscape)**:
- Two-column layouts where appropriate
- Side navigation (optional)
- Optimized for reading (Bible, prayers)

**Tablet (Portrait & Landscape)**:
- Multi-column layouts
- Side navigation drawer
- Master-detail views (e.g., prayer list + detail)
- Larger text and spacing
- Utilize extra screen space

### 4.8 Accessibility

**Requirements**:
- **Screen Reader Support**: All elements labeled
- **Font Scaling**: Support system font size (up to 200%)
- **Color Contrast**: WCAG AA compliance (4.5:1 for text)
- **Touch Targets**: Minimum 44x44 points
- **Focus Indicators**: Clear keyboard focus
- **Alternative Text**: All images have alt text
- **Captions**: Video/audio content captioned
- **Reduce Motion**: Respect system preference

**Accessibility Features**:
- VoiceOver/TalkBack optimization
- Dynamic type support
- High contrast mode
- Reduce transparency option
- Button shapes option

### 4.9 Dark Mode Strategy

**Implementation**:
- Automatic switching based on system preference
- Manual override in settings
- Smooth transition animation
- Persistent user preference

**Dark Mode Optimizations**:
- True black backgrounds for OLED (#000000 option)
- Reduced brightness for images
- Adjusted shadows and elevations
- Optimized for night reading

### 4.10 Platform-Specific Design

**iOS (Cupertino)**:
- SF Symbols for icons
- iOS-style navigation bar
- Cupertino action sheets
- iOS-style switches and pickers
- Haptic feedback patterns
- Swipe-back gesture

**Android (Material Design)**:
- Material icons
- Material app bar
- Bottom sheets
- Material switches and pickers
- Material ripple effects
- Back button support

**Adaptive Design**:
- Use platform-specific components where appropriate
- Maintain brand identity across platforms
- Respect platform conventions

---

## 5. Technical Architecture

### 5.1 State Management

**Recommended Solution: Riverpod**

**Justification**:
- **Type-safe**: Compile-time safety with Dart
- **Testable**: Easy to test providers in isolation
- **No BuildContext**: Access state anywhere without context
- **Performance**: Automatic optimization and caching
- **DevTools**: Excellent debugging support
- **Scalability**: Handles complex state trees
- **Community**: Strong ecosystem and documentation

**Alternative Considered**:
- **Provider**: Simpler but less powerful than Riverpod
- **Bloc**: More boilerplate, steeper learning curve
- **GetX**: Less type-safe, controversial in community

**State Structure**:

```dart
// Authentication State
final authProvider = StateNotifierProvider<AuthNotifier, AuthState>((ref) {
  return AuthNotifier(ref.read(authRepositoryProvider));
});

// Bible State
final bibleProvider = StateNotifierProvider<BibleNotifier, BibleState>((ref) {
  return BibleNotifier(ref.read(bibleRepositoryProvider));
});

// Music Player State
final musicPlayerProvider = StateNotifierProvider<MusicPlayerNotifier, MusicPlayerState>((ref) {
  return MusicPlayerNotifier(ref.read(audioServiceProvider));
});

// User Preferences
final themeProvider = StateProvider<ThemeMode>((ref) => ThemeMode.system);
final fontSizeProvider = StateProvider<double>((ref) => 16.0);
```

**Global vs. Local State**:

**Global State** (Riverpod Providers):
- User authentication status
- User profile data
- Theme preferences
- Music player state
- Downloaded content
- Saved verses/bookmarks
- Prayer history

**Local State** (StatefulWidget/Hooks):
- Form inputs
- UI animations
- Scroll positions
- Temporary selections
- Modal states

### 5.2 Data Persistence

**Local Database: Hive**

**Justification**:
- **Performance**: Faster than SQLite for most operations
- **No Native Dependencies**: Pure Dart implementation
- **Type-safe**: Strongly typed boxes
- **Encryption**: Built-in encryption support
- **Lazy Loading**: Efficient memory usage
- **Simple API**: Easy to learn and use
- **Cross-platform**: Works on all Flutter platforms

**Alternative Considered**:
- **SQLite (sqflite)**: More complex queries, slower for simple operations
- **Isar**: Newer, less mature ecosystem
- **Drift**: More boilerplate, SQL-based

**Data Models & Schema**:

```dart
// User Model
@HiveType(typeId: 0)
class User extends HiveObject {
  @HiveField(0)
  String id;

  @HiveField(1)
  String email;

  @HiveField(2)
  String name;

  @HiveField(3)
  String? photoUrl;

  @HiveField(4)
  DateTime createdAt;

  @HiveField(5)
  Map<String, dynamic> preferences;
}

// Saved Verse Model
@HiveType(typeId: 1)
class SavedVerse extends HiveObject {
  @HiveField(0)
  String id;

  @HiveField(1)
  String book;

  @HiveField(2)
  int chapter;

  @HiveField(3)
  int verseNumber;

  @HiveField(4)
  String verseText;

  @HiveField(5)
  String? personalNote;

  @HiveField(6)
  List<String> tags;

  @HiveField(7)
  String? category;

  @HiveField(8)
  DateTime savedDate;

  @HiveField(9)
  bool isFavorite;

  @HiveField(10)
  String? highlightColor;
}

// Downloaded Track Model
@HiveType(typeId: 2)
class DownloadedTrack extends HiveObject {
  @HiveField(0)
  String id;

  @HiveField(1)
  String title;

  @HiveField(2)
  String artist;

  @HiveField(3)
  String localPath;

  @HiveField(4)
  DateTime downloadedAt;

  @HiveField(5)
  int fileSize;

  @HiveField(6)
  String? albumArtPath;
}

// Prayer History Model
@HiveType(typeId: 3)
class PrayerHistory extends HiveObject {
  @HiveField(0)
  String id;

  @HiveField(1)
  String prayerId;

  @HiveField(2)
  DateTime prayedAt;

  @HiveField(3)
  int duration; // seconds
}

// Playlist Model
@HiveType(typeId: 4)
class Playlist extends HiveObject {
  @HiveField(0)
  String id;

  @HiveField(1)
  String name;

  @HiveField(2)
  String? description;

  @HiveField(3)
  List<String> trackIds;

  @HiveField(4)
  DateTime createdAt;

  @HiveField(5)
  DateTime modifiedAt;

  @HiveField(6)
  String? coverImagePath;
}
```

**Hive Boxes**:
- `userBox`: User profile and preferences
- `savedVersesBox`: Bookmarked verses
- `downloadedTracksBox`: Offline music
- `prayerHistoryBox`: Prayer tracking
- `playlistsBox`: User playlists
- `cacheBox`: API response caching

**Cloud Database: Supabase (Primary Backend)**

**Justification**:
- **PostgreSQL**: Powerful relational database with full SQL support
- **Real-time**: Built-in WebSocket subscriptions for live chat
- **Authentication**: Complete auth system with social providers
- **Storage**: File storage for images, audio, and user uploads
- **Row-Level Security**: Database-level security policies
- **Edge Functions**: Serverless functions for custom logic
- **APIs**: Auto-generated REST and GraphQL APIs
- **Free Tier**: Generous free tier perfect for development and launch
- **Flutter SDK**: Official, well-maintained Flutter package
- **Open Source**: No vendor lock-in, can self-host if needed

**Complete Backend Solution**: Supabase will handle ALL backend needs:
- User authentication and management
- Real-time community chat
- File storage for music and images
- Database for all app data
- Push notifications (via webhooks)
- API generation and management

**Supabase Schema**:

```sql
-- Users table (extends Supabase auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  email TEXT,
  name TEXT,
  photo_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  preferences JSONB
);

-- Community Groups
CREATE TABLE groups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL, -- 'community', 'prayer', 'study', 'counselling'
  is_private BOOLEAN DEFAULT false,
  created_by UUID REFERENCES profiles(id),
  created_at TIMESTAMP DEFAULT NOW(),
  member_count INTEGER DEFAULT 0
);

-- Group Members
CREATE TABLE group_members (
  group_id UUID REFERENCES groups(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'member', -- 'member', 'moderator', 'admin'
  joined_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (group_id, user_id)
);

-- Messages
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  group_id UUID REFERENCES groups(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id),
  content TEXT NOT NULL,
  message_type TEXT DEFAULT 'text', -- 'text', 'image', 'voice', 'file'
  file_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  edited_at TIMESTAMP,
  is_deleted BOOLEAN DEFAULT false
);

-- Prayer Requests
CREATE TABLE prayer_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id),
  group_id UUID REFERENCES groups(id),
  title TEXT NOT NULL,
  description TEXT,
  is_answered BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  prayer_count INTEGER DEFAULT 0
);

-- Shared Verses (for community sharing)
CREATE TABLE shared_verses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id),
  verse_reference TEXT NOT NULL,
  verse_text TEXT NOT NULL,
  note TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  like_count INTEGER DEFAULT 0
);

-- Indexes for performance
CREATE INDEX idx_messages_group_id ON messages(group_id);
CREATE INDEX idx_messages_created_at ON messages(created_at DESC);
CREATE INDEX idx_group_members_user_id ON group_members(user_id);
```

**Data Migration Strategy**:
- No existing database to migrate
- Fresh start with new schema
- Import static data (prayers, rosary, saints) from TypeScript files to JSON/Dart constants

### 5.3 API Architecture

**Backend Requirements**: No custom backend needed - Supabase provides everything

**API Design Pattern**: REST + Real-time (Supabase)

**Backend Architecture**: 
- **Primary Backend**: Supabase (handles ALL backend operations)
- **External APIs**: Only for third-party services (AI, Bible, Music)
- **No Custom Server**: All backend logic handled by Supabase

**Endpoint Specifications**:

**External APIs** (Same as Web):

1. **Groq AI API**
   - Endpoint: `https://api.groq.com/openai/v1/chat/completions`
   - Method: POST
   - Authentication: API Key in header
   - Request:
     ```json
     {
       "model": "llama-3.3-70b-versatile",
       "messages": [
         {"role": "system", "content": "..."},
         {"role": "user", "content": "..."}
       ]
     }
     ```
   - Response: OpenAI-compatible chat completion

2. **API.Bible**
   - Base URL: `https://api.scripture.api.bible/v1`
   - Authentication: API Key in header
   - Endpoints:
     - `GET /bibles/{bibleId}/books` - List books
     - `GET /bibles/{bibleId}/chapters/{chapterId}` - Get chapter content
     - `GET /bibles/{bibleId}/search` - Search verses
   - Bible ID: `bba9f40183526463-01` (English)

3. **Spotify Web API** (or alternative)
   - Base URL: `https://api.spotify.com/v1`
   - Authentication: OAuth 2.0 Client Credentials
   - Endpoints:
     - `GET /search` - Search tracks
     - `GET /tracks/{id}` - Get track details
     - `GET /playlists/{id}` - Get playlist
   - Note: Consider alternative for offline downloads

**Supabase APIs** (Auto-generated):
- REST API for CRUD operations
- Real-time subscriptions for chat
- Authentication endpoints
- Storage endpoints for file uploads

**Authentication/Authorization**:

**Implementation**: Supabase Auth

**Supported Methods**:
- Email/Password
- Google OAuth
- Apple Sign In
- Facebook Login (optional)
- Anonymous sign-in (optional)

**JWT Token Flow**:
1. User signs in via Supabase Auth
2. Supabase returns JWT access token and refresh token
3. Store tokens securely in `flutter_secure_storage`
4. Include access token in API requests
5. Refresh token when expired
6. Logout clears tokens

**Row-Level Security** (Supabase):
```sql
-- Users can only read/update their own profile
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

-- Users can only see messages in groups they're members of
CREATE POLICY "Users can view group messages"
  ON messages FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM group_members
      WHERE group_id = messages.group_id
      AND user_id = auth.uid()
    )
  );
```

**API Error Handling**:

```dart
class ApiException implements Exception {
  final String message;
  final int? statusCode;
  final String? errorCode;

  ApiException(this.message, {this.statusCode, this.errorCode});
}

// Error handling wrapper
Future<T> handleApiCall<T>(Future<T> Function() apiCall) async {
  try {
    return await apiCall();
  } on DioException catch (e) {
    if (e.response?.statusCode == 401) {
      throw ApiException('Unauthorized', statusCode: 401);
    } else if (e.response?.statusCode == 404) {
      throw ApiException('Not found', statusCode: 404);
    } else if (e.type == DioExceptionType.connectionTimeout) {
      throw ApiException('Connection timeout');
    } else {
      throw ApiException('Network error: ${e.message}');
    }
  } catch (e) {
    throw ApiException('Unexpected error: $e');
  }
}
```

**API Retry Logic**:

```dart
Future<T> retryApiCall<T>(
  Future<T> Function() apiCall, {
  int maxRetries = 3,
  Duration delay = const Duration(seconds: 2),
}) async {
  int retries = 0;
  while (true) {
    try {
      return await apiCall();
    } catch (e) {
      retries++;
      if (retries >= maxRetries) rethrow;
      await Future.delayed(delay * retries);
    }
  }
}
```

### 5.4 Offline-First Strategy

**Features That Must Work Offline**:
1. ✅ Bible reading (downloaded books)
2. ✅ Prayers library (all prayers)
3. ✅ Rosary guide (all content)
4. ✅ Saints library (all biographies)
5. ✅ Music playback (downloaded tracks)
6. ✅ Saved verses/bookmarks
7. ✅ Prayer history
8. ❌ AI Chat (requires internet)
9. ❌ Community groups (requires internet)
10. ❌ Music search/streaming (requires internet)

**Data Synchronization Approach**:

**Strategy**: Last-Write-Wins with Conflict Detection

**Sync Triggers**:
- App launch (if online)
- Manual pull-to-refresh
- Background sync (periodic)
- After user action (when online)

**Sync Flow**:
```dart
class SyncService {
  Future<void> syncData() async {
    if (!await isOnline()) return;

    // 1. Push local changes to server
    await pushLocalChanges();

    // 2. Pull server changes
    await pullServerChanges();

    // 3. Resolve conflicts
    await resolveConflicts();

    // 4. Update last sync timestamp
    await updateLastSyncTime();
  }

  Future<void> pushLocalChanges() async {
    // Get all local changes since last sync
    final changes = await getLocalChangesSinceLastSync();

    // Upload to Supabase
    for (final change in changes) {
      await uploadChange(change);
    }
  }

  Future<void> pullServerChanges() async {
    // Get server changes since last sync
    final serverChanges = await getServerChangesSinceLastSync();

    // Apply to local database
    for (final change in serverChanges) {
      await applyChange(change);
    }
  }

  Future<void> resolveConflicts() async {
    // Simple strategy: server wins
    // For user data: merge or prompt user
  }
}
```

**Conflict Resolution**:
- **Server Wins**: For shared data (community messages)
- **Client Wins**: For user preferences
- **Merge**: For collections (combine saved verses)
- **Prompt User**: For critical conflicts

**Caching Strategy**:

**API Response Caching**:
```dart
class CacheManager {
  final Hive cacheBox;

  Future<T?> getCached<T>(String key, {Duration? maxAge}) async {
    final cached = await cacheBox.get(key);
    if (cached == null) return null;

    if (maxAge != null) {
      final cachedAt = DateTime.parse(cached['cachedAt']);
      if (DateTime.now().difference(cachedAt) > maxAge) {
        return null; // Expired
      }
    }

    return cached['data'] as T;
  }

  Future<void> cache(String key, dynamic data) async {
    await cacheBox.put(key, {
      'data': data,
      'cachedAt': DateTime.now().toIso8601String(),
    });
  }
}
```

**Cache Policies**:
- **Bible chapters**: Cache indefinitely (content doesn't change)
- **Music search results**: Cache for 1 hour
- **Community messages**: Cache for 5 minutes
- **User profile**: Cache for 1 day
- **Saints/Prayers**: Cache indefinitely (static content)

**Queue System for Offline Actions**:

```dart
class OfflineQueue {
  final Hive queueBox;

  Future<void> enqueue(OfflineAction action) async {
    await queueBox.add(action.toJson());
  }

  Future<void> processQueue() async {
    if (!await isOnline()) return;

    final actions = queueBox.values.toList();
    for (final action in actions) {
      try {
        await executeAction(action);
        await queueBox.delete(action.key);
      } catch (e) {
        // Keep in queue, retry later
        print('Failed to execute action: $e');
      }
    }
  }
}

class OfflineAction {
  final String type; // 'send_message', 'save_verse', etc.
  final Map<String, dynamic> data;
  final DateTime createdAt;

  OfflineAction({
    required this.type,
    required this.data,
    required this.createdAt,
  });
}
```

**Offline Indicators**:
- Banner at top when offline
- Disabled buttons for online-only features
- Queue status indicator
- "Waiting to sync" badges on pending actions

### 5.5 Media Management (Music/Hymns Feature)

**Audio File Storage Strategy**:

**Local Storage**:
- **Location**: App documents directory
- **Format**: MP3 or AAC (compressed)
- **Quality Options**:
  - Low: 96 kbps (~1 MB per song)
  - Medium: 128 kbps (~1.5 MB per song)
  - High: 256 kbps (~3 MB per song)
- **Naming**: `{trackId}.{format}` (e.g., `abc123.mp3`)
- **Metadata**: Stored in Hive database

**Cloud Storage** (Supabase Storage):
- **Bucket**: `music-files`
- **Structure**: `/{artist}/{album}/{trackId}.mp3`
- **Access**: Authenticated users only
- **CDN**: Automatic CDN distribution

**Download Management**:

```dart
class DownloadManager {
  final Dio dio;
  final Hive downloadBox;

  Future<void> downloadTrack(Track track, {Quality quality = Quality.medium}) async {
    final downloadId = uuid.v4();

    // Create download record
    final download = Download(
      id: downloadId,
      trackId: track.id,
      status: DownloadStatus.downloading,
      progress: 0.0,
      quality: quality,
    );

    await downloadBox.put(downloadId, download);

    try {
      // Download file with progress tracking
      final savePath = await getTrackPath(track.id, quality);
      await dio.download(
        track.getStreamUrl(quality),
        savePath,
        onReceiveProgress: (received, total) {
          final progress = received / total;
          updateDownloadProgress(downloadId, progress);
        },
      );

      // Mark as completed
      await completeDownload(downloadId, savePath);

    } catch (e) {
      await failDownload(downloadId, e.toString());
    }
  }

  Future<void> deleteDownload(String trackId) async {
    final path = await getTrackPath(trackId);
    final file = File(path);
    if (await file.exists()) {
      await file.delete();
    }
    await downloadBox.delete(trackId);
  }

  Future<int> getTotalDownloadSize() async {
    int totalSize = 0;
    final downloads = downloadBox.values;
    for (final download in downloads) {
      if (download.status == DownloadStatus.completed) {
        final file = File(download.localPath);
        totalSize += await file.length();
      }
    }
    return totalSize;
  }
}
```

**Storage Limits**:
- Default: 500 MB
- User-configurable: 100 MB - 2 GB
- Warning at 90% capacity
- Auto-delete oldest downloads option

**Streaming Protocol**:
- **HLS (HTTP Live Streaming)** for adaptive bitrate
- **Progressive Download** for simple streaming
- **Fallback**: Direct MP3 stream

**Audio Format Recommendations**:
- **Primary**: MP3 (universal compatibility)
- **Alternative**: AAC (better quality at same bitrate)
- **Avoid**: FLAC (too large for mobile)

---

## 6. Project Structure

### 6.1 Recommended Folder Organization

```
gnosis_mobile/
├── lib/
│   ├── main.dart                          # App entry point
│   ├── app.dart                           # Root app widget
│   │
│   ├── core/                              # Core functionality
│   │   ├── constants/
│   │   │   ├── app_constants.dart         # App-wide constants
│   │   │   ├── api_constants.dart         # API endpoints
│   │   │   └── theme_constants.dart       # Theme values
│   │   ├── errors/
│   │   │   ├── exceptions.dart            # Custom exceptions
│   │   │   └── failures.dart              # Failure classes
│   │   ├── network/
│   │   │   ├── dio_client.dart            # Dio configuration
│   │   │   └── network_info.dart          # Connectivity checker
│   │   ├── utils/
│   │   │   ├── date_utils.dart
│   │   │   ├── string_utils.dart
│   │   │   └── validators.dart
│   │   └── services/
│   │       ├── storage_service.dart       # Hive wrapper
│   │       ├── cache_service.dart         # Caching logic
│   │       └── notification_service.dart  # Push notifications
│   │
│   ├── config/                            # Configuration
│   │   ├── routes/
│   │   │   ├── app_router.dart            # Route definitions
│   │   │   └── route_guards.dart          # Auth guards
│   │   ├── theme/
│   │   │   ├── app_theme.dart             # Theme data
│   │   │   ├── light_theme.dart
│   │   │   ├── dark_theme.dart
│   │   │   └── text_styles.dart
│   │   └── env/
│   │       ├── env.dart                   # Environment config
│   │       └── env.g.dart                 # Generated env
│   │
│   ├── data/                              # Data layer
│   │   ├── models/                        # Data models
│   │   │   ├── user_model.dart
│   │   │   ├── verse_model.dart
│   │   │   ├── prayer_model.dart
│   │   │   ├── track_model.dart
│   │   │   ├── message_model.dart
│   │   │   └── saint_model.dart
│   │   ├── repositories/                  # Repository implementations
│   │   │   ├── auth_repository.dart
│   │   │   ├── bible_repository.dart
│   │   │   ├── prayer_repository.dart
│   │   │   ├── music_repository.dart
│   │   │   ├── community_repository.dart
│   │   │   └── saint_repository.dart
│   │   ├── datasources/                   # Data sources
│   │   │   ├── local/
│   │   │   │   ├── hive_datasource.dart
│   │   │   │   └── secure_storage_datasource.dart
│   │   │   └── remote/
│   │   │       ├── groq_api_datasource.dart
│   │   │       ├── bible_api_datasource.dart
│   │   │       ├── spotify_api_datasource.dart
│   │   │       └── supabase_datasource.dart
│   │   └── static/                        # Static data
│   │       ├── prayers_data.dart
│   │       ├── rosary_data.dart
│   │       └── saints_data.dart
│   │
│   ├── domain/                            # Business logic layer
│   │   ├── entities/                      # Domain entities
│   │   │   ├── user.dart
│   │   │   ├── verse.dart
│   │   │   ├── prayer.dart
│   │   │   ├── track.dart
│   │   │   └── message.dart
│   │   ├── repositories/                  # Repository interfaces
│   │   │   ├── i_auth_repository.dart
│   │   │   ├── i_bible_repository.dart
│   │   │   └── i_music_repository.dart
│   │   └── usecases/                      # Use cases
│   │       ├── auth/
│   │       │   ├── sign_in_usecase.dart
│   │       │   ├── sign_up_usecase.dart
│   │       │   └── sign_out_usecase.dart
│   │       ├── bible/
│   │       │   ├── get_chapter_usecase.dart
│   │       │   ├── search_verses_usecase.dart
│   │       │   └── save_verse_usecase.dart
│   │       ├── music/
│   │       │   ├── play_track_usecase.dart
│   │       │   ├── download_track_usecase.dart
│   │       │   └── create_playlist_usecase.dart
│   │       └── chat/
│   │           └── send_message_usecase.dart
│   │
│   ├── presentation/                      # UI layer
│   │   ├── screens/                       # Screen widgets
│   │   │   ├── splash/
│   │   │   │   └── splash_screen.dart
│   │   │   ├── onboarding/
│   │   │   │   └── onboarding_screen.dart
│   │   │   ├── auth/
│   │   │   │   ├── login_screen.dart
│   │   │   │   └── register_screen.dart
│   │   │   ├── home/
│   │   │   │   ├── home_screen.dart
│   │   │   │   └── widgets/
│   │   │   │       ├── daily_devotional_card.dart
│   │   │   │       └── quick_actions_grid.dart
│   │   │   ├── bible/
│   │   │   │   ├── bible_reader_screen.dart
│   │   │   │   ├── saved_verses_screen.dart
│   │   │   │   ├── verse_detail_screen.dart
│   │   │   │   └── widgets/
│   │   │   │       ├── book_selector.dart
│   │   │   │       ├── chapter_selector.dart
│   │   │   │       └── verse_card.dart
│   │   │   ├── prayers/
│   │   │   │   ├── prayers_screen.dart
│   │   │   │   ├── prayer_detail_screen.dart
│   │   │   │   └── widgets/
│   │   │   │       └── prayer_card.dart
│   │   │   ├── rosary/
│   │   │   │   ├── rosary_screen.dart
│   │   │   │   ├── guided_rosary_screen.dart
│   │   │   │   └── widgets/
│   │   │   │       ├── mystery_card.dart
│   │   │   │       └── bead_counter.dart
│   │   │   ├── chat/
│   │   │   │   ├── chat_screen.dart
│   │   │   │   └── widgets/
│   │   │   │       ├── message_bubble.dart
│   │   │   │       └── chat_input.dart
│   │   │   ├── music/
│   │   │   │   ├── music_library_screen.dart
│   │   │   │   ├── player_screen.dart
│   │   │   │   ├── playlists_screen.dart
│   │   │   │   └── widgets/
│   │   │   │       ├── track_tile.dart
│   │   │   │       ├── mini_player.dart
│   │   │   │       └── playlist_card.dart
│   │   │   ├── community/
│   │   │   │   ├── community_screen.dart
│   │   │   │   ├── group_chat_screen.dart
│   │   │   │   └── widgets/
│   │   │   │       └── group_card.dart
│   │   │   ├── saints/
│   │   │   │   ├── saints_screen.dart
│   │   │   │   ├── saint_detail_screen.dart
│   │   │   │   └── widgets/
│   │   │   │       └── saint_card.dart
│   │   │   └── profile/
│   │   │       ├── profile_screen.dart
│   │   │       └── settings_screen.dart
│   │   │
│   │   ├── widgets/                       # Shared widgets
│   │   │   ├── common/
│   │   │   │   ├── custom_button.dart
│   │   │   │   ├── custom_text_field.dart
│   │   │   │   ├── loading_indicator.dart
│   │   │   │   ├── error_widget.dart
│   │   │   │   └── empty_state.dart
│   │   │   ├── navigation/
│   │   │   │   ├── bottom_nav_bar.dart
│   │   │   │   └── app_drawer.dart
│   │   │   └── cards/
│   │   │       ├── sacred_card.dart
│   │   │       └── gradient_card.dart
│   │   │
│   │   └── providers/                     # Riverpod providers
│   │       ├── auth_provider.dart
│   │       ├── bible_provider.dart
│   │       ├── music_player_provider.dart
│   │       ├── theme_provider.dart
│   │       └── chat_provider.dart
│   │
│   └── l10n/                              # Localization
│       ├── app_en.arb                     # English
│       ├── app_es.arb                     # Spanish
│       └── app_ml.arb                     # Malayalam
│
├── assets/                                # Assets
│   ├── images/
│   │   ├── logo.png
│   │   ├── splash.png
│   │   └── onboarding/
│   ├── icons/
│   │   └── app_icon.png
│   ├── fonts/
│   │   ├── Inter-Regular.ttf
│   │   ├── Inter-Medium.ttf
│   │   ├── Inter-SemiBold.ttf
│   │   ├── CrimsonText-Regular.ttf
│   │   └── CrimsonText-SemiBold.ttf
│   └── data/
│       ├── prayers.json
│       ├── rosary.json
│       └── saints.json
│
├── test/                                  # Tests
│   ├── unit/
│   │   ├── repositories/
│   │   └── usecases/
│   ├── widget/
│   │   └── screens/
│   └── integration/
│       └── flows/
│
├── android/                               # Android native code
├── ios/                                   # iOS native code
├── pubspec.yaml                           # Dependencies
└── README.md                              # Project documentation
```

### 6.2 Naming Conventions

**Files**:
- **Dart files**: `snake_case.dart` (e.g., `bible_reader_screen.dart`)
- **Classes**: `PascalCase` (e.g., `BibleReaderScreen`)
- **Variables/Functions**: `camelCase` (e.g., `getUserProfile`)
- **Constants**: `lowerCamelCase` or `SCREAMING_SNAKE_CASE` for compile-time constants
- **Private members**: Prefix with `_` (e.g., `_privateMethod`)

**Folders**:
- All lowercase with underscores: `saved_verses/`
- Plural for collections: `screens/`, `widgets/`, `models/`

**Widgets**:
- Screens: `*Screen` suffix (e.g., `HomeScreen`)
- Widgets: Descriptive names (e.g., `MessageBubble`, `PrayerCard`)
- Stateful widgets: No special suffix
- Stateless widgets: No special suffix

**Providers**:
- State Notifiers: `*Notifier` suffix (e.g., `AuthNotifier`)
- Providers: `*Provider` suffix (e.g., `authProvider`)

**Models**:
- Data models: `*Model` suffix (e.g., `UserModel`)
- Entities: No suffix (e.g., `User`)

**Use Cases**:
- `*UseCase` suffix (e.g., `SignInUseCase`)
- Verb-based names (e.g., `GetChapterUseCase`)

### 6.3 Code Organization Patterns

**Pattern**: Feature-based + Layered Architecture

**Layers**:
1. **Presentation**: UI, widgets, state management
2. **Domain**: Business logic, entities, use cases
3. **Data**: Repositories, data sources, models

**Benefits**:
- Clear separation of concerns
- Easy to test each layer independently
- Scalable for large teams
- Follows Clean Architecture principles

**Example Feature Structure**:
```
bible/
├── data/
│   ├── models/
│   │   └── verse_model.dart
│   ├── repositories/
│   │   └── bible_repository_impl.dart
│   └── datasources/
│       ├── bible_local_datasource.dart
│       └── bible_remote_datasource.dart
├── domain/
│   ├── entities/
│   │   └── verse.dart
│   ├── repositories/
│   │   └── i_bible_repository.dart
│   └── usecases/
│       ├── get_chapter_usecase.dart
│       └── save_verse_usecase.dart
└── presentation/
    ├── screens/
    │   └── bible_reader_screen.dart
    ├── widgets/
    │   └── verse_card.dart
    └── providers/
        └── bible_provider.dart
```

### 6.4 Configuration File Structure

**pubspec.yaml**:
```yaml
name: gnosis_mobile
description: Your Spiritual Companion - Catholic faith app
version: 1.0.0+1

environment:
  sdk: '>=3.0.0 <4.0.0'

dependencies:
  flutter:
    sdk: flutter

  # State Management
  flutter_riverpod: ^2.4.0
  riverpod_annotation: ^2.3.0

  # Navigation
  go_router: ^12.0.0

  # Network
  dio: ^5.4.0
  connectivity_plus: ^5.0.0

  # Local Storage
  hive: ^2.2.3
  hive_flutter: ^1.1.0
  flutter_secure_storage: ^9.0.0

  # Backend
  supabase_flutter: ^2.0.0

  # Audio
  just_audio: ^0.9.36
  audio_service: ^0.18.12

  # UI
  cached_network_image: ^3.3.0
  flutter_markdown: ^0.6.18
  google_fonts: ^6.1.0

  # Utilities
  intl: ^0.18.1
  share_plus: ^7.2.1
  url_launcher: ^6.2.1
  path_provider: ^2.1.1
  uuid: ^4.2.1

  # Firebase (optional)
  firebase_core: ^2.24.0
  firebase_messaging: ^14.7.6

  # Other
  flutter_localizations:
    sdk: flutter

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0
  build_runner: ^2.4.6
  hive_generator: ^2.0.1
  riverpod_generator: ^2.3.0
  mockito: ^5.4.4

flutter:
  uses-material-design: true

  assets:
    - assets/images/
    - assets/icons/
    - assets/data/

  fonts:
    - family: Inter
      fonts:
        - asset: assets/fonts/Inter-Regular.ttf
        - asset: assets/fonts/Inter-Medium.ttf
          weight: 500
        - asset: assets/fonts/Inter-SemiBold.ttf
          weight: 600
    - family: CrimsonText
      fonts:
        - asset: assets/fonts/CrimsonText-Regular.ttf
        - asset: assets/fonts/CrimsonText-SemiBold.ttf
          weight: 600
```

**Environment Configuration** (.env):
```
GROQ_API_KEY=your_groq_api_key
BIBLE_API_KEY=your_bible_api_key
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 6.5 Asset Organization

**Images**:
- `assets/images/logo.png` - App logo
- `assets/images/splash.png` - Splash screen
- `assets/images/onboarding/` - Onboarding illustrations
- `assets/images/saints/` - Saint images (optional)

**Icons**:
- `assets/icons/app_icon.png` - App icon (1024x1024)
- Platform-specific icons generated via `flutter_launcher_icons`

**Fonts**:
- Store in `assets/fonts/`
- Reference in `pubspec.yaml`

**Data**:
- `assets/data/prayers.json` - Static prayer data
- `assets/data/rosary.json` - Rosary mysteries
- `assets/data/saints.json` - Saint biographies

---

## 7. Implementation Roadmap

### Phase 1: Foundation (Week 1-2)

**Week 1: Project Setup & Core Infrastructure**

**Day 1-2: Project Initialization**
- [ ] Create Flutter project with proper package name
- [ ] Set up version control (Git)
- [ ] Configure project structure (folders, files)
- [ ] Set up environment configuration (.env)
- [ ] Configure linting rules
- [ ] Set up CI/CD pipeline (GitHub Actions or similar)

**Day 3-4: Dependencies & Configuration**
- [ ] Add all required dependencies to pubspec.yaml
- [ ] Configure Hive for local storage
- [ ] Set up Riverpod for state management
- [ ] Configure Dio for HTTP requests
- [ ] Set up Supabase client
- [ ] Configure secure storage for tokens

**Day 5-7: Theme & Design System**
- [ ] Implement light theme
- [ ] Implement dark theme
- [ ] Create custom color palette
- [ ] Set up typography (Inter, Crimson Text)
- [ ] Create reusable widget components (buttons, cards, inputs)
- [ ] Implement theme switching logic
- [ ] Test theme on different screen sizes

**Week 2: Navigation & Authentication**

**Day 8-10: Navigation Setup**
- [ ] Configure GoRouter for navigation
- [ ] Define all routes
- [ ] Implement route guards for authentication
- [ ] Create bottom navigation bar
- [ ] Implement navigation transitions
- [ ] Test deep linking (optional)

**Day 11-14: Authentication**
- [ ] Set up Supabase authentication
- [ ] Implement login screen UI
- [ ] Implement registration screen UI
- [ ] Implement login logic (email/password)
- [ ] Implement registration logic
- [ ] Implement Google Sign-In
- [ ] Implement Apple Sign-In (iOS)
- [ ] Implement token storage and refresh
- [ ] Create user profile model
- [ ] Test authentication flow end-to-end

**Deliverables**:
- ✅ Working app with navigation
- ✅ Complete authentication system
- ✅ Theme system with light/dark mode
- ✅ Reusable UI components

### Phase 2: Core Features (Week 3-5)

**Week 3: Bible Reader & Prayers**

**Day 15-17: Bible Reader**
- [ ] Implement Bible API integration
- [ ] Create Bible reader screen UI
- [ ] Implement book/chapter selector
- [ ] Implement chapter content display
- [ ] Add swipe navigation between chapters
- [ ] Implement verse highlighting
- [ ] Add bookmark functionality
- [ ] Implement local caching for chapters
- [ ] Test Bible reader on different devices

**Day 18-21: Prayers Library**
- [ ] Convert prayer data to Dart/JSON
- [ ] Create prayers list screen
- [ ] Implement category filtering
- [ ] Create prayer detail screen
- [ ] Implement search functionality
- [ ] Add favorites feature
- [ ] Implement prayer reminders (notifications)
- [ ] Test prayers feature

**Week 4: Rosary & AI Chat**

**Day 22-24: Rosary Guide**
- [ ] Convert rosary data to Dart/JSON
- [ ] Create rosary screen UI
- [ ] Implement mystery selection
- [ ] Create guided rosary mode
- [ ] Implement bead counter visualization
- [ ] Add progress tracking
- [ ] Implement audio prayers (text-to-speech)
- [ ] Test rosary feature

**Day 25-28: AI Spiritual Chat**
- [ ] Implement Groq API integration
- [ ] Create chat screen UI
- [ ] Implement message sending/receiving
- [ ] Add message history persistence
- [ ] Implement markdown rendering
- [ ] Add copy/share message functionality
- [ ] Implement offline message queue
- [ ] Add voice input (speech-to-text)
- [ ] Test chat feature

**Week 5: Saints & Home Screen**

**Day 29-31: Saints Library**
- [ ] Convert saints data to Dart/JSON
- [ ] Create saints list screen
- [ ] Implement search functionality
- [ ] Create saint detail screen
- [ ] Implement markdown rendering for biographies
- [ ] Add share functionality
- [ ] Test saints feature

**Day 32-35: Home/Dashboard Screen**
- [ ] Design home screen layout
- [ ] Implement daily devotional card
- [ ] Create quick actions grid
- [ ] Add "Continue Reading" section
- [ ] Implement prayer streak tracking
- [ ] Add recommended content section
- [ ] Test home screen

**Deliverables**:
- ✅ Complete Bible reader with bookmarks
- ✅ Full prayers library with reminders
- ✅ Interactive rosary guide
- ✅ AI chat with spiritual guidance
- ✅ Saints library
- ✅ Functional home screen

### Phase 3: New Features (Week 6-7)

**Week 6: Saved Verses & Music Foundation**

**Day 36-38: Saved Verses Feature**
- [ ] Create saved verses data model
- [ ] Implement save verse functionality
- [ ] Create saved verses list screen
- [ ] Implement categories and tags
- [ ] Add search and filter
- [ ] Implement verse sharing (text & image)
- [ ] Add export functionality (PDF, text)
- [ ] Test saved verses feature

**Day 39-42: Music Library Foundation**
- [ ] Set up audio player (just_audio)
- [ ] Implement Spotify API integration (or alternative)
- [ ] Create music library screen UI
- [ ] Implement music search
- [ ] Create track list UI
- [ ] Implement basic playback controls
- [ ] Test music search and playback

**Week 7: Music Features & Community**

**Day 43-45: Advanced Music Features**
- [ ] Implement playlists functionality
- [ ] Create full player screen
- [ ] Add background playback
- [ ] Implement lock screen controls
- [ ] Add download functionality
- [ ] Implement offline playback
- [ ] Create mini player widget
- [ ] Add favorites feature
- [ ] Test all music features

**Day 46-49: Community Groups**
- [ ] Set up Supabase real-time subscriptions
- [ ] Create community groups screen
- [ ] Implement group listing and filtering
- [ ] Create group chat screen
- [ ] Implement real-time messaging
- [ ] Add image/file sharing
- [ ] Implement push notifications for messages
- [ ] Test community features

**Deliverables**:
- ✅ Complete saved verses system
- ✅ Full music player with offline support
- ✅ Real-time community groups

### Phase 4: Polish & Testing (Week 8-9)

**Week 8: Offline Functionality & Optimization**

**Day 50-52: Offline Implementation**
- [ ] Implement offline detection
- [ ] Add offline indicators in UI
- [ ] Implement data synchronization
- [ ] Create offline action queue
- [ ] Test offline Bible reading
- [ ] Test offline music playback
- [ ] Test offline prayers/rosary
- [ ] Implement conflict resolution

**Day 53-56: Performance Optimization**
- [ ] Optimize image loading and caching
- [ ] Reduce app size (code splitting, compression)
- [ ] Optimize database queries
- [ ] Implement lazy loading for lists
- [ ] Optimize animations (60fps)
- [ ] Profile app performance
- [ ] Fix memory leaks
- [ ] Test on low-end devices

**Week 9: Testing & Bug Fixes**

**Day 57-59: Comprehensive Testing**
- [ ] Write unit tests for repositories
- [ ] Write unit tests for use cases
- [ ] Write widget tests for key screens
- [ ] Write integration tests for critical flows
- [ ] Test on multiple devices (iOS & Android)
- [ ] Test different screen sizes
- [ ] Test accessibility features
- [ ] Perform security audit

**Day 60-63: Bug Fixes & Refinement**
- [ ] Fix all critical bugs
- [ ] Fix UI/UX issues
- [ ] Improve error handling
- [ ] Add loading states everywhere
- [ ] Improve empty states
- [ ] Polish animations and transitions
- [ ] Final QA testing
- [ ] User acceptance testing (if possible)

**Deliverables**:
- ✅ Fully offline-capable app
- ✅ Optimized performance
- ✅ Comprehensive test coverage
- ✅ Bug-free, polished app

### Phase 5: Deployment (Week 10)

**Day 64-66: App Store Preparation**
- [ ] Create app icons (all sizes)
- [ ] Create screenshots for App Store/Play Store
- [ ] Write app description and keywords
- [ ] Prepare privacy policy
- [ ] Prepare terms of service
- [ ] Set up app store accounts
- [ ] Configure app signing (iOS & Android)
- [ ] Create promotional materials

**Day 67-68: iOS Deployment**
- [ ] Configure Xcode project
- [ ] Set up provisioning profiles
- [ ] Build release version
- [ ] Test on TestFlight
- [ ] Submit to App Store
- [ ] Respond to review feedback (if any)

**Day 69-70: Android Deployment**
- [ ] Configure Android build
- [ ] Generate signed APK/AAB
- [ ] Test on internal track
- [ ] Submit to Google Play
- [ ] Respond to review feedback (if any)

**Deliverables**:
- ✅ App published on iOS App Store
- ✅ App published on Google Play Store
- ✅ Marketing materials ready

### Post-Launch (Ongoing)

**Week 11+: Monitoring & Iteration**
- [ ] Monitor crash reports
- [ ] Track user analytics
- [ ] Gather user feedback
- [ ] Fix critical bugs
- [ ] Plan feature updates
- [ ] Implement user-requested features
- [ ] Regular updates and maintenance

---

## 8. Testing Strategy

### 8.1 Testing Pyramid

```
        /\
       /  \
      / E2E \          10% - End-to-End Tests
     /______\
    /        \
   /Integration\       20% - Integration Tests
  /____________\
 /              \
/  Unit/Widget  \     70% - Unit & Widget Tests
/________________\
```

### 8.2 Unit Testing

**Purpose**: Test individual functions, classes, and business logic in isolation

**Tools**:
- `flutter_test` package
- `mockito` for mocking dependencies
- `mocktail` as alternative to mockito

**What to Test**:
- Repository methods
- Use cases
- Utility functions
- Data model conversions
- Validators
- State notifiers

**Example Unit Test**:

```dart
// test/unit/usecases/bible/get_chapter_usecase_test.dart
import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/mockito.dart';
import 'package:gnosis_mobile/domain/usecases/bible/get_chapter_usecase.dart';
import 'package:gnosis_mobile/domain/repositories/i_bible_repository.dart';

class MockBibleRepository extends Mock implements IBibleRepository {}

void main() {
  late GetChapterUseCase useCase;
  late MockBibleRepository mockRepository;

  setUp(() {
    mockRepository = MockBibleRepository();
    useCase = GetChapterUseCase(mockRepository);
  });

  group('GetChapterUseCase', () {
    test('should return chapter content from repository', () async {
      // Arrange
      const bookId = 'JHN';
      const chapterId = 'JHN.3';
      final expectedChapter = Chapter(
        id: chapterId,
        bookId: bookId,
        number: 3,
        content: 'Chapter content...',
      );

      when(mockRepository.getChapter(chapterId))
          .thenAnswer((_) async => Right(expectedChapter));

      // Act
      final result = await useCase(chapterId);

      // Assert
      expect(result, Right(expectedChapter));
      verify(mockRepository.getChapter(chapterId));
      verifyNoMoreInteractions(mockRepository);
    });

    test('should return failure when repository fails', () async {
      // Arrange
      const chapterId = 'JHN.3';
      final failure = ServerFailure('Network error');

      when(mockRepository.getChapter(chapterId))
          .thenAnswer((_) async => Left(failure));

      // Act
      final result = await useCase(chapterId);

      // Assert
      expect(result, Left(failure));
    });
  });
}
```

**Coverage Goal**: 80%+ for business logic

### 8.3 Widget Testing

**Purpose**: Test individual widgets and their interactions

**Tools**:
- `flutter_test` package
- `WidgetTester` for widget interaction
- `find` for locating widgets

**What to Test**:
- Widget rendering
- User interactions (tap, swipe, input)
- Widget state changes
- Navigation
- Form validation

**Example Widget Test**:

```dart
// test/widget/screens/prayers/prayer_card_test.dart
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:gnosis_mobile/presentation/screens/prayers/widgets/prayer_card.dart';
import 'package:gnosis_mobile/domain/entities/prayer.dart';

void main() {
  testWidgets('PrayerCard displays prayer information correctly', (tester) async {
    // Arrange
    final prayer = Prayer(
      id: '1',
      title: 'Our Father',
      category: 'traditional',
      icon: '🙏',
      description: 'The Lord\'s Prayer',
    );

    // Act
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: PrayerCard(prayer: prayer),
        ),
      ),
    );

    // Assert
    expect(find.text('Our Father'), findsOneWidget);
    expect(find.text('🙏'), findsOneWidget);
    expect(find.text('The Lord\'s Prayer'), findsOneWidget);
  });

  testWidgets('PrayerCard navigates to detail on tap', (tester) async {
    // Arrange
    final prayer = Prayer(
      id: '1',
      title: 'Our Father',
      category: 'traditional',
      icon: '🙏',
      description: 'The Lord\'s Prayer',
    );

    bool navigated = false;

    // Act
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: PrayerCard(
            prayer: prayer,
            onTap: () => navigated = true,
          ),
        ),
      ),
    );

    await tester.tap(find.byType(PrayerCard));
    await tester.pumpAndSettle();

    // Assert
    expect(navigated, true);
  });
}
```

**Coverage Goal**: 70%+ for UI components

### 8.4 Integration Testing

**Purpose**: Test how multiple components work together

**Tools**:
- `integration_test` package
- `flutter_driver` for automation

**What to Test**:
- Complete user flows
- API integration
- Database operations
- Navigation flows
- State management integration

**Example Integration Test**:

```dart
// integration_test/bible_reading_flow_test.dart
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:gnosis_mobile/main.dart' as app;

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  group('Bible Reading Flow', () {
    testWidgets('User can read a Bible chapter', (tester) async {
      // Start app
      app.main();
      await tester.pumpAndSettle();

      // Navigate to Bible
      await tester.tap(find.text('Bible'));
      await tester.pumpAndSettle();

      // Select book (John)
      await tester.tap(find.text('Select Book'));
      await tester.pumpAndSettle();
      await tester.tap(find.text('John'));
      await tester.pumpAndSettle();

      // Select chapter (3)
      await tester.tap(find.text('3'));
      await tester.pumpAndSettle();

      // Verify chapter content is displayed
      expect(find.textContaining('For God so loved the world'), findsOneWidget);

      // Bookmark a verse
      await tester.longPress(find.textContaining('John 3:16'));
      await tester.pumpAndSettle();
      await tester.tap(find.text('Bookmark'));
      await tester.pumpAndSettle();

      // Verify bookmark was saved
      expect(find.text('Verse saved'), findsOneWidget);
    });

    testWidgets('User can view saved verses', (tester) async {
      // Start app
      app.main();
      await tester.pumpAndSettle();

      // Navigate to Saved Verses
      await tester.tap(find.byIcon(Icons.bookmark));
      await tester.pumpAndSettle();

      // Verify saved verse is displayed
      expect(find.textContaining('John 3:16'), findsOneWidget);
    });
  });
}
```

**Coverage Goal**: All critical user flows

### 8.5 End-to-End (E2E) Testing

**Purpose**: Test the entire application from user perspective

**Tools**:
- `integration_test` package
- Real devices or emulators
- CI/CD integration

**What to Test**:
- Complete user journeys
- Authentication flows
- Data persistence
- Offline functionality
- Push notifications
- Payment flows (if applicable)

**Test Scenarios**:

1. **New User Onboarding**:
   - Install app
   - Complete onboarding
   - Sign up
   - Explore features
   - Set preferences

2. **Daily Usage**:
   - Open app
   - Read daily devotional
   - Read Bible chapter
   - Pray a prayer
   - Listen to music
   - Check community messages

3. **Offline Usage**:
   - Turn off internet
   - Read downloaded Bible chapters
   - Play downloaded music
   - View saved verses
   - Turn on internet
   - Verify sync

4. **Music Management**:
   - Search for music
   - Create playlist
   - Download songs
   - Play offline
   - Share playlist

### 8.6 Testing Best Practices

**General Principles**:
- Write tests before or alongside code (TDD)
- Keep tests simple and focused
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)
- Mock external dependencies
- Test edge cases and error scenarios
- Maintain test independence (no shared state)

**Naming Convention**:
```dart
test('should [expected behavior] when [condition]', () {
  // Test implementation
});
```

**Test Organization**:
```dart
group('FeatureName', () {
  group('MethodName', () {
    test('should do X when Y', () {});
    test('should do Z when W', () {});
  });
});
```

**Mocking Strategy**:
- Mock external APIs
- Mock repositories in use cases
- Mock use cases in UI tests
- Use real implementations for integration tests

**Continuous Integration**:
- Run tests on every commit
- Block merges if tests fail
- Generate coverage reports
- Run E2E tests on staging environment

### 8.7 Performance Testing

**Metrics to Monitor**:
- App startup time (< 3 seconds)
- Screen transition time (< 300ms)
- API response time
- Memory usage
- Battery consumption
- Network usage

**Tools**:
- Flutter DevTools
- Android Profiler
- Xcode Instruments
- Firebase Performance Monitoring

**Performance Benchmarks**:
```dart
// test/performance/bible_reader_performance_test.dart
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('Bible chapter loading should complete in < 500ms', () async {
    final stopwatch = Stopwatch()..start();

    // Load chapter
    await bibleRepository.getChapter('JHN.3');

    stopwatch.stop();
    expect(stopwatch.elapsedMilliseconds, lessThan(500));
  });
}
```

### 8.8 Accessibility Testing

**What to Test**:
- Screen reader compatibility
- Touch target sizes (minimum 44x44)
- Color contrast ratios
- Font scaling
- Keyboard navigation

**Tools**:
- Flutter's `Semantics` widget
- Accessibility Scanner (Android)
- Xcode Accessibility Inspector (iOS)

**Example**:
```dart
testWidgets('Button has proper semantics', (tester) async {
  await tester.pumpWidget(
    MaterialApp(
      home: Scaffold(
        body: CustomButton(
          label: 'Pray Now',
          onPressed: () {},
        ),
      ),
    ),
  );

  // Verify semantics
  expect(
    tester.getSemantics(find.byType(CustomButton)),
    matchesSemantics(
      label: 'Pray Now',
      isButton: true,
      isEnabled: true,
      hasTapAction: true,
    ),
  );
});
```

---

## 9. Deployment & Distribution

### 9.1 iOS App Store Requirements

#### 9.1.1 Apple Developer Account
- **Cost**: $99/year
- **Requirements**:
  - Valid Apple ID
  - Payment method
  - Two-factor authentication

#### 9.1.2 App Store Assets

**App Icons**:
- 1024x1024 px (App Store)
- Various sizes for devices (generated automatically)
- No transparency
- No rounded corners (iOS adds them)

**Screenshots** (Required for each device type):
- iPhone 6.7" (iPhone 14 Pro Max): 1290 x 2796 px
- iPhone 6.5" (iPhone 11 Pro Max): 1242 x 2688 px
- iPhone 5.5" (iPhone 8 Plus): 1242 x 2208 px
- iPad Pro 12.9" (3rd gen): 2048 x 2732 px
- Minimum 3 screenshots, maximum 10

**App Preview Videos** (Optional):
- 15-30 seconds
- Portrait or landscape
- MP4 or MOV format

#### 9.1.3 App Information

**Required Fields**:
- App Name (30 characters max)
- Subtitle (30 characters max)
- Description (4000 characters max)
- Keywords (100 characters max, comma-separated)
- Support URL
- Marketing URL (optional)
- Privacy Policy URL (required)
- Category (Primary: Lifestyle, Secondary: Reference)
- Age Rating (4+)

**Example Description**:
```
Gnosis - Your Spiritual Companion

Deepen your Catholic faith with Gnosis, the comprehensive spiritual companion app designed for modern believers.

FEATURES:
• Complete Bible with bookmarks and highlights
• Catholic prayers library with reminders
• Interactive Holy Rosary guide
• AI-powered spiritual guidance
• Devotional music with offline playback
• Community groups for prayer and fellowship
• Saints library with inspiring biographies

BIBLE READER:
Read the complete Bible with an intuitive interface. Bookmark your favorite verses, highlight important passages, and share scripture with friends.

PRAYERS & ROSARY:
Access traditional Catholic prayers including the Our Father, Hail Mary, and more. Pray the Holy Rosary with our guided interface featuring all four mystery sets.

SPIRITUAL GUIDANCE:
Chat with our AI spiritual guide for biblical wisdom, prayer support, and faith questions. Every response includes relevant scripture references.

DEVOTIONAL MUSIC:
Discover and listen to Christian hymns and worship music. Create playlists, download for offline listening, and enjoy background playback.

COMMUNITY:
Connect with fellow believers in prayer circles, study groups, and community discussions. Share your faith journey and support others.

Download Gnosis today and transform your spiritual life!
```

**Keywords**:
```
catholic, bible, prayer, rosary, spiritual, faith, christian, devotional, worship, scripture
```

#### 9.1.4 App Review Information

**Contact Information**:
- First Name, Last Name
- Phone Number
- Email Address

**Demo Account** (if app requires login):
- Username
- Password

**Notes for Reviewer**:
```
Gnosis is a Catholic spiritual companion app. All features are accessible after creating a free account.

Test Account:
Email: reviewer@gnosis.app
Password: TestReview123!

Key features to test:
1. Bible Reader - Navigate to Bible tab, select any book/chapter
2. Prayers - Navigate to Pray tab, view prayer library
3. AI Chat - Navigate to Chat tab, ask a spiritual question
4. Music - Navigate to Music tab, search for "Ave Maria"

The app uses the following third-party services:
- Groq AI for spiritual chat
- API.Bible for scripture content
- Supabase for backend and authentication
- Spotify API for music (optional)

No payment or subscription required.
```

#### 9.1.5 Build Configuration

**Info.plist Permissions**:
```xml
<key>NSCameraUsageDescription</key>
<string>We need camera access to update your profile photo</string>

<key>NSPhotoLibraryUsageDescription</key>
<string>We need photo library access to select a profile photo</string>

<key>NSMicrophoneUsageDescription</key>
<string>We need microphone access for voice messages in community groups</string>

<key>NSUserTrackingUsageDescription</key>
<string>We use tracking to provide personalized spiritual content and improve your experience</string>
```

**Build Settings**:
- Deployment Target: iOS 13.0 or higher
- Supported Devices: iPhone, iPad
- Supported Orientations: Portrait (primary), Landscape (optional)
- Requires Full Screen: No

**Signing**:
- Automatic signing (recommended for beginners)
- Or manual signing with provisioning profiles

#### 9.1.6 Submission Process

1. **Prepare Build**:
   ```bash
   flutter build ios --release
   ```

2. **Open Xcode**:
   ```bash
   open ios/Runner.xcworkspace
   ```

3. **Archive**:
   - Product → Archive
   - Wait for archive to complete

4. **Upload to App Store Connect**:
   - Window → Organizer
   - Select archive
   - Click "Distribute App"
   - Choose "App Store Connect"
   - Upload

5. **Complete App Store Connect**:
   - Go to appstoreconnect.apple.com
   - Select your app
   - Fill in all required information
   - Add screenshots
   - Select build
   - Submit for review

6. **Wait for Review**:
   - Typical review time: 24-48 hours
   - Check status in App Store Connect

### 9.2 Google Play Store Requirements

#### 9.2.1 Google Play Console Account
- **Cost**: $25 one-time fee
- **Requirements**:
  - Google account
  - Payment method
  - Developer information

#### 9.2.2 Play Store Assets

**App Icon**:
- 512x512 px
- 32-bit PNG with alpha
- Maximum 1 MB

**Feature Graphic**:
- 1024 x 500 px
- JPG or 24-bit PNG (no alpha)

**Screenshots** (Required):
- Phone: Minimum 2, maximum 8
  - Minimum dimension: 320 px
  - Maximum dimension: 3840 px
- 7-inch Tablet: Optional
- 10-inch Tablet: Optional

**Promo Video** (Optional):
- YouTube URL

#### 9.2.3 Store Listing

**Required Fields**:
- App Name (50 characters max)
- Short Description (80 characters max)
- Full Description (4000 characters max)
- Category (Lifestyle)
- Content Rating (Everyone)
- Contact Email
- Privacy Policy URL

**Example Short Description**:
```
Your Catholic spiritual companion - Bible, prayers, rosary, music, and AI guidance
```

**Full Description**: (Same as iOS, formatted for Play Store)

#### 9.2.4 Content Rating

**Questionnaire**:
- Violence: None
- Sexual Content: None
- Profanity: None
- Controlled Substances: None
- Gambling: None
- User Interaction: Yes (community features)
- Shares User Location: No
- Shares Personal Information: Yes (optional profile info)

**Expected Rating**: Everyone

#### 9.2.5 Build Configuration

**android/app/build.gradle**:
```gradle
android {
    compileSdkVersion 34

    defaultConfig {
        applicationId "com.gnosis.mobile"
        minSdkVersion 21
        targetSdkVersion 34
        versionCode 1
        versionName "1.0.0"
    }

    signingConfigs {
        release {
            storeFile file(KEYSTORE_FILE)
            storePassword KEYSTORE_PASSWORD
            keyAlias KEY_ALIAS
            keyPassword KEY_PASSWORD
        }
    }

    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled true
            shrinkResources true
        }
    }
}
```

**Permissions** (AndroidManifest.xml):
```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.CAMERA" />
```

#### 9.2.6 Submission Process

1. **Generate Signing Key**:
   ```bash
   keytool -genkey -v -keystore ~/gnosis-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias gnosis
   ```

2. **Build Release APK/AAB**:
   ```bash
   flutter build appbundle --release
   ```

3. **Upload to Play Console**:
   - Go to play.google.com/console
   - Create new app
   - Complete store listing
   - Upload AAB file
   - Complete content rating questionnaire
   - Set pricing (Free)
   - Select countries
   - Submit for review

4. **Wait for Review**:
   - Typical review time: 1-3 days
   - Check status in Play Console

### 9.3 CI/CD Pipeline

**Recommended Tool**: GitHub Actions

**Workflow File** (.github/workflows/deploy.yml):
```yaml
name: Build and Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: subosito/flutter-action@v2
        with:
          flutter-version: '3.16.0'
      - run: flutter pub get
      - run: flutter analyze
      - run: flutter test

  build-ios:
    needs: test
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v3
      - uses: subosito/flutter-action@v2
      - run: flutter pub get
      - run: flutter build ios --release --no-codesign

  build-android:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: subosito/flutter-action@v2
      - run: flutter pub get
      - run: flutter build appbundle --release
```

### 9.4 Version Management

**Versioning Scheme**: Semantic Versioning (SemVer)
- Format: `MAJOR.MINOR.PATCH+BUILD`
- Example: `1.2.3+45`

**Version Bumping**:
- **MAJOR**: Breaking changes (e.g., 1.0.0 → 2.0.0)
- **MINOR**: New features (e.g., 1.0.0 → 1.1.0)
- **PATCH**: Bug fixes (e.g., 1.0.0 → 1.0.1)
- **BUILD**: Build number (auto-increment)

**pubspec.yaml**:
```yaml
version: 1.0.0+1
```

**Update Process**:
1. Update version in pubspec.yaml
2. Update CHANGELOG.md
3. Commit changes
4. Create git tag
5. Build and deploy

### 9.5 Release Checklist

**Pre-Release**:
- [ ] All tests passing
- [ ] No critical bugs
- [ ] Performance benchmarks met
- [ ] Accessibility tested
- [ ] Privacy policy updated
- [ ] Terms of service updated
- [ ] App store assets ready
- [ ] Screenshots updated
- [ ] Description updated

**iOS Release**:
- [ ] Build number incremented
- [ ] Archive created
- [ ] Uploaded to App Store Connect
- [ ] Metadata updated
- [ ] Screenshots uploaded
- [ ] Submitted for review

**Android Release**:
- [ ] Version code incremented
- [ ] AAB built and signed
- [ ] Uploaded to Play Console
- [ ] Store listing updated
- [ ] Screenshots uploaded
- [ ] Submitted for review

**Post-Release**:
- [ ] Monitor crash reports
- [ ] Check user reviews
- [ ] Respond to feedback
- [ ] Track analytics
- [ ] Plan next release

---

## 10. Dependencies & Third-Party Libraries

### 10.1 Complete Package List

#### Core Flutter Packages

```yaml
dependencies:
  flutter:
    sdk: flutter
  flutter_localizations:
    sdk: flutter
```

#### State Management

```yaml
  # Riverpod - State management
  flutter_riverpod: ^2.4.9
  riverpod_annotation: ^2.3.3

  # Hooks - Simplified state management for widgets
  flutter_hooks: ^0.20.4
  hooks_riverpod: ^2.4.9
```

**Purpose**:
- `flutter_riverpod`: Main state management solution
- `riverpod_annotation`: Code generation for providers
- `flutter_hooks`: Reduce boilerplate in stateful widgets
- `hooks_riverpod`: Combine hooks with Riverpod

**Alternatives Considered**:
- Provider (less powerful)
- Bloc (more boilerplate)
- GetX (less type-safe)

#### Navigation

```yaml
  # GoRouter - Declarative routing
  go_router: ^12.1.3
```

**Purpose**: Type-safe, declarative navigation with deep linking support

**Alternatives Considered**:
- Navigator 2.0 (more complex)
- Auto Route (more setup)

#### Network & API

```yaml
  # Dio - HTTP client
  dio: ^5.4.0

  # Connectivity - Network status
  connectivity_plus: ^5.0.2

  # Pretty Dio Logger - API debugging
  pretty_dio_logger: ^1.3.1
```

**Purpose**:
- `dio`: Advanced HTTP client with interceptors, retries
- `connectivity_plus`: Check internet connectivity
- `pretty_dio_logger`: Debug API calls in development

**Alternatives Considered**:
- http package (less features)
- Chopper (more boilerplate)

#### Local Storage

```yaml
  # Hive - NoSQL database
  hive: ^2.2.3
  hive_flutter: ^1.1.0

  # Secure Storage - Encrypted storage for tokens
  flutter_secure_storage: ^9.0.0

  # Shared Preferences - Simple key-value storage
  shared_preferences: ^2.2.2

  # Path Provider - File system paths
  path_provider: ^2.1.1
```

**Purpose**:
- `hive`: Fast, lightweight local database
- `flutter_secure_storage`: Secure storage for sensitive data (tokens, passwords)
- `shared_preferences`: Simple settings and preferences
- `path_provider`: Get app directories for file storage

**Alternatives Considered**:
- SQLite/sqflite (more complex for simple data)
- Isar (newer, less mature)

#### Backend as a Service

```yaml
  # Supabase - Complete backend platform
  supabase_flutter: ^2.0.3
```

**Purpose**:
- `supabase_flutter`: Complete backend solution (database, auth, storage, real-time, APIs)

**Supabase as Complete Backend**:
- **Database**: PostgreSQL with full SQL support
- **Authentication**: Email/password, OAuth (Google, Apple, GitHub, etc.)
- **Real-time**: WebSocket subscriptions for live features
- **Storage**: File uploads and management
- **Edge Functions**: Custom serverless functions
- **APIs**: Auto-generated REST and GraphQL endpoints
- **Row-Level Security**: Database-level access control
- **Webhooks**: For push notifications and integrations

#### Audio Playback

```yaml
  # Just Audio - Audio player
  just_audio: ^0.9.36

  # Audio Service - Background audio
  audio_service: ^0.18.12

  # Audio Session - Audio session management
  audio_session: ^0.1.18
```

**Purpose**:
- `just_audio`: Feature-rich audio player
- `audio_service`: Background playback and lock screen controls
- `audio_session`: Manage audio focus and interruptions

**Alternatives Considered**:
- audioplayers (less features)
- assets_audio_player (less maintained)

#### UI Components & Utilities

```yaml
  # Cached Network Image - Image caching
  cached_network_image: ^3.3.0

  # Flutter SVG - SVG rendering
  flutter_svg: ^2.0.9

  # Shimmer - Loading placeholders
  shimmer: ^3.0.0

  # Flutter Markdown - Markdown rendering
  flutter_markdown: ^0.6.18

  # Google Fonts - Custom fonts
  google_fonts: ^6.1.0

  # Flutter Launcher Icons - App icon generation
  flutter_launcher_icons: ^0.13.1

  # Flutter Native Splash - Splash screen
  flutter_native_splash: ^2.3.8
```

**Purpose**:
- `cached_network_image`: Efficient image loading and caching
- `flutter_svg`: Render SVG images
- `shimmer`: Beautiful loading animations
- `flutter_markdown`: Render markdown content (saints, prayers)
- `google_fonts`: Easy font integration
- `flutter_launcher_icons`: Generate app icons for all platforms
- `flutter_native_splash`: Generate native splash screens

#### Utilities

```yaml
  # Intl - Internationalization
  intl: ^0.18.1

  # UUID - Generate unique IDs
  uuid: ^4.2.2

  # URL Launcher - Open URLs
  url_launcher: ^6.2.2

  # Share Plus - Native sharing
  share_plus: ^7.2.1

  # Permission Handler - Runtime permissions
  permission_handler: ^11.1.0

  # Device Info Plus - Device information
  device_info_plus: ^9.1.1

  # Package Info Plus - App version info
  package_info_plus: ^5.0.1
```

**Purpose**:
- `intl`: Date formatting, number formatting, translations
- `uuid`: Generate unique IDs for local data
- `url_launcher`: Open external links
- `share_plus`: Share content via native share sheet
- `permission_handler`: Request runtime permissions
- `device_info_plus`: Get device information
- `package_info_plus`: Get app version and build number

#### Notifications

```yaml
  # Flutter Local Notifications - Local notifications
  flutter_local_notifications: ^16.3.0

  # Firebase Messaging - Push notifications (optional)
  firebase_messaging: ^14.7.9
```

**Purpose**:
- `flutter_local_notifications`: Schedule local notifications (prayer reminders)
- `firebase_messaging`: Receive push notifications from server

#### Forms & Validation

```yaml
  # Flutter Form Builder - Form management
  flutter_form_builder: ^9.1.1

  # Form Builder Validators - Validation rules
  form_builder_validators: ^9.1.0
```

**Purpose**:
- `flutter_form_builder`: Simplify form creation
- `form_builder_validators`: Pre-built validation rules

**Alternatives Considered**:
- Manual form management (more boilerplate)
- Reactive Forms (steeper learning curve)

#### Analytics & Monitoring

```yaml
  # Firebase Analytics - User analytics (optional)
  firebase_analytics: ^10.7.4

  # Sentry - Error tracking
  sentry_flutter: ^7.14.0
```

**Purpose**:
- `firebase_analytics`: Track user behavior and engagement
- `sentry_flutter`: Crash reporting and error monitoring

**Alternatives Considered**:
- Mixpanel (more expensive)
- Amplitude (more complex)

#### Development Tools

```yaml
dev_dependencies:
  flutter_test:
    sdk: flutter

  # Linting
  flutter_lints: ^3.0.1
  very_good_analysis: ^5.1.0

  # Code Generation
  build_runner: ^2.4.7
  hive_generator: ^2.0.1
  riverpod_generator: ^2.3.9
  json_serializable: ^6.7.1

  # Testing
  mockito: ^5.4.4
  mocktail: ^1.0.2
  integration_test:
    sdk: flutter

  # Icons & Splash
  flutter_launcher_icons: ^0.13.1
  flutter_native_splash: ^2.3.8
```

**Purpose**:
- `flutter_lints`: Official Flutter linting rules
- `very_good_analysis`: Stricter linting rules
- `build_runner`: Code generation runner
- `hive_generator`: Generate Hive adapters
- `riverpod_generator`: Generate Riverpod providers
- `json_serializable`: Generate JSON serialization code
- `mockito`/`mocktail`: Mocking for tests

### 10.2 Complete pubspec.yaml

```yaml
name: gnosis_mobile
description: Your Spiritual Companion - Catholic faith app for Bible reading, prayers, rosary, music, and community.
publish_to: 'none'
version: 1.0.0+1

environment:
  sdk: '>=3.2.0 <4.0.0'

dependencies:
  flutter:
    sdk: flutter
  flutter_localizations:
    sdk: flutter

  # State Management
  flutter_riverpod: ^2.4.9
  riverpod_annotation: ^2.3.3
  flutter_hooks: ^0.20.4
  hooks_riverpod: ^2.4.9

  # Navigation
  go_router: ^12.1.3

  # Network & API
  dio: ^5.4.0
  connectivity_plus: ^5.0.2
  pretty_dio_logger: ^1.3.1

  # Local Storage
  hive: ^2.2.3
  hive_flutter: ^1.1.0
  flutter_secure_storage: ^9.0.0
  shared_preferences: ^2.2.2
  path_provider: ^2.1.1

  # Backend
  supabase_flutter: ^2.0.3

  # Audio
  just_audio: ^0.9.36
  audio_service: ^0.18.12
  audio_session: ^0.1.18

  # UI Components
  cached_network_image: ^3.3.0
  flutter_svg: ^2.0.9
  shimmer: ^3.0.0
  flutter_markdown: ^0.6.18
  google_fonts: ^6.1.0

  # Utilities
  intl: ^0.18.1
  uuid: ^4.2.2
  url_launcher: ^6.2.2
  share_plus: ^7.2.1
  permission_handler: ^11.1.0
  device_info_plus: ^9.1.1
  package_info_plus: ^5.0.1

  # Notifications
  flutter_local_notifications: ^16.3.0

  # Forms
  flutter_form_builder: ^9.1.1
  form_builder_validators: ^9.1.0

  # Analytics & Monitoring (Optional)
  # firebase_core: ^2.24.2
  # firebase_analytics: ^10.7.4
  # firebase_messaging: ^14.7.9
  # sentry_flutter: ^7.14.0

dev_dependencies:
  flutter_test:
    sdk: flutter
  integration_test:
    sdk: flutter

  # Linting
  flutter_lints: ^3.0.1
  very_good_analysis: ^5.1.0

  # Code Generation
  build_runner: ^2.4.7
  hive_generator: ^2.0.1
  riverpod_generator: ^2.3.9
  json_serializable: ^6.7.1

  # Testing
  mockito: ^5.4.4
  mocktail: ^1.0.2

  # Assets
  flutter_launcher_icons: ^0.13.1
  flutter_native_splash: ^2.3.8

flutter:
  uses-material-design: true

  assets:
    - assets/images/
    - assets/icons/
    - assets/data/

  fonts:
    - family: Inter
      fonts:
        - asset: assets/fonts/Inter-Regular.ttf
        - asset: assets/fonts/Inter-Medium.ttf
          weight: 500
        - asset: assets/fonts/Inter-SemiBold.ttf
          weight: 600
        - asset: assets/fonts/Inter-Bold.ttf
          weight: 700

    - family: CrimsonText
      fonts:
        - asset: assets/fonts/CrimsonText-Regular.ttf
        - asset: assets/fonts/CrimsonText-SemiBold.ttf
          weight: 600
        - asset: assets/fonts/CrimsonText-Bold.ttf
          weight: 700

flutter_launcher_icons:
  android: true
  ios: true
  image_path: "assets/icons/app_icon.png"
  adaptive_icon_background: "#2D4A6B"
  adaptive_icon_foreground: "assets/icons/app_icon_foreground.png"

flutter_native_splash:
  color: "#2D4A6B"
  image: assets/images/splash.png
  android: true
  ios: true
  android_12:
    color: "#2D4A6B"
    image: assets/images/splash.png
```

### 10.3 External API Services

#### Groq AI API
- **Purpose**: AI-powered spiritual chat
- **Pricing**: Free tier available, pay-as-you-go
- **Documentation**: https://console.groq.com/docs
- **Model**: llama-3.3-70b-versatile
- **Rate Limits**: Check current limits on Groq console

#### API.Bible
- **Purpose**: Bible text content
- **Pricing**: Free for non-commercial use
- **Documentation**: https://scripture.api.bible/
- **Bible Version**: English (bba9f40183526463-01)
- **Rate Limits**: 1000 requests/day (free tier)

#### Spotify Web API (Optional)
- **Purpose**: Music streaming and search
- **Pricing**: Free for search, Premium required for full playback
- **Documentation**: https://developer.spotify.com/documentation/web-api
- **Alternative**: Consider custom music library or YouTube Music API
- **Rate Limits**: Varies by endpoint

#### Supabase
- **Purpose**: Backend (database, auth, storage, real-time)
- **Pricing**: Free tier (500 MB database, 1 GB storage, 2 GB bandwidth)
- **Documentation**: https://supabase.com/docs
- **Features Used**:
  - PostgreSQL database
  - Authentication
  - Real-time subscriptions
  - File storage
  - Row-level security

### 10.4 Font Licenses

#### Inter Font
- **License**: SIL Open Font License 1.1
- **Source**: https://fonts.google.com/specimen/Inter
- **Usage**: Free for commercial use
- **Attribution**: Not required but appreciated

#### Crimson Text Font
- **License**: SIL Open Font License 1.1
- **Source**: https://fonts.google.com/specimen/Crimson+Text
- **Usage**: Free for commercial use
- **Attribution**: Not required but appreciated

### 10.5 Installation Commands

**Install all dependencies**:
```bash
flutter pub get
```

**Generate code** (Hive, Riverpod, JSON):
```bash
flutter pub run build_runner build --delete-conflicting-outputs
```

**Generate app icons**:
```bash
flutter pub run flutter_launcher_icons
```

**Generate splash screen**:
```bash
flutter pub run flutter_native_splash:create
```

**Update dependencies**:
```bash
flutter pub upgrade
```

**Check for outdated packages**:
```bash
flutter pub outdated
```

### 10.6 Package Maintenance

**Update Strategy**:
- Check for updates monthly
- Test thoroughly before updating major versions
- Read changelogs for breaking changes
- Update dependencies one at a time
- Run full test suite after updates

**Security**:
- Monitor security advisories
- Update packages with security vulnerabilities immediately
- Use `flutter pub audit` to check for known vulnerabilities

**Deprecation**:
- Watch for deprecation warnings
- Plan migration for deprecated packages
- Keep dependencies up-to-date to avoid technical debt

---

## Appendix

### A. Glossary

**Terms**:
- **AAB**: Android App Bundle - Android's publishing format
- **APK**: Android Package - Android's installation format
- **CI/CD**: Continuous Integration/Continuous Deployment
- **E2E**: End-to-End testing
- **HLS**: HTTP Live Streaming - Adaptive streaming protocol
- **JWT**: JSON Web Token - Authentication token format
- **ORM**: Object-Relational Mapping
- **REST**: Representational State Transfer - API architecture
- **RLS**: Row-Level Security - Database security feature
- **SemVer**: Semantic Versioning - Version numbering scheme
- **TDD**: Test-Driven Development
- **WebSocket**: Protocol for real-time bidirectional communication

### B. Useful Resources

**Flutter Documentation**:
- Official Docs: https://docs.flutter.dev/
- Widget Catalog: https://docs.flutter.dev/ui/widgets
- Cookbook: https://docs.flutter.dev/cookbook

**State Management**:
- Riverpod Docs: https://riverpod.dev/
- Riverpod Examples: https://github.com/rrousselGit/riverpod/tree/master/examples

**Backend**:
- Supabase Docs: https://supabase.com/docs
- Supabase Flutter: https://supabase.com/docs/guides/getting-started/quickstarts/flutter

**Audio**:
- Just Audio: https://pub.dev/packages/just_audio
- Audio Service: https://pub.dev/packages/audio_service

**Testing**:
- Flutter Testing: https://docs.flutter.dev/testing
- Integration Testing: https://docs.flutter.dev/testing/integration-tests

**Deployment**:
- iOS Deployment: https://docs.flutter.dev/deployment/ios
- Android Deployment: https://docs.flutter.dev/deployment/android

### C. Code Snippets

**Environment Configuration**:
```dart
// lib/config/env/env.dart
import 'package:envied/envied.dart';

part 'env.g.dart';

@Envied(path: '.env')
abstract class Env {
  @EnviedField(varName: 'GROQ_API_KEY')
  static const String groqApiKey = _Env.groqApiKey;

  @EnviedField(varName: 'BIBLE_API_KEY')
  static const String bibleApiKey = _Env.bibleApiKey;

  @EnviedField(varName: 'SUPABASE_URL')
  static const String supabaseUrl = _Env.supabaseUrl;

  @EnviedField(varName: 'SUPABASE_ANON_KEY')
  static const String supabaseAnonKey = _Env.supabaseAnonKey;
}
```

**Dio Client Setup**:
```dart
// lib/core/network/dio_client.dart
import 'package:dio/dio.dart';
import 'package:pretty_dio_logger/pretty_dio_logger.dart';

class DioClient {
  late final Dio _dio;

  DioClient() {
    _dio = Dio(
      BaseOptions(
        connectTimeout: const Duration(seconds: 30),
        receiveTimeout: const Duration(seconds: 30),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      ),
    );

    _dio.interceptors.addAll([
      PrettyDioLogger(
        requestHeader: true,
        requestBody: true,
        responseBody: true,
        responseHeader: false,
        error: true,
        compact: true,
      ),
      // Add auth interceptor
      // Add retry interceptor
    ]);
  }

  Dio get dio => _dio;
}
```

**Riverpod Provider Example**:
```dart
// lib/presentation/providers/bible_provider.dart
import 'package:riverpod_annotation/riverpod_annotation.dart';
import 'package:gnosis_mobile/domain/entities/chapter.dart';
import 'package:gnosis_mobile/domain/usecases/bible/get_chapter_usecase.dart';

part 'bible_provider.g.dart';

@riverpod
class BibleNotifier extends _$BibleNotifier {
  @override
  BibleState build() {
    return const BibleState.initial();
  }

  Future<void> loadChapter(String chapterId) async {
    state = const BibleState.loading();

    final useCase = ref.read(getChapterUseCaseProvider);
    final result = await useCase(chapterId);

    result.fold(
      (failure) => state = BibleState.error(failure.message),
      (chapter) => state = BibleState.loaded(chapter),
    );
  }
}

@freezed
class BibleState with _$BibleState {
  const factory BibleState.initial() = _Initial;
  const factory BibleState.loading() = _Loading;
  const factory BibleState.loaded(Chapter chapter) = _Loaded;
  const factory BibleState.error(String message) = _Error;
}
```

### D. Migration Notes from Web to Mobile

**Key Differences**:

1. **Navigation**:
   - Web: File-based routing (Next.js)
   - Mobile: Programmatic routing (GoRouter)

2. **State Management**:
   - Web: React hooks (useState, useEffect)
   - Mobile: Riverpod providers

3. **Styling**:
   - Web: Tailwind CSS classes
   - Mobile: Flutter widgets with ThemeData

4. **API Calls**:
   - Web: Axios with API routes
   - Mobile: Dio with direct API calls

5. **Authentication**:
   - Web: Clerk
   - Mobile: Supabase Auth

6. **Data Storage**:
   - Web: Browser storage (localStorage, sessionStorage)
   - Mobile: Hive, Secure Storage

7. **Real-time**:
   - Web: WebSocket or polling
   - Mobile: Supabase real-time subscriptions

**Data Migration**:
- Convert TypeScript data files to Dart
- Convert JSON data to Dart models
- Use code generation for serialization

**Feature Parity Checklist**:
- [x] Bible Reader
- [x] Prayers Library
- [x] Rosary Guide
- [x] AI Chat
- [x] Music Player
- [x] Community Groups
- [x] Saints Library
- [x] Authentication
- [x] Theme System
- [+] Saved Verses (new)
- [+] Offline Music (new)
- [+] Push Notifications (new)

---

## Conclusion

This specification document provides a comprehensive blueprint for rebuilding the Gnosis web application as a mobile application using Flutter. The document covers:

1. **Complete analysis** of the current web application
2. **Framework recommendation** with detailed justification
3. **Feature specifications** including new mobile-specific features
4. **UI/UX design** with screen-by-screen breakdown
5. **Technical architecture** covering state management, data persistence, APIs, and offline functionality
6. **Project structure** with clear organization patterns
7. **Implementation roadmap** with week-by-week breakdown
8. **Testing strategy** covering all testing levels
9. **Deployment guide** for both iOS and Android
10. **Complete dependency list** with justifications

**Next Steps**:
1. Set up development environment
2. Create Flutter project
3. Follow implementation roadmap
4. Build iteratively with testing
5. Deploy to app stores

**Success Criteria**:
- Feature parity with web app
- Offline-first functionality
- Beautiful, intuitive UI
- Smooth performance (60fps)
- Published on both app stores
- Positive user reviews

This document should serve as the single source of truth for the mobile development team throughout the project lifecycle.

---

**Document Version**: 1.0
**Last Updated**: 2025-11-02
**Author**: Gnosis Development Team
**Status**: Ready for Implementation


