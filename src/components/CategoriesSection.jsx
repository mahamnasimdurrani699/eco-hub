import React from 'react';


const categories = [
  { title: 'Food and Beverage', imageUri: "public/food and beverage.jfif",link: '/Food'  },
  { title: 'Personal Care Products', imageUri: "public/personal care.jfif", link :'/SelfCare' },
  { title: 'Household Items', imageUri: "public/household product.jfif", link : "/household" },
  { title: 'Furniture', imageUri: "public/furniture.jfif"},
  { title: 'Best Find', imageUri: "public/Best Find.jfif" },
];

const CategoriesSection = () => {
  return (
    <div className="container mt-2 ml-4  " >
      <div className="flex flex-wrap justify-center gap-x-6  ">
        {categories.map((category, index) => (
          <div key={index} className=" flex flex-col items-center w-[45%] sm:w-[30%] md:w-[18%]">
            <img
              src={category.imageUri}
              alt={category.title}
              className="w-44  h-44 object-cover rounded-full transition-transform duration-300 transform hover:scale-105"
            />
            <div className="mt-2 text-center">
              <p className="font-bold text-base sm:text-lg">{category.title}</p>
              <a href={category.link} className="text-gray-600 hover:text-blue-500 text-sm">
                View all
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
