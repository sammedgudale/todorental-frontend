
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { addFacilities } from "../Actions/OwnerActions";

import { useDispatch, useSelector } from "react-redux";

const AddFacility = (props) => {
  // const [furnished, setFurnished] = useState("");
  // const [securityGuard,setSecurityGuard] = useState("");
  // const [lift, setLift] = useState("");
  // const [cctv, setCctv] = useState("");

  // const propertyAdd = useSelector((store) => store.propertyAdd);

  // const { loading, response, error } = propertyAdd;
  // const propId = propertyAdd.response.result;

  // const dispatch = useDispatch();

  // const OnAdd = () => {
  //   dispatch(addFacilities(propId, furnished, securityGuard, lift, cctv));
  // };

  return (
    // <div className="text-center mt-5">
      
    //   <div className="container col-sm-3 mt-5 border border-dark border-5">
    //     <div class="col-md-4 mt-3 ">
    //       <label for="validationCustom04" class="form-label">
    //         Furnished
    //       </label>
    //       <br></br>
    //       <select
    //         class="form-select"
    //         id="validationCustom04"
    //         required
    //         onChange={(e) => {
    //           setFurnished(e.target.value);
    //         }}
    //       >
    //         <option>Choose...</option>
    //         <option>Furnished</option>
    //         <option>UnFurnished</option>
    //       </select>
    //     </div>
    //     <div class="col-md-4 mt-3 ">
    //       <label for="validationCustom04" class="form-label">
    //         security
    //       </label>
    //       <br></br>
    //       <select
    //         class="form-select"
    //         id="validationCustom04"
    //         required
    //         onChange={(e) => {
    //           setSecurityGuard(e.target.value);
    //         }}
    //       >
    //         <option>Choose...</option>
    //         <option>Available</option>
    //         <option>UnAvailable</option>
    //       </select>
    //     </div>
    //     <div class="col-md-4 mt-3 ">
    //       <label for="validationCustom04" class="form-label">
    //         Lift
    //       </label>
    //       <br></br>
    //       <select
    //         class="form-select"
    //         id="validationCustom04"
    //         required
    //         onChange={(e) => {
    //           setLift(e.target.value);
    //         }}
    //       >
    //         <option>Choose...</option>
    //         <option>Available</option>
    //         <option>UnAvailable</option>
    //       </select>
    //     </div>
    //     <div class="col-md-4 mt-3 ">
    //       <label for="validationCustom04" class="form-label">
    //         Cctv
    //       </label>
    //       <br></br>
    //       <select
    //         class="form-select"
    //         id="validationCustom04"
    //         required
    //         onChange={(e) => {
    //           setCctv(e.target.value);
    //         }}
    //       >
    //         <option>Choose...</option>
    //         <option>Available</option>
    //         <option>UnAvailable</option>
    //       </select>
    //     </div>

    //     <Link
    //       to="/payment"
    //       onClick={OnAdd}
    //       type="submit"
    //       className="btn btn-primary float-center mt-5"
    //     >
    //        submit
    //     </Link>

    //     <br></br>
    //     <br></br>
    //   </div>
    // </div>
    <>
    asddddddddddd
    </>
   
  );
};

export default AddFacility;
