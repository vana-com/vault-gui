// https://github.com/tw-in-js/use-twind-with/tree/main/packages/next
// import withTwindDocument from '@twind/next/document'
import withTwindDocument from "@twind/next/shim/document";
import twindConfig from "../twind.config";

export default withTwindDocument(twindConfig);
