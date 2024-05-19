import { useReducer, ChangeEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<State>();

  type State = {
    username: string;
    password: string;
  };


  type Action =
    | { type: "input"; field: string; value: string }
    | { type: "reset" };

  let initialState: State = {
    username: "",
    password: "",
  };

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "input":
        return { ...state, [action.field]: action.value };
      case "reset":
        return initialState = {
          username: "",
          password: "",
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "input",
      field: e.target.name,
      value: e.target.value,
    });
  };
  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const handleLoginSubmit: SubmitHandler<State> = (data) => {
    console.log(state); // Logs the current state from useReducer
    console.log(data); // Logs the form data from react-hook-form
  };
  return (
    <>
      <div className="container">
        <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl sm:max-w-[700px] mx-auto">
          <div className="flex flex-col text-center items-center justify-center mb-6">
            <h2 className="text-lg">تسجيل الدخول</h2>
            <span className="text-xs text-gray-500">
              قم بتسجيل الدخول لمتابعة التسوق
            </span>
          </div>
          <form
            onSubmit={handleSubmit(handleLoginSubmit)}
            className="flex flex-col w-full"
          >
            <div className="mb-4">
              <label className="block mb-2 text-md" htmlFor="username">
                اسم المستخدم
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-2 bg-white appearance-none rounded-md border text-md focus-visible:outline-none focus-within:border-primary transition-colors"
                placeholder="اسم المستخدم.."
                value={state.username}
                {...register("username", {
                  required: true,
                  maxLength: 10,
                  onChange: (e) => {
                    // Call the internal onChange handler from react-hook-form
                    handleChange(e);
                    // Perform any additional logic you need
                  },
                })}
              />
              {errors.username && (
                <p className="text-red-600 mt-1">This field is required</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-md" htmlFor="password">
                كلمة المرور
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 bg-white appearance-none rounded-md border text-md focus-visible:outline-none focus-within:border-primary transition-colors"
                placeholder="كلمة المرور.."
                value={state.password}
                {...register("password", {
                  required: true,
                  maxLength: 10,
                  onChange: (e) => {
                    // Call the internal onChange handler from react-hook-form
                    handleChange(e);
                    // Perform any additional logic you need
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-600 mt-1">This field is required</p>
              )}
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="w-full bg-primary text-white hover:bg-sky-800 transition-colors flex-1 p-2 text-md rounded-md"
              >
                دخول
              </button>
              <button
                type="button"
                className="w-fit text-primary underline p-2 text-md rounded-md hover:text-sky-800 hover:scale-105 transition-all"
              >
                نسيت كلمة المرور
              </button>

              <button
                type="button"
                className="w-fit text-primary underline p-2 text-md rounded-md hover:text-sky-800 hover:scale-105 transition-all"
                onClick={() => {
                  handleReset();
                }}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
