import { WordpressAPI } from "ydl-react-components";
import Contact from "@/app/ui/content/contact/contact";

export default async function ContactWrapper() {
  const contact = await WordpressAPI.getInstance().fetchContact();

  return <Contact contact={contact} />;
}