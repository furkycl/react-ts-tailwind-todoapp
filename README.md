React + TypeScript ToDo List
![alt text](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![alt text](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![alt text](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![alt text](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
<!-- TODO: Add a screenshot of the application -->
![alt text](./screenshot.png)
About The Project
This is a project I built to create a feature-rich, modern ToDo list application from the ground up. My goal was to go beyond a basic tutorial and build something that felt like a real, polished product. I focused on using a modern tech stack and implementing best practices for code structure, state management, and user experience.
Features
Full CRUD Functionality: Add, read, update (mark as complete/incomplete), and delete tasks.
Data Persistence: All tasks are saved to the browser's Local Storage, so your data is preserved even after a page refresh.
Filtering: Filter tasks by "All," "Active," and "Completed" statuses.
Drag-and-Drop Reordering: Easily re-prioritize tasks by dragging and dropping them into a new order.
User-Friendly UX:
A welcoming modal for first-time visitors.
A helpful message appears when the task list is empty.
An active task counter and a "Clear Completed" button.
Responsive Design: The layout is fully responsive and works beautifully on all screen sizes, thanks to Tailwind CSS.
Tech Stack
Vite: For a blazing-fast development environment.
React: For building the user interface with a component-based architecture.
TypeScript: To ensure type safety, reduce bugs, and improve code maintainability.
Tailwind CSS: For rapid, utility-first styling.
@hello-pangea/dnd: A modern, maintained library for beautiful and accessible drag-and-drop functionality.
My Journey & What I Learned
Building this project was an incredible learning experience. Here’s a breakdown of my journey and the key takeaways from each stage:
1. The Foundation: Vite, TypeScript, and Tailwind
I started by setting up a modern development environment with Vite, which was a fantastic experience due to its speed. I chose to use TypeScript from the very beginning. This forced me to think about my data structures upfront, like defining a Todo type. This small step early on saved me from countless potential bugs later.
Integrating Tailwind CSS was another key decision. I learned how to configure it with Vite and PostCSS. The utility-first approach completely changed how I think about styling, allowing me to build complex layouts directly in my JSX without ever leaving my component files.
2. Core React Concepts in Action
I built the app component by component (TodoItem, AddTodoForm, TodoFooter, etc.). This reinforced my understanding of props, state (useState), and the fundamental principle of one-way data flow in React.
Implementing features like toggling and deleting tasks was a deep dive into child-to-parent communication. I learned how to effectively use callback functions passed down as props to allow a child component (TodoItem) to signal a state change in its parent (App). This also solidified my understanding of immutability—always creating new arrays (.map(), .filter()) instead of modifying the state directly.
3. Advanced Hooks and Code Refactoring
To make the app feel real, I implemented data persistence. This was my first practical application of the useEffect hook to create a "side effect." I learned how to use its dependency array ([todos]) to ensure the effect only runs when necessary.
Later in the project, I had a huge "aha!" moment when I refactored the Local Storage logic into a reusable custom hook (useLocalStorage). This cleaned up my App.tsx component immensely and taught me the power of creating my own hooks to abstract away complex logic, making my code much more modular and DRY (Don't Repeat Yourself).
4. Tackling Advanced Features and Problem-Solving
The most challenging and rewarding feature was adding drag-and-drop functionality. I initially tried using the popular react-beautiful-dnd library but immediately hit a dependency conflict with my modern React 19 setup. This taught me a valuable real-world lesson: always check a library's maintenance status. I researched and found @hello-pangea/dnd, a community-maintained fork. This experience was a great lesson in troubleshooting and adapting to the ever-evolving JavaScript ecosystem.
I also learned the importance of separating "values" from "types" in my imports (import { Draggable } vs. import type { DropResult }). This was crucial for resolving errors and understanding how modern build tools work.
5. Focusing on the User Experience (UX)
Finally, I focused on the small details that elevate an application. I implemented conditional rendering to show an "empty state" message, added a task counter, and created a welcome modal for new users. These features taught me that a great application isn't just about its technical features; it's about building an intuitive and helpful experience for the user.
