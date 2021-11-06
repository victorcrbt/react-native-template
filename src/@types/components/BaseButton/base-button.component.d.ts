declare namespace BaseButtonComponent {
  type PressableProps = ExternalModules.ReactNative.PressableProps;

  type Props = PressableProps & {
    textColor?: string;
    preventTextCapitalization?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
  };
}
