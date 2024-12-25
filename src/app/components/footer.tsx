import { RichText } from "@payloadcms/richtext-lexical/react";

export async function Footer() {
  const data = await fetch("http://localhost:3000/api/footer");
  const response = await data.json();
  const content = response.docs[0];

  return (
    <footer>
      <RichText data={content.description} />
    </footer>
  );
}
