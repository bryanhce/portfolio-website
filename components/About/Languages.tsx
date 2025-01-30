import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoPython } from "react-icons/bi";
import { BiLogoGoLang } from "react-icons/bi";
import { BiLogoJava } from "react-icons/bi";
import { DiRuby } from "react-icons/di";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiTerraform } from "react-icons/si";
import CustomIcon from "./CustomIcon";

const Languages = () => {
  return (
    <div className="flex flex-row py-5 justify-evenly">
      <CustomIcon Icon={BiLogoPython} text="Python" />
      <CustomIcon Icon={BiLogoJava} text="Java" />
      <CustomIcon Icon={BiLogoTypescript} text="TypeScript" />
      <CustomIcon Icon={BiLogoJavascript} text="JavaScript" />
      <CustomIcon Icon={BiLogoGoLang} text="Go" />
      <CustomIcon Icon={DiRuby} text="Ruby" />
      <CustomIcon Icon={BiLogoHtml5} text="HTML" />
      <CustomIcon Icon={BiLogoCss3} text="CSS" />
      <CustomIcon Icon={GrMysql} text="mySQL" />
      <CustomIcon Icon={SiTerraform} text="Terraform" />
    </div>
  );
};

export default Languages;
