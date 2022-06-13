import './src/styles/global.css';

import "prismjs/themes/prism-okaidia.css";

import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import React from 'react'
import { ThemeWrapper } from './src/styles/theme';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Header from './src/components/common/Header';
import Footer from './src/components/common/Footer';


export const wrapPageElement = ({ element }) => {
  return (
    <ThemeWrapper>
      <AnimateSharedLayout type="crossfade">
        <Header />
        <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
        <Footer />
      </AnimateSharedLayout>
    </ThemeWrapper>
  )
}
