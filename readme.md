GreenGuard

Report - Resolve - Reward

Overview

GreenGuard is a civic complaint management web application designed to simulate how local garbage and sanitation issues can be reported, tracked, and resolved in a structured manner. The system allows citizens to submit complaints and enables administrators to manage and update complaint statuses through a simple workflow.
This project demonstrates the fundamentals of frontend web development, form handling, state management, and basic administrative workflows using HTML, CSS, and JavaScript. It is intended as an academic and learning project that models a real-world civic grievance redressal system.

Problem Context

In many cities, citizens face difficulty reporting sanitation issues in a clear and trackable way. Even when complaints are submitted, users often lack transparency regarding progress and resolution status.
GreenGuard addresses this gap by simulating a structured complaint lifecycle where:
A citizen submits a complaint.
An administrator reviews and updates its status.
The citizen can track the complaint status over time.
The project demonstrates how digital systems can improve transparency and accountability in civic issue reporting.

Key Features
User Panel

Submit a complaint with:
Name
Location (Tamil Nadu dropdown selection)
Description of the issue
File upload option
Automatic generation of a unique complaint ID
Ability to view complaint status
Clean and responsive user interface
Modern layout with an eco-themed design

Admin Panel

View all submitted complaints
Update complaint status

Status workflow:
New
In Progress
Resolved

Dashboard summary section
Clear and structured administrative interface

Complaint Workflow
A user submits a complaint through the client interface.
The complaint is stored using the browser’s localStorage API.
The administrator accesses the admin panel and reviews complaints.
The administrator updates the complaint status.
When the user refreshes the page, the updated status is reflected.
This simulates the basic lifecycle of a civic complaint tracking system.

Data Storage

GreenGuard uses the browser’s localStorage API to simulate database functionality.
Complaints are stored locally in the browser.
Admin updates modify stored data directly.
Data persists only within the same browser and device.

Note: Clearing browser storage will remove all stored complaints. This project does not use a backend or external database.

Technology Stack
HTML5
CSS3
JavaScript (Vanilla JavaScript)
localStorage API
No external frameworks or libraries are used. The project focuses on core web development concepts.

How to Run the Project
Clone the repository:
git clone <repository-url>
Navigate to the project directory.
Open client/index.html in your browser.
Submit a complaint through the user interface.
Open admin/index.html in your browser.
Update the complaint status from the admin panel.
Refresh the user page to view updated status.
No server setup or backend configuration is required.

Structured workflow design

It serves as a foundational project that can later be extended into a full-stack civic application.

Future Improvements

GreenGuard can be enhanced with the following upgrades:
Backend integration using Node.js and Express
Database integration using MongoDB, MySQL, or PostgreSQL
Secure authentication and role-based access control
Real-time updates using WebSockets
Search and filter functionality
Pagination for large datasets
AI-based duplicate complaint detection
Image-based waste severity classification
Heatmap visualization for recurring issue areas
Email and SMS notification system
Cloud deployment for public access

Vision
GreenGuard is designed as a foundational step toward building a scalable civic participation platform. With backend integration, analytics, and intelligent prioritization features, it can evolve into a robust complaint management and urban governance support system.

