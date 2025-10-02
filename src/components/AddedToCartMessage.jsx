import { useEffect, useRef } from "react";
import ShopStyles from './Shop.module.css';

const AddedToCartMessage = ({ item, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (item && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [item]);

  if (!item) return null;

  return (
    <dialog ref={dialogRef} className={ShopStyles.module}>
      <img src={item.image} alt={item.title} />
      <div className={ShopStyles.message}>
        <h3>Item {item.title} successfully added to the cart</h3>
        <div>Item count: {item.quantity}</div>
        <div>Total price: {(item.price * item.quantity).toFixed(2)}</div>
      </div>

      <button 
        className={ShopStyles.closemodule} 
        onClick={() => {
          dialogRef.current.close();
          onClose();
        }}
      >
        X
      </button>
    </dialog>
  );
};

export default AddedToCartMessage;
