// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

/* WithIcon is a simple utility to set an icone before or after some text */

interface Props {
  children?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const WithIcon = ({ children, prefix, suffix }: Props) => (
  <>
    {prefix && <div tw="inline-flex">{prefix}</div>}
    {children}
    {suffix && <div tw="inline-flex">{suffix}</div>}
  </>
);

export { WithIcon };
