import { ContactMessageResponse, WordpressAPI } from "ydl-react-components";
import Contact from "@/app/ui/content/contact/contact";

export default async function ContactWrapper() {
  const contact = await WordpressAPI.fetchContact();

  async function sendMessage(formData: FormData): Promise<ContactMessageResponse> {
    "use server";

    const rawFormData = {
      contact_name: formData.get("name"),
      contact_email: formData.get("email"),
      contact_message: formData.get("message")
    }

    const postData = {
      contact_name: rawFormData.contact_name ? rawFormData.contact_name.toString() : "",
      contact_email: rawFormData.contact_email ? rawFormData.contact_email.toString() : "",
      contact_message: rawFormData.contact_message ? rawFormData.contact_message.toString() : "",
    }

    return await WordpressAPI.sendMessage(postData);
  }

  return <Contact contact={contact} sendMessage={sendMessage} />;
}