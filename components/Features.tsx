import React from "react";

const Features: React.FC = () => {
  const features = [
    { title: "AI生成", description: "使用最新的AI技术生成高质量圣诞照片" },
    { title: "自定义选项", description: "选择背景、人物和装饰,打造独特照片" },
    { title: "快速导出", description: "轻松下载和分享您的作品" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">功能特点</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
