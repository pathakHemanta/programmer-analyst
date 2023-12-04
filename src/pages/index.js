import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import PencilIcon from "@/components/icons/PencilIcon";
import StoreIcon from "@/components/icons/StoreIcon";
import NavigationBar from "@/components/nav-bar/NavigationBar";
import ProgramDetailCard from "@/components/program-detail-card/ProgramDetailCard";
import Search from "@/components/search-bar/Search";
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
      <NavigationBar profilePicture={"WW"}></NavigationBar>
      <Search
        placeholder={placeholder}
        onClick={handleClick}
        onChange={handleChange}
        value={value}
        count={2}
        total={4}
      />
      <main className="flex flex-col justify-center gap-2">
        <section className="flex justify-center gap-2">
          <PrimaryButton label="Primary Button" displayIcon={true} />

          <SecondaryButton label={"Secondary Button"} displayIcon={true} />
          <PencilIcon pencilColor={"black"} />
          <StoreIcon />
        </section>
        <section className="flex justify-center">
          <ProgramDetailCard />
        </section>
      </main>
    </>
  );
}
