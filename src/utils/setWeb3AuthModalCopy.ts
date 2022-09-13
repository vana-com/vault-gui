export const setWeb3AuthModalCopy = (text: string) => {
  // We can't access the web3Auth modal using ref,
  // so we have to use document instead
  const modalText = document.querySelector(
    ".w3a-header__title",
  ) as HTMLElement | null;
  console.log("modalText", modalText);

  if (!modalText) return;
  modalText.innerText = text;
  console.log("modalText", modalText);
};
