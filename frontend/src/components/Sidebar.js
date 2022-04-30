import TimeTableList from "./TimeTableList";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <h1 className="text-3xl font-semibold mb-10">Explore</h1>
      <TimeTableList />
    </div>
  );
};

export default Sidebar;