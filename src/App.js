import { useState } from 'react';
import './App.css';

function App() {
	const [currentStepCount, setCurreentStepCount] = useState(0)

	const nextStepHanlder = () =>{
		let limit = 4
		if(currentStepCount < limit) setCurreentStepCount(currentStepCount+1)
	}

	const prevStepHandler = () =>{
		if(currentStepCount!=0){
			setCurreentStepCount(currentStepCount-1)
		}
	}
	return (
		<div className='mainWrapper'>
			<div className='accordWrapper'>
				<div className='accordHeader'>
					<ul>
						<li className={(currentStepCount == 0 || currentStepCount>0) && 'active'} >Step 1</li>
						<li className={(currentStepCount!== 0 && currentStepCount > 0) && 'active'}>Step 2</li>
						<li className={(currentStepCount!== 0 && currentStepCount > 1) && 'active'}>Step 3</li>
						<li className={(currentStepCount!== 0 && currentStepCount > 2) && 'active'}>Step 4</li>
					</ul>
				</div>

				<div className='accordBody'>
					{/* Step 1 */}
					{currentStepCount == 0 && <div className='accordContent'>
						<h2>Step 1</h2>
						<p>Some content for step 1</p>
					</div>}
					{/* Step 2 */}
					{currentStepCount == 1 && <div className='accordContent'>
						<h2>Step 2</h2>
						<p>Some content for step 2</p>
					</div>}
					{/* Step 3 */}
					{currentStepCount == 2 && <div className='accordContent'>
						<h2>Step 3</h2>
						<p>Some content for step 3</p>
					</div>}
					{/* Step 4 */}
					{currentStepCount == 3 && <div className='accordContent'>
						<h2>Step 4</h2>
						<p>Some content for step 4</p>
					</div>}
				</div>

				{currentStepCount > 0 && <button type='button' className='nextButton' onClick={prevStepHandler}> &lt; Prev</button>}
				{currentStepCount!==3 && <button type='button' className='nextButton' onClick={nextStepHanlder}>Next &gt;</button>}
			</div>
		</div>
	);
}

export default App;
