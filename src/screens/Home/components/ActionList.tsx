import { ActionsSection, ActionsItem, ActionsTitle } from "./ActionsSection";
import { HomeAction } from "@/mocks/homeActionsData";

interface ActionListProps {
  actions: HomeAction[];
  onPress: (value: HomeAction["value"]) => void;
}

export const ActionList = ({ actions, onPress }: ActionListProps) => {
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
