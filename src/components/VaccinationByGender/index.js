import './index.css'
import React from 'react'
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Legend,
  //   ResponsiveContainer,
} from 'recharts'

// const data = [
//   {name: 'Group A', value: 400},
//   {name: 'Group B', value: 300},
//   {name: 'Group C', value: 300},
//   {name: 'Group D', value: 200},
// ]
// const COLORS = ['#f54393', '#5a8dee', '#64c2a6']

const VaccinationByGender = props => {
  const {item} = props
  console.log(item)
  return (
    <div className="bg3">
      <h1>Vaccination by gender</h1>
      {/* <ResponsiveContainer width="100%" height={300}> */}
      <PieChart width={1000} height={500}>
        {/* <Pie
          data={item}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
         
        </Pie> */}
        <Pie
          data={item}
          cx="50%"
          cy="40%"
          startAngle={180}
          endAngle={0}
          innerRadius="40%"
          outerRadius="70%"
          //   fill="#8884d8"
          //   paddingAngle={5}
          dataKey="count"
        >
          {/* {item.map((entry, index) => (
            <Cell name={entry.gender} fill={COLORS[index % COLORS.length]} />
          ))} */}
          <Cell name="male" fill="#f54393" />
          <Cell name="female" fill="#5a8dee" />
          <Cell name="others" fill="#2cc6c6" />
        </Pie>

        <Legend
          width="100%"
          iconType="circle"
          layout="horizontal"
          horizontalAlign="middle"
          align="middle"
        />
      </PieChart>
      {/* </ResponsiveContainer> */}
    </div>
  )
}
export default VaccinationByGender
