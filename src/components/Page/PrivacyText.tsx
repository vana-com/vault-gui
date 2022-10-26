import clsx from "clsx";

import config from "src/config";

const PrivacyText = ({
  className = "text-sm text-stone-400",
}: {
  className?: string;
}) => (
  <p className={clsx("link-block", className)}>
    At Vana we believe in the user-owned internet. We create experience that
    allow you to understand and own your data and the things that are built with
    it. We will never share your data or ML models with anyone without your
    express consent. For more info, feel free to reach out at{" "}
    <a
      href={`mailto:${config.vanaSupportEmail}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {config.vanaSupportEmail}
    </a>{" "}
    or review our{" "}
    <a href={config.vanaPrivacyURL} target="_blank" rel="noopener noreferrer">
      privacy policy
    </a>
    .
  </p>
);

export { PrivacyText };
