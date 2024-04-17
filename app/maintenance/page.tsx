import style from "@/errors/errors.module.scss";

export default function Page() {
  return (
    <div className={style.error}>
      <h1>The site is under maintenance</h1>
      <p>Something big is coming up! Come back later to see it in action.</p>
    </div>
  )
}