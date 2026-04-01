import React from "react";
import SelectedCard from "../../../ui/SelectedCard";

const SelectedCart = ({
  selectedCart,
  setSelectedCart,
  setCoin,
  // {coin},
}) => {

  const handleDeleteSelectedProduct = (product) => {
    const filteredCart = selectedCart.filter(
      (item) => item.id !== product.id
    );

    setSelectedCart(filteredCart);
    setCoin(prev => prev + product.price);
  };

  return (
    <div>
      <div className="space-y-5">
        {selectedCart.length === 0 ? (
          <div className="h-[400px] flex items-center justify-center flex-col gap-4">
            <h2 className="font-semibold text-xl">No Product selected yet</h2>
            <p>Go to Available tab to select Product</p>
          </div>
        ) : (
          selectedCart.map((product) => (
            <SelectedCard
              key={product.id}
              product={product}
              handleDeleteSelectedProduct={handleDeleteSelectedProduct}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SelectedCart;