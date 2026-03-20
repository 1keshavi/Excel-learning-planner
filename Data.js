// ── All 7 Days Data ──
const days = [
  {
    day: 1,
    title: "Day 1",
    name: "Excel Foundations",
    level: "Beginner",
    badge: "b-beginner",
    goal: "Navigate Excel confidently and enter/format data without hesitation.",
    sessions: [
      {
        title: "Interface & Navigation",
        time: "1 hr",
        icon: "ic-green",
        emoji: "🗂️",
        topics: [
          "Ribbon, Quick Access Toolbar, Name Box, Formula Bar",
          "Keyboard shortcuts: Ctrl+Arrow, Ctrl+Home/End, Ctrl+Shift+End",
          "Freeze panes, split view, zoom controls",
          "Saving as .xlsx vs .csv — when and why"
        ],
        practice:
          "Open a blank sheet. Use Ctrl+Arrow keys to reach the last row and column. Create a simple table with headers and 20 rows of dummy data."
      },
      {
        title: "Data Entry & Cell Formatting",
        time: "1 hr",
        icon: "ic-green",
        emoji: "✏️",
        topics: [
          "Data types: numbers, text, dates, booleans",
          "Custom number formats: #,##0.00, dd-mmm-yy, 0%",
          "Conditional formatting — color scales, data bars, icon sets",
          "Paste Special: values, formats, transpose"
        ],
        practice:
          "Format a sales dataset: currency columns, date columns with custom format, and apply conditional formatting to highlight top 10% values."
      },
      {
        title: "Sorting, Filtering & Tables",
        time: "1.5 hr",
        icon: "ic-teal",
        emoji: "🔍",
        topics: [
          "Multi-level sort (3+ columns)",
          "AutoFilter vs Advanced Filter",
          "Ctrl+T — converting to an Excel Table (structured references)",
          "Table styles, calculated columns, totals row",
          "Slicers for quick filtering on tables"
        ],
        practice:
          "Convert a raw dataset to an Excel Table. Add a calculated column for profit margin. Use slicers to filter by region and product category."
      }
    ]
  },

  {
    day: 2,
    title: "Day 2",
    name: "Core Formulas",
    level: "Beginner",
    badge: "b-beginner",
    goal: "Write formulas for aggregation, logic, and text manipulation without looking them up.",
    sessions: [
      {
        title: "Essential Math & Stats",
        time: "1 hr",
        icon: "ic-blue",
        emoji: "➕",
        topics: [
          "SUM, AVERAGE, COUNT, COUNTA, COUNTBLANK",
          "MIN, MAX, MEDIAN, MODE, STDEV",
          "SUMIF, SUMIFS, COUNTIF, COUNTIFS, AVERAGEIF",
          "Absolute vs relative references ($A$1 vs A1 vs $A1)"
        ],
        practice:
          "Summarize a sales table: total revenue by region, count of orders above ₹1,000, and average order value per product."
      },
      {
        title: "Logical & Lookup Basics",
        time: "1.5 hr",
        icon: "ic-blue",
        emoji: "🔀",
        topics: [
          "IF, IFS, nested IF (max 3 levels then switch to IFS)",
          "AND, OR, NOT inside IF statements",
          "VLOOKUP syntax, exact vs approximate match, #N/A handling",
          "IFERROR and IFNA wrappers",
          "HLOOKUP — when to use it vs VLOOKUP"
        ],
        practice:
          "Build a grade calculator using IFS. Use VLOOKUP to pull product prices from a reference table into an invoice sheet."
      },
      {
        title: "Text & Date Functions",
        time: "1 hr",
        icon: "ic-amber",
        emoji: "📅",
        topics: [
          "LEFT, RIGHT, MID, LEN, FIND, SEARCH",
          "CONCATENATE / TEXTJOIN, ampersand &",
          "UPPER, LOWER, PROPER, TRIM, CLEAN",
          "TODAY, NOW, DATE, DATEDIF, EDATE, EOMONTH",
          "WEEKDAY, WEEKNUM, NETWORKDAYS"
        ],
        practice:
          "Clean a messy name column (trim spaces, proper case, split first/last). Calculate days between order and delivery; flag orders over 7 days as Late."
      }
    ]
  },

  {
    day: 3,
    title: "Day 3",
    name: "Pivot Tables & Charts",
    level: "Intermediate",
    badge: "b-intermediate",
    goal: "Build a complete summarized report from raw data using pivot tables and visualizations.",
    sessions: [
      {
        title: "Pivot Tables Deep Dive",
        time: "2 hr",
        icon: "ic-purple",
        emoji: "📊",
        topics: [
          "Creating from Table vs range — why Tables are better",
          "Rows, Columns, Values, Filters areas — placement logic",
          "Value field settings: Sum, Count, Average, % of Grand Total, Running Total",
          "Grouping: dates by month/quarter/year, numbers into bins",
          "Calculated fields and calculated items",
          "Pivot Table options: show empty rows, preserve formatting on refresh"
        ],
        practice:
          "Analyze a 1,000-row sales dataset: monthly revenue trend, top 5 products by profit, and sales by region as % of total."
      },
      {
        title: "Pivot Charts & Slicers",
        time: "1.5 hr",
        icon: "ic-purple",
        emoji: "📈",
        topics: [
          "Inserting a Pivot Chart — linked vs disconnected",
          "Chart types: Column, Line, Bar, Combo (secondary axis)",
          "Formatting: removing gridlines, data labels, custom colors",
          "Slicers and Timelines — connecting to multiple pivot tables",
          "Slicer formatting and layout for dashboards"
        ],
        practice:
          "Create a mini dashboard: revenue by month (line chart), sales by region (bar chart), and a product breakdown pie chart — all controlled by one Region slicer."
      }
    ]
  },

  {
    day: 4,
    title: "Day 4",
    name: "Advanced Lookups & Arrays",
    level: "Intermediate",
    badge: "b-intermediate",
    goal: "Replace VLOOKUPs with modern functions and write your first array formulas.",
    sessions: [
      {
        title: "INDEX, MATCH & XLOOKUP",
        time: "1.5 hr",
        icon: "ic-blue",
        emoji: "🔎",
        topics: [
          "Why INDEX+MATCH beats VLOOKUP (left-column lookup, column inserts)",
          "INDEX(array, MATCH(lookup_val, range, 0)) pattern",
          "Two-way lookup with double INDEX+MATCH",
          "XLOOKUP — syntax, match mode, search mode, if_not_found",
          "XLOOKUP returning multiple columns at once"
        ],
        practice:
          "Rebuild your Day 2 VLOOKUP exercises using XLOOKUP. Add a two-way lookup to pull values from a matrix (product × month)."
      },
      {
        title: "Dynamic Array Functions",
        time: "1.5 hr",
        icon: "ic-coral",
        emoji: "⚡",
        topics: [
          "FILTER — extract rows meeting criteria",
          "SORT and SORTBY — dynamic sorted lists",
          "UNIQUE — deduplicate lists for dropdowns",
          "SEQUENCE — generate number/date series",
          "SPILL range concept — the # operator",
          "Combining: SORT(FILTER(...)) patterns"
        ],
        practice:
          "Build a dynamic top-10 table: use FILTER to extract orders over ₹500, SORT to rank by value, and UNIQUE to list contributing salespeople — no pivot table."
      },
      {
        title: "Array Formulas & LAMBDA",
        time: "1 hr",
        icon: "ic-coral",
        emoji: "λ",
        topics: [
          "Legacy Ctrl+Shift+Enter arrays vs modern spill arrays",
          "SUMPRODUCT for weighted averages and multi-criteria sums",
          "LAMBDA — creating reusable custom functions",
          "LET — naming intermediate calculations for readability",
          "MAP, REDUCE, SCAN for advanced array operations"
        ],
        practice:
          "Write a LAMBDA that calculates compound annual growth rate (CAGR). Use LET to build a readable multi-step margin formula."
      }
    ]
  },

  {
    day: 5,
    title: "Day 5",
    name: "Power Query",
    level: "Advanced",
    badge: "b-advanced",
    goal: "Automate data cleaning and combine multiple sources — no formulas needed.",
    sessions: [
      {
        title: "Power Query Fundamentals",
        time: "1.5 hr",
        icon: "ic-teal",
        emoji: "⚙️",
        topics: [
          "Launch Power Query: Data > Get Data > From...",
          "Connecting to Excel tables, CSV, folders, web URLs",
          "Query Editor UI: Applied Steps, Formula Bar (M code)",
          "Remove/rename columns, change data types, fill down/up",
          "Split column by delimiter and fixed width",
          "Replace values, remove duplicates, remove errors"
        ],
        practice:
          "Import a messy CSV: fix data types, remove blank rows, split a full-name column, trim whitespace, and load clean data back to a sheet."
      },
      {
        title: "Combining & Transforming Data",
        time: "2 hr",
        icon: "ic-teal",
        emoji: "🔗",
        topics: [
          "Merge Queries (joins): Left Outer, Inner, Full Outer",
          "Append Queries — stacking tables vertically",
          "Group By — aggregate in Power Query without pivot",
          "Unpivot Columns — wide to long format",
          "Conditional Column — if/then in PQ",
          "Adding Custom Columns with M expressions",
          "Folder connector — combine all files in a folder automatically"
        ],
        practice:
          "Combine 12 monthly sales CSV files from a folder into one table. Add a Month column. Group by region to get totals. Merge with a product reference table to add category."
      }
    ]
  },

  {
    day: 6,
    title: "Day 6",
    name: "Dashboard Design",
    level: "Advanced",
    badge: "b-advanced",
    goal: "Build a fully interactive, professional analytics dashboard from scratch.",
    sessions: [
      {
        title: "Dashboard Planning & Layout",
        time: "1 hr",
        icon: "ic-amber",
        emoji: "🎨",
        topics: [
          "Planning: KPIs, audience, and data story first",
          "Sheet structure: Raw Data | Calc | Dashboard — 3-sheet model",
          "Grid layout in Excel: column width as a design grid",
          "Removing gridlines, headers, formula bar for clean look",
          "Color palette — use 2-3 accent colors maximum",
          "Navigation with hyperlinks and form control buttons"
        ],
        practice:
          "Sketch a dashboard layout on paper: 3 KPI cards at top, 2 charts in the middle, 1 detail table below. Then set up the Excel sheet structure."
      },
      {
        title: "KPI Cards & Chart Polish",
        time: "1.5 hr",
        icon: "ic-amber",
        emoji: "💡",
        topics: [
          "KPI card: a single cell with a linked value + sparkline",
          "Sparklines: Line, Column, Win/Loss — formatting",
          "Chart clean-up: remove chart border, background, legend clutter",
          "Adding dynamic titles with & and cell references",
          "Camera tool — linking a chart range as a linked picture",
          "Form controls: Drop-Down list and Scroll Bar linked to cells"
        ],
        practice:
          "Build KPI cards for Revenue, Orders, and Avg Order Value with sparklines. Add a dropdown to filter the whole dashboard by year using INDIRECT or XLOOKUP."
      },
      {
        title: "Full Dashboard Assembly",
        time: "1.5 hr",
        icon: "ic-amber",
        emoji: "🖥️",
        topics: [
          "Connecting slicers to multiple pivot tables on the same cache",
          "Aligning and distributing chart objects (Format > Align)",
          "Protecting the sheet: allow slicers only, lock formula cells",
          "Print area and PDF export for sharing",
          "Naming cells and ranges for readable formulas"
        ],
        practice:
          "Finish your dashboard: connect slicers, align all elements, lock input cells, and export as PDF."
      }
    ]
  },

  {
    day: 7,
    title: "Day 7",
    name: "Pro Level & Capstone",
    level: "Expert",
    badge: "b-expert",
    goal: "Apply everything learned in a real end-to-end analytics project.",
    sessions: [
      {
        title: "What-If Analysis & Forecasting",
        time: "1 hr",
        icon: "ic-purple",
        emoji: "🔮",
        topics: [
          "Goal Seek — reverse-engineer a target value",
          "Data Tables: one-variable and two-variable sensitivity tables",
          "Scenario Manager — save and compare multiple scenarios",
          "FORECAST.ETS — exponential smoothing forecasts",
          "TREND and GROWTH functions for regression",
          "Forecast Sheet (Data > Forecast Sheet)"
        ],
        practice:
          "Build a pricing sensitivity table showing profit at 5 price points × 5 volume scenarios. Add a 3-month revenue forecast using FORECAST.ETS."
      },
      {
        title: "Data Validation & Error-Proofing",
        time: "1 hr",
        icon: "ic-green",
        emoji: "✅",
        topics: [
          "Data Validation: lists, whole numbers, dates, custom formulas",
          "Cascading dropdowns with INDIRECT",
          "Error tracing: Trace Precedents/Dependents, Evaluate Formula",
          "IFERROR, IFNA, ISERROR, ISBLANK defensive patterns",
          "Watch Window for monitoring key cells",
          "Auditing tools: Show Formulas (Ctrl+`)"
        ],
        practice:
          "Add cascading dropdowns (Country → City) to your dashboard input area. Wrap all lookup formulas in IFERROR. Use Evaluate Formula to debug one complex formula."
      },
      {
        title: "Capstone Project",
        time: "2.5 hr",
        icon: "ic-coral",
        emoji: "🏆",
        topics: [
          "Import raw e-commerce data via Power Query (clean, merge, transform)",
          "Build a Pivot Table summary with calculated fields",
          "Create 3 charts: monthly trend, category breakdown, top customers",
          "Assemble a full dashboard with slicers and KPI cards",
          "Add a What-If pricing model on a separate sheet",
          "Export a PDF report and document your steps"
        ],
        practice:
          "Complete the full project end-to-end. Aim for a dashboard you'd be proud to show in a job interview or share with your team."
      }
    ]
  }
];