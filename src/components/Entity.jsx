import React, { useState } from 'react'

const Entity = ({ entity, gold, setGold }) => {
	const [health, setHealth] = useState(entity.health)

	const attack = () => {
		if (health - 10 <= 0) {
			setHealth(100)
			setGold(gold + entity.reward)
			console.log(
				entity.name +
					' was killed. You get ' +
					entity.reward +
					' amount of coins!'
			)
		} else {
			setHealth(health - 10)
		}
	}

	return (
		<div className='flex flex-col items-center'>
			<p>
				Health: {health}/{entity.health}
			</p>
			<img
				className='max-h-72'
				draggable='false'
				onClick={() => attack()}
				src={'/src/assets/' + entity.name + '.jpeg'}
			/>
		</div>
	)
}

export default Entity
