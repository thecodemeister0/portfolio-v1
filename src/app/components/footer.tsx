import { RichText } from "@payloadcms/richtext-lexical/react";
import { baseUrl } from "../constants";

const endpoint = "/api/footer";
export async function Footer() {
  const data = await fetch(`${baseUrl}${endpoint}`);
  const response = await data.json();
  const content = response.docs[0];

  return (
    <footer>
      <RichText data={content.description} />
    </footer>
  );
}
