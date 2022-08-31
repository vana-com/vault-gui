// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { TwCss } from "src/types";

/* WithIcon is a simple utility to set an icone before or after some text */

interface Props {
  children: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  css?: TwCss;
}

const WithIcon = ({ children, prefix, suffix, css }: Props) => (
  <>
    {prefix && <div css={[tw`inline-flex`, css]}>{prefix}</div>}
    {children}
    {suffix && <div css={[tw`inline-flex`, css]}>{suffix}</div>}
  </>
);

export { WithIcon };
