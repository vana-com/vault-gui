interface Props {
  storeProgress: number;
}

const StorageProgress = ({ storeProgress }: Props) => (
  <div>{storeProgress}%</div>
);

export { StorageProgress };
