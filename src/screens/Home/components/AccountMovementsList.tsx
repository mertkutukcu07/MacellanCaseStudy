import React from "react";
import { Activity } from "@/types/activityList/response";
import {
  AccountMovementsDateAndClockText,
  AccountMovementsIcon,
  AccountMovementsIconAndTitle,
  AccountMovementsInfo,
  AccountMovementsItem,
  AccountMovementsPriceText,
  AccountMovementsTitle,
} from "./AccountMovementsSection";
import { useTransactionFormat } from "@/hooks/useTransactionFormat";

interface AccountMovementsListProps {
  item: Activity;
  index: number;
}

const AccountMovementsList = ({ item, index }: AccountMovementsListProps) => {
  const { getIcon, getTitle, getAmount, getFormattedDate } =
    useTransactionFormat(item);

  return (
    <AccountMovementsItem key={`account-movements-${index}`}>
      <AccountMovementsIconAndTitle>
        <AccountMovementsIcon>{getIcon()}</AccountMovementsIcon>
        <AccountMovementsTitle>{getTitle()}</AccountMovementsTitle>
      </AccountMovementsIconAndTitle>
      <AccountMovementsInfo>
        <AccountMovementsPriceText type={item.type as "capture" | "top-up"}>
          {getAmount()}
        </AccountMovementsPriceText>
        <AccountMovementsDateAndClockText>
          {getFormattedDate()}
        </AccountMovementsDateAndClockText>
      </AccountMovementsInfo>
    </AccountMovementsItem>
  );
};

export default AccountMovementsList;
