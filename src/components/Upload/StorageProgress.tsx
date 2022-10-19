interface Props {
  storeProgress: number;
}

const StorageProgress = ({ storeProgress }: Props) => (
  <div>{storeProgress ?? 0}%</div>
);

export { StorageProgress };
