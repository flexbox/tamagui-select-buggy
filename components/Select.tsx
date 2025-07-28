import React, { useMemo, useState } from 'react';

import { LinearGradient } from '@tamagui/linear-gradient';
import { Check, ChevronDown } from '@tamagui/lucide-icons';
// import { Adapt, Sheet, Select as UISelect } from 'tamagui';
// import type { SelectProps as UISelectProps } from 'tamagui';

import { Adapt, Label, Sheet, Select as UISelect, XStack, YStack } from 'tamagui'
import type { SelectProps as UISelectProps } from 'tamagui'

export type SelectProps = UISelectProps & {
  label?: string;
  items?: { label: string; value?: string }[];
  trigger?: React.ReactNode;
  placeholder?: string;
  native?: boolean;
};


// Based on the code from Lyoxx on Discord
export const Select = ({
  items,
  label,
  trigger,
  placeholder,
  native = true,
  ...props
}: SelectProps): React.ReactElement => {
  const [val, setVal] = useState<string | undefined>(undefined);

  const renderItems = useMemo(() => {
    return items?.map((item, i) => (
      <UISelect.Item
        index={i}
        key={`${item.label}-${i}`}
        value={item.value ?? item.label.toLowerCase()}
      >
        <UISelect.ItemText>{item.label}</UISelect.ItemText>
        <UISelect.ItemIndicator marginLeft='auto'>
          <Check size={16} />
        </UISelect.ItemIndicator>
      </UISelect.Item>
    ));
  }, [items]);

  return (
    <UISelect value={val} onValueChange={setVal} disablePreventBodyScroll {...props}>
      {trigger || (
        <UISelect.Trigger iconAfter={ChevronDown}>
          <UISelect.Value placeholder={placeholder ?? 'Select...'} />
        </UISelect.Trigger>
      )}

      <Adapt platform='touch'>
        <Sheet native={native} animation='medium' modal dismissOnSnapToBottom>
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay
            background='$shadowColor'
            animation='lazy'
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>

      <UISelect.Content zIndex={200000}>
        <UISelect.ScrollUpButton justify='center' position='relative' width='100%' height={'$3'}>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={['$background', 'transparent']}
          />
        </UISelect.ScrollUpButton>

        <UISelect.Viewport
        // to do animations:
        // animation='quick'
        // animateOnly={['transform', 'opacity']}
        // enterStyle={{ opacity: 0, y: -10 }}
        // exitStyle={{ opacity: 0, y: 10 }}
        >
          <UISelect.Group>
            {label && <UISelect.Label>{label}</UISelect.Label>}
            {renderItems}
          </UISelect.Group>
          {/* Native gets an extra icon */}
          {/* {native && (
            <YStack position='absolute' justify='center' width={'$4'} pointerEvents='none'>
              <ChevronDown size={getFontSize((props.size as FontSizeTokens) ?? '$true')} />
            </YStack>
          )} */}
        </UISelect.Viewport>

        <UISelect.ScrollDownButton justify='center' position='relative' width='100%' height='$3'>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={['transparent', '$background']}
          />
        </UISelect.ScrollDownButton>
      </UISelect.Content>
    </UISelect>
  );
};