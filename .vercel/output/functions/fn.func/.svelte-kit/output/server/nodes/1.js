

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7e906f77.js","_app/immutable/chunks/scheduler.f49db7c5.js","_app/immutable/chunks/index.09d5c63a.js","_app/immutable/chunks/stores.72b0631b.js","_app/immutable/chunks/singletons.91bb87ea.js","_app/immutable/chunks/index.4deef939.js"];
export const stylesheets = [];
export const fonts = [];
