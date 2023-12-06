import ButtonPair from "@/components/button-pair/ButtonPair";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import CardContainer from "@/components/container/CardContainer";
import PencilIcon from "@/components/icons/PencilIcon";
import StoreIcon from "@/components/icons/StoreIcon";
import Instruction from "@/components/instruction/Instruction";
import NavigationBar from "@/components/nav-bar/NavigationBar";
import ProgramDetailCard from "@/components/program-detail-card/ProgramDetailCard";
import Search from "@/components/search-bar/Search";
import { Container } from "postcss";
import { useState } from "react";
import Head from "next/head";

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
      <Head>
        <title>Programmer Analyst Assessment</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="This is an assessment for the position of programmer analyst at the Texas State University"
        />
      </Head>
      <NavigationBar
        pageLabel={"Outcomes Assessment"}
        profilePicture={"WW"}
        text={"Applied Arts Department and Programs"}
      ></NavigationBar>
      <main>
        <div id="family">
          <div id="everything">
            <Search
              placeholder={placeholder}
              onClick={handleClick}
              onChange={handleChange}
              value={value}
              count={2}
              total={4}
            />
            <div id="buttons">
              <ButtonPair
                enabledValue={1}
                disabledValue={0}
                leftLabel={"Enable Departments"}
                rightLabel={"Disable Departments"}
              />
              <PrimaryButton displayIcon={false} label={"Add Department"} />
            </div>
          </div>
          <div id="instruction">
            <Instruction />
          </div>
        </div>
        <CardContainer
          containerHeading={"Organization, Workforce, and Leadership Studies"}
        />
      </main>
    </>
  );
}
