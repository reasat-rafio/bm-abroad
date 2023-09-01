import * as server from '../entries/pages/(app)/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.00fed8cd.js","_app/immutable/chunks/scheduler.f49db7c5.js","_app/immutable/chunks/index.09d5c63a.js","_app/immutable/chunks/tw-merge.7fafcbd6.js","_app/immutable/chunks/image-url.umd.26eae593.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.4deef939.js"];
export const stylesheets = ["_app/immutable/assets/2.a92ca8a4.css"];
export const fonts = ["_app/immutable/assets/poppins-devanagari-300-normal.d531423e.woff2","_app/immutable/assets/poppins-devanagari-300-normal.129068eb.woff","_app/immutable/assets/poppins-latin-ext-300-normal.32282e10.woff2","_app/immutable/assets/poppins-latin-ext-300-normal.34679875.woff","_app/immutable/assets/poppins-latin-300-normal.78bc3aa7.woff2","_app/immutable/assets/poppins-latin-300-normal.78a4e0ac.woff","_app/immutable/assets/poppins-devanagari-400-normal.478b3ab7.woff2","_app/immutable/assets/poppins-devanagari-400-normal.aa135e25.woff","_app/immutable/assets/poppins-latin-ext-400-normal.cb8bdeab.woff2","_app/immutable/assets/poppins-latin-ext-400-normal.8090b590.woff","_app/immutable/assets/poppins-latin-400-normal.7d93459d.woff2","_app/immutable/assets/poppins-latin-400-normal.2db0a254.woff","_app/immutable/assets/poppins-devanagari-500-normal.721c714f.woff2","_app/immutable/assets/poppins-devanagari-500-normal.bcd6da7c.woff","_app/immutable/assets/poppins-latin-ext-500-normal.5f9d6298.woff2","_app/immutable/assets/poppins-latin-ext-500-normal.bc24119c.woff","_app/immutable/assets/poppins-latin-500-normal.cd36de20.woff2","_app/immutable/assets/poppins-latin-500-normal.6f35fc59.woff","_app/immutable/assets/oswald-cyrillic-ext-600-normal.a02d712a.woff2","_app/immutable/assets/oswald-cyrillic-ext-600-normal.2fe651b8.woff","_app/immutable/assets/oswald-cyrillic-600-normal.3faed3c3.woff2","_app/immutable/assets/oswald-cyrillic-600-normal.09024f98.woff","_app/immutable/assets/oswald-vietnamese-600-normal.fcc55da8.woff2","_app/immutable/assets/oswald-vietnamese-600-normal.76a41b03.woff","_app/immutable/assets/oswald-latin-ext-600-normal.b05b1e5b.woff2","_app/immutable/assets/oswald-latin-ext-600-normal.13a8b6a6.woff","_app/immutable/assets/oswald-latin-600-normal.0e88658b.woff2","_app/immutable/assets/oswald-latin-600-normal.b3271111.woff"];
