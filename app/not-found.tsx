import style from "@/errors/errors.module.scss";

export default function NotFound() {
  return (
    <main className={style.error}>
      <h1>Not found</h1>
      <p>The page you are trying to access doesn&apos;t seem to exist.</p>
      <a href="/">Back to home</a>
    </main>
  );
}
