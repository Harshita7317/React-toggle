import { useState } from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const ConditionalRendering = () => {
  const [isVerified, setisVerified] = useState(false);
  return (
    <>
      <h1>harshita@123</h1>
      {isVerified ? (
        <p>
          harshita@123 is verified{" "}
          <VerifiedUserIcon sx={{ backgroundColor: "skyblue" }} />
        </p>
      ) : null}
      <button onClick={() => setisVerified(true)} type="button">
        Verify harshita@123
      </button>
    </>
  );
};
export default ConditionalRendering;
