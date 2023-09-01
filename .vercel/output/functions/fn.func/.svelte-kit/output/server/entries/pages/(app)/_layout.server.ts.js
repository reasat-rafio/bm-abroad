import groq from "groq";
import { a as asset } from "../../../chunks/query.js";
import { s as sanityClient } from "../../../chunks/sanityClient.js";
import { e as error } from "../../../chunks/index.js";
const siteQuery = groq`{
    "nav": *[_type == "site.nav"][0],
    "footer": *[_type == "site.footer"][0],
    "logos": *[_type == "site.logos"][0] {
      ...,
      ${asset("logo")},
    },
    "contact": *[_type == "site.contact"][0] {
      ...,
      socials[]{
        ...,
        ${asset("icon")},
      }
    }
  }`;
const load = async () => {
  const data = await sanityClient.fetch(siteQuery);
  if (!data)
    throw error(404, { message: "Not found" });
  return {
    site: data
  };
};
export {
  load
};
