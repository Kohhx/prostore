import React from "react";
import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";

export const metadata = {
  title: "Home",
};

const HomePage = async () => {
  console.log("Sample Data", sampleData);

  return (
    <>
      <ProductList data={sampleData?.products} title="Newest Arrivals" limit={3}/>
    </>
  );
};

export default HomePage;
