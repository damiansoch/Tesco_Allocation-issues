import "./App.css";

import IssuesList from "./components/IssuesList";

function App() {
  return (
    <div className="text-center col-10 mx-auto my-5">
      <h1 className="my-5">Van Allocation Issues</h1>
      <IssuesList />
    </div>
  );
}

export default App;
