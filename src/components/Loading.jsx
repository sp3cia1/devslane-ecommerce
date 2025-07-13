import { memo } from "react";

function Loading() {
  return (
    <div className="grow flex flex-col max-w-6xl lg:min-w-5xl mx-auto my-6 bg-white rounded-lg p-6">
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-gray-600">Loading products...</div>
      </div>
    </div>
  )
}

export default memo(Loading);
