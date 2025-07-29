import { colorsList, itemsListOne, randomWordsList } from "components/data";
import { Select } from "components/Select";
import { SelectItems } from "components/SelectItems";
import { SelectPurple } from "components/SelectPurple";
import { useState } from "react";
import {
  Adapt,
  H4,
  Label,
  Paragraph,
  ScrollView,
  Sheet,
  Text,
  View,
  XStack,
  YStack,
} from "tamagui";

export default function TabTwoScreen() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <ScrollView flex={1} bg="$background" gap="$2" px="$4">
      <H4>Select</H4>
      <YStack mb="$8">
        <XStack jc="space-between" mb="$4">
          <YStack flex={1} width={"50%"} gap="$2" pr="$2">
            <SelectItems data={itemsListOne} label="Select an item" />
            <Paragraph>✅ works</Paragraph>
          </YStack>
          <YStack flex={1} width={"50%"} gap="$2" pl="$2">
            <SelectItems data={colorsList} label="Select a color" />
            <Paragraph>✅ works</Paragraph>
          </YStack>
        </XStack>
        <SelectItems data={randomWordsList} label="Select a word" />
        <Paragraph>✅ works</Paragraph>
      </YStack>

      <H4>Select from Lyoxx on Discord</H4>
      <YStack mb="$8">
        <XStack jc="space-between" mb="$4">
          <YStack flex={1} width={"50%"} gap="$2" pr="$2">
            <Select items={itemsListOne} label="Select an item" />
            <Paragraph>✅ works</Paragraph>
          </YStack>
          <YStack flex={1} width={"50%"} gap="$2" pl="$2">
            <Select items={colorsList} label="Select a color" />
            <Paragraph>✅ works</Paragraph>
          </YStack>
        </XStack>
        <Select items={randomWordsList} label="Select a word" />
        <Paragraph>✅ works</Paragraph>
      </YStack>

      <H4>Select from therealpurplemana on GitHub</H4>
      <SelectPurple
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <Paragraph>✅ works</Paragraph>
      <XStack height="$10" />
    </ScrollView>
  );
}
