import {
  PROPERTY_ADD_REQUEST,
  PROPERTY_ADD_SUCCESS,
  PROPERTY_ADD_FAIL,
  FACILITY_ADD_REQUEST,
  FACILITY_ADD_SUCCESS,
  FACILITY_ADD_FAIL,
} from "../Constants/OwnerConstants";
import axios from "axios";

export const addFacilities = (propId, furnished, securityGuard, lift) => {
  return (dispatch) => {
    dispatch({
      type: FACILITY_ADD_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      propId,
      furnished,
      securityGuard,
      lift,
    };
    const url = "http://localhost:9192/owner/addfacilities";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: FACILITY_ADD_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FACILITY_ADD_FAIL,
          payload: error,
        });
      });
  };
};

export const addProperty = (
  propertyType,
  city,
  address,
  status,
  rent
) => {
  return (dispatch) => {
    dispatch({
      type: PROPERTY_ADD_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      propertyType,
      city,
      address,
      status,
      rent
    };
    const url = "http://localhost:9192/owner/property";
    axios
      .post(url, body, header)
      .then((response) => {
        alert("Property added successfully")
        dispatch({
          type: PROPERTY_ADD_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: PROPERTY_ADD_FAIL,
          payload: error,
        });
      });
  };
};