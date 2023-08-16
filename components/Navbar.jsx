'use client';

import { motion } from 'framer-motion';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <a href="#">
        <img
          src="/logo.png"
          alt="logo"
          className="w-[100px] h-[60px] rounded-sm"
        />
      </a>

      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        MIKOVERSE
      </h2>
     
      <WalletMultiButton/>
      
    </div>
  </motion.nav>
);

export default Navbar;
