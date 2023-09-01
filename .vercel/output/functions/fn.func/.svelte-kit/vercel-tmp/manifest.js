export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","lines.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.12535c9f.js","app":"_app/immutable/entry/app.a78b5f0d.js","imports":["_app/immutable/entry/start.12535c9f.js","_app/immutable/chunks/scheduler.f49db7c5.js","_app/immutable/chunks/singletons.91bb87ea.js","_app/immutable/chunks/index.4deef939.js","_app/immutable/entry/app.a78b5f0d.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.f49db7c5.js","_app/immutable/chunks/index.09d5c63a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(studio)/studio/[...slug]",
				pattern: /^\/studio(?:\/(.*))?\/?$/,
				params: [{"name":"slug","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
