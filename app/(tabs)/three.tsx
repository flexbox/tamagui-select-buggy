import { itemsListOne, randomWordsList } from "components/data";
import { SelectItems } from "components/SelectItems";
import { Tabbar } from "components/Tabbar";
import { H5, Paragraph, YStack } from "tamagui";

export default function TabThreeScreen() {
  return (
    <YStack flex={1} bg="$background" gap="$2" px="$4">
      <Tabbar
        childrenOne={<SelectItems data={itemsListOne} label="Select an item" />}
        childrenTwo={
          <SelectItems data={randomWordsList} label="Select a random word" />
        }
      />
      <Paragraph>❌ Does not works when switching tabs</Paragraph>
    </YStack>
  );
}
