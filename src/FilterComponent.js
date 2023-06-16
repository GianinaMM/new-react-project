import classes from "./FilterComponent.module.scss";

const FilterComponent = () => {
  return (
    <div className={`${classes.filterComponent}`}>
      <table className={`${classes.table}`}>
        <tr className={`${classes.container}`}>
          <th className={`${classes.th}`}>Name</th>
          <th className={`${classes.th}`}>Department</th>
          <th>
           
            <input type="text" className={`${classes.input}`} placeholder="Search.."></input>
          </th>
        </tr>
      </table>
    </div>
  );
};

export default FilterComponent;
