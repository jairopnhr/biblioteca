import { motion } from 'framer-motion';
import React from 'react';
import LivroCard from '../../Components/Cards/LivroCard';
import livros from '../../database/DadosLivros';

const PaginaInicial: React.FC = () => {
  return (<>
    <div className="max-w-2xl mx-auto p-8 ">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{opacity:1,x:0}}
        transition={{ duration: 1.8 }}
        exit={{opacity:0 , x:-100}}
        className="text-lg text-gray-700 mb-4"
      >
        <h1 className="text-3xl font-bold mb-4">
          Bem-vindo à Biblioteca Online!
        </h1>
        <p>
          Explore nosso vasto catálogo de livros, mergulhe em histórias emocionantes, e descubra novos mundos entre as páginas. Com uma coleção diversificada que abrange desde clássicos atemporais até as últimas novidades estamos aqui para nutrir sua paixão pela leitura.
        </p>
        <p>
          Utilize nossa ferramenta de busca para encontrar seu próximo livro favorito, ou navegue por nossas categorias e descubra algo completamente novo. E não se esqueça de conferir nossos recursos adicionais, como avaliações de usuários e recomendações personalizadas, para tornar sua experiência ainda mais enriquecedora.
        </p>
        <p>
          Junte-se a nós nesta jornada literária. Na Biblioteca Online, as páginas estão repletas de possibilidades.
        </p>
        <span className="block text-blue-500 text-lg font-bold">
          Comece a explorar agora!
        </span>
      </motion.div>
      </div>
      <div className="grid grid-cols-4 w-auto m-10 p-20 flex-1 space-x-5 ">
        {livros.map((livro, index) => (
          <motion.div
            key={index}
            whileInView={{opacity:1}}
            initial={{ opacity: 0, y: 100 }}
            exit={{opacity:0,x:0}}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <LivroCard livro={livro} />
          </motion.div>
        ))}
      </div>
      </>
  );
}

export default PaginaInicial;
