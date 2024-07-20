"use client";
import { useState, useEffect } from "react";
export default function LeaderBoard() {
  const [data, setData] = useState([]);
  const [lead, setLead] = useState("");
  useEffect(() => {
    fetch("/api/leaderboard")
      .then((data) => data.json())
      .then((datas) => {
        console.log(datas);
        const le = datas.map((single) => {
          <tr>
            <td className="p-2 whitespace-nowrap">
              <div className="flex items-center">
                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                  <img
                    className="rounded-full"
                    src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                    width="40"
                    height="40"
                    alt="Alex Shatov"
                  />
                </div>
                <div className="font-medium text-gray-800">{single.name}</div>
              </div>
            </td>
            <td className="p-2 whitespace-nowrap">
              <div className="text-left">{single.email}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
              <div className="text-left font-medium text-green-500">
                {single.points}
              </div>
            </td>
          </tr>;
        });

        setData(le);
      });
  }, []);

  return (
    <section className="antialiased mt-20 text-gray-600 px-4">
      <div className="flex flex-col justify-center ">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Customers</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Email</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Spent</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {data}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
