import ResumeTitle from "./ResumeTitle";
import { Text, Collapse, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { ResumeContent } from "../../data/resumePageData";

type SectionProps = {
  content: Array<ResumeContent>;
  title: string;
};

const Section = ({ content, title }: SectionProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div className="mt-7">
      <ResumeTitle text={title} onClick={onToggle} isOpen={isOpen} />
      <Collapse className="mt-4" in={!isOpen} animateOpacity>
        {content.map((c) => (
          <div key={c.title}>
            {c.titleLink ? (
              <Text className="text-lg md:text-2xl">
                <Link
                  href={c.titleLink}
                  className="cursor-pointer hover:underline hover:text-[#8185E1]"
                  target="_blank"
                >
                  {c.title.split(",")[0]}
                </Link>
                {", " + c.title.split(",")[1]}
              </Text>
            ) : (
              <Text className="text-lg md:text-2xl">{c.title}</Text>
            )}

            <Text className="text-m text-[#E17FB3]">{c.desc}</Text>
            <Text className="text-m text-[#E17FB3]">{c.desc2}</Text>
            <Text as="i" className="text-sm mt-1 text-[lightgray]">
              {c.date}
            </Text>
            <br />
            <br />
          </div>
        ))}
      </Collapse>
    </div>
  );
};

export default Section;
