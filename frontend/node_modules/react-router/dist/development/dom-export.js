/**
 * react-router v7.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// dom-export.ts
var dom_export_exports = {};
__export(dom_export_exports, {
  HydratedRouter: () => HydratedRouter,
  RouterProvider: () => RouterProvider
});
module.exports = __toCommonJS(dom_export_exports);

// lib/dom-export/dom-router-provider.tsx
var React = __toESM(require("react"));
var ReactDOM = __toESM(require("react-dom"));
var import_react_router = require("react-router");
function RouterProvider(props) {
  return /* @__PURE__ */ React.createElement(import_react_router.RouterProvider, { flushSync: ReactDOM.flushSync, ...props });
}

// lib/dom-export/hydrated-router.tsx
var React2 = __toESM(require("react"));
var import_react_router2 = require("react-router");
var ssrInfo = null;
var router = null;
function initSsrInfo() {
  if (!ssrInfo && window.__reactRouterContext && window.__reactRouterManifest && window.__reactRouterRouteModules) {
    if (window.__reactRouterManifest.sri === true) {
      const importMap = document.querySelector("script[rr-importmap]");
      if (importMap?.textContent) {
        try {
          window.__reactRouterManifest.sri = JSON.parse(
            importMap.textContent
          ).integrity;
        } catch (err) {
          console.error("Failed to parse import map", err);
        }
      }
    }
    ssrInfo = {
      context: window.__reactRouterContext,
      manifest: window.__reactRouterManifest,
      routeModules: window.__reactRouterRouteModules,
      stateDecodingPromise: void 0,
      router: void 0,
      routerInitialized: false
    };
  }
}
function createHydratedRouter({
  unstable_getContext
}) {
  initSsrInfo();
  if (!ssrInfo) {
    throw new Error(
      "You must be using the SSR features of React Router in order to skip passing a `router` prop to `<RouterProvider>`"
    );
  }
  let localSsrInfo = ssrInfo;
  if (!ssrInfo.stateDecodingPromise) {
    let stream = ssrInfo.context.stream;
    (0, import_react_router2.UNSAFE_invariant)(stream, "No stream found for single fetch decoding");
    ssrInfo.context.stream = void 0;
    ssrInfo.stateDecodingPromise = (0, import_react_router2.UNSAFE_decodeViaTurboStream)(stream, window).then((value) => {
      ssrInfo.context.state = value.value;
      localSsrInfo.stateDecodingPromise.value = true;
    }).catch((e) => {
      localSsrInfo.stateDecodingPromise.error = e;
    });
  }
  if (ssrInfo.stateDecodingPromise.error) {
    throw ssrInfo.stateDecodingPromise.error;
  }
  if (!ssrInfo.stateDecodingPromise.value) {
    throw ssrInfo.stateDecodingPromise;
  }
  let routes = (0, import_react_router2.UNSAFE_createClientRoutes)(
    ssrInfo.manifest.routes,
    ssrInfo.routeModules,
    ssrInfo.context.state,
    ssrInfo.context.ssr,
    ssrInfo.context.isSpaMode
  );
  let hydrationData = void 0;
  if (ssrInfo.context.isSpaMode) {
    let { loaderData } = ssrInfo.context.state;
    if (ssrInfo.manifest.routes.root?.hasLoader && loaderData && "root" in loaderData) {
      hydrationData = {
        loaderData: {
          root: loaderData.root
        }
      };
    }
  } else {
    hydrationData = (0, import_react_router2.UNSAFE_getHydrationData)(
      ssrInfo.context.state,
      routes,
      (routeId) => ({
        clientLoader: ssrInfo.routeModules[routeId]?.clientLoader,
        hasLoader: ssrInfo.manifest.routes[routeId]?.hasLoader === true,
        hasHydrateFallback: ssrInfo.routeModules[routeId]?.HydrateFallback != null
      }),
      window.location,
      window.__reactRouterContext?.basename,
      ssrInfo.context.isSpaMode
    );
    if (hydrationData && hydrationData.errors) {
      hydrationData.errors = (0, import_react_router2.UNSAFE_deserializeErrors)(hydrationData.errors);
    }
  }
  let router2 = (0, import_react_router2.UNSAFE_createRouter)({
    routes,
    history: (0, import_react_router2.UNSAFE_createBrowserHistory)(),
    basename: ssrInfo.context.basename,
    unstable_getContext,
    hydrationData,
    hydrationRouteProperties: import_react_router2.UNSAFE_hydrationRouteProperties,
    mapRouteProperties: import_react_router2.UNSAFE_mapRouteProperties,
    future: {
      unstable_middleware: ssrInfo.context.future.unstable_middleware
    },
    dataStrategy: (0, import_react_router2.UNSAFE_getTurboStreamSingleFetchDataStrategy)(
      () => router2,
      ssrInfo.manifest,
      ssrInfo.routeModules,
      ssrInfo.context.ssr,
      ssrInfo.context.basename
    ),
    patchRoutesOnNavigation: (0, import_react_router2.UNSAFE_getPatchRoutesOnNavigationFunction)(
      ssrInfo.manifest,
      ssrInfo.routeModules,
      ssrInfo.context.ssr,
      ssrInfo.context.routeDiscovery,
      ssrInfo.context.isSpaMode,
      ssrInfo.context.basename
    )
  });
  ssrInfo.router = router2;
  if (router2.state.initialized) {
    ssrInfo.routerInitialized = true;
    router2.initialize();
  }
  router2.createRoutesForHMR = /* spacer so ts-ignore does not affect the right hand of the assignment */
  import_react_router2.UNSAFE_createClientRoutesWithHMRRevalidationOptOut;
  window.__reactRouterDataRouter = router2;
  return router2;
}
function HydratedRouter(props) {
  if (!router) {
    router = createHydratedRouter({
      unstable_getContext: props.unstable_getContext
    });
  }
  let [criticalCss, setCriticalCss] = React2.useState(
    process.env.NODE_ENV === "development" ? ssrInfo?.context.criticalCss : void 0
  );
  if (process.env.NODE_ENV === "development") {
    if (ssrInfo) {
      window.__reactRouterClearCriticalCss = () => setCriticalCss(void 0);
    }
  }
  let [location, setLocation] = React2.useState(router.state.location);
  React2.useLayoutEffect(() => {
    if (ssrInfo && ssrInfo.router && !ssrInfo.routerInitialized) {
      ssrInfo.routerInitialized = true;
      ssrInfo.router.initialize();
    }
  }, []);
  React2.useLayoutEffect(() => {
    if (ssrInfo && ssrInfo.router) {
      return ssrInfo.router.subscribe((newState) => {
        if (newState.location !== location) {
          setLocation(newState.location);
        }
      });
    }
  }, [location]);
  (0, import_react_router2.UNSAFE_invariant)(ssrInfo, "ssrInfo unavailable for HydratedRouter");
  (0, import_react_router2.UNSAFE_useFogOFWarDiscovery)(
    router,
    ssrInfo.manifest,
    ssrInfo.routeModules,
    ssrInfo.context.ssr,
    ssrInfo.context.routeDiscovery,
    ssrInfo.context.isSpaMode
  );
  return (
    // This fragment is important to ensure we match the <ServerRouter> JSX
    // structure so that useId values hydrate correctly
    /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(
      import_react_router2.UNSAFE_FrameworkContext.Provider,
      {
        value: {
          manifest: ssrInfo.manifest,
          routeModules: ssrInfo.routeModules,
          future: ssrInfo.context.future,
          criticalCss,
          ssr: ssrInfo.context.ssr,
          isSpaMode: ssrInfo.context.isSpaMode,
          routeDiscovery: ssrInfo.context.routeDiscovery
        }
      },
      /* @__PURE__ */ React2.createElement(import_react_router2.UNSAFE_RemixErrorBoundary, { location }, /* @__PURE__ */ React2.createElement(RouterProvider, { router }))
    ), /* @__PURE__ */ React2.createElement(React2.Fragment, null))
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HydratedRouter,
  RouterProvider
});
