import { useEffect, useReducer } from "react";
import { defaultReducer } from "../reducer/defaultReducer";
import { currentUser, verifyUserSignatures } from "@onflow/fcl";

export default function useSignMessage(user) {
  const [state, dispatch] = useReducer(defaultReducer, {
    loading: true,
    error: false,
    data: {
      message: "",
      verified: "",
    },
  });

  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, []);
  const getData = () => {
    dispatch({
      type: "SUCCESS",
      payload: { message: "Hello World", verified: "empty" },
    });
  };

  const signMessage = async () => {
    dispatch({ type: "PROCESSING" });
    try {
      const message = "Hello World";
      const messageHex = Buffer.from("Hello World").toString("hex");
      const sig = await currentUser().signUserMessage(messageHex);
      const verified = await verifyUserSignatures(messageHex, sig);

      console.log("sig", sig);
      console.log("verified", verified);

      dispatch({ type: "SUCCESS", payload: { message, verified: verified? 'true': 'false' } });
    } catch (err) {
      dispatch({ type: "ERROR" });
    }
  };

  return {
    ...state,
    signMessage,
  };
}
