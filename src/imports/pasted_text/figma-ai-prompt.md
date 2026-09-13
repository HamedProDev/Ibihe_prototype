You're right. The previous result was too generic. For **Figma AI**, you need a prompt that defines the **product, information architecture, visual system, components, screens, interactions, and editorial philosophy** rather than simply saying “make a news website.”

Copy this entire prompt into **Figma AI / Make**:

```text
DESIGN AND BUILD A COMPLETE PRODUCTION-QUALITY WEB APP PROTOTYPE CALLED “IbiheNews”.

IMPORTANT:
Do not make this look like a generic AI dashboard, generic blog, or generic news template.

IbiheNews is a premium Pan-African digital news and intelligence platform. It covers Africa and global stories relevant to African audiences. It is multilingual, human-led and AI-powered.

The central philosophy is:

“Powered by AI. Verified by People.”

AI should help journalists discover stories, monitor sources, translate, summarize, detect trends, organize information and produce daily briefings. However, the public-facing website must NOT make users feel that every article is written by AI. Human journalists, editors and verified authors remain responsible for reporting, verification and publication.

The product should feel comparable in quality to a combination of:
- Reuters
- BBC
- Bloomberg
- The New York Times
- Al Jazeera
- modern African digital media
but with a distinctly African identity and a modern technology-driven visual language.

==================================================
1. BRAND
==================================================

Brand name everywhere:

IbiheNews

Never use:
- IbiheAI
- Ibihe AI News
- HamedProDev
- placeholder brand names

Logo text:

IbiheNews

Tagline:

“Africa, Connected by Information.”

Secondary positioning:

“African News & Intelligence”

The word “AI” should NOT dominate the branding.

AI is infrastructure and intelligence behind the platform, not the entire identity.

Use subtle messaging such as:

“AI-assisted”
“AI-powered”
“Human verified”
“Verified by IbiheNews”
“AI-assisted translation”
“AI-generated summary, editor verified”

==================================================
2. TARGET USERS
==================================================

Design for:

1. Everyday readers
2. African citizens
3. African diaspora
4. Journalists
5. Researchers
6. Students
7. Businesses
8. Investors
9. Governments and organizations
10. International readers who want reliable African news

The interface must feel understandable to a normal reader but powerful enough for professional users.

==================================================
3. SIX LANGUAGES
==================================================

The entire platform supports:

Kinyarwanda
English
Français
Kiswahili
العربية
Hausa

Create a prominent language selector.

Default language:
Kinyarwanda or English depending on user preference.

Language selector should look like:

RW
EN
FR
SW
AR
HA

Arabic must support RTL layouts correctly.

Do not simply translate the English UI visually. Design the system so layouts can accommodate different text lengths and RTL content.

==================================================
4. VISUAL IDENTITY
==================================================

Create a sophisticated editorial visual system.

PRIMARY COLORS:

Deep African Green:
#087443

Emerald:
#0DBF6B

Bright Green:
#16D979

Very Dark:
#071412

Near Black:
#050A09

White:
#FFFFFF

Off White:
#F7F9F7

Soft Green:
#EAF7EF

Border:
#DDE7E1

Secondary accent:
#1D6BFF

Warning:
#F59E0B

Danger:
#E5484D

Text:
#10201A

Muted text:
#68756F

Dark mode:

Background:
#071412

Cards:
#0D1D18

Elevated cards:
#122720

Border:
#1C3930

Text:
#F5FAF7

Muted:
#9AAFA5

Use green as the primary brand color.

Use blue sparingly for technology/information states.

Use orange only for warnings or pending editorial actions.

Use red only for breaking/critical states.

DO NOT make the website neon, childish, overly futuristic or overloaded with gradients.

It must feel:

premium
credible
editorial
African
modern
clean
trustworthy
technological
human

==================================================
5. TYPOGRAPHY
==================================================

Use Inter or a similar highly readable modern sans-serif for UI.

Use a premium editorial serif such as:
Newsreader
Source Serif
or similar

for major article headlines if appropriate.

Typography hierarchy:

Display headline:
48–64px

Section headline:
28–36px

Article headline:
32–48px

Card headline:
18–22px

Body:
16–18px

Metadata:
12–14px

Use generous line height.

Avoid excessive bold text.

==================================================
6. GLOBAL LAYOUT
==================================================

Desktop-first responsive web design.

Maximum content width:
1440px.

Use a 12-column grid.

Main content:
approximately 8 columns

Sidebar:
approximately 4 columns

Spacing:
8px base system.

Large whitespace between editorial sections.

Header should remain clean and compact.

==================================================
7. GLOBAL HEADER
==================================================

Create a premium sticky header.

LEFT:

African-inspired minimal logo mark +:

IbiheNews

Below or beside it:

African News & Intelligence

CENTER:

Search bar:

“Search Africa, countries, stories…”

RIGHT:

Language selector

RW / EN / FR / SW / AR / HA

Theme toggle

Notifications

User profile

Navigation:

Ahabanza
Amakuru
Ubuhinzi
Ubukungu
Politiki
Ikoranabuhanga
Ubuzima
Imikino
Umuco
Isi

Use clean dropdown menus.

==================================================
8. HOMEPAGE
==================================================

Homepage purpose:

Give readers an intelligent overview of what matters right now.

Do NOT create one giant hero article followed by endless cards.

Use a sophisticated editorial grid.

SECTION 1 — BREAKING BAR

A thin green breaking-news strip.

Example:

BREAKING
“Regional leaders begin emergency security talks…”

Include timestamp.

Allow horizontal movement for breaking stories.

SECTION 2 — HERO NEWS GRID

Large lead story occupying approximately 50% width.

Large high-quality image.

Headline:

“Regional leaders announce new cooperation framework”

Metadata:

Politics · Rwanda
2 hours ago
Verified

Next to it:

2–3 medium stories.

Below:

3 smaller story cards.

Use different card sizes to create editorial rhythm.

SECTION 3 — AFRICA NOW

Heading:

“Africa Now”

Show country-based breaking/current stories.

Each card includes:

Country flag
Country name
Category
Headline
Time
Author
Verification badge

SECTION 4 — TRENDING

Create a ranked list:

01
02
03
04
05

with trending stories.

Show:

headline
country
number of related reports
time

SECTION 5 — AI DAILY BRIEFING

This is a major feature but should NOT dominate the site.

Card:

“Today in Africa”

Subtitle:

“An intelligent summary of the stories shaping the continent.”

Show:

Morning briefing
Afternoon update
Evening briefing

Each summary has:

AI-assisted
Human reviewed

Button:

“Read today's briefing”

SECTION 6 — COUNTRY SPOTLIGHT

Interactive country grid/map-inspired interface.

Countries:

Rwanda
Kenya
Uganda
Tanzania
DR Congo
Nigeria
Ghana
South Africa
Ethiopia
Egypt
Senegal
Somalia
etc.

Clicking a country opens its news feed.

SECTION 7 — BUSINESS & ECONOMY

Financial/news cards.

Show:

Markets
Currencies
Companies
Investment
Trade
Jobs
Technology

SECTION 8 — TECHNOLOGY & AI

African technology news.

SECTION 9 — AGRICULTURE

Agriculture and rural economy news.

SECTION 10 — HEALTH

Public health and medical news.

SECTION 11 — SPORTS

African sports.

SECTION 12 — CULTURE

Music
Film
Art
Culture
Entertainment

SECTION 13 — NEWSLETTER

Premium green section:

“Stay informed about Africa.”

Email input.

Language selector.

SECTION 14 — FOOTER

IbiheNews

African News & Intelligence

Navigation

Countries

Languages

About

Editorial policy

Verification policy

AI policy

Contact

Privacy

Terms

==================================================
9. NEWS PAGE
==================================================

Create a professional news discovery page.

Header:

“Amakuru”

Subtitle:

“Explore verified stories from Africa and around the world.”

TOP:

Large search field.

FILTER BAR:

Time:
Latest
Last hour
Today
Yesterday
This week
This month
Custom date

Country:
All countries
Rwanda
Kenya
Uganda
Tanzania
DR Congo
Nigeria
Ghana
South Africa
Ethiopia
Egypt
etc.

Category:
Politics
Business
Technology
Health
Agriculture
Sports
Culture
Education
Climate
World

Language:
All
Kinyarwanda
English
French
Kiswahili
Arabic
Hausa

Verification:
All
Verified
Under review
AI-assisted

Sort:
Latest
Most read
Trending
Most discussed

Make filters interactive.

Below filters:

Dense but readable news grid.

Desktop:
3-column grid.

Cards should contain:

Image
category badge
country
headline
short summary
author
time
verification status

Allow list/grid toggle.

==================================================
10. ARTICLE PAGE / NEWS PREVIEW
==================================================

Create a premium article reading experience.

TOP:

Breadcrumb:

Home / Rwanda / Politics

Category badge:

POLITICS

Headline:

“Leadership story shaping Rwanda’s next chapter”

Subheadline.

Author section:

Author avatar

Author name

Verified journalist badge

Published date

Updated date

Reading time

Share buttons.

Large article image.

Article body with excellent readability.

Right sidebar on desktop:

“Related Stories”

“Latest”

“Most Read”

“Sources”

“Story Timeline”

==================================================
11. HUMAN + AI TRANSPARENCY
==================================================

Create a small unobtrusive information panel.

Title:

“How this story was produced”

Example:

✓ Sources monitored
✓ AI-assisted discovery
✓ AI-assisted translation
✓ Human fact-check
✓ Editor approval

Do NOT say:

“This article was written by AI”

unless the article actually was.

The goal is transparency without making AI the story.

==================================================
12. ARTICLE SOURCE SYSTEM
==================================================

Every article must support multiple sources.

Create a Sources section:

Primary source
Secondary source
Official statement
Interview
IbiheNews reporting

Each source should have:

source name
source type
publication date
link
verification state

==================================================
13. AUTHOR SYSTEM
==================================================

Create professional author profiles.

Author card:

Profile photo
Name
Role
Country
Languages
Verified badge
Articles published
Expertise

Roles:

Reporter
Journalist
Editor
Senior Editor
Fact Checker
Translator
Correspondent
Contributor
Administrator

Author page:

Profile
Biography
Expertise
Languages
Latest articles
Most read articles

==================================================
14. ADMIN DASHBOARD
==================================================

Create a complete CMS.

Admin navigation:

Dashboard

News Management
- All News
- Create Article
- Drafts
- Pending Review
- Published
- Archived
- Trash

Authors
- All Authors
- Add Author
- Verification
- Permissions

Categories
- Categories
- Subcategories

Countries
- Countries
- Regions

Sources
- Source Management
- Source Verification

AI Automation
- News Ingestion
- AI Summaries
- Translation
- Duplicate Detection
- Fact Checking
- Daily Briefing
- Trend Detection

Media
- Media Library
- Upload

Users
- All Users
- Roles
- Permissions

Languages

Analytics

SEO

Settings

==================================================
15. ADMIN CREATE ARTICLE
==================================================

Design a sophisticated article editor.

Required fields:

Title
Slug
Subtitle
Summary
Content
Featured Image
Additional Images
Author
Co-authors
Category
Subcategory
Country
Region
Tags
Sources
Language
Translations
Publication date
Update date
Status
SEO title
SEO description
SEO keywords
Canonical URL

Editorial fields:

Reporter
Reviewer
Editor
Verification status
Confidence level
Source count

AI fields:

AI summary
AI translation
AI suggested title
AI suggested tags
AI detected entities
AI detected duplicate
AI confidence

Buttons:

Save Draft

Send for Review

Verify

Schedule

Publish

Archive

Delete

==================================================
16. ARTICLE WORKFLOW
==================================================

Create visual workflow:

SOURCE DETECTED

↓

AI ANALYSIS

↓

DUPLICATE CHECK

↓

AI SUMMARY

↓

JOURNALIST REVIEW

↓

FACT CHECK

↓

EDITOR APPROVAL

↓

PUBLISH

↓

AI DISTRIBUTION

↓

TRANSLATION

↓

DAILY BRIEFING

Make this visually clear.

==================================================
17. AUTOMATED NEWS INGESTION
==================================================

Admin page:

“News Automation”

Show monitored sources.

Each source:

Source name
Country
Category
Status
Last checked
Articles discovered
Reliability score

Pipeline status:

Monitoring
Detected
Analyzing
Duplicate check
Summarizing
Waiting for human review
Published

AI must be able to monitor approved news sources and feeds.

==================================================
18. DAILY AI BRIEFING
==================================================

Create a powerful admin screen.

Heading:

“Daily Africa Briefing”

Date selector.

Generate briefing button.

Sections:

Top story

Politics

Business

Technology

Health

Agriculture

Sports

Culture

Regional developments

World events affecting Africa

For each section:

Stories analyzed
Important developments
What changed today
Why it matters
Sources
Human verification status

Button:

“Generate Daily Briefing”

==================================================
19. MULTILINGUAL ADMIN
==================================================

Every article can have translations.

Translation table:

Original
Kinyarwanda
English
French
Kiswahili
Arabic
Hausa

Status:

Not translated
AI translated
Human reviewed
Published

Allow editors to review translations.

==================================================
20. ANALYTICS
==================================================

Admin analytics dashboard:

Total readers
Daily active users
Article views
Unique visitors
Average reading time
Top countries
Top articles
Trending topics
Language usage
Category performance
Author performance
Traffic sources

Charts must be clean and editorial rather than overly flashy.

==================================================
21. DESIGN SYSTEM
==================================================

Create reusable Figma components.

Components:

Header
Footer
Article Card
Featured Article
Compact Article
Trending Item
Country Card
Category Card
Author Card
Verification Badge
AI-Assisted Badge
Breaking News Badge
Source Card
Filter Dropdown
Search Bar
Language Selector
Pagination
Tabs
Modal
Toast
Button
Input
Textarea
Select
Avatar
Table
Status Badge
Chart Card
Sidebar
Admin Navigation
Article Editor
Workflow Step
Translation Table

Create variants for:

Default
Hover
Active
Disabled
Loading
Error

==================================================
22. RESPONSIVE DESIGN
==================================================

Desktop:
1440px

Tablet:
1024px

Mobile:
390px

On mobile:

Convert desktop navigation to hamburger.

Convert news grids to one-column feed.

Move sidebars below content.

Filters become horizontally scrollable or open inside a filter drawer.

Article typography becomes approximately:

32px headline
17px body

Maintain excellent readability.

==================================================
23. ACCESSIBILITY
==================================================

Use WCAG-conscious contrast.

Keyboard-friendly controls.

Visible focus states.

Readable font sizes.

Semantic hierarchy.

Do not rely only on colors for statuses.

Icons must have labels/tooltips.

==================================================
24. UX PRINCIPLES
==================================================

The website should feel:

FAST
TRUSTWORTHY
HUMAN
INTELLIGENT
AFRICAN
GLOBAL
EDITORIAL
PREMIUM

Avoid:

Excessive gradients
Huge AI graphics
Robot imagery everywhere
Too many rounded cards
Excessive animations
Clutter
Generic SaaS appearance
Fake statistics
Fake social proof

AI should be subtle.

People and journalism should remain visible.

==================================================
25. PROTOTYPE INTERACTIONS
==================================================

Build an interactive prototype.

Interactions:

Homepage → News

Homepage → Article

Homepage → Country

Homepage → Category

News filters → filtered results

Search → search results

Article → author profile

Article → related article

Article → source

Language selector → language version

Admin → News Management

Admin → Create Article

Create Article → Review

Review → Verify

Verify → Publish

AI Automation → Daily Briefing

Admin → Authors

Admin → Categories

Admin → Sources

Admin → Analytics

==================================================
26. REQUIRED FIGMA PAGES
==================================================

Create these Figma pages/sections:

01 — Design System

02 — Homepage

03 — News Discovery

04 — Article / News Preview

05 — Country News

06 — Author Profile

07 — Search Results

08 — Daily Briefing

09 — Admin Dashboard

10 — Admin News Management

11 — Article Editor

12 — Review & Verification

13 — Authors CMS

14 — Categories CMS

15 — Sources CMS

16 — AI Automation

17 — Daily Briefing Admin

18 — Translation Management

19 — Analytics

20 — Settings

21 — Mobile Screens

==================================================
27. FINAL VISUAL DIRECTION
==================================================

The final result should look like a serious international media company headquartered in Africa.

Imagine:

Reuters-level credibility
+
BBC-level usability
+
Bloomberg-style information density
+
modern African identity
+
AI-powered newsroom infrastructure

but do NOT copy their exact design.

Create an original IbiheNews visual identity.

The homepage must immediately communicate:

“THIS IS A MAJOR AFRICAN NEWS PLATFORM.”

The user should feel that IbiheNews is:

not just a blog,
not just an AI project,
not just a Rwandan news site,

but a scalable Pan-African information platform capable of serving readers worldwide.

FINAL BRAND MESSAGE:

IbiheNews

“Africa, Connected by Information.”

“Powered by AI. Verified by People.”

Build the prototype with realistic placeholder news content, African countries, realistic author profiles, source cards, article images, editorial statuses and meaningful UI data.

Do not use lorem ipsum.

Make every screen polished, consistent and production-ready.
```
