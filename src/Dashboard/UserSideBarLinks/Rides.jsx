import React, { useState } from "react";
import { VscSettings } from "react-icons/vsc";

const Rides = () => {
  const [tableItems, setTableItems] = useState([
    {
      id: "01",
      CarNo: "6465",
      CarModel: "Porsche 911 Turbo S",
      Status: "Active",
      Earning: "$35.44",
    },
    {
      id: "02",
      CarNo: "7890",
      CarModel: "McLaren 720S",
      Status: "Pending",
      Earning: "$22.10",
    },
    { id: "03", CarNo: "1234", CarModel: "Audi R8 V10 Plus", Earning: "$50.00" },
  ]);

  const handleStatusChange = (index, newStatus) => {
    const updatedItems = [...tableItems];
    updatedItems[index].Status = newStatus;
    setTableItems(updatedItems);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col justify-center items-center mx-auto w-full md:w-[80%] my-10 bg-white shadow-md p-5 rounded-lg">
        <div className="flex justify-between w-full py-4">
          <h1 className="font-semibold text-xl">My Rides</h1>
          <h1 className="flex gap-1 items-center text-lg cursor-pointer">
            <span>
              <VscSettings />
            </span>
            Filter
          </h1>
        </div>
        
        <div className="overflow-x-auto w-full">
          <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
            <thead>
              <tr className="bg-gray-100">
                <th className="border-gray-300 p-3 text-left">No.</th>
                <th className="border-gray-300 p-3 text-left">Car No.</th>
                <th className="border-gray-300 p-3 text-left">Car Model</th>
                <th className="border-gray-300 p-3 text-left">Status</th>
                <th className="border-gray-300 p-3 text-left">Earning</th>
                <th className="border-gray-300 p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableItems.map((item, index) => (
                <tr
                  key={index}
                  className="even:bg-gray-50 hover:bg-gray-200 transition border-b"
                >
                  <td className="border-gray-300 p-3">{item.id}</td>
                  <td className="border-gray-300 p-3">{item.CarNo}</td>
                  <td className="border-gray-300 p-3">{item.CarModel}</td>
                  <td className="border-gray-300 p-3 flex flex-col sm:flex-row gap-2">
                    <label className="flex items-center gap-1">
                      <input
                        type="radio"
                        name={`status-${index}`}
                        checked={item.Status === "Active"}
                        onChange={() => handleStatusChange(index, "Active")}
                        className="accent-green-500"
                      />
                      Active
                    </label>
                    <label className="flex items-center gap-1">
                      <input
                        type="radio"
                        name={`status-${index}`}
                        checked={item.Status === "Pending"}
                        onChange={() => handleStatusChange(index, "Pending")}
                        className="accent-red-500"
                      />
                      Pending
                    </label>
                  </td>
                  <td className="border-gray-300 p-3">{item.Earning}</td>
                  <td className="border-gray-300 p-3">
                    <button className="text-xs bg-[#006aff] text-white py-2 px-3 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Rides;
