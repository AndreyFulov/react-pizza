import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizzaBlock"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="135" cy="135" r="125" />
    <rect x="0" y="294" rx="12" ry="12" width="280" height="20" />
    <rect x="0" y="330" rx="0" ry="0" width="280" height="88" />
    <rect x="0" y="430" rx="20" ry="20" width="95" height="30" />
    <rect x="120" y="430" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
