import { type Question } from "../questionUtils";

export const automation_testingQuestions: Record<string, Question[]> = {
  "Automation Testing-Beginner": [
  {
    "id": 1,
    "question": "What is Automation Testing?",
    "options": [
      "Using software tools to execute tests automatically",
      "Manual testing performed by testers",
      "Testing done without any tools",
      "Writing documentation for software"
    ],
    "correctAnswer": 0,
    "explanation": "Automation testing uses tools and scripts to automatically execute test cases.",
    "type": "mcq"
  },
  {
    "id": 2,
    "question": "Which tool is widely used for web automation testing?",
    "options": [
      "Selenium",
      "Jira",
      "Photoshop",
      "PowerPoint"
    ],
    "correctAnswer": 0,
    "explanation": "Selenium is one of the most popular tools for automating web browsers.",
    "type": "mcq"
  },
  {
    "id": 3,
    "question": "Which language is commonly used with Selenium?",
    "options": [
      "Java",
      "HTML",
      "CSS",
      "SQL only"
    ],
    "correctAnswer": 0,
    "explanation": "Selenium supports many languages, but Java is one of the most commonly used.",
    "type": "mcq"
  },
  {
    "id": 4,
    "question": "What is the main purpose of automation testing?",
    "options": [
      "Increase test efficiency and coverage",
      "Replace developers",
      "Design UI",
      "Write project reports"
    ],
    "correctAnswer": 0,
    "explanation": "Automation testing helps execute tests faster and improves coverage.",
    "type": "mcq"
  },
  {
    "id": 5,
    "question": "Which testing type is best suited for automation?",
    "options": [
      "Regression Testing",
      "Exploratory Testing",
      "Usability Testing",
      "Ad-hoc Testing"
    ],
    "correctAnswer": 0,
    "explanation": "Regression testing involves repeated execution of tests which makes it ideal for automation.",
    "type": "mcq"
  },
  {
    "id": 6,
    "question": "Which Selenium component controls the browser?",
    "options": [
      "WebDriver",
      "IDE",
      "Grid",
      "TestNG"
    ],
    "correctAnswer": 0,
    "explanation": "WebDriver interacts directly with the browser to automate actions.",
    "type": "mcq"
  },
  {
    "id": 7,
    "question": "What does WebDriver do?",
    "options": [
      "Automates browser actions",
      "Creates databases",
      "Designs UI",
      "Manages servers"
    ],
    "correctAnswer": 0,
    "explanation": "WebDriver sends commands to the browser to perform user actions.",
    "type": "mcq"
  },
  {
    "id": 8,
    "question": "Which locator is used to identify elements in Selenium?",
    "options": [
      "id",
      "font",
      "image",
      "color"
    ],
    "correctAnswer": 0,
    "explanation": "The id locator is one of the most reliable ways to locate elements.",
    "type": "mcq"
  },
  {
    "id": 9,
    "question": "Which Selenium locator finds elements using HTML attributes?",
    "options": [
      "XPath",
      "Font",
      "Size",
      "Padding"
    ],
    "correctAnswer": 0,
    "explanation": "XPath helps locate elements using attributes and structure.",
    "type": "mcq"
  },
  {
    "id": 10,
    "question": "Which method opens a webpage in Selenium?",
    "options": [
      "driver.get()",
      "driver.open()",
      "driver.run()",
      "driver.start()"
    ],
    "correctAnswer": 0,
    "explanation": "driver.get() loads a webpage in the browser.",
    "type": "mcq"
  },
  {
    "id": 11,
    "question": "What does driver.quit() do?",
    "options": [
      "Closes all browser windows",
      "Refreshes the page",
      "Opens a new tab",
      "Clicks a button"
    ],
    "correctAnswer": 0,
    "explanation": "driver.quit() closes all browser sessions.",
    "type": "mcq"
  },
  {
    "id": 12,
    "question": "Which framework is commonly used with Selenium for testing?",
    "options": [
      "TestNG",
      "Angular",
      "Bootstrap",
      "React"
    ],
    "correctAnswer": 0,
    "explanation": "TestNG is commonly used for organizing and running tests.",
    "type": "mcq"
  },
  {
    "id": 13,
    "question": "What does TestNG provide?",
    "options": [
      "Annotations and test execution control",
      "UI design",
      "Database queries",
      "Video editing"
    ],
    "correctAnswer": 0,
    "explanation": "TestNG provides annotations like @Test and reporting features.",
    "type": "mcq"
  },
  {
    "id": 14,
    "question": "Which annotation runs before each test in TestNG?",
    "options": [
      "@BeforeMethod",
      "@AfterTest",
      "@Test",
      "@Suite"
    ],
    "correctAnswer": 0,
    "explanation": "@BeforeMethod runs before each test method.",
    "type": "mcq"
  },
  {
    "id": 15,
    "question": "What is a Test Case?",
    "options": [
      "A set of steps to verify functionality",
      "A UI design document",
      "A database schema",
      "A server configuration"
    ],
    "correctAnswer": 0,
    "explanation": "A test case defines steps to test a feature.",
    "type": "mcq"
  },
  {
    "id": 16,
    "question": "What is Regression Testing?",
    "options": [
      "Testing existing functionality after changes",
      "Testing UI colors",
      "Testing hardware",
      "Testing documentation"
    ],
    "correctAnswer": 0,
    "explanation": "Regression testing ensures new changes do not break existing functionality.",
    "type": "mcq"
  },
  {
    "id": 17,
    "question": "Which tool is used for bug tracking?",
    "options": [
      "Jira",
      "Selenium",
      "Chrome",
      "Git"
    ],
    "correctAnswer": 0,
    "explanation": "Jira is commonly used for issue and bug tracking.",
    "type": "mcq"
  },
  {
    "id": 18,
    "question": "What is a locator in Selenium?",
    "options": [
      "A method to find web elements",
      "A database query",
      "A browser plugin",
      "A CSS style"
    ],
    "correctAnswer": 0,
    "explanation": "Locators identify elements on a webpage.",
    "type": "mcq"
  },
  {
    "id": 19,
    "question": "Which locator is the fastest in Selenium?",
    "options": [
      "id",
      "class",
      "name",
      "XPath"
    ],
    "correctAnswer": 0,
    "explanation": "The id locator is usually the fastest and most reliable.",
    "type": "mcq"
  },
  {
    "id": 20,
    "question": "What does click() do in Selenium?",
    "options": [
      "Clicks a web element",
      "Refreshes page",
      "Logs errors",
      "Uploads file"
    ],
    "correctAnswer": 0,
    "explanation": "click() simulates clicking on an element.",
    "type": "mcq"
  },
  {
    "id": 21,
    "question": "Which command enters text into a field?",
    "options": [
      "sendKeys()",
      "writeText()",
      "typeText()",
      "enter()"
    ],
    "correctAnswer": 0,
    "explanation": "sendKeys() is used to type text into input fields.",
    "type": "mcq"
  },
  {
    "id": 22,
    "question": "What is XPath?",
    "options": [
      "A query language for selecting elements",
      "A CSS framework",
      "A programming language",
      "A testing tool"
    ],
    "correctAnswer": 0,
    "explanation": "XPath is used to locate elements in XML or HTML.",
    "type": "mcq"
  },
  {
    "id": 23,
    "question": "What does assert do in testing?",
    "options": [
      "Validates expected results",
      "Creates UI",
      "Runs browser",
      "Stores data"
    ],
    "correctAnswer": 0,
    "explanation": "Assertions verify whether actual results match expected results.",
    "type": "mcq"
  },
  {
    "id": 24,
    "question": "What is a Test Suite?",
    "options": [
      "A collection of test cases",
      "A database",
      "A CSS framework",
      "A design system"
    ],
    "correctAnswer": 0,
    "explanation": "A test suite groups multiple test cases together.",
    "type": "mcq"
  },
  {
    "id": 25,
    "question": "Which browser can Selenium automate?",
    "options": [
      "Chrome",
      "Excel",
      "Photoshop",
      "Notepad"
    ],
    "correctAnswer": 0,
    "explanation": "Selenium supports multiple browsers including Chrome.",
    "type": "mcq"
  },
  {
    "id": 26,
    "question": "What is Selenium Grid used for?",
    "options": [
      "Running tests in parallel on multiple machines",
      "Editing code",
      "Designing UI",
      "Database queries"
    ],
    "correctAnswer": 0,
    "explanation": "Selenium Grid enables parallel test execution.",
    "type": "mcq"
  },
  {
    "id": 27,
    "question": "What is Continuous Integration?",
    "options": [
      "Automatically building and testing code",
      "Manual testing",
      "UI design",
      "Database optimization"
    ],
    "correctAnswer": 0,
    "explanation": "CI tools automatically build and test code changes.",
    "type": "mcq"
  },
  {
    "id": 28,
    "question": "Which CI tool is popular?",
    "options": [
      "Jenkins",
      "Excel",
      "Photoshop",
      "Figma"
    ],
    "correctAnswer": 0,
    "explanation": "Jenkins is widely used for continuous integration.",
    "type": "mcq"
  },
  {
    "id": 29,
    "question": "What is Page Object Model (POM)?",
    "options": [
      "A design pattern for automation frameworks",
      "A CSS library",
      "A database model",
      "A server setup"
    ],
    "correctAnswer": 0,
    "explanation": "POM organizes page elements and methods into classes.",
    "type": "mcq"
  },
  {
    "id": 30,
    "question": "What is a locator strategy?",
    "options": [
      "Method to identify elements",
      "Network configuration",
      "Database query",
      "UI animation"
    ],
    "correctAnswer": 0,
    "explanation": "Locator strategies help find elements on a page.",
    "type": "mcq"
  },
  {
    "id": 31,
    "question": "Which locator uses CSS selectors?",
    "options": [
      "cssSelector",
      "style",
      "layout",
      "position"
    ],
    "correctAnswer": 0,
    "explanation": "cssSelector locates elements using CSS patterns.",
    "type": "mcq"
  },
  {
    "id": 32,
    "question": "Which testing type verifies individual units?",
    "options": [
      "Unit Testing",
      "System Testing",
      "Performance Testing",
      "Acceptance Testing"
    ],
    "correctAnswer": 0,
    "explanation": "Unit testing checks individual components.",
    "type": "mcq"
  },
  {
    "id": 33,
    "question": "What does wait() help with?",
    "options": [
      "Handling dynamic page loading",
      "Deleting files",
      "Editing UI",
      "Installing software"
    ],
    "correctAnswer": 0,
    "explanation": "Waits allow Selenium to handle dynamic elements.",
    "type": "mcq"
  },
  {
    "id": 34,
    "question": "What is implicit wait?",
    "options": [
      "Wait applied globally for elements",
      "Manual sleep",
      "UI design delay",
      "Network delay"
    ],
    "correctAnswer": 0,
    "explanation": "Implicit wait tells Selenium to wait before throwing errors.",
    "type": "mcq"
  },
  {
    "id": 35,
    "question": "What is explicit wait?",
    "options": [
      "Wait until a specific condition occurs",
      "Global wait",
      "Database wait",
      "Network wait"
    ],
    "correctAnswer": 0,
    "explanation": "Explicit wait waits for a particular condition.",
    "type": "mcq"
  },
  {
    "id": 36,
    "question": "Which testing verifies system performance?",
    "options": [
      "Performance Testing",
      "Unit Testing",
      "Smoke Testing",
      "Sanity Testing"
    ],
    "correctAnswer": 0,
    "explanation": "Performance testing evaluates speed and responsiveness.",
    "type": "mcq"
  },
  {
    "id": 37,
    "question": "What is Smoke Testing?",
    "options": [
      "Basic functionality testing",
      "UI design testing",
      "Database testing",
      "Security testing"
    ],
    "correctAnswer": 0,
    "explanation": "Smoke testing verifies major features work.",
    "type": "mcq"
  },
  {
    "id": 38,
    "question": "What is Sanity Testing?",
    "options": [
      "Testing specific functionality after changes",
      "Testing UI colors",
      "Testing servers",
      "Testing documentation"
    ],
    "correctAnswer": 0,
    "explanation": "Sanity testing checks specific functionality after fixes.",
    "type": "mcq"
  },
  {
    "id": 39,
    "question": "Which testing ensures application security?",
    "options": [
      "Security Testing",
      "Functional Testing",
      "UI Testing",
      "Unit Testing"
    ],
    "correctAnswer": 0,
    "explanation": "Security testing identifies vulnerabilities.",
    "type": "mcq"
  },
  {
    "id": 40,
    "question": "Which tool is used for API testing?",
    "options": [
      "Postman",
      "Photoshop",
      "Figma",
      "Excel"
    ],
    "correctAnswer": 0,
    "explanation": "Postman is widely used for testing APIs.",
    "type": "mcq"
  },
  {
    "id": 41,
    "question": "What is a bug?",
    "options": [
      "A defect in software",
      "A feature",
      "A design pattern",
      "A UI component"
    ],
    "correctAnswer": 0,
    "explanation": "A bug is an error that causes incorrect behavior.",
    "type": "mcq"
  },
  {
    "id": 42,
    "question": "What is test automation framework?",
    "options": [
      "A structure for organizing automation tests",
      "A browser",
      "A server",
      "A CSS library"
    ],
    "correctAnswer": 0,
    "explanation": "Frameworks provide guidelines for automation testing.",
    "type": "mcq"
  },
  {
    "id": 43,
    "question": "Which framework organizes test cases based on modules?",
    "options": [
      "Modular Framework",
      "Keyword Framework",
      "Hybrid Framework",
      "Linear Framework"
    ],
    "correctAnswer": 0,
    "explanation": "Modular frameworks divide applications into modules.",
    "type": "mcq"
  },
  {
    "id": 44,
    "question": "What is a Hybrid Framework?",
    "options": [
      "Combination of multiple frameworks",
      "A database",
      "A server",
      "A design tool"
    ],
    "correctAnswer": 0,
    "explanation": "Hybrid frameworks combine different testing approaches.",
    "type": "mcq"
  },
  {
    "id": 45,
    "question": "Which tool manages source code?",
    "options": [
      "Git",
      "Chrome",
      "Excel",
      "PowerPoint"
    ],
    "correctAnswer": 0,
    "explanation": "Git is used for version control.",
    "type": "mcq"
  },
  {
    "id": 46,
    "question": "What is test data?",
    "options": [
      "Input values used in tests",
      "UI design",
      "Database schema",
      "Application logs"
    ],
    "correctAnswer": 0,
    "explanation": "Test data is used as input during testing.",
    "type": "mcq"
  },
  {
    "id": 47,
    "question": "What is a test script?",
    "options": [
      "Code written to automate tests",
      "UI design",
      "Database query",
      "Server configuration"
    ],
    "correctAnswer": 0,
    "explanation": "Test scripts automate test execution.",
    "type": "mcq"
  },
  {
    "id": 48,
    "question": "Which testing checks the full application workflow?",
    "options": [
      "End-to-End Testing",
      "Unit Testing",
      "UI Testing",
      "Database Testing"
    ],
    "correctAnswer": 0,
    "explanation": "End-to-end testing validates the complete workflow.",
    "type": "mcq"
  },
  {
    "id": 49,
    "question": "Which browser driver is used for Chrome?",
    "options": [
      "ChromeDriver",
      "EdgeDriver",
      "SafariDriver",
      "OperaDriver"
    ],
    "correctAnswer": 0,
    "explanation": "ChromeDriver allows Selenium to automate Chrome.",
    "type": "mcq"
  },
  {
    "id": 50,
    "question": "What is the goal of software testing?",
    "options": [
      "Identify defects and ensure quality",
      "Design UI",
      "Write code only",
      "Deploy servers"
    ],
    "correctAnswer": 0,
    "explanation": "Testing ensures software works correctly and meets requirements.",
    "type": "mcq"
  }
]
};
