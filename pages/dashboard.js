import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const getRole = useSelector((state) => state.user.role);
  const router = useRouter();
  useEffect(() => {
    if (getRole !== "admin") router.push("/");
  }, []);
  return (
    <div className="pt-10">
      <div>INI DASHBOARD</div>
    </div>
  );
}
