import RecarsiveContainer from "./RecarsiveContainer";
function NavBar() {
  return (
    <>
      <div className="px-4 pt-12 md:pt-4 shadow bg-[#181818] text-white border-r border-[#2b2b2b] overflow-hidden overflow-y-auto navBar h-full">
        <ul className="block h-full">
          <RecarsiveContainer />
        </ul>
      </div>
    </>
  );
}
export default NavBar;
