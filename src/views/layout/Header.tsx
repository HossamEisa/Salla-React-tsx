import { Link } from "react-router-dom";
import { loadCartInstance, selectAllCart } from "../../store/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Header() {
    const allCart = useSelector(selectAllCart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCartInstance()) // to dispatch load items from storage
    }, [])
    return (
        <>
            <header className="w-full header" id="header">
                <div className="container">
                    <nav className="md:py-6 py-4 transition-all">
                        <div className="flex justify-between flex-row gap-2 md:gap-4 items-center">
                            <div className="flex flex-row items-center gap-2 md:gap-4 relative">
                                <Link to={'/'}
                                    title="الرئيسية"
                                    className="block shrink-0 
              w-[60px] h-[60px] md:w-[80px] md:h-[80px]
               bg-gray-50 p-2 rounded-full border-2 md:border-4 border-secondary-50 hover:scale-105 transition-transform"
                                >
                                    <img src="https://cdn.salla.network/images/logo/logo-square.png" alt="Salla Logo" />
                                </Link>
                                <span className="hidden sm:block">|</span>
                                <div className="flex flex-col">
                                    <h1 className="text-md sm:text-xl">متجر التجربة الجميلة</h1>
                                    <p>
                                        <small className="hidden sm:block text-gray-400">متجرك لكل تجاربك وأفكارك الجميلة</small>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 md:gap-4">
                                <Link to={'login'}
                                    className="w-[2.5rem] h-[2.5rem] rounded-full text-center flex items-center text-lg justify-center bg-secondary-50 text-primary hover:bg-primary hover:text-white transition-all"
                                >
                                    <i className="sicon-user"></i>
                                </Link>

                                <Link to={'cart'}
                                    className="w-[2.5rem] h-[2.5rem] rounded-full text-center flex items-center justify-center bg-secondary-50 text-primary hover:bg-primary hover:text-white transition-all relative"
                                >
                                    <i className="sicon-shopping-bag"></i>
                                    {
                                        allCart?.products?.length > 0 && (
                                            
                                            <span
                                        className="absolute w-[1.4em] h-[1.4em] font-bold text-white text-xs flex justify-center items-center rounded-full bg-red-700 -top-[0.4em] -right-[0.4em]"
                                    >
                                        {allCart?.products?.length}
                                        </span>
                                        )
                                        }
                                    
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header >
        </>
    )
}

export default Header;