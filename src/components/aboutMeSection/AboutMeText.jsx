import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Umesh Singh Bisht, a passionate software developer and tech
        enthusiast with a strong focus on problem-solving and backend
        development. I specialize in C++, data structures and algorithms, and
        have experience building real-world projects using modern web
        technologies. With over 800+ problems solved on LeetCode and a deep
        interest in scalable systems, I aim to bridge theoretical knowledge with
        practical implementation. I actively share my learning journey,
        contribute to open-source, and enjoy mentoring peers to help them grow
        in tech. Outside of development, I’m driven by continuous learning,
        building impactful solutions, and inspiring others to pursue their goals
        in the software industry.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
