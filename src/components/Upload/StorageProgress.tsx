interface Props {
  storeProgress: number;
}

const StorageProgress = ({ storeProgress }: Props) => (
  <div className="!w-full text-white bg-black !text-sm !h-[32px] flex items-center justify-center">
    <span className="transform -translate-y-[0.05em] pl-4">
      {storeProgress ?? 0}%
    </span>
  </div>
);

export { StorageProgress };
