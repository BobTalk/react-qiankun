import AssetsModule from "./pages/assets";
import UserInfoModule from "./pages/user-info";

function App() {
  return (
    <article>
      <div className="flex">
        <UserInfoModule />
        <AssetsModule />
      </div>
      <div></div>
      <div></div>
    </article>
  );
}

export default App;
