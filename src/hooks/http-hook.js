import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectError, showError } from "../redux/error";
import { selectLoading, startLoading, stopLoading } from "../redux/loading";

export const useHttpClient = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);


  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      dispatch(startLoading());

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
        });

        const responseData = await response.json();


        if (!response.ok) {
          throw new Error(responseData.message);
        }

        dispatch(stopLoading());
        return responseData;
      } catch (err) {
        dispatch(showError(err.message));
        dispatch(stopLoading());
        throw err;
      }
    },
    []
  );



  return { loading, error, sendRequest };
};
