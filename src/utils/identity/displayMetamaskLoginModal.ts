const metamaskDisabledHtml = `<li class="w3a-adapter-item" id="metamask-unavailable">
    <button type="button" class="w3a-button w3a-button--icon" style="opacity: 30%;">
        <img src="https://images.web3auth.io/login-metamask.svg" height="auto" width="auto" alt="login-metamask">
    </button>
    <p class="w3a-adapter-item__label">MetaMask*</p>
</li>`;

const displayMetamaskLoginModal = (isModalVisible: boolean) => {
  setTimeout(() => {
    const web3AuthModalContent = document.querySelector(
      ".w3a-modal__content.w3ajs-content",
    );

    const observer = new MutationObserver(() => {
      const adapterList = document.querySelector(
        ".w3a-adapter-list.w3ajs-wallet-adapters",
      );
      if (adapterList) {
        // eslint-disable-next-line no-prototype-builtins
        if (!window.hasOwnProperty("ethereum")) {
          adapterList.innerHTML += metamaskDisabledHtml;
        }
      }
    });

    if (isModalVisible && web3AuthModalContent) {
      observer.observe(web3AuthModalContent, {
        childList: true,
        subtree: true,
      });
    } else {
      observer.disconnect();
    }
  }, 500);
};
export { displayMetamaskLoginModal };
