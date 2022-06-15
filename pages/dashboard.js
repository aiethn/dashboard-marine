import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuDashboard } from "../components/MenuDashboard";
import { SearchBar } from "../components/Searchbar";
import { TableDashboard } from "../components/TableDashboard";
import { changePrimePage } from "../features/Pages";

export default function Dashboard() {
  const dispatch = useDispatch();
  const getRole = useSelector((state) => state.user.role);
  const router = useRouter();
  useEffect(() => {
    dispatch(changePrimePage("dashboard"));
    if (getRole !== "admin") router.push("/");
  }, []);

  return (
    <div className="min-h-screen flex">
      <div className="sm:w-1/12 min-h-full border-box pt-24">
        <MenuDashboard />
      </div>
      <div className="sm:w-11/12 pt-24">
        <div className="min-h-full bg-gray-200">
          <div className="pt-2">
            <div className="m-10 p-8 bg-white">
              <SearchBar />
            </div>
            <div className="m-10 pt-4 bg-white">
              <TableDashboard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
