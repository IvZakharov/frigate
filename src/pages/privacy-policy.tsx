import { MainLayout } from "@/layouts/MainLayout";
import { useRecoilState } from "recoil";
import { ToTopButtonState } from "@/atoms/ToTopButtonAtom";
import React from "react";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";

export default function PrivacyPolicyPage() {
  return (
    <MainLayout>
      <PrivacyPolicy />
    </MainLayout>
  );
}
