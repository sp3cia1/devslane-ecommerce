export default function Footer(){
  return(
    <div className="bg-slate-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">Copyright © 2023 | CoolYogi</p>
          </div>
          <div className="text-sm">
            <p>Powered by CoolYogi</p>
          </div>
        </div>
      </div>
    </div>
  )
}