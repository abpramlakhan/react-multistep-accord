import { useState } from 'react';
import './App.css';

function App2() {
	const [currentStepCount, setCurreentStepCount] = useState(0)
    const data = [
        {
            tabName: 'Step 1',
            content: 'some content for step 1'
        },
        {
            tabName: 'Step 2',
            content: 'some content for step 2'
        },
        {
            tabName: 'Step 3',
            content: 'some content for step 3'
        },
        {
            tabName: 'Step 4',
            content: 'some content for step 4'
        }
    ]

	const nextStepHanlder = () =>{
		let limit = data.length
		if(currentStepCount < limit) setCurreentStepCount(currentStepCount+1)
	}

	const prevStepHandler = () =>{
		if(currentStepCount!=0){
			setCurreentStepCount(currentStepCount-1)
		}
	}

    const handleTabActiveStatus = (index) =>{
        if(index===0){
           
                return 'active'
        }else if(index<=currentStepCount){
            return 'active'
        }
        return ''
    }
	return (
		<div className='mainWrapper'>
			<div className='accordWrapper'>
				<div className='accordHeader'>
					<ul>
						{data.map((item, index)=> <li className={" " + handleTabActiveStatus(index)} key={index}>{item.tabName}</li> )}
					</ul>
				</div>

				<div className='accordBody'>
					
                    {data.map((item,index)=>{
                        return(
                            <>
                            {index == currentStepCount && <div key={index} className='accordContent'>
                                <h2>{item.content}</h2>
                            </div>}
                            </>
                        )
                    })}
				</div>

				{currentStepCount > 0 && <button type='button' className='nextButton' onClick={prevStepHandler}> &lt; Prev</button>}
				{currentStepCount!==3 && <button type='button' className='nextButton' onClick={nextStepHanlder}>Next &gt;</button>}
			</div>
		</div>
	);
}

export default App2;
