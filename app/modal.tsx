import { ButtonTabs } from "components/ButtonTabs";
import { randomWordsList, speedList } from "components/data";
import { SelectItems } from "components/SelectItems";
import { Anchor, Paragraph, View, XStack, YStack } from "tamagui";

function One() {
  return (
    <YStack gap="$2" width="100%">
      <SelectItems data={speedList} label="Speed" />
    </YStack>
  );
}

function Two() {
  return (
    <YStack gap="$2" width="100%">
      <SelectItems data={speedList} label="Speed" />
    </YStack>
  );
}

export default function ModalScreen() {
  return (
    <View flex={1} bg="$background" px="$4">
      <SelectItems data={randomWordsList} label="Select a random word" />
      
      <ButtonTabs
        labelOne={"Front"}
        labelTwo={"Back"}
        childrenOne={<One />}
        childrenTwo={<Two />}
      />
    </View>
  );
}
