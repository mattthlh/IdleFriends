import React, { useState } from 'react'
import Entity from './components/Entity'
import data from './assets/data.json'

const ClickComponent = () => {
	const [entityIndex, setEntityIndex] = useState(0)
	const [gold, setGold] = useState(0)

	return (
		<div className='flex flex-col justify-center items-center h-full w-full'>
			<p>Gold: {gold}</p>
			<div className='flex flex-row justify-evenly'>
				<button
					onClick={() => {
						setEntityIndex(entityIndex - 1)
					}}>
					LEFT
				</button>
				<Entity
					key={entityIndex}
					entity={data[entityIndex]}
					gold={gold}
					setGold={setGold}
				/>
				<button
					onClick={() => {
						setEntityIndex(entityIndex + 1)
					}}>
					RIGHT
				</button>
			</div>
		</div>
	)
}

export default ClickComponent
