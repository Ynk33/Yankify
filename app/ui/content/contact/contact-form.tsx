import styles from "@/app/ui/content/contact/contact.module.scss";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ContactMessageResponse, FontProvider } from "ydl-react-components";

export default function ContactForm({
  sendMessage,
}: {
  sendMessage: (formData: FormData) => Promise<ContactMessageResponse>;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  const secondaryFont = FontProvider.SecondaryFont;

  // Handle form submit: send the POST request and set the proper states.
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();

    setIsLoading(true);
    setIsSuccess(false);
    setError(null);

    const response = await sendMessage(formData);

    if (response.status == 200) {
      setIsSuccess(true);
      formRef.current?.reset();
    } else {
      setError(response.message);
    }

    setIsLoading(false);
  }

  // Hide Success or Error block after 5 seconds.
  useEffect(() => {
    if (isSuccess || error) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setError(null)
      }, 5000);

      return () => clearTimeout(timer);
    }
  })

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
      <div className={`${secondaryFont.className} ${styles.message} ${isSuccess ? styles.success : ''} ${error ? styles.error : ''}`}>
        {/* TODO: Make these messages configurable */}
        {isSuccess && "Sent! Thank you for your message."}
        {error && "An error has occured. Please try again later."}
      </div>
    </form>
  );
}
