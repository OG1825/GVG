---
title: Exam Timetable Clash Detector
reward: 1200
sponsor: Registrar's Office
difficulty: Beginner
status: Open
deadline: 2026-04-01
updatedAt: 2026-03-04
tags: [JavaScript, Utility, Frontend]
---

## Overview

Simple utility to help students identify conflicting exam times within their course selections. The tool imports exam schedules and highlights potential conflicts immediately.

## Functional Requirements

- Upload exam schedule (CSV or direct API integration)
- Display student's enrolled courses and associated exams
- Highlight conflicting exam times (same datetime)
- Show buffer time between exams at different locations
- Export conflict report (PDF)
- Mobile-friendly interface

## Technical Constraints

- Pure client-side processing (no backend needed)
- Works offline after initial data load
- File-based architecture (no database)
- <50KB gzipped bundle size

## Deliverables

1. Fully functional web app
2. User guide and FAQ
3. Source code with clear comments
4. Deployment package for university servers

## Timeline

- Week 1: Setup and data structure design
- Week 2-3: Core feature development
- Week 4: Testing, optimization, documentation

## Quality Standards

- Perfect accuracy on conflict detection
- Mobile-responsive design
- Accessibility: WCAG 2.1 AA
- Lighthouse score: ≥95
- Fast page load: <1s on 4G

Ideal first bounty for new developers. Great portfolio project!
