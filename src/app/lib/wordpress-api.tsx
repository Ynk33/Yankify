import { unstable_noStore as noStore } from "next/cache";
import { About, Contact, Footer, Galleries, Menu, Metadata, Settings } from "./definitions";

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL + "/wp-json";
const RESSOURCE_PATH = "/wp/v2";

// A convenient way to store the URLs to the Wordpress API
const URLs = {
  // GET
  settings: API_URL,

  metadata: API_URL + "/custom/metadata",
  menu: API_URL + "/custom/menu",
  theme: API_URL + "/custom/theme",
  about: API_URL + "/custom/about",
  contact: API_URL + "/custom/contact",
  footer: API_URL + "/custom/footer",

  categories: API_URL + RESSOURCE_PATH + "/categories",
  pages: API_URL + RESSOURCE_PATH + "/pages",
  highlights: API_URL + RESSOURCE_PATH + "/highlight",
  galleries: API_URL + RESSOURCE_PATH + "/gallery",
  mediaFile: API_URL + RESSOURCE_PATH + "/media",

  // POST
  sendEmail: API_URL + "/custom/contact/send",
};

// Send GET query to the specified URL.
async function Get<T>(url: string): Promise<T> {
  try {
    const response: Response = await fetch(url);
    console.log("Fetching " + url + "...");
    if (!response.ok) {
      throw new Error("Network response was not OK.");
    }

    const data = await response.json();

    console.log("Fetch successful!");

    return data;
  } catch (error) {
    console.error("There has been a problem with your fetch operation.", error);
    return Promise.reject(error);
  }
}

// Fetch the general Settings from Wordpress API
export async function fetchSettings(): Promise<Settings> {
  noStore();
  return await Get<Settings>(URLs.settings);
}

// Fetch the site's metadata from Wordpress API
export async function fetchMetadata(): Promise<Metadata> {
  noStore();
  return await Get<Metadata>(URLs.metadata);
}

// Fetch the Menu from Wordpress API
export async function fetchMenu(): Promise<Menu> {
  noStore();
  return await Get<Menu>(URLs.menu);
}

// Fetch the Highlights from Wordpress API
export async function fetchHighlights(): Promise<Galleries> {
  noStore();
  return await Get<Galleries>(URLs.highlights);
}

// Fetch the Galleries from Wordpress API
export async function fetchGalleries(): Promise<Galleries> {
  noStore();
  return await Get<Galleries>(URLs.galleries);
}

// Fetch the About page content from Wordpress API
export async function fetchAbout(): Promise<About> {
  noStore();
  return await Get<About>(URLs.about);
}

// Fetch the Contact form content from the Wordpress API
export async function fetchContact(): Promise<Contact> {
  noStore();
  return await Get<Contact>(URLs.contact);
}

// Fetch the Footer content from the Wordpress API
export async function fetchFooter(): Promise<Footer> {
  noStore();
  return await Get<Footer>(URLs.footer);
}
