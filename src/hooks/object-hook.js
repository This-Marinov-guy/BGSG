import { useParams, useHistory } from "react-router-dom";

// takes the eventId which is a title from the url and returns the event 
export const useObjectGrabUrl = (array) => {
  const history = useHistory();
  const eventId = useParams().eventId;

  let target;

  for (let i = 0; i < array.length; i++) {
    if (array[i].title === eventId) {
      target = array[i]; // Return the matching item from the array
    }
  }

  if (!target) {
    history.push("/404");
  }

  return target;
};
