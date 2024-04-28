import { FormEvent, useRef, useState } from "react";
import { ContactMessageResponse, useAlert, useFonts } from "ydl-react-components";

export default function ContactForm({
  sendMessage,
}: {
  sendMessage: (formData: FormData) => Promise<ContactMessageResponse>;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const alert = useAlert();

  const formRef = useRef<HTMLFormElement>(null);

  const secondaryFont = useFonts().secondaryFont;


  // Handle form submit: send the POST request and set the proper states.
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();

    setIsLoading(true);

    const response = await sendMessage(formData);

    if (response.status == 200) {
      alert.success("Sent! Thank you for your message.");
      formRef.current?.reset();
    } else {
      alert.danger("An error has occured. Please try again later.");
    }

    setIsLoading(false);
  }

  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <div>
        <label className={secondaryFont.className} htmlFor="name">
          Your name
        </label>
        <input
          id="name"
          name="name"
          placeholder={"John Doe"}
          type="text"
          required
          disabled={isLoading}
        />
      </div>

      <div>
        <label className={secondaryFont.className} htmlFor="email">
          Your e-mail address
        </label>
        <input
          id="email"
          name="email"
          placeholder={"john.doe@gmail.com"}
          type="email"
          required
          disabled={isLoading}
        />
      </div>

      <div>
        <label className={secondaryFont.className} htmlFor="message">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder={"Your message..."}
          required
          disabled={isLoading}
        />
      </div>

      <button
        className={secondaryFont.className}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
