import React from "react";
import Layout from "../components/Layout/layout";
import { useAlwaysRequirePassword } from "../recoil/general/generalState";

const Wallet = () => {
  const [alwaysRequirePassword, setAlwaysRequirePassword] =
    useAlwaysRequirePassword();
  return (
    <Layout>
      <>
        <div className="space-y-3">
          <div>
            Always Require Password: {JSON.stringify(alwaysRequirePassword)}
          </div>
          <button
            className="bg-white p-3"
            onClick={() => {
              setAlwaysRequirePassword();
            }}
          >
            Set State
          </button>
        </div>
      </>
    </Layout>
  );
};

export default Wallet;
