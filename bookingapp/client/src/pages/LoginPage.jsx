import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-64">
          <h1 className="text-4xl text-center mb-4">Login</h1>
          <form className="max-w-md mx-auto">
            <input type="email" placeholder="your@email.com"></input>
            <input type="password" placeholder="password"></input>
            <button className="primary">Login</button>
            <div className="text-center py-2 text-gray-500">
              Don&apos;t Have an account yet?
              <Link className="underline text-black p-2" to={"/register"}>
                Register Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;