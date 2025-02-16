import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';
// import { useDisconnect } from "@thirdweb-dev/react";
// const disconnectWallet = () => {
//   const disconnect = useDisconnect();
//   disconnect(); // Disconnect the wallet
// };

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/home',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  // {
  //   name: 'payment',
  //   imgUrl: payment,
  //   link: '/',
  //   disabled: true,
  // },
  {
    name: 'withdraw',
    imgUrl: withdraw,
    link: '/',
    disabled: true,
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  },
  {
    name: 'Disconnect',
    imgUrl: logout,
    link: '/',
    // disabled: false,
  },
];
