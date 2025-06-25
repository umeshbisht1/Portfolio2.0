import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
 import complaint from "../../assets/Complaint-mgt.jpg"
 import ecommerce from "../../assets/ecommerce.webp"
  import tex from "../../assets/tax_income_18_1453094119__1455531022_73291.jpg"
 import vichle from "../../assets/Vehicle-Tracking-and-Monitoring-System (1).webp"

const projects = [
  {
    name: "Complaint Management System",
    year: "Feb2024",
    align: "right",
    image: complaint, // Replace with actual image path
    link: "https://complaint-management-system-g97j.vercel.app/",
  },
  {
    name: "E-commerce Website",
    year: "Jul2023",
    align: "left",
    image: ecommerce, // Replace with actual image path
    link: "https://ecommerce-frontend-three-nu.vercel.app/",
  },
  {
    name: "Tax Management Platform",
    year: "Apr2024",
    align: "right",
    image: tex, // Replace with actual image path
    link: "#",
  },
  {
    name: "Vehicle Tracking System",
    year: "Dec2023",
    align: "left",
    image: vichle, // Replace with actual image path
    link: "",
  },
];


const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
