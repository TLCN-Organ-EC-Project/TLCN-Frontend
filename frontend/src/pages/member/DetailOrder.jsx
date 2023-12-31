import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetDetailOrder } from '../../hooks/useProductsByCategory'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import path from '../../ultils/path'
import { deleteOrder } from '../../apis/user'
import { useQueryClient } from 'react-query'

const DetailOrder = () => {
  const navigate = useNavigate()
  const { bookingid } = useParams()
  const { current } = useSelector(state => state.user);
  const queryClient = useQueryClient();
  const { data: detailOrderData, isLoading: isFetchingProducts } = useGetDetailOrder(current?.username, bookingid);

  const hanleDeleteOrder = async (username, bookingid) => {
    const response = await deleteOrder(username, bookingid)
    if (response) {
      queryClient.invalidateQueries(['order-data', current?.username])
    }
  }
  return (
    <main className="bg-white px-4 pt-16 pb-24 sm:px-6 sm:pt-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="max-w-xl">
          <h1 className="text-base font-medium text-indigo-600">Thank you!</h1>
          <p className="mt-2 text-4xl font-bold tracking-tight">It's on the way!</p>
          <p className="mt-2 text-base text-gray-500">Your order {bookingid} has shipped and will be with you soon.</p>

          <dl className="mt-12 text-sm font-medium">
            <dt className="text-gray-900">Tracking number</dt>
            <dd className="mt-2 text-indigo-600">{bookingid}</dd>
          </dl>
        </div>

        <section aria-labelledby="order-heading" className="mt-10 border-t border-gray-200">
          <h2 id="order-heading" className="sr-only">
            Your order
          </h2>

          <h3 className="sr-only">Items</h3>
          {detailOrderData?.product_ordered?.map((product) => (
            <div key={product?.id} className="flex space-x-6 border-b border-gray-200 py-10">
              <img
                src={product?.product_thumb}
                alt={product?.imageAlt}
                className="h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center sm:h-40 sm:w-40"
              />
              <div className="flex flex-auto flex-col">
                <div>
                  <h4 className="font-medium text-gray-900">
                    <a>{product?.product_name}</a>
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">Size : {product?.size}</p>
                </div>
                <div className="mt-6 flex flex-1 items-end">
                  <dl className="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
                    <div className="flex">
                      <dt className="font-medium text-gray-900">Quantity</dt>
                      <dd className="ml-2 text-gray-700">{product?.quantity}</dd>{/*  */}
                    </div>
                    <div className="flex pl-4 sm:pl-6">
                      <dt className="font-medium text-gray-900">Price</dt>
                      <dd className="ml-2 text-gray-700">{product?.price}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          ))}

          <div className="sm:ml-40 sm:pl-6">
            <h3 className="sr-only">Your information</h3>
            <h4 className="sr-only">Addresses</h4>
            <dl className="grid grid-cols-2 gap-x-6 py-10 text-sm">
              <div>
                <dt className="font-medium text-gray-900">Shipping address</dt>
                <dd className="mt-2 text-gray-700">
                  <address className="not-italic">
                    <span className="block">{detailOrderData?.order?.address}</span>
                  </address>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Billing address</dt>
                <dd className="mt-2 text-gray-700">
                  <address className="not-italic">
                    <span className="block">{detailOrderData?.order?.address}</span>
                  </address>
                </dd>
              </div>
            </dl>
            <h4 className="sr-only">Payment</h4>
            <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 py-10 text-sm">
              <div>
                <dt className="font-medium text-gray-900">Payment method</dt>
                <dd className="mt-2 text-gray-700">
                  <p>{detailOrderData?.order?.payment_method}</p>
                  <p>
                    <span aria-hidden="true">••••</span>
                    <span className="sr-only">Ending in </span>
                  </p>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Shipping method</dt>
                <dd className="mt-2 text-gray-700">
                  <p>DHL</p>
                  <p>Takes up to 3 working days</p>
                </dd>
              </div>
            </dl>

            <h3 className="sr-only">Summary</h3>

            <dl className="space-y-6 border-t border-gray-200 pt-10 text-sm">
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Subtotal</dt>
                <dd className="text-gray-700">{detailOrderData?.order?.amount}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="flex font-medium text-gray-900">
                  Discount
                  {/*                   <span className="ml-2 rounded-full bg-gray-200 py-0.5 px-2 text-xs text-gray-600">STUDENT50</span> */}
                </dt>
                <dd className="text-gray-700">(0%)</dd>
              </div>

              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Total</dt>
                <dd className="text-gray-900">{detailOrderData?.order?.amount}</dd>
              </div>
            </dl>
          </div>
        </section>
        <section className='flex justify-end gap-10 pt-10'>
          <button
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => navigate(`/${path.HOME}`)}
          >
            Go home
          </button>    
        </section>
      </div>
    </main>
  )
}

export default DetailOrder