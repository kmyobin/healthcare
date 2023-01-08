import React from "react";
import { useNavigate } from "react-router-dom";

function Confirm(props) {
  const navigate = useNavigate();

  const onClickResultBtn = () => {
    navigate(props.next);
  };

  return (
    <div>
      테스트 완료!
      <br /> <br />
      <button className="button" onClick={onClickResultBtn}>
        결과 확인하기✅
      </button>
    </div>
  );
}

export default Confirm;
