import Card from './Card'

export default function Container(){
  return(
    <div className="flex-grow my-6 max-w-5xl mx-auto">
      <div className="bg-white rounded-lg p-6">
        <div className="flex justify-end mb-6">
          <select className="border border-gray-300 rounded px-3 py-2 text-sm bg-white min-w-40">
            <option value="default">Default sorting</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card sale="sale"/>
          <Card/>
          <Card/>
          <Card/>
          <Card sale="sale"/>
          <Card/>
          <Card sale="sale"/>
          <Card sale="sale"/>
          <Card sale="sale"/>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 bg-red-500 text-white rounded text-sm font-medium">1</button>
            <button className="w-8 h-8 border border-gray-300 text-gray-700 rounded text-sm font-medium hover:bg-gray-50">2</button>
            <button className="w-8 h-8 border border-gray-300 text-gray-700 rounded text-sm font-medium hover:bg-gray-50">→</button>
          </div>
        </div>
      </div>
    </div>
  )
}