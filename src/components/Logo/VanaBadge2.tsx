import { VanaLogotype } from "src/components";

const VanaBadge2 = () => (
  <div className="flex flex-col justify-center gap-2.5 text-stone-500">
    {/* <hr className="border-[1px] border-stone-300" /> */}
    <div className="flex">
      <div className="w-[115px]">
        <VanaLogotype />
      </div>
    </div>
    <div className="text-[11px] tracking-[0.11em] leading-none uppercase font-bold">
      Make data move
    </div>
  </div>
);

export { VanaBadge2 };
