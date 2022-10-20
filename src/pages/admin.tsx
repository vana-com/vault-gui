import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";

import config from "src/config";
import { User } from "src/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { password } = context.query;

  if (password !== config.adminPassword) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
};

const AdminPage: NextPage = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`/api/admin/users`);
      if (res.status < 399) {
        const data = await res.json();

        setUsers(data);
      }
    };
    fetchUsers();
  }, []);

  if (!users) {
    return <p>Loading...</p>;
  }

  const userWithoutGeneratedImages = users.filter(
    (user) => user.needToGenerateImages,
  );
  const userWithGeneratedImages = users.filter(
    (user) => !user.needToGenerateImages,
  );

  return (
    <div>
      <p>Users who need to generate images</p>
      {userWithoutGeneratedImages.map((user) => (
        <div key={user.emailHash}>
          <div>{user.email}</div>
          <div>{user.emailHash}</div>
          <div>{user.exhibitNames.length}</div>
          <div>{user.gcsBucketUrl}</div>
          <div>{user.needToGenerateImages}</div>
        </div>
      ))}
      <p>Users who already have generated images</p>
      {userWithGeneratedImages.map((user) => (
        <div key={user.emailHash}>
          <div>{user.email}</div>
          <div>{user.emailHash}</div>
          <div>{user.exhibitNames.length}</div>
          <div>{user.gcsBucketUrl}</div>
          <div>{user.needToGenerateImages}</div>
        </div>
      ))}
    </div>
  );
};

export default AdminPage;
