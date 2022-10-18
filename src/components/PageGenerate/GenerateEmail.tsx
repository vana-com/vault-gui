import clsx from "clsx";
import { useState } from "react";

interface Props {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleSubmit: () => void;
  formSent?: boolean;
}

const GenerateEmailForm = ({
  inputValue,
  setInputValue,
  handleSubmit,
  formSent,
}: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isValid, setIsValid] = useState(false);

  function validateEmail(email: string) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  // Add event type? This doesn't work w/ our linting: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
  const handleOnSubmit = (event: any): void => {
    event.preventDefault();
    setIsClicked(true);
    handleSubmit();
  };

  return (
    <form className="flex flex-col gap-3 pt-1" onSubmit={handleOnSubmit}>
      <div className="flex overflow-hidden bg-white border rounded-md border-stone-300">
        <input
          type="email"
          value={inputValue}
          placeholder="Add email"
          required
          onChange={(event) => {
            setInputValue(event.target.value);
            setIsValid(validateEmail(inputValue));
            // console.log("validateEmail", validateEmail(inputValue));
          }}
          className={clsx(
            "w-full px-4 h-[40px] text-sm inline-flex  shadow-sm  placeholder-stone-400",
            // disabled
            "disabled:bg-stone-50 disabled:text-stone-500 disabled:border-stone-200 disabled:shadow-none",
            // focus
            "focus:outline-none focus:border-blueCrayola-500 focus:ring-1 focus:ring-blueCrayola-500",
            // invalid …invalid:border-rose-500
            "focus:invalid:text-rose-600 focus:invalid:border-rose-500 focus:invalid:ring-rose-500",
          )}
        />
        <button
          type="submit"
          disabled={!isValid}
          className="px-3 text-sm border border-white rounded-sm Button"
        >
          {formSent ? (
            <span>Thanks!</span>
          ) : (
            <span>{isClicked ? "Sending…" : "Submit"}</span>
          )}
          {/* <Icon icon="carbon:email" /> */}
        </button>
      </div>
    </form>
  );
};

export { GenerateEmailForm };
