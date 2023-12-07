import ButtonPair from "@/components/button-pair/ButtonPair";
import PrimaryButton from "@/components/buttons/primary-button/PrimaryButton";
import CardContainer from "@/components/container/CardContainer";
import Instruction from "@/components/instruction/Instruction";
import NavigationBar from "@/components/nav-bar/NavigationBar";
import Search from "@/components/search-bar/Search";
import ProgramDetailCard from "@/components/program-detail-card/ProgramDetailCard";
import Head from "next/head";

export default function Home() {
  const programs = [
    {
      programName: "Interdisciplinary Studies (MAIS|MSIS)",
      programDuration: "30.99 Undergraduate 11 years",
      programType: "Student Learning (GR)",
    },
    {
      programName: "Applied Arts and Sciences (BAAS)",
      programDuration: "30.99 Undergraduate 11 years",
      programType: "Student Learning (UG)",
    },
    {
      programName: "Management of Technical Education (MEd)",
      programDuration: "13.13 Undergraduate 18 years",
      programType: "Student Learning (GR)",
    },
  ];

  function handleClick(e) {
    e.preventDefault();
    alert("You clicked a button!!");
  }

  return (
    <>
      {/* This is the head component of the index page */}
      <Head>
        <title>Programmer Analyst Assessment</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="This is an assessment for the position of programmer analyst at the Texas State University. I enjoyed doing the project."
        />
      </Head>

      {/* methods are assigned to respective attrubutes based on the application */}
      <NavigationBar
        pageLabel={"Outcomes Assessment"}
        userInitials={"WW"}
        secondaryHeading={"Applied Arts Departments and Programs"}
        onClickMenuButton={handleClick}
        onClickHeadingButton={handleClick}
        onClickBackButton={handleClick}
        onClickUserInitialsButton={handleClick}
      ></NavigationBar>
      <main>
        <div id="buttonFamily">
          <div>
            {/* value and onChange properties are set based on the application */}
            <Search
              id={"departments_programs"}
              name={"departments_programs"}
              placeholder={"Department and Programs"}
              onClick={handleClick}
              count={2}
              total={4}
            />
            <div id="buttons">
              <ButtonPair
                leftCount={1}
                rightCount={0}
                leftLabel={"Enabled Departments"}
                rightLabel={"Disabled Departments"}
              />
              <PrimaryButton
                displayIcon={false}
                label={"Add Department"}
                onClick={handleClick}
              />
            </div>
          </div>
          <div id="instruction">
            <Instruction />
          </div>
        </div>
        <CardContainer
          containerHeading={"Organization, Workforce, and Leadership Studies"}
          cardObjects={programs}
          onClickPencilIcon={handleClick}
          onClickStoreIcon={handleClick}
          onClickPrimaryButton={handleClick}
          onClickCardPencilIcon={handleClick}
          onClickCardLeftButton={handleClick}
          onCLickCardRightButton={handleClick}
          leftCountButtonPair={3}
          rightCountButtonPair={0}
          leftLabelButtonPair={"Enabled"}
          rightLabelButtonPair={"Disabled"}
          primaryButtonLabel={"Add Program"}
          cardLeftButtonLabel={"Manage Users"}
          cardRightButtonLabel={"Disable"}
        />
      </main>
    </>
  );
}
