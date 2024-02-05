import React from "react";
import Background from "./component/Background";
import Head from "next/head"; // Correct import for Head

function Page() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/versel.png" />{" "}
        {/* Correct favicon path */}
      </Head>
      <Background />
    </>
  );
}

export default Page;
