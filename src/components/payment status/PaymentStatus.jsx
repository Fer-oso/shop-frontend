import React, { useState } from "react";
import { CheckCircle, XCircle, RefreshCw } from "lucide-react";
import { useLocation } from "react-router-dom";

function PaymentStatus() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const status = queryParams.get("status") || "pending";

  const statusConfig = {
    success: {
      icon: CheckCircle,
      title: "Payment Successful",
      description: "Your payment has been processed successfully",
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    pending: {
      icon: RefreshCw,
      title: "Payment Pending",
      description: "Your payment is being processed",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    failure: {
      icon: XCircle,
      title: "Payment Canceled",
      description: "Your payment has been canceled",
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
  };

  const currentStatus = statusConfig[status];
  const StatusIcon = currentStatus.icon;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Status Card */}
        <div
          className={`rounded-lg ${currentStatus.bgColor} border ${currentStatus.borderColor} p-6 mb-6`}
        >
          <div className="flex items-center justify-center mb-4">
            <StatusIcon className={`w-16 h-16 ${currentStatus.color}`} />
          </div>
          <h1
            className={`text-2xl font-bold text-center ${currentStatus.color} mb-2`}
          >
            {currentStatus.title}
          </h1>
          <p className="text-gray-600 text-center">
            {currentStatus.description}
          </p>
        </div>

        {/* Payment Details */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-4">
              <span className="text-gray-600">Order ID</span>
              <span className="font-medium">#ORD-2024-1234</span>
            </div>
            <div className="flex justify-between items-center border-b pb-4">
              <span className="text-gray-600">Amount</span>
              <span className="font-medium">$149.99</span>
            </div>
            <div className="flex justify-between items-center border-b pb-4">
              <span className="text-gray-600">Payment Method</span>
              <span className="font-medium">Credit Card ****4242</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Date</span>
              <span className="font-medium">
                {new Date().toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentStatus;
