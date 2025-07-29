import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import React from "react";
import { Adapt, FontSizeTokens, getFontSize, Select, SelectProps, Sheet, YStack } from "tamagui";

export function SelectDemoItem(props: SelectProps) {
	return (
		<Select value={''} disablePreventBodyScroll {...props}>
			<Select.Trigger iconAfter={ChevronDown}>
				<Select.Value fontWeight={'bold'} placeholder="Something" />
			</Select.Trigger>
			{/* <Adapt when="sm" platform="touch"> */}
			<Adapt platform="touch" when="maxSm">
				<Sheet
					native={!!props.native}
					modal
					dismissOnSnapToBottom
					animationConfig={{
						type: 'timing',
						duration: 100,
					}}>
					<Sheet.Frame>
						<Sheet.ScrollView>
							<Adapt.Contents />
						</Sheet.ScrollView>
					</Sheet.Frame>
					<Sheet.Overlay />
				</Sheet>
			</Adapt>
			<Select.Content zIndex={200000}>
				<Select.ScrollUpButton
					alignItems="center"
					justifyContent="center"
					position="relative"
					width="100%"
					height="$3">
					<YStack zIndex={10}>
						<ChevronUp size={20} />
					</YStack>
				</Select.ScrollUpButton>

				<Select.Viewport
					// to do animations:
					// animation="quick"
					// animateOnly={['transform', 'opacity']}
					// enterStyle={{ o: 0, y: -10 }}
					// exitStyle={{ o: 0, y: 10 }}
					minWidth={200}>
					<Select.Group>
						<Select.Label>Fruits</Select.Label>
						{/* for longer lists memoizing these is useful */}
						{React.useMemo(
							() =>
								[{name: 'test'}].map((item, i) => {
									return (
										<Select.Item
											index={i}
											key={item.name}
											value={item.name.toLowerCase()}>
											<Select.ItemText>
												{item.name}
											</Select.ItemText>
											<Select.ItemIndicator marginLeft="auto">
												<Check size={16} />
											</Select.ItemIndicator>
										</Select.Item>
									);
								}),
							[],
						)}
					</Select.Group>
					{/* Native gets an extra icon */}
					{props.native && (
						<YStack
							position="absolute"
							right={0}
							top={0}
							bottom={0}
							alignItems="center"
							justifyContent="center"
							width={'$4'}
							pointerEvents="none">
							<ChevronDown
								size={getFontSize(
									(props.size as FontSizeTokens) ?? '$true',
								)}
							/>
						</YStack>
					)}
				</Select.Viewport>

				<Select.ScrollDownButton
					alignItems="center"
					justifyContent="center"
					position="relative"
					width="100%"
					height="$3">
					<YStack zIndex={10}>
						<ChevronDown size={20} />
					</YStack>
				</Select.ScrollDownButton>
			</Select.Content>
		</Select>
	);
}