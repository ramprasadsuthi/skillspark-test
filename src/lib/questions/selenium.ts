import { type Question } from "../questionUtils";

export const seleniumQuestions: Record<string, Question[]> = {
  "Selenium-Beginner": [
{
  id: 1,
  question: "What is Selenium?",
  options: [
    "A programming language",
    "A web browser",
    "An automation testing framework",
    "A database management system"
  ],
  correctAnswer: 2,
  explanation: "Selenium is an automation testing framework.",
  type: "mcq"
},
{
  id: 2,
  question: "Which component is used to control browser?",
  options: [
    "Selenium Grid",
    "Selenium IDE",
    "Selenium WebDriver",
    "TestNG"
  ],
  correctAnswer: 2,
  explanation: "WebDriver controls browsers.",
  type: "mcq"
},
{
  id: 3,
  question: "Which method opens URL?",
  options: [
    "driver.open()",
    "driver.start()",
    "driver.get()",
    "driver.load()"
  ],
  correctAnswer: 2,
  explanation: "get() opens webpage.",
  type: "mcq"
},
{
  id: 4,
  question: "Which method closes all browser windows?",
  options: [
    "driver.close()",
    "driver.quit()",
    "driver.exit()",
    "driver.stop()"
  ],
  correctAnswer: 1,
  explanation: "quit() closes all windows.",
  type: "mcq"
},
{
  id: 5,
  question: "Which locator is fastest?",
  options: [
    "XPath",
    "CSS",
    "id",
    "class"
  ],
  correctAnswer: 2,
  explanation: "id is fastest.",
  type: "mcq"
},

{
  id: 6,
  question: "Which method types text?",
  options: [
    "write()",
    "sendKeys()",
    "type()",
    "input()"
  ],
  correctAnswer: 1,
  type: "mcq",
  explanation: "sendKeys() types text."
},
{
  id: 7,
  question: "Which method clicks element?",
  options: [
    "press()",
    "click()",
    "tap()",
    "submit()"
  ],
  correctAnswer: 1,
  type: "mcq",
  explanation: "click() used."
},
{
  id: 8,
  question: "How to get page title?",
  options: [
    "getTitle()",
    "title()",
    "fetchTitle()",
    "pageTitle()"
  ],
  correctAnswer: 0,
  type: "mcq",
  explanation: "getTitle() returns title."
},
{
  id: 9,
  question: "Which locator uses CSS?",
  options: [
    "XPath",
    "cssSelector",
    "id",
    "name"
  ],
  correctAnswer: 1,
  type: "mcq",
  explanation: "CSS selector used."
},
{
  id: 10,
  question: "Which locator uses XML path?",
  options: [
    "XPath",
    "CSS",
    "id",
    "class"
  ],
  correctAnswer: 0,
  type: "mcq",
  explanation: "XPath locates elements."
},

{
  id: 11,
  question: "Which method clears text?",
  options: [
    "remove()",
    "clear()",
    "delete()",
    "reset()"
  ],
  correctAnswer: 1,
  type: "mcq",
  explanation: "clear() removes text."
},
{
  id: 12,
  question: "Which method gets current URL?",
  options: [
    "getCurrentUrl()",
    "url()",
    "getUrl()",
    "fetchUrl()"
  ],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Returns URL."
},
{
  id: 13,
  question: "Which method gets page source?",
  options: [
    "getSource()",
    "pageSource()",
    "getPageSource()",
    "fetchSource()"
  ],
  correctAnswer: 2,
  type: "mcq",
  explanation: "Returns HTML."
},
{
  id: 14,
  question: "Which locator uses class?",
  options: [
    "className",
    "id",
    "name",
    "tagName"
  ],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Uses class attribute."
},
{
  id: 15,
  question: "Which locator uses tag?",
  options: [
    "tagName",
    "id",
    "class",
    "name"
  ],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Uses tag."
},

{
  id: 16,
  question: "Which method checks visibility?",
  options: [
    "visible()",
    "isDisplayed()",
    "show()",
    "check()"
  ],
  correctAnswer: 1,
  type: "mcq",
  explanation: "Checks visible."
},
{
  id: 17,
  question: "Which method checks enabled?",
  options: [
    "enabled()",
    "isEnabled()",
    "checkEnabled()",
    "active()"
  ],
  correctAnswer: 1,
  type: "mcq",
  explanation: "Checks enabled."
},
{
  id: 18,
  question: "Which method checks selection?",
  options: [
    "isChecked()",
    "isSelected()",
    "selected()",
    "check()"
  ],
  correctAnswer: 1,
  type: "mcq",
  explanation: "Checks selection."
},
{
  id: 19,
  question: "Which method finds element?",
  options: [
    "findElement()",
    "find()",
    "locate()",
    "search()"
  ],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Finds element."
},
{
  id: 20,
  question: "Which method finds multiple elements?",
  options: [
    "findElements()",
    "findAll()",
    "getElements()",
    "locateAll()"
  ],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Returns list."
},

// continuing...

{
  id: 21,
  question: "Which method refreshes page?",
  options: [
    "reload()",
    "navigate().refresh()",
    "refreshPage()",
    "reset()"
  ],
  correctAnswer: 1,
  type: "mcq",
  explanation: "Refresh page."
},
{
  id: 22,
  question: "Which method navigates back?",
  options: [
    "back()",
    "navigate().back()",
    "previous()",
    "goBack()"
  ],
  correctAnswer: 1,
  type: "mcq",
  explanation: "Goes back."
},
{
  id: 23,
  question: "Which method navigates forward?",
  options: [
    "forward()",
    "navigate().forward()",
    "next()",
    "goForward()"
  ],
  correctAnswer: 1,
  type: "mcq",
  explanation: "Goes forward."
},
{
  id: 24,
  question: "Which wait is global?",
  options: [
    "Explicit",
    "Implicit",
    "Thread",
    "None"
  ],
  correctAnswer: 1,
  type: "mcq",
  explanation: "Implicit is global."
},
{
  id: 25,
  question: "Which wait is conditional?",
  options: [
    "Implicit",
    "Explicit",
    "Thread",
    "None"
  ],
  correctAnswer: 1,
  type: "mcq",
  explanation: "Explicit wait."
},

// continue till 50 (shortened for readability)

{
  id: 26,
  question: "Which tool records scripts?",
  options: ["IDE","Grid","WebDriver","RC"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "IDE records scripts."
},
{
  id: 27,
  question: "Which supports parallel execution?",
  options: ["Grid","IDE","RC","Driver"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Grid runs parallel."
},
{
  id: 28,
  question: "Which browser supported?",
  options: ["Chrome","Firefox","Edge","All"],
  correctAnswer: 3,
  type: "mcq",
  explanation: "All supported."
},
{
  id: 29,
  question: "Which driver for Chrome?",
  options: ["ChromeDriver","EdgeDriver","SafariDriver","OperaDriver"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "ChromeDriver used."
},
{
  id: 30,
  question: "Which class handles dropdown?",
  options: ["Select","Action","Wait","Driver"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Select handles dropdown."
},

{
  id: 31,
  question: "Which method selects by text?",
  options: ["selectByVisibleText()","selectText()","choose()","pick()"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Selects by text."
},
{
  id: 32,
  question: "Which method selects by index?",
  options: ["selectByIndex()","indexSelect()","chooseIndex()","pickIndex()"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Selects index."
},
{
  id: 33,
  question: "Which class performs mouse actions?",
  options: ["Actions","Select","Driver","Wait"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Actions class."
},
{
  id: 34,
  question: "Which method hovers element?",
  options: ["hover()","moveToElement()","focus()","point()"],
  correctAnswer: 1,
  type: "mcq",
  explanation: "Hover action."
},
{
  id: 35,
  question: "Which method drag drop?",
  options: ["dragAndDrop()","drag()","drop()","move()"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Drag drop."
},

{
  id: 36,
  question: "Which handles alerts?",
  options: ["switchTo().alert()","alert()","popup()","handleAlert()"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Handles alert."
},
{
  id: 37,
  question: "Which accepts alert?",
  options: ["accept()","ok()","close()","submit()"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Accept alert."
},
{
  id: 38,
  question: "Which dismiss alert?",
  options: ["dismiss()","cancel()","reject()","close()"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Dismiss alert."
},
{
  id: 39,
  question: "Which gets alert text?",
  options: ["getText()","text()","fetch()","read()"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Gets text."
},
{
  id: 40,
  question: "Which switches frame?",
  options: ["switchTo().frame()","frameSwitch()","changeFrame()","goFrame()"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Switch frame."
},

{
  id: 41,
  question: "Which returns main page?",
  options: ["defaultContent()","main()","root()","reset()"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Back to main."
},
{
  id: 42,
  question: "Which gets window handle?",
  options: ["getWindowHandle()","window()","handle()","id()"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Gets current window."
},
{
  id: 43,
  question: "Which gets all windows?",
  options: ["getWindowHandles()","allWindows()","windows()","listWindows()"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Gets all."
},
{
  id: 44,
  question: "Which executes JS?",
  options: ["JavaScriptExecutor","Driver","Action","Select"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Executes JS."
},
{
  id: 45,
  question: "Which scrolls page?",
  options: ["window.scrollBy()","scroll()","moveScroll()","pageScroll()"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Scrolls page."
},

{
  id: 46,
  question: "Which testing tool integrates Selenium?",
  options: ["TestNG","Photoshop","Excel","Word"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "TestNG used."
},
{
  id: 47,
  question: "Which framework organizes UI elements?",
  options: ["POM","MVC","API","DB"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "POM used."
},
{
  id: 48,
  question: "Which locator partial match?",
  options: ["partialLinkText","id","name","class"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Partial match."
},
{
  id: 49,
  question: "Which locator uses link?",
  options: ["linkText","id","class","tag"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Link locator."
},
{
  id: 50,
  question: "Which method submits form?",
  options: ["submit()","send()","clickSubmit()","formSubmit()"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Submit form."
}
],

  "Selenium-Intermediate": [
  {
  id: 1,
  question: "What is the main difference between findElement() and findElements()?",
  options: [
    "findElement() returns one element, findElements() returns a list",
    "findElement() returns list, findElements() returns one",
    "Both return same result",
    "findElements() throws exception"
  ],
  correctAnswer: 0,
  explanation: "findElement returns single element, findElements returns list.",
  type: "conceptual"
},
{
  id: 2,
  question: "What happens if findElement() does not find an element?",
  options: [
    "Returns null",
    "Throws NoSuchElementException",
    "Refreshes page",
    "Returns empty list"
  ],
  correctAnswer: 1,
  explanation: "Throws exception if not found.",
  type: "conceptual"
},
{
  id: 3,
  question: "Which wait is better for dynamic elements?",
  options: [
    "Thread.sleep()",
    "Implicit wait",
    "Explicit wait",
    "No wait needed"
  ],
  correctAnswer: 2,
  explanation: "Explicit wait is best for dynamic elements.",
  type: "scenario"
},
{
  id: 4,
  question: "What is the purpose of driver.manage().timeouts().implicitlyWait()?",
  options: [
    "Set global wait for elements",
    "Close browser",
    "Navigate page",
    "Handle alerts"
  ],
  correctAnswer: 0,
  explanation: "Sets implicit wait globally.",
  type: "conceptual"
},
{
  id: 5,
  question: "Which method is used to wait until an element is visible?",
  options: [
    "ExpectedConditions.visibilityOfElementLocated()",
    "Thread.sleep()",
    "driver.wait()",
    "driver.pause()"
  ],
  correctAnswer: 0,
  explanation: "Used with explicit wait.",
  type: "mcq"
},
{
  id: 6,
  question: "Explain the difference between implicit and explicit waits in Selenium.",
  options: [
    "Implicit waits throw exceptions, explicit waits return boolean.",
    "Implicit waits are global, explicit waits are for specific conditions.",
    "Implicit waits are faster, explicit waits are slower.",
    "Implicit waits are for static elements, explicit waits for dynamic elements."
  ],
  correctAnswer: 1,
  explanation: "Implicit = global, explicit = condition-based.",
  type: "conceptual"
},
{
  id: 7,
  question: "What is Page Object Model (POM)?",
  options: [
    "Logging framework",
    "Parallel execution method",
    "Design pattern for UI elements",
    "Test data storage"
  ],
  correctAnswer: 2,
  type: "conceptual",
  explanation: "Organizes UI elements."
},
{
  id: 8,
  question: "How to handle alerts?",
  options: [
    "driver.popup()",
    "driver.handleAlert()",
    "driver.switchTo().alert()",
    "Alerts cannot be handled"
  ],
  correctAnswer: 2,
  type: "mcq",
  explanation: "Use switchTo().alert()."
},
{
  id: 9,
  question: "When do you use Actions class?",
  options: [
    "Manage DB",
    "Generate data",
    "Perform complex interactions",
    "Configure browser"
  ],
  correctAnswer: 2,
  type: "scenario",
  explanation: "Used for advanced actions."
},
{
  id: 10,
  question: "What is Selenium Grid?",
  options: [
    "Run parallel tests",
    "Record tests",
    "Manage reports",
    "Integrate CI/CD"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Parallel execution."
},

// 🔥 Continue

{
  id: 11,
  question: "What is Fluent Wait?",
  options: [
    "Wait with polling and timeout",
    "Fixed wait",
    "Hard wait",
    "Global wait"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Fluent wait supports polling."
},
{
  id: 12,
  question: "Which class is used for explicit wait?",
  options: [
    "Thread",
    "Wait",
    "WebDriverWait",
    "Timeout"
  ],
  correctAnswer: 2,
  type: "mcq",
  explanation: "WebDriverWait used."
},
{
  id: 13,
  question: "What is stale element exception?",
  options: [
    "Element not found",
    "Element detached from DOM",
    "Wrong locator",
    "Invalid driver"
  ],
  correctAnswer: 1,
  type: "conceptual",
  explanation: "Element not attached."
},
{
  id: 14,
  question: "How to handle stale element?",
  options: [
    "Refresh page",
    "Re-locate element",
    "Ignore",
    "Sleep"
  ],
  correctAnswer: 1,
  type: "scenario",
  explanation: "Re-find element."
},
{
  id: 15,
  question: "What is iframe?",
  options: [
    "Nested HTML document",
    "Alert",
    "Popup",
    "Button"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Embedded page."
},

{
  id: 16,
  question: "How to switch frame?",
  options: [
    "switchFrame()",
    "switchTo().frame()",
    "frameSwitch()",
    "changeFrame()"
  ],
  correctAnswer: 1,
  type: "mcq",
  explanation: "Switch frame."
},
{
  id: 17,
  question: "How to switch to default content?",
  options: [
    "default()",
    "main()",
    "switchTo().defaultContent()",
    "reset()"
  ],
  correctAnswer: 2,
  type: "mcq",
  explanation: "Return to main page."
},
{
  id: 18,
  question: "What is window handle?",
  options: [
    "Locator",
    "Window ID",
    "Frame",
    "Alert"
  ],
  correctAnswer: 1,
  type: "conceptual",
  explanation: "Unique identifier."
},
{
  id: 19,
  question: "How to switch window?",
  options: [
    "switchWindow()",
    "driver.window()",
    "switchTo().window()",
    "changeWindow()"
  ],
  correctAnswer: 2,
  type: "mcq",
  explanation: "Switch window."
},
{
  id: 20,
  question: "What is getWindowHandles()?",
  options: [
    "Single window",
    "All windows",
    "Frame",
    "Alert"
  ],
  correctAnswer: 1,
  type: "mcq",
  explanation: "Returns all windows."
},

// 🔥 continuing

{
  id: 21,
  question: "What is JavaScriptExecutor?",
  options: [
    "Executes JS in browser",
    "Database tool",
    "Framework",
    "Locator"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Runs JS."
},
{
  id: 22,
  question: "Why use JavaScriptExecutor?",
  options: [
    "To execute custom JS",
    "To manage DB",
    "To run server",
    "To compile code"
  ],
  correctAnswer: 0,
  type: "scenario",
  explanation: "Executes JS."
},
{
  id: 23,
  question: "What is dragAndDrop()?",
  options: [
    "Scroll action",
    "Move element",
    "Hover action",
    "Click action"
  ],
  correctAnswer: 1,
  type: "mcq",
  explanation: "Moves element."
},
{
  id: 24,
  question: "Which method performs hover?",
  options: [
    "hover()",
    "moveToElement()",
    "focus()",
    "point()"
  ],
  correctAnswer: 1,
  type: "mcq",
  explanation: "Hover action."
},
{
  id: 25,
  question: "What is Select class?",
  options: [
    "Dropdown handler",
    "Locator",
    "Framework",
    "Wait"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Handles dropdown."
},

{
  id: 26,
  question: "How to select by visible text?",
  options: [
    "selectByVisibleText()",
    "selectText()",
    "chooseText()",
    "pickText()"
  ],
  correctAnswer: 0,
  explanation: "selectByVisibleText() is a method of the Select class used to choose an option from a dropdown using the visible text.",
  type: "mcq"
},
{
  id: 27,
  question: "What is PageFactory?",
  options: [
    "Initializes elements",
    "Framework",
    "Locator",
    "Driver"
  ],
  correctAnswer: 0,
  explanation: "PageFactory is used to initialize web elements using annotations like @FindBy in Page Object Model.",
  type: "conceptual"
},
{
  id: 28,
  question: "Which annotation used in PageFactory?",
  options: [
    "@FindBy",
    "@Locate",
    "@Element",
    "@Path"
  ],
  correctAnswer: 0,
  explanation: "@FindBy is used to locate elements in PageFactory using different locator strategies.",
  type: "mcq"
},
{
  id: 29,
  question: "What is TestNG?",
  options: [
    "Testing framework",
    "Browser",
    "Language",
    "Database"
  ],
  correctAnswer: 0,
  explanation: "TestNG is a testing framework used to organize, execute, and generate reports for test cases.",
  type: "conceptual"
},
{
  id: 30,
  question: "What is priority in TestNG?",
  options: [
    "Execution order",
    "Locator",
    "Wait",
    "Framework"
  ],
  correctAnswer: 0,
  explanation: "Priority in TestNG defines the order in which test methods are executed.",
  type: "conceptual"
},

{
  id: 31,
  question: "What is dependency in TestNG?",
  options: [
    "Test relation",
    "Locator",
    "Wait",
    "Framework"
  ],
  correctAnswer: 0,
  explanation: "Dependency defines that one test method depends on another for execution.",
  type: "conceptual"
},
{
  id: 32,
  question: "What is DataProvider?",
  options: [
    "Provides test data",
    "Locator",
    "Wait",
    "Framework"
  ],
  correctAnswer: 0,
  explanation: "DataProvider in TestNG supplies multiple sets of data to test methods.",
  type: "mcq"
},
{
  id: 33,
  question: "What is assertion?",
  options: [
    "Validation",
    "UI",
    "Database",
    "Framework"
  ],
  correctAnswer: 0,
  explanation: "Assertions are used to validate expected results against actual results.",
  type: "conceptual"
},
{
  id: 34,
  question: "What is soft assertion?",
  options: [
    "Continues execution",
    "Stops execution",
    "Deletes data",
    "Refresh page"
  ],
  correctAnswer: 0,
  explanation: "Soft assertions allow test execution to continue even if an assertion fails.",
  type: "conceptual"
},
{
  id: 35,
  question: "What is hard assertion?",
  options: [
    "Stops execution",
    "Continues",
    "Ignores",
    "Logs only"
  ],
  correctAnswer: 0,
  explanation: "Hard assertions stop test execution immediately when a failure occurs.",
  type: "conceptual"
},

{
  id: 36,
  question: "What is cross-browser testing?",
  options: [
    "Multiple browsers",
    "Single browser",
    "Manual",
    "UI"
  ],
  correctAnswer: 0,
  explanation: "Cross-browser testing ensures the application works correctly across different browsers.",
  type: "conceptual"
},
{
  id: 37,
  question: "What is CI integration?",
  options: [
    "Automating build",
    "UI design",
    "DB",
    "Manual"
  ],
  correctAnswer: 0,
  explanation: "CI (Continuous Integration) automates building and testing code changes.",
  type: "conceptual"
},
{
  id: 38,
  question: "Which tool used for CI?",
  options: [
    "Jenkins",
    "Excel",
    "Word",
    "Paint"
  ],
  correctAnswer: 0,
  explanation: "Jenkins is a popular tool used for Continuous Integration and automation pipelines.",
  type: "mcq"
},
{
  id: 39,
  question: "What is headless browser?",
  options: [
    "Without UI",
    "Manual",
    "API",
    "DB"
  ],
  correctAnswer: 0,
  explanation: "Headless browser runs without a graphical UI, improving speed and performance.",
  type: "conceptual"
},
{
  id: 40,
  question: "What is test suite?",
  options: [
    "Collection of tests",
    "UI",
    "DB",
    "Tool"
  ],
  correctAnswer: 0,
  explanation: "A test suite is a collection of test cases grouped together.",
  type: "conceptual"
},

{
  id: 41,
  question: "What is test case?",
  options: [
    "Steps to test",
    "UI",
    "DB",
    "Tool"
  ],
  correctAnswer: 0,
  explanation: "A test case defines steps and expected results to validate functionality.",
  type: "conceptual"
},
{
  id: 42,
  question: "What is test data?",
  options: [
    "Input values",
    "UI",
    "DB",
    "Tool"
  ],
  correctAnswer: 0,
  explanation: "Test data refers to input values used during testing.",
  type: "conceptual"
},
{
  id: 43,
  question: "What is automation framework?",
  options: [
    "Structure",
    "UI",
    "DB",
    "Tool"
  ],
  correctAnswer: 0,
  explanation: "Automation framework provides guidelines and structure for test automation.",
  type: "conceptual"
},
{
  id: 44,
  question: "What is modular framework?",
  options: [
    "Divide modules",
    "UI",
    "DB",
    "Tool"
  ],
  correctAnswer: 0,
  explanation: "Modular framework divides application into smaller modules for better maintainability.",
  type: "conceptual"
},
{
  id: 45,
  question: "What is hybrid framework?",
  options: [
    "Combination",
    "UI",
    "DB",
    "Tool"
  ],
  correctAnswer: 0,
  explanation: "Hybrid framework combines multiple frameworks like data-driven and keyword-driven.",
  type: "conceptual"
},

{
  id: 46,
  question: "What is flaky test?",
  options: [
    "Random failure",
    "Always pass",
    "Manual",
    "UI"
  ],
  correctAnswer: 0,
  explanation: "Flaky tests fail randomly due to unstable conditions like timing issues.",
  type: "scenario"
},
{
  id: 47,
  question: "How to fix flaky tests?",
  options: [
    "Better waits",
    "Ignore",
    "Delete",
    "Sleep"
  ],
  correctAnswer: 0,
  explanation: "Using proper waits, stable locators, and retry logic helps fix flaky tests.",
  type: "scenario"
},
{
  id: 48,
  question: "What is logging?",
  options: [
    "Record execution",
    "UI",
    "DB",
    "Tool"
  ],
  correctAnswer: 0,
  explanation: "Logging records test execution details for debugging and analysis.",
  type: "conceptual"
},
{
  id: 49,
  question: "What is reporting?",
  options: [
    "Show results",
    "UI",
    "DB",
    "Tool"
  ],
  correctAnswer: 0,
  explanation: "Reporting provides a summary of test execution results.",
  type: "conceptual"
},
{
  id: 50,
  question: "What is retry mechanism?",
  options: [
    "Re-run failed tests",
    "UI",
    "DB",
    "Tool"
  ],
  correctAnswer: 0,
  explanation: "Retry mechanism automatically re-executes failed tests to reduce flakiness.",
  type: "scenario"
}
]
};