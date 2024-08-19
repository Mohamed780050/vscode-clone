import TabsContainer from "./TabsContainer";

function Tabs() {
  return (
    <div className="min-w-full bg-[#181818] text-white">
      <ul className="theElementWithScrollX whitespace-nowrap flex overflow-x-scroll">
        <TabsContainer />
      </ul>
    </div>
  );
}
export default Tabs;
