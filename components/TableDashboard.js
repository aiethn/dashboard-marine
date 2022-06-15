import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import { ShipData, ShipmentData } from "../data/Data";
import { Pagination } from "./Pagination";

export function TableDashboard() {
  const getSub = useSelector((state) => state.pages.sub);
  const [articleNumber, setArticleNumber] = useState(optionsArticleNumber[0]);
  const [paginationNumber, setPaginationNumber] = useState(1);
  const [currentPagination, setCurrentPagination] = useState({
    awal: null,
    akhir: null,
  });
  const [selectedData, setSelectedData] = useState(
    getSub === "ship" ? ShipData : ShipmentData
  );
  const [paginationData, setPaginationData] = useState(null);
  const [totalPagination, setTotalPagination] = useState(null);

  useEffect(() => {
    setSelectedData(getSub === "ship" ? ShipData : ShipmentData);
  }, [getSub]);

  useEffect(() => {
    const totalAvailablePages = Math.ceil(
      selectedData.length / articleNumber.value
    );
    setTotalPagination(totalAvailablePages);
    const newAwal =
      articleNumber.value * paginationNumber - (articleNumber.value - 1);
    const newAkhir = articleNumber.value * paginationNumber;
    const newData = selectedData.slice(newAwal, newAkhir);
    setCurrentPagination({ awal: newAwal, akhir: newAkhir });
    setPaginationData(newData);
    if (paginationNumber > totalAvailablePages) setPaginationNumber(1);
  }, [articleNumber, paginationNumber, selectedData]);

  if (!paginationData) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <div className="flex flex-col px-4">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden px-6">
              <table className="min-w-full text-left">
                <thead className="border-b bg-gray-200">
                  <tr>
                    {Object.keys(selectedData[0]).map((key, idx) => (
                      <th
                        key={idx}
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-6 py-4"
                      >
                        {key.toUpperCase()}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paginationData.map((data, idxData) => (
                    <tr key={idxData} className="bg-white border-b">
                      {Object.keys(data).map((key, idxKey) => (
                        <td
                          key={idxKey}
                          className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        >
                          {paginationData[idxData][key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="my-10 px-4 flex justify-end">
          <div className="flex items-center space-x-4">
            <p>
              {" "}
              {currentPagination.awal}-
              {currentPagination.akhir > selectedData.length
                ? selectedData.length
                : currentPagination.akhir}{" "}
              out of {selectedData.length}
            </p>
            <Pagination
              paginationNumber={paginationNumber}
              totalPagination={totalPagination}
              handlePage={(val) => setPaginationNumber(val)}
            />
            <Select
              isSearchable={false}
              value={articleNumber}
              defaultValue={optionsArticleNumber[0]}
              onChange={(e) => setArticleNumber(e)}
              options={optionsArticleNumber}
              className="mr-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const optionsArticleNumber = [
  { label: "5/Page", value: "5" },
  { label: "10/Page", value: "10" },
  { label: "20/Page", value: "20" },
  { label: "50/Page", value: "50" },
];
