import { Github, Instagram, Linkedin } from "lucide-react";

export async function SocialLinks() {
  const data = await fetch("http://localhost:3000/api/socialLinks");
  const response = await data.json();
  const content: Array<{
    id: string;
    name: string;
    url: string;
  }> = response.docs;
  return (
    <div>
      <ul className={"mt-8 flex flex-row gap-4"}>
        {content.map((data) => (
          <a key={data.id} href={data.url} target={"_blank"}>
            {data.name === "github" && <Github />}
            {data.name === "linkedin" && <Linkedin />}
            {data.name === "instagram" && <Instagram />}
          </a>
        ))}
      </ul>
    </div>
  );
}
