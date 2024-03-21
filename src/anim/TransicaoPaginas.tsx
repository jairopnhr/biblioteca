
import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
interface Props {
    children:ReactNode
}
const TransicaoPaginas: React.FC<Props> = ({ children }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  }
export default TransicaoPaginas;
