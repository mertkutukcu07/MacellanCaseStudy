import { View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { RecommandationsAmount } from "@/mocks/recommandationsAmountData";
import {
  AmountButton,
  AmountText,
  RecommandationsAmountSection,
} from "./recommandationsAmountSection";

interface RecommandationAmountsListProps {
  amount: number;
  setAmount: (amount: number) => void;
  recommandationsAmountData: RecommandationsAmount[];
}

export const RecommandationAmountsList = ({
  amount,
  setAmount,
  recommandationsAmountData,
}: RecommandationAmountsListProps) => {
  const isSelected = (itemAmount: number) => itemAmount === amount;
  return (
    <RecommandationsAmountSection>
      {recommandationsAmountData.map((item, index) => (
        <AmountButton
          key={`amount-${index}`}
          isSelected={isSelected(item.amount)}
          onPress={() => setAmount(item.amount)}
        >
          <AmountText isSelected={isSelected(item.amount)}>
            ₺{item.amount}
          </AmountText>
        </AmountButton>
      ))}
    </RecommandationsAmountSection>
  );
};
