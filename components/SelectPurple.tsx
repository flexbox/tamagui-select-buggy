import { Text, View } from "react-native";
import { Adapt, Select, Sheet } from "tamagui";

interface SelectPurpleProps {
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
}

const CATEGORIES = [
  "All",
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
];

export function SelectPurple({ selectedCategory, onCategoryChange }: SelectPurpleProps) {
  return (
    <Select
      defaultValue={selectedCategory}
      onValueChange={(value) => {
        onCategoryChange(value);
      }}
      name="category"
    >
      <Select.Trigger>
        <Select.Value>{selectedCategory}</Select.Value>
        <Select.Icon />
      </Select.Trigger>
      <Adapt platform="touch" when="maxSm">
        <Sheet
          native
          modal
          snapPoints={[50]}
          animationConfig={{
            type: "spring",
            damping: 20,
            mass: 1.2,
            stiffness: 250,
          }}
        >
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>
      <Select.Content>
        <Select.ScrollUpButton />
        <Select.Viewport>
          <Select.Group>
            {CATEGORIES.map((category, index) => (
              <Select.Item key={category} value={category} index={index}>
                <Select.ItemText>{category}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton />
      </Select.Content>
    </Select>
  );
}
