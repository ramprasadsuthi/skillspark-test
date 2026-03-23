import { type Question } from "../questionUtils";

export const sql_testQuestions: Record<string, Question[]> = {
  "SQL-Beginner": [
{
  id: 1,
  question: "What does SQL stand for?",
  options: ["Simple Query Language","Structured Query Language","System Query Language","Sequential Query Logic"],
  correctAnswer: 1,
  explanation: "SQL stands for Structured Query Language, used to manage and query relational databases.",
  type: "mcq"
},
{
  id: 2,
  question: "Which SQL command is used to retrieve data?",
  options: ["SELECT","GET","FETCH","RETRIEVE"],
  correctAnswer: 0,
  explanation: "SELECT is used to fetch data from a database table.",
  type: "mcq"
},
{
  id: 3,
  question: "Which clause is used to filter records?",
  options: ["HAVING","GROUP BY","WHERE","ORDER BY"],
  correctAnswer: 2,
  explanation: "WHERE is used to filter rows based on conditions.",
  type: "mcq"
},
{
  id: 4,
  question: "Which SQL command is used to insert data?",
  options: ["CREATE","INSERT INTO","PUT","ADD"],
  correctAnswer: 1,
  explanation: "INSERT INTO is used to add new records into a table.",
  type: "mcq"
},
{
  id: 5,
  question: "Which command deletes data?",
  options: ["CLEAR","DROP","DELETE","REMOVE"],
  correctAnswer: 2,
  explanation: "DELETE removes specific rows from a table.",
  type: "mcq"
},

{
  id: 6,
  question: "Which command updates data?",
  options: ["SET","CHANGE","UPDATE","MODIFY"],
  correctAnswer: 2,
  explanation: "UPDATE modifies existing records in a table.",
  type: "mcq"
},
{
  id: 7,
  question: "Which clause sorts data?",
  options: ["GROUP BY","ORDER BY","FILTER","SORT BY"],
  correctAnswer: 1,
  explanation: "ORDER BY sorts the result set in ascending or descending order.",
  type: "mcq"
},
{
  id: 8,
  question: "Which keyword removes duplicate records?",
  options: ["FILTER","DISTINCT","GROUP","UNIQUE"],
  correctAnswer: 1,
  explanation: "DISTINCT removes duplicate values from query results.",
  type: "mcq"
},
{
  id: 9,
  question: "Which command creates table?",
  options: ["NEW TABLE","CREATE TABLE","MAKE TABLE","ADD TABLE"],
  correctAnswer: 1,
  explanation: "CREATE TABLE is used to create a new table.",
  type: "mcq"
},
{
  id: 10,
  question: "Which command deletes table?",
  options: ["REMOVE TABLE","DROP TABLE","CLEAR TABLE","DELETE TABLE"],
  correctAnswer: 1,
  explanation: "DROP TABLE deletes the entire table structure.",
  type: "mcq"
},

{
  id: 11,
  question: "Which keyword limits results?",
  options: ["TOP","LIMIT","FILTER","BOTH"],
  correctAnswer: 1,
  explanation: "LIMIT restricts the number of rows returned.",
  type: "mcq"
},
{
  id: 12,
  question: "Which clause groups data?",
  options: ["JOIN","GROUP BY","WHERE","ORDER BY"],
  correctAnswer: 1,
  explanation: "GROUP BY groups rows with the same values.",
  type: "mcq"
},
{
  id: 13,
  question: "Which clause filters grouped data?",
  options: ["HAVING","GROUP BY","ORDER BY","WHERE"],
  correctAnswer: 0,
  explanation: "HAVING filters grouped results.",
  type: "mcq"
},
{
  id: 14,
  question: "Which operator is used for pattern matching?",
  options: ["BETWEEN","LIKE","=","IN"],
  correctAnswer: 1,
  explanation: "LIKE is used for pattern matching using wildcards.",
  type: "mcq"
},
{
  id: 15,
  question: "Which keyword checks NULL?",
  options: ["= NULL","CHECK NULL","IS NULL","NULL ="],
  correctAnswer: 2,
  explanation: "IS NULL checks for missing values.",
  type: "mcq"
},

{
  id: 16,
  question: "Which keyword checks multiple values?",
  options: ["IN","LIKE","=","BETWEEN"],
  correctAnswer: 0,
  explanation: "IN checks multiple values in a list.",
  type: "mcq"
},
{
  id: 17,
  question: "Which operator checks range?",
  options: ["LIKE","BETWEEN","=","IN"],
  correctAnswer: 1,
  explanation: "BETWEEN filters values within a range.",
  type: "mcq"
},
{
  id: 18,
  question: "Which joins all matching records?",
  options: ["LEFT JOIN","FULL JOIN","INNER JOIN","RIGHT JOIN"],
  correctAnswer: 2,
  explanation: "INNER JOIN returns matching records from both tables.",
  type: "mcq"
},
{
  id: 19,
  question: "Which join returns all left records?",
  options: ["RIGHT JOIN","FULL JOIN","INNER JOIN","LEFT JOIN"],
  correctAnswer: 3,
  explanation: "LEFT JOIN returns all rows from left table.",
  type: "mcq"
},
{
  id: 20,
  question: "Which join returns all right records?",
  options: ["LEFT JOIN","INNER JOIN","RIGHT JOIN","FULL JOIN"],
  correctAnswer: 2,
  explanation: "RIGHT JOIN returns all rows from right table.",
  type: "mcq"
},

{
  id: 21,
  question: "Which function counts rows?",
  options: ["SUM()","COUNT()","AVG()","MAX()"],
  correctAnswer: 1,
  explanation: "COUNT() returns total number of rows.",
  type: "mcq"
},
{
  id: 22,
  question: "Which function finds maximum?",
  options: ["MIN()","MAX()","AVG()","SUM()"],
  correctAnswer: 1,
  explanation: "MAX() returns highest value.",
  type: "mcq"
},
{
  id: 23,
  question: "Which function finds minimum?",
  options: ["MAX()","AVG()","MIN()","SUM()"],
  correctAnswer: 2,
  explanation: "MIN() returns lowest value.",
  type: "mcq"
},
{
  id: 24,
  question: "Which function calculates average?",
  options: ["COUNT()","AVG()","SUM()","MAX()"],
  correctAnswer: 1,
  explanation: "AVG() calculates average value.",
  type: "mcq"
},
{
  id: 25,
  question: "Which function calculates sum?",
  options: ["MAX()","SUM()","COUNT()","AVG()"],
  correctAnswer: 1,
  explanation: "SUM() adds values.",
  type: "mcq"
},

{
  id: 26,
  question: "Which keyword renames column?",
  options: ["RENAME","AS","CHANGE","NAME"],
  correctAnswer: 1,
  explanation: "AS is used to rename columns temporarily.",
  type: "mcq"
},
{
  id: 27,
  question: "Which constraint ensures uniqueness?",
  options: ["PRIMARY KEY","CHECK","UNIQUE","FOREIGN KEY"],
  correctAnswer: 2,
  explanation: "UNIQUE ensures all values are different.",
  type: "mcq"
},
{
  id: 28,
  question: "Which constraint is primary identifier?",
  options: ["UNIQUE","PRIMARY KEY","CHECK","FOREIGN KEY"],
  correctAnswer: 1,
  explanation: "PRIMARY KEY uniquely identifies each record.",
  type: "mcq"
},
{
  id: 29,
  question: "Which constraint links tables?",
  options: ["PRIMARY KEY","UNIQUE","FOREIGN KEY","CHECK"],
  correctAnswer: 2,
  explanation: "FOREIGN KEY creates relationship between tables.",
  type: "mcq"
},
{
  id: 30,
  question: "Which constraint checks condition?",
  options: ["PRIMARY KEY","CHECK","FOREIGN KEY","UNIQUE"],
  correctAnswer: 1,
  explanation: "CHECK enforces condition on data.",
  type: "mcq"
},

{
  id: 31,
  question: "Which command modifies table?",
  options: ["UPDATE TABLE","ALTER TABLE","CHANGE TABLE","MODIFY TABLE"],
  correctAnswer: 1,
  explanation: "ALTER TABLE modifies structure.",
  type: "mcq"
},
{
  id: 32,
  question: "Which command removes all rows?",
  options: ["DELETE","TRUNCATE","DROP","CLEAR"],
  correctAnswer: 1,
  explanation: "TRUNCATE removes all rows quickly.",
  type: "mcq"
},
{
  id: 33,
  question: "Which command removes database?",
  options: ["DELETE DATABASE","DROP DATABASE","REMOVE DATABASE","CLEAR DATABASE"],
  correctAnswer: 1,
  explanation: "DROP DATABASE deletes entire database.",
  type: "mcq"
},
{
  id: 34,
  question: "Which command creates database?",
  options: ["NEW DATABASE","CREATE DATABASE","ADD DATABASE","MAKE DATABASE"],
  correctAnswer: 1,
  explanation: "CREATE DATABASE creates new DB.",
  type: "mcq"
},
{
  id: 35,
  question: "Which clause limits rows?",
  options: ["TOP","FILTER","LIMIT","BOTH"],
  correctAnswer: 2,
  explanation: "LIMIT restricts number of rows.",
  type: "mcq"
},

{
  id: 36,
  question: "Which keyword sorts ascending?",
  options: ["DESC","ASC","UP","SORT"],
  correctAnswer: 1,
  explanation: "ASC sorts data ascending.",
  type: "mcq"
},
{
  id: 37,
  question: "Which keyword sorts descending?",
  options: ["ASC","DOWN","DESC","SORT"],
  correctAnswer: 2,
  explanation: "DESC sorts data descending.",
  type: "mcq"
},
{
  id: 38,
  question: "Which operator checks equality?",
  options: ["==","=","===","!="],
  correctAnswer: 1,
  explanation: "= checks equality.",
  type: "mcq"
},
{
  id: 39,
  question: "Which operator checks not equal?",
  options: ["=","!=","==","==="],
  correctAnswer: 1,
  explanation: "!= checks inequality.",
  type: "mcq"
},
{
  id: 40,
  question: "Which keyword combines queries?",
  options: ["JOIN","UNION","MERGE","LINK"],
  correctAnswer: 1,
  explanation: "UNION combines results.",
  type: "mcq"
},

{
  id: 41,
  question: "Which join returns all records?",
  options: ["INNER","LEFT","RIGHT","FULL JOIN"],
  correctAnswer: 3,
  explanation: "FULL JOIN returns all records.",
  type: "mcq"
},
{
  id: 42,
  question: "Which clause removes duplicates?",
  options: ["GROUP","DISTINCT","FILTER","UNIQUE"],
  correctAnswer: 1,
  explanation: "DISTINCT removes duplicates.",
  type: "mcq"
},
{
  id: 43,
  question: "Which keyword checks null?",
  options: ["CHECK NULL","IS NULL","= NULL","NULL"],
  correctAnswer: 1,
  explanation: "IS NULL checks null values.",
  type: "mcq"
},
{
  id: 44,
  question: "Which keyword checks not null?",
  options: ["!= NULL","NOT NULL","IS NOT NULL","NULL NOT"],
  correctAnswer: 2,
  explanation: "IS NOT NULL checks non-null values.",
  type: "mcq"
},
{
  id: 45,
  question: "Which keyword used in subquery?",
  options: ["FROM","SELECT","WHERE","ALL"],
  correctAnswer: 1,
  explanation: "SELECT is used in subqueries.",
  type: "mcq"
},

{
  id: 46,
  question: "Which command updates multiple rows?",
  options: ["INSERT","UPDATE","DELETE","ALTER"],
  correctAnswer: 1,
  explanation: "UPDATE modifies multiple rows.",
  type: "mcq"
},
{
  id: 47,
  question: "Which clause used with aggregate functions?",
  options: ["WHERE","JOIN","GROUP BY","ORDER BY"],
  correctAnswer: 2,
  explanation: "GROUP BY works with aggregates.",
  type: "mcq"
},
{
  id: 48,
  question: "Which clause filters after grouping?",
  options: ["GROUP","HAVING","WHERE","ORDER"],
  correctAnswer: 1,
  explanation: "HAVING filters grouped data.",
  type: "mcq"
},
{
  id: 49,
  question: "Which keyword renames table?",
  options: ["ALTER","RENAME","CHANGE","MODIFY"],
  correctAnswer: 1,
  explanation: "RENAME changes table name.",
  type: "mcq"
},
{
  id: 50,
  question: "Which command saves changes?",
  options: ["STORE","APPLY","COMMIT","SAVE"],
  correctAnswer: 2,
  explanation: "COMMIT saves transactions permanently.",
  type: "mcq"
}
],

"SQL-Intermediate": [
{
  id: 1,
  question: "What is the difference between WHERE and HAVING?",
  options: [
    "WHERE filters before grouping, HAVING filters after grouping",
    "HAVING filters before grouping, WHERE filters after grouping",
    "Both are same",
    "WHERE works only with JOIN"
  ],
  correctAnswer: 0,
  explanation: "WHERE filters rows before grouping, HAVING filters groups after aggregation.",
  type: "conceptual"
},
{
  id: 2,
  question: "Which JOIN returns records present in both tables?",
  options: [
    "LEFT JOIN",
    "RIGHT JOIN",
    "INNER JOIN",
    "FULL JOIN"
  ],
  correctAnswer: 2,
  explanation: "INNER JOIN returns matching records from both tables.",
  type: "mcq"
},
{
  id: 3,
  question: "What does a LEFT JOIN return?",
  options: [
    "Only matching records",
    "All records from right table",
    "All records from left table and matched from right",
    "Only unmatched records"
  ],
  correctAnswer: 2,
  explanation: "LEFT JOIN returns all rows from left table and matching rows from right.",
  type: "conceptual"
},
{
  id: 4,
  question: "What is a subquery?",
  options: [
    "Query inside another query",
    "A join operation",
    "A database",
    "A table"
  ],
  correctAnswer: 0,
  explanation: "A subquery is a query nested inside another SQL query.",
  type: "conceptual"
},
{
  id: 5,
  question: "Which clause is used with subqueries?",
  options: [
    "WHERE",
    "SELECT",
    "FROM",
    "All of the above"
  ],
  correctAnswer: 3,
  explanation: "Subqueries can be used in SELECT, FROM, and WHERE clauses.",
  type: "mcq"
},

{
  id: 6,
  question: "Which keyword is used to sort results in descending order?",
  options: [
    "ASC",
    "DESC",
    "DOWN",
    "SORT"
  ],
  correctAnswer: 1,
  explanation: "DESC sorts data in descending order.",
  type: "mcq"
},
{
  id: 7,
  question: "What is a primary key?",
  options: [
    "A duplicate column",
    "A unique identifier for each row",
    "A foreign key",
    "A nullable column"
  ],
  correctAnswer: 1,
  explanation: "Primary key uniquely identifies each record.",
  type: "conceptual"
},
{
  id: 8,
  question: "What is a foreign key?",
  options: [
    "Primary identifier",
    "Column linking two tables",
    "Duplicate column",
    "Temporary key"
  ],
  correctAnswer: 1,
  explanation: "Foreign key creates relationship between tables.",
  type: "conceptual"
},
{
  id: 9,
  question: "Which constraint prevents NULL values?",
  options: [
    "CHECK",
    "UNIQUE",
    "NOT NULL",
    "DEFAULT"
  ],
  correctAnswer: 2,
  explanation: "NOT NULL ensures column cannot have null values.",
  type: "mcq"
},
{
  id: 10,
  question: "What is normalization?",
  options: [
    "Removing redundancy",
    "Adding duplicates",
    "Sorting data",
    "Deleting data"
  ],
  correctAnswer: 0,
  explanation: "Normalization reduces redundancy and improves integrity.",
  type: "conceptual"
},

// 🔥 continuing

{
  id: 11,
  question: "Which normal form removes partial dependency?",
  options: [
    "1NF",
    "2NF",
    "3NF",
    "BCNF"
  ],
  correctAnswer: 1,
  explanation: "2NF removes partial dependency.",
  type: "conceptual"
},
{
  id: 12,
  question: "Which normal form removes transitive dependency?",
  options: [
    "1NF",
    "2NF",
    "3NF",
    "BCNF"
  ],
  correctAnswer: 2,
  explanation: "3NF removes transitive dependency.",
  type: "conceptual"
},
{
  id: 13,
  question: "What does GROUP BY do?",
  options: [
    "Sorts data",
    "Groups rows",
    "Deletes duplicates",
    "Filters data"
  ],
  correctAnswer: 1,
  explanation: "GROUP BY groups rows with same values.",
  type: "mcq"
},
{
  id: 14,
  question: "Which function returns average value?",
  options: [
    "SUM()",
    "AVG()",
    "COUNT()",
    "MAX()"
  ],
  correctAnswer: 1,
  explanation: "AVG() calculates average.",
  type: "mcq"
},
{
  id: 15,
  question: "Which keyword is used to avoid duplicate records?",
  options: [
    "UNIQUE",
    "DISTINCT",
    "FILTER",
    "GROUP"
  ],
  correctAnswer: 1,
  explanation: "DISTINCT removes duplicates.",
  type: "mcq"
},

// 🔥 jumping ahead (complete till 50)

{
  id: 16,
  question: "What is index in SQL?",
  options: [
    "Improves query performance",
    "Stores data",
    "Deletes data",
    "Joins tables"
  ],
  correctAnswer: 0,
  explanation: "Index improves query speed.",
  type: "conceptual"
},
{
  id: 17,
  question: "What is view?",
  options: [
    "Virtual table",
    "Physical table",
    "Database",
    "Index"
  ],
  correctAnswer: 0,
  explanation: "View is virtual table based on query.",
  type: "conceptual"
},
{
  id: 18,
  question: "What is trigger?",
  options: [
    "Auto-executed SQL",
    "Manual query",
    "Join",
    "Constraint"
  ],
  correctAnswer: 0,
  explanation: "Trigger executes automatically.",
  type: "conceptual"
},
{
  id: 19,
  question: "What is stored procedure?",
  options: [
    "Saved SQL code",
    "Table",
    "View",
    "Index"
  ],
  correctAnswer: 0,
  explanation: "Stored procedure is reusable SQL.",
  type: "conceptual"
},
{
  id: 20,
  question: "Which keyword removes duplicates in UNION?",
  options: [
    "UNION",
    "UNION ALL",
    "JOIN",
    "MERGE"
  ],
  correctAnswer: 0,
  explanation: "UNION removes duplicates.",
  type: "mcq"
},

// Continue till 50 (balanced)

{
  id: 21,
  question: "Which keyword includes duplicates?",
  options: ["UNION","UNION ALL","JOIN","MERGE"],
  correctAnswer: 1,
  explanation: "UNION ALL keeps duplicates.",
  type: "mcq"
},
{
  id: 22,
  question: "What is self join?",
  options: ["Join same table","Join two tables","Delete rows","Insert rows"],
  correctAnswer: 0,
  explanation: "Self join joins table with itself.",
  type: "conceptual"
},
{
  id: 23,
  question: "Which clause is executed first?",
  options: ["SELECT","FROM","WHERE","GROUP BY"],
  correctAnswer: 1,
  explanation: "FROM executes first.",
  type: "conceptual"
},
{
  id: 24,
  question: "What is alias?",
  options: ["Temporary name","Permanent name","Table","Column"],
  correctAnswer: 0,
  explanation: "Alias gives temporary name.",
  type: "mcq"
},
{
  id: 25,
  question: "What is schema?",
  options: ["Database structure","Table","Row","Column"],
  correctAnswer: 0,
  explanation: "Schema defines structure.",
  type: "conceptual"
},

// Final

{
  id: 26,
  question: "Which clause is used for filtering aggregated data?",
  options: ["WHERE","HAVING","GROUP","ORDER"],
  correctAnswer: 1,
  explanation: "HAVING filters aggregated data.",
  type: "mcq"
},
{
  id: 27,
  question: "Which join returns unmatched rows?",
  options: ["LEFT JOIN","INNER JOIN","CROSS JOIN","SELF JOIN"],
  correctAnswer: 0,
  explanation: "LEFT JOIN returns unmatched left rows.",
  type: "conceptual"
},
{
  id: 28,
  question: "What is transaction?",
  options: ["Group of operations","Table","Query","Join"],
  correctAnswer: 0,
  explanation: "Transaction is unit of work.",
  type: "conceptual"
},
{
  id: 29,
  question: "Which command rolls back changes?",
  options: ["ROLLBACK","COMMIT","SAVE","UNDO"],
  correctAnswer: 0,
  explanation: "ROLLBACK undoes changes.",
  type: "mcq"
},
{
  id: 30,
  question: "Which command saves transaction?",
  options: ["SAVE","COMMIT","STORE","APPLY"],
  correctAnswer: 1,
  explanation: "COMMIT saves changes.",
  type: "mcq"
},

{
  id: 31,
  question: "What is ACID property?",
  options: ["Transaction rules","Join type","Constraint","Index"],
  correctAnswer: 0,
  explanation: "ACID ensures reliability.",
  type: "conceptual"
},
{
  id: 32,
  question: "Which ensures atomicity?",
  options: ["Transaction","Join","Index","Constraint"],
  correctAnswer: 0,
  explanation: "Atomicity ensures all or none.",
  type: "conceptual"
},
{
  id: 33,
  question: "Which ensures consistency?",
  options: ["ACID","JOIN","INDEX","VIEW"],
  correctAnswer: 0,
  explanation: "Consistency maintains integrity.",
  type: "conceptual"
},
{
  id: 34,
  question: "Which ensures isolation?",
  options: ["ACID","JOIN","INDEX","VIEW"],
  correctAnswer: 0,
  explanation: "Isolation separates transactions.",
  type: "conceptual"
},
{
  id: 35,
  question: "Which ensures durability?",
  options: ["ACID","JOIN","INDEX","VIEW"],
  correctAnswer: 0,
  explanation: "Durability keeps data safe.",
  type: "conceptual"
},

{
  id: 36,
  question: "Which join returns Cartesian product?",
  options: ["CROSS JOIN","INNER JOIN","LEFT JOIN","RIGHT JOIN"],
  correctAnswer: 0,
  explanation: "CROSS JOIN returns all combinations.",
  type: "mcq"
},
{
  id: 37,
  question: "Which function returns highest value?",
  options: ["MAX()","MIN()","AVG()","SUM()"],
  correctAnswer: 0,
  explanation: "MAX returns highest.",
  type: "mcq"
},
{
  id: 38,
  question: "Which function returns total rows?",
  options: ["COUNT()","SUM()","AVG()","MIN()"],
  correctAnswer: 0,
  explanation: "COUNT returns total.",
  type: "mcq"
},
{
  id: 39,
  question: "Which clause removes duplicates?",
  options: ["DISTINCT","GROUP","ORDER","FILTER"],
  correctAnswer: 0,
  explanation: "DISTINCT removes duplicates.",
  type: "mcq"
},
{
  id: 40,
  question: "Which clause sorts results?",
  options: ["ORDER BY","GROUP BY","WHERE","HAVING"],
  correctAnswer: 0,
  explanation: "ORDER BY sorts.",
  type: "mcq"
},

{
  id: 41,
  question: "Which clause filters rows?",
  options: ["WHERE","HAVING","GROUP","ORDER"],
  correctAnswer: 0,
  explanation: "WHERE filters rows.",
  type: "mcq"
},
{
  id: 42,
  question: "Which clause groups rows?",
  options: ["GROUP BY","WHERE","ORDER","JOIN"],
  correctAnswer: 0,
  explanation: "GROUP BY groups rows.",
  type: "mcq"
},
{
  id: 43,
  question: "Which clause joins tables?",
  options: ["JOIN","WHERE","GROUP","ORDER"],
  correctAnswer: 0,
  explanation: "JOIN combines tables.",
  type: "mcq"
},
{
  id: 44,
  question: "Which keyword checks range?",
  options: ["BETWEEN","IN","LIKE","="],
  correctAnswer: 0,
  explanation: "BETWEEN checks range.",
  type: "mcq"
},
{
  id: 45,
  question: "Which keyword checks pattern?",
  options: ["LIKE","IN","BETWEEN","="],
  correctAnswer: 0,
  explanation: "LIKE matches patterns.",
  type: "mcq"
},

{
  id: 46,
  question: "Which keyword checks multiple values?",
  options: ["IN","LIKE","BETWEEN","="],
  correctAnswer: 0,
  explanation: "IN checks multiple values.",
  type: "mcq"
},
{
  id: 47,
  question: "Which clause used for subquery filtering?",
  options: ["WHERE","GROUP","ORDER","JOIN"],
  correctAnswer: 0,
  explanation: "WHERE used with subqueries.",
  type: "mcq"
},
{
  id: 48,
  question: "Which keyword renames column?",
  options: ["AS","RENAME","CHANGE","NAME"],
  correctAnswer: 0,
  explanation: "AS renames column.",
  type: "mcq"
},
{
  id: 49,
  question: "Which clause limits results?",
  options: ["LIMIT","TOP","FILTER","GROUP"],
  correctAnswer: 0,
  explanation: "LIMIT restricts rows.",
  type: "mcq"
},
{
  id: 50,
  question: "Which keyword combines results?",
  options: ["UNION","JOIN","MERGE","LINK"],
  correctAnswer: 0,
  explanation: "UNION combines results.",
  type: "mcq"
}
],
"SQL-Advanced": [
{
  id: 1,
  question: "What is a window function in SQL?",
  options: [
    "Function that operates on entire table",
    "Function that works on a subset of rows without collapsing them",
    "Aggregate function only",
    "Function for indexing"
  ],
  correctAnswer: 1,
  explanation: "Window functions perform calculations across a set of rows while retaining individual rows.",
  type: "conceptual"
},
{
  id: 2,
  question: "Which clause is used with window functions?",
  options: [
    "OVER()",
    "GROUP BY",
    "WHERE",
    "HAVING"
  ],
  correctAnswer: 0,
  explanation: "OVER() defines the window for window functions.",
  type: "mcq"
},
{
  id: 3,
  question: "Which function assigns rank without gaps?",
  options: [
    "RANK()",
    "DENSE_RANK()",
    "ROW_NUMBER()",
    "ORDER_RANK()"
  ],
  correctAnswer: 1,
  explanation: "DENSE_RANK does not skip ranking numbers.",
  type: "mcq"
},
{
  id: 4,
  question: "Which function assigns unique row numbers?",
  options: [
    "RANK()",
    "ROW_NUMBER()",
    "DENSE_RANK()",
    "COUNT()"
  ],
  correctAnswer: 1,
  explanation: "ROW_NUMBER assigns unique sequence numbers.",
  type: "mcq"
},
{
  id: 5,
  question: "Which function may skip rank numbers?",
  options: [
    "ROW_NUMBER()",
    "RANK()",
    "DENSE_RANK()",
    "AVG()"
  ],
  correctAnswer: 1,
  explanation: "RANK skips numbers when ties occur.",
  type: "conceptual"
},

{
  id: 6,
  question: "What is indexing?",
  options: [
    "Improves query performance",
    "Stores data",
    "Deletes rows",
    "Joins tables"
  ],
  correctAnswer: 0,
  explanation: "Indexes improve data retrieval speed.",
  type: "conceptual"
},
{
  id: 7,
  question: "Which type of index is default?",
  options: [
    "Clustered Index",
    "Non-Clustered Index",
    "Unique Index",
    "Composite Index"
  ],
  correctAnswer: 0,
  explanation: "Clustered index defines physical order.",
  type: "conceptual"
},
{
  id: 8,
  question: "How many clustered indexes per table?",
  options: [
    "1",
    "Many",
    "Unlimited",
    "0"
  ],
  correctAnswer: 0,
  explanation: "Only one clustered index per table.",
  type: "mcq"
},
{
  id: 9,
  question: "What is query optimization?",
  options: [
    "Improving query performance",
    "Deleting data",
    "Creating tables",
    "Sorting data"
  ],
  correctAnswer: 0,
  explanation: "Optimization improves execution efficiency.",
  type: "conceptual"
},
{
  id: 10,
  question: "Which keyword analyzes query plan?",
  options: [
    "EXPLAIN",
    "PLAN",
    "SHOW",
    "DEBUG"
  ],
  correctAnswer: 0,
  explanation: "EXPLAIN shows execution plan.",
  type: "mcq"
},

{
  id: 11,
  question: "What is normalization?",
  options: [
    "Reducing redundancy",
    "Increasing redundancy",
    "Sorting data",
    "Deleting rows"
  ],
  correctAnswer: 0,
  explanation: "Normalization reduces redundancy.",
  type: "conceptual"
},
{
  id: 12,
  question: "What is denormalization?",
  options: [
    "Adding redundancy for performance",
    "Removing duplicates",
    "Deleting tables",
    "Creating indexes"
  ],
  correctAnswer: 0,
  explanation: "Denormalization improves read performance.",
  type: "conceptual"
},
{
  id: 13,
  question: "Which join is fastest?",
  options: [
    "INNER JOIN",
    "LEFT JOIN",
    "RIGHT JOIN",
    "FULL JOIN"
  ],
  correctAnswer: 0,
  explanation: "INNER JOIN is generally faster.",
  type: "conceptual"
},
{
  id: 14,
  question: "Which operation is costly?",
  options: [
    "JOIN",
    "INDEX",
    "SELECT",
    "WHERE"
  ],
  correctAnswer: 0,
  explanation: "JOIN operations can be expensive.",
  type: "conceptual"
},
{
  id: 15,
  question: "What is composite key?",
  options: [
    "Multiple columns as key",
    "Single column key",
    "Foreign key",
    "Index"
  ],
  correctAnswer: 0,
  explanation: "Composite key uses multiple columns.",
  type: "conceptual"
},

// 🔥 continuing (shortened but complete 50)

{
  id: 16,
  question: "What is CTE?",
  options: ["Common Table Expression","Column Table Engine","Custom Table Entry","None"],
  correctAnswer: 0,
  explanation: "CTE is temporary result set.",
  type: "conceptual"
},
{
  id: 17,
  question: "Which keyword defines CTE?",
  options: ["WITH","DEFINE","TEMP","TABLE"],
  correctAnswer: 0,
  explanation: "WITH defines CTE.",
  type: "mcq"
},
{
  id: 18,
  question: "What is recursive query?",
  options: ["Self-referencing query","Join query","Delete query","Insert query"],
  correctAnswer: 0,
  explanation: "Recursive queries reference themselves.",
  type: "conceptual"
},
{
  id: 19,
  question: "What is partition in window function?",
  options: ["Divides data into groups","Deletes rows","Joins tables","Sorts data"],
  correctAnswer: 0,
  explanation: "PARTITION BY splits data.",
  type: "conceptual"
},
{
  id: 20,
  question: "Which clause defines partition?",
  options: ["PARTITION BY","GROUP BY","ORDER BY","WHERE"],
  correctAnswer: 0,
  explanation: "PARTITION BY used in window functions.",
  type: "mcq"
},

{
  id: 21,
  question: "What is materialized view?",
  options: ["Stored result set","Virtual table","Index","Join"],
  correctAnswer: 0,
  explanation: "Materialized view stores data physically.",
  type: "conceptual"
},
{
  id: 22,
  question: "Which improves performance?",
  options: ["Index","View","Trigger","Join"],
  correctAnswer: 0,
  explanation: "Index speeds queries.",
  type: "mcq"
},
{
  id: 23,
  question: "What is deadlock?",
  options: ["Two transactions waiting each other","Join issue","Index issue","Query error"],
  correctAnswer: 0,
  explanation: "Deadlock occurs in locking.",
  type: "conceptual"
},
{
  id: 24,
  question: "What is isolation level?",
  options: ["Transaction separation","Join","Index","Constraint"],
  correctAnswer: 0,
  explanation: "Defines transaction visibility.",
  type: "conceptual"
},
{
  id: 25,
  question: "Which isolation level avoids dirty reads?",
  options: ["READ COMMITTED","READ UNCOMMITTED","SERIALIZABLE","REPEATABLE"],
  correctAnswer: 0,
  explanation: "READ COMMITTED avoids dirty reads.",
  type: "conceptual"
},

{
  id: 26,
  question: "What is indexing drawback?",
  options: ["Slower inserts","Faster reads","Better joins","Less memory"],
  correctAnswer: 0,
  explanation: "Indexes slow inserts/updates.",
  type: "conceptual"
},
{
  id: 27,
  question: "Which function calculates running total?",
  options: ["SUM() OVER()","COUNT()","AVG()","MAX()"],
  correctAnswer: 0,
  explanation: "Window SUM used.",
  type: "mcq"
},
{
  id: 28,
  question: "Which clause orders window function?",
  options: ["ORDER BY","GROUP BY","WHERE","JOIN"],
  correctAnswer: 0,
  explanation: "ORDER BY defines order.",
  type: "mcq"
},
{
  id: 29,
  question: "What is execution plan?",
  options: ["Query strategy","Table","Index","Join"],
  correctAnswer: 0,
  explanation: "Shows how query runs.",
  type: "conceptual"
},
{
  id: 30,
  question: "Which keyword improves readability?",
  options: ["Alias","Index","Join","Group"],
  correctAnswer: 0,
  explanation: "Alias improves readability.",
  type: "conceptual"
},

{
  id: 31,
  question: "What is scalar subquery?",
  options: ["Returns single value","Multiple rows","Join","Table"],
  correctAnswer: 0,
  explanation: "Returns one value.",
  type: "conceptual"
},
{
  id: 32,
  question: "What is correlated subquery?",
  options: ["Depends on outer query","Independent query","Join","Index"],
  correctAnswer: 0,
  explanation: "Executes per row.",
  type: "conceptual"
},
{
  id: 33,
  question: "What is temp table?",
  options: ["Temporary storage","Permanent table","Index","Join"],
  correctAnswer: 0,
  explanation: "Temp tables store temporary data.",
  type: "conceptual"
},
{
  id: 34,
  question: "What is bulk insert?",
  options: ["Insert large data","Delete data","Update data","Join"],
  correctAnswer: 0,
  explanation: "Used for large data insert.",
  type: "conceptual"
},
{
  id: 35,
  question: "Which improves query speed?",
  options: ["Index","Join","View","Trigger"],
  correctAnswer: 0,
  explanation: "Index speeds queries.",
  type: "mcq"
},

{
  id: 36,
  question: "What is cardinality?",
  options: ["Data uniqueness","Join","Index","Constraint"],
  correctAnswer: 0,
  explanation: "Cardinality shows uniqueness.",
  type: "conceptual"
},
{
  id: 37,
  question: "What is execution time?",
  options: ["Time taken by query","Join","Index","Table"],
  correctAnswer: 0,
  explanation: "Measures performance.",
  type: "conceptual"
},
{
  id: 38,
  question: "What is schema design?",
  options: ["Database structure","Query","Join","Index"],
  correctAnswer: 0,
  explanation: "Defines DB structure.",
  type: "conceptual"
},
{
  id: 39,
  question: "What is indexing strategy?",
  options: ["Plan for indexes","Join","Query","Table"],
  correctAnswer: 0,
  explanation: "Strategy improves performance.",
  type: "conceptual"
},
{
  id: 40,
  question: "What is OLTP?",
  options: ["Transactional system","Analytical","Join","Index"],
  correctAnswer: 0,
  explanation: "OLTP handles transactions.",
  type: "conceptual"
},

{
  id: 41,
  question: "What is OLAP?",
  options: ["Analytical system","Transactional","Join","Index"],
  correctAnswer: 0,
  explanation: "OLAP for analysis.",
  type: "conceptual"
},
{
  id: 42,
  question: "Which improves reporting?",
  options: ["OLAP","OLTP","JOIN","INDEX"],
  correctAnswer: 0,
  explanation: "OLAP used for reporting.",
  type: "mcq"
},
{
  id: 43,
  question: "What is star schema?",
  options: ["Fact + dimension tables","Join","Index","Query"],
  correctAnswer: 0,
  explanation: "Used in data warehouse.",
  type: "conceptual"
},
{
  id: 44,
  question: "What is snowflake schema?",
  options: ["Normalized star schema","Join","Index","Query"],
  correctAnswer: 0,
  explanation: "More normalized structure.",
  type: "conceptual"
},
{
  id: 45,
  question: "What is data warehouse?",
  options: ["Data storage for analysis","Transaction DB","Join","Index"],
  correctAnswer: 0,
  explanation: "Used for analytics.",
  type: "conceptual"
},

{
  id: 46,
  question: "What is ETL?",
  options: ["Extract Transform Load","Execute Test Load","Edit Transfer Link","None"],
  correctAnswer: 0,
  explanation: "ETL loads data.",
  type: "conceptual"
},
{
  id: 47,
  question: "What is data mart?",
  options: ["Subset of data warehouse","Full DB","Join","Index"],
  correctAnswer: 0,
  explanation: "Smaller DW.",
  type: "conceptual"
},
{
  id: 48,
  question: "What is fact table?",
  options: ["Stores measures","Stores dimension","Join","Index"],
  correctAnswer: 0,
  explanation: "Fact table stores metrics.",
  type: "conceptual"
},
{
  id: 49,
  question: "What is dimension table?",
  options: ["Descriptive data","Measures","Join","Index"],
  correctAnswer: 0,
  explanation: "Dimension describes data.",
  type: "conceptual"
},
{
  id: 50,
  question: "What is data consistency?",
  options: ["Accurate data","Duplicate data","Join","Index"],
  correctAnswer: 0,
  explanation: "Consistency ensures correctness.",
  type: "conceptual"
}
]
};
