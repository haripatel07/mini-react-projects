
# Academic Calculator App
A React single-page application to calculate academic performance metrics like SGPA, CGPA, and Percentage.

This app provides a simple and intuitive UI for students to enter courses, credits, grades, and semesters, and instantly view results.

-----

## Features

  * **Add Courses** with course name, credits, grade, and semester
  * **View Course List** in a clean card-based layout
  * **Delete Courses** easily when needed
  * **Calculate Results**
      * SGPA (per semester)
      * CGPA (overall)
      * Percentage conversion
  * **Responsive Design** for desktop and mobile
  * **Modern UI** with separate CSS styles for each component

-----

## Screenshot

![Pic](https://github.com/haripatel07/mini-react-projects/blob/main/academic-calculator-app/src/assets/Academic%20Performance%20Calculator_page.jpg)

-----

## Tech Stack

  * **Frontend:** React.js
  * **Styling:** Custom CSS (with component-level CSS files in styles/ folder)
  * **Language:** JavaScript (ES6+)

-----

## Project Structure

```
academic-calculator-app/
│── src/
│   │── App.jsx
│   │── index.js
│   │── components/
│   │   │── CourseForm.jsx
│   │   │── CourseList.jsx
│   │   │── CourseItem.jsx
│   │   │── ResultsDisplay.jsx
│   │
│   │── styles/
│   │   │── CourseForm.css
│   │   │── CourseList.css
│   │   │── CourseItem.css
│   │   │── ResultsDisplay.css
│   │
|   |── App.css
|   |── index.css
|   |── index.html
│   │── public/
│   │── package.json
│   └── README.md
```

-----

## Installation & Setup

Clone the repository and install dependencies:

```bash
# Clone the repo
git clone https://github.com/haripatel07/mini-react-projects.git

# Navigate to project folder
cd mini-react-projects/academic-calculator-app

# Install dependencies
npm install

# Start development server
npm start
```

-----

## Usage

  * Enter Course Name, Credits, Grade, and Semester in the form
  * Click "Add Course" to add it to the list
  * View all added courses in the Course List section
  * Final results (SGPA per semester, CGPA, Percentage) will be shown in the Results Display section
  * Delete a course anytime using the Delete button

-----

## Example

  * Course 1: Data Structures | 4 Credits | Grade A | Semester 3
  * Course 2: Algorithms | 3 Credits | Grade B | Semester 3
      * **SGPA (Sem 3):** 9.14
      * **CGPA:** 9.14
      * **Percentage:** 86.85%

-----

## Author

Hari Patel
