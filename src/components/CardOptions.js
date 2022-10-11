import React from 'react'

function CardOptions() {
  return (
	<div className='absolute right-6 z-10 bg-white px-2 py-4 flex flex-col justify-start items-start'>
		<button>Edit</button>
		<button className='my-3'>Payment</button>
		<button>Delete</button>
	</div>
  )
}

export default CardOptions