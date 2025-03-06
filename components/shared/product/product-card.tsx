import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import ProductPrice from "./product-price";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image src={product?.images[0]} alt="product" width={300} height={300}/>
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product?.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium">{product?.name}</h2>
        </Link>
        <div className="flex-between gap-4">
          <p>{product?.rating} Stars</p>
          {
            product?.stock > 0 ? (
              <p className="font-bold">
                <ProductPrice value={product?.price} />
              </p>
            ) : (
              <p className="text-red-600">Out of Stock</p>
            )
          }
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
