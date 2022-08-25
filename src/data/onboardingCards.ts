const DESCRIPTION_OWNERSHIP = `Reclaim your data from the apps you’ve been using for years, and bring it home. You own it.`;

const DESCRIPTION_SECURITY = `When you add data to your Vault, it's encrypted. This locks it, and only you can unlock it. We cannot read your data.`;

const DESCRIPTION_AGENCY = `Share your data where and how you want to. Pick and choose. It's all up to you.`;

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
