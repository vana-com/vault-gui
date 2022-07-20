import { ModuleButton } from "src/components";

/* CURRENTLY UNUSED: in corsali-gui, this was used to configure the data for markup. I htink we can do better */

interface StoreModuleProps {
  id: string;
  name: string;
}

interface StoreModulesProps {
  modules: StoreModuleProps[];
}

const StoreModules = ({ modules }: StoreModulesProps) => (
  <>
    {modules.map((module) => (
      <ModuleButton key={module.id} name={module.name} />
    ))}
  </>
);

export { StoreModules };
