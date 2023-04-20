import { useParams } from "react-router-dom";

// takes the eventId which is a title from the url and returns the event 
export const useObjectGrabUrl = (array) => {
  const eventId = useParams().eventId;

  let target;

  for (let i = 0; i < array.length; i++) {
    if (array[i].title === eventId) {
      target = array[i]; // Return the matching item from the array
    }
  }

  return target;
};
