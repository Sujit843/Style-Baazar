import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function Confirmation({onConfirm, onCancel}) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl max-w-md w-full p-8 text-center">

        {/* Icon */}
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />

        {/* Text */}
        <h2 className="text-2xl font-bold text-white mb-2">
          Are you sure?
        </h2>

        <p className="text-gray-300 mb-8">
          Once you place the order, it cannot be cancelled easily.
          Please confirm to continue.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">

          <button
            onClick={() => navigate("/placeOrder")}
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600
            text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
          >
            Yes, Place Order
          </button>

          <button
            onClick={() => navigate(-1)}
            className="flex-1 flex items-center justify-center gap-2
            bg-white/10 border border-white/20 text-white py-3 rounded-xl
            hover:bg-red-500/20 transition"
          >
            <FaTimesCircle />
            Cancel
          </button>

        </div>
      </div>

    </div>
  );
}

export default Confirmation;
