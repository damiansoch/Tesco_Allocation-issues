import "./App.css";

import IssuesList from "./components/IssuesList";

function App() {
  return (
    <div className="bg-dark">
      <div className="text-center col-10 mx-auto">
        <h1 className="my-5 text text-white fs-1">Van Allocation Issues</h1>
        <IssuesList />
      </div>
    </div>
  );
}

export default App;
