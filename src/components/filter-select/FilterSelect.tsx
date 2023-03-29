import {FormControl, MenuItem, Select, InputLabel} from "@mui/material";
import {FILTER_OPTIONS} from "../../util/constants";
import {styled} from "@mui/material/styles";

type Props = {
  selectedFilter?: string;
  handleFilterChange: (event : any) => void
}
const StyledSelect = styled(Select)`
  color: white;
  border: 1px solid white;
    &:before {
      border-bottom: none
    }
    &:after {
      border-bottom: none
    }
    &:not(.Mui-disabled):hover::before {
      border-color: white
    }
    svg {
      color: white
    }
`;
const FilterSelect = ({ selectedFilter, handleFilterChange} : Props) => {
  return (
    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel style={{color: 'white'}} id="filter-select-label">Filter</InputLabel>
      <StyledSelect
        labelId="filter-select-label"
        id="filter-select"
        value={selectedFilter}
        label="Age"
        onChange={handleFilterChange}
      >
        {FILTER_OPTIONS.map(menuItem => <MenuItem value={menuItem.value}>{menuItem.label}</MenuItem>)}
      </StyledSelect>
    </FormControl>
  )
}
export default FilterSelect;
