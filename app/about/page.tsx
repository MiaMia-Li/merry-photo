import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            About Us
          </h1>
        </div>

        <div className="mt-10">
          <p className="mt-4 text-base text-gray-700">
            Welcome to MerryPhoto, where holiday magic meets the power of AI!
            Our platform is designed to bring your Christmas celebrations to
            life with unique, AI-generated Christmas photos. Whether you're
            looking to create personalized holiday cards, fun photo edits, or
            festive imagery for your social media, we've got you covered.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">Product Features</h2>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="ml-3 text-base text-gray-700">
                AI-Powered Image Generation: Create stunning, personalized
                Christmas-themed photos with the help of advanced AI technology.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="ml-3 text-base text-gray-700">
                Customizable Designs: Tailor your photos with various holiday
                elements like snow, lights, Christmas trees, and more.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="ml-3 text-base text-gray-700">
                High-Resolution Output: Download high-quality images perfect for
                sharing on social media or printing as holiday cards.
              </p>
            </li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">About the Author</h2>
          <p className="mt-4 text-base text-gray-700">
            PhotoTailor was created by a passionate developer who loves
            photography and web technologies. The goal is to provide a free,
            easy-to-use tool for photo enthusiasts to enhance their images
            without compromising privacy.
          </p>
          <p className="mt-2 text-base text-gray-700">
            If you find this tool useful, please consider supporting the author
            by{" "}
            <a
              target="_blank"
              className="inline-block text-blue-600 hover:text-blue-800"
              href="https://www.buymeacoffee.com/sept.miamia">
              buying me a coffee.
            </a>
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-base text-gray-700">
            We&apos;d love to hear from you! If you have any questions,
            suggestions, or just want to say hello, please feel free to reach
            out to us at:
          </p>
          <a
            href="mailto:superlmy.913@gmail.com"
            className="mt-2 inline-block text-blue-600 hover:text-blue-800">
            superlmy.913@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
