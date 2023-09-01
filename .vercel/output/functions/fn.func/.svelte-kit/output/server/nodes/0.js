

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.33d95983.js","_app/immutable/chunks/scheduler.f49db7c5.js","_app/immutable/chunks/index.09d5c63a.js"];
export const stylesheets = ["_app/immutable/assets/0.25bd78b6.css"];
export const fonts = [];
