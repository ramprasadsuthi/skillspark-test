import { type Question } from "../questionUtils";

export const seleniumQuestions: Record<string, Question[]> = {
  "Selenium-Beginner": [
    {
      "id": 1,
      "question": "What is Selenium?",
      "options": [
        "An automation testing framework",
        "A programming language",
        "A web browser",
        "A database management system"
      ],
      "correctAnswer": 0,
      "explanation": "Selenium is a popular open-source automation testing framework for web applications.",
      "type": "mcq"
    },
    {
      "id": 2,
      "question": "Which component of Selenium is used to drive browsers?",
      "options": [
        "Selenium WebDriver",
        "Selenium IDE",
        "Selenium Grid",
        "Selenium RC"
      ],
      "correctAnswer": 0,
      "explanation": "Selenium WebDriver is the core component that directly interacts with web browsers.",
      "type": "mcq"
    },
    {
      "id": 3,
      "question": "Which of the following is NOT a Selenium locator?",
      "options": [
        "id",
        "name",
        "class",
        "coordinate"
      ],
      "correctAnswer": 3,
      "explanation": "Common Selenium locators include id, name, className, tagName, linkText, partialLinkText, cssSelector, and XPath. 'Coordinate' is not a standard locator.",
      "type": "mcq"
    },
    {
      "id": 4,
      "question": "What is the purpose of `driver.get()` in Selenium WebDriver?",
      "options": [
        "To navigate to a URL",
        "To get the current URL",
        "To get the title of the page",
        "To get the page source"
      ],
      "correctAnswer": 0,
      "explanation": "`driver.get()` is used to open a specified URL in the browser.",
      "type": "mcq"
    },
    {
      "id": 5,
      "question": "How do you close the current browser window in Selenium WebDriver?",
      "options": [
        "driver.close()",
        "driver.quit()",
        "driver.exit()",
        "driver.stop()"
      ],
      "correctAnswer": 0,
      "explanation": "`driver.close()` closes the currently focused browser window, whereas `driver.quit()` closes all browser windows opened by WebDriver.",
      "type": "mcq"
    }
  ],
  "Selenium-Intermediate": [
    {
      "id": 6,
      "question": "Explain the difference between implicit and explicit waits in Selenium.",
      "options": [
        "Implicit waits are global, explicit waits are for specific conditions.",
        "Implicit waits are for static elements, explicit waits for dynamic elements.",
        "Implicit waits throw exceptions, explicit waits return boolean.",
        "Implicit waits are faster, explicit waits are slower."
      ],
      "correctAnswer": 0,
      "explanation": "Implicit waits tell WebDriver to poll the DOM for a certain amount of time when trying to find an element or elements if they are not immediately available. Explicit waits are used to wait for a particular condition to occur before proceeding with further actions.",
      "type": "conceptual"
    },
    {
      "id": 7,
      "question": "What is the Page Object Model (POM) in Selenium?",
      "options": [
        "A design pattern to create an object repository for UI elements.",
        "A way to organize test data in an Excel sheet.",
        "A method for parallel test execution.",
        "A logging framework for test results."
      ],
      "correctAnswer": 0,
      "explanation": "POM is a design pattern where web UI elements are represented as objects, making tests more readable, reusable, and maintainable.",
      "type": "conceptual"
    },
    {
      "id": 8,
      "question": "How can you handle an `Alert` (popup) in Selenium WebDriver?",
      "options": [
        "Using `driver.switchTo().alert()`",
        "Using `driver.handleAlert()`",
        "Using `driver.popup()`",
        "Alerts cannot be handled by Selenium."
      ],
      "correctAnswer": 0,
      "explanation": "`driver.switchTo().alert()` returns an `Alert` object, which can then be used to accept, dismiss, or get text from the alert.",
      "type": "mcq"
    },
    {
      "id": 9,
      "question": "Describe a scenario where you would use `Actions` class in Selenium.",
      "options": [
        "To perform complex user interactions like drag-and-drop or hover.",
        "To manage database connections.",
        "To generate random test data.",
        "To configure browser settings."
      ],
      "correctAnswer": 0,
      "explanation": "The `Actions` class is used for performing advanced user interactions such as keyboard and mouse events, like right-clicking, double-clicking, drag-and-drop, and hovering over elements.",
      "type": "scenario"
    },
    {
      "id": 10,
      "question": "What is Selenium Grid and when would you use it?",
      "options": [
        "To run tests on multiple machines and browsers in parallel.",
        "To manage test cases and generate reports.",
        "To record and playback browser interactions.",
        "To integrate with CI/CD pipelines."
      ],
      "correctAnswer": 0,
      "explanation": "Selenium Grid allows you to run your tests on different machines against different browsers in parallel, significantly speeding up test execution, especially for large test suites.",
      "type": "conceptual"
    }
  ],
  "Selenium-Advanced": [
    {
      "id": 11,
      "question": "How would you implement a custom `ExpectedCondition` in Selenium WebDriver?",
      "options": [
        "By implementing the `ExpectedCondition` interface with a custom `apply` method.",
        "By extending the `WebDriverWait` class and overriding its methods.",
        "By creating a new `WebElement` type.",
        "Custom conditions are not supported in Selenium."
      ],
      "correctAnswer": 0,
      "explanation": "You can create a custom `ExpectedCondition` by implementing the `ExpectedCondition` interface (or using a lambda in Java 8+) and defining the logic for the `apply` method to wait for a specific, complex condition.",
      "type": "conceptual"
    },
    {
      "id": 12,
      "question": "Discuss strategies for handling dynamic web elements (e.g., changing IDs, AJAX content) in Selenium.",
      "options": [
        "Using more robust locators like XPath axes, CSS selectors, or partial attributes; explicit waits for element visibility/interactability.",
        "Hardcoding waits with `Thread.sleep()` for every dynamic element.",
        "Ignoring dynamic elements and testing only static parts of the page.",
        "Refreshing the page repeatedly until the element appears."
      ],
      "correctAnswer": 0,
      "explanation": "Effective strategies include using reliable locators that don't depend on dynamic attributes, utilizing explicit waits for specific conditions (e.g., `visibilityOfElementLocated`), and designing Page Objects that abstract element location logic.",
      "type": "scenario"
    },
    {
      "id": 13,
      "question": "How do you integrate Selenium tests into a CI/CD pipeline (e.g., Jenkins)?",
      "options": [
        "By configuring a build job to execute test runner commands (e.g., Maven, Gradle) and publishing test reports.",
        "By manually running tests after each deployment.",
        "By using Selenium IDE to record CI/CD steps.",
        "CI/CD integration is not possible with Selenium."
      ],
      "correctAnswer": 0,
      "explanation": "In a CI/CD pipeline, you typically configure a build step to execute your Selenium test suite using build tools like Maven or Gradle. The pipeline can then collect and publish test reports (e.g., JUnit XML reports) for analysis.",
      "type": "conceptual"
    },
    {
      "id": 14,
      "question": "Explain the concept of headless browser testing with Selenium and its benefits.",
      "options": [
        "Running browser tests without a visible UI, improving performance and enabling execution on servers without graphical interfaces.",
        "Testing a web application only on its backend, without any browser.",
        "Using a special browser that only renders text content.",
        "A testing approach that requires physical user interaction."
      ],
      "correctAnswer": 0,
      "explanation": "Headless browser testing involves running tests using a browser that does not display its graphical user interface. Benefits include faster execution, reduced resource consumption, and the ability to run tests on CI servers without a display environment.",
      "type": "conceptual"
    },
    {
      "id": 15,
      "question": "Design a robust framework strategy for handling flaky Selenium tests.",
      "options": [
        "Implementing retry mechanisms for failed tests, using explicit waits effectively, improving locator strategy, and ensuring proper test isolation.",
        "Ignoring flaky tests and focusing on new features.",
        "Running all tests manually to avoid flakiness.",
        "Decreasing the number of test cases to reduce flakiness."
      ],
      "correctAnswer": 0,
      "explanation": "Strategies for robust frameworks include implementing automatic test retries, ensuring intelligent waits, writing resilient locators, managing test data properly, and establishing clear test preconditions and postconditions to minimize flakiness.",
      "type": "scenario"
    }
  ]
};
