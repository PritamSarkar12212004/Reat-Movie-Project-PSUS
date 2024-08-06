import React from "react";

function CatagorySlection(prop) {
  const { setcate } = prop;
  return (
    <div class="w-[20vw]">
      <select
        onChange={(e) => setcate(e.target.value)}
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {["movie",  "all", "tv"].map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CatagorySlection;
