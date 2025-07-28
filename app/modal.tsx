import { ButtonTabs } from "components/ButtonTabs";
import { speedList } from "components/data";
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
      <ButtonTabs
        labelOne={"Front"}
        labelTwo={"Back"}
        childrenOne={<One />}
        childrenTwo={<Two />}
      />
    </View>
  );
}
