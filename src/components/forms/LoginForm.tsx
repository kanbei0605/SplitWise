const LoginForm = () => {
  return (
    <div className="lg:w-1/2 xl:w-1/2 px-4 md:px-16 shadow-lg">
      <div className="text-3xl font-mont mb-4">Log in</div>
      <form action="/authentication" accept-charset="UTF-8" method="post">
        <label>Email address</label>
        <div className="mb-4 w-full">
          <input
            type="email"
            className="w-full"
            name="credentials[identity]"
            id="credentials_identity"
          />
        </div>
        <label>Password</label>
        <div className="mb-4 w-full">
          <input
            type="password"
            className="w-full"
            name="credentials[password]"
            id="credentials_password"
          />
        </div>
        <div>
          <input
            value="c30d1295-c431-42b2-9822-5c7caa6c1660"
            type="hidden"
            name="sequence[token]"
            id="sequence_token"
          />
        </div>
        <div className="py-4">
          <input
            type="submit"
            name="commit"
            value="Log in"
            // className="bg-teal-600 rounded border-gray-400 text-white px-4 py-2 text-center w-full cursor-pointer"
            className="w-full cursor-pointer text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            data-disable-with="Log in"
          />
        </div>
      </form>
      <a
        className="block text-center font-mont font-semibold text-teal-500 py-2"
        href="/password_reset"
      >
        Forgot your password?
      </a>
      <div className="mt-6 text-grey-lightest flex font-semibold text-center items-center justify-center">
        <div className="h-px w-10 bg-gray-300 border-none"></div>
        <div className="text-gray-300 px-2">or</div>
        <div className="h-px w-10 bg-gray-300 border-none"></div>
        <hr />
      </div>
      <div className="pt-4 pb-6">
        <a
          className="block font-semibold rounded bg-white border border-grey-lightest shadow px-4 py-2 text-center"
          data-method="post"
        >
          <img
            className="inline-block mr-2 h-6 w-6"
            src="https://assets.splitwise.com/assets/fat_rabbit/signup/google-2017-a5b76a1c1eebd99689b571954b1ed40e13338b8a08d6649ffc5ca2ea1bfcb953.png"
          />
          Sign in with Google
        </a>
      </div>
    </div>
  );
};

export default LoginForm;