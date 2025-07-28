import { colorsList, itemsListOne, randomWordsList } from "components/data";
import { SelectItems } from "components/SelectItems";
import { Adapt, Label, Sheet, Text, View, XStack, YStack } from "tamagui";

export default function TabTwoScreen() {
  return (
    <View flex={1} bg="$background" gap="$2" px="$4">
      <XStack jc="space-between" mb="$4">
        <YStack f={1} width={"50%"} gap="$2" pr="$2">
        <SelectItems data={itemsListOne} label="Select an item" />
        </YStack>
        <YStack f={1} width={"50%"} gap="$2" pl="$2">
        <SelectItems data={colorsList} label="Select a color" />
        </YStack>
      </XStack>
      <SelectItems data={randomWordsList} label="Select a word" />
    </View>
  );
}
