import { c as create_ssr_component, b as add_attribute, v as validate_component, e as escape, f as createEventDispatcher, a as subscribe, d as each, m as missing_component } from "../../../chunks/ssr.js";
import { twMerge } from "tailwind-merge";
import { S as Sanity_image } from "../../../chunks/sanity-image.js";
import { i as imageBuilder } from "../../../chunks/sanityClient.js";
import { w as writable } from "../../../chunks/index2.js";
import { spanToPlainText, isPortableTextToolkitList, isPortableTextListItemBlock, buildMarksTree, isPortableTextToolkitSpan, isPortableTextBlock, isPortableTextToolkitTextNode, nestLists, LIST_NEST_MODE_HTML } from "@portabletext/toolkit";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const createUiStore = () => {
  const { subscribe: subscribe2, update } = writable({
    navbarHeight: 0
  });
  const setNavbarHeight = (height) => {
    update(($store) => {
      $store.navbarHeight = height;
      return $store;
    });
  };
  return {
    subscribe: subscribe2,
    setNavbarHeight
  };
};
const uiStore = createUiStore();
const H1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { el = "h1" } = $$props;
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  return `${((tag) => {
    return tag ? `<${el}${add_attribute("class", twMerge("font-oswald text-[64px] font-semibold uppercase", $$props.class ?? ""), 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(el)}`;
});
const SectionHeader_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1ysxeg1::before{content:'';position:absolute;left:0;top:0;height:100%;width:9px;background-color:#764af1}",
  map: null
};
const SectionHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { subtitle } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  $$result.css.add(css);
  return `<header class="relative space-y-[12px] pl-[25px] svelte-1ysxeg1">${validate_component(H1, "H1").$$render($$result, { class: "leading-none", el: "h2" }, {}, {
    default: () => {
      return `${escape(title)}`;
    }
  })} <h3 class="text-[16px] text-[#A8A8A8]">${escape(subtitle)}</h3> </header>`;
});
const IntersectionObserver_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { element = null } = $$props;
  let { once = false } = $$props;
  let { intersecting = false } = $$props;
  let { root = null } = $$props;
  let { rootMargin = "0px" } = $$props;
  let { threshold = 0 } = $$props;
  let { entry = null } = $$props;
  let { observer = null } = $$props;
  createEventDispatcher();
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.once === void 0 && $$bindings.once && once !== void 0)
    $$bindings.once(once);
  if ($$props.intersecting === void 0 && $$bindings.intersecting && intersecting !== void 0)
    $$bindings.intersecting(intersecting);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.rootMargin === void 0 && $$bindings.rootMargin && rootMargin !== void 0)
    $$bindings.rootMargin(rootMargin);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  if ($$props.entry === void 0 && $$bindings.entry && entry !== void 0)
    $$bindings.entry(entry);
  if ($$props.observer === void 0 && $$bindings.observer && observer !== void 0)
    $$bindings.observer(observer);
  return `${slots.default ? slots.default({ intersecting, entry, observer }) : ``}`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title;
  let subtitle;
  let description;
  let image;
  let decoration;
  let { props } = $$props;
  let sectionEl;
  let intersecting = false;
  if ($$props.props === void 0 && $$bindings.props && props !== void 0)
    $$bindings.props(props);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({ title, subtitle, description, image, decoration } = props);
    $$rendered = `${validate_component(IntersectionObserver_1, "IntersectionObserver").$$render(
      $$result,
      {
        element: sectionEl,
        threshold: 0.25,
        intersecting
      },
      {
        intersecting: ($$value) => {
          intersecting = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<section class="relative"${add_attribute("this", sectionEl, 0)}><figure class="${"absolute left-0 top-0 w-1/2 translate-x-1/2 transition-transform duration-500 ease-in-out " + escape(intersecting ? "-translate-y-full" : "translate-y-0", true)}">${validate_component(Sanity_image, "SanityImage").$$render(
            $$result,
            {
              class: "h-full w-full object-contain",
              src: decoration,
              alt: decoration.alt,
              sizes: "50vw",
              imageUrlBuilder: imageBuilder
            },
            {},
            {}
          )}</figure> <article style="box-shadow: 0px 30px 60px 0px rgba(89, 86, 230, 0.10);" class="container relative z-10 grid grid-cols-2 gap-5 rounded-[32px] bg-white px-[111px] py-[83px]"><div class="space-y-[65px]">${validate_component(SectionHeader, "SectionHeader").$$render($$result, { title, subtitle }, {}, {})} <p class="text-[18px] font-light leading-[160%]">${escape(description)}</p></div> <figure class="">${validate_component(Sanity_image, "SanityImage").$$render(
            $$result,
            {
              class: "h-full w-full object-contain",
              src: image,
              alt: image.alt,
              sizes: "50vw",
              imageUrlBuilder: imageBuilder
            },
            {},
            {}
          )}</figure></article></section>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let banners;
  let $uiStore, $$unsubscribe_uiStore;
  $$unsubscribe_uiStore = subscribe(uiStore, (value) => $uiStore = value);
  let { props } = $$props;
  let { plugins = [] } = $$props;
  let { options = {} } = $$props;
  if ($$props.props === void 0 && $$bindings.props && props !== void 0)
    $$bindings.props(props);
  if ($$props.plugins === void 0 && $$bindings.plugins && plugins !== void 0)
    $$bindings.plugins(plugins);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  ({ banners } = props);
  $$unsubscribe_uiStore();
  return `<section style="${"margin-top: " + escape($uiStore.navbarHeight + 50, true) + "px;"}" class="mb-[160px]"><div class="container overflow-hidden"><div><div class="relative flex space-x-10">${each(banners, ({ image, url }) => {
    return `${((tag) => {
      return tag ? `<${!!url ? "a" : "figure"} class="h-[70vh] flex-[0_0_100%]">${is_void(tag) ? "" : `${validate_component(Sanity_image, "SanityImage").$$render(
        $$result,
        {
          class: "h-full w-full rounded-lg object-cover",
          src: image,
          sizes: "80vw",
          imageUrlBuilder: imageBuilder
        },
        {},
        {}
      )} `}${is_void(tag) ? "" : `</${tag}>`}` : "";
    })(!!url ? "a" : "figure")}`;
  })}</div></div></div></section>`;
});
function getRandomKey() {
  return Math.random().toFixed(5).split(".")[1];
}
function assertSpanKey(span) {
  return {
    _key: span._key || getRandomKey(),
    ...span
  };
}
function assertBlockKey(block) {
  return {
    _key: block._key || getRandomKey(),
    ...block,
    ...block._type === "block" && Array.isArray(block.children) ? {
      children: block.children.map(assertSpanKey)
    } : {}
  };
}
const DefaultMark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let markType;
  let { portableText } = $$props;
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0)
    $$bindings.portableText(portableText);
  ({ markType } = portableText);
  return `${markType === "strong" ? `<strong>${slots.default ? slots.default({}) : ``}</strong>` : `${markType === "em" ? `<em>${slots.default ? slots.default({}) : ``}</em>` : `${markType === "code" ? `<code>${slots.default ? slots.default({}) : ``}</code>` : `${markType === "underline" ? `<span style="text-decoration:underline;">${slots.default ? slots.default({}) : ``}</span>` : `${markType === "strike-through" ? `<del>${slots.default ? slots.default({}) : ``}</del>` : `${slots.default ? slots.default({}) : ``}`}`}`}`}`}`;
});
const DefaultLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value;
  let href;
  let { portableText } = $$props;
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0)
    $$bindings.portableText(portableText);
  ({ value } = portableText);
  href = (value === null || value === void 0 ? void 0 : value.href) || (value === null || value === void 0 ? void 0 : value.url) || (value === null || value === void 0 ? void 0 : value.link) || (value === null || value === void 0 ? void 0 : value.value);
  return `${typeof href === "string" ? `<a${add_attribute("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `${slots.default ? slots.default({}) : ``}`}`;
});
const DefaultBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value;
  let style;
  let { portableText } = $$props;
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0)
    $$bindings.portableText(portableText);
  ({ value } = portableText);
  style = value.style || "normal";
  return `${["h1", "h2", "h3", "h4", "h5", "h6", "blockquote"].includes(style) ? `${((tag) => {
    return tag ? `<${style}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(style)}` : `${style === "normal" ? `<p>${slots.default ? slots.default({}) : ``}</p>` : `${slots.default ? slots.default({}) : ``}`}`}`;
});
const DefaultList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value;
  let listItem;
  let { portableText } = $$props;
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0)
    $$bindings.portableText(portableText);
  ({ value } = portableText);
  ({ listItem } = value);
  return `${listItem === "number" ? `<ol>${slots.default ? slots.default({}) : ``}</ol>` : `<ul>${slots.default ? slots.default({}) : ``}</ul>`}`;
});
const DefaultListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<li>${slots.default ? slots.default({}) : ``}</li>`;
});
const DefaultHardBreak = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<br>`;
});
const UnknownType = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}`;
});
const defaultComponents = {
  marks: {
    "strike-through": DefaultMark,
    code: DefaultMark,
    em: DefaultMark,
    strong: DefaultMark,
    underline: DefaultMark,
    link: DefaultLink
  },
  block: {
    blockquote: DefaultBlock,
    h1: DefaultBlock,
    h2: DefaultBlock,
    h3: DefaultBlock,
    h4: DefaultBlock,
    h5: DefaultBlock,
    h6: DefaultBlock,
    normal: DefaultBlock
  },
  list: {
    bullet: DefaultList,
    number: DefaultList
  },
  listItem: {
    bullet: DefaultListItem,
    number: DefaultListItem
  },
  types: {},
  hardBreak: DefaultHardBreak,
  unknownBlockStyle: DefaultBlock,
  unknownList: DefaultList,
  unknownListItem: DefaultListItem,
  unknownMark: DefaultMark,
  unknownType: UnknownType
};
function mergeComponents(parent, overrides = {}) {
  return {
    ...parent,
    ...overrides,
    block: mergeDeeply(parent, overrides, "block"),
    list: mergeDeeply(parent, overrides, "list"),
    listItem: mergeDeeply(parent, overrides, "listItem"),
    marks: mergeDeeply(parent, overrides, "marks"),
    types: mergeDeeply(parent, overrides, "types")
  };
}
function mergeDeeply(parent, overrides, key) {
  const override = overrides[key];
  const parentVal = parent[key];
  if (typeof override === "function") {
    return override;
  }
  if (override && typeof parentVal === "function") {
    return override;
  }
  if (override) {
    return { ...parentVal, ...override };
  }
  return parentVal;
}
const RenderBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let components;
  let style;
  let blockComponent;
  let blockProps;
  let { global } = $$props;
  let { node } = $$props;
  let { indexInParent } = $$props;
  if ($$props.global === void 0 && $$bindings.global && global !== void 0)
    $$bindings.global(global);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  if ($$props.indexInParent === void 0 && $$bindings.indexInParent && indexInParent !== void 0)
    $$bindings.indexInParent(indexInParent);
  ({ components } = global);
  ({ style = "normal" } = node);
  blockComponent = typeof components.block === "function" ? components.block : components.block[style];
  {
    if (!blockComponent) {
      global.missingComponentHandler(style, "blockStyle");
    }
  }
  blockProps = (() => {
    return { global, indexInParent, value: node };
  })();
  return `${validate_component(blockComponent || components.unknownBlockStyle || missing_component, "svelte:component").$$render($$result, { portableText: blockProps }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const RenderCustomBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let components;
  let _type;
  let customComponent;
  let componentProps;
  let { global } = $$props;
  let { node } = $$props;
  let { parentBlock } = $$props;
  let { indexInParent } = $$props;
  let { isInline = false } = $$props;
  if ($$props.global === void 0 && $$bindings.global && global !== void 0)
    $$bindings.global(global);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  if ($$props.parentBlock === void 0 && $$bindings.parentBlock && parentBlock !== void 0)
    $$bindings.parentBlock(parentBlock);
  if ($$props.indexInParent === void 0 && $$bindings.indexInParent && indexInParent !== void 0)
    $$bindings.indexInParent(indexInParent);
  if ($$props.isInline === void 0 && $$bindings.isInline && isInline !== void 0)
    $$bindings.isInline(isInline);
  ({ components } = global);
  ({ _type } = node);
  customComponent = components.types[_type];
  {
    if (!customComponent) {
      global.missingComponentHandler(_type, "block");
    }
  }
  componentProps = (() => {
    return {
      global,
      value: node,
      indexInParent,
      parentBlock,
      isInline
    };
  })();
  return `${validate_component(customComponent || components.unknownType || missing_component, "svelte:component").$$render($$result, { portableText: componentProps }, {}, {})}`;
});
const RenderList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let components;
  let listItem;
  let handler;
  let listComponent;
  let listProps;
  let { global } = $$props;
  let { indexInParent } = $$props;
  let { node } = $$props;
  if ($$props.global === void 0 && $$bindings.global && global !== void 0)
    $$bindings.global(global);
  if ($$props.indexInParent === void 0 && $$bindings.indexInParent && indexInParent !== void 0)
    $$bindings.indexInParent(indexInParent);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  ({ components } = global);
  ({ listItem } = node);
  handler = typeof components.list === "function" ? components.list : components.list[listItem];
  listComponent = handler;
  {
    if (!listComponent) {
      global.missingComponentHandler(listItem, "listStyle");
    }
  }
  listProps = (() => {
    return { global, value: node, indexInParent };
  })();
  return `${validate_component(listComponent || components.unknownList || missing_component, "svelte:component").$$render($$result, { portableText: listProps }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const RenderListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let components;
  let style;
  let listItemComponent;
  let styleComponent;
  let listItemProps;
  let { global } = $$props;
  let { indexInParent } = $$props;
  let { node } = $$props;
  if ($$props.global === void 0 && $$bindings.global && global !== void 0)
    $$bindings.global(global);
  if ($$props.indexInParent === void 0 && $$bindings.indexInParent && indexInParent !== void 0)
    $$bindings.indexInParent(indexInParent);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  ({ components } = global);
  ({ style = "normal" } = node);
  listItemComponent = typeof components.listItem === "function" ? components.listItem : components.listItem[style];
  {
    if (!listItemComponent) {
      global.missingComponentHandler(style, "listItemStyle");
    }
  }
  styleComponent = style !== "normal" ? components.block[style] : void 0;
  listItemProps = (() => {
    return { global, value: node, indexInParent };
  })();
  return `${validate_component(listItemComponent || components.unknownListItem || missing_component, "svelte:component").$$render($$result, { portableText: listItemProps }, {}, {
    default: () => {
      return `${styleComponent ? `${validate_component(styleComponent || missing_component, "svelte:component").$$render(
        $$result,
        {
          portableText: {
            // Different props for the block that will hold this list
            ...listItemProps,
            value: {
              ...node,
              // BlockComponentProps shouldn't receive a listItem
              listItem: void 0
            }
          }
        },
        {},
        {
          default: () => {
            return `${slots.default ? slots.default({}) : ``}`;
          }
        }
      )}` : `${slots.default ? slots.default({}) : ``}`}`;
    }
  })}`;
});
const RenderSpan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let components;
  let markType;
  let markComponent;
  let markProps;
  let { global } = $$props;
  let { node } = $$props;
  let { parentBlock } = $$props;
  if ($$props.global === void 0 && $$bindings.global && global !== void 0)
    $$bindings.global(global);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  if ($$props.parentBlock === void 0 && $$bindings.parentBlock && parentBlock !== void 0)
    $$bindings.parentBlock(parentBlock);
  ({ components } = global);
  ({ markType } = node);
  markComponent = components.marks[markType];
  {
    if (!markComponent) {
      global.missingComponentHandler(markType, "mark");
    }
  }
  markProps = (() => {
    return {
      global,
      parentBlock,
      markType,
      value: node.markDef,
      markKey: node.markKey,
      plainTextContent: spanToPlainText(node)
    };
  })();
  return `${validate_component(markComponent || components.unknownMark || missing_component, "svelte:component").$$render($$result, { portableText: markProps }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const RenderText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let components;
  let text;
  let { global } = $$props;
  let { node } = $$props;
  if ($$props.global === void 0 && $$bindings.global && global !== void 0)
    $$bindings.global(global);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  ({ components } = global);
  ({ text } = node);
  return `${text === "\n" ? `${typeof components.hardBreak === "function" ? `${validate_component(components.hardBreak || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : `${escape(text)}`}` : `${escape(text)}`}`;
});
const RenderNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let node;
  let indexInParent;
  let parentBlock;
  let isInline;
  let { global } = $$props;
  let { options } = $$props;
  if ($$props.global === void 0 && $$bindings.global && global !== void 0)
    $$bindings.global(global);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  ({ node, indexInParent, parentBlock, isInline } = options);
  return `${isPortableTextToolkitList(node) ? `${validate_component(RenderList, "RenderList").$$render($$result, { node, indexInParent, global }, {}, {
    default: () => {
      return `${each(node.children, (child, childIndex) => {
        return `${validate_component(RenderNode, "svelte:self").$$render(
          $$result,
          {
            options: {
              node: child,
              indexInParent: childIndex,
              // The list's children will be parsed as PortableTextListItem, which will pass the proper parentBlock & isInline
              parentBlock: void 0,
              isInline: void 0
            },
            global
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}` : `${isPortableTextListItemBlock(node) ? `${validate_component(RenderListItem, "RenderListItem").$$render($$result, { node, indexInParent, global }, {}, {
    default: () => {
      return `${each(buildMarksTree(node), (child, childIndex) => {
        return `${validate_component(RenderNode, "svelte:self").$$render(
          $$result,
          {
            options: {
              // Pass the current listItem as a parentBlock
              parentBlock: node,
              node: child,
              isInline: true,
              indexInParent: childIndex
            },
            global
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}` : `${isPortableTextToolkitSpan(node) ? `${validate_component(RenderSpan, "RenderSpan").$$render($$result, { node, parentBlock, global }, {}, {
    default: () => {
      return `${each(node.children, (child, childIndex) => {
        return `${validate_component(RenderNode, "svelte:self").$$render(
          $$result,
          {
            options: {
              parentBlock,
              node: child,
              isInline: true,
              indexInParent: childIndex
            },
            global
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}` : `${isPortableTextBlock(node) ? `${validate_component(RenderBlock, "RenderBlock").$$render($$result, { node, indexInParent, global }, {}, {
    default: () => {
      return `${each(buildMarksTree(node), (child, childIndex) => {
        return `${validate_component(RenderNode, "svelte:self").$$render(
          $$result,
          {
            options: {
              parentBlock: node,
              node: child,
              isInline: true,
              indexInParent: childIndex
            },
            global
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}` : `${isPortableTextToolkitTextNode(node) ? `${validate_component(RenderText, "RenderText").$$render($$result, { node, global }, {}, {})}` : `${node ? `${validate_component(RenderCustomBlock, "RenderCustomBlock").$$render(
    $$result,
    {
      node,
      parentBlock,
      indexInParent,
      isInline,
      global
    },
    {},
    {}
  )}` : ``}`}`}`}`}`}`;
});
const getTemplate = (type, prop) => `Unknown ${type}, specify a component for it in the \`components${prop ? "." : ""}${prop}\` prop`;
const getWarningMessage = (type, nodeType) => {
  switch (nodeType) {
    case "block":
      return getTemplate(`block type "${type}"`, "types");
    case "blockStyle":
      return getTemplate(`block style "${type}"`, "block");
    case "listItemStyle":
      return getTemplate(`list item style "${type}"`, "listItem");
    case "listStyle":
      return getTemplate(`list style "${type}"`, "list");
    case "mark":
      return getTemplate(`mark type "${type}"`, "marks");
    default:
      return getTemplate("type");
  }
};
function printWarning(message) {
  console.warn(message);
}
const PortableText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mergedComponents;
  let keyedBlocks;
  let blocks;
  let missingComponentHandler;
  let { value = [] } = $$props;
  let { components = void 0 } = $$props;
  let { context = {} } = $$props;
  let { onMissingComponent = true } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.context === void 0 && $$bindings.context && context !== void 0)
    $$bindings.context(context);
  if ($$props.onMissingComponent === void 0 && $$bindings.onMissingComponent && onMissingComponent !== void 0)
    $$bindings.onMissingComponent(onMissingComponent);
  mergedComponents = mergeComponents(defaultComponents, components);
  keyedBlocks = (Array.isArray(value) ? value : [value]).map(assertBlockKey);
  blocks = nestLists(keyedBlocks, LIST_NEST_MODE_HTML);
  missingComponentHandler = (type, nodeType) => {
    if (onMissingComponent === false) {
      return;
    }
    const message = getWarningMessage(type, nodeType);
    if (typeof onMissingComponent === "function") {
      onMissingComponent(message, { type, nodeType });
      return;
    }
    printWarning(message);
  };
  return `${each(blocks, (node, index) => {
    return `${validate_component(RenderNode, "RenderNode").$$render(
      $$result,
      {
        global: {
          components: mergedComponents,
          missingComponentHandler,
          context,
          ptBlocks: blocks,
          ptRawValue: value
        },
        options: {
          node,
          isInline: false,
          indexInParent: index
        }
      },
      {},
      {}
    )}`;
  })}`;
});
const GradientPurpleBlue = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<span class="relative bg-gradient-to-b from-[#764af1] to-[#290886] bg-clip-text text-transparent">${slots.default ? slots.default({}) : ``} <img class="absolute -bottom-1 right-0" src="/lines.png" alt=""></span>`;
});
const Tagline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title;
  let decorators;
  let decor1;
  let decor2;
  let { props } = $$props;
  if ($$props.props === void 0 && $$bindings.props && props !== void 0)
    $$bindings.props(props);
  ({ title, decorators } = props);
  [decor1, decor2] = decorators;
  return `<section class="pb-[410px]"><div class="container relative">${validate_component(H1, "H1").$$render($$result, { class: "text-center" }, {}, {
    default: () => {
      return `${validate_component(PortableText, "PortableText").$$render(
        $$result,
        {
          value: title,
          components: {
            marks: { gradientPurpleBlue: GradientPurpleBlue }
          }
        },
        {},
        {}
      )}`;
    }
  })} ${!!decor1 ? `<figure class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2">${validate_component(Sanity_image, "SanityImage").$$render(
    $$result,
    {
      class: "h-full w-full max-w-[337px] animate-floating object-contain",
      sizes: "300px",
      src: decor1,
      imageUrlBuilder: imageBuilder,
      alt: decor1.alt
    },
    {},
    {}
  )}</figure>` : ``} ${!!decor2 ? `<figure class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">${validate_component(Sanity_image, "SanityImage").$$render(
    $$result,
    {
      class: "h-full w-full max-w-[262px] animate-floating-reverse object-contain",
      sizes: "300px",
      src: decor2,
      imageUrlBuilder: imageBuilder,
      alt: decor2.alt
    },
    {},
    {}
  )}</figure>` : ``}</div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sections;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ page: { sections } } = data);
  return `${each(sections, (props) => {
    return `${props._type === "landingPage.hero" ? `${validate_component(Hero, "Hero").$$render($$result, { props }, {}, {})}` : `${props._type === "landingPage.tagline" ? `${validate_component(Tagline, "Tagline").$$render($$result, { props }, {}, {})}` : `${props._type === "landingPage.about" ? `${validate_component(About, "About").$$render($$result, { props }, {}, {})}` : ``}`}`}`;
  })}`;
});
export {
  Page as default
};
