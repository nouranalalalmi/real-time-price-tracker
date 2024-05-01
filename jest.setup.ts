import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  ...require('next-router-mock'),
  useRouter: () => require('next-router-mock').useRouter(),
  usePathname: () => '/',
  useParams: () => {
    const router = require('next-router-mock').useRouter();
    return router.query;
  },
}));
