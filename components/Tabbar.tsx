import type { TabsContentProps } from "tamagui";
import {
  Separator,
  SizableText,
  Tabs,
} from "tamagui";

export function Tabbar({ childrenOne, childrenTwo }) {
  return (
    <Tabs
      defaultValue="tab1"
      orientation="horizontal"
      flexDirection="column"
      flex={1}

    >
      <Tabs.List
        disablePassBorderRadius="bottom"
        aria-label="Manage your account"
      >
        <Tabs.Tab
          focusStyle={{
            backgroundColor: "$color3",
          }}
          flex={1}
          value="tab1"
        >
          <SizableText fontFamily="$body">Front</SizableText>
        </Tabs.Tab>
        <Tabs.Tab
          focusStyle={{
            backgroundColor: "$color3",
          }}
          flex={1}
          value="tab2"
        >
          <SizableText fontFamily="$body">Back</SizableText>
        </Tabs.Tab>
      </Tabs.List>
      <Separator />
      <TabsContent value="tab1">{childrenOne}</TabsContent>

      <TabsContent value="tab2">{childrenTwo}</TabsContent>
    </Tabs>
  );
}

const TabsContent = (props: TabsContentProps) => {
  return (
    <Tabs.Content

      flex={1}
      borderColor="$background"
      borderWidth="$2"
      {...props}
    >
      {props.children}
    </Tabs.Content>
  );
};
