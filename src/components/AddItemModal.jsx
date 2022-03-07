
import React from 'react'
import { Link } from 'react-router-dom';
import { getProductImage } from '../actions/products'
import { Button } from './Button'

export const AddItemModal = ( { showModal, setShowModal, product:p }) => {
	return (
	  <>
		{
		showModal &&
		<div>
			<div
				className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
			>
				<div className="relative w-auto my-6 mx-auto max-w-3xl">
					{/* content */}
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white 		outline-none focus:outline-none">
						{/*header*/}
						<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
							<h3 className="text-xl text-gray-500 font-semibold">
								This product's been added
							</h3>
							<button
								className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
								onClick={() => setShowModal( showModal => false )}
							>
								<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
									×
								</span>
							</button>
						</div>
						{/*body*/}
						<div className="relative p-6 flex flex-col bg-gray-100">
							<div className="flex">
								<img alt="small product image" src={ getProductImage( p.image.url ) } height="50" width="50"/> 
								<p className="my-4 text-blueGray-500 text-lg leading-relaxed">
									{ p.description }
								</p>
							</div>
							<p className="text-base pl-4 pt-4">
								Price: ${ p.price }
							</p>
						</div>
						{/*footer*/}
						<div className="flex justify-around gap-2 justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
							<Link to='/cart'>
								<Button fn = { setShowModal } text = { "Cart" }/>
							</Link>
							<Button fn = { setShowModal } text = { "Keep shopping" }/>
						</div>
					</div>
				</div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
		</div>
	}
	</>
	)
}
