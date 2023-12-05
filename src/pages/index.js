import ButtonPair from "@/components/button-pair/ButtonPair";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import CardContainer from "@/components/container/CardContainer";
import PencilIcon from "@/components/icons/PencilIcon";
import StoreIcon from "@/components/icons/StoreIcon";
import NavigationBar from "@/components/nav-bar/NavigationBar";
import ProgramDetailCard from "@/components/program-detail-card/ProgramDetailCard";
import Search from "@/components/search-bar/Search";
import { Container } from "postcss";
import { useState } from "react";

export default function Home() {
  let placeholder = "Departments and Programs";
  const [value, setValue] = useState("");

  function handleClick(e) {
    e.preventDefault();
    console.log("I clicked search!");
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <NavigationBar
        pageLabel={"Outcomes Assessment"}
        profilePicture={"WW"}
        text={"Applied Arts Department and Programs"}
      ></NavigationBar>
      <Search
        placeholder={placeholder}
        onClick={handleClick}
        onChange={handleChange}
        value={value}
        count={2}
        total={4}
      />
      {/* <section className="flex justify-center gap-2">
        <PrimaryButton label="Primary Button" displayIcon={true} />

        <SecondaryButton label={"Secondary Button"} displayIcon={true} />
        <PencilIcon pencilColor={"dark"} />
        <StoreIcon />
        <ButtonPair
          enabledValue={1}
          disabledValue={0}
          leftLabel={"Enable Departments"}
          rightLabel={"Disable Departments"}
        />
      </section> */}
      <ButtonPair
        enabledValue={1}
        disabledValue={0}
        leftLabel={"Enable Departments"}
        rightLabel={"Disable Departments"}
      />
      <CardContainer
        containerHeading={"Organization, Workforce, and Leadership Studies"}
      />
      {/* <section className="flex justify-center">
          <ProgramDetailCard
            mainHeading={"Interdisciplinary Studies (MAIS|MSIS)"}
            secondaryHeading={"30.99 Undergraduate 18 years"}
            description={"Student Learning (UG)"}
          />
        </section> */}
    </>
  );
}
