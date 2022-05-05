import { SelectInput } from "vcc-ui";

type FilterBarProps = {
  list: Array<string>;
  filter: string;
  setFilter: Function;
};

const FilterBar = ({ list, filter, setFilter }: FilterBarProps) => {
  return (
    <SelectInput value={filter} onChange={(e) => setFilter(e.target.value)}>
      {list.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </SelectInput>
  );
};

export default FilterBar;
