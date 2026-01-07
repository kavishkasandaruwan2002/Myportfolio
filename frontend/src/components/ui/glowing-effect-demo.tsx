import { Code, Server, Database, Rocket, Layers } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Code className="h-5 w-5" />}
        title="Frontend Development"
        description="Crafting beautiful and responsive user interfaces with React, Tailwind CSS, and modern JavaScript. Focus on creating intuitive and performant web experiences."
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Server className="h-5 w-5" />}
        title="Backend Engineering"
        description="Building scalable RESTful APIs with Node.js and Express. Implementing secure authentication, efficient data processing, and robust server-side logic."
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Database className="h-5 w-5" />}
        title="Database Management"
        description="Designing and optimizing MongoDB schemas with Mongoose. Ensuring data integrity, performance, and scalability for production applications."
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Rocket className="h-5 w-5" />}
        title="DevOps & Deployment"
        description="Automating CI/CD pipelines with GitHub Actions, containerizing applications with Docker, and deploying to cloud infrastructure on AWS EC2."
      />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Layers className="h-5 w-5" />}
        title="Full Stack Solutions"
        description="Delivering end-to-end MERN stack applications with seamless integration between frontend and backend. From concept to deployment, ensuring quality at every stage."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-border bg-card p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6 hover:shadow-xl dark:hover:shadow-[0px_0px_35px_0px_rgba(45,45,45,0.5)] transition-shadow duration-300">
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            <div className="w-fit rounded-lg border-[0.75px] border-primary-200 dark:border-primary-800 bg-primary-100 dark:bg-primary-900/30 p-3 text-primary-600 dark:text-primary-400">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-bold font-sans tracking-[-0.02em] md:text-2xl md:leading-[1.875rem] text-balance text-card-foreground">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.5rem] md:text-base md:leading-[1.625rem] text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

