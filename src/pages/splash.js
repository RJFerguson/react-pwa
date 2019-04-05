import SplashImage from '../resources/img/seo/home-splash-screen.png';

export default [
  {
    path: '/',
    exact: true,
    component: () => import('../components/splash'),
    seo: {
      title: 'ReactPWA',
      description: 'ReactPWA',
      image: SplashImage,
    },
  },
];
