import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import PencilIcon from "@/components/icons/PencilIcon";
import StoreIcon from "@/components/icons/StoreIcon";
import NavigationBar from "@/components/nav-bar/NavigationBar";
import Search from "@/components/search-bar/Search";

export default function Home() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Search />
      <main className="flex justify-center gap-2">
        <PrimaryButton />

        <SecondaryButton />
        <PencilIcon />
        <StoreIcon />
      </main>
    </>
  );
}
