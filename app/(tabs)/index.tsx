import { H2, YStack } from "tamagui";
import { SelectItems } from "components/SelectItems";
import { modeList, speedList } from "components/data";
import { ButtonTabs } from "components/ButtonTabs";
import { Select } from "components/Select";

function Front() {
  return (
    <YStack gap="$2" width="100%">
      <SelectItems data={speedList} label="Speed" />
    </YStack>
  );
}

function Back() {
  return (
    <YStack gap="$2" width="100%">
      <SelectItems data={modeList} label="Mode" />
    </YStack>
  );
}


function LyoxxFront() {
  return (
    <YStack gap="$2" width="100%">
      <Select items={speedList} label="Speed" />
    </YStack>
  );
}

function LyoxxBack() {
  return (
    <YStack gap="$2" width="100%">
      <Select items={modeList} label="Mode" />
    </YStack>
  );
}

export default function TabOneScreen() {
  return (
    <YStack flex={1} bg="$background">
      <YStack items="center" gap="$8" px="$10" pt="$5">
        <H2>Tamagui + Select Bug</H2>
        
        <ButtonTabs
          labelOne={"Front"}
          labelTwo={"Back"}
          childrenOne={<Front />}
          childrenTwo={<Back />}
        />

        <ButtonTabs
          labelOne={"Front"}
          labelTwo={"Back"}
          childrenOne={<LyoxxFront />}
          childrenTwo={<LyoxxBack />}
        />
      </YStack>

    </YStack>
  );
}
