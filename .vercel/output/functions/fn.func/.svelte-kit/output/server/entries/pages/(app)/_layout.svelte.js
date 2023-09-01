import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component, d as each } from "../../../chunks/ssr.js";
import { S as Sanity_image } from "../../../chunks/sanity-image.js";
import { i as imageBuilder, u as urlFor } from "../../../chunks/sanityClient.js";
import { twMerge } from "tailwind-merge";
const Cta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${add_attribute("href", href, 0)}${add_attribute("class", twMerge("gradient-purple-blue-90 rounded-[12px] px-[32px] py-[13px] text-[16px] font-medium tracking-[0.48px] text-white", $$props.class ?? ""), 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let yPosition;
  let { nav } = $$props;
  let { logo } = $$props;
  if ($$props.nav === void 0 && $$bindings.nav && nav !== void 0)
    $$bindings.nav(nav);
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  yPosition = "translate-y-[25px]";
  return ` <nav class="fixed top-0 left-0 z-50 w-full"><div style="box-shadow: 0px 8px 20px -5px rgba(0, 0, 0, 0.10);" class="${"container rounded-lg bg-white/50 px-[32px] py-[14px] backdrop-blur-2xl transition-transform duration-500 ease-in-out " + escape(yPosition, true)}"><div class="flex items-center justify-between"><a class="h-[69px]" href="/">${validate_component(Sanity_image, "SanityImage").$$render(
    $$result,
    {
      class: "object-cover h-full w-fit",
      src: logo,
      sizes: "100px",
      imageUrlBuilder: imageBuilder
    },
    {},
    {}
  )}</a> <ul class="flex space-x-[46px]">${each(nav.menu, ({ title, highlight, pageUrl }) => {
    return `<li class="uppercase">${!!highlight ? `${validate_component(Cta, "Cta").$$render($$result, { href: pageUrl.current }, {}, {
      default: () => {
        return `${escape(title)} `;
      }
    })}` : `<a class="text-[16px] font-medium tracking-[0.48px]"${add_attribute("href", pageUrl.current, 0)}>${escape(title)} </a>`} </li>`;
  })}</ul></div></div></nav>`;
});
const _300 = "";
const _400 = "";
const _500 = "";
const _600 = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nav;
  let favicon;
  let logo;
  let footer;
  let contact;
  let faviconImage;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ site: { nav, logos: { favicon, logo }, footer, contact } } = data);
  faviconImage = favicon ? urlFor(favicon).size(256, 256).ignoreImageParams().url() : null;
  return `${$$result.head += `<!-- HEAD_svelte-1bkxkqn_START --><link rel="icon" type="image/png"${add_attribute("href", faviconImage, 0)}><!-- HEAD_svelte-1bkxkqn_END -->`, ""} ${validate_component(Navbar, "Navbar").$$render($$result, { nav, logo }, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
