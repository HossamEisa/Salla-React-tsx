// type LoginType = {
//   handleLoginSubmit: (event: React.FormEvent<HTMLElement>) => void
// }
function Login() {
  const handleLoginSubmit = (event: any)  => {
    event.preventDefault();
    console.log(event);
    
  }
  return (
    <>
      <div className="container">
        <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl sm:max-w-[700px] mx-auto">
          {/* <div className="flex flex-col text-center items-center justify-center mb-6">
        <h2 className="text-xl font-bold mt-4">مرحبا حسام</h2>
        <span className="text-lg text-gray-500 mt-5">يمكنك الآن متابعة التسوق</span>
      </div> */}

          {/* <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        v-if="!open"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div
            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <div
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="w-full flex items-center justify-center">
                  <div
                    className="h-12 w-12 flex items-center justify-center rounded-full bg-green-200 sm:mx-0 sm:h-10 sm:w-10"
                  >
                    <svg
                      className="h-6 w-6 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-3 text-center sm:mt-6">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >تم تسجيل الدخول بنجاح</h3>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 mt-5">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-800 sm:ms-3 sm:w-auto"
                >الذهاب للرئيسية</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
        </div>

        <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl sm:max-w-[700px] mx-auto">
          <div className="flex flex-col text-center items-center justify-center mb-6">
            <h2 className="text-lg">تسجيل الدخول</h2>
            <span className="text-xs text-gray-500">قم بتسجيل الدخول لمتابعة التسوق</span>
          </div>
          <form onSubmit={handleLoginSubmit} className="flex flex-col w-full">
            <div className="mb-4">
              <label className="block mb-2 text-md" htmlFor="username">اسم المستخدم</label>
              <input
                type="text"
                name="username"
                id="username"
                className="w-full p-2 bg-white appearance-none rounded-md border text-md focus-visible:outline-none focus-within:border-primary transition-colors"
                placeholder="اسم المستخدم.."
                v-model="v$.firstName.$model"
              />
              <p className="text-red-600 mt-1" v-if="v$.firstName.$error">{ }</p>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-md" htmlFor="password">كلمة المرور</label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full p-2 bg-white appearance-none rounded-md border text-md focus-visible:outline-none focus-within:border-primary transition-colors"
                placeholder="كلمة المرور.."
                v-model="password"
              />
              <p className="text-red-600 mt-1" v-if="v$.password.$error">{ }</p>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="w-full bg-primary text-white hover:bg-sky-800 transition-colors flex-1 p-2 text-md rounded-md"
              >دخول</button>
              <button
                type="button"
                className="w-fit text-primary underline p-2 text-md rounded-md hover:text-sky-800 hover:scale-105 transition-all"
              >نسيت كلمة المرور</button>
            </div>
          </form>

          {/* <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div
            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <div
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="w-full flex items-center justify-center">
                  <div
                    className="h-12 w-12 flex items-center justify-center rounded-full bg-green-200 sm:mx-0 sm:h-10 sm:w-10"
                  >
                    <svg
                      className="h-6 w-6 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-3 text-center sm:mt-6">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >تم تسجيل الدخول بنجاح</h3>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 mt-5">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-800 sm:ms-3 sm:w-auto"
                >الذهاب للرئيسية</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
          <p className="text-red-600 mt-2" v-if="isLogError"></p>
        </div>
      </div>
    </>
  )
}

export default Login