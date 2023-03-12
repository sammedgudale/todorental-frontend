import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProperty } from "../Actions/OwnerActions";
import Home1 from "../assets/home1.png";

const AddProperty = () => {
  const [propertyType, setpropertyType] = useState("NULL");
  const [city, setCity] = useState("NULL");
  const [address, setAddress] = useState("NULL");
  const [status, setStatus] = useState("NULL");
  const [rent, setRent] = useState(0.0);
  const dispatch = useDispatch();

  const propertyAdd = useSelector((store) => store.propertyAdd);

  const { loading, response, error } = propertyAdd;

  const PropertyType = (e) => {
    setpropertyType(e.target.value);
  };
  const onAdd = () => {
    dispatch(addProperty(propertyType, city, address, status, rent));
  };
  return (
    //     <div
    //     class="text-center mt-5"
    //     className=" container col-sm-10 text-center mt-5"
    //   >
    //     <div className="container col-sm-4 mt-5 border border-dark border-5 bg-light-gradient ">
    //       <form className="row g-3 needs-validation font-weight-bold  " novalidate>
    //         <div className="col-md-12 mt-3">
    //           <label for="validationCustom05 " className="form-label float-left" style={{ color: 'white' }}>
    //             Complete Address
    //           </label>
    //           <input
    //             onChange={(e) => {
    //               setAddress(e.target.value);
    //             }}
    //             propertyType="text"
    //             className="form-control"
    //             id="validationCustom05"
    //             required
    //           />
    //         </div>
    //         <div className="col-md-4 mt-3">
    //           <label for="validationCustom04" className="form-label" style={{ color: 'white' }}>
    //             Property Type
    //           </label>
    //           <select
    //             className="form-select"
    //             id="validationCustom04"
    //             required
    //             onChange={(e) => {
    //               setpropertyType(e.target.value);
    //             }}
    //           >
    //             <option>Choose..</option>
    //             <option>ONE_BHK</option>
    //             <option>TWO_BHK</option>
    //             <option>THREE_BHK</option>
    //             <option>...</option>
    //           </select>
    //         </div>
    //         <div className="col-md-6 mt-3">
    //           <label for="validationCustom05" className="form-label" style={{ color: 'white' }}>
    //             City
    //           </label>
    //           <input
    //             onChange={(e) => {
    //               setCity(e.target.value);
    //             }}
    //             propertyType="text"
    //             className="form-control"
    //             id="validationCustom05"
    //             required
    //           />
    //         </div>
    //         <div className="col-md-6 mt-3">
    //           <label for="validationCustom05" className="form-label" style={{ color: 'white' }}>
    //             status
    //           </label>
    //           <input
    //             onChange={(e) => {
    //               setStatus(e.target.value);
    //             }}
    //             propertyType="text"
    //             className="form-control"
    //             id="validationCustom05"
    //             required
    //           />
    //         </div>
    //         <div className="col-md-4 mt-4 float-center">
    //           <label for="validationCustom05 " className="form-label float-center" style={{ color: 'white' }}>
    //             Rent
    //           </label>
    //           <input
    //             onChange={(e) => {
    //               setRent(e.target.value);
    //             }}
    //             propertyType="text"
    //             className="form-control"
    //             id="validationCustom05"
    //             required
    //           />
    //         </div>
    //         <br></br>
    //         <br></br>
    //         <div className="col-12">
    //           <Link to="/home">
    //             <button
    //               className="btn btn-danger float-left"
    //               propertyType="submit"
    //               onClick={onAdd}
    //             >
    //               Add
    //             </button>
    //           </Link>

    //           <Link
    //             propertyType="button"
    //             className="btn btn-danger float-right"
    //             to="/ownerprofile"
    //           >
    //             Cancel
    //           </Link>
    //         </div>
    //         <br></br>
    //         <br></br>
    //       </form>
    //     </div>
    //  </div>

    <>
      <section class="vh-100">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card-white text-black">
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Register your property
                      </p>

                      <form class="mx-1 mx-md-4" novalidate>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <select onChange={PropertyType} class="form-control">
                              <option>Choose..</option>
                              <option>ONE_BHK</option>
                              <option>TWO_BHK</option>
                              <option>THREE_BHK</option>
                            </select>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              class="form-control"
                              onChange={(e) => {
                                setCity(e.target.value);
                              }}
                            />
                            <label class="form-label" for="form3Example1c">
                              City
                            </label>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              class="form-control"
                              onChange={(e) => {
                                setAddress(e.target.value);
                              }}
                            />
                            <label class="form-label" for="form3Example1c">
                              Complete address
                            </label>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="Number"
                              id="form3Example3c"
                              class="form-control"
                              onChange={(e) => {
                                setRent(e.target.value);
                              }}
                            />
                            <label class="form-label" for="form3Example3c">
                              Rent
                            </label>
                          </div>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-5">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                            required
                          />
                          <label class="form-check-label" for="form2Example3">
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <Link to="/login">
                            <button
                              type="submit"
                              onClick={onAdd}
                              class="btn btn-primary btn-lg"
                            >
                              Register Property
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src={Home1} class="img-fluid" alt="Sample image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
    </>
  );
};

export default AddProperty;
