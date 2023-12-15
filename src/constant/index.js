import BillingIcon from '@/assets/svgs/BillingIcon.svg';
import ScheduleIcon from '@/assets/svgs/ScheduleIcon.svg';
import PeopleIcon from '@/assets/svgs/PeopleIcon.svg';
import Instructor from '@/assets/instructor.png';
import Student from '@/assets/student.png';

export const formField = {
  login: [
    {
      id: 'user_name',
      htmlFor: 'user_name',
      name: 'user_name',
      type: 'text',
      placeHolder: 'Enter your user name',
      labelText: 'User name',
    },
    {
      id: 'password',
      htmlFor: 'password',
      name: 'password',
      type: 'password',
      placeHolder: 'Enter your password',
      labelText: 'Password',
    },
  ],
  signup: [
    {
      id: 'email',
      htmlFor: 'email',
      name: 'email',
      type: 'email',
      placeHolder: 'Enter your email',
      labelText: 'Email',
    },
    {
      id: 'user_name',
      htmlFor: 'user_name',
      name: 'user_name',
      type: 'text',
      placeHolder: 'Enter your user name',
      labelText: 'User name',
    },
    {
      id: 'password',
      htmlFor: 'password',
      name: 'password',
      type: 'password',
      placeHolder: 'Enter your password',
      labelText: 'Password',
    },
  ],
};

export const navItems = [
  {
    id: 1,
    label: 'Home',
    url: '/',
  },
  {
    id: 2,
    label: 'Courses',
    url: '/courses',
  },
  {
    id: 3,
    label: 'Careers',
    url: '/careers',
  },
  {
    id: 4,
    label: 'Blog',
    url: '/blog',
  },
  {
    id: 5,
    label: 'About Us',
    url: '/about-us',
  },
];

export const navItemLoginAndSignup = [
  {
    id: 6,
    label: 'Login',
    url: '/login',
  },
  {
    id: 7,
    label: 'Sign Up',
    url: '/register',
  },
];

export const successStory = [
  {
    id: 1,
    value: '15K+',
    label: 'Students',
  },
  {
    id: 2,
    value: '75%',
    label: 'Total success',
  },
  {
    id: 3,
    value: '35',
    label: 'Main questions',
  },
  {
    id: 4,
    value: '26',
    label: 'Chief experts',
  },
  {
    id: 5,
    value: '16',
    label: 'Years of experience',
  },
];

export const cloudSolutions = [
  {
    id: 1,
    image: BillingIcon,
    heading: 'Online Billing, Invoicing, & Contracts',
    text: 'Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts',
  },
  {
    id: 2,
    image: ScheduleIcon,
    heading: 'Easy Scheduling & Attendance Tracking',
    text: 'Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance',
  },
  {
    id: 3,
    image: PeopleIcon,
    heading: 'Customer Tracking',
    text: 'Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization ',
  },
];

export const userType = [
  {
    id: 1,
    image: Instructor,
    type: 'FOR INSTRUCTORS',
    buttonText: 'Start a class today',
  },
  {
    id: 2,
    image: Student,
    type: 'FOR STUDENTS',
    buttonText: 'Enter access code',
  },
];
