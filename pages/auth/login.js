/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import style from "@/styles/pages/loginStyle.module.scss";
import Link from "next/link";
import axios from "axios";
import { setCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";

export default function RegSeller() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  // React.useEffect(() => {
  //   console.log(getCookie("profile"));
  // }, []);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      const connect = await axios.post("/api/login", {
        email,
        password,
      });

      setIsLoading(false);
      setError(null);

      setCookie("token", connect?.data?.data?.accessToken);
      setCookie("profile", JSON.stringify(connect?.data?.data));
      localStorage.setItem("token", connect?.data?.data?.accessToken);
      localStorage.setItem("profile", JSON.stringify(connect?.data?.data));

      router.push("/");
    } catch (error) {
      console.log(error?.response?.data?.message?.message);
      // error?.response?.data?.message?.message
      if (error?.response?.data?.message?.email?.message) {
        setError(
          error?.response?.data?.message?.email?.message ??
            "Something wrong in our server"
        );
      } else if (error?.response?.data?.message?.password?.message) {
        setError(
          error?.response?.data?.message?.password?.message ??
            "Something wrong in our server"
        );
      } else if (error?.response?.data?.message?.message) {
        setError(
          error?.response?.data?.message?.message ??
            "Something wrong in our server"
        );
      } else {
        ("Something wrong in our server");
      }
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Login | Blanja</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.main}>
        <section className={`container-fluid ${style.register}`}>
          <div className="container">
            <div className={`row`}>
              <div className={`col-12 ${style.col}`}>
                {/* ICON */}
                <div className={`${style.icon}`}>
                  <img src="/images/icon-app.webp" alt="icon-app" />
                </div>
                <div className={`${style.order}`}>
                  <h5>Please login with your account</h5>
                </div>
                {/* ALERT ERROR HANDLING */}
                <div className={style.errorHandling}>
                  <div className={`alert-error ${style.error}`}>
                    {error ? (
                      <div
                        class="alert alert-danger text-center mb-3"
                        role="alert"
                        style={{
                          fontSize: "14px",
                          border: "0",
                          borderRadius: "15px",
                          marginBottom: "-15px",
                        }}>
                        {error}
                      </div>
                    ) : null}
                  </div>
                </div>
                {/* ALERT SUCCESS HANDLING */}
                <div className={style.errorHandling}>
                  <div className={`alert-error ${style.error}`}>
                    {!error && getCookie("token") && getCookie("profile") ? (
                      <div
                        class="alert alert-success"
                        role="alert"
                        style={{
                          fontSize: "16px",
                          border: "0",
                          borderRadius: "15px",
                          padding: "13px 0 5px 0",
                        }}>
                        <p className="text-center">login successful</p>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className={`${style.form}`}>
                  <form>
                    <div className="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        class="form-control"
                        id="phone"
                        aria-describedby="emailHelp"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <p className="text-end">Forgot password?</p>
                  </form>
                </div>
                <div className={`d-grid gap-2 mb-4 ${style.btnLogin}`}>
                  <button
                    className="btn btn-warning"
                    type="button"
                    onClick={handleSubmit}
                    disabled={isLoading}>
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </div>
                <div className={`register ${style.register}`}>
                  <p className="text-center">
                    Dont have a Tokopedia account?{" "}
                    <Link
                      href={"/auth/register/customer"}
                      className={`${style.linkLogin}`}>
                      Register
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
