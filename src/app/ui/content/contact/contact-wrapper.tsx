import { fetchContact } from "@/app/lib/wordpress-api";
import Contact from "@/app/ui/content/contact/contact";

export default async function ContactWrapper() {
  const contact = await fetchContact();

  return <Contact contact={contact} />;
}