import subskill from "../../assets/subSkills.jpg"
const SubSkills = () => {
  return (
    <div className="border-y-2 border-lightGrey relative ">
      <div className="absolute bg-gradient-to-r from-orange to-cyan opacity-50 w-full h-full"></div>
      <img
        src={subskill}
        alt="subSkills image"
        className=""
      />
    </div>
  );
};

export default SubSkills;
