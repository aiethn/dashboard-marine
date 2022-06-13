import { Login } from "../components/Login";

export default function Home() {
  return (
    <section className="pt-10">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            {/* eslint-disable-next-line */}
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Login Image"
            />
          </div>
          <Login />
        </div>
      </div>
    </section>
  );
}
