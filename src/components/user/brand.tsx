import { Imgs } from "src/core/statics/img";
import BestSellers from "./bestSellers";
import Products from "./products";
import Zara from "./zara";

function Brand() {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center">
        <div className="flex flex-row justify-between items-center px-[350px] pt-[30px] gap-[100px]">
          {Imgs.map((item, index) => {
            return (
              <div
                className={`${item.images}     bg-cover  w-[130px] h-[50px]  `}
                key={index}
              ></div>
            );
          })}
        </div>
        <div>
          <h1 className=" rotate-[270deg] absolute top-[1400px] right-[1130px] text-[40px] h-[90px] w-[800px] font-light">
            Explore new and popular styles
          </h1>
          <div className=" grid grid-flow-col grid-col-4 gap-3 pt-[70px] justify-center items-center">
            <img
              src="assets/images/03.png"
              alt="Avatar"
              className="h-[312px] w-[312px] "
            />
            <img
              src="assets/images/item-category-hover 1.png"
              alt="Avatar"
              className="h-[312px] w-[312px]  "
            />
            <img
              src="assets/images/02.png"
              alt="Avatar"
              className="h-[312px] w-[312px]  "
            />

            <img
              src="assets/images/01.png"
              alt="Avatar"
              className="h-[312px] w-[312px] col-span-2 "
            />

            <img
              src="assets/images/18.png"
              alt="Avatar"
              className="h-[648px] w-[648px] row-span-2"
            />
          </div>
        </div>
        <div className=" pt-[50px]">
          <h1 className="text-[40px] items-center pb-[50px] pr-[390px]">
            Or subscribe to the newsletter
          </h1>

          <Products />
        </div>
        <Zara />
        <BestSellers />
      </div>
    </div>
  );
}

export default Brand;
