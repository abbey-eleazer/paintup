import { useState } from "react";

export const Estimator = () => {
  const items = [];

  const [clientName, setClientName] = useState("");
  const [clientLocation, setClientLocation] = useState("");
  const [clientPhone, setClientPhone] = useState("");

  const [transportation, setTransportation] = useState("");
  const [workmanship, setWorkmanship] = useState("");

  const [materialName, setMaterialName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPriceGhs, setUnitPriceGhs] = useState("");
  return (
    <>
      <div className="w-full h-full flex flex-col gap-4 py-3 px-3 text-sm">
        {/* CLIENT INFO  */}
        <div className="flex flex-col gap-2 border border-slate-300 rounded-2xl p-4 shadow">
          <h3>Client's Details</h3>
          <div>
            <input
              type="text"
              name="clientName"
              placeholder="Client Name"
              className="w-full border border-gray-400 rounded py-1 px-2 flex-1"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              name="Location"
              placeholder="Client Location"
              className="w-full border border-gray-400 rounded py-1 px-2 flex-1"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              name="Phone"
              placeholder="Client Phone"
              className="w-full border border-gray-400 rounded py-1 px-2 flex-1"
            />
          </div>
        </div>

        {/* MATERIAL ITEMS  */}
        <div className="flex flex-col gap-2 border border-slate-300 rounded-2xl py-2 px-3 shadow">
          <label for="materialName">Add Items:</label>
          <input
            type="text"
            name="materialName"
            placeholder="Item Name"
            className="w-full border border-gray-400 rounded py-1 px-2"
          />
          <div className="flex items-center justify-between ">
            <div className=" flex flex-col gap-2">
              <label for="materialQuantity">Material Quantity:</label>
              <input
                type="number"
                name="materialQuantity"
                className="w-full border border-gray-400 rounded py-1 px-2"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label for="unitePrice">Unit Price Ghc:</label>
              <input
                type="text"
                name="unitePrice"
                className="w-full border border-gray-400 rounded py-1 px-2"
              />
            </div>
          </div>

          {/* CALCULATED TOTAL  */}
          <div className="font-bold flex items-center justify-end gap-2 py-2">
            <p>
              Total Ghc:{" "}
              <span className="px-21 py-1  rounded border border-slate-400">
                0
              </span>
            </p>
          </div>

          {/* CTA  */}
          <div className="flex justify-center items-center gap-2">
            <button className="w-full h-10 rounded-2xl font-bold cursor-pointer bg-orange-400">
              Add Item
            </button>
          </div>
        </div>

        {/* WORKMANSHIP / TRANSPORT  */}
        <div>
          <div className="flex items-center justify-between ">
            <div className=" flex flex-col gap-2">
              <label for="transportation">Transportation Ghc:</label>
              <input
                type="text"
                name="transportation"
                className="w-full border border-gray-400 rounded py-1 px-2"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label for="workmanship">Workmanship Ghc:</label>
              <input
                type="nutextmber"
                name="workmanship"
                className="w-full border border-gray-400 rounded py-1 px-2"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-between gap-2 shadow">
            <button className="w-full h-10 rounded-2xl font-bold cursor-pointer bg-orange-400 flex-1">
              Preview
            </button>
          </div>
          <div className="flex flex-1 gap-2">
          <div>Items ( 0 )</div>
        </div>
      </div>
    </>
  );
};
