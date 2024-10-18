import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-green-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">创造您的完美圣诞照片</h2>
        <p className="text-xl mb-8">使用AI技术,轻松生成独特的圣诞主题照片</p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300">
          立即开始
        </button>
      </div>
    </section>
  );
};

export default Hero;
