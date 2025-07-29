import { H2, H4, YStack } from "tamagui";
import { SelectItems } from "components/SelectItems";
import { modeList, speedList } from "components/data";
import { ButtonTabs } from "components/ButtonTabs";
import { Select } from "components/Select";

function Front() {
  return (
    <YStack gap="$2" width="100%">
      <SelectItems data={speedList} label="Speed" key="select-items-front" id="select-items-front" />
    </YStack>
  );
}

function Back() {
  return (
    <YStack gap="$2" width="100%">
      <SelectItems data={modeList} label="Mode" key="select-items-back" />
    </YStack>
  );
}

function LyoxxFront() {
  return (
    <YStack gap="$2" width="100%">
      <Select items={speedList} label="Speed" key="lyoxx-front" />
    </YStack>
  );
}

function LyoxxBack() {
  return (
    <YStack gap="$2" width="100%">
      <Select items={modeList} label="Mode" key="lyoxx-back" />
    </YStack>
  );
}

export default function TabOneScreen() {
  return (
    <YStack flex={1} bg="$background">
      <YStack gap="$8" px="$4" pt="$5">
        <H2>Tamagui + Select Bug</H2>

        <H4>Select</H4>      
        <ButtonTabs
          labelOne={"Front"}
          labelTwo={"Back"}
          childrenOne={<Front />}
          childrenTwo={<Back />}
        />

        {/* <H4>Select from Lyoxx on Discord</H4>
        <ButtonTabs
          labelOne={"Front"}
          labelTwo={"Back"}
          childrenOne={<LyoxxFront />}
          childrenTwo={<LyoxxBack />}
        /> */}
      </YStack>

    </YStack>
  );
}
