 import React, { useState } from 'react';
import SideCart from '../../SideCart/sideCart';

const Drawer = () => {
    const [ showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            {showSidebar ? (
                <button
                    className="flex text-4xl text-black items-center hover:text-slate-400 cursor-pointer fixed right-10 top-6 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                </button>
            ) : (

                <svg
                    onClick={() => setShowSidebar(!showSidebar)}
                    width="18"
                    height="18"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.95 6H19.7V17.875C19.7 18.7344 19.3875 19.4635 18.7625 20.0625C18.1635 20.6875 17.4344 21 16.575 21H5.325C4.46563 21 3.72344 20.6875 3.09844 20.0625C2.49948 19.4635 2.2 18.7344 2.2 17.875V6H5.95C5.95 4.61979 6.43177 3.44792 7.39531 2.48438C8.3849 1.49479 9.56979 1 10.95 1C12.3302 1 13.5021 1.49479 14.4656 2.48438C15.4552 3.44792 15.95 4.61979 15.95 6ZM13.1375 3.8125C12.5385 3.1875 11.8094 2.875 10.95 2.875C10.0906 2.875 9.34844 3.1875 8.72344 3.8125C8.12448 4.41146 7.825 5.14062 7.825 6H14.075C14.075 5.14062 13.7625 4.41146 13.1375 3.8125ZM17.825 17.875V7.875H15.95V9.4375C15.95 9.69792 15.8589 9.91927 15.6766 10.1016C15.4943 10.2839 15.2729 10.375 15.0125 10.375C14.7521 10.375 14.5307 10.2839 14.3484 10.1016C14.1661 9.91927 14.075 9.69792 14.075 9.4375V7.875H7.825V9.4375C7.825 9.69792 7.73385 9.91927 7.55156 10.1016C7.36927 10.2839 7.14792 10.375 6.8875 10.375C6.62708 10.375 6.40573 10.2839 6.22344 10.1016C6.04115 9.91927 5.95 9.69792 5.95 9.4375V7.875H4.075V17.875C4.075 18.2135 4.19219 18.5 4.42656 18.7344C4.68698 18.9948 4.98646 19.125 5.325 19.125H16.575C16.9135 19.125 17.2 18.9948 17.4344 18.7344C17.6948 18.5 17.825 18.2135 17.825 17.875Z"
                        fill="#000000"
                    ></path>

                </svg>
                
            )}

            <div
                className={`top-0 right-0 lg:w-[35vw] w-[50vw] bg-white fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
                    }`}
            >
                <h3 className="text-black">
              <SideCart></SideCart>
                </h3>
            </div>
        </>
    );
};

export default Drawer;