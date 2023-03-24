import ThankYou from "@/components/ThankYou/ThankYou";
import { useRecoilState } from "recoil";
import { ToTopButtonState } from "@/atoms/ToTopButtonAtom";
import React from "react";

export default function ThankYouPage() {
  const [_, setToTopState] = useRecoilState(ToTopButtonState);

  React.useEffect(() => {
    setToTopState((prev) => ({
      ...prev,
      isFixed: true,
    }));
  }, []);

  return <ThankYou />;
}
