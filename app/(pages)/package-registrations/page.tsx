'use client'
import React, { useState } from 'react';

export default function PackageRegistration() {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Package Registration</h1>

      {/* Date Filter Section */}
      <div className="bg-gray-100 p-4 rounded-md shadow-md space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Registration Date From</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Registration Date To</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div className="flex items-end">
            <input
              type="text"
              placeholder="Search Package"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
            />
          </div>
        </div>
      </div>

      {/* Registration Data Section */}
      <div className="bg-white p-4 rounded-md shadow-md text-center">
        <p className="text-gray-500">No Packages Found</p>
      </div>

      {/* Summary Footer */}
      <div className="bg-blue-100 p-4 rounded-md shadow-md flex justify-between text-center text-sm">
        <div>
          <p className="font-semibold">Total Packages Registered</p>
          <p>0</p>
          <p>Amount GHC 0.00</p>
        </div>
        <div>
          <p className="font-semibold">Total Pending Packages</p>
          <p>0</p>
          <p>Amount GHC 0.00</p>
        </div>
        <div>
          <p className="font-semibold">Total Profit</p>
          <p>Amount GHC 0.00</p>
        </div>
      </div>
    </div>
  );
}
