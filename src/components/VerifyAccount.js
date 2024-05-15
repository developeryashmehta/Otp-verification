import React from "react";
import { useRef, useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function VerifyAccount() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [idFromParams, setIdFromParams] = useState(null);
  const otpInputs = useRef([]);

  useEffect(() => {
    // Extract ID from URL query parameters
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    setIdFromParams(id);
  }, []);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input box if available
    if (value !== "" && index < otpInputs.current.length - 1) {
      otpInputs.current[index + 1].focus();
    } else if (
      value === "" &&
      index <= otpInputs.current.length - 1 &&
      index > 0
    ) {
      otpInputs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const enteredOtp = otp.join("");
    console.log(enteredOtp, "OTP");
    try {
      const apiUrl = `your_api_endpoint?otp=${enteredOtp}&id=${idFromParams}`;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        toast.success("OTP verification successful!");
      } else {
        // Handle error cases
        console.error("API Error:", response.statusText);
        toast.error("Failed to verify OTP");
      }
    } catch (error) {
      console.error("API Error:", error.message);
      toast.error("Failed to verify OTP");
    }
  };
  return (
    <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow mt-20">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Mobile Phone Verification</h1>
        <p className="text-[15px] text-slate-500">
          Enter the 6-digit verification code that was sent to your phone
          number.
        </p>
      </header>
      <form id="otp-form" onSubmit={handleSubmit}>
        <div className="flex items-center justify-center gap-3">
          {otp.map((value, index) => (
            <input
              className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              key={index}
              type="text"
              value={value}
              autoFocus={index === 0}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              ref={(input) => (otpInputs.current[index] = input)}
              maxLength={1}
              pattern="\d"
              placeholder="0"
              required
            />
          ))}
        </div>
        <div className="max-w-[260px] mx-auto mt-4">
          <button
            type="submit"
            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
          >
            Verify Account
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
}
