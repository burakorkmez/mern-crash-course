import { R as RouteManifest, S as ServerRouteModule, M as MiddlewareEnabled, u as unstable_RouterContextProvider, A as AppLoadContext, L as LoaderFunctionArgs, a as ActionFunctionArgs, b as RouteModules, c as StaticHandlerContext, H as HydrationState, D as DataRouteObject, C as ClientLoaderFunction, d as Router$1, e as DataStrategyFunction, T as To, N as NavigateOptions, B as BlockerFunction, f as Blocker, g as SerializeFrom, h as RelativeRoutingType, i as Location, P as ParamParseKey, j as Path, k as PathPattern, l as PathMatch, U as UIMatch, m as Navigation, n as Action, o as Params, p as RouteObject, I as IndexRouteObject, q as LazyRouteFunction, r as NonIndexRouteObject, s as RouterInit, F as FutureConfig$1, t as InitialEntry, v as PatchRoutesOnNavigationFunction, w as Navigator, x as RouteMatch, y as HTMLFormMethod, z as FormEncType, E as PageLinkDescriptor, G as History, J as GetScrollRestorationKeyFunction, K as Fetcher, O as CreateStaticHandlerOptions$1, Q as StaticHandler, V as LoaderFunction, W as ActionFunction, X as MetaFunction, Y as LinksFunction, Z as unstable_InitialContext, _ as Pages, $ as Equal, a0 as RouterState } from './register-COAKzST_.js';
export { aA as ClientActionFunction, aB as ClientActionFunctionArgs, aC as ClientLoaderFunctionArgs, ay as DataRouteMatch, a7 as DataStrategyFunctionArgs, a8 as DataStrategyMatch, a9 as DataStrategyResult, ab as ErrorResponse, ac as FormMethod, aJ as Future, a1 as GetScrollPositionFunction, aD as HeadersArgs, aE as HeadersFunction, aH as HtmlLinkDescriptor, ao as IDLE_BLOCKER, an as IDLE_FETCHER, am as IDLE_NAVIGATION, aI as LinkDescriptor, aF as MetaArgs, aG as MetaDescriptor, a2 as NavigationStates, az as PatchRoutesOnNavigationFunctionArgs, ae as PathParam, af as RedirectFunction, aL as Register, a6 as RevalidationState, a5 as RouterFetchOptions, a4 as RouterNavigateOptions, a3 as RouterSubscriber, ah as ShouldRevalidateFunction, ai as ShouldRevalidateFunctionArgs, aQ as UNSAFE_DataRouterContext, aR as UNSAFE_DataRouterStateContext, aa as UNSAFE_DataWithResponseInit, aP as UNSAFE_ErrorResponseImpl, aS as UNSAFE_FetchersContext, aT as UNSAFE_LocationContext, aU as UNSAFE_NavigationContext, aV as UNSAFE_RouteContext, aW as UNSAFE_ViewTransitionContext, aM as UNSAFE_createBrowserHistory, aO as UNSAFE_createRouter, aN as UNSAFE_invariant, ak as createPath, ap as data, aq as generatePath, ar as isRouteErrorResponse, as as matchPath, at as matchRoutes, al as parsePath, au as redirect, av as redirectDocument, aw as replace, ax as resolvePath, ad as unstable_MiddlewareFunction, ag as unstable_RouterContext, aK as unstable_SerializesTo, aj as unstable_createContext } from './register-COAKzST_.js';
import * as React from 'react';
import { ReactElement } from 'react';
import { ParseOptions, SerializeOptions } from 'cookie';
export { ParseOptions as CookieParseOptions, SerializeOptions as CookieSerializeOptions } from 'cookie';

type ServerRouteManifest = RouteManifest<Omit<ServerRoute, "children">>;
interface ServerRoute extends Route$1 {
    children: ServerRoute[];
    module: ServerRouteModule;
}

type OptionalCriticalCss = CriticalCss | undefined;
/**
 * The output of the compiler for the server build.
 */
interface ServerBuild {
    entry: {
        module: ServerEntryModule;
    };
    routes: ServerRouteManifest;
    assets: AssetsManifest;
    basename?: string;
    publicPath: string;
    assetsBuildDirectory: string;
    future: FutureConfig;
    ssr: boolean;
    unstable_getCriticalCss?: (args: {
        pathname: string;
    }) => OptionalCriticalCss | Promise<OptionalCriticalCss>;
    /**
     * @deprecated This is now done via a custom header during prerendering
     */
    isSpaMode: boolean;
    prerender: string[];
    routeDiscovery: {
        mode: "lazy" | "initial";
        manifestPath: string;
    };
}
interface HandleDocumentRequestFunction {
    (request: Request, responseStatusCode: number, responseHeaders: Headers, context: EntryContext, loadContext: MiddlewareEnabled extends true ? unstable_RouterContextProvider : AppLoadContext): Promise<Response> | Response;
}
interface HandleDataRequestFunction {
    (response: Response, args: LoaderFunctionArgs | ActionFunctionArgs): Promise<Response> | Response;
}
interface HandleErrorFunction {
    (error: unknown, args: LoaderFunctionArgs | ActionFunctionArgs): void;
}
/**
 * A module that serves as the entry point for a Remix app during server
 * rendering.
 */
interface ServerEntryModule {
    default: HandleDocumentRequestFunction;
    handleDataRequest?: HandleDataRequestFunction;
    handleError?: HandleErrorFunction;
    streamTimeout?: number;
}

type SerializedError = {
    message: string;
    stack?: string;
};
interface FrameworkContextObject {
    manifest: AssetsManifest;
    routeModules: RouteModules;
    criticalCss?: CriticalCss;
    serverHandoffString?: string;
    future: FutureConfig;
    ssr: boolean;
    isSpaMode: boolean;
    routeDiscovery: ServerBuild["routeDiscovery"];
    serializeError?(error: Error): SerializedError;
    renderMeta?: {
        didRenderScripts?: boolean;
        streamCache?: Record<number, Promise<void> & {
            result?: {
                done: boolean;
                value: string;
            };
            error?: unknown;
        }>;
    };
}
interface EntryContext extends FrameworkContextObject {
    staticHandlerContext: StaticHandlerContext;
    serverHandoffStream?: ReadableStream<Uint8Array>;
}
interface FutureConfig {
    unstable_subResourceIntegrity: boolean;
    unstable_middleware: boolean;
}
type CriticalCss = string | {
    rel: "stylesheet";
    href: string;
};
interface AssetsManifest {
    entry: {
        imports: string[];
        module: string;
    };
    routes: RouteManifest<EntryRoute>;
    url: string;
    version: string;
    hmr?: {
        timestamp?: number;
        runtime: string;
    };
    sri?: Record<string, string> | true;
}

interface Route$1 {
    index?: boolean;
    caseSensitive?: boolean;
    id: string;
    parentId?: string;
    path?: string;
}
interface EntryRoute extends Route$1 {
    hasAction: boolean;
    hasLoader: boolean;
    hasClientAction: boolean;
    hasClientLoader: boolean;
    hasClientMiddleware: boolean;
    hasErrorBoundary: boolean;
    imports?: string[];
    css?: string[];
    module: string;
    clientActionModule: string | undefined;
    clientLoaderModule: string | undefined;
    clientMiddlewareModule: string | undefined;
    hydrateFallbackModule: string | undefined;
    parentId?: string;
}
declare function createClientRoutesWithHMRRevalidationOptOut(needsRevalidation: Set<string>, manifest: RouteManifest<EntryRoute>, routeModulesCache: RouteModules, initialState: HydrationState, ssr: boolean, isSpaMode: boolean): DataRouteObject[];
declare function createClientRoutes(manifest: RouteManifest<EntryRoute>, routeModulesCache: RouteModules, initialState: HydrationState | null, ssr: boolean, isSpaMode: boolean, parentId?: string, routesByParentId?: Record<string, Omit<EntryRoute, "children">[]>, needsRevalidation?: Set<string>): DataRouteObject[];
declare function shouldHydrateRouteLoader(routeId: string, clientLoader: ClientLoaderFunction | undefined, hasLoader: boolean, isSpaMode: boolean): boolean;

declare const SingleFetchRedirectSymbol: unique symbol;
declare function getTurboStreamSingleFetchDataStrategy(getRouter: () => Router$1, manifest: AssetsManifest, routeModules: RouteModules, ssr: boolean, basename: string | undefined): DataStrategyFunction;
declare function decodeViaTurboStream(body: ReadableStream<Uint8Array>, global: Window | typeof globalThis): Promise<{
    done: Promise<undefined>;
    value: unknown;
}>;

/**
 * The mode to use when running the server.
 */
declare enum ServerMode {
    Development = "development",
    Production = "production",
    Test = "test"
}

/**
  Resolves a URL against the current location.

  ```tsx
  import { useHref } from "react-router"

  function SomeComponent() {
    let href = useHref("some/where");
    // "/resolved/some/where"
  }
  ```

  @category Hooks
 */
declare function useHref(to: To, { relative }?: {
    relative?: RelativeRoutingType;
}): string;
/**
 * Returns true if this component is a descendant of a Router, useful to ensure
 * a component is used within a Router.
 *
 * @category Hooks
 */
declare function useInRouterContext(): boolean;
/**
  Returns the current {@link Location}. This can be useful if you'd like to perform some side effect whenever it changes.

  ```tsx
  import * as React from 'react'
  import { useLocation } from 'react-router'

  function SomeComponent() {
    let location = useLocation()

    React.useEffect(() => {
      // Google Analytics
      ga('send', 'pageview')
    }, [location]);

    return (
      // ...
    );
  }
  ```

  @category Hooks
 */
declare function useLocation(): Location;
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @category Hooks
 */
declare function useNavigationType(): Action;
/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * `<NavLink>`.
 *
 * @category Hooks
 */
declare function useMatch<ParamKey extends ParamParseKey<Path>, Path extends string>(pattern: PathPattern<Path> | Path): PathMatch<ParamKey> | null;
/**
 * The interface for the navigate() function returned from useNavigate().
 */
