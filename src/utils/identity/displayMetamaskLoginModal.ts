const metamaskDisabledIconHtml = `<li class="w3a-adapter-item" id="metamask-unavailable">
    <button type="button" class="w3a-button w3a-button--icon" style="opacity: 30%;">
        <img src="https://images.web3auth.io/login-metamask.svg" height="auto" width="auto" alt="login-metamask">
    </button>
    <p class="w3a-adapter-item__label">MetaMask</p>
</li>`;

const metamaskDesktopFooterHtml = `<small>Log in with <a href="https://metamask.io/">MetaMask</a> browser extension</small>`;
const metamaskMobileFooterHtml = `<small>Log in on the <a href="https://metamask.io/">MetaMask</a> app</small>`;

/**
 * Displays a greyed out MetaMask icon on the Web3Auth login modal
 * @param isModalVisible
 */
const displayMetamaskLoginModal = (
  isModalVisible: boolean,
  isMobileUserAgent: boolean,
) => {
  setTimeout(() => {
    const web3AuthModalContent = document.querySelector(
      ".w3a-modal__content.w3ajs-content",
    );

    // Use a mutation observer to detect when "Connect with Wallet"
    // is clicked, since we don't have a callback
    const observer = new MutationObserver(() => {
      const adapterList = document.querySelector(
        ".w3a-adapter-list.w3ajs-wallet-adapters",
      );
      const existingNode = document.getElementById("metamask-unavailable");

      if (adapterList && !existingNode) {
        // eslint-disable-next-line no-prototype-builtins
        if (!window.hasOwnProperty("ethereum")) {
          // MetaMask is not available, display help text
          adapterList.innerHTML += metamaskDisabledIconHtml;
          adapterList?.parentNode?.insertBefore(
            document
              .createRange()
              .createContextualFragment(
                isMobileUserAgent
                  ? metamaskMobileFooterHtml
                  : metamaskDesktopFooterHtml,
              ),
            adapterList.nextSibling,
          );
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
