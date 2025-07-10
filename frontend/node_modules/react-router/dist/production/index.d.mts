import { a as Router, b as RouteModules, D as DataStrategyFunction, L as Location, S as StaticHandlerContext, c as RouteObject, C as CreateStaticHandlerOptions$1, d as StaticHandler, F as FutureConfig, I as InitialEntry, H as HydrationState, e as IndexRouteObject, f as LoaderFunction, A as ActionFunction, M as MetaFunction, g as LinksFunction, N as NonIndexRouteObject, u as unstable_InitialContext, h as MiddlewareEnabled, i as AppLoadContext, E as Equal, j as RouterState, P as PatchRoutesOnNavigationFunction, k as DataRouteObject, l as ClientLoaderFunction, m as Path } from './route-data-D7Xbr_Ww.mjs';
export { y as ActionFunctionArgs, B as Blocker, s as BlockerFunction, au as ClientActionFunction, av as ClientActionFunctionArgs, aw as ClientLoaderFunctionArgs, ap as DataRouteMatch, z as DataStrategyFunctionArgs, J as DataStrategyMatch, K as DataStrategyResult, Q as ErrorResponse, o as Fetcher, U as FormEncType, V as FormMethod, aE as Future, G as GetScrollPositionFunction, n as GetScrollRestorationKeyFunction, W as HTMLFormMethod, ax as HeadersArgs, ay as HeadersFunction, aC as HtmlLinkDescriptor, af as IDLE_BLOCKER, ae as IDLE_FETCHER, ad as IDLE_NAVIGATION, X as LazyRouteFunction, aD as LinkDescriptor, Y as LoaderFunctionArgs, az as MetaArgs, aA as MetaDescriptor, aq as NavigateOptions, p as Navigation, q as NavigationStates, aa as NavigationType, ar as Navigator, aB as PageLinkDescriptor, _ as ParamParseKey, $ as Params, as as PatchRoutesOnNavigationFunctionArgs, a0 as PathMatch, a1 as PathParam, a2 as PathPattern, a3 as RedirectFunction, r as RelativeRoutingType, x as RevalidationState, at as RouteMatch, w as RouterFetchOptions, R as RouterInit, v as RouterNavigateOptions, t as RouterSubscriber, a5 as ShouldRevalidateFunction, a6 as ShouldRevalidateFunctionArgs, T as To, a7 as UIMatch, aK as UNSAFE_DataRouterContext, aL as UNSAFE_DataRouterStateContext, O as UNSAFE_DataWithResponseInit, aJ as UNSAFE_ErrorResponseImpl, aM as UNSAFE_FetchersContext, aN as UNSAFE_LocationContext, aO as UNSAFE_NavigationContext, aP as UNSAFE_RouteContext, aQ as UNSAFE_ViewTransitionContext, aG as UNSAFE_createBrowserHistory, aI as UNSAFE_createRouter, aH as UNSAFE_invariant, ab as createPath, ag as data, ah as generatePath, ai as isRouteErrorResponse, aj as matchPath, ak as matchRoutes, ac as parsePath, al as redirect, am as redirectDocument, an as replace, ao as resolvePath, Z as unstable_MiddlewareFunction, a4 as unstable_RouterContext, a9 as unstable_RouterContextProvider, aF as unstable_SerializesTo, a8 as unstable_createContext } from './route-data-D7Xbr_Ww.mjs';
import { A as AssetsManifest, E as EntryContext, F as FutureConfig$1, a as RouteComponentType, H as HydrateFallbackType, b as ErrorBoundaryType, S as ServerBuild } from './lib-B33EY9A0.mjs';
export { h as Await, c as AwaitProps, af as BrowserRouter, $ as BrowserRouterProps, a0 as DOMRouterOpts, a6 as FetcherFormProps, ab as FetcherSubmitFunction, av as FetcherSubmitOptions, ac as FetcherWithComponents, ak as Form, a7 as FormProps, aG as HandleDataRequestFunction, aH as HandleDocumentRequestFunction, aI as HandleErrorFunction, ag as HashRouter, a1 as HashRouterProps, a2 as HistoryRouterProps, I as IndexRouteProps, L as LayoutRouteProps, ah as Link, a3 as LinkProps, aC as Links, i as MemoryRouter, M as MemoryRouterOpts, d as MemoryRouterProps, aB as Meta, aj as NavLink, a4 as NavLinkProps, a5 as NavLinkRenderProps, j as Navigate, t as NavigateFunction, N as NavigateProps, k as Outlet, O as OutletProps, aw as ParamKeyValuePair, P as PathRouteProps, aE as PrefetchPageLinks, l as Route, e as RouteProps, m as Router, f as RouterProps, n as RouterProvider, R as RouterProviderProps, o as Routes, g as RoutesProps, aD as Scripts, aF as ScriptsProps, al as ScrollRestoration, a8 as ScrollRestorationProps, aJ as ServerEntryModule, a9 as SetURLSearchParams, aa as SubmitFunction, ax as SubmitOptions, az as SubmitTarget, aP as UNSAFE_FrameworkContext, aQ as UNSAFE_createClientRoutes, aR as UNSAFE_createClientRoutesWithHMRRevalidationOptOut, aK as UNSAFE_hydrationRouteProperties, aL as UNSAFE_mapRouteProperties, aS as UNSAFE_shouldHydrateRouteLoader, aT as UNSAFE_useScrollRestoration, aM as UNSAFE_withComponentProps, aO as UNSAFE_withErrorBoundaryProps, aN as UNSAFE_withHydrateFallbackProps, ay as URLSearchParamsInit, ad as createBrowserRouter, ae as createHashRouter, p as createMemoryRouter, q as createRoutesFromChildren, r as createRoutesFromElements, aA as createSearchParams, s as renderMatches, ai as unstable_HistoryRouter, at as unstable_usePrompt, v as useActionData, w as useAsyncError, x as useAsyncValue, as as useBeforeUnload, u as useBlocker, aq as useFetcher, ar as useFetchers, ap as useFormAction, y as useHref, z as useInRouterContext, am as useLinkClickHandler, B as useLoaderData, C as useLocation, D as useMatch, G as useMatches, J as useNavigate, K as useNavigation, Q as useNavigationType, T as useOutlet, U as useOutletContext, V as useParams, W as useResolvedPath, X as useRevalidator, Y as useRouteError, Z as useRouteLoaderData, _ as useRoutes, an as useSearchParams, ao as useSubmit, au as useViewTransitionState } from './lib-B33EY9A0.mjs';
import * as React from 'react';
import { ReactElement } from 'react';
import { ParseOptions, SerializeOptions } from 'cookie';
export { ParseOptions as CookieParseOptions, SerializeOptions as CookieSerializeOptions } from 'cookie';
import { P as Pages } from './register-DeIo2iHO.mjs';
export { R as Register } from './register-DeIo2iHO.mjs';

