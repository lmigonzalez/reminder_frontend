import React from 'react'

function DataDisplayed() {
  return (
	<section className='bg-[#2C3333] text-white flex justify-center items-center  w-full'>
		<div className='flex justify-between items-center w-[1200px] px-3 py-2  max-w-full text-center'>
			
				<div>
					<p>Total debt:</p>
					<p>$5000</p>
				</div>
				<div>
					<p>Next Payment Due In:</p>
					<p>10 Days</p>
				</div>
				<div>
					<p>Total To Pay this Month:</p>
					<p>$600</p>
				</div>
		
		</div>
	</section>
  )
}

export default DataDisplayed