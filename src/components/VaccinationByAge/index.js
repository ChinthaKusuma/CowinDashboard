// Write your code here
import './index.css'
import React from 'react'
import {PieChart, Pie, Legend, Tooltip, Cell} from 'recharts'

// const data01 = [
//   {name: 'Group A', value: 400},
//   {name: 'Group B', value: 300},
//   {name: 'Group C', value: 300},
//   {name: 'Group D', value: 200},
//   {name: 'Group E', value: 278},
//   {name: 'Group F', value: 189},
// ]

// const data02 = [
//   {name: 'Group A', value: 2400},
//   {name: 'Group B', value: 4567},
//   {name: 'Group C', value: 1398},
//   {name: 'Group D', value: 9800},
//   {name: 'Group E', value: 3908},
//   {name: 'Group F', value: 4800},
// ]
const COLORS = ['#2d87bb', '#a3df9f', '#2cc6c6']
const VaccinationByAge = props => {
  const {item} = props
  return (
    <div className="bg3">
      <h1>Vaccination by age</h1>
      <PieChart width={1000} height={400}>
        <Pie
          dataKey="count"
          isAnimationActive={false}
          data={item}
          cx={500}
          cy={100}
          outerRadius={80}
          //   fill="#8884d8"
          //   label
        >
          {/* {item.map((entry, index) => (
            <Cell name={entry.age} fill={COLORS[index % COLORS.length]} />
          ))} */}
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>

        {/* <Pie
        dataKey="value"
        data={data02}
        cx={500}
        cy={200}
        innerRadius={40}
        outerRadius={80}
        fill="#82ca9d"
      /> */}
        {/* <Tooltip /> */}
        <Legend
          width="100%"
          iconType="circle"
          layout="horizontal"
          horizontalAlign="middle"
          align="middle"
        />
      </PieChart>
    </div>
  )
}
export default VaccinationByAge
