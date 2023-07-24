import React from "react";
import { Card, Form } from "react-bootstrap";
import "./Filter.css";
const Filter = () => {
     return (
          <div className="w-100 d-flex justify-content-center mt-4 mb-2">
               <Card className="filterBox">
                    <Form.Select>
                         <option>Default List</option>
                         <option value="1">Breakfast List</option>
                         <option value="2">Lunch List</option>
                         <option value="3">Dinner List</option>
                    </Form.Select>
               </Card>
          </div>
     );
};

export default Filter;

