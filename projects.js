// =====================================================================
// EDIT YOUR PROJECTS HERE. This one list feeds both the project cards
// on the home page and each project's own page (project.html?id=...).
//
// - id:      short name used in the link, lowercase with dashes, no spaces
// - cover:   picture shown on the card and at the top of the project page
// - gallery: more pictures shown on the project page (can be empty: [])
// Put your pictures in the "images" folder and use "images/your-file.jpg".
// =====================================================================
const PROJECTS = [
  {
    id: "tricycle-ride-system",
    title: "Tricycle Ride System",
    summary: "Ride dispatch for a tricycle terminal, with a fair first-come queue.",
    cover: "images/vehicle/driver/1.png",
    tags: ["Python", "Flask", "CustomTkinter", "MySQL"],
    // EDIT: your role and the year
    role: "[Team of 4, Developer and Debbuger]",
    date: "[2025]",
    description: [
      "A dispatch system for a tricycle terminal, built in three parts that all talk to one Flask server: a desktop console for the operator, a desktop app for drivers, and a mobile web page for passengers.",
      "Drivers sign in and join a FIFO queue that shows their live position. Passengers request one or more tricycles from their phone — enough for group travel — and each request is auto-assigned from the front of the queue, so turns are taken in order instead of going to whoever reaches the fare first. Drivers then mark each ride as picked up and completed.",
      "The operator side creates and manages driver accounts and keeps an activity log of every sign-in, sign-out and status change, filterable by type and by date. Passengers can only ever see their own requests.",
      "The admin and driver clients are CustomTkinter desktop apps that reach the Flask API over HTTP with requests; the passenger page is Bootstrap rendered through Jinja2, with vanilla JavaScript on the front end and MySQL behind the server.",
      "[What was the hardest part to get right, and what would you change next time?]",
    ],
    gallery: [
      "images/vehicle/admin/1.png",
      "images/vehicle/admin/2.png",
      "images/vehicle/admin/3.png",
      "images/vehicle/driver/2.png",
      "images/vehicle/driver/3.png",
      "images/vehicle/driver/4.png",
      "images/vehicle/passenger/1.jpg",
      "images/vehicle/passenger/2.jpg",
    ],
    demo: "",   // live link, e.g. "https://my-app.vercel.app" (leave "" to hide)
    code: "",   // GitHub link (leave "" to hide)
  },
  {
    id: "agri-calendar",
    title: "Agri Calendar",
    summary: "Planning and expense tracker for farmers and gardeners.",
    cover: "images/agrical/home.jpg",
    tags: ["PHP", "MySQL", "JavaScript", "XAMPP"],
    // EDIT: your role and the year
    role: "Team of 5, Developer and Debugger",
    date: "2025",
    description: [
      "A planning and bookkeeping tool for farmers and gardeners. It keeps the two things a small farm has to stay on top of in one place: when the work needs to happen, and what it costs.",
      "Users register and sign in, then add dated events that collect into a to-do list and raise reminders when they come due. A separate finance table logs each entry as capital or expense and keeps a running remaining-capital figure, so the cost of a season stays visible against what was put in.",
      "Built on PHP and MySQLi with PHP sessions for login, over a MySQL/MariaDB database running on XAMPP. The front end is HTML5, CSS3 and vanilla JavaScript, using the Fetch API to update the page without reloads and the Web Notifications API to surface event reminders.",
      "[What was the hardest part to get right, and what would you change next time?]",
    ],
    gallery: [
      "images/agrical/login.jpg",
      "images/agrical/register.jpg",
      "images/agrical/homepage.jpg",
      "images/agrical/homepage2.jpg",
      "images/agrical/about.jpg",
    ],
    demo: "",
    code: "",
  },
  
];
