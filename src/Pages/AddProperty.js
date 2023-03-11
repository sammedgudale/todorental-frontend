import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProperty } from "../Actions/OwnerActions";

const AddProperty = () => {
        const [propertyType, setpropertyType] = useState("NULL");
        const [city, setCity] = useState("NULL");
        const [address, setAddress] = useState("NULL");
        const [status, setStatus] = useState("NULL");
        const [rent, setRent] = useState(0.0);
        const dispatch = useDispatch();

        const propertyAdd = useSelector((store) => store.propertyAdd);

        const { loading, response, error } = propertyAdd;

    const onAdd = () => {
        dispatch(
          addProperty(
            propertyType,
          city,
          address,
          status,
          rent
          )
        );
      };
  return (
    <div
    class="text-center mt-5"
    className=" container col-sm-10 text-center mt-5"
  >
    <div className="container col-sm-4 mt-5 border border-dark border-5 bg-light-gradient ">
      <form className="row g-3 needs-validation font-weight-bold  " novalidate>
        <div className="col-md-12 mt-3">
          <label for="validationCustom05 " className="form-label float-left" style={{ color: 'white' }}>
            Complete Address
          </label>
          <input
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            propertyType="text"
            className="form-control"
            id="validationCustom05"
            required
          />
        </div>
        <div className="col-md-4 mt-3">
          <label for="validationCustom04" className="form-label" style={{ color: 'white' }}>
            Property Type
          </label>
          <select
            className="form-select"
            id="validationCustom04"
            required
            onChange={(e) => {
              setpropertyType(e.target.value);
            }}
          >
            <option>Choose..</option>
            <option>ONE_BHK</option>
            <option>TWO_BHK</option>
            <option>THREE_BHK</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-6 mt-3">
          <label for="validationCustom05" className="form-label" style={{ color: 'white' }}>
            City
          </label>
          <input
            onChange={(e) => {
              setCity(e.target.value);
            }}
            propertyType="text"
            className="form-control"
            id="validationCustom05"
            required
          />
        </div>
        <div className="col-md-6 mt-3">
          <label for="validationCustom05" className="form-label" style={{ color: 'white' }}>
            status
          </label>
          <input
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            propertyType="text"
            className="form-control"
            id="validationCustom05"
            required
          />
        </div>
        <div className="col-md-4 mt-4 float-center">
          <label for="validationCustom05 " className="form-label float-center" style={{ color: 'white' }}>
            Rent
          </label>
          <input
            onChange={(e) => {
              setRent(e.target.value);
            }}
            propertyType="text"
            className="form-control"
            id="validationCustom05"
            required
          />
        </div>
        <br></br>
        <br></br>
        <div className="col-12">
          <Link to="/home">
            <button
              className="btn btn-danger float-left"
              propertyType="submit"
              onClick={onAdd}
            >
              Add 
            </button>
          </Link>

          <Link
            propertyType="button"
            className="btn btn-danger float-right"
            to="/ownerprofile"
          >
            Cancel
          </Link>
        </div>
        <br></br>
        <br></br>
      </form>
    </div>
 </div>



  )
}


export default AddProperty