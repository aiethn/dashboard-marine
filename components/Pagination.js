export function Pagination({ paginationNumber, handlePage, totalPagination }) {
  return (
    <div className="flex justify-center items-center text-center">
      <div
        className="px-3 py-1 sm:px-4 mx-1 cursor-pointer hover:bg-indigo-400"
        onClick={(e) =>
          paginationNumber !== 1 && handlePage(paginationNumber - 1)
        }
      >
        &lt;
      </div>
      {[...Array(totalPagination)].map((item, idx) => (
        <div
          key={idx}
          onClick={(e) => handlePage(idx + 1)}
          className={`px-3 py-1 sm:px-4 mx-1 rounded-full cursor-pointer ${
            paginationNumber === idx + 1 ? "bg-cyan-200" : "hover:bg-indigo-400"
          }`}
        >
          {idx + 1}
        </div>
      ))}
      <div
        className="px-3 py-1 sm:px-4 mx-1 cursor-pointer hover:bg-indigo-400"
        onClick={(e) =>
          paginationNumber !== totalPagination &&
          handlePage(paginationNumber + 1)
        }
      >
        &gt;
      </div>
    </div>
  );
}
