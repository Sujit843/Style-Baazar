import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { authDataContext } from "../context/AuthContext";
import { userDataContext } from "../context/UserContext";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("login");
  const [name, setName] = useState("");

  const { serverUrl } = useContext(authDataContext);
  const { getCurrentUser } = useContext(userDataContext);

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const result = await axios.post(
      serverUrl + "/api/auth/login",
      { email, password },
      { withCredentials: true }
    );

    alert("Login successfully!");

    await getCurrentUser(); // ✅ wait for it
    navigate("/");

  } catch (error) {
    console.log(error);

    if (error.response?.data?.message) {
      alert(error.response.data.message);
    } else {
      alert("Check password and email.");
    }
  }
};

const handleSignup = async (e) => {
  e.preventDefault();

  try {
    const result = await axios.post(
      serverUrl + "/api/auth/registration",
      { name, email, password },
      { withCredentials: true }
    );

    alert("Signup successful ✅");
    navigate("/")

  } catch (error) {
    alert(error.response?.data?.message || "Signup failed");
  }
};

  return (
    <div className="min-h-screen w-full flex font-serif overflow-hidden bg-stone-950">

      <div className="hidden lg:flex w-1/2 relative flex-col justify-between overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-rose-550 z-0" />

        <div className="absolute inset-0 z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[130%] h-[2px] bg-rose-500/20 rotate-[25deg] origin-left" />
          <div className="absolute top-[-5%] left-[-10%] w-[130%] h-[1px] bg-rose-500/10 rotate-[25deg] origin-left" />
          <div className="absolute bottom-[20%] left-[-10%] w-[130%] h-[1px] bg-rose-500/10 rotate-[25deg] origin-left" />

          <div className="absolute top-[15%] right-[-60px] w-[200px] h-[200px] rounded-full border border-rose-500/15" />
          <div className="absolute top-[15%] right-[-80px] w-[250px] h-[250px] rounded-full border border-rose-500/8" />
          <div className="absolute bottom-[10%] left-[-80px] w-[300px] h-[300px] rounded-full border border-rose-500/10" />

          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#d97706" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="relative z-20 p-10">
          <div
            className="flex items-center gap-3 cursor-pointer group w-fit"
            onClick={() => navigate("/")}
          >
            <div className="w-9 h-9 border-2 border-rose-500 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
              <span className="text-rose-500 font-bold text-xs -rotate-45 group-hover:rotate-0 transition-transform duration-500">SB</span>
            </div>
            <div>
              <h1 className="text-white text-xl font-light tracking-[0.3em] uppercase">Style</h1>
              <p className="text-rose-500 text-xs tracking-[0.5em] uppercase -mt-1">Baazar</p>
            </div>
          </div>
        </div>

        <div className="relative z-20 px-10 pb-4">
          <div className="mb-8">
            <p className="text-rose-500/70 text-xs tracking-[0.4em] uppercase mb-4">New Season 2025</p>
            <h2 className="text-white text-6xl font-light leading-none tracking-tighter">
              Wear<br />
              <span className="italic text-rose-500">What</span><br />
              Speaks
            </h2>
            <div className="w-16 h-[2px] bg-rose-500 mt-6" />
            <p className="text-stone-400 text-sm mt-4 leading-relaxed max-w-xs font-sans">
              Curated fashion collections for every story you want to tell. Premium fabrics, timeless silhouettes.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {["Ethnic Wear", "Western", "Fusion", "Luxury"].map((tag) => (
              <span
                key={tag}
                className="text-xs text-rose-500/60 border border-rose-500/20 px-3 py-1 tracking-widest uppercase font-sans"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-20 border-t border-white/5 px-10 py-5 flex items-center justify-between">
          <p className="text-stone-600 text-xs font-sans tracking-widest uppercase">Est. 2024</p>
          <div className="flex gap-4">
            {["IG", "FB", "TW"].map((s) => (
              <span key={s} className="text-stone-600 hover:text-rose-500 text-xs cursor-pointer tracking-widest transition-colors duration-200 font-sans">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center bg-stone-50 relative overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-50 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-100 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-md px-8 py-12">

          <div className="lg:hidden flex items-center gap-3 mb-10 cursor-pointer" onClick={() => navigate("/")}>
            <div className="w-8 h-8 border-2 border-stone-800 flex items-center justify-center rotate-45">
              <span className="text-stone-800 font-bold text-xs -rotate-45">SB</span>
            </div>
            <div>
              <h1 className="text-stone-900 text-lg font-light tracking-[0.3em] uppercase">Style Baazar</h1>
            </div>
          </div>

          <div className="flex mb-10 border-b border-stone-200">
            {["login", "signup"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 pb-3 text-sm tracking-[0.2em] uppercase font-sans transition-all duration-300 ${
                  activeTab === tab
                    ? "text-stone-900 border-b-2 border-stone-900 -mb-px font-medium"
                    : "text-stone-400 hover:text-stone-600"
                }`}
              >
                {tab === "login" ? "Sign In" : "Register"}
              </button>
            ))}
          </div>

          <div className="mb-8">
            <h3 className="text-3xl text-stone-900 font-light tracking-tight">
              {activeTab === "login" ? (
                <>Welcome <span className="italic">back</span></>
              ) : (
                <>Join the <span className="italic">Baazar</span></>
              )}
            </h3>
            <p className="text-stone-500 text-sm mt-1 font-sans">
              {activeTab === "login"
                ? "Sign in to access your wardrobe & orders"
                : "Create an account to start shopping"}
            </p>
          </div>

          <button className="w-full h-12 border border-stone-200 bg-white hover:bg-stone-50 flex items-center justify-center gap-3 mb-6 transition-all duration-200 group font-sans text-sm text-stone-700 hover:border-stone-400">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-stone-200" />
            <span className="text-stone-400 text-xs tracking-widest uppercase font-sans">or</span>
            <div className="flex-1 h-px bg-stone-200" />
          </div>

          <div className="flex flex-col gap-4">

            {activeTab === "signup" && (
              <div className="relative">
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full h-12 border border-stone-200 bg-white px-4 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-stone-800 transition-colors duration-200 font-sans"
              />
              </div>
            )}

            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full h-12 border border-stone-200 bg-white px-4 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-stone-800 transition-colors duration-200 font-sans"
              />
            </div>

            <div className="relative">
              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full h-12 border border-stone-200 bg-white px-4 pr-12 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-stone-800 transition-colors duration-200 font-sans"
              />
              <button
                type="button"
                onClick={() => setShow((p) => !p)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-800 transition-colors"
              >
                {show ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
              </button>
            </div>

            {activeTab === "signup" && (
              <div className="relative">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full h-12 border border-stone-200 bg-white px-4 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-stone-800 transition-colors duration-200 font-sans"
                />
              </div>
            )}

            {activeTab === "login" && (
              <div className="flex justify-end -mt-1">
                <span className="text-xs text-stone-400 hover:text-stone-800 cursor-pointer transition-colors font-sans tracking-wide">
                  Forgot password?
                </span>
              </div>
            )}

            <button
              onClick= {activeTab === "login" ? handleLogin : handleSignup}
              className="w-full h-12 bg-stone-900 hover:bg-stone-800 text-white text-sm tracking-[0.2em] uppercase font-sans transition-all duration-300 mt-2 flex items-center justify-center gap-2 group"
            >
              {activeTab === "login" ? "Sign In" : "Create Account"}
              <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-rose-500">→</span>
            </button>
          </div>

          <p className="text-center text-xs text-stone-500 mt-6 font-sans">
            {activeTab === "login" ? "New to Style Baazar? " : "Already have an account? "}
            <span
              className="text-stone-900 font-medium cursor-pointer underline underline-offset-2 hover:text-rose-500 transition-colors"
              onClick={() => setActiveTab(activeTab === "login" ? "signup" : "login")}
            >
              {activeTab === "login" ? "Create account" : "Sign in"}
            </span>
          </p>

          <p className="text-center text-xs text-stone-400 mt-4 font-sans leading-relaxed">
            By continuing, you agree to our{" "}
            <span className="underline cursor-pointer hover:text-stone-600">Terms</span> &{" "}
            <span className="underline cursor-pointer hover:text-stone-600">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;