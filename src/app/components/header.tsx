import { baseUrl } from "../constants";
import { SocialLinks } from "./social-links";

const endpoint = "/api/headers";

export async function Header() {
  const data = await fetch(`${baseUrl}${endpoint}`);
  const response = await data.json();
  const content: {
    name: string;
    subtitle: string;
    description: string;
  } = response.docs[0];

  return (
    <header
      className={
        "lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[40%] lg:flex-col lg:justify-between lg:py-24"
      }
    >
      <div>
        <h1
          className={
            "text-4xl font-bold tracking-tighter text-slate-200 sm:text-5xl"
          }
        >
          {content?.name}
        </h1>
        <h2
          className={
            "text-xl mt-3 font-medium tracking-tight text-slate-200 sm:text-2xl"
          }
        >
          {content?.subtitle}
        </h2>
        <p className={"mt-4 max-w-sm leading-normal"}>{content?.description}</p>
      </div>
      <SocialLinks />
    </header>
  );
}
