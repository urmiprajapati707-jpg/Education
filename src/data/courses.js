import htmlCssCourse from '@/assets/html_css_course.jpg';
import wordpressCourse from '@/assets/wordpress_course.jpg';
import ecommerceCourse from '@/assets/ecommerce_course.jpg';

export const courses = [
  {
    id: 'c1',
    title: 'HTML5/CSS3 Essentials',
    category: 'Development',
    instructor: {
      name: 'Deborah Holmes',
      role: 'HTML5/CSS3 Instructor',
    },
    rating: 4.9,
    reviewsCount: 1240,
    studentsEnrolled: 15400,
    duration: '18h 30m',
    lessonsCount: 85,
    price: 49.99,
    originalPrice: 99.99,
    image: htmlCssCourse,
    featured: true,
    level: 'Beginner',
    description: 'Learn the core building blocks of every website. Start coding simple, clean web pages with hands-on guidance.',
    detailedDescription: 'Learn the core building blocks of every website. Start coding simple, clean web pages with hands-on guidance.\n\nMaster the basics of HTML and understand how websites are structured. Perfect for beginners stepping into web development. Build a strong foundation in HTML with clear, practical lessons. Create your first web pages and understand how the web works.',
    keyConcepts: [
      'An easy and good start for the starters.',
      'Learn to design and code.',
      'Well explained and comprehensive coverage.',
      'Dedicated sessions will be given on CSS, CSS Advanced, and CSS3.'
    ],
    extraDescription: 'Build a strong foundation in HTML with clear, practical lessons. Create your first web pages and understand how the web works.',
    modules: [
      {
        moduleTitle: 'Introduction to HTML',
        topicsCount: 2,
        topics: ['HTML Basics & Page Structure', 'Essential Elements & Semantic Tags']
      },
      {
        moduleTitle: 'Introduction and Basics of CSS',
        topicsCount: 2,
        topics: ['CSS Selectors & Styling', 'The CSS Box Model']
      }
    ]
  },
  {
    id: 'c2',
    title: 'WordPress Basic Tutorial',
    category: 'Development',
    instructor: {
      name: 'Michelle Baker',
      role: 'WordPress Instructor',
    },
    rating: 4.7,
    reviewsCount: 650,
    studentsEnrolled: 8200,
    duration: '12h 15m',
    lessonsCount: 48,
    price: 39.99,
    originalPrice: 79.99,
    image: wordpressCourse,
    featured: true,
    level: 'Beginner',
    description: 'Learn how to build and manage a website using WordPress—no coding needed. From installation to customization, this course walks you through every beginner step with ease.',
    detailedDescription: 'Learn how to build and manage a website using WordPress—no coding needed. From installation to customization, this course walks you through every beginner step with ease.\n\nStart your WordPress journey with simple, guided lessons. Discover how to set up pages, install themes, add plugins, and create a clean, functional website. This beginner-friendly WordPress course helps you understand the platform from the ground up. Build your first website, customize it your way, and publish with confidence.',
    keyConcepts: [
      'No prior knowledge is required to sign up for this class.',
      'Complete guidance on all the required installations and configuration processes.',
      'Guides you through the basic concepts before moving on to more advanced concepts.',
      'The lessons are concise and get straight to the point.'
    ],
    extraDescription: "You'll learn how to build, customize, and manage a complete WordPress website from scratch. By the end, you'll confidently create pages, use themes and plugins, and handle updates on your own.",
    modules: [
      {
        moduleTitle: 'Introduction to WordPress',
        topicsCount: 2,
        topics: ['WordPress Installation & Dashboard Tour', 'Understanding Posts vs. Pages']
      },
      {
        moduleTitle: 'First Steps With WordPress',
        topicsCount: 2,
        topics: ['Choosing & Customizing Themes', 'Essential Plugins for Your Site']
      }
    ]
  },
  {
    id: 'c3',
    title: 'E-Commerce Course',
    category: 'Business',
    instructor: {
      name: 'Bruce Stevens',
      role: 'Marketing Instructor',
    },
    rating: 4.8,
    reviewsCount: 940,
    studentsEnrolled: 11200,
    duration: '24h 45m',
    lessonsCount: 112,
    price: 69.99,
    originalPrice: 129.99,
    image: ecommerceCourse,
    featured: true,
    level: 'Intermediate',
    description: 'Learn how to set up, manage, and grow an online store with confidence. Build the skills to turn ideas into a fully functioning e-commerce business.',
    detailedDescription: 'Learn how to set up, manage, and grow an online store with confidence. Build the skills to turn ideas into a fully functioning e-commerce business.\n\nFrom product listings to checkout flows, master every step of online selling.',
    keyConcepts: [
      'What E-Commerce is.',
      "Understand buyer's behavior.",
      'Strategies for Disrupting Industries and Markets.',
      'Building and launching a store.'
    ],
    extraDescription: '',
    modules: [
      {
        moduleTitle: 'Defining E-Commerce',
        topicsCount: 2,
        topics: ['What is E-Commerce? Models & Frameworks', 'The E-Commerce Customer Journey']
      },
      {
        moduleTitle: 'E-commerce Marketing',
        topicsCount: 2,
        topics: ['Optimizing Product Pages', 'Promotional Strategies & Funnels']
      }
    ]
  },
];
