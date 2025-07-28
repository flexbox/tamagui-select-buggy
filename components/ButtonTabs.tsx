import { ReactNode, useMemo, useState } from "react";
import { Button, useTheme, XStack, YStack } from "tamagui";


interface ButtonTabsProps {
  labelOne: string;
  labelTwo: string;
  childrenOne: ReactNode;
  childrenTwo: ReactNode;
}

/**
 * ButtonTabs is a component that displays two buttons and two children.
 */
export function ButtonTabs({
  labelOne = "Front",
  labelTwo = "Back",
  childrenOne,
  childrenTwo
}: ButtonTabsProps) {
  const [activeTab, setActiveTab] = useState<"front" | "back">("front");
  const { color3 } = useTheme();

  const buttons = useMemo(
    () => (
      <XStack
        gap="$3"
      >
        <Button
          f={1}
          onPress={() => {
            setActiveTab("front");
          }}
          variant={activeTab !== "front" ? "outlined" : undefined}
        >
          {labelOne}
        </Button>
        <Button
          f={1}
          onPress={() => {
            setActiveTab("back");
          }}
          variant={activeTab !== "back" ? "outlined" : undefined}
        >
          {labelTwo}
        </Button>
      </XStack>
    ),
    [activeTab, labelOne, labelTwo, color3.val]
  );

  const activeContent = useMemo(() => {
    return activeTab === "front" ? childrenOne : childrenTwo;
  }, [activeTab, childrenOne, childrenTwo]);

  return (
    <YStack py="$2" width="100%">
      {buttons}
      <YStack key={activeTab}>{activeContent}</YStack>
    </YStack>
  );
}
