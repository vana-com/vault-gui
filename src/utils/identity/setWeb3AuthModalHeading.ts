/**
 * Updates the title of the Web3Auth modal heading
 * @param text
 */
export const setWeb3AuthModalHeading = (text: string) => {
  // We can't access the web3Auth modal using ref,
  // so we have to use document instead
  setTimeout(() => {
    const web3AuthModalHeader = document.querySelector(
      ".w3a-modal__header .w3a-header__title",
    ) as HTMLElement | null;
    if (web3AuthModalHeader) {
      web3AuthModalHeader.innerText = text;
    }
  }, 300);
};