declare const SingleFetchRedirectSymbol: unique symbol;
declare function getTurboStreamSingleFetchDataStrategy(getRouter: () => Router, manifest: AssetsManifest, routeModules: RouteModules, ssr: boolean, basename: string | undefined): DataStrategyFunction;
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
    router: Router;
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
    future?: Partial<FutureConfig>;
}): Router;

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
    future?: Partial<FutureConfig$1>;
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
declare function useFogOFWarDiscovery(router: Router, manifest: AssetsManifest, routeModules: RouteModules, ssr: boolean, routeDiscovery: ServerBuild["routeDiscovery"], isSpaMode: boolean): void;

declare function getHydrationData(state: {
    loaderData?: Router["state"]["loaderData"];
    actionData?: Router["state"]["actionData"];
    errors?: Router["state"]["errors"];
}, routes: DataRouteObject[], getRouteInfo: (routeId: string) => {
    clientLoader: ClientLoaderFunction | undefined;
    hasLoader: boolean;
    hasHydrateFallback: boolean;
}, location: Path, basename: string | undefined, isSpaMode: boolean): HydrationState;

export { ActionFunction, AppLoadContext, ClientLoaderFunction, type Cookie, type CookieOptions, type CookieSignatureOptions, type CreateRequestHandlerFunction, DataRouteObject, Router as DataRouter, DataStrategyFunction, EntryContext, type FlashSessionData, HydrationState, IndexRouteObject, InitialEntry, type IsCookieFunction, type IsSessionFunction, LinksFunction, LoaderFunction, Location, MetaFunction, NonIndexRouteObject, PatchRoutesOnNavigationFunction, Path, type RequestHandler, RouteObject, RouterState, type RoutesTestStubProps, ServerBuild, ServerRouter, type ServerRouterProps, type Session, type SessionData, type SessionIdStorageStrategy, type SessionStorage, StaticHandler, StaticHandlerContext, StaticRouter, type StaticRouterProps, StaticRouterProvider, type StaticRouterProviderProps, AssetsManifest as UNSAFE_AssetsManifest, MiddlewareEnabled as UNSAFE_MiddlewareEnabled, RemixErrorBoundary as UNSAFE_RemixErrorBoundary, RouteModules as UNSAFE_RouteModules, ServerMode as UNSAFE_ServerMode, SingleFetchRedirectSymbol as UNSAFE_SingleFetchRedirectSymbol, decodeViaTurboStream as UNSAFE_decodeViaTurboStream, deserializeErrors as UNSAFE_deserializeErrors, getHydrationData as UNSAFE_getHydrationData, getPatchRoutesOnNavigationFunction as UNSAFE_getPatchRoutesOnNavigationFunction, getTurboStreamSingleFetchDataStrategy as UNSAFE_getTurboStreamSingleFetchDataStrategy, useFogOFWarDiscovery as UNSAFE_useFogOFWarDiscovery, createCookie, createCookieSessionStorage, createMemorySessionStorage, createRequestHandler, createRoutesStub, createSession, createSessionStorage, createStaticHandler, createStaticRouter, href, isCookie, isSession, unstable_InitialContext, setDevServerHooks as unstable_setDevServerHooks };
