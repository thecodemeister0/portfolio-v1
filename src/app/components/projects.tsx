import { Anchor } from "./anchor";
import { StickyHeader } from "./sticky-header";

export async function Projects() {
  const data = await fetch("http://localhost:3000/api/projects");
  const response = await data.json();
  const content: Array<{
    id: string;
    name: string;
    url: string;
    description: string;
    skills: Array<{ id: string; name: string }>;
  }> = response.docs;
  return (
    <section id="projects" className="mb-16 scroll-mt-16 lg:mb-36">
      <StickyHeader title="Projects" />
      <ul>
        {content.map((data) => (
          <li key={data?.id} className={"mb-12"}>
            <div className={"pb-1 mb-12"}>
              <div className={"flex z-0 lg:-inset-x-6 lg:block"}>
                <div className={"flex flex-1 flex-col"}>
                  <h1
                    className={"text-lg text-slate-200 text-medium"}
                  >{`${data?.name}`}</h1>
                  <p className={"text-sm"}>{data?.description}</p>
                  <ul className={"mt-1.5 flex flex-wrap"}>
                    {data?.skills.map((skill) => (
                      <li key={skill?.id} className={"mr-1.5 mt-2"}>
                        <div
                          className={
                            "flex items-center px-3 py-1 text-sm font-medium leading-5 bg-teal-400/10 text-teal-300 rounded-full"
                          }
                        >
                          {skill?.name}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Anchor url="" text="View Project Archive" />
    </section>
  );
}
