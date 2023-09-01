import * as server from '../entries/pages/(app)/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.16caf322.js","_app/immutable/chunks/scheduler.f49db7c5.js","_app/immutable/chunks/index.09d5c63a.js","_app/immutable/chunks/tw-merge.7fafcbd6.js","_app/immutable/chunks/image-url.umd.26eae593.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.4deef939.js"];
export const stylesheets = ["_app/immutable/assets/4.dc55474f.css"];
export const fonts = [];
