import {
  useNavigation as useReactNavigation,
  ParamListBase,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export function useStackNavigation<T extends ParamListBase>() {
  const navigation = useReactNavigation<StackNavigationProp<T>>();

  return navigation;
}
