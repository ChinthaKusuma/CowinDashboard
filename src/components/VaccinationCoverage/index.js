import './index.css'
import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ]

const VaccinationCoverage = props => {
  const {item} = props
  const data1 = a => {
    if (a !== 0) {
      return `${a.toString()}00k`
    }
    return a
  }

  //   const {last7DaysVaccination} = item
  //   const {vaccineDate} = last7DaysVaccination
  //   console.log(vaccineDate)

  return (
    <div className="bg2">
      <h1 className="para1">Vaccination Coverage</h1>
      {/* <ResponsiveContainer width="100%" height={250}> */}
      <BarChart
        width={500}
        height={500}
        data={item}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: 'white',
            fontFamily: 'Roboto',
            strokeWidth: 0.5,
            fontSize: 15,
          }}
        />
        <YAxis
          tickFormatter={data1}
          tick={{
            stroke: 'white',
            fontFamily: 'Roboto',
            strokeWidth: 0.5,
            fontSize: 15,
          }}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="dose1" fill="#5a8dee" />
        <Bar dataKey="dose2" fill="#f54394" />
      </BarChart>
      {/* </ResponsiveContainer> */}
    </div>
  )
}
export default VaccinationCoverage
