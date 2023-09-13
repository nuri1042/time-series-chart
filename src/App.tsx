import React from "react";

import styled from "styled-components";

import ComplexChart from "./components/ComplexChart";
import ButtonContainer from "./components/Button/ButtonContainer";
import useSelectedRegion from "./hooks/useSelectedregion";
import useFetch from "./hooks/useFetch";

function App() {
  const chartData = useFetch();
  const { region, setRegion, onClickbtn } = useSelectedRegion();

  return (
    <Container>
      {chartData ? (
        <>
          <ButtonContainer
            regions={chartData.regionSet}
            selectedRegion={region}
            onClickbtn={onClickbtn}
          />
          <ComplexChart {...chartData} region={region} setRegion={setRegion} />
        </>
      ) : (
        <div>데이터 없음</div>
      )}
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
