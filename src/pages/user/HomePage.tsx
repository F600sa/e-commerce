import Brand from "src/components/user/brand";
import Landing from "src/components/user/landing";

function HomePage() {
  return (
    <div className=" flex flex-col">
      <Landing />
      <Brand />
    </div>
  );
}

export default HomePage;
