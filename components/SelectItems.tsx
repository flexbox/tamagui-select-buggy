import { ChevronDown } from "@tamagui/lucide-icons";
import { Adapt, Label, Sheet, Text, View, XStack, YStack, Select as TamaguiSelect, useTheme } from "tamagui";


export function SelectItems({data, label}) {
  const theme = useTheme();

  return (    
    <TamaguiSelect defaultValue="">
      <Label>{label}</Label>
      <TamaguiSelect.Trigger
        pl="$2.5"
        iconAfter={
          <ChevronDown
            color="$accent1"
          />
        }
      >
        <TamaguiSelect.Value placeholder="Search..." />
      </TamaguiSelect.Trigger>

      <Adapt platform="touch">
        {/* or <Sheet> */}
        <TamaguiSelect.Sheet
          modal
          dismissOnSnapToBottom
          dismissOnOverlayPress
          animation="quick"
          snapPoints={[50, 25]}
        >
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay />
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
