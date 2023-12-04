import React from "react";
import PencilIcon from "../icons/PencilIcon";

const ProgramDetailCard = ({}) => {
  return (
    <article className="w-[40%] bg-[#F5F5F4] shadow-lg">
      <section className="flex justify-between p-3 ">
        <section>
          <h3 className="text-[#00507A] font-bold">
            Interdisciplinary Studies (MAIS|MSIS)
          </h3>
          <h4 className="text-[#525252] font-semibold">
            30.99 Undergraduate 18 years
          </h4>
          <p className="font-light">Student Learning(UG)</p>
        </section>
        <section>
          <PencilIcon />
        </section>
      </section>
      <section className="flex justify-between gap-[0.15rem]">
        <button className="bg-[#D6D3D1] w-[50%] font-light">
          Manage Users
        </button>
        <button className="bg-[#D6D3D1] w-[50%] font-light">Disable</button>
      </section>
    </article>
  );
};

export default ProgramDetailCard;
