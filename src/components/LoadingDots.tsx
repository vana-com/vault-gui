/* 
  Requires a `.relative.flex` parent.
  Uses the `.loading` class from `src/styles/globals.css`
*/

interface Props {
  children?: string;
}

const LoadingDots = ({ children }: Props) => (
  <>
    {children}
    <div className="absolute top-0 -right-[0.875em]">
      <div className="loading w-[0.78125em]" />
    </div>
  </>
);

export { LoadingDots };
