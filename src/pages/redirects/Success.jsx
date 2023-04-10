import React, { Fragment, useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Loader from "../../elements/ui/Loader";
import { useHttpClient } from "../../hooks/http-hook";
import { useDispatch } from "react-redux";
import { showError } from "../../redux/error";

const Success = (props) => {
  const [paymentStatus, setPaymentStatus] = useState();
  const [reqData, setReqData] = useState();
  const { sendRequest } = useHttpClient();

  const dispatch = useDispatch();

  useEffect(() => {
    const test = async () => {
      try {
        const responseData = await sendRequest("payment/test");
        setPaymentStatus(responseData.status);
        setReqData(responseData.reqData);
      } catch (err) {
        dispatch(showError(err.message));
      }
    };
    test();


    if (paymentStatus === "success") {
      //successful payment / execute code
      console.log("data", reqData);
      console.log("status", paymentStatus);
    } else if (paymentStatus === "failed") {
      dispatch(
        showError("Payment Info error! Please contact the support immediately!")
      );
    }
  }, []);

  return (
    <Fragment>
      {!paymentStatus || !reqData ? (
        <Loader />
      ) : (
        <Alert style={{ margin: "50px" }} variant="success">
          <Alert.Heading>Payment is Successful!</Alert.Heading>
          <p>
            Your payment was unsuccessful! Please find your receipt in your
            email!
          </p>
          <a className="rn-button-style--2 rn-btn-green mt--40" href="/">
            Home
          </a>
          <hr />
          <p className="mb-0">
            If you have been additionally charged or you face problems, do not
            hesitate to contact us!
          </p>
        </Alert>
      )}
    </Fragment>
  );
};

export default Success;
