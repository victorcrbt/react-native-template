declare namespace BaseInputComponent {
  type TextInputProps = ExternalModules.ReactNative.TextInputProps;
  type StyleProp<T> = ExternalModules.ReactNative.StyleProp<T>;
  type ViewStyle = ExternalModules.ReactNative.ViewStyle;
  type TextStyle = ExternalModules.ReactNative.TextStyle;

  type Props = TextInputProps & {
    label?: string;
    errorMessage?: string | null;
    preventLabelCapitalization?: boolean;
    containerStyles?: StyleProp<ViewStyle>;
    labelStyles?: StyleProp<TextStyle>;
  };
}
