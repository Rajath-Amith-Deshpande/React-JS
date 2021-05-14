import React,{ useState, useCallback } from 'react'
import Title from './Title'
import Text from './Text'
import Button from './Button'

const UseCallback = () => {
    const [age,setAge] = useState(0)
    const [salary,setSalary] = useState(1000)
    
    const IncAge = () => {
        setAge(age + 1)
    }
    
    const IncSalary = useCallback(() => {
        setSalary(salary + 1000)
    })
    return <div>
        <Title />
        <Text name="Age" data={age}/>
        <Button handle={IncAge}>Age</Button>
        <br />
        <Text name="Salary" data={salary} />
        <Button handle={IncSalary}>Salary</Button>
    </div>
}

export default UseCallback;