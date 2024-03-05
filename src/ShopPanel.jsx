import React from 'react'
import shopData from './assets/shopData.json'

const ShopComponent = () => {
	const handlePurchase = (name) => {
		console.log(name + ' has been bought!')
	}

	const Item = ({ name, price }) => {
		return (
			<div className='flex flex-row justify-evenly'>
				<p>{name}</p>
				<button onClick={() => handlePurchase(name)}>{price}</button>
			</div>
		)
	}

	return (
		<div className='flex justify-center items-center h-full w-full'>
			<div className='w-full m-8 bg-orange-400'>
				<h3> Shop </h3>
				{shopData.map((element, index) => {
					return <Item key={index} name={element.name} price={element.price} />
				})}
			</div>
		</div>
	)
}

export default ShopComponent
