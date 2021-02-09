import React from "react";
import styled from "styled-components";
import Header from "../../Header";
import SavingGoalPresenter from "./SavingGoalPresenter";

const SavingGoalContainerBlock = styled.div``;

const SavingGoalContainer = () => {
  return (
    <SavingGoalContainerBlock>
      <Header HeaderInfo="자산"></Header>
      <SavingGoalPresenter></SavingGoalPresenter>
    </SavingGoalContainerBlock>
  );
};

export default SavingGoalContainer;
