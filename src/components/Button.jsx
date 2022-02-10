
import React from 'react'

export const Button = ({ fn = () => {}, text }) => {
	return (
					<button onClick = { () => { fn() } } className="bg-white border-2 border-newblue hover:bg-newblue rounded-full py-2 px-8 text-newblue hover:text-white tracking-wider font-bold">
						{ text }
					</button>
				 )
}
