import PrimaryButton from "@/components/buttons/PrimaryButton";
import NavigationBar from "@/components/nav-bar/NavigationBar";
import Search from "@/components/search-bar/Search";

export default function Home() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Search />
      <main>
        <PrimaryButton />
      </main>
    </>
  );
}
