export const navebarData = [
  {
    name: "Home",
    link: "/", // no submenu
  },
  {
    name: "About Us",
     submenu: [
    { name: "About School", link: "/about/school" },
    { name: "Our Vision & Mission", link: "/about/vision-mission" },
    { name: "Principal's Message", link: "/about/principal-message" },
    { name: "Chairman's Message", link: "/about/chairman-message" },
    { name: "Our Team", link: "/about/team" },
    { name: "History", link: "/about/history" },
    { name: "Achievements", link: "/about/achievements" },
    { name: "Infrastructure", link: "/about/infrastructure" }
  ]
  },
  {
    name: "Admissions",
    link: "/contact", // no submenu
      submenu: [
    { name: "Admission Process", link: "/admission/process" },
    { name: "Eligibility Criteria", link: "/admission/eligibility" },
    { name: "Admission Form", link: "/admission/form" },
    { name: "Fee Structure", link: "/admission/fees" },
    { name: "Required Documents", link: "/admission/documents" },
    { name: "Important Dates", link: "/admission/dates" },
    { name: "Scholarships", link: "/admission/scholarships" },
    { name: "FAQ", link: "/admission/faq" }
  ]
  },
  {
    name: "Academics",
    link: "/contact", // no submenu
      submenu: [
        { name: "Curriculum", link: "/academic/curriculum" },
        { name: "Syllabus", link: "/academic/syllabus" },
        { name: "Academic Calendar", link: "/academic/calendar" },
        { name: "Departments", link: "/academic/departments" },
        { name: "Faculty", link: "/academic/faculty" },
        { name: "Examinations", link: "/academic/examinations" },
        { name: "Results", link: "/academic/results" },
        { name: "Library", link: "/academic/library" },
        { name: "Laboratories", link: "/academic/labs" },
        { name: "Activities", link: "/academic/activities" }
      ]
  },
    {
    name: "Contact",
    link: "/contact", // no submenu
      submenu: [
    { name: "Contact Info", link: "/contact/info" },
    { name: "Get in Touch", link: "/contact/get-in-touch" },
    { name: "Location / Map", link: "/contact/location" },
    { name: "Support", link: "/contact/support" },
    { name: "Feedback", link: "/contact/feedback" }
  ]
  },
];