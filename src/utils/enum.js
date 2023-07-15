import portfolioImage from "../images/Portfolio.png";
import homeCook from "../images/HomeCook.png";
import colorBilities from "../images/Colorbilities.png"

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
        "A personal portfolio website I made to showcase my skills and resume using React.js and hosted on Netlify.",
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
  ];
};
export { Navigation, projects };
