// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { DeleteVaultPresenter } from "src/components";

interface Props {
  buttonNode: React.ReactNode;
}

const DeleteVault = ({ buttonNode }: Props) => {
  const isDeleting = false;
  const onDelete = () => console.log("delete");

  return (
    <DeleteVaultPresenter
      buttonNode={buttonNode}
      isDeleting={isDeleting}
      onDelete={onDelete}
    />
  );
};

export { DeleteVault };
