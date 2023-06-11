import axios from "axios";
import { useEffect, useState } from "react";

function BestSellers() {
  const baseURL = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data);
    });
  }, []);
  if (products.length === 0) return null;
  const displayedProducts = products.slice(0, 18);
  return (
    <div>
      <div className=" pt-[90px] pr-[600px] text-[50px]">Best sellers</div>
      <div className="grid grid-cols-4 gap-20 pt-[60px]">
        {displayedProducts.map((product: any) =>
          product.category === "electronics" ? (
            <></>
          ) : product.rating.rate >= 4 ? (
            <div key={product.id} className="col-span-">
              <div className="flex flex-col items-end justify-center ">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[280px] w-[280px] aspect-square"
                />
                <p className="text-start pt-[10px] text-[16px]">
                  {product.title.split(" ").slice(0, 3).join(" ")}
                </p>
              </div>
              <div className="flex flex-row items-end justify-between">
                <div className="pr-[100px] text-[13px] ">${product.price}</div>
                <div className=" text-[10px] text-gray-400">
                  {product.category}
                </div>
              </div>
            </div>
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
}

export default BestSellers;
