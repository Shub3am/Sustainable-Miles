import React from "react";

const Leaderboard = () => {
  fetch("/api/leaderboard")
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <div className="bg-white shadow-md rounded my-6">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200">Name</th>
            <th className="py-2 px-4 bg-gray-200">Email</th>
            <th className="py-2 px-4 bg-gray-200">TimeSpent</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Leaderboard;
