import ClickComponent from './ClickPanel'
import ShopComponent from './ShopPanel'

const App = () => {
	return (
		<div className='flex flex-row w-screen h-screen justify-center items-center divide-x-2'>
			<ClickComponent />
			<ShopComponent />
		</div>
	)
}

export default App
