
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CheckoutCartList } from '../CheckoutCartList';
import { db } from '../../firebase/firebase-config';


export const UserOrders = () => {

	const uid = useSelector( state => state.auth.uid );
	const [ carts, setCarts ] = useState([]);

	const getOrders = () => {
		console.log(uid);
		const ordersRef = db.collection(uid);
		ordersRef
			.onSnapshot( snap => {
				snap.forEach( snapHijo => 
					setCarts( carts => [ ...carts, Object.values(snapHijo.data()) ] )	
				)
			})
		console.log(carts, carts.length, )
		}

	useEffect( () => {
		getOrders();
	}, [])

	return (
		<div className="inline-block flex flex-col items-center lg:justify-center text-gray-600 px-8 py-4 lg:py-8 mt-12">
			<h2 className="text-xl mb-12">Your last orders</h2>
			<div className="flex flex-col">
				{
					carts.length > 0 
					?	carts.map( (c, i) =>  {
							return (
								<>
									<CheckoutCartList key={i} cart={c} />
									<div className="mb-4"></div>
								</>
							)
						}
					)
					: <p className="mt-12">No orders yet</p>
				}
			</div>
		</div>
	)
}
