import { secondaryFont } from "@/app/fonts";

export default function ContactForm() {
  return (
    <form>
      <div>
        <label className={secondaryFont.className} htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          placeholder={"John Doe"}
          type="text"
          required
        />
      </div>

      <div>
        <label className={secondaryFont.className} htmlFor="email">Your e-mail address</label>
        <input
          id="email"
          name="email"
          placeholder={"john.doe@gmail.com"}
          type="email"
          required
        />
      </div>

      <div>
        <label className={secondaryFont.className} htmlFor="message">Your message</label>
        <textarea
          id="message"
          name="message"
          placeholder={"Your message..."}
          required
        />
      </div>

      <input className={secondaryFont.className} type="submit" value={"Send"} />
    </form>
  );
}
