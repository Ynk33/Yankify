"use client";

import { useEffect } from "react";
import style from "@/styles/errors.module.scss";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={style.error}>
      <h1>Oops!</h1>
      <p>Something went wrong!</p>
      <a href="/">Back to home</a>
    </main>
  );
}
