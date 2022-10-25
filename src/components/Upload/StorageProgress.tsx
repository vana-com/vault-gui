interface Props {
  storeProgress: number;
}

const StorageProgress = ({ storeProgress }: Props) => (
  <div className="!w-full text-white bg-black !text-sm !h-[32px] ">
    <span className="transform -translate-y-[0.05em] pl-4 pt-8">
      {storeProgress ?? 0}%
    </span>
  </div>
);

export { StorageProgress };
