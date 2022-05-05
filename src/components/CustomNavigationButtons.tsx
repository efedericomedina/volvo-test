import Image from "next/image";
import { Click, View } from "vcc-ui";

type CustomNavigationButtonsProps = {
  next: () => void;
  previous: () => void;
};
//represents unit in pixels
const ICON_SIZE = 40;

const CustomNavigationButtons = ({
  next,
  previous,
}: CustomNavigationButtonsProps) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "flex-end",
      height: "2.5rem",
    }}
    spacing={2}
  >
    <Click
      style={{ transform: "rotate(180deg)" }}
      onClick={() => {
        previous();
      }}
    >
      <Image
        src="/icons/chevron-circled.svg"
        alt="Prev"
        width={ICON_SIZE}
        height={ICON_SIZE}
      />
    </Click>
    <Click
      onClick={() => {
        next();
      }}
    >
      <Image
        src="/icons/chevron-circled.svg"
        alt="Next"
        width={ICON_SIZE}
        height={ICON_SIZE}
      />
    </Click>
  </View>
);

export default CustomNavigationButtons;
