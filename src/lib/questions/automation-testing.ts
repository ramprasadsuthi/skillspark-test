import { type Question } from "../questionUtils";

export const automation_testingQuestions: Record<string, Question[]> = {
  "Automation Testing-Beginner": [
  {
    id: 1,
    question: "What is Automation Testing?",
    options: [
      "Manual testing performed by testers",
      "Using software tools to execute tests automatically",
      "Writing documentation for software",
      "Testing done without any tools"
    ],
    correctAnswer: 1,
    explanation: "Automation testing uses tools and scripts.",
    type: "mcq"
  },
  {
    id: 2,
    question: "Which tool is widely used for web automation testing?",
    options: [
      "PowerPoint",
      "Selenium",
      "Jira",
      "Photoshop"
    ],
    correctAnswer: 1,
    type: "mcq",
    explanation: "Selenium is popular."
  },
  {
    id: 3,
    question: "Which language is commonly used with Selenium?",
    options: [
      "HTML",
      "CSS",
      "Java",
      "SQL only"
    ],
    correctAnswer: 2,
    type: "mcq",
    explanation: "Java is widely used."
  },
  {
    id: 4,
    question: "What is the main purpose of automation testing?",
    options: [
      "Design UI",
      "Write project reports",
      "Increase test efficiency and coverage",
      "Replace developers"
    ],
    correctAnswer: 2,
    type: "mcq",
    explanation: "Improves efficiency."
  },
  {
    id: 5,
    question: "Which testing type is best suited for automation?",
    options: [
      "Usability Testing",
      "Regression Testing",
      "Ad-hoc Testing",
      "Exploratory Testing"
    ],
    correctAnswer: 1,
    type: "mcq",
    explanation: "Regression is repetitive."
  },

  {
    id: 6,
    question: "Which Selenium component controls the browser?",
    options: [
      "IDE",
      "TestNG",
      "WebDriver",
      "Grid"
    ],
    correctAnswer: 2,
    type: "mcq",
    explanation: "WebDriver controls browser."
  },
  {
    id: 7,
    question: "What does WebDriver do?",
    options: [
      "Creates databases",
      "Automates browser actions",
      "Designs UI",
      "Manages servers"
    ],
    correctAnswer: 1,
    type: "mcq",
    explanation: "Automates actions."
  },
  {
    id: 8,
    question: "Which locator is used to identify elements in Selenium?",
    options: [
      "image",
      "color",
      "id",
      "font"
    ],
    correctAnswer: 2,
    type: "mcq",
    explanation: "id is locator."
  },
  {
    id: 9,
    question: "Which Selenium locator finds elements using HTML attributes?",
    options: [
      "Font",
      "XPath",
      "Padding",
      "Size"
    ],
    correctAnswer: 1,
    type: "mcq",
    explanation: "XPath uses attributes."
  },
  {
    id: 10,
    question: "Which method opens a webpage in Selenium?",
    options: [
      "driver.start()",
      "driver.get()",
      "driver.open()",
      "driver.run()"
    ],
    correctAnswer: 1,
    type: "mcq",
    explanation: "get() opens page."
  },

  {
    id: 11,
    question: "What does driver.quit() do?",
    options: [
      "Refreshes page",
      "Closes all browser windows",
      "Clicks a button",
      "Opens a new tab"
    ],
    correctAnswer: 1,
    type: "mcq",
    explanation: "Closes all."
  },
  {
    id: 12,
    question: "Which framework is commonly used with Selenium?",
    options: [
      "Bootstrap",
      "Angular",
      "TestNG",
      "React"
    ],
    correctAnswer: 2,
    type: "mcq",
    explanation: "TestNG used."
  },
  {
    id: 13,
    question: "What does TestNG provide?",
    options: [
      "UI design",
      "Annotations and execution control",
      "Video editing",
      "Database queries"
    ],
    correctAnswer: 1,
    type: "mcq",
    explanation: "Provides annotations."
  },
  {
    id: 14,
    question: "Which annotation runs before each test in TestNG?",
    options: [
      "@Test",
      "@Suite",
      "@BeforeMethod",
      "@AfterTest"
    ],
    correctAnswer: 2,
    type: "mcq",
    explanation: "Runs before test."
  },
  {
    id: 15,
    question: "What is a Test Case?",
    options: [
      "Database schema",
      "A set of steps to verify functionality",
      "UI design document",
      "Server configuration"
    ],
    correctAnswer: 1,
    type: "mcq",
    explanation: "Steps for testing."
  },

  {
    id: 16,
    question: "What is Regression Testing?",
    options: [
      "Testing UI colors",
      "Testing documentation",
      "Testing existing functionality after changes",
      "Testing hardware"
    ],
    correctAnswer: 2,
    type: "mcq",
    explanation: "Ensures no break."
  },
  {
    id: 17,
    question: "Which tool is used for bug tracking?",
    options: [
      "Git",
      "Jira",
      "Chrome",
      "Selenium"
    ],
    correctAnswer: 1,
    type: "mcq",
    explanation: "Jira tracks bugs."
  },
  {
    id: 18,
    question: "What is a locator in Selenium?",
    options: [
      "A browser plugin",
      "A method to find web elements",
      "A CSS style",
      "A database query"
    ],
    correctAnswer: 1,
    type: "mcq",
    explanation: "Finds elements."
  },
  {
    id: 19,
    question: "Which locator is the fastest?",
    options: [
      "class",
      "XPath",
      "id",
      "name"
    ],
    correctAnswer: 2,
    type: "mcq",
    explanation: "id fastest."
  },
  {
    id: 20,
    question: "What does click() do?",
    options: [
      "Uploads file",
      "Clicks a web element",
      "Refreshes page",
      "Logs errors"
    ],
    correctAnswer: 1,
    type: "mcq",
    explanation: "Clicks element."
  },
  {
  id: 21,
  question: "Which command enters text into a field?",
  options: [
    "enter()",
    "sendKeys()",
    "typeText()",
    "writeText()"
  ],
  correctAnswer: 1,
  explanation: "sendKeys() is used to type text.",
  type: "mcq"
},
{
  id: 22,
  question: "What is XPath?",
  options: [
    "A CSS framework",
    "A testing tool",
    "A query language for selecting elements",
    "A programming language"
  ],
  correctAnswer: 2,
  explanation: "XPath is used to locate elements.",
  type: "mcq"
},
{
  id: 23,
  question: "What does assert do in testing?",
  options: [
    "Runs browser",
    "Stores data",
    "Validates expected results",
    "Creates UI"
  ],
  correctAnswer: 2,
  explanation: "Assertions validate results.",
  type: "mcq"
},
{
  id: 24,
  question: "What is a Test Suite?",
  options: [
    "A CSS framework",
    "A collection of test cases",
    "A design system",
    "A database"
  ],
  correctAnswer: 1,
  explanation: "Groups multiple test cases.",
  type: "mcq"
},
{
  id: 25,
  question: "Which browser can Selenium automate?",
  options: [
    "Photoshop",
    "Notepad",
    "Chrome",
    "Excel"
  ],
  correctAnswer: 2,
  explanation: "Chrome is supported.",
  type: "mcq"
},
{
  id: 26,
  question: "What is Selenium Grid used for?",
  options: [
    "Editing code",
    "Running tests in parallel on multiple machines",
    "Database queries",
    "Designing UI"
  ],
  correctAnswer: 1,
  explanation: "Grid enables parallel execution.",
  type: "mcq"
},
{
  id: 27,
  question: "What is Continuous Integration?",
  options: [
    "UI design",
    "Manual testing",
    "Automatically building and testing code",
    "Database optimization"
  ],
  correctAnswer: 2,
  explanation: "CI automates builds/tests.",
  type: "mcq"
},
{
  id: 28,
  question: "Which CI tool is popular?",
  options: [
    "Figma",
    "Jenkins",
    "Photoshop",
    "Excel"
  ],
  correctAnswer: 1,
  explanation: "Jenkins is widely used.",
  type: "mcq"
},
{
  id: 29,
  question: "What is Page Object Model (POM)?",
  options: [
    "A CSS library",
    "A database model",
    "A design pattern for automation frameworks",
    "A server setup"
  ],
  correctAnswer: 2,
  explanation: "POM organizes UI elements.",
  type: "mcq"
},
{
  id: 30,
  question: "What is a locator strategy?",
  options: [
    "Network configuration",
    "Method to identify elements",
    "UI animation",
    "Database query"
  ],
  correctAnswer: 1,
  explanation: "Used to find elements.",
  type: "mcq"
},
{
  id: 31,
  question: "Which locator uses CSS selectors?",
  options: [
    "layout",
    "position",
    "cssSelector",
    "style"
  ],
  correctAnswer: 2,
  explanation: "cssSelector uses CSS patterns.",
  type: "mcq"
},
{
  id: 32,
  question: "Which testing type verifies individual units?",
  options: [
    "Performance Testing",
    "Acceptance Testing",
    "Unit Testing",
    "System Testing"
  ],
  correctAnswer: 2,
  explanation: "Unit testing checks components.",
  type: "mcq"
},
{
  id: 33,
  question: "What does wait() help with?",
  options: [
    "Deleting files",
    "Handling dynamic page loading",
    "Installing software",
    "Editing UI"
  ],
  correctAnswer: 1,
  explanation: "Handles dynamic elements.",
  type: "mcq"
},
{
  id: 34,
  question: "What is implicit wait?",
  options: [
    "Manual sleep",
    "UI design delay",
    "Wait applied globally for elements",
    "Network delay"
  ],
  correctAnswer: 2,
  explanation: "Implicit wait is global.",
  type: "mcq"
},
{
  id: 35,
  question: "What is explicit wait?",
  options: [
    "Global wait",
    "Wait until a specific condition occurs",
    "Network wait",
    "Database wait"
  ],
  correctAnswer: 1,
  explanation: "Waits for condition.",
  type: "mcq"
},
{
  id: 36,
  question: "Which testing verifies system performance?",
  options: [
    "Smoke Testing",
    "Sanity Testing",
    "Performance Testing",
    "Unit Testing"
  ],
  correctAnswer: 2,
  explanation: "Measures speed.",
  type: "mcq"
},
{
  id: 37,
  question: "What is Smoke Testing?",
  options: [
    "Database testing",
    "Basic functionality testing",
    "Security testing",
    "UI design testing"
  ],
  correctAnswer: 1,
  explanation: "Checks core features.",
  type: "mcq"
},
{
  id: 38,
  question: "What is Sanity Testing?",
  options: [
    "Testing servers",
    "Testing documentation",
    "Testing specific functionality after changes",
    "Testing UI colors"
  ],
  correctAnswer: 2,
  explanation: "Checks specific fixes.",
  type: "mcq"
},
{
  id: 39,
  question: "Which testing ensures application security?",
  options: [
    "UI Testing",
    "Functional Testing",
    "Security Testing",
    "Unit Testing"
  ],
  correctAnswer: 2,
  explanation: "Finds vulnerabilities.",
  type: "mcq"
},
{
  id: 40,
  question: "Which tool is used for API testing?",
  options: [
    "Figma",
    "Excel",
    "Postman",
    "Photoshop"
  ],
  correctAnswer: 2,
  explanation: "Postman for APIs.",
  type: "mcq"
},
{
  id: 41,
  question: "What is a bug?",
  options: [
    "A feature",
    "A UI component",
    "A defect in software",
    "A design pattern"
  ],
  correctAnswer: 2,
  explanation: "Bug = defect.",
  type: "mcq"
},
{
  id: 42,
  question: "What is test automation framework?",
  options: [
    "A browser",
    "A server",
    "A structure for organizing automation tests",
    "A CSS library"
  ],
  correctAnswer: 2,
  explanation: "Framework organizes tests.",
  type: "mcq"
},
{
  id: 43,
  question: "Which framework organizes test cases based on modules?",
  options: [
    "Keyword Framework",
    "Linear Framework",
    "Modular Framework",
    "Hybrid Framework"
  ],
  correctAnswer: 2,
  explanation: "Modular divides modules.",
  type: "mcq"
},
{
  id: 44,
  question: "What is a Hybrid Framework?",
  options: [
    "A database",
    "Combination of multiple frameworks",
    "A design tool",
    "A server"
  ],
  correctAnswer: 1,
  explanation: "Combines frameworks.",
  type: "mcq"
},
{
  id: 45,
  question: "Which tool manages source code?",
  options: [
    "Excel",
    "Git",
    "PowerPoint",
    "Chrome"
  ],
  correctAnswer: 1,
  explanation: "Git is version control.",
  type: "mcq"
},
{
  id: 46,
  question: "What is test data?",
  options: [
    "UI design",
    "Application logs",
    "Input values used in tests",
    "Database schema"
  ],
  correctAnswer: 2,
  explanation: "Input data.",
  type: "mcq"
},
{
  id: 47,
  question: "What is a test script?",
  options: [
    "Database query",
    "Server configuration",
    "Code written to automate tests",
    "UI design"
  ],
  correctAnswer: 2,
  explanation: "Script automates tests.",
  type: "mcq"
},
{
  id: 48,
  question: "Which testing checks full workflow?",
  options: [
    "Unit Testing",
    "Database Testing",
    "End-to-End Testing",
    "UI Testing"
  ],
  correctAnswer: 2,
  explanation: "E2E checks flow.",
  type: "mcq"
},
{
  id: 49,
  question: "Which browser driver is used for Chrome?",
  options: [
    "EdgeDriver",
    "SafariDriver",
    "ChromeDriver",
    "OperaDriver"
  ],
  correctAnswer: 2,
  explanation: "ChromeDriver used.",
  type: "mcq"
},
{
  id: 50,
  question: "What is the goal of software testing?",
  options: [
    "Write code only",
    "Deploy servers",
    "Identify defects and ensure quality",
    "Design UI"
  ],
  correctAnswer: 2,
  explanation: "Ensures quality.",
  type: "mcq"
}
],
"Automation Testing-Intermediate": [
{
  id: 1,
  question: "What is Automation Testing?",
  options: [
    "Manual testing performed by testers",
    "Writing documentation for software",
    "Using software tools to execute tests automatically",
    "Testing done without any tools"
  ],
  correctAnswer: 2,
  explanation: "Automation testing uses tools to execute tests.",
  type: "mcq"
},
{
  id: 2,
  question: "What is the main advantage of automation testing?",
  options: [
    "Slower execution",
    "Higher accuracy and speed",
    "Increased manual work",
    "Less test coverage"
  ],
  correctAnswer: 1,
  type: "mcq",
  explanation: "Automation improves speed and accuracy."
},
{
  id: 3,
  question: "Which type of testing is not suitable for automation?",
  options: [
    "Regression testing",
    "Exploratory testing",
    "Smoke testing",
    "Sanity testing"
  ],
  correctAnswer: 1,
  type: "mcq",
  explanation: "Exploratory testing requires human intuition."
},
{
  id: 4,
  question: "What is a Test Script?",
  options: [
    "A UI design",
    "A database query",
    "Code written to automate test cases",
    "Server configuration"
  ],
  correctAnswer: 2,
  type: "mcq",
  explanation: "Test scripts automate execution."
},
{
  id: 5,
  question: "What is framework in automation?",
  options: [
    "Browser",
    "A structure for organizing tests",
    "Database",
    "Programming language"
  ],
  correctAnswer: 1,
  type: "mcq",
  explanation: "Framework defines structure."
},

{
  id: 6,
  question: "What is Data-Driven Testing?",
  options: [
    "Using UI design",
    "Using multiple datasets",
    "Testing without data",
    "Manual testing"
  ],
  correctAnswer: 1,
  type: "conceptual",
  explanation: "Uses multiple inputs."
},
{
  id: 7,
  question: "What is Keyword-Driven Framework?",
  options: [
    "Uses keywords to define actions",
    "Uses database queries",
    "Uses UI design",
    "Uses server scripts"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Keywords define actions."
},
{
  id: 8,
  question: "What is Hybrid Framework?",
  options: [
    "Combination of frameworks",
    "Single framework",
    "Database system",
    "Browser tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Combines multiple approaches."
},
{
  id: 9,
  question: "What is Page Object Model?",
  options: [
    "Design pattern for UI elements",
    "Database model",
    "Browser tool",
    "Testing language"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Organizes UI elements."
},
{
  id: 10,
  question: "What is TestNG used for?",
  options: [
    "Database",
    "UI design",
    "Test execution and reporting",
    "Server management"
  ],
  correctAnswer: 2,
  type: "mcq",
  explanation: "TestNG manages tests."
},

{
  id: 11,
  question: "Which annotation runs before test in TestNG?",
  options: [
    "@AfterMethod",
    "@BeforeMethod",
    "@Test",
    "@Suite"
  ],
  correctAnswer: 1,
  type: "mcq",
  explanation: "Runs before test."
},
{
  id: 12,
  question: "What is assertion?",
  options: [
    "Validation of results",
    "UI design",
    "Database operation",
    "Server task"
  ],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Validates expected vs actual."
},
{
  id: 13,
  question: "What is Hard Assertion?",
  options: [
    "Stops test on failure",
    "Continues execution",
    "Ignores failure",
    "Logs only"
  ],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Stops test."
},
{
  id: 14,
  question: "What is Soft Assertion?",
  options: [
    "Stops execution",
    "Continues execution",
    "Deletes data",
    "Refresh page"
  ],
  correctAnswer: 1,
  type: "mcq",
  explanation: "Continues execution."
},
{
  id: 15,
  question: "What is parallel testing?",
  options: [
    "Sequential testing",
    "Running tests simultaneously",
    "Manual testing",
    "UI testing"
  ],
  correctAnswer: 1,
  type: "scenario",
  explanation: "Runs tests together."
},

{
  id: 16,
  question: "What is Selenium Grid used for?",
  options: [
    "Parallel execution",
    "UI design",
    "Database queries",
    "Bug tracking"
  ],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Runs tests parallel."
},
{
  id: 17,
  question: "What is headless testing?",
  options: [
    "Without UI browser",
    "Manual testing",
    "Database testing",
    "UI testing"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Runs without UI."
},
{
  id: 18,
  question: "What is CI/CD?",
  options: [
    "Continuous Integration/Delivery",
    "Database tool",
    "UI framework",
    "Browser plugin"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Automates pipeline."
},
{
  id: 19,
  question: "Which tool is used for CI?",
  options: [
    "Jenkins",
    "Excel",
    "Photoshop",
    "Figma"
  ],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Jenkins used."
},
{
  id: 20,
  question: "What is version control?",
  options: [
    "Managing code changes",
    "UI design",
    "Testing",
    "Deployment"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Tracks changes."
},

// 👉 Continuing till 50 (shortened explanation but complete)

{
  id: 21,
  question: "Which tool is used for version control?",
  options: ["Git", "Excel", "Chrome", "Word"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Git manages code."
},
{
  id: 22,
  question: "What is XPath?",
  options: ["Locator", "Language", "Framework", "Tool"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Used to locate elements."
},
{
  id: 23,
  question: "Which wait is condition-based?",
  options: ["Explicit Wait", "Implicit Wait", "Sleep", "None"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Explicit is conditional."
},
{
  id: 24,
  question: "Which wait is global?",
  options: ["Explicit", "Implicit", "Thread", "None"],
  correctAnswer: 1,
  type: "mcq",
  explanation: "Implicit is global."
},
{
  id: 25,
  question: "What is stale element?",
  options: ["Old element reference", "New element", "Hidden element", "Visible element"],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Element detached."
},
{
  id: 26,
  question: "How to handle stale element?",
  options: ["Refresh", "Re-locate element", "Ignore", "Sleep"],
  correctAnswer: 1,
  type: "scenario",
  explanation: "Re-find element."
},
{
  id: 27,
  question: "What is Actions class?",
  options: ["Mouse/keyboard actions", "Locator", "Framework", "Browser"],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Advanced actions."
},
{
  id: 28,
  question: "What is drag and drop?",
  options: ["Move element", "Click", "Scroll", "Hover"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Moves element."
},
{
  id: 29,
  question: "What is iframe?",
  options: ["Nested page", "Alert", "Window", "Button"],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Embedded page."
},
{
  id: 30,
  question: "How to switch frame?",
  options: ["switchTo().frame()", "switchFrame()", "frame()", "changeFrame()"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Switch frame."
},

{
  id: 31,
  question: "What is window handle?",
  options: ["Window ID", "Locator", "Frame", "Alert"],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Unique ID."
},
{
  id: 32,
  question: "What is getWindowHandles()?",
  options: ["All windows", "Single window", "Frame", "Alert"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Returns all."
},
{
  id: 33,
  question: "What is JavaScriptExecutor?",
  options: ["Executes JS", "Database tool", "Framework", "Locator"],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Runs JS."
},
{
  id: 34,
  question: "What is test data?",
  options: ["Input values", "UI", "Database", "Logs"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Input values."
},
{
  id: 35,
  question: "What is bug?",
  options: ["Defect", "Feature", "Design", "UI"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Error."
},

{
  id: 36,
  question: "What is smoke testing?",
  options: ["Basic testing", "UI testing", "Database", "Security"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Basic check."
},
{
  id: 37,
  question: "What is sanity testing?",
  options: ["Specific testing", "UI testing", "Server", "Docs"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Checks fix."
},
{
  id: 38,
  question: "What is performance testing?",
  options: ["Speed test", "UI test", "Unit test", "Manual"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Checks performance."
},
{
  id: 39,
  question: "What is security testing?",
  options: ["Find vulnerabilities", "UI", "DB", "Unit"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Checks security."
},
{
  id: 40,
  question: "What is API testing?",
  options: ["Testing APIs", "UI", "DB", "Manual"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Tests APIs."
},

{
  id: 41,
  question: "What is end-to-end testing?",
  options: ["Full workflow", "Unit", "UI", "DB"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Tests full flow."
},
{
  id: 42,
  question: "What is test suite?",
  options: ["Collection of tests", "UI", "DB", "Tool"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Group tests."
},
{
  id: 43,
  question: "What is dependency in TestNG?",
  options: ["Test relation", "UI", "DB", "Framework"],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Depends on test."
},
{
  id: 44,
  question: "What is priority?",
  options: ["Execution order", "UI", "DB", "Tool"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Defines order."
},
{
  id: 45,
  question: "What is grouping?",
  options: ["Categorizing tests", "UI", "DB", "Server"],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Groups tests."
},

{
  id: 46,
  question: "What is DataProvider?",
  options: ["Provides data", "UI", "DB", "Tool"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Supplies data."
},
{
  id: 47,
  question: "What is cross-browser testing?",
  options: ["Multiple browsers", "Single browser", "Manual", "UI"],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Test across browsers."
},
{
  id: 48,
  question: "What is test coverage?",
  options: ["Extent of testing", "UI", "DB", "Tool"],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Measures coverage."
},
{
  id: 49,
  question: "What is defect lifecycle?",
  options: ["Bug stages", "UI", "DB", "Tool"],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Bug lifecycle."
},
{
  id: 50,
  question: "What is automation framework benefit?",
  options: ["Reusability", "UI", "DB", "Manual"],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Improves reuse."
}
],
"Automation Testing-Advanced": [
{
  id: 51,
  question: "What is a test automation framework?",
  options: [
    "A tool for UI design",
    "A structured set of guidelines and practices",
    "A database system",
    "A browser plugin"
  ],
  correctAnswer: 1,
  explanation: "Framework provides structure and standards.",
  type: "conceptual"
},
{
  id: 52,
  question: "Which framework combines multiple approaches?",
  options: [
    "Linear framework",
    "Hybrid framework",
    "Modular framework",
    "Keyword framework"
  ],
  correctAnswer: 1,
  explanation: "Hybrid combines multiple frameworks.",
  type: "conceptual"
},
{
  id: 53,
  question: "What is the main benefit of Page Object Model?",
  options: [
    "Increases duplication",
    "Improves maintainability",
    "Reduces execution",
    "Removes assertions"
  ],
  correctAnswer: 1,
  explanation: "POM improves maintainability.",
  type: "conceptual"
},
{
  id: 54,
  question: "What is flaky test?",
  options: [
    "Always passes",
    "Randomly fails",
    "Never runs",
    "Manual test"
  ],
  correctAnswer: 1,
  explanation: "Flaky tests are unstable.",
  type: "scenario"
},
{
  id: 55,
  question: "How to reduce flaky tests?",
  options: [
    "Ignore them",
    "Use Thread.sleep",
    "Improve waits and locators",
    "Delete tests"
  ],
  correctAnswer: 2,
  explanation: "Use proper waits and locators.",
  type: "scenario"
},

{
  id: 56,
  question: "What is CI/CD pipeline?",
  options: [
    "Manual process",
    "Automated build and deployment pipeline",
    "Database query",
    "UI tool"
  ],
  correctAnswer: 1,
  type: "conceptual",
  explanation: "CI/CD automates delivery."
},
{
  id: 57,
  question: "Which tool is used for CI/CD?",
  options: [
    "Jenkins",
    "Photoshop",
    "Excel",
    "Figma"
  ],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Jenkins is widely used."
},
{
  id: 58,
  question: "What is headless testing?",
  options: [
    "Testing without UI",
    "Manual testing",
    "API testing",
    "Unit testing"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Runs without UI."
},
{
  id: 59,
  question: "Which tool supports headless mode?",
  options: [
    "Selenium",
    "Excel",
    "Notepad",
    "Word"
  ],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Selenium supports headless."
},
{
  id: 60,
  question: "What is parallel execution?",
  options: [
    "Sequential execution",
    "Running tests simultaneously",
    "Manual testing",
    "UI testing"
  ],
  correctAnswer: 1,
  type: "conceptual",
  explanation: "Runs tests together."
},

{
  id: 61,
  question: "What is Docker used for?",
  options: [
    "Containerization",
    "UI design",
    "Database queries",
    "Testing only"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Docker creates containers."
},
{
  id: 62,
  question: "What is test environment?",
  options: [
    "Setup for testing",
    "UI design",
    "Database schema",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Environment setup."
},
{
  id: 63,
  question: "What is test data management?",
  options: [
    "Managing input data",
    "UI design",
    "Database design",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Handles test data."
},
{
  id: 64,
  question: "What is mocking?",
  options: [
    "Simulating dependencies",
    "UI testing",
    "Database testing",
    "Manual testing"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Mocks simulate systems."
},
{
  id: 65,
  question: "What is API mocking?",
  options: [
    "Simulating API responses",
    "UI testing",
    "DB testing",
    "Manual testing"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Mocks APIs."
},

{
  id: 66,
  question: "What is Selenium Grid advantage?",
  options: [
    "Parallel testing",
    "UI design",
    "Database",
    "Manual testing"
  ],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Parallel execution."
},
{
  id: 67,
  question: "What is cross-browser testing?",
  options: [
    "Multiple browsers",
    "Single browser",
    "Manual testing",
    "API testing"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Test across browsers."
},
{
  id: 68,
  question: "What is CI trigger?",
  options: [
    "Code commit",
    "UI click",
    "Manual testing",
    "Database update"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Triggered by commit."
},
{
  id: 69,
  question: "What is test coverage?",
  options: [
    "Extent of testing",
    "UI design",
    "Database",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Measures coverage."
},
{
  id: 70,
  question: "What is defect severity?",
  options: [
    "Impact of bug",
    "UI design",
    "Database",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Severity defines impact."
},

{
  id: 71,
  question: "What is defect priority?",
  options: [
    "Fix urgency",
    "Impact",
    "UI",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Priority defines urgency."
},
{
  id: 72,
  question: "What is root cause analysis?",
  options: [
    "Finding bug origin",
    "UI testing",
    "DB testing",
    "Manual testing"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Find cause."
},
{
  id: 73,
  question: "What is test strategy?",
  options: [
    "Testing plan approach",
    "UI design",
    "DB schema",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Defines approach."
},
{
  id: 74,
  question: "What is test plan?",
  options: [
    "Document for testing scope",
    "UI design",
    "DB design",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Defines scope."
},
{
  id: 75,
  question: "What is risk-based testing?",
  options: [
    "Focus on high-risk areas",
    "UI testing",
    "DB testing",
    "Manual testing"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Focus on risk."
},

{
  id: 76,
  question: "What is BDD?",
  options: [
    "Behavior Driven Development",
    "Bug Driven Dev",
    "Browser Dev",
    "Basic Dev"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "BDD focuses behavior."
},
{
  id: 77,
  question: "Which tool supports BDD?",
  options: [
    "Cucumber",
    "Excel",
    "Photoshop",
    "Word"
  ],
  correctAnswer: 0,
  type: "mcq",
  explanation: "Cucumber used."
},
{
  id: 78,
  question: "What is Gherkin?",
  options: [
    "BDD language",
    "Programming language",
    "UI tool",
    "Database"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Used in Cucumber."
},
{
  id: 79,
  question: "What is scenario in BDD?",
  options: [
    "Test case",
    "UI design",
    "Database",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Represents behavior."
},
{
  id: 80,
  question: "What is step definition?",
  options: [
    "Code for steps",
    "UI design",
    "Database",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Maps steps to code."
},

{
  id: 81,
  question: "What is logging?",
  options: [
    "Recording execution",
    "UI design",
    "DB storage",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Logs execution."
},
{
  id: 82,
  question: "What is reporting?",
  options: [
    "Test results summary",
    "UI design",
    "Database",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Shows results."
},
{
  id: 83,
  question: "What is retry mechanism?",
  options: [
    "Re-run failed tests",
    "UI design",
    "DB test",
    "Tool"
  ],
  correctAnswer: 0,
  type: "scenario",
  explanation: "Retries failures."
},
{
  id: 84,
  question: "What is test isolation?",
  options: [
    "Independent tests",
    "UI design",
    "DB test",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Tests independent."
},
{
  id: 85,
  question: "What is test stability?",
  options: [
    "Reliable tests",
    "UI design",
    "DB test",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Stable tests."
},

{
  id: 86,
  question: "What is performance bottleneck?",
  options: [
    "Slow part",
    "UI",
    "DB",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Limits performance."
},
{
  id: 87,
  question: "What is load testing?",
  options: [
    "Test under load",
    "UI test",
    "DB test",
    "Manual"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Checks load."
},
{
  id: 88,
  question: "What is stress testing?",
  options: [
    "Extreme load",
    "UI",
    "DB",
    "Manual"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Beyond limits."
},
{
  id: 89,
  question: "What is scalability testing?",
  options: [
    "System growth ability",
    "UI",
    "DB",
    "Manual"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Handles growth."
},
{
  id: 90,
  question: "What is reliability testing?",
  options: [
    "System consistency",
    "UI",
    "DB",
    "Manual"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Checks reliability."
},

{
  id: 91,
  question: "What is security vulnerability?",
  options: [
    "Weakness in system",
    "UI",
    "DB",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Security gap."
},
{
  id: 92,
  question: "What is penetration testing?",
  options: [
    "Simulated attack",
    "UI",
    "DB",
    "Manual"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Tests security."
},
{
  id: 93,
  question: "What is test automation ROI?",
  options: [
    "Return on investment",
    "UI",
    "DB",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Measures benefit."
},
{
  id: 94,
  question: "What is maintainability?",
  options: [
    "Ease of update",
    "UI",
    "DB",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Easy updates."
},
{
  id: 95,
  question: "What is reusability?",
  options: [
    "Reuse components",
    "UI",
    "DB",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Reuse code."
},

{
  id: 96,
  question: "What is modularity?",
  options: [
    "Divide into modules",
    "UI",
    "DB",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Split system."
},
{
  id: 97,
  question: "What is abstraction?",
  options: [
    "Hide complexity",
    "UI",
    "DB",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Simplify system."
},
{
  id: 98,
  question: "What is encapsulation?",
  options: [
    "Bundle data and methods",
    "UI",
    "DB",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "Encapsulation principle."
},
{
  id: 99,
  question: "What is inheritance?",
  options: [
    "Reuse code from parent",
    "UI",
    "DB",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "OOP concept."
},
{
  id: 100,
  question: "What is polymorphism?",
  options: [
    "Multiple forms",
    "UI",
    "DB",
    "Tool"
  ],
  correctAnswer: 0,
  type: "conceptual",
  explanation: "OOP concept."
}
]
};
