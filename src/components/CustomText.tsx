import { Text, StyleProp, TextStyle } from "react-native";

type TextProps = {
  readonly children?: Object;
  as: 'h1' | 'h2' | 'p' | 'span';
  color?: string;
  style?: StyleProp<TextStyle>;
}

const CustomText = ({ children, as, color, style }: TextProps) => {
  const styles = {
    h1: {
      fontSize: 32,
      marginBottom: 4,
      color: color || '#fff',
    } as StyleProp<TextStyle>,
    h2: {
      fontSize: 29,
      marginBottom: 4,
      color: color || '#fff',
    } as StyleProp<TextStyle>,
    p: {
      fontSize: 17,
      marginTop: 6,
      marginBottom: 4,
      color: color || '#fff',
    } as StyleProp<TextStyle>,
    span: {
      fontSize: 15,
      color: color || '#fff',
    } as StyleProp<TextStyle>
  };
  return(
    <>
      <Text style={[styles[as], style]}>{children}</Text>
    </>
  );
}

export default CustomText;
