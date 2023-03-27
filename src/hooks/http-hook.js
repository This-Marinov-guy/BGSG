import { useCallback, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showError } from "../redux/error";
import { selectLoading, startLoading, stopLoading } from "../redux/loading";

export const useHttpClient = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      dispatch(startLoading());
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);

      try {
        const response = await fetch(process.env.REACT_APP_URL + url, {
          method,
          body: JSON.stringify(body),
          headers,
          signal: httpAbortCtrl.signal,
        });

        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );

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

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { loading, sendRequest };
};
