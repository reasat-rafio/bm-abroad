import { c as create_ssr_component, i as compute_rest_props, j as spread, k as escape_attribute_value, l as escape_object, b as add_attribute } from "./ssr.js";
const defaultSanityImageDefaults = {
  autoWidths: {
    maxWidth: 3840,
    step: 320
  },
  autoFormat: true,
  lqip: false
};
function isSanityDimensionedImage(image) {
  return typeof image == "object" && "asset" in image && "metadata" in image.asset && "dimensions" in image.asset.metadata;
}
function isSanityImageWithLqip(image) {
  return typeof image == "object" && "asset" in image && "metadata" in image.asset && "lqip" in image.asset.metadata;
}
function generateWidths(autoWidths, image) {
  const maxWidth = isSanityDimensionedImage(image) ? image.asset.metadata.dimensions.width : autoWidths.maxWidth;
  const divisions = Math.ceil(maxWidth / autoWidths.step);
  return Array.from(
    { length: divisions },
    (_, i) => Math.min(Math.floor(autoWidths.step * (i + 1)), maxWidth)
  );
}
const Sanity_image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["imageUrlBuilder", "src", "widths", "lqip", "options", "autoFormat"]);
  const defaults = globalThis.sanityImageDefaults ??= defaultSanityImageDefaults;
  let { imageUrlBuilder = defaults.imageUrlBuilder } = $$props;
  let { src } = $$props;
  let { widths = defaults.autoWidths } = $$props;
  let { lqip = defaults.lqip } = $$props;
  let { options = {} } = $$props;
  let { autoFormat = defaults.autoFormat } = $$props;
  function imgProps() {
    const builder = imageUrlBuilder?.image(src).withOptions({ auto: autoFormat ? "format" : void 0 });
    if (!builder) {
      throw new Error("No image url builder specified, and no default set!");
    }
    const determinedWidths = Array.isArray(widths) ? widths : generateWidths(widths ?? defaults.autoWidths, src);
    const determinedLqip = lqip ?? defaults.lqip;
    const [width, height] = isSanityDimensionedImage(src) ? [src.asset.metadata.dimensions.width, src.asset.metadata.dimensions.height] : [void 0, void 0];
    const srcset = determinedWidths.map((w) => `${builder.width(w).withOptions(options ?? {}).url()} ${w}w`).join(", ");
    const lqipStyle = `background: ${isSanityImageWithLqip(src) ? `url(${src.asset.metadata.lqip}) no-repeat` : void 0}; background-size: cover; `;
    let style = (lqip ? lqipStyle : "") + ($$restProps.style ?? "");
    return {
      builder,
      determinedLqip,
      width,
      height,
      srcset,
      style
    };
  }
  let img;
  let props = imgProps();
  if ($$props.imageUrlBuilder === void 0 && $$bindings.imageUrlBuilder && imageUrlBuilder !== void 0)
    $$bindings.imageUrlBuilder(imageUrlBuilder);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.widths === void 0 && $$bindings.widths && widths !== void 0)
    $$bindings.widths(widths);
  if ($$props.lqip === void 0 && $$bindings.lqip && lqip !== void 0)
    $$bindings.lqip(lqip);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.autoFormat === void 0 && $$bindings.autoFormat && autoFormat !== void 0)
    $$bindings.autoFormat(autoFormat);
  return `  <img${spread(
    [
      {
        src: escape_attribute_value(props.builder.url())
      },
      {
        srcset: escape_attribute_value(props.srcset)
      },
      {
        width: escape_attribute_value(props.width)
      },
      {
        height: escape_attribute_value(props.height)
      },
      {
        style: escape_attribute_value(props.style)
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", img, 0)}>`;
});
export {
  Sanity_image as S
};
