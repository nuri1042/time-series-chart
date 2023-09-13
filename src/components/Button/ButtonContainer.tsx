import React, { MouseEvent } from "react";

import styled from "styled-components";
import FilterButton from "./FilterButton";

interface ButtonContainerPropsType {
  regions: string[];
  selectedRegion: string;
  onClickbtn: (e: MouseEvent<HTMLUListElement>) => void;
}
function ButtonContainer({
  regions,
  selectedRegion,
  onClickbtn,
}: ButtonContainerPropsType) {
  return (
    <ButtonWrapper onClick={onClickbtn}>
      {regions.map((region) => {
        const isSelected = selectedRegion === region;
        return (
          <FilterButton key={region} value={region} isSelected={isSelected} />
        );
      })}

      <button type="button">선택해제</button>
    </ButtonWrapper>
  );
}

export default ButtonContainer;

const ButtonWrapper = styled.ul`
  list-style: none;
  display: flex;
`;
