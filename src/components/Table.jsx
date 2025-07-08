export default function Table(props) {
  const {num} = props
  const multipliers = [1,2,3,4]
  return(
    <div className="text-blue-700 text-2xl font-bold">
      {multipliers.map((n) => <p>{num} x {n} = {num * n}</p>)}
    </div>
  )
}