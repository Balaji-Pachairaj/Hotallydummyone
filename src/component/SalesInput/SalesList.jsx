import React from "react";
import IndivSalesCards from "./IndivSalesCards";
import "./SalesList.css";
import { Button, Card } from "react-bootstrap";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { updateInventoryThunk } from "../../store/salesinput";

const SalesList = () => {
     const dispatch = useDispatch()
     const salesInput = useSelector(
          (state) => state.salesInput.salesInputArray
     );
     
     const submitHandler = () => {
          dispatch(updateInventoryThunk(salesInput))
     }
     return (
          <>
               <div className="d-flex  flex-wrap gap-4 pt-4 justify-content-evenly p-2">
                   {salesInput.map((product) => {
                         return (
                              <IndivSalesCards
                                   product={product}
                                   key={product.id}
                              />
                         );
                    })}
               </div>
               <div className="mb-5 d-flex justify-content-center">
                    <Card className="submitBox">
                         <p>Click the submit button</p>
                         <Button onClick={submitHandler}>Submit</Button>
                    </Card>
               </div>
          </>
     );
};

export default SalesList;
