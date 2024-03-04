import ClickComponent from './components/ClickComponent'
import ShopComponent from './components/ShopComponent'

const App = () => {
	return (
		<div className='flex flex-row w-screen h-screen justify-center items-center divide-x-2'>
			<ClickComponent />
			<ShopComponent />
		</div>
	)
}

export default App
