export const amendState = (
  state: any,
  setState: (newValue: any) => void,
  key: string,
  value: any
) => {
  setState({ ...state, [key]: value });
};
