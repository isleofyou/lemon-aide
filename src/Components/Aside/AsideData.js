import React from 'react';
import * as GiIcons from "react-icons/gi";

export const AsideData = [
  {
    title: 'All Items',
    path: '/',
    icon: <GiIcons.GiClothes />,
    className: 'aside-items'
  },
  {
    title: 'Favorites',
    path: '/api/v1/favorites',
    icon: <GiIcons.GiHearts />,
    className: 'aside-items'
  },
  {
    title: 'Create Outfit',
    path: '/created-outfits',
    icon: <GiIcons.GiStarsStack />,
    className: 'aside-items'
  },
  {
    title: 'My Outfits',
    path: '/my-outfits',
    icon: <GiIcons.GiHanger />,
    className: 'aside-items'
  }
];