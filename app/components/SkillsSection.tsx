import Image from "next/image";

export function SkillsSection() {
  return (
    <section
      id="services"
      className="flex flex-wrap-reverse justify-around gap-20 bg-[#E6ECF6] p-10 py-20 lg:flex-nowrap lg:gap-40"
    >
      <div className="flex flex-col gap-12">
        <h3 className="font-primary text-center text-lg font-bold uppercase tracking-widest text-[#21313C]">
          Skills
        </h3>
        <div className="font-secondary flex w-full flex-wrap justify-center gap-6 text-sm text-[#2B3851] md:justify-normal md:gap-20 md:text-base">
          <div className="flex max-w-[350px] flex-col gap-6">
            {SkillData.slice(0, 4).map((skill) => (
              <Skill
                key={skill.section}
                section={skill.section}
                skills={skill.skills}
              />
            ))}
          </div>
          <div className="col-2 flex max-w-[350px] flex-col justify-around gap-6">
            {SkillData.slice(4).map((skill) => (
              <Skill
                key={skill.section}
                section={skill.section}
                skills={skill.skills}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface SkillEntry {
  section: string;
  skills: string;
}

const SkillData: SkillEntry[] = [
  {
    section: "Languages",
    skills: "Bash, HTML, CSS, Javascript, Ruby, Typescript",
  },
  {
    section: "Frameworks",
    skills: "Nestjs, Nextjs, Nodejs, React, Ruby on Rails",
  },
  { section: "Databases", skills: "MongoDB, MySQL, PostgreSQL" },
  {
    section: "Platforms",
    skills:
      "AWS, Asana, BitBucket, Confluence, Contentful, GitHub, GitLab, Heroku, Jira, Mailchip, SendGrid, Slack, Stripe, Teams, Trello, Vercel",
  },
  {
    section: "Tools",
    skills:
      "Bootstrap, Cypress, Docker, ESLint, Express, Git, GraphQL, Jest, Less, Material UI, Mobx, OAuth, Puppeteer, React Router, Redux, Sass, Storybook, TalkwindCSS, TSLint, Webpack",
  },
  {
    section: "Devops",
    skills: "Amazon S3, AWS Lambda, Cloudflare, Cloudfront, Google Cloud Run",
  },
  {
    section: "Spoken languages",
    skills: "English, French, Persian, Portuguese, Spanish",
  },
];

function Skill({ section, skills }: SkillEntry) {
  return (
    <div className="flex flex-col gap-1">
      <h4 className="text-xs uppercase">{section}</h4>
      <p className="font-secondary text-sm md:text-base">{skills}</p>
    </div>
  );
}
