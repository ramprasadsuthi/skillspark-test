import { type Question } from "../questionUtils";

export const javaScriptQuestions: Record<string, Question[]> = {
 "JavaScript-Beginner": [
  { id: 1, question: "What is JavaScript primarily used for?", options: ["Styling web pages", "Structuring web pages", "Adding interactivity to web pages", "Database management"], correctAnswer: 2, explanation: "JavaScript is used to make web pages interactive.", type: "conceptual" },

  { id: 2, question: "Which keyword is used to declare a variable?", options: ["int", "var", "define", "let"], correctAnswer: 1, explanation: "var is used to declare variables in JavaScript.", type: "mcq" },

  { id: 3, question: "Which symbol is used for comments in JavaScript (single-line)?", options: ["<!-- -->", "//", "#", "/* */"], correctAnswer: 1, explanation: "// is used for single-line comments.", type: "mcq" },

  { id: 4, question: "Which method is used to display output in console?", options: ["print()", "log()", "console.log()", "display()"], correctAnswer: 2, explanation: "console.log() prints output to console.", type: "mcq" },

  { id: 5, question: "Which data type is used for text?", options: ["number", "string", "boolean", "object"], correctAnswer: 1, explanation: "Strings are used for text data.", type: "mcq" },

  { id: 6, question: "Which operator is used for assignment?", options: ["==", "=", "===", "!="], correctAnswer: 1, explanation: "'=' assigns value.", type: "mcq" },

  { id: 7, question: "Which keyword declares block-scoped variable?", options: ["var", "const", "let", "define"], correctAnswer: 2, explanation: "let is block-scoped.", type: "conceptual" },

  { id: 8, question: "Which keyword declares constant variable?", options: ["var", "let", "const", "fixed"], correctAnswer: 2, explanation: "const defines constant values.", type: "mcq" },

  { id: 9, question: "What will typeof 'Hello' return?", options: ["text", "string", "object", "char"], correctAnswer: 1, explanation: "typeof 'Hello' is string.", type: "mcq" },

  { id: 10, question: "Which operator checks both value and type?", options: ["==", "!=", "===", "="], correctAnswer: 2, explanation: "=== checks strict equality.", type: "mcq" },

  { id: 11, question: "Which function is used to show alert box?", options: ["alert()", "prompt()", "confirm()", "msg()"], correctAnswer: 0, explanation: "alert() shows popup message.", type: "mcq" },

  { id: 12, question: "Which function takes user input?", options: ["alert()", "prompt()", "input()", "read()"], correctAnswer: 1, explanation: "prompt() takes input.", type: "mcq" },

  { id: 13, question: "Which function shows confirmation dialog?", options: ["confirm()", "alert()", "prompt()", "verify()"], correctAnswer: 0, explanation: "confirm() shows OK/Cancel.", type: "mcq" },

  { id: 14, question: "Which loop runs at least once?", options: ["for", "while", "do...while", "foreach"], correctAnswer: 2, explanation: "do...while executes at least once.", type: "mcq" },

  { id: 15, question: "Which loop is used when number of iterations is known?", options: ["while", "for", "do...while", "loop"], correctAnswer: 1, explanation: "for loop is used for known iterations.", type: "mcq" },

  { id: 16, question: "Which keyword is used to define function?", options: ["func", "function", "define", "method"], correctAnswer: 1, explanation: "function defines function.", type: "mcq" },

  { id: 17, question: "How do you call a function named test?", options: ["call test()", "test()", "run test()", "execute test()"], correctAnswer: 1, explanation: "Function is called using test().", type: "mcq" },

  { id: 18, question: "Which object represents browser window?", options: ["document", "window", "screen", "navigator"], correctAnswer: 1, explanation: "window is global object.", type: "conceptual" },

  { id: 19, question: "Which object represents HTML document?", options: ["window", "document", "html", "page"], correctAnswer: 1, explanation: "document represents DOM.", type: "conceptual" },

  { id: 20, question: "Which method selects element by ID?", options: ["getElement()", "getElementById()", "querySelector()", "getById()"], correctAnswer: 1, explanation: "getElementById selects by ID.", type: "mcq" },

  { id: 21, question: "Which method selects elements by class?", options: ["getElementsByClassName()", "getClass()", "queryClass()", "selectClass()"], correctAnswer: 0, explanation: "getElementsByClassName selects by class.", type: "mcq" },

  { id: 22, question: "Which method selects first matching element?", options: ["querySelector()", "getElementById()", "getElements()", "selectOne()"], correctAnswer: 0, explanation: "querySelector selects first match.", type: "mcq" },

  { id: 23, question: "Which event occurs when user clicks?", options: ["onhover", "onchange", "onclick", "onload"], correctAnswer: 2, explanation: "onclick triggers on click.", type: "mcq" },

  { id: 24, question: "Which event occurs when page loads?", options: ["onstart", "onready", "onload", "onopen"], correctAnswer: 2, explanation: "onload triggers after page load.", type: "mcq" },

  { id: 25, question: "Which operator is used for addition?", options: ["+", "-", "*", "/"], correctAnswer: 0, explanation: "+ adds values.", type: "mcq" },

  { id: 26, question: "Which method converts string to number?", options: ["Number()", "parseInt()", "parseFloat()", "All of the above"], correctAnswer: 3, explanation: "All convert string to number.", type: "mcq" },

  { id: 27, question: "Which keyword stops loop?", options: ["stop", "break", "exit", "return"], correctAnswer: 1, explanation: "break exits loop.", type: "mcq" },

  { id: 28, question: "Which keyword skips iteration?", options: ["skip", "continue", "pass", "next"], correctAnswer: 1, explanation: "continue skips iteration.", type: "mcq" },

  { id: 29, question: "Which symbol is used for multi-line comments?", options: ["//", "/* */", "#", "<!-- -->"], correctAnswer: 1, explanation: "/* */ is multi-line comment.", type: "mcq" },

  { id: 30, question: "Which array method adds element at end?", options: ["push()", "pop()", "shift()", "unshift()"], correctAnswer: 0, explanation: "push adds element.", type: "mcq" },

  { id: 31, question: "Which array method removes last element?", options: ["pop()", "push()", "shift()", "remove()"], correctAnswer: 0, explanation: "pop removes last element.", type: "mcq" },

  { id: 32, question: "Which array method removes first element?", options: ["shift()", "pop()", "push()", "unshift()"], correctAnswer: 0, explanation: "shift removes first element.", type: "mcq" },

  { id: 33, question: "Which array method adds element at beginning?", options: ["push()", "shift()", "unshift()", "add()"], correctAnswer: 2, explanation: "unshift adds at beginning.", type: "mcq" },

  { id: 34, question: "Which data type is true/false?", options: ["boolean", "string", "number", "object"], correctAnswer: 0, explanation: "Boolean holds true/false.", type: "mcq" },

  { id: 35, question: "Which keyword returns value from function?", options: ["return", "get", "output", "send"], correctAnswer: 0, explanation: "return sends value.", type: "mcq" },

  { id: 36, question: "Which operator is used for logical AND?", options: ["&&", "||", "!", "&"], correctAnswer: 0, explanation: "&& is AND operator.", type: "mcq" },

  { id: 37, question: "Which operator is used for logical OR?", options: ["||", "&&", "!", "|"], correctAnswer: 0, explanation: "|| is OR operator.", type: "mcq" },

  { id: 38, question: "Which operator is used for NOT?", options: ["!", "not", "~", "!="], correctAnswer: 0, explanation: "! is NOT operator.", type: "mcq" },

  { id: 39, question: "Which method joins array into string?", options: ["join()", "concat()", "toString()", "merge()"], correctAnswer: 0, explanation: "join() converts array to string.", type: "mcq" },

  { id: 40, question: "Which method converts string to uppercase?", options: ["toUpperCase()", "upper()", "capitalize()", "toCaps()"], correctAnswer: 0, explanation: "toUpperCase() converts string.", type: "mcq" },

  { id: 41, question: "Which property finds length of string?", options: ["length()", "size()", "count()", "length"], correctAnswer: 3, explanation: "length property gives size.", type: "mcq" },

  { id: 42, question: "Which keyword is used for conditional statement?", options: ["if", "when", "check", "condition"], correctAnswer: 0, explanation: "if is used for condition.", type: "mcq" },

  { id: 43, question: "Which statement handles multiple conditions?", options: ["if", "switch", "loop", "case"], correctAnswer: 1, explanation: "switch handles multiple cases.", type: "mcq" },

  { id: 44, question: "Which symbol is used for template literals?", options: ["''", "\"\"", "` `", "<>"], correctAnswer: 2, explanation: "Backticks are used.", type: "mcq" },

  { id: 45, question: "Which method delays execution?", options: ["setTimeout()", "delay()", "wait()", "pause()"], correctAnswer: 0, explanation: "setTimeout delays execution.", type: "mcq" },

  { id: 46, question: "Which method repeats execution?", options: ["setInterval()", "repeat()", "loop()", "cycle()"], correctAnswer: 0, explanation: "setInterval repeats execution.", type: "mcq" },

  { id: 47, question: "Which keyword defines object?", options: ["object", "{}", "new", "class"], correctAnswer: 1, explanation: "{} defines object literal.", type: "mcq" },

  { id: 48, question: "Which keyword refers to current object?", options: ["this", "self", "current", "object"], correctAnswer: 0, explanation: "this refers to current object.", type: "mcq" },

  { id: 49, question: "Which method parses JSON string?", options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "toJSON()"], correctAnswer: 0, explanation: "JSON.parse converts string to object.", type: "mcq" },

  { id: 50, question: "Which method converts object to JSON string?", options: ["JSON.parse()", "JSON.stringify()", "toJSON()", "convertJSON()"], correctAnswer: 1, explanation: "JSON.stringify converts object to string.", type: "mcq" }
],
 "JavaScript-Intermediate": [
  { id: 1, question: "What is the output of: typeof null?", options: ["null", "object", "undefined", "number"], correctAnswer: 1, explanation: "typeof null returns 'object' (known JS bug).", type: "mcq" },

  { id: 2, question: "What is closure in JavaScript?", options: ["Function inside loop", "Function with global scope", "Function with access to its outer scope", "Recursive function"], correctAnswer: 2, explanation: "Closure allows access to outer scope variables.", type: "conceptual" },

  { id: 3, question: "Which method is used to iterate arrays?", options: ["map()", "loop()", "iterate()", "each()"], correctAnswer: 0, explanation: "map() iterates and returns new array.", type: "mcq" },

  { id: 4, question: "Which method filters array elements?", options: ["find()", "filter()", "map()", "reduce()"], correctAnswer: 1, explanation: "filter() returns matching elements.", type: "mcq" },

  { id: 5, question: "Which method reduces array to single value?", options: ["map()", "reduce()", "filter()", "find()"], correctAnswer: 1, explanation: "reduce() accumulates values.", type: "mcq" },

  { id: 6, question: "What is 'this' in global scope?", options: ["window object", "undefined", "document", "null"], correctAnswer: 0, explanation: "In browsers, this refers to window.", type: "conceptual" },

  { id: 7, question: "Which keyword creates block scope?", options: ["var", "let", "function", "global"], correctAnswer: 1, explanation: "let creates block scope.", type: "mcq" },

  { id: 8, question: "Which keyword cannot be reassigned?", options: ["var", "let", "const", "define"], correctAnswer: 2, explanation: "const cannot be reassigned.", type: "mcq" },

  { id: 9, question: "What is hoisting?", options: ["Variable deletion", "Variable declaration moved to top", "Function execution", "Memory allocation"], correctAnswer: 1, explanation: "JS moves declarations to top.", type: "conceptual" },

  { id: 10, question: "Which function converts JSON to object?", options: ["JSON.stringify()", "JSON.parse()", "toObject()", "convert()"], correctAnswer: 1, explanation: "JSON.parse converts string to object.", type: "mcq" },

  { id: 11, question: "Which function converts object to JSON?", options: ["JSON.parse()", "JSON.stringify()", "toJSON()", "convertJSON()"], correctAnswer: 1, explanation: "JSON.stringify converts object to string.", type: "mcq" },

  { id: 12, question: "What is event bubbling?", options: ["Event stops", "Event moves upward", "Event repeats", "Event cancels"], correctAnswer: 1, explanation: "Event propagates to parent.", type: "conceptual" },

  { id: 13, question: "Which method stops event propagation?", options: ["stop()", "preventDefault()", "stopPropagation()", "cancel()"], correctAnswer: 2, explanation: "stopPropagation stops bubbling.", type: "mcq" },

  { id: 14, question: "What does preventDefault() do?", options: ["Stops event", "Stops default browser action", "Stops propagation", "Deletes event"], correctAnswer: 1, explanation: "It prevents default behavior.", type: "conceptual" },

  { id: 15, question: "Which keyword defines class?", options: ["function", "object", "class", "define"], correctAnswer: 2, explanation: "class defines blueprint.", type: "mcq" },

  { id: 16, question: "Which method is used to add event listener?", options: ["addEvent()", "attachEvent()", "addEventListener()", "onEvent()"], correctAnswer: 2, explanation: "addEventListener attaches events.", type: "mcq" },

  { id: 17, question: "What is arrow function syntax?", options: ["function() => {}", "() => {}", "=> function()", "-> {}"], correctAnswer: 1, explanation: "Arrow functions use => syntax.", type: "mcq" },

  { id: 18, question: "Difference between == and ===?", options: ["Same", "=== checks type also", "== checks type", "=== slower"], correctAnswer: 1, explanation: "=== checks value and type.", type: "conceptual" },

  { id: 19, question: "Which method finds first matching element?", options: ["filter()", "map()", "find()", "reduce()"], correctAnswer: 2, explanation: "find returns first match.", type: "mcq" },

  { id: 20, question: "Which method checks condition on array?", options: ["every()", "map()", "reduce()", "join()"], correctAnswer: 0, explanation: "every checks all elements.", type: "mcq" },

  { id: 21, question: "Which method checks at least one condition?", options: ["some()", "every()", "filter()", "find()"], correctAnswer: 0, explanation: "some checks any element.", type: "mcq" },

  { id: 22, question: "What is spread operator?", options: ["...", "++", "--", "**"], correctAnswer: 0, explanation: "Spread operator expands values.", type: "mcq" },

  { id: 23, question: "What is destructuring?", options: ["Breaking arrays/objects", "Deleting values", "Looping", "Sorting"], correctAnswer: 0, explanation: "Extract values easily.", type: "conceptual" },

  { id: 24, question: "Which keyword is used for promises?", options: ["async", "promise", "new Promise", "await"], correctAnswer: 2, explanation: "new Promise creates promise.", type: "mcq" },

  { id: 25, question: "Which method handles promise success?", options: ["then()", "catch()", "finally()", "resolve()"], correctAnswer: 0, explanation: "then handles success.", type: "mcq" },

  { id: 26, question: "Which method handles errors in promise?", options: ["catch()", "then()", "error()", "fail()"], correctAnswer: 0, explanation: "catch handles errors.", type: "mcq" },

  { id: 27, question: "Which keyword waits for promise?", options: ["wait", "await", "pause", "delay"], correctAnswer: 1, explanation: "await pauses execution.", type: "mcq" },

  { id: 28, question: "Which keyword declares async function?", options: ["async", "await", "promise", "function"], correctAnswer: 0, explanation: "async enables await.", type: "mcq" },

  { id: 29, question: "Which storage persists data permanently?", options: ["sessionStorage", "localStorage", "cookie", "memory"], correctAnswer: 1, explanation: "localStorage persists data.", type: "mcq" },

  { id: 30, question: "Which storage clears on tab close?", options: ["localStorage", "sessionStorage", "cookie", "cache"], correctAnswer: 1, explanation: "sessionStorage clears on tab close.", type: "mcq" },

  { id: 31, question: "Which method converts string to array?", options: ["split()", "slice()", "splice()", "join()"], correctAnswer: 0, explanation: "split creates array.", type: "mcq" },

  { id: 32, question: "Which method extracts part of array?", options: ["slice()", "splice()", "split()", "cut()"], correctAnswer: 0, explanation: "slice extracts portion.", type: "mcq" },

  { id: 33, question: "Which method modifies array?", options: ["slice()", "splice()", "map()", "filter()"], correctAnswer: 1, explanation: "splice modifies array.", type: "mcq" },

  { id: 34, question: "What is NaN?", options: ["Null value", "Not a Number", "Undefined value", "Zero"], correctAnswer: 1, explanation: "NaN means invalid number.", type: "conceptual" },

  { id: 35, question: "Which function checks NaN?", options: ["isNaN()", "checkNaN()", "NaN()", "validate()"], correctAnswer: 0, explanation: "isNaN checks NaN.", type: "mcq" },

  { id: 36, question: "Which operator is exponent?", options: ["^", "**", "*", "//"], correctAnswer: 1, explanation: "** is exponent operator.", type: "mcq" },

  { id: 37, question: "Which method trims spaces?", options: ["trim()", "strip()", "remove()", "cut()"], correctAnswer: 0, explanation: "trim removes whitespace.", type: "mcq" },

  { id: 38, question: "Which method merges arrays?", options: ["concat()", "join()", "merge()", "combine()"], correctAnswer: 0, explanation: "concat merges arrays.", type: "mcq" },

  { id: 39, question: "Which loop iterates object keys?", options: ["for", "forEach", "for...in", "while"], correctAnswer: 2, explanation: "for...in loops keys.", type: "mcq" },

  { id: 40, question: "Which loop iterates iterable values?", options: ["for...of", "for...in", "while", "loop"], correctAnswer: 0, explanation: "for...of loops values.", type: "mcq" },

  { id: 41, question: "Which method checks property existence?", options: ["hasOwnProperty()", "exists()", "contains()", "check()"], correctAnswer: 0, explanation: "hasOwnProperty checks key.", type: "mcq" },

  { id: 42, question: "Which keyword deletes object property?", options: ["remove", "delete", "clear", "unset"], correctAnswer: 1, explanation: "delete removes property.", type: "mcq" },

  { id: 43, question: "What is DOM?", options: ["Database model", "Document Object Model", "Data Object Map", "Display Object Model"], correctAnswer: 1, explanation: "DOM represents HTML structure.", type: "conceptual" },

  { id: 44, question: "Which method creates element?", options: ["createElement()", "newElement()", "makeElement()", "buildElement()"], correctAnswer: 0, explanation: "createElement creates node.", type: "mcq" },

  { id: 45, question: "Which method appends element?", options: ["appendChild()", "addChild()", "insert()", "push()"], correctAnswer: 0, explanation: "appendChild adds element.", type: "mcq" },

  { id: 46, question: "Which method removes element?", options: ["removeChild()", "delete()", "clear()", "remove()"], correctAnswer: 0, explanation: "removeChild deletes node.", type: "mcq" },

  { id: 47, question: "Which method fetches API data?", options: ["fetch()", "get()", "ajax()", "request()"], correctAnswer: 0, explanation: "fetch retrieves data.", type: "mcq" },

  { id: 48, question: "Which keyword handles errors?", options: ["try...catch", "if...else", "switch", "error"], correctAnswer: 0, explanation: "try...catch handles exceptions.", type: "mcq" },

  { id: 49, question: "Which method converts number to string?", options: ["toString()", "parseInt()", "Number()", "string()"], correctAnswer: 0, explanation: "toString converts number.", type: "mcq" },

  { id: 50, question: "Which method rounds number?", options: ["Math.round()", "Math.floor()", "Math.ceil()", "All of the above"], correctAnswer: 3, explanation: "All round numbers differently.", type: "mcq" }
],
  "JavaScript-Advanced": [
  { id: 1, question: "What is the output of: [] == ![] ?", options: ["true", "false", "undefined", "error"], correctAnswer: 0, explanation: "[] == ![] becomes [] == false → true due to type coercion.", type: "mcq" },

  { id: 2, question: "What is a promise in JavaScript?", options: ["Synchronous function", "Object representing async operation", "Loop", "Event"], correctAnswer: 1, explanation: "Promise handles async operations.", type: "conceptual" },

  { id: 3, question: "What is microtask queue?", options: ["Queue for events", "Queue for promises", "Queue for loops", "Queue for DOM"], correctAnswer: 1, explanation: "Promises use microtask queue.", type: "conceptual" },

  { id: 4, question: "What is event loop?", options: ["Loop in code", "Handles async callbacks", "Function execution", "Thread manager"], correctAnswer: 1, explanation: "Event loop manages async tasks.", type: "conceptual" },

  { id: 5, question: "Which method clones object deeply?", options: ["Object.assign()", "JSON.parse(JSON.stringify())", "spread operator", "copy()"], correctAnswer: 1, explanation: "JSON method creates deep copy.", type: "mcq" },

  { id: 6, question: "What is currying?", options: ["Function chaining", "Breaking function into smaller functions", "Looping", "Recursion"], correctAnswer: 1, explanation: "Currying transforms function arguments.", type: "conceptual" },

  { id: 7, question: "What is debounce?", options: ["Delay function execution", "Repeat function", "Cancel function", "Execute immediately"], correctAnswer: 0, explanation: "Debounce delays execution.", type: "conceptual" },

  { id: 8, question: "What is throttle?", options: ["Delay execution", "Limit execution rate", "Cancel function", "Repeat function"], correctAnswer: 1, explanation: "Throttle limits frequency.", type: "conceptual" },

  { id: 9, question: "What is prototype in JS?", options: ["Class instance", "Object inheritance mechanism", "Function type", "Array"], correctAnswer: 1, explanation: "Prototype enables inheritance.", type: "conceptual" },

  { id: 10, question: "What is prototypal inheritance?", options: ["Class inheritance", "Object inherits from another object", "Function inheritance", "Loop inheritance"], correctAnswer: 1, explanation: "Objects inherit via prototype.", type: "conceptual" },

  { id: 11, question: "What is strict mode?", options: ["Loose mode", "Enforces stricter parsing", "Debug mode", "Error mode"], correctAnswer: 1, explanation: "'use strict' enforces strict rules.", type: "conceptual" },

  { id: 12, question: "Which keyword creates private class field?", options: ["private", "#", "_", "hidden"], correctAnswer: 1, explanation: "# defines private fields.", type: "mcq" },

  { id: 13, question: "What is Symbol in JS?", options: ["String", "Unique identifier", "Number", "Object"], correctAnswer: 1, explanation: "Symbol creates unique values.", type: "conceptual" },

  { id: 14, question: "Which method schedules microtask?", options: ["setTimeout()", "queueMicrotask()", "setInterval()", "delay()"], correctAnswer: 1, explanation: "queueMicrotask schedules microtask.", type: "mcq" },

  { id: 15, question: "What is call stack?", options: ["Memory area", "Execution stack", "Loop", "Queue"], correctAnswer: 1, explanation: "Call stack tracks function calls.", type: "conceptual" },

  { id: 16, question: "What is tail call optimization?", options: ["Recursive optimization", "Looping", "Async call", "Error handling"], correctAnswer: 0, explanation: "Optimizes recursion calls.", type: "conceptual" },

  { id: 17, question: "What is generator function?", options: ["Function returns multiple values", "Function pauses execution", "Loop", "Promise"], correctAnswer: 1, explanation: "Generators use yield.", type: "conceptual" },

  { id: 18, question: "Which symbol defines generator?", options: ["*", "=>", "#", "$"], correctAnswer: 0, explanation: "function* defines generator.", type: "mcq" },

  { id: 19, question: "What is yield keyword?", options: ["Return value", "Pause function execution", "Loop", "Error"], correctAnswer: 1, explanation: "yield pauses generator.", type: "conceptual" },

  { id: 20, question: "What is Proxy in JS?", options: ["Object wrapper", "Intercept operations", "Array", "Function"], correctAnswer: 1, explanation: "Proxy intercepts operations.", type: "conceptual" },

  { id: 21, question: "What is Reflect API?", options: ["DOM API", "Object operation methods", "Loop API", "Event API"], correctAnswer: 1, explanation: "Reflect provides object methods.", type: "conceptual" },

  { id: 22, question: "Which method freezes object?", options: ["Object.freeze()", "Object.lock()", "freeze()", "seal()"], correctAnswer: 0, explanation: "freeze prevents modification.", type: "mcq" },

  { id: 23, question: "Which method prevents adding properties?", options: ["freeze()", "seal()", "preventExtensions()", "lock()"], correctAnswer: 2, explanation: "preventExtensions stops adding.", type: "mcq" },

  { id: 24, question: "What is WeakMap?", options: ["Map with weak references", "Strong map", "Array", "Object"], correctAnswer: 0, explanation: "WeakMap holds weak references.", type: "conceptual" },

  { id: 25, question: "What is WeakSet?", options: ["Set with weak refs", "Strong set", "Array", "Object"], correctAnswer: 0, explanation: "WeakSet stores weak refs.", type: "conceptual" },

  { id: 26, question: "What is module in JS?", options: ["File", "Reusable code unit", "Function", "Object"], correctAnswer: 1, explanation: "Modules organize code.", type: "conceptual" },

  { id: 27, question: "Which keyword exports module?", options: ["export", "send", "share", "module"], correctAnswer: 0, explanation: "export shares module.", type: "mcq" },

  { id: 28, question: "Which keyword imports module?", options: ["include", "import", "require", "use"], correctAnswer: 1, explanation: "import loads module.", type: "mcq" },

  { id: 29, question: "What is dynamic import?", options: ["Static import", "Import at runtime", "Loop import", "Error"], correctAnswer: 1, explanation: "Dynamic import loads modules on demand.", type: "conceptual" },

  { id: 30, question: "What is optional chaining?", options: ["?.", ".", "??", ":"], correctAnswer: 0, explanation: "?. avoids errors on null/undefined.", type: "mcq" },

  { id: 31, question: "What is nullish coalescing?", options: ["??", "||", "&&", "!"], correctAnswer: 0, explanation: "?? returns right if null/undefined.", type: "mcq" },

  { id: 32, question: "What is BigInt?", options: ["Large number type", "String", "Object", "Array"], correctAnswer: 0, explanation: "BigInt handles large integers.", type: "conceptual" },

  { id: 33, question: "Which method converts string to BigInt?", options: ["BigInt()", "parseInt()", "Number()", "toBigInt()"], correctAnswer: 0, explanation: "BigInt() converts value.", type: "mcq" },

  { id: 34, question: "What is async/await?", options: ["Sync code", "Simplified promises", "Loop", "Event"], correctAnswer: 1, explanation: "async/await simplifies async.", type: "conceptual" },

  { id: 35, question: "What happens if await is used outside of an async function or a module?", options: ["Works", "Error", "Undefined", "Ignored"], correctAnswer: 1, explanation: "await traditionally must be inside an async function, though top-level await is now supported in modules.", type: "mcq" },

  { id: 36, question: "What is IIFE?", options: ["Function executed immediately", "Loop", "Event", "Class"], correctAnswer: 0, explanation: "IIFE runs instantly.", type: "conceptual" },

  { id: 37, question: "What is memoization?", options: ["Caching results", "Looping", "Sorting", "Filtering"], correctAnswer: 0, explanation: "Memoization improves performance.", type: "conceptual" },

  { id: 38, question: "What is Web Worker?", options: ["Background thread", "DOM thread", "Event loop", "API"], correctAnswer: 0, explanation: "Web Workers run in background.", type: "conceptual" },

  { id: 39, question: "What is Service Worker?", options: ["Background script", "UI thread", "Loop", "Function"], correctAnswer: 0, explanation: "Service Worker enables offline apps.", type: "conceptual" },

  { id: 40, question: "What is tree shaking?", options: ["Removing unused code", "Adding code", "Debugging", "Testing"], correctAnswer: 0, explanation: "Tree shaking optimizes bundle.", type: "conceptual" },

  { id: 41, question: "What is polyfill?", options: ["Browser feature support", "Library", "Framework", "API"], correctAnswer: 0, explanation: "Polyfill adds missing features.", type: "conceptual" },

  { id: 42, question: "What is transpiling?", options: ["Converting code", "Running code", "Debugging", "Testing"], correctAnswer: 0, explanation: "Transpiling converts ES6 to ES5.", type: "conceptual" },

  { id: 43, question: "What is bundling?", options: ["Combining files", "Splitting files", "Deleting files", "Compressing files"], correctAnswer: 0, explanation: "Bundling merges files.", type: "conceptual" },

  { id: 44, question: "What is lazy loading?", options: ["Load later", "Load early", "Load always", "Load twice"], correctAnswer: 0, explanation: "Lazy loading loads when needed.", type: "conceptual" },

  { id: 45, question: "What is Intersection Observer?", options: ["API for visibility", "Loop", "Function", "Event"], correctAnswer: 0, explanation: "Observes element visibility.", type: "conceptual" },

  { id: 46, question: "What is requestAnimationFrame?", options: ["Animation API", "Loop", "Delay", "Timeout"], correctAnswer: 0, explanation: "Optimizes animations.", type: "conceptual" },

  { id: 47, question: "What is MutationObserver?", options: ["DOM change observer", "Event loop", "API", "Function"], correctAnswer: 0, explanation: "Detects DOM changes.", type: "conceptual" },

  { id: 48, question: "What is Event Delegation?", options: ["Handling events at parent", "Child events", "Loop", "Function"], correctAnswer: 0, explanation: "Parent handles child events.", type: "conceptual" },

  { id: 49, question: "What is import.meta?", options: ["Module metadata", "Function", "Object", "Array"], correctAnswer: 0, explanation: "import.meta gives module info.", type: "conceptual" },

  { id: 50, question: "What is top-level await?", options: ["Await outside async", "Await in loop", "Await in function", "Await in class"], correctAnswer: 0, explanation: "Top-level await works in modules.", type: "conceptual" }
],
};
