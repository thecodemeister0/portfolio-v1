import { baseUrl } from "../constants";
import { StickyHeader } from "./sticky-header";
const endpoint = "/api/about";

export async function About() {
  const data = await fetch(`${baseUrl}${endpoint}`);
  const response = await data.json();
  const content: {
    id: string;
    paragraphs: Array<{ id: string; paragraph: string }>;
  } = response.docs[0];

  return (
    <section className={"mb-16"}>
      <StickyHeader title="About" />
      <ul>
        {content?.paragraphs.map((data) => (
          <p key={data.id} className={"mb-4"}>
            {data.paragraph}
          </p>
        ))}
      </ul>
    </section>
  );
}
