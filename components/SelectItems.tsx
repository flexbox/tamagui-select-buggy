// debug-verbose
import { ChevronDown } from "@tamagui/lucide-icons";
import { Adapt, Label, Sheet, Select as TamaguiSelect, useTheme } from "tamagui";

export function SelectItems({data, label, ...rest}) {
  console.log("🚀 ~ SelectItems ~ rest:", rest);
  console.log("🚀 ~ SelectItems ~ process.env:", process.env);

  return (
    <TamaguiSelect defaultValue="" {...rest}>
      <Label>{label}</Label>
      <TamaguiSelect.Trigger
        pl="$2.5"
        iconAfter={
          <ChevronDown
            color="$accent4"
          />
        }
      >
        <TamaguiSelect.Value placeholder="Search…" />
      </TamaguiSelect.Trigger>

      <Adapt platform="touch" when="maxSm">
        <TamaguiSelect.Sheet
          native // iOS only
          preferAdaptParentOpenState
          modal
          dismissOnSnapToBottom
          dismissOnOverlayPress          
          // animation="quick"
          animation='100ms' // from https://github.com/tamagui/tamagui/issues/3436#issuecomment-3133812014
          snapPoints={[50, 25]}
        >
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay
            bg="rgba(155, 0, 0, 0.8)" // this shouldn't be necessary ?
          />
        </TamaguiSelect.Sheet>
      </Adapt>

      <TamaguiSelect.Content>
        <TamaguiSelect.ScrollUpButton>Up</TamaguiSelect.ScrollUpButton>
        <TamaguiSelect.Viewport>
          <TamaguiSelect.Group>
            <TamaguiSelect.Label>Select an item</TamaguiSelect.Label>
            {data.map((item, index) => (
              <TamaguiSelect.Item key={item.value} value={item.value} index={index}>
                <TamaguiSelect.ItemText>{item.label}</TamaguiSelect.ItemText>
                <TamaguiSelect.ItemIndicator />
              </TamaguiSelect.Item>
            ))}
          </TamaguiSelect.Group>
        </TamaguiSelect.Viewport>
        <TamaguiSelect.ScrollDownButton>Down</TamaguiSelect.ScrollDownButton>
      </TamaguiSelect.Content>
    </TamaguiSelect>
  );
}
