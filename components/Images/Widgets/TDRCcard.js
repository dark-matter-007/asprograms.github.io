import React from "react";
import Image from "next/image";

function TDRCcard(properties) {
  function processNextLines(stringToInput) {
    return stringToInput.replace("\\n", "<br />");
  }
  return (
    <div className=" bg-zinc-800 m-4 max-w-[200px] rounded-2xl p-3 pt-0 w-fit h-fit overflow-hidden">
      <Image src={properties.image} alt="none" className=" h-auto w-full mx-auto" />
      <h1 className=" w-fit mx-auto text-2xl  text-cyan-300">
        {" "}
        {properties.title}{" "}
      </h1>
      <p className=" text-green-300 w-fit ml-auto mr-1">
        {" "}
        v{properties.version}{" "}
      </p>
      <p
        dangerouslySetInnerHTML={{
          __html: processNextLines(properties.description),
        }}
      ></p>
    </div>
  );
}

export { TDRCcard };
