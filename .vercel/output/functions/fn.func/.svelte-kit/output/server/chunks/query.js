import groq from "groq";
const asset = (attr, opts) => groq`'${opts?.as ?? attr}': ${attr} {
  ...,
  asset->{
    ...,
    metadata {
      lqip,
      dimensions
    }
  }
}`;
export {
  asset as a
};
