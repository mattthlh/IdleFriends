import React, { useState, useEffect, useRef } from 'react'
import Entity from './components/Entity'
import data from './assets/data.json'

const ClickComponent = () => {
	const [entityIndex, setEntityIndex] = useState(0)
	const [gold, setGold] = useState(0)
	const [cps, setCPS] = useState(0)
	const clicksRef = useRef(0)

	useEffect(() => {
		let interval

		// Update CPS every second
		interval = setInterval(() => {
			setCPS(clicksRef.current)
			clicksRef.current = 0
		}, 1000)

		// Cleanup interval on component unmount
		return () => clearInterval(interval)
	}, [])

	return (
		<div className='flex flex-col justify-center items-center h-full w-full'>
			<p>Gold: {gold}</p>
			<div className='flex flex-row justify-evenly'>
				<button
					hidden={entityIndex <= 0}
					onClick={() => {
						setEntityIndex(entityIndex - 1)
					}}>
					LEFT
				</button>
				<Entity
					key={entityIndex}
					entity={data[entityIndex]}
					setGold={setGold}
					clicked={() => {
						clicksRef.current += 1
					}}
				/>
				<button
					hidden={entityIndex >= data.length - 1}
					onClick={() => {
						setEntityIndex(entityIndex + 1)
					}}>
					RIGHT
				</button>
			</div>
			<p>CPS: {cps}</p>
		</div>
	)
}

export default ClickComponent
