import ButtonPair from "@/components/button-pair/ButtonPair";
import PrimaryButton from "@/components/buttons/primary-button/PrimaryButton";
import SecondaryButton from "@/components/buttons/secondary-button/SecondaryButton";
import CardContainer from "@/components/container/CardContainer";
import PencilIcon from "@/components/icons/pencil-icon/PencilIcon";
import TrashIcon from "@/components/icons/trash-icon/TrashIcon";
import Instruction from "@/components/instruction/Instruction";
import NavigationBar from "@/components/nav-bar/NavigationBar";
import Search from "@/components/search-bar/Search";
import Head from "next/head";

/**
 * @function Home
 * @returns {JSX.Element} - The rendered Home Component
 */
export default function Home() {
  // Sample Data to recreate the given design
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

  // Dummy function to ensure button functionality in components
  function handleClick(e) {
    e.preventDefault();
    alert("You clicked a button!!");
  }

  return (
    <>
      {/* head component of the html document created */}
      <Head>
        <title>Programmer Analyst Assessment</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="This is an assessment for the position of programmer analyst at the Texas State University. I enjoyed doing the project."
        />
      </Head>

      {/* NavigationBar component rendered with mock data */}
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
            {/* Search Component with mock values to recreate the Figma Design*/}
            <Search
              id={"departments_programs"}
              name={"departments_programs"}
              placeholder={"Department and Programs"}
              onClick={handleClick}
              count={2}
              total={4}
            />
            <div id="buttons">
              {/* ButtonPair component with mock values to recreate the Figma Design */}
              <ButtonPair
                leftCount={1}
                rightCount={0}
                leftLabel={"Enabled Departments"}
                rightLabel={"Disabled Departments"}
              />
              {/* PrimaryButton component with mock values to recreate the Figma Design */}
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

        {/* CardContainer with mock values to recreate the Figma Design */}
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
      <div id="buttonsAndIcons">
        <PrimaryButton label={"Primary Button"} onClick={handleClick} />
        <PrimaryButton
          label={"Primary Button"}
          displayIcon={true}
          onClick={handleClick}
        />
        <SecondaryButton label={"Secondary Button"} onClick={handleClick} />
        <SecondaryButton
          label={"Secondary Button"}
          displayIcon={true}
          onClick={handleClick}
        />
        <PencilIcon pencilColor={"dark"} onClick={handleClick} />
        <PencilIcon onClick={handleClick} />
        <TrashIcon onClick={handleClick} />
      </div>
    </>
  );
}
