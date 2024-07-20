"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  useEffect(() => {
    if (localStorage["logged_in"]) {
      router.push("/dashboard");
    }
  }, []);

  const checkData = async () => {
    let call = await fetch(
      `${process.env.NEXT_PUBLIC_backend_url}/auth/register`,
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          name: name,
        }),
      }
    ).then((resp) => resp.json());
    if (call.data) {
      localStorage.setItem("data", JSON.stringify(call.data));
      router.push("/dashboard");
    } else {
      alert(`Error due to ${call.error}`);
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
      <div className="relative">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row h-screen">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Join the Eco-Revolution
                <br className="hidden md:block" />
                Walk and Talk <span className="text-theme-primary">Sustainable</span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                We Welcome You To Sustainable Miles which helps you not only to
                reach your destination but Also Contribute to this mother earth
              </p>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Sign up to become Eco-Ling
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    {isError ? (
                      <h2 className="text-red-600">Something bad happended!</h2>
                    ) : null}
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium">
                      Full Name
                    </label>
                    <input
                      placeholder="John"
                      required
                      onChange={(evt) => {
                        setName(evt.target.value);
                      }}
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-theme-primary focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                    />
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium">
                      E-mail
                    </label>
                    <input
                      placeholder="john.doe@example.org"
                      required
                      type="email"
                      minLength={5}
                      onChange={(evt) => {
                        setEmail(evt.target.value);
                      }}
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-theme-primary focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="password"
                      className="inline-block mb-1 font-medium">
                      Password
                    </label>
                    <input
                      placeholder="********"
                      required
                      type="password"
                      onChange={(evt) => {
                        setPassword(evt.target.value);
                      }}
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-theme-primary focus:outline-none focus:shadow-outline"
                      id="email"
                      minLength={8}
                      name="email"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-theme-primary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      onClick={(evt) => {
                        evt.preventDefault();
                        if (email && password && name) {
                          checkData();
                        } else {
                          setError(true);
                        }
                      }}>
                      Register
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    We respect your privacy.
                  </p>
                 <p>
                 Already have an account? {" "}
                  <a href="/login" className="text-theme-primary hover:text-gray-900 underline">
                    Login In
                  </a>
                 </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
