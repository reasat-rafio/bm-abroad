import * as server from '../entries/pages/(studio)/studio/_...slug_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(studio)/studio/_...slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(studio)/studio/[...slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.edec3b3d.js","_app/immutable/chunks/5.f54c1d9c.js","_app/immutable/chunks/scheduler.f49db7c5.js","_app/immutable/chunks/index.09d5c63a.js","_app/immutable/chunks/image-url.umd.26eae593.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/5.6ba77234.css"];
export const fonts = [];
