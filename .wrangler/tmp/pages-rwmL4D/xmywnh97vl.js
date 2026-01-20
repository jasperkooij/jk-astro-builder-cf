// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/_astro/*",
    "/.assetsignore",
    "/favicon.svg",
    "/logo.svg",
    "/robots.txt"
  ]
};

// ../../../.nvm/versions/node/v22.14.0/lib/node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/Users/jasper/dev/convert/jk-astro-builder-cf/.wrangler/tmp/pages-rwmL4D/bundledWorker-0.8690235465497149.mjs";
import { isRoutingRuleMatch } from "/Users/jasper/.nvm/versions/node/v22.14.0/lib/node_modules/wrangler/templates/pages-dev-util.ts";
export * from "/Users/jasper/dev/convert/jk-astro-builder-cf/.wrangler/tmp/pages-rwmL4D/bundledWorker-0.8690235465497149.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=xmywnh97vl.js.map
