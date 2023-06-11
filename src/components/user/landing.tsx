import Layout from "./layout";
import { HiShoppingBag } from "@react-icons/all-files/hi/HiShoppingBag";

function Landing() {
  return (
    <Layout>
      <div className=" bg-greyColor w-[1920px] h-[707px]">
        <div className="flex flex-row">
          <img
            src="/assets/images/Vector.png"
            alt="Avatar"
            className=" w-[130px] pt-[450px]"
          />
          <div className=" ">
            <div className=" relative    right-[300px] top-[50px] ">
              <img
                src="assets/images/Rectangle 124.png"
                alt="Avatar"
                className="h-[542px] w-[400px] "
              />
            </div>
            <div className=" absolute top-[200px]  right-[440px]   ">
              <img
                src="/assets/images/19.png"
                alt="Avatar"
                className=" rounded-tl-[150px] rounded-br-[150px] w-[424px] h-[540px]"
              />
            </div>
          </div>
          <div className=" flex flex-col  ">
            <h1 className="pr-[750px] pt-[100px] text-[70px] absolute top-[150px] left-[230px]">
              Collections
            </h1>
            <p className="pr-[30px] pt-[50px] font-pRoboto   text-[20px] text-left absolute left-[230px] top-[350px]">
              you can explore ans shop many differnt collection<br></br> from
              various barands here
            </p>
            <div className="pr-[800px] pt-[100px] justify-between items-center absolute top-[400px] left-[230px]">
              <div className="w-[223px] h-[72px] bg-black items-center justify-center flex flex-row gap-2">
                <div className=" text-white">shop now </div>

                <HiShoppingBag size={"30px"} className=" fill-white " />
              </div>
            </div>
          </div>
          <img
            src="/assets/images/Frame.png"
            alt="Avatar"
            className=" w-[130px] pt-[450px] absolute top-[230px] right-[1600px]"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Landing;
