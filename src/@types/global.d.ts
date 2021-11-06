import {
  PressableProps,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  ViewProps,
  ColorValue,
} from 'react-native';

declare global {
  namespace ExternalModules {
    namespace ReactNative {
      export type {
        PressableProps,
        TextInputProps,
        StyleProp,
        ViewStyle,
        TextStyle,
        ViewProps,
        ColorValue,
      };
    }
  }
}
