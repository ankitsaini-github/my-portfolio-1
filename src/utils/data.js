export const SKILLS = [
  {
    title: "Web Dev",
    icon: './assets/images/frontend1.png',
    skills: [
      {skill: 'HTML5', percentage: '80%'},
      {skill: 'CSS3', percentage: '90%'},
      {skill: 'JavaScript', percentage: '75%'},
    ]
  },
  {
    title: "Libraries",
    icon: './assets/images/library1.png',
    skills: [
      {skill: 'React.js', percentage: '80%'},
      {skill: 'Redux', percentage: '75%'},
      {skill: 'React-Router', percentage: '80%'},
      // {skill: 'React-Bootstrap', percentage: '70%'},
    ]
  },
  {
    title: "Tools",
    icon: './assets/images/tools1.png',
    skills: [
      {skill: 'Git & GitHub', percentage: '85%'},
      {skill: 'Visual Studio Code', percentage: '85%'},
      {skill: 'Responsive Design', percentage: '70%'},
    ]
  },
  {
    title: "Frameworks",
    icon: './assets/images/framework1.png',
    skills: [
      {skill: 'Bootstrap', percentage: '75%'},
      {skill: 'Tailwind Css', percentage: '70%'},
      {skill: 'Next Js', percentage: '65%'},
    ]
  },
  {
    title: "Soft Skills",
    icon: './assets/images/softskill1.png',
    skills: [
      {skill: 'Problem Solving', percentage: '80%'},
      {skill: 'Collaboration', percentage: '85%'},
      {skill: 'Attention to Detail', percentage: '75%'},
    ]
  },
]

export const PROJECTS = [
  {
    title: "Mail Box Client",
    type: "Web Application",
    codeUrl: "https://github.com/ankitsaini-github/mail-box-client-app",
    liveUrl: "https://mail-box-client-app-rust.vercel.app/",
    detail: [
      "Developed a mailbox client website in which user can receive and send mail to another registered user.",
      "Each user has their own account and users cannot access other users data.",
      "User can view total unread messages.",
      "Utilize React.js library for creating this application, Redux for state management, GitHub for version control, FireBase for storing data"
    ]
  },
  {
    title: "Expense Tracker",
    type: "Web Application",
    codeUrl: "https://github.com/ankitsaini-github/expense-tracker-app",
    liveUrl: "",
    detail: [
      "Developed an expense tracker app in which user can add, delete and update expense.",
      "Premium feature are also introduced to get dark mode and Download expenses in CSV format.",
      "Used React Router to seemlessly navigate through all tabs in the app.",
      "Applied Firebase Authentication and Realtime database service into the website."
    ]
  },
  {
    title: "E-Commerce App",
    type: "Web Application",
    codeUrl: "https://github.com/ankitsaini-github/ecommerce-app",
    liveUrl: "",
    detail: [
      "An Ecommerce application using React.js for front end.",
      "Context API for storing data and Firebase for authentiction.",
      "User needs to log in to access their cart and users can see the product details as well.",
      "Cart is Persistent and user specific.",
    ]
  },
]