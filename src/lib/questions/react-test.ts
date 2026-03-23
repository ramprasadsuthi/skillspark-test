import { type Question } from "../questions";

export const reactQuestions: Record<string, Question[]> = {
  "React-Beginner": [
  { id: 1, question: "What is React?", options: ["Database", "JavaScript library for UI", "CSS framework", "Backend framework"], correctAnswer: 1, explanation: "React is a JavaScript library for building user interfaces.", type: "conceptual" },

  { id: 2, question: "Who developed React?", options: ["Google", "Microsoft", "Facebook", "Amazon"], correctAnswer: 2, explanation: "React was developed by Facebook.", type: "mcq" },

  { id: 3, question: "What is JSX?", options: ["CSS extension", "JS syntax extension for HTML", "Database query", "API"], correctAnswer: 1, explanation: "JSX allows writing HTML in JS.", type: "conceptual" },

  { id: 4, question: "Which file extension is commonly used for React components?", options: [".js", ".jsx", ".react", ".ts"], correctAnswer: 1, explanation: ".jsx is commonly used.", type: "mcq" },

  { id: 5, question: "What is a component in React?", options: ["Database", "Reusable UI block", "API", "CSS file"], correctAnswer: 1, explanation: "Components are reusable UI elements.", type: "conceptual" },

  { id: 6, question: "Which type of component uses hooks?", options: ["Class component", "Function component", "HTML component", "CSS component"], correctAnswer: 1, explanation: "Hooks are used in function components.", type: "mcq" },

  { id: 7, question: "Which method renders React content?", options: ["ReactDOM.render()", "render()", "display()", "show()"], correctAnswer: 0, explanation: "ReactDOM.render() mounts component.", type: "mcq" },

  { id: 8, question: "What is state in React?", options: ["CSS value", "Internal component data", "API response", "DOM element"], correctAnswer: 1, explanation: "State holds dynamic data.", type: "conceptual" },

  { id: 9, question: "Which hook is used for state?", options: ["useEffect", "useState", "useRef", "useMemo"], correctAnswer: 1, explanation: "useState manages state.", type: "mcq" },

  { id: 10, question: "What are props?", options: ["Internal data", "External inputs to component", "CSS styles", "Functions"], correctAnswer: 1, explanation: "Props pass data between components.", type: "conceptual" },

  { id: 11, question: "Props are:", options: ["Mutable", "Immutable", "Editable", "Changeable"], correctAnswer: 1, explanation: "Props are read-only.", type: "mcq" },

  { id: 12, question: "Which hook handles side effects?", options: ["useState", "useEffect", "useRef", "useMemo"], correctAnswer: 1, explanation: "useEffect handles side effects.", type: "mcq" },

  { id: 13, question: "Which hook references DOM element?", options: ["useRef", "useEffect", "useState", "useDOM"], correctAnswer: 0, explanation: "useRef accesses DOM.", type: "mcq" },

  { id: 14, question: "What is Virtual DOM?", options: ["Real DOM", "Lightweight copy of DOM", "CSS model", "API"], correctAnswer: 1, explanation: "Virtual DOM improves performance.", type: "conceptual" },

  { id: 15, question: "Which keyword is used to create React element?", options: ["React.createElement()", "create()", "element()", "new React()"], correctAnswer: 0, explanation: "Creates element manually.", type: "mcq" },

  { id: 16, question: "Which syntax is used for JSX?", options: ["HTML-like syntax", "JSON", "XML only", "CSS"], correctAnswer: 0, explanation: "JSX looks like HTML.", type: "mcq" },

  { id: 17, question: "Which attribute replaces class in JSX?", options: ["class", "className", "cssClass", "style"], correctAnswer: 1, explanation: "className is used instead of class.", type: "mcq" },

  { id: 18, question: "Which attribute is used for inline styling?", options: ["style", "css", "class", "design"], correctAnswer: 0, explanation: "style attribute uses object.", type: "mcq" },

  { id: 19, question: "What does useEffect dependency array do?", options: ["Controls execution", "Defines state", "Renders component", "Stores data"], correctAnswer: 0, explanation: "Controls when effect runs.", type: "conceptual" },

  { id: 20, question: "Empty dependency array means?", options: ["Runs always", "Runs once", "Never runs", "Runs twice"], correctAnswer: 1, explanation: "Runs only once after mount.", type: "mcq" },

  { id: 21, question: "Which method updates state in class component?", options: ["setState()", "updateState()", "changeState()", "modifyState()"], correctAnswer: 0, explanation: "setState updates state.", type: "mcq" },

  { id: 22, question: "What is lifting state up?", options: ["Sharing state between components", "Deleting state", "Creating state", "Styling state"], correctAnswer: 0, explanation: "Move state to parent.", type: "conceptual" },

  { id: 23, question: "Which hook memoizes values?", options: ["useMemo", "useState", "useEffect", "useRef"], correctAnswer: 0, explanation: "useMemo optimizes performance.", type: "mcq" },

  { id: 24, question: "Which hook memoizes functions?", options: ["useCallback", "useMemo", "useEffect", "useRef"], correctAnswer: 0, explanation: "useCallback memoizes functions.", type: "mcq" },

  { id: 25, question: "Which hook shares global state?", options: ["useContext", "useState", "useEffect", "useGlobal"], correctAnswer: 0, explanation: "useContext shares state.", type: "mcq" },

  { id: 26, question: "What is key prop used for?", options: ["Styling", "Identifying list items", "State", "Props"], correctAnswer: 1, explanation: "Keys help React track elements.", type: "mcq" },

  { id: 27, question: "What happens if key is missing?", options: ["Error", "Warning", "Crash", "Nothing"], correctAnswer: 1, explanation: "React shows warning.", type: "mcq" },

  { id: 28, question: "Which method is used to handle events?", options: ["addEvent", "onClick", "eventHandler", "handle()"], correctAnswer: 1, explanation: "onClick handles click events.", type: "mcq" },

  { id: 29, question: "How to pass function as prop?", options: ["As variable", "As string", "As function reference", "As number"], correctAnswer: 2, explanation: "Pass function reference.", type: "conceptual" },

  { id: 30, question: "Which hook is used for form handling?", options: ["useState", "useForm", "useInput", "useEffect"], correctAnswer: 0, explanation: "useState manages form data.", type: "mcq" },

  { id: 31, question: "Controlled component means?", options: ["DOM controlled", "State controlled input", "API controlled", "CSS controlled"], correctAnswer: 1, explanation: "Input controlled by state.", type: "conceptual" },

  { id: 32, question: "Uncontrolled component means?", options: ["DOM handles data", "State handles data", "Props handles data", "API handles data"], correctAnswer: 0, explanation: "DOM manages values.", type: "conceptual" },

  { id: 33, question: "Which hook accesses previous state?", options: ["useRef", "useState callback", "useEffect", "useMemo"], correctAnswer: 1, explanation: "Callback provides previous state.", type: "mcq" },

  { id: 34, question: "Which function prevents default form submit?", options: ["preventDefault()", "stop()", "cancel()", "block()"], correctAnswer: 0, explanation: "preventDefault stops reload.", type: "mcq" },

  { id: 35, question: "Which hook runs after every render?", options: ["useEffect (no deps)", "useState", "useRef", "useMemo"], correctAnswer: 0, explanation: "Runs after every render.", type: "mcq" },

  { id: 36, question: "Which tool bootstraps React app?", options: ["create-react-app", "react-init", "npm-react", "react-cli"], correctAnswer: 0, explanation: "create-react-app initializes project.", type: "mcq" },

  { id: 37, question: "Which command runs React app?", options: ["npm run", "npm start", "run react", "start app"], correctAnswer: 1, explanation: "npm start runs app.", type: "mcq" },

  { id: 38, question: "Which method is used to import React?", options: ["require", "import", "include", "use"], correctAnswer: 1, explanation: "import loads modules.", type: "mcq" },

  { id: 39, question: "Which export is default?", options: ["export default", "export", "default export", "module export"], correctAnswer: 0, explanation: "export default exports component.", type: "mcq" },

  { id: 40, question: "What is fragment in React?", options: ["Wrapper element", "Empty tag", "State", "Hook"], correctAnswer: 0, explanation: "Fragment avoids extra DOM.", type: "conceptual" },

  { id: 41, question: "Which syntax defines fragment?", options: ["<> </>", "<div>", "<fragment>", "<React>"], correctAnswer: 0, explanation: "Short syntax for fragment.", type: "mcq" },

  { id: 42, question: "Which hook persists value without re-render?", options: ["useRef", "useState", "useEffect", "useMemo"], correctAnswer: 0, explanation: "useRef does not trigger render.", type: "mcq" },

  { id: 43, question: "Which hook handles performance optimization?", options: ["useMemo", "useEffect", "useState", "useRef"], correctAnswer: 0, explanation: "useMemo optimizes expensive operations.", type: "mcq" },

  { id: 44, question: "Which hook triggers re-render?", options: ["useState", "useRef", "useMemo", "useCallback"], correctAnswer: 0, explanation: "useState triggers re-render.", type: "mcq" },

  { id: 45, question: "What is reconciliation?", options: ["DOM update process", "State update", "API call", "Rendering"], correctAnswer: 0, explanation: "React updates DOM efficiently.", type: "conceptual" },

  { id: 46, question: "Which hook replaces lifecycle methods?", options: ["useEffect", "useState", "useRef", "useMemo"], correctAnswer: 0, explanation: "useEffect replaces lifecycle.", type: "mcq" },

  { id: 47, question: "Which lifecycle runs after mount?", options: ["componentDidMount", "render", "constructor", "update"], correctAnswer: 0, explanation: "Runs after component loads.", type: "mcq" },

  { id: 48, question: "Which lifecycle runs before unmount?", options: ["componentWillUnmount", "componentDidUpdate", "render", "init"], correctAnswer: 0, explanation: "Runs before removal.", type: "mcq" },

  { id: 49, question: "Which hook replaces componentDidMount?", options: ["useEffect", "useState", "useRef", "useMemo"], correctAnswer: 0, explanation: "useEffect with empty deps.", type: "mcq" },

  { id: 50, question: "Which hook replaces componentDidUpdate?", options: ["useEffect (with deps)", "useState", "useRef", "useMemo"], correctAnswer: 0, explanation: "Runs on dependency change.", type: "mcq" }
],
  "React-Intermediate": [
  { id: 1, question: "Which library is used for routing in React?", options: ["React Route", "React Router", "RouterJS", "RouteX"], correctAnswer: 1, explanation: "React Router handles navigation.", type: "mcq" },

  { id: 2, question: "Which component defines routes?", options: ["<Router>", "<Switch>", "<Routes>", "<RouteGroup>"], correctAnswer: 2, explanation: "<Routes> wraps route definitions.", type: "mcq" },

  { id: 3, question: "Which component defines a single route?", options: ["<Path>", "<Route>", "<Link>", "<Navigate>"], correctAnswer: 1, explanation: "<Route> defines path and element.", type: "mcq" },

  { id: 4, question: "Which hook is used to navigate programmatically?", options: ["useRoute", "useNavigate", "useHistory", "useRouter"], correctAnswer: 1, explanation: "useNavigate replaces history push.", type: "mcq" },

  { id: 5, question: "Which component is used for navigation links?", options: ["<a>", "<Link>", "<Nav>", "<Route>"], correctAnswer: 1, explanation: "<Link> avoids page reload.", type: "mcq" },

  { id: 6, question: "Which hook gets URL parameters?", options: ["useParams", "useQuery", "useLocation", "useRoute"], correctAnswer: 0, explanation: "useParams extracts route params.", type: "mcq" },

  { id: 7, question: "Which hook gets current location?", options: ["usePath", "useLocation", "useURL", "useNavigate"], correctAnswer: 1, explanation: "useLocation gives current URL info.", type: "mcq" },

  { id: 8, question: "Which hook handles query params?", options: ["useParams", "useSearchParams", "useQuery", "useLocation"], correctAnswer: 1, explanation: "useSearchParams manages query strings.", type: "mcq" },

  { id: 9, question: "What is lazy loading in React?", options: ["Loading everything", "Loading components on demand", "Fast loading", "Preloading"], correctAnswer: 1, explanation: "Lazy loading improves performance.", type: "conceptual" },

  { id: 10, question: "Which function enables lazy loading?", options: ["React.load()", "React.lazy()", "lazyLoad()", "useLazy()"], correctAnswer: 1, explanation: "React.lazy loads components dynamically.", type: "mcq" },

  { id: 11, question: "Which component handles fallback UI?", options: ["<Error>", "<Fallback>", "<Suspense>", "<Loader>"], correctAnswer: 2, explanation: "<Suspense> shows loading fallback.", type: "mcq" },

  { id: 12, question: "Which hook fetches data from API?", options: ["useFetch", "useEffect", "useAPI", "useCall"], correctAnswer: 1, explanation: "useEffect is used with fetch.", type: "mcq" },

  { id: 13, question: "Which API is used for HTTP requests?", options: ["fetch()", "axios()", "http()", "Both a & b"], correctAnswer: 3, explanation: "fetch and axios both work.", type: "mcq" },

  { id: 14, question: "What is lifting state up?", options: ["Moving state to child", "Moving state to parent", "Deleting state", "Sharing props"], correctAnswer: 1, explanation: "State is lifted to common parent.", type: "conceptual" },

  { id: 15, question: "Which hook is used for global state?", options: ["useState", "useContext", "useEffect", "useReducer"], correctAnswer: 1, explanation: "useContext shares global data.", type: "mcq" },

  { id: 16, question: "Which hook is alternative to useState for complex logic?", options: ["useEffect", "useReducer", "useMemo", "useRef"], correctAnswer: 1, explanation: "useReducer handles complex state.", type: "mcq" },

  { id: 17, question: "Reducer function returns?", options: ["Action", "New state", "Component", "Props"], correctAnswer: 1, explanation: "Reducer returns updated state.", type: "mcq" },

  { id: 18, question: "Which hook optimizes performance by memoizing value?", options: ["useMemo", "useEffect", "useRef", "useState"], correctAnswer: 0, explanation: "useMemo caches value.", type: "mcq" },

  { id: 19, question: "Which hook memoizes function?", options: ["useMemo", "useCallback", "useEffect", "useRef"], correctAnswer: 1, explanation: "useCallback memoizes functions.", type: "mcq" },

  { id: 20, question: "Which hook stores mutable value without re-render?", options: ["useRef", "useState", "useEffect", "useMemo"], correctAnswer: 0, explanation: "useRef persists value.", type: "mcq" },

  { id: 21, question: "Which hook runs cleanup function?", options: ["useState", "useEffect", "useMemo", "useRef"], correctAnswer: 1, explanation: "useEffect cleanup handles unmount.", type: "mcq" },

  { id: 22, question: "Cleanup function runs when?", options: ["Before render", "After render", "Before unmount", "On mount"], correctAnswer: 2, explanation: "Runs before unmount.", type: "mcq" },

  { id: 23, question: "What is controlled component?", options: ["DOM controlled", "State controlled input", "Props controlled", "API controlled"], correctAnswer: 1, explanation: "Input value controlled by state.", type: "conceptual" },

  { id: 24, question: "What is uncontrolled component?", options: ["State controlled", "DOM controlled", "Props controlled", "Hook controlled"], correctAnswer: 1, explanation: "DOM handles input values.", type: "conceptual" },

  { id: 25, question: "Which method prevents default form behavior?", options: ["stop()", "preventDefault()", "cancel()", "block()"], correctAnswer: 1, explanation: "Prevents page reload.", type: "mcq" },

  { id: 26, question: "Which hook handles form state?", options: ["useState", "useForm", "useEffect", "useRef"], correctAnswer: 0, explanation: "useState manages inputs.", type: "mcq" },

  { id: 27, question: "Which prop is used for list rendering?", options: ["id", "key", "index", "value"], correctAnswer: 1, explanation: "key helps identify items.", type: "mcq" },

  { id: 28, question: "Why should keys be unique?", options: ["Styling", "Performance", "DOM tracking", "All of the above"], correctAnswer: 3, explanation: "Keys help efficient updates.", type: "conceptual" },

  { id: 29, question: "Which hook handles side effects?", options: ["useState", "useEffect", "useMemo", "useRef"], correctAnswer: 1, explanation: "Handles async operations.", type: "mcq" },

  { id: 30, question: "Which dependency triggers re-run of useEffect?", options: ["State/props change", "Always runs", "Never runs", "Manual call"], correctAnswer: 0, explanation: "Runs on dependency change.", type: "mcq" },

  { id: 31, question: "Which hook handles previous value?", options: ["useRef", "useState", "useEffect", "useMemo"], correctAnswer: 0, explanation: "useRef stores previous values.", type: "mcq" },

  { id: 32, question: "Which hook is used for context consumption?", options: ["useContext", "useState", "useEffect", "useReducer"], correctAnswer: 0, explanation: "Access context values.", type: "mcq" },

  { id: 33, question: "Which hook is used for performance optimization?", options: ["useMemo", "useEffect", "useState", "useRef"], correctAnswer: 0, explanation: "Memoizes expensive operations.", type: "mcq" },

  { id: 34, question: "Which hook is used for callback optimization?", options: ["useCallback", "useMemo", "useRef", "useEffect"], correctAnswer: 0, explanation: "Prevents unnecessary re-renders.", type: "mcq" },

  { id: 35, question: "What is prop drilling?", options: ["Passing props deeply", "Deleting props", "Creating props", "Updating props"], correctAnswer: 0, explanation: "Props passed through many layers.", type: "conceptual" },

  { id: 36, question: "Which solution avoids prop drilling?", options: ["useState", "useContext", "useEffect", "useMemo"], correctAnswer: 1, explanation: "Context avoids prop drilling.", type: "mcq" },

  { id: 37, question: "Which hook is used for reducers?", options: ["useReducer", "useState", "useEffect", "useContext"], correctAnswer: 0, explanation: "Handles complex state logic.", type: "mcq" },

  { id: 38, question: "Which hook helps API calls?", options: ["useEffect", "useMemo", "useState", "useRef"], correctAnswer: 0, explanation: "useEffect triggers API calls.", type: "mcq" },

  { id: 39, question: "Which component handles errors?", options: ["ErrorBoundary", "TryCatch", "ErrorHandler", "Catch"], correctAnswer: 0, explanation: "ErrorBoundary catches errors.", type: "mcq" },

  { id: 40, question: "Which lifecycle is replaced by useEffect?", options: ["componentDidMount", "componentDidUpdate", "componentWillUnmount", "All of the above"], correctAnswer: 3, explanation: "useEffect replaces lifecycle methods.", type: "conceptual" },

  { id: 41, question: "Which hook runs only once?", options: ["useEffect([])", "useState", "useMemo", "useRef"], correctAnswer: 0, explanation: "Empty deps run once.", type: "mcq" },

  { id: 42, question: "Which hook runs on every render?", options: ["useEffect()", "useState", "useMemo", "useRef"], correctAnswer: 0, explanation: "No deps means every render.", type: "mcq" },

  { id: 43, question: "Which method updates state asynchronously?", options: ["setState", "updateState", "changeState", "modify"], correctAnswer: 0, explanation: "setState is async.", type: "mcq" },

  { id: 44, question: "Which hook manages complex form logic?", options: ["useReducer", "useState", "useEffect", "useRef"], correctAnswer: 0, explanation: "useReducer is better for complex forms.", type: "mcq" },

  { id: 45, question: "Which hook avoids re-render?", options: ["useRef", "useState", "useEffect", "useMemo"], correctAnswer: 0, explanation: "useRef does not trigger render.", type: "mcq" },

  { id: 46, question: "Which hook depends on dependency array?", options: ["useEffect", "useState", "useRef", "useMemo"], correctAnswer: 0, explanation: "useEffect uses dependencies.", type: "mcq" },

  { id: 47, question: "Which hook caches function?", options: ["useCallback", "useMemo", "useState", "useRef"], correctAnswer: 0, explanation: "useCallback memoizes function.", type: "mcq" },

  { id: 48, question: "Which hook caches value?", options: ["useMemo", "useCallback", "useState", "useEffect"], correctAnswer: 0, explanation: "useMemo caches value.", type: "mcq" },

  { id: 49, question: "Which component wraps entire app for routing?", options: ["<BrowserRouter>", "<Routes>", "<Route>", "<Link>"], correctAnswer: 0, explanation: "BrowserRouter wraps app.", type: "mcq" },

  { id: 50, question: "Which hook replaces history.push?", options: ["useNavigate", "useHistory", "useRoute", "useLocation"], correctAnswer: 0, explanation: "useNavigate is modern replacement.", type: "mcq" }
],
  "React-Advanced": [
  { id: 1, question: "What is React Fiber?", options: ["Rendering engine", "State manager", "Routing library", "Hook system"], correctAnswer: 0, explanation: "Fiber is React’s reconciliation engine.", type: "conceptual" },

  { id: 2, question: "What is reconciliation in React?", options: ["State update", "DOM diffing algorithm", "Rendering UI", "Hook execution"], correctAnswer: 1, explanation: "Reconciliation compares Virtual DOM.", type: "conceptual" },

  { id: 3, question: "Which method prevents unnecessary re-renders?", options: ["useState", "React.memo", "useEffect", "useRef"], correctAnswer: 1, explanation: "React.memo optimizes functional components.", type: "mcq" },

  { id: 4, question: "Which hook optimizes expensive calculations?", options: ["useEffect", "useMemo", "useRef", "useState"], correctAnswer: 1, explanation: "useMemo caches computed values.", type: "mcq" },

  { id: 5, question: "Which hook memoizes callback functions?", options: ["useMemo", "useCallback", "useRef", "useEffect"], correctAnswer: 1, explanation: "useCallback avoids unnecessary re-renders.", type: "mcq" },

  { id: 6, question: "What is code splitting?", options: ["Splitting CSS", "Splitting components", "Loading code on demand", "Minifying code"], correctAnswer: 2, explanation: "Code splitting improves performance.", type: "conceptual" },

  { id: 7, question: "Which API enables code splitting?", options: ["React.lazy()", "useEffect", "useMemo", "React.split()"], correctAnswer: 0, explanation: "React.lazy loads components dynamically.", type: "mcq" },

  { id: 8, question: "Which component handles lazy loading fallback?", options: ["<Loader>", "<Fallback>", "<Suspense>", "<Error>"], correctAnswer: 2, explanation: "Suspense displays fallback UI.", type: "mcq" },

  { id: 9, question: "What is Concurrent Mode?", options: ["Async rendering", "State update", "DOM rendering", "API call"], correctAnswer: 0, explanation: "Allows interruptible rendering.", type: "conceptual" },

  { id: 10, question: "What is useTransition hook?", options: ["State hook", "Delay update hook", "Performance hook", "Routing hook"], correctAnswer: 1, explanation: "useTransition prioritizes updates.", type: "mcq" },

  { id: 11, question: "What is useDeferredValue?", options: ["Immediate update", "Delayed rendering", "Memoization", "Ref storage"], correctAnswer: 1, explanation: "Delays non-urgent updates.", type: "conceptual" },

  { id: 12, question: "What is React Portal?", options: ["Routing system", "Render outside DOM hierarchy", "State tool", "Hook"], correctAnswer: 1, explanation: "Portals render outside parent DOM.", type: "conceptual" },

  { id: 13, question: "Which function creates portal?", options: ["React.createPortal()", "createPortal()", "React.portal()", "portal()"], correctAnswer: 0, explanation: "Used for modals/tooltips.", type: "mcq" },

  { id: 14, question: "What is Error Boundary?", options: ["Hook", "Component for catching errors", "API", "Function"], correctAnswer: 1, explanation: "Catches rendering errors.", type: "conceptual" },

  { id: 15, question: "Which lifecycle catches errors?", options: ["componentDidMount", "componentDidCatch", "render", "useEffect"], correctAnswer: 1, explanation: "Handles errors in class components.", type: "mcq" },

  { id: 16, question: "What is forwardRef?", options: ["Pass ref to child", "Create ref", "Delete ref", "Store ref"], correctAnswer: 0, explanation: "Allows parent to access child DOM.", type: "conceptual" },

  { id: 17, question: "Which hook manages imperative logic?", options: ["useImperativeHandle", "useEffect", "useState", "useRef"], correctAnswer: 0, explanation: "Customizes ref behavior.", type: "mcq" },

  { id: 18, question: "What is custom hook?", options: ["Built-in hook", "Reusable function using hooks", "Component", "API"], correctAnswer: 1, explanation: "Custom hooks reuse logic.", type: "conceptual" },

  { id: 19, question: "What is HOC (Higher Order Component)?", options: ["Function returning component", "Hook", "API", "State"], correctAnswer: 0, explanation: "Enhances component logic.", type: "conceptual" },

  { id: 20, question: "What is render props pattern?", options: ["Passing function as prop", "Rendering HTML", "JSX method", "Hook"], correctAnswer: 0, explanation: "Function as child pattern.", type: "conceptual" },

  { id: 21, question: "Which hook syncs external store?", options: ["useStore", "useSyncExternalStore", "useContext", "useState"], correctAnswer: 1, explanation: "Used for external state libraries.", type: "mcq" },

  { id: 22, question: "What is batching in React?", options: ["Grouping updates", "Splitting updates", "Rendering updates", "Deleting updates"], correctAnswer: 0, explanation: "Combines multiple state updates.", type: "conceptual" },

  { id: 23, question: "Which function forces sync update?", options: ["flushSync()", "sync()", "update()", "renderSync()"], correctAnswer: 0, explanation: "flushSync forces immediate update.", type: "mcq" },

  { id: 24, question: "What is StrictMode?", options: ["Production mode", "Debugging tool", "Performance tool", "Rendering mode"], correctAnswer: 1, explanation: "Helps find potential issues.", type: "conceptual" },

  { id: 25, question: "Which hook handles server-side rendering?", options: ["useSSR", "useEffect", "useLayoutEffect", "useState"], correctAnswer: 2, explanation: "useLayoutEffect runs before paint.", type: "mcq" },

  { id: 26, question: "Difference between useEffect and useLayoutEffect?", options: ["Same", "Timing difference", "Performance", "Syntax"], correctAnswer: 1, explanation: "Layout effect runs before paint.", type: "conceptual" },

  { id: 27, question: "What is hydration?", options: ["State update", "Attaching events to SSR HTML", "Rendering", "DOM update"], correctAnswer: 1, explanation: "Hydration attaches React to HTML.", type: "conceptual" },

  { id: 28, question: "Which method hydrates app?", options: ["ReactDOM.hydrate()", "hydrate()", "render()", "attach()"], correctAnswer: 0, explanation: "Used in SSR.", type: "mcq" },

  { id: 29, question: "What is key purpose?", options: ["Styling", "Performance optimization", "State", "Props"], correctAnswer: 1, explanation: "Keys improve diffing.", type: "conceptual" },

  { id: 30, question: "What happens if key changes?", options: ["Re-render", "Component remount", "State update", "Nothing"], correctAnswer: 1, explanation: "React treats as new element.", type: "mcq" },

  { id: 31, question: "Which hook is best for caching API calls?", options: ["useEffect", "useMemo", "useState", "useRef"], correctAnswer: 1, explanation: "useMemo can cache results.", type: "mcq" },

  { id: 32, question: "What is Suspense for data fetching?", options: ["Experimental feature", "Stable feature", "Deprecated", "Hook"], correctAnswer: 0, explanation: "Still experimental.", type: "conceptual" },

  { id: 33, question: "What is server components?", options: ["Run on client", "Run on server", "Hook", "API"], correctAnswer: 1, explanation: "Improves performance by server rendering.", type: "conceptual" },

  { id: 34, question: "What is tree shaking?", options: ["Removing unused code", "Adding code", "Debugging", "Bundling"], correctAnswer: 0, explanation: "Optimizes bundle size.", type: "conceptual" },

  { id: 35, question: "Which tool bundles React apps?", options: ["Webpack", "Babel", "NPM", "Node"], correctAnswer: 0, explanation: "Webpack bundles modules.", type: "mcq" },

  { id: 36, question: "Which tool transpiles JSX?", options: ["Webpack", "Babel", "Node", "NPM"], correctAnswer: 1, explanation: "Babel converts JSX to JS.", type: "mcq" },

  { id: 37, question: "What is memoization?", options: ["Caching results", "Deleting state", "Updating DOM", "Rendering"], correctAnswer: 0, explanation: "Improves performance.", type: "conceptual" },

  { id: 38, question: "Which hook helps memoization?", options: ["useMemo", "useEffect", "useState", "useRef"], correctAnswer: 0, explanation: "useMemo caches values.", type: "mcq" },

  { id: 39, question: "Which hook handles large lists optimization?", options: ["useVirtual", "useMemo", "windowing", "Both b & c"], correctAnswer: 3, explanation: "Windowing improves performance.", type: "conceptual" },

  { id: 40, question: "What is windowing?", options: ["Rendering subset of items", "Full render", "Lazy load", "Scroll"], correctAnswer: 0, explanation: "Renders visible items only.", type: "conceptual" },

  { id: 41, question: "Which library helps windowing?", options: ["react-window", "react-grid", "react-lazy", "react-load"], correctAnswer: 0, explanation: "react-window optimizes lists.", type: "mcq" },

  { id: 42, question: "What is hydration mismatch?", options: ["SSR mismatch", "DOM mismatch", "State mismatch", "Hook error"], correctAnswer: 0, explanation: "Mismatch between server/client.", type: "conceptual" },

  { id: 43, question: "Which hook avoids unnecessary renders?", options: ["useMemo", "useEffect", "useState", "useRef"], correctAnswer: 0, explanation: "Memoization prevents re-renders.", type: "mcq" },

  { id: 44, question: "What is dependency array?", options: ["State list", "Trigger list for hooks", "Props list", "Function list"], correctAnswer: 1, explanation: "Controls hook execution.", type: "conceptual" },

  { id: 45, question: "What happens if dependency changes?", options: ["Re-render", "Hook re-run", "State update", "All of the above"], correctAnswer: 3, explanation: "Triggers updates and effects.", type: "mcq" },

  { id: 46, question: "What is SSR?", options: ["Server-side rendering", "State system", "Routing system", "Hook"], correctAnswer: 0, explanation: "HTML generated on server.", type: "conceptual" },

  { id: 47, question: "What is CSR?", options: ["Client-side rendering", "Component rendering", "State rendering", "Server rendering"], correctAnswer: 0, explanation: "Rendered in browser.", type: "conceptual" },

  { id: 48, question: "Which framework supports SSR for React?", options: ["Next.js", "Angular", "Vue", "Node"], correctAnswer: 0, explanation: "Next.js enables SSR.", type: "mcq" },

  { id: 49, question: "What is hydration in SSR?", options: ["Attach events", "Load data", "Render DOM", "Update state"], correctAnswer: 0, explanation: "Attaches React to HTML.", type: "conceptual" },

  { id: 50, question: "Which hook handles async logic best?", options: ["useEffect", "useMemo", "useState", "useRef"], correctAnswer: 0, explanation: "useEffect handles async tasks.", type: "mcq" }
],
};
