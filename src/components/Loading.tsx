import { Spinner, View } from "vcc-ui";

const Loading = () => (
  <View
    style={{
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}
  >
    <Spinner size={48} />
  </View>
);

export default Loading;