interface NavigateFunction {
    (to: To, options?: NavigateOptions): void | Promise<void>;
    (delta: number): void | Promise<void>;
}
/**
  Returns a function that lets you navigate programmatically in the browser in response to user interactions or effects.

  ```tsx
  import { useNavigate } from "react-router";

  function SomeComponent() {
    let navigate = useNavigate();
    return (
      <button
        onClick={() => {
          navigate(-1);
        }}
      />
    );
  }
  ```

  It's often better to use {@link redirect} in {@link ActionFunction | actions} and {@link LoaderFunction | loaders} than this hook.

  @category Hooks
 */
declare function useNavigate(): NavigateFunction;
/**
 * Returns the parent route {@link OutletProps.context | `<Outlet context>`}.
 *
 * @category Hooks
 */
declare function useOutletContext<Context = unknown>(): Context;
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by `<Outlet>` to render child routes.
 *
 * @category Hooks
 */
declare function useOutlet(context?: unknown): React.ReactElement | null;
/**
  Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the routes. Child routes inherit all params from their parent routes.

  ```tsx
  import { useParams } from "react-router"

  function SomeComponent() {
    let params = useParams()
    params.postId
  }
  ```

  Assuming a route pattern like `/posts/:postId` is matched by `/posts/123` then `params.postId` will be `"123"`.

  @category Hooks
 */
declare function useParams<ParamsOrKey extends string | Record<string, string | undefined> = string>(): Readonly<[
    ParamsOrKey
] extends [string] ? Params<ParamsOrKey> : Partial<ParamsOrKey>>;
/**
  Resolves the pathname of the given `to` value against the current location. Similar to {@link useHref}, but returns a {@link Path} instead of a string.

  ```tsx
  import { useResolvedPath } from "react-router"

  function SomeComponent() {
    // if the user is at /dashboard/profile
    let path = useResolvedPath("../accounts")
    path.pathname // "/dashboard/accounts"
    path.search // ""
    path.hash // ""
  }
  ```

  @category Hooks
 */
declare function useResolvedPath(to: To, { relative }?: {
    relative?: RelativeRoutingType;
}): Path;
/**
  Hook version of {@link Routes | `<Routes>`} that uses objects instead of components. These objects have the same properties as the component props.

  The return value of `useRoutes` is either a valid React element you can use to render the route tree, or `null` if nothing matched.

  ```tsx
  import * as React from "react";
  import { useRoutes } from "react-router";

  function App() {
    let element = useRoutes([
      {
        path: "/",
        element: <Dashboard />,
        children: [
          {
            path: "messages",
            element: <DashboardMessages />,
          },
          { path: "tasks", element: <DashboardTasks /> },
        ],
      },
      { path: "team", element: <AboutPage /> },
    ]);

    return element;
  }
  ```

 @category Hooks
 */
declare function useRoutes(routes: RouteObject[], locationArg?: Partial<Location> | string): React.ReactElement | null;
/**
  Returns the current navigation, defaulting to an "idle" navigation when no navigation is in progress. You can use this to render pending UI (like a global spinner) or read FormData from a form navigation.

  ```tsx
  import { useNavigation } from "react-router"

  function SomeComponent() {
    let navigation = useNavigation();
    navigation.state
    navigation.formData
    // etc.
  }
  ```

  @category Hooks
 */
declare function useNavigation(): Navigation;
/**
  Revalidate the data on the page for reasons outside of normal data mutations like window focus or polling on an interval.

  ```tsx
  import { useRevalidator } from "react-router";

  function WindowFocusRevalidator() {
    const revalidator = useRevalidator();

    useFakeWindowFocus(() => {
      revalidator.revalidate();
    });

    return (
      <div hidden={revalidator.state === "idle"}>
        Revalidating...
      </div>
    );
  }
  ```

  Note that page data is already revalidated automatically after actions. If you find yourself using this for normal CRUD operations on your data in response to user interactions, you're probably not taking advantage of the other APIs like {@link useFetcher}, {@link Form}, {@link useSubmit} that do this automatically.

  @category Hooks
 */
declare function useRevalidator(): {
    revalidate: () => Promise<void>;
    state: Router$1["state"]["revalidation"];
};
/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 *
 * @category Hooks
 */
declare function useMatches(): UIMatch[];
/**
  Returns the data from the closest route {@link LoaderFunction | loader} or {@link ClientLoaderFunction | client loader}.

  ```tsx
  import { useLoaderData } from "react-router"

  export async function loader() {
    return await fakeDb.invoices.findAll();
  }

  export default function Invoices() {
    let invoices = useLoaderData<typeof loader>();
    // ...
  }
  ```

  @category Hooks
 */
declare function useLoaderData<T = any>(): SerializeFrom<T>;
/**
  Returns the loader data for a given route by route ID.

  ```tsx
  import { useRouteLoaderData } from "react-router";

  function SomeComponent() {
    const { user } = useRouteLoaderData("root");
  }
  ```

  Route IDs are created automatically. They are simply the path of the route file relative to the app folder without the extension.

  | Route Filename             | Route ID             |
  | -------------------------- | -------------------- |
  | `app/root.tsx`             | `"root"`             |
  | `app/routes/teams.tsx`     | `"routes/teams"`     |
  | `app/whatever/teams.$id.tsx` | `"whatever/teams.$id"` |

  If you created an ID manually, you can use that instead:

  ```tsx
  route("/", "containers/app.tsx", { id: "app" }})
  ```

  @category Hooks
 */
declare function useRouteLoaderData<T = any>(routeId: string): SerializeFrom<T> | undefined;
/**
  Returns the action data from the most recent POST navigation form submission or `undefined` if there hasn't been one.

  ```tsx
  import { Form, useActionData } from "react-router"

  export async function action({ request }) {
    const body = await request.formData()
    const name = body.get("visitorsName")
    return { message: `Hello, ${name}` }
  }

  export default function Invoices() {
    const data = useActionData()
    return (
      <Form method="post">
        <input type="text" name="visitorsName" />
        {data ? data.message : "Waiting..."}
      </Form>
    )
  }
  ```

  @category Hooks
 */
declare function useActionData<T = any>(): SerializeFrom<T> | undefined;
/**
  Accesses the error thrown during an {@link ActionFunction | action}, {@link LoaderFunction | loader}, or component render to be used in a route module Error Boundary.

  ```tsx
  export function ErrorBoundary() {
    const error = useRouteError();
    return <div>{error.message}</div>;
  }
  ```

  @category Hooks
 */
declare function useRouteError(): unknown;
/**
  Returns the resolved promise value from the closest {@link Await | `<Await>`}.

  ```tsx
  function SomeDescendant() {
    const value = useAsyncValue();
    // ...
  }

  // somewhere in your app
  <Await resolve={somePromise}>
    <SomeDescendant />
  </Await>
  ```

  @category Hooks
 */
declare function useAsyncValue(): unknown;
/**
  Returns the rejection value from the closest {@link Await | `<Await>`}.

  ```tsx
  import { Await, useAsyncError } from "react-router"

  function ErrorElement() {
    const error = useAsyncError();
    return (
      <p>Uh Oh, something went wrong! {error.message}</p>
    );
  }

  // somewhere in your app
  <Await
    resolve={promiseThatRejects}
    errorElement={<ErrorElement />}
  />
  ```

  @category Hooks
 */
declare function useAsyncError(): unknown;
/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 *
 * @category Hooks
 */
declare function useBlocker(shouldBlock: boolean | BlockerFunction): Blocker;

/**
 * @private
 */
declare function mapRouteProperties(route: RouteObject): Partial<RouteObject> & {
    hasErrorBoundary: boolean;
};
declare const hydrationRouteProperties: (keyof RouteObject)[];
interface MemoryRouterOpts {
    /**
     * Basename path for the application.
     */
    basename?: string;
    /**
     * Function to provide the initial context values for all client side navigations/fetches
     */
    unstable_getContext?: RouterInit["unstable_getContext"];
    /**
     * Future flags to enable for the router.
     */
    future?: Partial<FutureConfig$1>;
    /**
     * Hydration data to initialize the router with if you have already performed
     * data loading on the server.
     */
    hydrationData?: HydrationState;
    /**
     * Initial entires in the in-memory history stack
     */
    initialEntries?: InitialEntry[];
    /**
     * Index of `initialEntries` the application should initialize to
     */
    initialIndex?: number;
    /**
     * Override the default data strategy of loading in parallel.
     * Only intended for advanced usage.
     */
    dataStrategy?: DataStrategyFunction;
    /**
     * Lazily define portions of the route tree on navigations.
     */
    patchRoutesOnNavigation?: PatchRoutesOnNavigationFunction;
}
/**
 * Create a new data router that manages the application path using an in-memory
 * history stack.  Useful for non-browser environments without a DOM API.
 *
 * @category Data Routers
 */
declare function createMemoryRouter(
/**
 * Application routes
 */
routes: RouteObject[], 
/**
 * Router options
 */
opts?: MemoryRouterOpts): Router$1;
interface RouterProviderProps {
    router: Router$1;
    flushSync?: (fn: () => unknown) => undefined;
}
/**
 * Given a Remix Router instance, render the appropriate UI
 */
declare function RouterProvider({ router, flushSync: reactDomFlushSyncImpl, }: RouterProviderProps): React.ReactElement;
/**
 * @category Types
 */
interface MemoryRouterProps {
    basename?: string;
    children?: React.ReactNode;
    initialEntries?: InitialEntry[];
    initialIndex?: number;
}
/**
 * A `<Router>` that stores all entries in memory.
 *
 * @category Component Routers
 */
declare function MemoryRouter({ basename, children, initialEntries, initialIndex, }: MemoryRouterProps): React.ReactElement;
/**
 * @category Types
 */
interface NavigateProps {
    to: To;
    replace?: boolean;
    state?: any;
    relative?: RelativeRoutingType;
}
/**
 * A component-based version of {@link useNavigate} to use in a [`React.Component
 * Class`](https://reactjs.org/docs/react-component.html) where hooks are not
 * able to be used.
 *
 * It's recommended to avoid using this component in favor of {@link useNavigate}
 *
 * @category Components
 */
declare function Navigate({ to, replace, state, relative, }: NavigateProps): null;
/**
 * @category Types
 */
interface OutletProps {
    /**
      Provides a context value to the element tree below the outlet. Use when the parent route needs to provide values to child routes.
  
      ```tsx
      <Outlet context={myContextValue} />
      ```
  
      Access the context with {@link useOutletContext}.
     */
    context?: unknown;
}
/**
  Renders the matching child route of a parent route or nothing if no child route matches.

  ```tsx
  import { Outlet } from "react-router"

  export default function SomeParent() {
    return (
      <div>
        <h1>Parent Content</h1>
        <Outlet />
      </div>
    );
  }
  ```

  @category Components
 */
