const LoginPage = () => {
  return (
    <>
      <div className="mt-4 ">
        <h1 className="text-4xl text-center">login</h1>
        <form className="max-w-md mx-auto">
          <input type="email" placeholder="your@email.com"></input>
          <input type="password" placeholder="password"></input>
          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
