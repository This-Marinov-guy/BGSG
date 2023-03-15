import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectError, showError } from "../redux/error";
import { selectLoading, startLoading, stopLoading } from "../redux/loading";

export const useHttpClient = () => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  const sendRequest = async (method = "get", url, body = "null", headers) => {
    const source = axios.CancelToken.source();
    dispatch(startLoading());

    try {
      const response = await axios({
        method,
        url,
        data: body,
        headers,
        cancelToken: source.token,
      });

      setData(response.data);
      dispatch(stopLoading());
    } catch (error) {
      if (axios.isCancel(error)) {
        // don't update state in case component is dismounting
      } else {
        dispatch(stopLoading());
        dispatch(showError(error));
      }
    }

    return () => {
      source.cancel();
    };
  };

  return { data, error, loading, sendRequest };
};
