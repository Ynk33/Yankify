import { fetchAbout } from "@/app/lib/wordpress-api";
import About from "@/app/ui/content/about/about";

export default async function AboutWrapper() {
  const about = await fetchAbout();

  return <About about={about} />;
}
