import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    { name: "张三", comment: "这个工具太棒了!我的圣诞贺卡从未如此出色。" },
    { name: "李四", comment: "简单易用,效果惊人。强烈推荐给所有人!" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">用户评价</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <p className="mb-4">"{testimonial.comment}"</p>
              <p className="font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
