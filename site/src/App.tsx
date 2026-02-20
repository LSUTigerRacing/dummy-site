import car from "./assets/2019car.jpg"
import logo from "./assets/logo.png"

function App() {
  return (
    <div className="w-screen h-screen flex max-[800px]:flex-col overflow-hidden">
		<div className="w-2/5 max-[800px]:w-full h-full max-[800px]:h-2/5 bg-[var(--standard-purple)] text-white">
			<img
				src={logo}
				className="w-80 object-cover mt-20 mb-10 mx-auto"
			/>
			<div className="w-[80%] text-center mx-auto">
				<h3>Member Portal is under construction!</h3>
				<p>Check back soon!</p>
			</div>
		</div>
		<div className="flex-1">
			<img
				src={car}
				className="w-full h-full object-cover"
			/>
		</div>
    </div>
     
  )
}

export default App
