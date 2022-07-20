interface CreatedAtObj {
  createdAt: string;
}

const sortByCreatedAt = (
  { createdAt: createdAtA }: CreatedAtObj,
  { createdAt: createdAtB }: CreatedAtObj,
): number => (createdAtA < createdAtB ? -1 : createdAtA > createdAtB ? 1 : 0);

export { sortByCreatedAt };
