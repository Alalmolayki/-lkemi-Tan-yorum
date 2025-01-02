import React from 'react';
import { Info } from 'lucide-react';

export const Purpose: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
      <div className="flex items-center gap-2 mb-4">
        <Info className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Amacımız</h2>
      </div>
      <p className="text-gray-700 leading-relaxed">
        Bu proje, Türkiye'nin zengin kültürel ve ekonomik mozaiğini dijital ortamda keşfetmenizi sağlamak için tasarlanmıştır. 
        Her şehrimizin kendine özgü karakterini, ekonomik yapısını ve kültürel zenginliklerini interaktif bir harita üzerinden 
        keşfedebilirsiniz. Amacımız, ülkemizin çeşitliliğini ve potansiyelini görünür kılmak, yatırımcılara, 
        öğrencilere ve meraklılara kapsamlı bir bilgi kaynağı sunmaktır.
      </p>
    </div>
  );
};