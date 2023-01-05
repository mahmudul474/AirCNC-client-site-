import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FcGoogle } from "react-icons/fc";

import { getauthToken } from "../../../Api/authToken";

const Google = () => {
  const { signInWithGoogle, loading, setLoading } = useContext(AuthContext);

  const handlegoogleSining = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        getauthToken(user)
      
        setLoading(true);
      })
      .catch((err) => {
        toast.error(err.message)
        setLoading(false)
      });
  };

  return (
    <button
      onClick={handlegoogleSining}
      aria-label="Log in with Google"
      className="p-3 rounded-sm"
    >


     <span className="text-xl"><FcGoogle></FcGoogle></span>
     
    </button>
  );
};

export default Google;
