import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="umeshbisht792@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="9528167281" Image={FiPhone} />
      <SingleInfo text="Haldwani, Uttarakhand" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
