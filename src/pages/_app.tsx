import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <NextNProgress
        color="#024E5B"
        height={0}
        showOnShallow={false}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
