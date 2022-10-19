import clsx from "clsx";
import type { NextPage } from "next";
import { useState } from "react";
import useMeasure from "react-use-measure";

// import { useInView } from "react-intersection-observer";
import { FooterBadge, TitleAndMetaTags } from "src/components";
import { StorageUpload } from "src/components/Upload";

const GeneratePage: NextPage = () => {
  const [ref, bounds] = useMeasure();
  const screenHeight = bounds.height;
  const [emailAddress, setEmailAddress] = useState<string>("test@vana.com");

  return (
    <>
      <TitleAndMetaTags
        color="black"
        title="The Collective | Vana"
        description="Discover projects you can earn and learn from with your Vana Vault"
      />

      <div
        ref={ref}
        className={clsx("relative min-h-screen bg-white")}
        style={{ height: `${screenHeight}px` }}
      >
        <input
          type="email"
          value={emailAddress}
          placeholder="Email"
          required
          onChange={(event) => {
            setEmailAddress(event.target.value);
          }}
        />

        <StorageUpload minFiles={8} maxFiles={10} userEmail={emailAddress} />

        {/* FOOTER LOGO */}
        <FooterBadge screenHeight={screenHeight} />
      </div>
    </>
  );
};

export default GeneratePage;
