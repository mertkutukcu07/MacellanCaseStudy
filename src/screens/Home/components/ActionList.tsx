import { FC } from "react";
import { ActionsSection, ActionsItem, ActionsTitle } from "./ActionsSection";
import { HomeAction } from "@/mocks/homeActionsData";

interface ActionListProps {
  actions: HomeAction[];
  onPress: (value: string) => void;
}

export const ActionList: FC<ActionListProps> = ({ actions, onPress }) => {
  return (
    <ActionsSection>
      {actions.map((action, index) => (
        <ActionsItem
          key={`action-${index}`}
          backgroundColor={action.backgroundColor}
          isStroke={action.isStroke}
          isLogout={action.value === "logout"}
          onPress={() => onPress(action.value)}
        >
          <action.icon />
          {action.title && (
            <ActionsTitle light={action.value !== "makePayment"}>
              {action.title}
            </ActionsTitle>
          )}
        </ActionsItem>
      ))}
    </ActionsSection>
  );
};
