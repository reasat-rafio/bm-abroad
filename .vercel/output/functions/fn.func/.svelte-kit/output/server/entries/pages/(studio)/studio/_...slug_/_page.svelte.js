import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../../../../chunks/ssr.js";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { FcContacts, FcLink, FcAbout, FcHome } from "react-icons/fc/index.esm.js";
import { TbBoxAlignBottom } from "react-icons/tb/index.esm.js";
import { FaRegStar, FaSitemap } from "react-icons/fa/index.esm.js";
import { IoNavigate } from "react-icons/io5/index.esm.js";
import { MdLink } from "react-icons/md/index.esm.js";
import React from "react";
import { LuSubtitles } from "react-icons/lu/index.esm.js";
import { AiFillHighlight } from "react-icons/ai/index.esm.js";
import { P as PUBLIC_SANITY_PROJECT_ID } from "../../../../../chunks/public.js";
import { GrEdit } from "react-icons/gr/index.esm.js";
import { RiPagesLine } from "react-icons/ri/index.esm.js";
const SanityStudio_svelte_svelte_type_style_lang = "";
const css = {
  code: "#svelte-studio.svelte-1nv23gl.svelte-1nv23gl{height:100vh}#svelte-studio.svelte-1nv23gl>div.svelte-1nv23gl{height:100%}",
  map: null
};
const SanityStudio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { config: config2 } = $$props;
  let studioEl;
  if ($$props.config === void 0 && $$bindings.config && config2 !== void 0)
    $$bindings.config(config2);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1e4mcuv_START --><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><meta name="robots" content="noindex"><meta name="referrer" content="same-origin"><!-- HEAD_svelte-1e4mcuv_END -->`, ""} <div id="svelte-studio" class="svelte-1nv23gl"><div class="svelte-1nv23gl"${add_attribute("this", studioEl, 0)}></div> </div>`;
});
const contact = {
  name: "site.contact",
  title: "Contact",
  icon: FcContacts,
  type: "document",
  fields: [
    {
      name: "socials",
      type: "array",
      of: [
        {
          name: "social",
          type: "object",
          fields: [
            {
              name: "icon",
              type: "image",
              validation: (Rule) => Rule.required()
            },
            {
              name: "link",
              type: "url",
              validation: (Rule) => Rule.required()
            }
          ],
          preview: {
            select: {
              title: "link",
              media: "icon"
            }
          }
        }
      ]
    }
  ]
};
const footer = {
  name: "site.footer",
  title: "Footer",
  icon: TbBoxAlignBottom,
  type: "document",
  fields: [
    {
      name: "title",
      type: "text",
      validation: (Rule) => Rule.required()
    },
    {
      name: "menu",
      title: "Menu",
      type: "array",
      of: [{ type: "menuItem" }],
      validation: (Rule) => Rule.required()
    }
  ]
};
const logos = {
  name: "site.logos",
  title: "Logos",
  type: "document",
  icon: FaRegStar,
  fields: [
    {
      name: "logo",
      type: "image",
      validation: (Rule) => Rule.required()
    },
    {
      name: "favicon",
      title: "Favicon",
      type: "image",
      validation: (Rule) => Rule.required()
    },
    {
      name: "ogImage",
      title: "Default SEO Image",
      type: "image",
      options: {
        accept: "image/png, image/jpeg, image/webp"
      },
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    prepare: () => ({
      title: "Logos"
    })
  }
};
const navigations = {
  name: "site.nav",
  title: "Navigation",
  type: "document",
  icon: IoNavigate,
  fields: [
    {
      name: "menu",
      title: "Menu",
      type: "array",
      of: [{ type: "menuItem" }],
      validation: (Rule) => Rule.required().custom((content) => {
        const highlightedMenuItems = (content || []).filter(
          ({ highlight }) => highlight
        );
        return highlightedMenuItems.length > 1 ? {
          message: "There can only be one highlighted menu item. Please delete the extra ones."
        } : true;
      })
    }
  ],
  preview: {
    prepare: () => ({
      title: "Navigations"
    })
  }
};
const site = [logos, navigations, contact, footer];
const seo = {
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "description",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "ogImage",
      type: "image",
      options: {
        accept: "image/png, image/jpeg, image/webp"
      }
    }
  ]
};
const link = {
  name: "link",
  title: "Link",
  type: "object",
  icon: FcLink,
  fields: [
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "href",
      title: "URL",
      type: "string",
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "href"
    }
  }
};
const menuItem = {
  name: "menuItem",
  title: "Menu Item",
  type: "object",
  icon: MdLink,
  fields: [
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "pageUrl",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: (_, context) => context.parent.title
      }
    },
    {
      name: "highlight",
      type: "boolean"
    }
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "pageUrl.current"
    }
  }
};
const about = {
  title: "About",
  name: "landingPage.about",
  type: "object",
  icon: FcAbout,
  fields: [
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "subtitle",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required()
    },
    {
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          description: "Important for SEO and accessibility",
          type: "string",
          validation: (Rule) => Rule.required()
        }
      ]
    },
    {
      name: "decoration",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          description: "Important for SEO and accessibility",
          type: "string",
          validation: (Rule) => Rule.required()
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "image"
    }
  }
};
const landingPage = {
  name: "landingPage",
  title: "Landing Page",
  type: "document",
  icon: FcHome,
  fields: [
    {
      name: "seo",
      title: "SEO",
      type: "seo"
    },
    {
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        { type: "landingPage.hero" },
        { type: "landingPage.tagline" },
        { type: "landingPage.about" }
      ]
    }
  ],
  preview: {
    select: {
      title: "seo.title",
      subtitle: "seo.description"
    }
  }
};
const hero = {
  title: "Hero",
  name: "landingPage.hero",
  type: "object",
  icon: FcHome,
  fields: [
    {
      name: "banners",
      type: "array",
      of: [
        {
          name: "banner",
          type: "object",
          fields: [
            {
              name: "image",
              type: "image",
              title: "Image",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  title: "Alternative Text",
                  description: "Important for SEO and accessibility",
                  type: "string",
                  validation: (Rule) => Rule.required()
                }
              ]
            },
            { name: "url", type: "string" }
          ],
          preview: {
            select: { title: "image.alt", media: "image" }
          }
        }
      ]
    }
  ],
  preview: {
    prepare: () => ({ title: "Hero" })
  }
};
const tagline = {
  title: "Tagline",
  name: "landingPage.tagline",
  type: "object",
  icon: LuSubtitles,
  fields: [
    {
      name: "title",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              {
                title: "Gradient Purple Blue",
                value: "gradientPurpleBlue",
                blockEditor: {
                  icon: () => /* @__PURE__ */ React.createElement(AiFillHighlight, null),
                  render: ({ children }) => /* @__PURE__ */ React.createElement(
                    "span",
                    {
                      style: {
                        background: "linear-gradient(180deg, #764af1 0%, #290886 127.39%)"
                      }
                    },
                    children
                  )
                }
              }
            ]
          }
        }
      ]
    },
    {
      name: "decorators",
      type: "array",
      validation: (Rule) => Rule.length(2).required(),
      options: {
        layout: "grid"
      },
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alternative Text",
              description: "Important for SEO and accessibility",
              type: "string",
              validation: (Rule) => Rule.required()
            }
          ]
        }
      ]
    }
  ]
};
const landing = [landingPage, hero, tagline, about];
const pages = [...landing];
const schemaTypes = [...site, ...pages, seo, link, menuItem];
const pageItem = (S, { schemaType, id, title, icon = GrEdit }) => S.documentListItem({ schemaType, id, title, icon }).child(
  S.editor().schemaType(schemaType).views([S.view.form().icon(icon)])
);
const singleItem = (S, { schemaType, id, title, icon }) => S.listItem({ schemaType, title, id, icon }).child(
  S.editor().id(id).title(title).schemaType(schemaType)
);
const AppStructure = (S) => S.list().title("Content").id("__root__").items([
  S.listItem().title("Site").icon(FaSitemap).child(
    S.list().title("Site").items([
      singleItem(S, {
        schemaType: "site.logos",
        id: "siteLogos",
        title: "Logos"
      }),
      singleItem(S, {
        schemaType: "site.nav",
        id: "siteNav",
        title: "Navigation"
      }),
      singleItem(S, {
        schemaType: "site.contact",
        id: "siteContacs",
        title: "Contacts"
      }),
      singleItem(S, {
        schemaType: "site.footer",
        id: "siteFooter",
        title: "Footer"
      })
    ])
  ),
  S.divider(),
  S.listItem().title("Pages").icon(RiPagesLine).child(
    S.list().title("Pages").items([
      pageItem(S, {
        schemaType: "landingPage",
        id: "landingPage",
        title: "Landing",
        icon: FcHome
      })
    ])
  )
]);
const config = defineConfig([
  {
    name: "bm-abroad-production-workspace",
    title: "BM-Abroad Production",
    basePath: "/studio/production",
    projectId: PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    plugins: [
      deskTool({
        structure: AppStructure
      }),
      visionTool()
    ],
    schema: {
      types: schemaTypes
    }
  },
  {
    name: "bm-abroad-staging-workspace",
    title: "BM-Abroad Staging",
    basePath: "/studio/staging",
    projectId: PUBLIC_SANITY_PROJECT_ID,
    dataset: "staging",
    plugins: [
      deskTool({
        structure: AppStructure
      }),
      visionTool()
    ],
    schema: {
      types: schemaTypes
    }
  }
]);
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SanityStudio, "SanityStudio").$$render($$result, { config }, {}, {})}`;
});
export {
  Page as default
};
