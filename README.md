EventsHub: A Global Events Management Platform (MVP):

Built on Next.js 14, EventsHub is a robust, full-stack platform designed for comprehensive event management. Whether you're an event enthusiast or an organizer, EventsHub is your go-to hub for discovering and managing diverse events worldwide.

Key Features:
Global Event Spotlight:
Explore a vast array of events from different corners of the globe. From cultural festivals to tech conferences, EventsHub provides a curated selection of diverse events to suit every interest.

Seamless Payment Processing:
Powered by Stripe, our platform ensures a seamless and secure payment process. Purchase tickets for your favorite events with ease, all within the EventsHub ecosystem.

Event Creation and Management:
Have an event you want to share with the world? EventsHub allows you to initiate and manage your own events effortlessly. From setting up event details to tracking registrations, we've got you covered.
.

How to Get Started:
Explore Events:
Browse through a wide range of events featured on the platform. Discover new and exciting opportunities happening worldwide.

Purchase Tickets:
Secure your spot at your favorite events by utilizing our secure payment system. Enjoy a hassle-free ticket purchasing experience.

Create Your Event:
If you have an event to share, use our intuitive event creation tools. Set up your event details, manage registrations, and promote it to a global audience.




Architecture:

To provide a clear understanding of the EventsHub MVP, here's an illustration of the architecture, showcasing the end-to-end data flow within our system. Each component of the diagram is labeled to highlight key functionalities.


Key Components:

1-Next.js Frontend:
The user interface is powered by Next.js 14, offering a seamless and responsive experience for users.

2-Server-Side Logic:
Handles business logic, user authentication, and event management on the server side.

Database:
Stores event data, user information, and other essential details securely.

Stripe Intégration:
Ensures secure and efficient payment processing for ticket purchases.


APIs and Methods:
For effective communication between the web client and web server, EventsHub implements the following API routes:

1.GET /api/events:

Description: Fetches a list of upcoming events.
Parameters: Profile.
Response: Array of event objects.

2.POST /api/events/create:

Description: Creates a new event.
Parameters: Event details.
Response: Newly created event object.

3.GET /api/events/:eventId:

Description: Fetches details for a specific event.
Parameters: Event ID.
Response: Event details.

4.POST /api/events/:eventId/register:

Description: Registers a user for a specific event.
Parameters: Event ID, user details.
Response: Registration confirmation.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

📋 Table of Contents
🤖 Introduction
⚙️ Tech Stack
🔋 Features
🤸 Quick Start
🕸️ Snippets
🔗 Links
🚀 More
🚨 Tutorial
This repository contains the code corresponding to an in-depth tutorial available on our YouTube channel, JavaScript Mastery.

If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🤖 Introduction
Built on Next.js 14, the events application stands as a comprehensive, full-stack platform for managing events. It serves as a hub, spotlighting diverse events taking place globally. Featuring seamless payment processing through Stripe, you have the capability to purchase tickets for any event or even initiate and manage your own events.

If you're getting started and need assistance or face any bugs, join our active Discord community with over 27k+ members. It's a place where people help each other out.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

⚙️ Tech Stack ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Node.js
Next.js
TypeScript
TailwindCSS
Stripe
Zod
React Hook Form
Shadcn
uploadthing

🔋 Features ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

👉 Authentication (CRUD) with Clerk: User management through Clerk, ensuring secure and efficient authentication.

👉 Events (CRUD): Comprehensive functionality for creating, reading, updating, and deleting events, giving users full control over event management.

Create Events: Users can effortlessly generate new events, providing essential details such as title, date, location, and any additional information.
Read Events: Seamless access to a detailed view of all events, allowing users to explore event specifics, including descriptions, schedules, and related information.
Update Events: Empowering users to modify event details dynamically, ensuring that event information remains accurate and up-to-date.
Delete Events: A straightforward process for removing events from the system, giving administrators the ability to manage and curate the platform effectively.
👉 Related Events: Smartly connects events that are related and displaying on the event details page, making it more engaging for users

👉 Organized Events: Efficient organization of events, ensuring a structured and user-friendly display for the audience, i.e., showing events created by the user on the user profile

👉 Search & Filter: Empowering users with a robust search and filter system, enabling them to easily find the events that match their preferences.

👉 New Category: Dynamic categorization allows for the seamless addition of new event categories, keeping your platform adaptable.

👉 Checkout and Pay with Stripe: Smooth and secure payment transactions using Stripe, enhancing user experience during the checkout process.

👉 Event Orders: Comprehensive order management system, providing a clear overview of all event-related transactions.

👉 Search Orders: Quick and efficient search functionality for orders, facilitating easy tracking and management.

and many more, including code architecture and reusability

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🤸 Quick Start
Follow these steps to set up the project locally on your machine.

Prerequisites

Make sure you have the following installed on your machine:

Git
Node.js
npm (Node Package Manager)
Cloning the Repository

git clone https://github.com/your-username/your-project.git
cd your-project
Installation

Install the project dependencies using npm:

npm install
Set Up Environment Variables

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Create a new file named .env in the root of your project and add the following content:

#NEXT
NEXT_PUBLIC_SERVER_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_CLERK_WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#MONGODB
MONGODB_URI=

#UPLOADTHING
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
Replace the placeholder values with your actual credentials

Running the Project

npm start
Open http://localhost:3000 in your browser to view the project.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🕸️ Snippets
globals.css
tailwind.config.ts
Clerk webhook
user.actions.ts
order.model.ts
FileUploader.tsx
DeleteConfirmation.tsx
event.action.ts
order.action.ts
orders/page.tsx


Join EventsHub Today and Explore the World of Events!


Sign Up Now | Explore Events | Join our Community
