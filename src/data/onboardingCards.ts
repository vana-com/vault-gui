const DESCRIPTION_OWNERSHIP = `Reclaim your data from applications you’ve been using for years, and bring it home. You own it.

Now you can use your data in ways you didn’t think you could.`;

const DESCRIPTION_SECURITY = `We lock it. Properly. Your Vault is cryptographically secured.

Only you can unlock it. We don’t have access to read your data.`;

const DESCRIPTION_AGENCY = `Share your data where and when you want to, with confidence.

When you do, apps are given only the data you’ve selected. The sharing connection is generated then destroyed on-the-fly.`;

export const onboardingCards = [
  {
    icon: "carbon:cloud-upload",
    kind: "ownership",
    heading: "Add data",
    description: DESCRIPTION_OWNERSHIP,
  },
  {
    icon: "carbon:security",
    kind: "security",
    heading: "It's encrypted and stored securely",
    description: DESCRIPTION_SECURITY,
  },
  {
    icon: "carbon:data-share",
    kind: "agency",
    heading: "Share data",
    description: DESCRIPTION_AGENCY,
  },
];
