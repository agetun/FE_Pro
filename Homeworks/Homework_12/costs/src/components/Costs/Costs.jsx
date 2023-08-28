import React, {useState}  from 'react'
import CostItem from './CostItem'
import './Costs.css'
import Card from '../UI/Card'
import CostFilter from './CostFilter'

export default function Costs(props) {

  const [selectedYear, setSelectedYear] = useState('2021');

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter(cost => 
    {
      return cost.date.getFullYear().toString() === selectedYear;
    });

    

  return (
    <div>
      
    <Card className='costs'> 
        <CostFilter year={selectedYear} 
        onChangeYear={yearChangeHandler} /> 
        {filteredCosts.length === 0 ? <p>В этом году расходов нет</p> :
        filteredCosts.map(cost => (
          <CostItem 
          key={cost.id}
          date={cost.date} 
          description={cost.description} 
          amount={cost.amount}
          />
        ))}          

        {/* <CostItem 
        date={props.costs[0].date} 
        description={props.costs[0].description} 
        amount={props.costs[0].amount}
        ></CostItem>
        <CostItem 
        date={props.costs[1].date} 
        description={props.costs[1].description} 
        amount={props.costs[1].amount}
        ></CostItem>
        <CostItem 
        date={props.costs[2].date} 
        description={props.costs[2].description} 
        amount={props.costs[2].amount}
        ></CostItem>        */}
    </Card>
    </div>
  )
}
