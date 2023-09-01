import { P as PUBLIC_SANITY_PROJECT_ID, a as PUBLIC_SANITY_DATASET } from "./public.js";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
const sanityClient = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production"
});
const imageBuilder = imageUrlBuilder(sanityClient);
const urlFor = (source) => {
  return imageBuilder.image(source);
};
export {
  imageBuilder as i,
  sanityClient as s,
  urlFor as u
};
