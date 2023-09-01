import { a as asset } from "../../../chunks/query.js";
import { s as sanityClient } from "../../../chunks/sanityClient.js";
import { e as error } from "../../../chunks/index.js";
import groq from "groq";
const q = groq`*[_id == "landingPage"][0]{
  ...,
   sections[]{
    ...,
    ${asset("image")},
    ${asset("decoration")},
    ${asset("decorators[]", { as: "decorators" })},
    banners[]{
      ...,
      ${asset("image")}
    }
   }
}`;
const load = async () => {
  const data = await sanityClient.fetch(q);
  if (!data)
    throw error(404, { message: "Not found" });
  return {
    page: data
  };
};
export {
  load
};
