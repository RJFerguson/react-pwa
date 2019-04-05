
import FeaturesImage from '../resources/img/seo/features.png';


export default [
  {
    path: '/home',
    exact: true,
    component: () => import('../components/home'),
    seo: {
      title: 'Home | ReactPWA Demo',
      description: 'Feature',
      image: FeaturesImage,
    },
  },
];
