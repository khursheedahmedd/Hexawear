import React from "react";
import EmptyCartImg from '../../assets/Cart/empty-red.gif'

const EmptyCart = () => {
    return (
        <div className="flex justify-center items-center  flex-col">
            <div className="h-60 md:h-96">
                <img src={EmptyCartImg} className="h-full" />
            </div>
            <h2 className="text-slate-600 font-semibold text-3xl my-2">You Cart Empty</h2>
        </div>
    );
};

export default EmptyCart;