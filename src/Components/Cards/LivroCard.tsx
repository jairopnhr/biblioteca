import React from "react";
import Livro from "../../model/Livro";
const LivroCard: React.FC<{ livro: Livro }> = ({ livro }) => {
    return (
        <div className="bg-white shadow-md rounded-md p-4 w-auto"> 
          <img src={livro.imagem} alt={livro.titulo} className="h-36 w-full object-cover mb-2" />
          <h2 className="text-xl font-bold mb-2">{livro.titulo}</h2>
          <p className="text-gray-700">{livro.descricao}</p>
          <p className="text-gray-600 italic">Autor: {livro.autor}</p>
          <p className="text-gray-600 italic">Gênero: {livro.genero}</p>
        </div>
      );
  };
  
  export default LivroCard;