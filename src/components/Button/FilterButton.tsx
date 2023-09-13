import React from "react";

import styled from "styled-components";

interface FilterButtonPropsType {
  value: string;
  isSelected: boolean;
}
function FilterButton({ value, isSelected }: FilterButtonPropsType) {
  return (
    <li>
      <Button type="button" className={isSelected ? "selected" : ""}>
        {value}
      </Button>
    </li>
  );
}

export default FilterButton;

const Button = styled.button`
  margin-right: 10px;

  &.selected {
    color: #3300cc;
  }
`;
