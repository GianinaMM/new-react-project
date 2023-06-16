import "./App.css";
import Header from "./Header";
import FilterComponent from "./FilterComponent";
import ListComponent from "./ListComponent";
import classes from "./App.module.scss";

function App() {
  return (
    <div className={`${classes.App}`}>
      <Header></Header>
      <FilterComponent></FilterComponent>
      <br></br>
      <ListComponent></ListComponent>
      <br></br>
    </div>
  );
}

export default App;
