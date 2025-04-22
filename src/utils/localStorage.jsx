const employees = [
  {
    id: 1,
    firstName: "Ali",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Create landing page",
        description: "Design and develop the landing page for the new product.",
        date: "2025-04-20",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix login bug",
        description: "Resolve issue with incorrect password error.",
        date: "2025-04-18",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Prepare slides",
        description: "Create slides for weekly team meeting.",
        date: "2025-04-21",
        category: "Presentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Bilal",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Update dashboard UI",
        description: "Add new widgets to the user dashboard.",
        date: "2025-04-19",
        category: "UI",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Write unit tests",
        description: "Write test cases for user model.",
        date: "2025-04-15",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Resolve API errors",
        description: "Fix the 500 error occurring on user POST route.",
        date: "2025-04-20",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Optimize images",
        description: "Compress all homepage images for faster loading.",
        date: "2025-04-17",
        category: "Performance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Daniyal",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Design login form",
        description: "Create a modern login form design with Tailwind CSS.",
        date: "2025-04-16",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Connect database",
        description: "Integrate MongoDB with authentication system.",
        date: "2025-04-20",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Create welcome email",
        description: "Build HTML email template for welcoming new users.",
        date: "2025-04-19",
        category: "Email",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Faizan",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Build feedback form",
        description: "Develop feedback form with star ratings and comments.",
        date: "2025-04-20",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Deploy to Vercel",
        description: "Deploy the latest version of the website.",
        date: "2025-04-18",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix console warnings",
        description: "Remove all React key and useEffect warnings.",
        date: "2025-04-19",
        category: "Debugging",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Hassan",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Style contact form",
        description: "Apply dark mode styling for the contact section.",
        date: "2025-04-21",
        category: "CSS",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Setup CI/CD",
        description: "Integrate GitHub Actions for automatic deployment.",
        date: "2025-04-20",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Refactor codebase",
        description: "Remove unused components and organize folders.",
        date: "2025-04-18",
        category: "Cleanup",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

  
const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
   
    return {employees, admin}
}