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
    <div className="ml-10 mt-10">
      <div className="max-w-2xl">
        <h2 className="text-lg font-bold mb-4">
          Users who need to generate images
        </h2>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Email</th>
              <th>Email Hash</th>
              <th>Num Exhibits</th>
              <th>GCS URL</th>
            </tr>
          </thead>
          <tbody>
            {userWithoutGeneratedImages.map((user) => (
              <tr key={user.emailHash}>
                <td>{user.email}</td>
                <td>{user.emailHash}</td>
                <td>{user.exhibitNames.length}</td>
                <td>{user.gcsBucketUrl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <div className="max-w-2xl mt-20">
          <h2 className="text-lg font-bold mb-4">
            Users with generated images
          </h2>
          <table className="table-auto">
            <thead>
              <tr>
                <th>Email</th>
                <th>Email Hash</th>
                <th>Num Exhibits</th>
                <th>GCS URL</th>
              </tr>
            </thead>
            <tbody>
              {userWithGeneratedImages.map((user) => (
                <tr key={user.emailHash}>
                  <td>{user.email}</td>
                  <td>{user.emailHash}</td>
                  <td>{user.exhibitNames.length}</td>
                  <td>{user.gcsBucketUrl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
