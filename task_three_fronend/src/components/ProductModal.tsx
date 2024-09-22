import React from "react";
import { IProduct } from "../types/product-type";
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
interface ProductModalProps {
  product: IProduct | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center p-6  ">
      <div
        onClick={onClose}
        className=" absolute top-0 left-0 bg-blue-300 opacity-60 w-full h-full "
      ></div>
      <div className="w-full  max-w-5xl  max-h-screen overflow-scroll p-4   ">
        <div className=" rounded-lg p-4 relative   bg-white   ">
          <button onClick={onClose} className="absolute top-2 right-2">
            <IoClose size={24} className=" text-blue-400 " />
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2  ">
            <div className="img">
              <div className="img-box h-full max-lg:mx-auto ">
                <img
                  src={product.images[0]}
                  alt={product.description}
                  className="max-lg:mx-auto lg:ml-auto h-full object-cover max-h-80 lg:max-h-full"
                />
              </div>
            </div>
            <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
              <div className="data w-full max-w-xl">
                <h2 className="font-manrope font-bold lg:text-3xl text-xl leading-10 text-gray-900 mb-2 capitalize">
                  {product.title}
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                  <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                    ${product.price}
                  </h6>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <FaStar size={26} className="text-yellow-400" />
                    </div>
                    <span className="pl-2 font-normal leading-7 text-gray-500 text-lg ">
                      {product.rating}/5
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 text-base font-normal mb-5">
                  {product.description}
                </p>
                <ul className="grid gap-y-4 mb-8">
                  {product.brand && (
                    <li className="flex items-center gap-3">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="26" height="26" rx="13" fill="#1d4ed8" />
                        <path
                          d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                          stroke="white"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                      </svg>
                      <span className="font-normal text-base text-gray-900 ">
                        Brand: {product.brand}
                      </span>
                    </li>
                  )}
                  <li className="flex items-center gap-3">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="26" height="26" rx="13" fill="#1d4ed8 " />
                      <path
                        d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                        stroke="white"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                    </svg>
                    <span className="font-normal text-base text-gray-900 ">
                      {product.warrantyInformation}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="26" height="26" rx="13" fill="#1d4ed8 " />
                      <path
                        d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                        stroke="white"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                    </svg>
                    <span className="font-normal text-base text-gray-900 ">
                      {product.shippingInformation}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="26" height="26" rx="13" fill="#1d4ed8 " />
                      <path
                        d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                        stroke="white"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                    </svg>
                    <span className="font-normal text-base text-gray-900 ">
                      {product.availabilityStatus}
                    </span>
                  </li>
                </ul>
                <p className=" text-xs pt-2 text-yellow-400  ">
                  *Below buttons have no funtionality, Just for design
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-8 pb-8 pt-4">
                  <div className="flex sm:items-center sm:justify-center w-full">
                    <button className="group py-4 px-6 border border-gray-400 rounded-l-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                      <svg
                        className="stroke-gray-900 group-hover:stroke-black"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 11H5.5"
                          stroke=""
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                        <path
                          d="M16.5 11H5.5"
                          stroke=""
                          stroke-opacity="0.2"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                        <path
                          d="M16.5 11H5.5"
                          stroke=""
                          stroke-opacity="0.2"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      className="font-semibold text-gray-900 cursor-pointer text-lg py-[13px] px-6 w-full sm:max-w-[118px] outline-0 border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50"
                      placeholder="1"
                    />
                    <button className="group py-4 px-6 border border-gray-400 rounded-r-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                      <svg
                        className="stroke-gray-900 group-hover:stroke-black"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 5.5V16.5M16.5 11H5.5"
                          stroke="#9CA3AF"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                        <path
                          d="M11 5.5V16.5M16.5 11H5.5"
                          stroke="black"
                          stroke-opacity="0.2"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                        <path
                          d="M11 5.5V16.5M16.5 11H5.5"
                          stroke="black"
                          stroke-opacity="0.2"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <button className="group py-4 px-5 rounded-full bg-blue-50 text-blue-600 font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-blue-100">
                    <svg
                      className="stroke-blue-600 "
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                        stroke=""
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                    </svg>
                    Add to cart
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <button className="group transition-all duration-500 p-4 rounded-full bg-blue-50 hover:bg-blue-100 hover:shadow-sm hover:shadow-blue-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M4.47084 14.3196L13.0281 22.7501L21.9599 13.9506M13.0034 5.07888C15.4786 2.64037 19.5008 2.64037 21.976 5.07888C24.4511 7.5254 24.4511 11.4799 21.9841 13.9265M12.9956 5.07888C10.5204 2.64037 6.49824 2.64037 4.02307 5.07888C1.54789 7.51738 1.54789 11.4799 4.02307 13.9184M4.02307 13.9184L4.04407 13.939M4.02307 13.9184L4.46274 14.3115"
                        stroke="#1d4ed8 "
                        stroke-width="1.6"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button className="text-center w-full px-5 py-4 rounded-[100px] bg-blue-700 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-blue-700 hover:shadow-blue-400">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
