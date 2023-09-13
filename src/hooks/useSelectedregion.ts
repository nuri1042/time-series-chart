import { MouseEvent, useState } from "react";

function useSelectedRegion() {
  const [region, setRegion] = useState<string>("");

  const onClickbtn = (e: MouseEvent<HTMLUListElement>) => {
    const text = (e.target as Node).textContent;

    if (text) {
      setRegion(text);
    } else if (text === "선택해제") {
      setRegion("");
      return;
    }
  };
  return { region, setRegion, onClickbtn };
}

export default useSelectedRegion;
