import Button from "../../Button";

const SignIn = () => {
  return   <div className="mx-4 ">
  <div>

  </div>
  <form className="space-y-4 md:space-y-6" action="#">
    <div>
      <label
        htmlFor="email"
        className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
      >
        Your email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="name@company.com"
        required
      />
    </div>
    <div>
      <label
        htmlFor="password"
        className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
      >
        Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
   
   
   <Button text="SignIn" theme="filled"></Button>
  
  </form>
</div>;
};

export default SignIn;
