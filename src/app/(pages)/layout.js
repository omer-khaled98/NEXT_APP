import Sidebar from "../../component/sidebar";
export default function route({ children }) {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 container">{children}</div>
      </div>
    </>
  );
}
