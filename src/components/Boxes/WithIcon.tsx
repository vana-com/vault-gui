// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

/* WithIcon is a simple utility to set an icone before or after some text */

interface Props {
  children: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const WithIcon = ({ children, prefix, suffix }: Props) => (
  <>
    {prefix && (
      <div tw="inline-flex transform -translate-y-[0.5px]">{prefix}</div>
    )}
    {children}
    {suffix && (
      <div tw="inline-flex transform -translate-y-[0.5px]">{suffix}</div>
    )}
  </>
);

export { WithIcon };
