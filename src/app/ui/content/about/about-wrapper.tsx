import { WordpressAPI } from "ydl-react-components";
import About from "@/app/ui/content/about/about";

export default async function AboutWrapper() {
  const about = await WordpressAPI.getInstance().fetchAbout();

  return <About about={about} />;
}
