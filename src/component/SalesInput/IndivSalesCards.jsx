import React from "react";
import { Card } from "react-bootstrap";
import "./SalesList.css";
import { useDispatch } from "react-redux";
import { salesInputSliceActions } from "../../store/salesinput";
const IndivSalesCards = ({ product }) => {
     const dispatch = useDispatch();
     let countNo = product.count;
     if (countNo < 0) {
          countNo = "000";
     } else if (countNo < 10) {
          countNo = "00" + countNo;
     } else if (countNo < 100) {
          countNo = "0" + countNo;
     }

     const increaseHandler = () => {
          dispatch(
               salesInputSliceActions.buttonChangeSalesInput({
                    id: product.id,
                    change: 1,
               })
          );
     };
     const decreaseHandler = () => {
          if (product.count > 0) {
               dispatch(
                    salesInputSliceActions.buttonChangeSalesInput({
                         id: product.id,
                         change: -1,
                    })
               );
          }
     };
     const changeHandler = () => {};
     return (
          <Card className="cardBox">
               <Card.Img
                    variant="top"
                    className="pb-2 imgBox"
                    src={product.imgLink}
               />
               <hr className="m-0 mb-3" />
               <Card.Title className="text-center">{product.title}</Card.Title>
               <div className="buttonBox mt-3">
                    <div className="qualityBox">
                         <button onClick={decreaseHandler}>-</button>
                         <input
                              value={countNo}
                              onChange={changeHandler}
                              type="text"
                         />
                         <button onClick={increaseHandler}>+</button>
                    </div>
               </div>
          </Card>
     );
};

export default IndivSalesCards;
