import portfolioImage from "../images/Portfolio.png";
import homeCook from "../images/HomeCook.png";
import colorBilities from "../images/Colorbilities.png"
import LUL from "../images/LUL.png"

const Navigation = () => {
  return [
    { name: "Home", href: "Home", current: true },
    { name: "About", href: "About", current: false },
    { name: "Resume", href: "Resume", current: false },
    { name: "Projects", href: "Projects", current: false },
    { name: "Contact", href: "Contact", current: false },
    { name: "Blog", href: "/blog", current: false },
  ];
};
const projects = () => {
  return [
    {
      name: "Personal Site",
      link: "https://davidvillavicencio.netlify.app",
      description:
        "A personal portfolio website I made to showcase my skills and resume using React.js hosted on Netlify, Node.js for mailing backend hosted on AWS lambda.",
      image: portfolioImage,
    },
    {
      name: "HomeCook Dev Challenge",
      link: "https://github.com/dsvill06/homecook-dev-challenge",
      description:
        "A page I made for my internship onboarding that displays a list of kitchens and performs basic CRUD operations using the provided API endpoints.",
      image: homeCook,
    },
    {
      name: "Colorbilities",
      link: "https://github.com/dsvill06/TechX-Project",
      description:
      "A page I made with a team for a club project that showcases the difference between a color the user picked and what it would be based on the colorblindness chosen.",
      image: colorBilities,
    },
    {
      name: "Fraternity Website",
      link: "https://unclul.netlify.app/",
      description:
      "My fraternity website for La Unidad Latina, Lambda Upsilon Lambda Fraternity Inc. that showcases the work we do on campus at the University of North Carolina at Chapel Hill.",
      image: LUL,
    },
  ];
};
export { Navigation, projects };
