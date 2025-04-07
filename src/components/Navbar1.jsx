import React, { useState } from "react";
import { motion } from "framer-motion";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

const Navbar1 = () => {
    const [value, setValue] = useState(0); // Initial value set to 0 for "Home"

    return (
        <>
            <div className='w-full mt-0 flex bg-white justify-evenly'>
                <div className="logo ml-3">
                    <img src="public/images/logo/bigbyte-logo.png" alt="bigbyte-logo" className='w-40 h-20' />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl p-1 shadow-lg flex w-[40%] mb-3 mt-2 relative"
                >
                    <motion.div
                        className="absolute w-24 h-10 ml-9 bg-[white] rounded-lg flex items-center justify-center shadow-lg border-black border-2"
                        style={{ top: "9px" }}
                        animate={{ left: `${value * 25}%` }}
                        transition={{ type: "spring", stiffness: 100, damping: 12 }}
                    ></motion.div>
                    <BottomNavigation
                        sx={{ width: "100%", backgroundColor: "white", color: "white" }}
                        showLabels
                        value={value}
                        onChange={(event, newValue) => setValue(newValue)}
                    >
                        {["Home", "Services", "About", "Contact"].map((label, index) => (
                            <BottomNavigationAction
                                key={index}
                                label={
                                    <motion.span
                                        style={{
                                            fontSize: "18px",
                                            position: 'relative',
                                            padding: '5px',
                                            display: 'inline-block',
                                            borderRadius: '8px',
                                        }}
                                        whileHover={{ scale: 1.1 }}
                                        animate={{
                                            color: value === index ? "black" : "black",
                                            y: value === index ? -5 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className={`transition-all duration-300 text-black hover:text-black ${value === index ? '' : ''}`}
                                    >
                                        {label}
                                    </motion.span>
                                }
                                sx={{ '&:hover': { backgroundColor: 'transparent' } }} // Make background transparent on hover
                            />
                        ))}
                    </BottomNavigation>
                </motion.div>
                <div className="mr-5 p-4 bg-[white] rounded-2xl mt-2 mb-3">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="h-8 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>
            </div>
        </>
    );
}

export default Navbar1;