import React, { useContext, useState } from "react";
import { ProductContext } from '../../contexts/ProductContext';

const AddPackageForm = () => {

   const { dispatch } = useContext(ProductContext);
 
  const [pkg, setPackage] = useState("");
  const [price, setPrice] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    var price;
    let pkg = window.location.href.split("/")[4];
    if(pkg === 'neldo'){
      price = 2999;
      setPrice(2999);
  
    }
    else if(pkg === 'neldochamp'){
      price = 4999;
      setPrice(4999);

    }
    else{
      setPrice(699);
      price = 699;
    }
    dispatch({type: 'ADD_PRODUCT', product: {
      package:pkg, price
    }})
  };
  return (
    <form onSubmit={handleSubmit}>
    
      <input
        className="btn text-white btn-lg ctabtn"
        type="submit"
        style={{
          textTransform: "capitalize",
          float: "right",
          backgroundColor: "#ff9000",
          color: "white",
          borderRadius: "25px",
          marginLeft: "25px",
          marginRight: "25px",
          paddingLeft: "25px",
          paddingRight: "25px",
          marginBottom: "50px",
          textTransform: "uppercase",
          fontSize: "14px",
          fontWeight: "medium",
          marginTop: "25px",
          boxShadow:
            "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
        }}
        onClick={(e) => setPackage(e.target.value)}
        value={
          "Add " + `${typeof window !== 'undefined' ? (window.location.href.split("/")[4]):("")}` + " Package To Cart"
        }
      />
    </form>
  );
};
export default AddPackageForm;
