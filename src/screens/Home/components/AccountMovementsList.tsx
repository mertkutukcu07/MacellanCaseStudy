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
import { Box } from "@/components/common";
import { BulletIcon } from "@/assets/icons";

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
        <Box row alignItems="center" gap={4}>
          <AccountMovementsTitle>{getTitle()}</AccountMovementsTitle>
          {item.type === "capture" && <BulletIcon />}
        </Box>
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