declare function Outlet(props: OutletProps): React.ReactElement | null;
/**
 * @category Types
 */
interface PathRouteProps {
    caseSensitive?: NonIndexRouteObject["caseSensitive"];
    path?: NonIndexRouteObject["path"];
    id?: NonIndexRouteObject["id"];
    lazy?: LazyRouteFunction<NonIndexRouteObject>;
    loader?: NonIndexRouteObject["loader"];
    action?: NonIndexRouteObject["action"];
    hasErrorBoundary?: NonIndexRouteObject["hasErrorBoundary"];
    shouldRevalidate?: NonIndexRouteObject["shouldRevalidate"];
    handle?: NonIndexRouteObject["handle"];
    index?: false;
    children?: React.ReactNode;
    element?: React.ReactNode | null;
    hydrateFallbackElement?: React.ReactNode | null;
    errorElement?: React.ReactNode | null;
    Component?: React.ComponentType | null;
    HydrateFallback?: React.ComponentType | null;
    ErrorBoundary?: React.ComponentType | null;
}
/**
 * @category Types
 */
interface LayoutRouteProps extends PathRouteProps {
}
/**
 * @category Types
 */
interface IndexRouteProps {
    caseSensitive?: IndexRouteObject["caseSensitive"];
    path?: IndexRouteObject["path"];
    id?: IndexRouteObject["id"];
    lazy?: LazyRouteFunction<IndexRouteObject>;
    loader?: IndexRouteObject["loader"];
    action?: IndexRouteObject["action"];
    hasErrorBoundary?: IndexRouteObject["hasErrorBoundary"];
    shouldRevalidate?: IndexRouteObject["shouldRevalidate"];
    handle?: IndexRouteObject["handle"];
    index: true;
    children?: undefined;
    element?: React.ReactNode | null;
    hydrateFallbackElement?: React.ReactNode | null;
    errorElement?: React.ReactNode | null;
    Component?: React.ComponentType | null;
    HydrateFallback?: React.ComponentType | null;
    ErrorBoundary?: React.ComponentType | null;
}
type RouteProps = PathRouteProps | LayoutRouteProps | IndexRouteProps;
/**
 * Configures an element to render when a pattern matches the current location.
 * It must be rendered within a {@link Routes} element. Note that these routes
 * do not participate in data loading, actions, code splitting, or any other
 * route module features.
 *
 * @category Components
 */
declare function Route(_props: RouteProps): React.ReactElement | null;
/**
 * @category Types
 */
