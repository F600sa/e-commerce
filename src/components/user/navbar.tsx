import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { RiAccountCircleLine } from "@react-icons/all-files/ri/RiAccountCircleLine";
import { HiShoppingBag } from "@react-icons/all-files/hi/HiShoppingBag";
function NavBar() {
  return (
    <div className=" flex flex-col bg-greyColor w-[1730px] sm:w-[400px]">
      <div className="flex flex-row justify-between sm:justify-center  py-5 px-[230px]  sm:px-1 ">
        <div className="flex flex-row gap-3">
          <div className="flex flex-row gap-1 sm:hidden">
            <h6>Shoping</h6>
            <HiShoppingBag className="w-[20px] h-[25px] " />
          </div>
          <div className="flex flex-row gap-1 sm:hidden">
            <h6>Account</h6>
            <RiAccountCircleLine className="w-[20px] h-[25px] " />
          </div>
        </div>
        <img
          src="/assets/images/logo (1).png"
          alt="Avatar"
          className=" w-[150px] sm:justify-center items-center"
        />

        <AiOutlineSearch className="sm:hidden" />
      </div>
      <div className="justify-center items-center pr-[200px] sm:pr-[0px]">
        <hr className="h-px my-8  border-1 bg-gray-700 w-[1320px] sm:w-[500px] " />
      </div>
      <div className=" flex flex-row items-center justify-between px-[200px]  sm:hidden translate-x-6">
        <p className="font-pOpenSans w-[164px] h-[24px]">
          Jewelry & Accessories
        </p>
        <p className="font-pOpenSans w-[164px] h-[24px]">Clothing & Shoes</p>
        <p className="font-pOpenSans w-[164px] h-[24px]">Home & Living</p>
        <p className="font-pOpenSans w-[164px] h-[24px]">Wedding & Party</p>
        <p className="font-pOpenSans w-[164px] h-[24px]">
          Toys & Entertainment
        </p>
        <p className="font-pOpenSans w-[164px] h-[24px]">Art & Collectibles</p>
        <p className="font-pOpenSans w-[164px] h-[24px]">
          Craft Supplies & Tools
        </p>
      </div>
    </div>
  );
}

export default NavBar;
