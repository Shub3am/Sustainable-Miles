"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  useEffect(() => {
    if (localStorage["data"]) {
      router.push("/dashboard");
    }
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const checkData = async () => {
    let call = await fetch(`${process.env.NEXT_PUBLIC_backend_url}/auth`, {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
    }).then((res) => res.json());
    if (call.data) {
      localStorage.setItem("data", JSON.stringify(call));
      router.push("/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <div className="relative">
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src={"/RenewableEnergy.mp4"}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative capitalize">
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
            <div className="flex flex-col items-center justify-between xl:flex-row h-screen">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Join the Eco-Revolution
                  <br className="hidden md:block" />
                  Walk and Talk{" "}
                  <span className="text-theme-primary">Sustainable</span>
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                  We Welcome You To Sustainable Miles which helps you not only
                  to reach your destination but Also Contribute to this mother
                  earth
                </p>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Welcome Fellow Earth-Ling
                  </h3>
                  <form>
                    <div className="mb-1 sm:mb-2">
                      {isError ? (
                        <h2 className="text-red-600">
                          Required Information Missing
                        </h2>
                      ) : null}
                      <label
                        htmlFor="firstName"
                        className="inline-block mb-1 font-medium">
                        Email
                      </label>
                      <input
                        placeholder="John"
                        required
                        type="text"
                        onChange={(evt) => {
                          setEmail(evt.target.value);
                        }}
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="firstName"
                        name="firstName"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="lastName"
                        className="inline-block mb-1 font-medium">
                        Password
                      </label>
                      <input
                        placeholder="******"
                        required
                        type="password"
                        onChange={(evt) => {
                          setPassword(evt.target.value);
                        }}
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="lastName"
                        name="lastName"
                      />
                    </div>

                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        onClick={(evt) => {
                          evt.preventDefault();
                          if (email && password) {
                            checkData();
                          } else {
                            setError(true);
                          }
                        }}
                        className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Login
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 sm:text-sm">
                      Thank You for saving Earth!
                    </p>
                    <p>
                      Don't have an account?{" "}
                      <a
                        href="/register"
                        className="text-theme-primary hover:text-gray-900 underline">
                        Register
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
