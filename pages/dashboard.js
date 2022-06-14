import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuDashboard } from "../components/MenuDashboard";
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
    <div className="h-screen flex">
      <div className="sm:w-1/12 h-full border-box pt-24">
        <MenuDashboard />
      </div>
      <div className="sm:w-11/12 pt-24">
        <div className="h-full bg-gray-200"></div>
      </div>
    </div>
  );
}
