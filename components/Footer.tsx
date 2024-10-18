import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <nav>
          <ul className="flex space-x-4 mb-4 md:mb-0">
            <li>
              <a href="/" className="hover:underline">
                首页
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                关于我们
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                联系我们
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center md:text-right">
          <p>&copy; 2023 圣诞照片生成器. 保留所有权利。</p>
          <p>
            <a href="/feedback" className="hover:underline">
              反馈
            </a>{" "}
            |
            <a href="/privacy" className="hover:underline ml-2">
              隐私政策
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