interface RouterProps {
    basename?: string;
    children?: React.ReactNode;
    location: Partial<Location> | string;
    navigationType?: Action;
    navigator: Navigator;
    static?: boolean;
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
 * router that is more specific to your environment such as a `<BrowserRouter>`
 * in web browsers or a `<StaticRouter>` for server rendering.
 *
 * @category Components
 */
declare function Router({ basename: basenameProp, children, location: locationProp, navigationType, navigator, static: staticProp, }: RouterProps): React.ReactElement | null;
/**
 * @category Types
 */
interface RoutesProps {
    /**
     * Nested {@link Route} elements
     */
    children?: React.ReactNode;
    /**
     * The location to match against. Defaults to the current location.
     */
    location?: Partial<Location> | string;
}
/**
 Renders a branch of {@link Route | `<Routes>`} that best matches the current
 location. Note that these routes do not participate in data loading, actions,
 code splitting, or any other route module features.

 ```tsx
 import { Routes, Route } from "react-router"

<Routes>
  <Route index element={<StepOne />} />
  <Route path="step-2" element={<StepTwo />} />
  <Route path="step-3" element={<StepThree />}>
</Routes>
 ```

 @category Components
 */
declare function Routes({ children, location, }: RoutesProps): React.ReactElement | null;
interface AwaitResolveRenderFunction<Resolve = any> {
    (data: Awaited<Resolve>): React.ReactNode;
}
/**
 * @category Types
 */
interface AwaitProps<Resolve> {
    /**
    When using a function, the resolved value is provided as the parameter.
  
    ```tsx [2]
    <Await resolve={reviewsPromise}>
      {(resolvedReviews) => <Reviews items={resolvedReviews} />}
    </Await>
    ```
  
    When using React elements, {@link useAsyncValue} will provide the
    resolved value:
  
    ```tsx [2]
    <Await resolve={reviewsPromise}>
      <Reviews />
    </Await>
  
    function Reviews() {
      const resolvedReviews = useAsyncValue()
      return <div>...</div>
    }
    ```
    */
    children: React.ReactNode | AwaitResolveRenderFunction<Resolve>;
    /**
    The error element renders instead of the children when the promise rejects.
  
    ```tsx
    <Await
      errorElement={<div>Oops</div>}
      resolve={reviewsPromise}
    >
      <Reviews />
    </Await>
    ```
  
    To provide a more contextual error, you can use the {@link useAsyncError} in a
    child component
  
    ```tsx
    <Await
      errorElement={<ReviewsError />}
      resolve={reviewsPromise}
    >
      <Reviews />
    </Await>
  
    function ReviewsError() {
      const error = useAsyncError()
      return <div>Error loading reviews: {error.message}</div>
    }
    ```
  
    If you do not provide an errorElement, the rejected value will bubble up to
    the nearest route-level {@link NonIndexRouteObject#ErrorBoundary | ErrorBoundary} and be accessible
    via {@link useRouteError} hook.
    */
    errorElement?: React.ReactNode;
    /**
    Takes a promise returned from a {@link LoaderFunction | loader} value to be resolved and rendered.
  
    ```jsx
    import { useLoaderData, Await } from "react-router"
  
    export async function loader() {
      let reviews = getReviews() // not awaited
      let book = await getBook()
      return {
        book,
        reviews, // this is a promise
      }
    }
  
    export default function Book() {
      const {
        book,
        reviews, // this is the same promise
      } = useLoaderData()
  
      return (
        <div>
          <h1>{book.title}</h1>
          <p>{book.description}</p>
          <React.Suspense fallback={<ReviewsSkeleton />}>
            <Await
              // and is the promise we pass to Await
              resolve={reviews}
            >
              <Reviews />
            </Await>
          </React.Suspense>
        </div>
      );
    }
    ```
     */
    resolve: Resolve;
}
/**
Used to render promise values with automatic error handling.

```tsx
import { Await, useLoaderData } from "react-router";

export function loader() {
  // not awaited
  const reviews = getReviews()
  // awaited (blocks the transition)
  const book = await fetch("/api/book").then((res) => res.json())
  return { book, reviews }
}

function Book() {
  const { book, reviews } = useLoaderData();
  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <React.Suspense fallback={<ReviewsSkeleton />}>
        <Await
          resolve={reviews}
          errorElement={
            <div>Could not load reviews 😬</div>
          }
          children={(resolvedReviews) => (
            <Reviews items={resolvedReviews} />
          )}
        />
      </React.Suspense>
    </div>
  );
}
```

**Note:** `<Await>` expects to be rendered inside of a `<React.Suspense>`

@category Components

*/
declare function Await<Resolve>({ children, errorElement, resolve, }: AwaitProps<Resolve>): React.JSX.Element;
/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @category Utils
 */
declare function createRoutesFromChildren(children: React.ReactNode, parentPath?: number[]): RouteObject[];
/**
 * Create route objects from JSX elements instead of arrays of objects
 */
declare let createRoutesFromElements: typeof createRoutesFromChildren;
/**
 * Renders the result of `matchRoutes()` into a React element.
 *
 * @category Utils
 */
declare function renderMatches(matches: RouteMatch[] | null): React.ReactElement | null;
type RouteComponentType = React.ComponentType<{
    params: ReturnType<typeof useParams>;
    loaderData: ReturnType<typeof useLoaderData>;
    actionData: ReturnType<typeof useActionData>;
    matches: ReturnType<typeof useMatches>;
}>;
declare function withComponentProps(Component: RouteComponentType): () => React.ReactElement<{
    params: Readonly<Partial<string | Record<string, string | undefined>>>;
    loaderData: unknown;
    actionData: unknown;
    matches: UIMatch<unknown, unknown>[];
}, string | React.JSXElementConstructor<any>>;
type HydrateFallbackType = React.ComponentType<{
    params: ReturnType<typeof useParams>;
    loaderData: ReturnType<typeof useLoaderData>;
    actionData: ReturnType<typeof useActionData>;
}>;
declare function withHydrateFallbackProps(HydrateFallback: HydrateFallbackType): () => React.ReactElement<{
    params: Readonly<Partial<string | Record<string, string | undefined>>>;
    loaderData: unknown;
    actionData: unknown;
}, string | React.JSXElementConstructor<any>>;
type ErrorBoundaryType = React.ComponentType<{
    params: ReturnType<typeof useParams>;
    loaderData: ReturnType<typeof useLoaderData>;
    actionData: ReturnType<typeof useActionData>;
    error: ReturnType<typeof useRouteError>;
}>;
declare function withErrorBoundaryProps(ErrorBoundary: ErrorBoundaryType): () => React.ReactElement<{
    params: Readonly<Partial<string | Record<string, string | undefined>>>;
    loaderData: unknown;
    actionData: unknown;
    error: unknown;
}, string | React.JSXElementConstructor<any>>;

type ParamKeyValuePair = [string, string];
type URLSearchParamsInit = string | ParamKeyValuePair[] | Record<string, string | string[]> | URLSearchParams;
/**
  Creates a URLSearchParams object using the given initializer.

  This is identical to `new URLSearchParams(init)` except it also
  supports arrays as values in the object form of the initializer
  instead of just strings. This is convenient when you need multiple
  values for a given key, but don't want to use an array initializer.

  For example, instead of:

  ```tsx
  let searchParams = new URLSearchParams([
    ['sort', 'name'],
    ['sort', 'price']
  ]);
  ```
  you can do:

  ```
  let searchParams = createSearchParams({
    sort: ['name', 'price']
  });
  ```

  @category Utils
 */
declare function createSearchParams(init?: URLSearchParamsInit): URLSearchParams;
type JsonObject = {
    [Key in string]: JsonValue;
} & {
    [Key in string]?: JsonValue | undefined;
};
type JsonArray = JsonValue[] | readonly JsonValue[];
type JsonPrimitive = string | number | boolean | null;
type JsonValue = JsonPrimitive | JsonObject | JsonArray;
type SubmitTarget = HTMLFormElement | HTMLButtonElement | HTMLInputElement | FormData | URLSearchParams | JsonValue | null;
/**
 * Submit options shared by both navigations and fetchers
 */
interface SharedSubmitOptions {
    /**
     * The HTTP method used to submit the form. Overrides `<form method>`.
     * Defaults to "GET".
     */
    method?: HTMLFormMethod;
    /**
     * The action URL path used to submit the form. Overrides `<form action>`.
     * Defaults to the path of the current route.
     */
    action?: string;
    /**
     * The encoding used to submit the form. Overrides `<form encType>`.
     * Defaults to "application/x-www-form-urlencoded".
     */
    encType?: FormEncType;
    /**
     * Determines whether the form action is relative to the route hierarchy or
     * the pathname.  Use this if you want to opt out of navigating the route
     * hierarchy and want to instead route based on /-delimited URL segments
     */
    relative?: RelativeRoutingType;
    /**
     * In browser-based environments, prevent resetting scroll after this
     * navigation when using the <ScrollRestoration> component
     */
    preventScrollReset?: boolean;
    /**
     * Enable flushSync for this submission's state updates
     */
    flushSync?: boolean;
}
/**
 * Submit options available to fetchers
 */
interface FetcherSubmitOptions extends SharedSubmitOptions {
}
/**
 * Submit options available to navigations
 */
interface SubmitOptions extends FetcherSubmitOptions {
    /**
     * Set `true` to replace the current entry in the browser's history stack
     * instead of creating a new one (i.e. stay on "the same page"). Defaults
     * to `false`.
     */
    replace?: boolean;
    /**
     * State object to add to the history stack entry for this navigation
     */
    state?: any;
    /**
     * Indicate a specific fetcherKey to use when using navigate=false
     */
    fetcherKey?: string;
    /**
     * navigate=false will use a fetcher instead of a navigation
     */
    navigate?: boolean;
    /**
     * Enable view transitions on this submission navigation
     */
    viewTransition?: boolean;
}

declare const FrameworkContext: React.Context<FrameworkContextObject | undefined>;
/**
 * Defines the discovery behavior of the link:
 *
 * - "render" - default, discover the route when the link renders
 * - "none" - don't eagerly discover, only discover if the link is clicked
 */
type DiscoverBehavior = "render" | "none";
/**
 * Defines the prefetching behavior of the link:
 *
 * - "none": Never fetched
 * - "intent": Fetched when the user focuses or hovers the link
 * - "render": Fetched when the link is rendered
 * - "viewport": Fetched when the link is in the viewport
 */
type PrefetchBehavior = "intent" | "render" | "none" | "viewport";
/**
  Renders all of the `<link>` tags created by route module {@link LinksFunction} export. You should render it inside the `<head>` of your document.

  ```tsx
  import { Links } from "react-router";

  export default function Root() {
    return (
      <html>
        <head>
          <Links />
        </head>
        <body></body>
      </html>
    );
  }
  ```

  @category Components
 */
declare function Links(): React.JSX.Element;
/**
  Renders `<link rel=prefetch|modulepreload>` tags for modules and data of another page to enable an instant navigation to that page. {@link LinkProps.prefetch | `<Link prefetch>`} uses this internally, but you can render it to prefetch a page for any other reason.

  ```tsx
  import { PrefetchPageLinks } from "react-router"

  <PrefetchPageLinks page="/absolute/path" />
  ```

  For example, you may render one of this as the user types into a search field to prefetch search results before they click through to their selection.

  @category Components
 */
declare function PrefetchPageLinks({ page, ...dataLinkProps }: PageLinkDescriptor): React.JSX.Element | null;
/**
  Renders all the `<meta>` tags created by route module {@link MetaFunction} exports. You should render it inside the `<head>` of your HTML.

  ```tsx
  import { Meta } from "react-router";

  export default function Root() {
    return (
      <html>
        <head>
          <Meta />
        </head>
      </html>
    );
  }
  ```

  @category Components
 */
declare function Meta(): React.JSX.Element;
/**
  A couple common attributes:

  - `<Scripts crossOrigin>` for hosting your static assets on a different server than your app.
  - `<Scripts nonce>` to support a [content security policy for scripts](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) with [nonce-sources](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) for your `<script>` tags.

  You cannot pass through attributes such as `async`, `defer`, `src`, `type`, `noModule` because they are managed by React Router internally.

  @category Types
 */
type ScriptsProps = Omit<React.HTMLProps<HTMLScriptElement>, "children" | "async" | "defer" | "src" | "type" | "noModule" | "dangerouslySetInnerHTML" | "suppressHydrationWarning">;
/**
  Renders the client runtime of your app. It should be rendered inside the `<body>` of the document.

  ```tsx
  import { Scripts } from "react-router";

  export default function Root() {
    return (
      <html>
        <head />
        <body>
          <Scripts />
        </body>
      </html>
    );
  }
  ```

  If server rendering, you can omit `<Scripts/>` and the app will work as a traditional web app without JavaScript, relying solely on HTML and browser behaviors.

  @category Components
 */
declare function Scripts(props: ScriptsProps): React.JSX.Element | null;

declare global {
    const REACT_ROUTER_VERSION: string;
}
/**
 * @category Routers
 */
interface DOMRouterOpts {
    /**
     * Basename path for the application.
     */
    basename?: string;
    /**
     * Function to provide the initial context values for all client side navigations/fetches
     */
    unstable_getContext?: RouterInit["unstable_getContext"];
    /**
     * Future flags to enable for the router.
     */
    future?: Partial<FutureConfig$1>;
    /**
     * Hydration data to initialize the router with if you have already performed
     * data loading on the server.
     */
    hydrationData?: HydrationState;
    /**
     * Override the default data strategy of loading in parallel.
     * Only intended for advanced usage.
     */
    dataStrategy?: DataStrategyFunction;
    /**
     * Lazily define portions of the route tree on navigations.
     */
    patchRoutesOnNavigation?: PatchRoutesOnNavigationFunction;
    /**
     * Window object override - defaults to the global `window` instance.
     */
    window?: Window;
}
/**
 * Create a new data router that manages the application path via `history.pushState`
 * and `history.replaceState`.
 *
 * @category Data Routers
 */
declare function createBrowserRouter(
/**
 * Application routes
 */
routes: RouteObject[], 
/**
 * Router options
 */
opts?: DOMRouterOpts): Router$1;
/**
 * Create a new data router that manages the application path via the URL hash
 *
 * @category Data Routers
 */
declare function createHashRouter(routes: RouteObject[], opts?: DOMRouterOpts): Router$1;
/**
 * @category Types
 */
interface BrowserRouterProps {
    basename?: string;
    children?: React.ReactNode;
    window?: Window;
}
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 *
 * @category Component Routers
 */
declare function BrowserRouter({ basename, children, window, }: BrowserRouterProps): React.JSX.Element;
/**
 * @category Types
 */
interface HashRouterProps {
    basename?: string;
    children?: React.ReactNode;
    window?: Window;
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 *
 * @category Component Routers
 */
declare function HashRouter({ basename, children, window }: HashRouterProps): React.JSX.Element;
/**
 * @category Types
 */
interface HistoryRouterProps {
    basename?: string;
    children?: React.ReactNode;
    history: History;
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 *
 * @name unstable_HistoryRouter
 * @category Component Routers
 */
declare function HistoryRouter({ basename, children, history, }: HistoryRouterProps): React.JSX.Element;
declare namespace HistoryRouter {
    var displayName: string;
}
/**
 * @category Types
 */
interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
    /**
      Defines the link discovery behavior
  
      ```tsx
      <Link /> // default ("render")
      <Link discover="render" />
      <Link discover="none" />
      ```
  
      - **render** - default, discover the route when the link renders
      - **none** - don't eagerly discover, only discover if the link is clicked
    */
    discover?: DiscoverBehavior;
    /**
      Defines the data and module prefetching behavior for the link.
  
      ```tsx
      <Link /> // default
      <Link prefetch="none" />
      <Link prefetch="intent" />
      <Link prefetch="render" />
      <Link prefetch="viewport" />
      ```
  
      - **none** - default, no prefetching
      - **intent** - prefetches when the user hovers or focuses the link
      - **render** - prefetches when the link renders
      - **viewport** - prefetches when the link is in the viewport, very useful for mobile
  
      Prefetching is done with HTML `<link rel="prefetch">` tags. They are inserted after the link.
  
      ```tsx
      <a href="..." />
      <a href="..." />
      <link rel="prefetch" /> // might conditionally render
      ```
  
      Because of this, if you are using `nav :last-child` you will need to use `nav :last-of-type` so the styles don't conditionally fall off your last link (and any other similar selectors).
     */
    prefetch?: PrefetchBehavior;
    /**
      Will use document navigation instead of client side routing when the link is clicked: the browser will handle the transition normally (as if it were an `<a href>`).
  
      ```tsx
      <Link to="/logout" reloadDocument />
      ```
     */
    reloadDocument?: boolean;
    /**
      Replaces the current entry in the history stack instead of pushing a new one onto it.
  
      ```tsx
      <Link replace />
      ```
  
      ```
      # with a history stack like this
      A -> B
  
      # normal link click pushes a new entry
      A -> B -> C
  
      # but with `replace`, B is replaced by C
      A -> C
      ```
     */
    replace?: boolean;
    /**
      Adds persistent client side routing state to the next location.
  
      ```tsx
      <Link to="/somewhere/else" state={{ some: "value" }} />
      ```
  
      The location state is accessed from the `location`.
  
      ```tsx
      function SomeComp() {
        const location = useLocation()
        location.state; // { some: "value" }
      }
      ```
  
      This state is inaccessible on the server as it is implemented on top of [`history.state`](https://developer.mozilla.org/en-US/docs/Web/API/History/state)
     */
    state?: any;
    /**
      Prevents the scroll position from being reset to the top of the window when the link is clicked and the app is using {@link ScrollRestoration}. This only prevents new locations reseting scroll to the top, scroll position will be restored for back/forward button navigation.
  
      ```tsx
      <Link to="?tab=one" preventScrollReset />
      ```
     */
    preventScrollReset?: boolean;
    /**
      Defines the relative path behavior for the link.
  
      ```tsx
      <Link to=".." /> // default: "route"
      <Link relative="route" />
      <Link relative="path" />
      ```
  
      Consider a route hierarchy where a parent route pattern is "blog" and a child route pattern is "blog/:slug/edit".
  
      - **route** - default, resolves the link relative to the route pattern. In the example above a relative link of `".."` will remove both `:slug/edit` segments back to "/blog".
      - **path** - relative to the path so `..` will only remove one URL segment up to "/blog/:slug"
     */
    relative?: RelativeRoutingType;
    /**
      Can be a string or a partial {@link Path}:
  
      ```tsx
      <Link to="/some/path" />
  
      <Link
        to={{
          pathname: "/some/path",
          search: "?query=string",
          hash: "#hash",
        }}
      />
      ```
     */
    to: To;
    /**
      Enables a [View Transition](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) for this navigation.
  
      ```jsx
      <Link to={to} viewTransition>
        Click me
      </Link>
      ```
  
      To apply specific styles for the transition, see {@link useViewTransitionState}
     */
    viewTransition?: boolean;
}
/**
  A progressively enhanced `<a href>` wrapper to enable navigation with client-side routing.

  ```tsx
  import { Link } from "react-router";

  <Link to="/dashboard">Dashboard</Link>;

  <Link
    to={{
      pathname: "/some/path",
      search: "?query=string",
      hash: "#hash",
    }}
  />
  ```

  @category Components
 */
declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
/**
  The object passed to {@link NavLink} `children`, `className`, and `style` prop callbacks to render and style the link based on its state.

  ```
  // className
  <NavLink
    to="/messages"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }
  >
    Messages
  </NavLink>

  // style
  <NavLink
    to="/messages"
    style={({ isActive, isPending }) => {
      return {
        fontWeight: isActive ? "bold" : "",
        color: isPending ? "red" : "black",
      }
    )}
  />

  // children
  <NavLink to="/tasks">
    {({ isActive, isPending }) => (
      <span className={isActive ? "active" : ""}>Tasks</span>
    )}
  </NavLink>
  ```

 */
type NavLinkRenderProps = {
    /**
     * Indicates if the link's URL matches the current location.
     */
    isActive: boolean;
    /**
     * Indicates if the pending location matches the link's URL.
     */
    isPending: boolean;
    /**
     * Indicates if a view transition to the link's URL is in progress. See {@link useViewTransitionState}
     */
    isTransitioning: boolean;
};
/**
 * @category Types
 */
interface NavLinkProps extends Omit<LinkProps, "className" | "style" | "children"> {
    /**
      Can be regular React children or a function that receives an object with the active and pending states of the link.
  
      ```tsx
      <NavLink to="/tasks">
        {({ isActive }) => (
          <span className={isActive ? "active" : ""}>Tasks</span>
        )}
      </NavLink>
      ```
     */
    children?: React.ReactNode | ((props: NavLinkRenderProps) => React.ReactNode);
    /**
      Changes the matching logic to make it case-sensitive:
  
      | Link                                         | URL           | isActive |
      | -------------------------------------------- | ------------- | -------- |
      | `<NavLink to="/SpOnGe-bOB" />`               | `/sponge-bob` | true     |
      | `<NavLink to="/SpOnGe-bOB" caseSensitive />` | `/sponge-bob` | false    |
     */
    caseSensitive?: boolean;
    /**
      Classes are automatically applied to NavLink that correspond to {@link NavLinkRenderProps}.
  
      ```css
      a.active { color: red; }
      a.pending { color: blue; }
      a.transitioning {
        view-transition-name: my-transition;
      }
      ```
     */
    className?: string | ((props: NavLinkRenderProps) => string | undefined);
    /**
      Changes the matching logic for the `active` and `pending` states to only match to the "end" of the {@link NavLinkProps.to}. If the URL is longer, it will no longer be considered active.
  
      | Link                          | URL          | isActive |
      | ----------------------------- | ------------ | -------- |
      | `<NavLink to="/tasks" />`     | `/tasks`     | true     |
      | `<NavLink to="/tasks" />`     | `/tasks/123` | true     |
      | `<NavLink to="/tasks" end />` | `/tasks`     | true     |
      | `<NavLink to="/tasks" end />` | `/tasks/123` | false    |
  
      `<NavLink to="/">` is an exceptional case because _every_ URL matches `/`. To avoid this matching every single route by default, it effectively ignores the `end` prop and only matches when you're at the root route.
     */
    end?: boolean;
    style?: React.CSSProperties | ((props: NavLinkRenderProps) => React.CSSProperties | undefined);
}
/**
  Wraps {@link Link | `<Link>`} with additional props for styling active and pending states.

  - Automatically applies classes to the link based on its active and pending states, see {@link NavLinkProps.className}.
  - Automatically applies `aria-current="page"` to the link when the link is active. See [`aria-current`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current) on MDN.

  ```tsx
  import { NavLink } from "react-router"
  <NavLink to="/message" />
  ```

  States are available through the className, style, and children render props. See {@link NavLinkRenderProps}.

  ```tsx
  <NavLink
    to="/messages"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }
  >
    Messages
  </NavLink>
  ```

  @category Components
 */
declare const NavLink: React.ForwardRefExoticComponent<NavLinkProps & React.RefAttributes<HTMLAnchorElement>>;
/**
 * Form props shared by navigations and fetchers
 */
interface SharedFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    /**
     * The HTTP verb to use when the form is submitted. Supports "get", "post",
     * "put", "delete", and "patch".
     *
     * Native `<form>` only supports `get` and `post`, avoid the other verbs if
     * you'd like to support progressive enhancement
     */
    method?: HTMLFormMethod;
    /**
     * The encoding type to use for the form submission.
     */
    encType?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
    /**
     * The URL to submit the form data to.  If `undefined`, this defaults to the closest route in context.
     */
    action?: string;
    /**
     * Determines whether the form action is relative to the route hierarchy or
     * the pathname.  Use this if you want to opt out of navigating the route
     * hierarchy and want to instead route based on /-delimited URL segments
     */
    relative?: RelativeRoutingType;
    /**
     * Prevent the scroll position from resetting to the top of the viewport on
     * completion of the navigation when using the <ScrollRestoration> component
     */
    preventScrollReset?: boolean;
    /**
     * A function to call when the form is submitted. If you call
     * `event.preventDefault()` then this form will not do anything.
     */
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
}
/**
 * Form props available to fetchers
 * @category Types
 */
interface FetcherFormProps extends SharedFormProps {
}
/**
 * Form props available to navigations
 * @category Types
 */
interface FormProps extends SharedFormProps {
    discover?: DiscoverBehavior;
    /**
     * Indicates a specific fetcherKey to use when using `navigate={false}` so you
     * can pick up the fetcher's state in a different component in a {@link
     * useFetcher}.
     */
    fetcherKey?: string;
    /**
     * Skips the navigation and uses a {@link useFetcher | fetcher} internally
     * when `false`. This is essentially a shorthand for `useFetcher()` +
     * `<fetcher.Form>` where you don't care about the resulting data in this
     * component.
     */
    navigate?: boolean;
    /**
     * Forces a full document navigation instead of client side routing + data
     * fetch.
     */
    reloadDocument?: boolean;
    /**
     * Replaces the current entry in the browser history stack when the form
     * navigates. Use this if you don't want the user to be able to click "back"
     * to the page with the form on it.
     */
    replace?: boolean;
    /**
     * State object to add to the history stack entry for this navigation
     */
    state?: any;
    /**
     * Enables a [View
     * Transition](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)
     * for this navigation. To apply specific styles during the transition see
     * {@link useViewTransitionState}.
     */
    viewTransition?: boolean;
}
/**

A progressively enhanced HTML [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) that submits data to actions via `fetch`, activating pending states in `useNavigation` which enables advanced user interfaces beyond a basic HTML form. After a form's action completes, all data on the page is automatically revalidated to keep the UI in sync with the data.

Because it uses the HTML form API, server rendered pages are interactive at a basic level before JavaScript loads. Instead of React Router managing the submission, the browser manages the submission as well as the pending states (like the spinning favicon). After JavaScript loads, React Router takes over enabling web application user experiences.

Form is most useful for submissions that should also change the URL or otherwise add an entry to the browser history stack. For forms that shouldn't manipulate the browser history stack, use [`<fetcher.Form>`][fetcher_form].

```tsx
import { Form } from "react-router";

function NewEvent() {
  return (
    <Form action="/events" method="post">
      <input name="title" type="text" />
      <input name="description" type="text" />
    </Form>
  )
}
```

@category Components
*/
declare const Form: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<HTMLFormElement>>;
type ScrollRestorationProps = ScriptsProps & {
    /**
      Defines the key used to restore scroll positions.
  
      ```tsx
      <ScrollRestoration
        getKey={(location, matches) => {
          // default behavior
          return location.key
        }}
      />
      ```
     */
    getKey?: GetScrollRestorationKeyFunction;
    storageKey?: string;
};
/**
  Emulates the browser's scroll restoration on location changes. Apps should only render one of these, right before the {@link Scripts} component.

  ```tsx
  import { ScrollRestoration } from "react-router";

  export default function Root() {
    return (
      <html>
        <body>
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    );
  }
  ```

  This component renders an inline `<script>` to prevent scroll flashing. The `nonce` prop will be passed down to the script tag to allow CSP nonce usage.

  ```tsx
  <ScrollRestoration nonce={cspNonce} />
  ```

  @category Components
 */
declare function ScrollRestoration({ getKey, storageKey, ...props }: ScrollRestorationProps): React.JSX.Element | null;
declare namespace ScrollRestoration {
    var displayName: string;
}
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 *
 * @category Hooks
 */
declare function useLinkClickHandler<E extends Element = HTMLAnchorElement>(to: To, { target, replace: replaceProp, state, preventScrollReset, relative, viewTransition, }?: {
    target?: React.HTMLAttributeAnchorTarget;
    replace?: boolean;
    state?: any;
    preventScrollReset?: boolean;
    relative?: RelativeRoutingType;
    viewTransition?: boolean;
}): (event: React.MouseEvent<E, MouseEvent>) => void;
/**
  Returns a tuple of the current URL's {@link URLSearchParams} and a function to update them. Setting the search params causes a navigation.

  ```tsx
  import { useSearchParams } from "react-router";

  export function SomeComponent() {
    const [searchParams, setSearchParams] = useSearchParams();
    // ...
  }
  ```

 @category Hooks
 */
declare function useSearchParams(defaultInit?: URLSearchParamsInit): [URLSearchParams, SetURLSearchParams];
/**
  Sets new search params and causes a navigation when called.

  ```tsx
  <button
    onClick={() => {
      const params = new URLSearchParams();
      params.set("someKey", "someValue");
      setSearchParams(params, {
        preventScrollReset: true,
      });
    }}
  />
  ```

  It also supports a function for setting new search params.

  ```tsx
  <button
    onClick={() => {
      setSearchParams((prev) => {
        prev.set("someKey", "someValue");
        return prev;
      });
    }}
  />
  ```
 */
type SetURLSearchParams = (nextInit?: URLSearchParamsInit | ((prev: URLSearchParams) => URLSearchParamsInit), navigateOpts?: NavigateOptions) => void;
/**
 * Submits a HTML `<form>` to the server without reloading the page.
 */
interface SubmitFunction {
    (
    /**
      Can be multiple types of elements and objects

      **`HTMLFormElement`**

      ```tsx
      <Form
        onSubmit={(event) => {
          submit(event.currentTarget);
        }}
      />
      ```

      **`FormData`**

      ```tsx
      const formData = new FormData();
      formData.append("myKey", "myValue");
      submit(formData, { method: "post" });
      ```

      **Plain object that will be serialized as `FormData`**

      ```tsx
      submit({ myKey: "myValue" }, { method: "post" });
      ```

      **Plain object that will be serialized as JSON**

      ```tsx
      submit(
        { myKey: "myValue" },
        { method: "post", encType: "application/json" }
      );
      ```
     */
    target: SubmitTarget, 
    /**
     * Options that override the `<form>`'s own attributes. Required when
     * submitting arbitrary data without a backing `<form>`.
     */
    options?: SubmitOptions): Promise<void>;
}
/**
 * Submits a fetcher `<form>` to the server without reloading the page.
 */
interface FetcherSubmitFunction {
    (
    /**
      Can be multiple types of elements and objects

      **`HTMLFormElement`**

      ```tsx
      <fetcher.Form
        onSubmit={(event) => {
          fetcher.submit(event.currentTarget);
        }}
      />
      ```

      **`FormData`**

      ```tsx
      const formData = new FormData();
      formData.append("myKey", "myValue");
      fetcher.submit(formData, { method: "post" });
      ```

      **Plain object that will be serialized as `FormData`**

      ```tsx
      fetcher.submit({ myKey: "myValue" }, { method: "post" });
      ```

      **Plain object that will be serialized as JSON**

      ```tsx
      fetcher.submit(
        { myKey: "myValue" },
        { method: "post", encType: "application/json" }
      );
      ```

     */
    target: SubmitTarget, options?: FetcherSubmitOptions): Promise<void>;
}
/**
  The imperative version of {@link Form | `<Form>`} that lets you submit a form from code instead of a user interaction.

  ```tsx
  import { useSubmit } from "react-router";

  function SomeComponent() {
    const submit = useSubmit();
    return (
      <Form
        onChange={(event) => {
          submit(event.currentTarget);
        }}
      />
    );
  }
  ```

  @category Hooks
 */
declare function useSubmit(): SubmitFunction;
/**
  Resolves the URL to the closest route in the component hierarchy instead of the current URL of the app.

  This is used internally by {@link Form} resolve the action to the closest route, but can be used generically as well.

  ```tsx
  import { useFormAction } from "react-router";

  function SomeComponent() {
    // closest route URL
    let action = useFormAction();

    // closest route URL + "destroy"
    let destroyAction = useFormAction("destroy");
  }
  ```

  @category Hooks
 */
declare function useFormAction(
/**
 * The action to append to the closest route URL.
 */
action?: string, { relative }?: {
    relative?: RelativeRoutingType;
}): string;
/**
The return value of `useFetcher` that keeps track of the state of a fetcher.

```tsx
let fetcher = useFetcher();
```
 */
type FetcherWithComponents<TData> = Fetcher<TData> & {
    /**
      Just like {@link Form} except it doesn't cause a navigation.
  
      ```tsx
      function SomeComponent() {
        const fetcher = useFetcher()
        return (
          <fetcher.Form method="post" action="/some/route">
            <input type="text" />
          </fetcher.Form>
        )
      }
      ```
     */
    Form: React.ForwardRefExoticComponent<FetcherFormProps & React.RefAttributes<HTMLFormElement>>;
    /**
      Submits form data to a route. While multiple nested routes can match a URL, only the leaf route will be called.
  
      The `formData` can be multiple types:
  
      - [`FormData`][form_data] - A `FormData` instance.
      - [`HTMLFormElement`][html_form_element] - A [`<form>`][form_element] DOM element.
      - `Object` - An object of key/value pairs that will be converted to a `FormData` instance by default. You can pass a more complex object and serialize it as JSON by specifying `encType: "application/json"`. See [`useSubmit`][use-submit] for more details.
  
      If the method is `GET`, then the route [`loader`][loader] is being called and with the `formData` serialized to the url as [`URLSearchParams`][url_search_params]. If `DELETE`, `PATCH`, `POST`, or `PUT`, then the route [`action`][action] is being called with `formData` as the body.
  
      ```tsx
      // Submit a FormData instance (GET request)
      const formData = new FormData();
      fetcher.submit(formData);
  
      // Submit the HTML form element
      fetcher.submit(event.currentTarget.form, {
        method: "POST",
      });
  
      // Submit key/value JSON as a FormData instance
      fetcher.submit(
        { serialized: "values" },
        { method: "POST" }
      );
  
      // Submit raw JSON
      fetcher.submit(
        {
          deeply: {
            nested: {
              json: "values",
            },
          },
        },
        {
          method: "POST",
          encType: "application/json",
        }
      );
      ```
     */
    submit: FetcherSubmitFunction;
    /**
      Loads data from a route. Useful for loading data imperatively inside of user events outside of a normal button or form, like a combobox or search input.
  
      ```tsx
      let fetcher = useFetcher()
  
      <input onChange={e => {
        fetcher.load(`/search?q=${e.target.value}`)
      }} />
      ```
     */
    load: (href: string, opts?: {
        /**
         * Wraps the initial state update for this `fetcher.load` in a
         * `ReactDOM.flushSync` call instead of the default `React.startTransition`.
         * This allows you to perform synchronous DOM actions immediately after the
         * update is flushed to the DOM.
         */
        flushSync?: boolean;
    }) => Promise<void>;
};
/**
  Useful for creating complex, dynamic user interfaces that require multiple, concurrent data interactions without causing a navigation.

  Fetchers track their own, independent state and can be used to load data, submit forms, and generally interact with loaders and actions.

  ```tsx
  import { useFetcher } from "react-router"

  function SomeComponent() {
    let fetcher = useFetcher()

    // states are available on the fetcher
    fetcher.state // "idle" | "loading" | "submitting"
    fetcher.data // the data returned from the action or loader

    // render a form
    <fetcher.Form method="post" />

    // load data
    fetcher.load("/some/route")

    // submit data
    fetcher.submit(someFormRef, { method: "post" })
    fetcher.submit(someData, {
      method: "post",
      encType: "application/json"
    })
  }
  ```

  @category Hooks
 */
declare function useFetcher<T = any>({ key, }?: {
    /**
      By default, `useFetcher` generate a unique fetcher scoped to that component. If you want to identify a fetcher with your own key such that you can access it from elsewhere in your app, you can do that with the `key` option:
  
      ```tsx
      function SomeComp() {
        let fetcher = useFetcher({ key: "my-key" })
        // ...
      }
  
      // Somewhere else
      function AnotherComp() {
        // this will be the same fetcher, sharing the state across the app
        let fetcher = useFetcher({ key: "my-key" });
        // ...
      }
      ```
     */
    key?: string;
}): FetcherWithComponents<SerializeFrom<T>>;
/**
  Returns an array of all in-flight fetchers. This is useful for components throughout the app that didn't create the fetchers but want to use their submissions to participate in optimistic UI.

  ```tsx
  import { useFetchers } from "react-router";

  function SomeComponent() {
    const fetchers = useFetchers();
    fetchers[0].formData; // FormData
    fetchers[0].state; // etc.
    // ...
  }
  ```

  @category Hooks
 */
declare function useFetchers(): (Fetcher & {
    key: string;
})[];
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */
declare function useScrollRestoration({ getKey, storageKey, }?: {
    getKey?: GetScrollRestorationKeyFunction;
    storageKey?: string;
}): void;
/**
 * Setup a callback to be fired on the window's `beforeunload` event.
 *
 * @category Hooks
 */
declare function useBeforeUnload(callback: (event: BeforeUnloadEvent) => any, options?: {
    capture?: boolean;
}): void;
/**
  Wrapper around useBlocker to show a window.confirm prompt to users instead of building a custom UI with {@link useBlocker}.

  The `unstable_` flag will not be removed because this technique has a lot of rough edges and behaves very differently (and incorrectly sometimes) across browsers if users click addition back/forward navigations while the confirmation is open.  Use at your own risk.

  ```tsx
  function ImportantForm() {
    let [value, setValue] = React.useState("");

    // Block navigating elsewhere when data has been entered into the input
    unstable_usePrompt({
      message: "Are you sure?",
      when: ({ currentLocation, nextLocation }) =>
        value !== "" &&
        currentLocation.pathname !== nextLocation.pathname,
    });

    return (
      <Form method="post">
        <label>
          Enter some important data:
          <input
            name="data"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <button type="submit">Save</button>
      </Form>
    );
  }
  ```

  @category Hooks
  @name unstable_usePrompt
 */
declare function usePrompt({ when, message, }: {
    when: boolean | BlockerFunction;
    message: string;
}): void;
/**
  This hook returns `true` when there is an active [View Transition](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) to the specified location. This can be used to apply finer-grained styles to elements to further customize the view transition. This requires that view transitions have been enabled for the given navigation via {@link LinkProps.viewTransition} (or the `Form`, `submit`, or `navigate` call)

  @category Hooks
  @name useViewTransitionState
 */
declare function useViewTransitionState(to: To, opts?: {
    relative?: RelativeRoutingType;
}): boolean;

interface StaticRouterProps {
    basename?: string;
    children?: React.ReactNode;
    location: Partial<Location> | string;
}
/**
 * A `<Router>` that may not navigate to any other location. This is useful
 * on the server where there is no stateful UI.
 *
 * @category Component Routers
 */
declare function StaticRouter({ basename, children, location: locationProp, }: StaticRouterProps): React.JSX.Element;
interface StaticRouterProviderProps {
    context: StaticHandlerContext;
    router: Router$1;
    hydrate?: boolean;
    nonce?: string;
}
/**
 * A Data Router that may not navigate to any other location. This is useful
 * on the server where there is no stateful UI.
 *
 * @category Component Routers
 */
declare function StaticRouterProvider({ context, router, hydrate, nonce, }: StaticRouterProviderProps): React.JSX.Element;
type CreateStaticHandlerOptions = Omit<CreateStaticHandlerOptions$1, "mapRouteProperties">;
/**
 * @category Utils
 */
declare function createStaticHandler(routes: RouteObject[], opts?: CreateStaticHandlerOptions): StaticHandler;
/**
 * @category Data Routers
 */
declare function createStaticRouter(routes: RouteObject[], context: StaticHandlerContext, opts?: {
    future?: Partial<FutureConfig$1>;
}): Router$1;

interface ServerRouterProps {
    context: EntryContext;
    url: string | URL;
    nonce?: string;
}
/**
 * The entry point for a Remix app when it is rendered on the server (in
 * `app/entry.server.js`). This component is used to generate the HTML in the
 * response from the server.
 *
 * @category Components
 */
declare function ServerRouter({ context, url, nonce, }: ServerRouterProps): ReactElement;

interface StubRouteExtensions {
    Component?: RouteComponentType;
    HydrateFallback?: HydrateFallbackType;
    ErrorBoundary?: ErrorBoundaryType;
    loader?: LoaderFunction;
    action?: ActionFunction;
    children?: StubRouteObject[];
    meta?: MetaFunction;
    links?: LinksFunction;
}
interface StubIndexRouteObject extends Omit<IndexRouteObject, "Component" | "HydrateFallback" | "ErrorBoundary" | "loader" | "action" | "element" | "errorElement" | "children">, StubRouteExtensions {
}
interface StubNonIndexRouteObject extends Omit<NonIndexRouteObject, "Component" | "HydrateFallback" | "ErrorBoundary" | "loader" | "action" | "element" | "errorElement" | "children">, StubRouteExtensions {
}
type StubRouteObject = StubIndexRouteObject | StubNonIndexRouteObject;
interface RoutesTestStubProps {
    /**
     *  The initial entries in the history stack. This allows you to start a test with
     *  multiple locations already in the history stack (for testing a back navigation, etc.)
     *  The test will default to the last entry in initialEntries if no initialIndex is provided.
     *  e.g. initialEntries={["/home", "/about", "/contact"]}
     */
    initialEntries?: InitialEntry[];
    /**
     * The initial index in the history stack to render. This allows you to start a test at a specific entry.
     * It defaults to the last entry in initialEntries.
     * e.g.
     *   initialEntries: ["/", "/events/123"]
     *   initialIndex: 1 // start at "/events/123"
     */
    initialIndex?: number;
    /**
     *  Used to set the route's initial loader and action data.
     *  e.g. hydrationData={{
     *   loaderData: { "/contact": { locale: "en-US" } },
     *   actionData: { "/login": { errors: { email: "invalid email" } }}
     *  }}
     */
    hydrationData?: HydrationState;
    /**
     * Future flags mimicking the settings in react-router.config.ts
     */
    future?: Partial<FutureConfig>;
}
/**
 * @category Utils
 */
declare function createRoutesStub(routes: StubRouteObject[], unstable_getContext?: () => unstable_InitialContext): ({ initialEntries, initialIndex, hydrationData, future, }: RoutesTestStubProps) => React.JSX.Element;

interface CookieSignatureOptions {
    /**
     * An array of secrets that may be used to sign/unsign the value of a cookie.
     *
     * The array makes it easy to rotate secrets. New secrets should be added to
     * the beginning of the array. `cookie.serialize()` will always use the first
     * value in the array, but `cookie.parse()` may use any of them so that
     * cookies that were signed with older secrets still work.
     */
    secrets?: string[];
}
type CookieOptions = ParseOptions & SerializeOptions & CookieSignatureOptions;
/**
 * A HTTP cookie.
 *
 * A Cookie is a logical container for metadata about a HTTP cookie; its name
 * and options. But it doesn't contain a value. Instead, it has `parse()` and
 * `serialize()` methods that allow a single instance to be reused for
 * parsing/encoding multiple different values.
 *
 * @see https://remix.run/utils/cookies#cookie-api
 */
interface Cookie {
    /**
     * The name of the cookie, used in the `Cookie` and `Set-Cookie` headers.
     */
    readonly name: string;
    /**
     * True if this cookie uses one or more secrets for verification.
     */
    readonly isSigned: boolean;
    /**
     * The Date this cookie expires.
     *
     * Note: This is calculated at access time using `maxAge` when no `expires`
     * option is provided to `createCookie()`.
     */
    readonly expires?: Date;
    /**
     * Parses a raw `Cookie` header and returns the value of this cookie or
     * `null` if it's not present.
     */
    parse(cookieHeader: string | null, options?: ParseOptions): Promise<any>;
    /**
     * Serializes the given value to a string and returns the `Set-Cookie`
     * header.
     */
    serialize(value: any, options?: SerializeOptions): Promise<string>;
}
/**
 * Creates a logical container for managing a browser cookie from the server.
 */
declare const createCookie: (name: string, cookieOptions?: CookieOptions) => Cookie;
type IsCookieFunction = (object: any) => object is Cookie;
/**
 * Returns true if an object is a Remix cookie container.
 *
 * @see https://remix.run/utils/cookies#iscookie
 */
declare const isCookie: IsCookieFunction;

type RequestHandler = (request: Request, loadContext?: MiddlewareEnabled extends true ? unstable_InitialContext : AppLoadContext) => Promise<Response>;
type CreateRequestHandlerFunction = (build: ServerBuild | (() => ServerBuild | Promise<ServerBuild>), mode?: string) => RequestHandler;
declare const createRequestHandler: CreateRequestHandlerFunction;

/**
 * An object of name/value pairs to be used in the session.
 */
interface SessionData {
    [name: string]: any;
}
/**
 * Session persists data across HTTP requests.
 *
 * @see https://reactrouter.com/explanation/sessions-and-cookies#sessions
 */
interface Session<Data = SessionData, FlashData = Data> {
    /**
     * A unique identifier for this session.
     *
     * Note: This will be the empty string for newly created sessions and
     * sessions that are not backed by a database (i.e. cookie-based sessions).
     */
    readonly id: string;
    /**
     * The raw data contained in this session.
     *
     * This is useful mostly for SessionStorage internally to access the raw
     * session data to persist.
     */
    readonly data: FlashSessionData<Data, FlashData>;
    /**
     * Returns `true` if the session has a value for the given `name`, `false`
     * otherwise.
     */
    has(name: (keyof Data | keyof FlashData) & string): boolean;
    /**
     * Returns the value for the given `name` in this session.
     */
    get<Key extends (keyof Data | keyof FlashData) & string>(name: Key): (Key extends keyof Data ? Data[Key] : undefined) | (Key extends keyof FlashData ? FlashData[Key] : undefined) | undefined;
    /**
     * Sets a value in the session for the given `name`.
     */
    set<Key extends keyof Data & string>(name: Key, value: Data[Key]): void;
    /**
     * Sets a value in the session that is only valid until the next `get()`.
     * This can be useful for temporary values, like error messages.
     */
    flash<Key extends keyof FlashData & string>(name: Key, value: FlashData[Key]): void;
    /**
     * Removes a value from the session.
     */
    unset(name: keyof Data & string): void;
}
type FlashSessionData<Data, FlashData> = Partial<Data & {
    [Key in keyof FlashData as FlashDataKey<Key & string>]: FlashData[Key];
}>;
type FlashDataKey<Key extends string> = `__flash_${Key}__`;
type CreateSessionFunction = <Data = SessionData, FlashData = Data>(initialData?: Data, id?: string) => Session<Data, FlashData>;
/**
 * Creates a new Session object.
 *
 * Note: This function is typically not invoked directly by application code.
 * Instead, use a `SessionStorage` object's `getSession` method.
 */
declare const createSession: CreateSessionFunction;
type IsSessionFunction = (object: any) => object is Session;
/**
 * Returns true if an object is a React Router session.
 *
 * @see https://reactrouter.com/api/utils/isSession
 */
declare const isSession: IsSessionFunction;
/**
 * SessionStorage stores session data between HTTP requests and knows how to
 * parse and create cookies.
 *
 * A SessionStorage creates Session objects using a `Cookie` header as input.
 * Then, later it generates the `Set-Cookie` header to be used in the response.
 */
interface SessionStorage<Data = SessionData, FlashData = Data> {
    /**
     * Parses a Cookie header from a HTTP request and returns the associated
     * Session. If there is no session associated with the cookie, this will
     * return a new Session with no data.
     */
    getSession: (cookieHeader?: string | null, options?: ParseOptions) => Promise<Session<Data, FlashData>>;
    /**
     * Stores all data in the Session and returns the Set-Cookie header to be
     * used in the HTTP response.
     */
    commitSession: (session: Session<Data, FlashData>, options?: SerializeOptions) => Promise<string>;
    /**
     * Deletes all data associated with the Session and returns the Set-Cookie
     * header to be used in the HTTP response.
     */
    destroySession: (session: Session<Data, FlashData>, options?: SerializeOptions) => Promise<string>;
}
/**
 * SessionIdStorageStrategy is designed to allow anyone to easily build their
 * own SessionStorage using `createSessionStorage(strategy)`.
 *
 * This strategy describes a common scenario where the session id is stored in
 * a cookie but the actual session data is stored elsewhere, usually in a
 * database or on disk. A set of create, read, update, and delete operations
 * are provided for managing the session data.
 */
interface SessionIdStorageStrategy<Data = SessionData, FlashData = Data> {
    /**
     * The Cookie used to store the session id, or options used to automatically
     * create one.
     */
    cookie?: Cookie | (CookieOptions & {
        name?: string;
    });
    /**
     * Creates a new record with the given data and returns the session id.
     */
    createData: (data: FlashSessionData<Data, FlashData>, expires?: Date) => Promise<string>;
    /**
     * Returns data for a given session id, or `null` if there isn't any.
     */
    readData: (id: string) => Promise<FlashSessionData<Data, FlashData> | null>;
    /**
     * Updates data for the given session id.
     */
    updateData: (id: string, data: FlashSessionData<Data, FlashData>, expires?: Date) => Promise<void>;
    /**
     * Deletes data for a given session id from the data store.
     */
    deleteData: (id: string) => Promise<void>;
}
/**
 * Creates a SessionStorage object using a SessionIdStorageStrategy.
 *
 * Note: This is a low-level API that should only be used if none of the
 * existing session storage options meet your requirements.
 */
declare function createSessionStorage<Data = SessionData, FlashData = Data>({ cookie: cookieArg, createData, readData, updateData, deleteData, }: SessionIdStorageStrategy<Data, FlashData>): SessionStorage<Data, FlashData>;

interface CookieSessionStorageOptions {
    /**
     * The Cookie used to store the session data on the client, or options used
     * to automatically create one.
     */
    cookie?: SessionIdStorageStrategy["cookie"];
}
/**
 * Creates and returns a SessionStorage object that stores all session data
 * directly in the session cookie itself.
 *
 * This has the advantage that no database or other backend services are
 * needed, and can help to simplify some load-balanced scenarios. However, it
 * also has the limitation that serialized session data may not exceed the
 * browser's maximum cookie size. Trade-offs!
 */
declare function createCookieSessionStorage<Data = SessionData, FlashData = Data>({ cookie: cookieArg }?: CookieSessionStorageOptions): SessionStorage<Data, FlashData>;

interface MemorySessionStorageOptions {
    /**
     * The Cookie used to store the session id on the client, or options used
     * to automatically create one.
     */
    cookie?: SessionIdStorageStrategy["cookie"];
}
/**
 * Creates and returns a simple in-memory SessionStorage object, mostly useful
 * for testing and as a reference implementation.
 *
 * Note: This storage does not scale beyond a single process, so it is not
 * suitable for most production scenarios.
 */
declare function createMemorySessionStorage<Data = SessionData, FlashData = Data>({ cookie }?: MemorySessionStorageOptions): SessionStorage<Data, FlashData>;

type DevServerHooks = {
    getCriticalCss?: (pathname: string) => Promise<string | undefined>;
    processRequestError?: (error: unknown) => void;
};
declare function setDevServerHooks(devServerHooks: DevServerHooks): void;

type Args = {
    [K in keyof Pages]: ToArgs<Pages[K]["params"]>;
};
type ToArgs<Params extends Record<string, string | undefined>> = Equal<Params, {}> extends true ? [] : Partial<Params> extends Params ? [Params] | [] : [
    Params
];
/**
  Returns a resolved URL path for the specified route.

  ```tsx
  const h = href("/:lang?/about", { lang: "en" })
  // -> `/en/about`

  <Link to={href("/products/:id", { id: "abc123" })} />
  ```
 */
declare function href<Path extends keyof Args>(path: Path, ...args: Args[Path]): string;

declare function deserializeErrors(errors: RouterState["errors"]): RouterState["errors"];

type RemixErrorBoundaryProps = React.PropsWithChildren<{
    location: Location;
    isOutsideRemixApp?: boolean;
    error?: Error;
}>;
type RemixErrorBoundaryState = {
    error: null | Error;
    location: Location;
};
declare class RemixErrorBoundary extends React.Component<RemixErrorBoundaryProps, RemixErrorBoundaryState> {
    constructor(props: RemixErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): {
        error: Error;
    };
    static getDerivedStateFromProps(props: RemixErrorBoundaryProps, state: RemixErrorBoundaryState): {
        error: Error | null;
        location: Location<any>;
    };
    render(): string | number | boolean | Iterable<React.ReactNode> | React.JSX.Element | null | undefined;
}

declare function getPatchRoutesOnNavigationFunction(manifest: AssetsManifest, routeModules: RouteModules, ssr: boolean, routeDiscovery: ServerBuild["routeDiscovery"], isSpaMode: boolean, basename: string | undefined): PatchRoutesOnNavigationFunction | undefined;
declare function useFogOFWarDiscovery(router: Router$1, manifest: AssetsManifest, routeModules: RouteModules, ssr: boolean, routeDiscovery: ServerBuild["routeDiscovery"], isSpaMode: boolean): void;

declare function getHydrationData(state: {
    loaderData?: Router$1["state"]["loaderData"];
    actionData?: Router$1["state"]["actionData"];
    errors?: Router$1["state"]["errors"];
}, routes: DataRouteObject[], getRouteInfo: (routeId: string) => {
    clientLoader: ClientLoaderFunction | undefined;
    hasLoader: boolean;
    hasHydrateFallback: boolean;
}, location: Path, basename: string | undefined, isSpaMode: boolean): HydrationState;

export { ActionFunction, ActionFunctionArgs, AppLoadContext, Await, type AwaitProps, Blocker, BlockerFunction, BrowserRouter, type BrowserRouterProps, ClientLoaderFunction, type Cookie, type CookieOptions, type CookieSignatureOptions, type CreateRequestHandlerFunction, type DOMRouterOpts, DataRouteObject, Router$1 as DataRouter, DataStrategyFunction, type EntryContext, Fetcher, type FetcherFormProps, type FetcherSubmitFunction, type FetcherSubmitOptions, type FetcherWithComponents, type FlashSessionData, Form, FormEncType, type FormProps, GetScrollRestorationKeyFunction, HTMLFormMethod, type HandleDataRequestFunction, type HandleDocumentRequestFunction, type HandleErrorFunction, HashRouter, type HashRouterProps, type HistoryRouterProps, HydrationState, IndexRouteObject, type IndexRouteProps, InitialEntry, type IsCookieFunction, type IsSessionFunction, type LayoutRouteProps, LazyRouteFunction, Link, type LinkProps, Links, LinksFunction, LoaderFunction, LoaderFunctionArgs, Location, MemoryRouter, type MemoryRouterOpts, type MemoryRouterProps, Meta, MetaFunction, NavLink, type NavLinkProps, type NavLinkRenderProps, Navigate, type NavigateFunction, NavigateOptions, type NavigateProps, Navigation, Action as NavigationType, Navigator, NonIndexRouteObject, Outlet, type OutletProps, PageLinkDescriptor, type ParamKeyValuePair, ParamParseKey, Params, PatchRoutesOnNavigationFunction, Path, PathMatch, PathPattern, type PathRouteProps, PrefetchPageLinks, RelativeRoutingType, type RequestHandler, Route, RouteMatch, RouteObject, type RouteProps, Router, RouterInit, type RouterProps, RouterProvider, type RouterProviderProps, RouterState, Routes, type RoutesProps, type RoutesTestStubProps, Scripts, type ScriptsProps, ScrollRestoration, type ScrollRestorationProps, type ServerBuild, type ServerEntryModule, ServerRouter, type ServerRouterProps, type Session, type SessionData, type SessionIdStorageStrategy, type SessionStorage, type SetURLSearchParams, StaticHandler, StaticHandlerContext, StaticRouter, type StaticRouterProps, StaticRouterProvider, type StaticRouterProviderProps, type SubmitFunction, type SubmitOptions, type SubmitTarget, To, UIMatch, type AssetsManifest as UNSAFE_AssetsManifest, FrameworkContext as UNSAFE_FrameworkContext, MiddlewareEnabled as UNSAFE_MiddlewareEnabled, RemixErrorBoundary as UNSAFE_RemixErrorBoundary, RouteModules as UNSAFE_RouteModules, ServerMode as UNSAFE_ServerMode, SingleFetchRedirectSymbol as UNSAFE_SingleFetchRedirectSymbol, createClientRoutes as UNSAFE_createClientRoutes, createClientRoutesWithHMRRevalidationOptOut as UNSAFE_createClientRoutesWithHMRRevalidationOptOut, decodeViaTurboStream as UNSAFE_decodeViaTurboStream, deserializeErrors as UNSAFE_deserializeErrors, getHydrationData as UNSAFE_getHydrationData, getPatchRoutesOnNavigationFunction as UNSAFE_getPatchRoutesOnNavigationFunction, getTurboStreamSingleFetchDataStrategy as UNSAFE_getTurboStreamSingleFetchDataStrategy, hydrationRouteProperties as UNSAFE_hydrationRouteProperties, mapRouteProperties as UNSAFE_mapRouteProperties, shouldHydrateRouteLoader as UNSAFE_shouldHydrateRouteLoader, useFogOFWarDiscovery as UNSAFE_useFogOFWarDiscovery, useScrollRestoration as UNSAFE_useScrollRestoration, withComponentProps as UNSAFE_withComponentProps, withErrorBoundaryProps as UNSAFE_withErrorBoundaryProps, withHydrateFallbackProps as UNSAFE_withHydrateFallbackProps, type URLSearchParamsInit, createBrowserRouter, createCookie, createCookieSessionStorage, createHashRouter, createMemoryRouter, createMemorySessionStorage, createRequestHandler, createRoutesFromChildren, createRoutesFromElements, createRoutesStub, createSearchParams, createSession, createSessionStorage, createStaticHandler, createStaticRouter, href, isCookie, isSession, renderMatches, HistoryRouter as unstable_HistoryRouter, unstable_InitialContext, unstable_RouterContextProvider, setDevServerHooks as unstable_setDevServerHooks, usePrompt as unstable_usePrompt, useActionData, useAsyncError, useAsyncValue, useBeforeUnload, useBlocker, useFetcher, useFetchers, useFormAction, useHref, useInRouterContext, useLinkClickHandler, useLoaderData, useLocation, useMatch, useMatches, useNavigate, useNavigation, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useRevalidator, useRouteError, useRouteLoaderData, useRoutes, useSearchParams, useSubmit, useViewTransitionState };
