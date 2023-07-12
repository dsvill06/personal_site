const Navigation = () => { return [
    { name: 'Home', href: 'Home', current: true },
    { name: 'About', href: 'About', current: false },
    { name: 'Resume', href: 'Resume', current: false },
    { name: 'Projects', href: 'Projects', current: false },
    { name: 'Contact', href: 'Contact', current: false },
    { name: 'Blog', href: "/blog", current:false},
  ]}
const projects = () => {return [
  {name: "Personal Site", href:"davidvillavicencio.netlify.app", },
  {name: "HomeCook Dev Challenge", href: "https://github.com/dsvill06/homecook-dev-challenge"},
  {name: "Colorbilities", href:"https://github.com/dsvill06/TechX-Project"}
]}
export {Navigation};