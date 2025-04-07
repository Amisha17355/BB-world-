import React from 'react'
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home, AccessTime, PieChart, Person } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
    const [value, setValue] = useState(0);

    return (
      <div className=" bg-black fixed bottom-0 w-full flex justify-center p-4 ">
        <motion.div
          className="bg-black rounded-2xl p-2 shadow-lg flex"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            className="!bg-black"
          >
            {[Home, AccessTime, PieChart, Person].map((Icon, index) => (
              <BottomNavigationAction
                sx={{ backgroundColor: "black" }}
                key={index}
                label={index === value ? "" : null}
                icon={
                  <motion.div
                    animate={{
                      y: index === value ? -10 : 0,
                      backgroundColor: index === value ? "#00FF00" : "transparent",
                      borderRadius: "50%",
                      padding: index === value ? "10px" : "0px",
                    }}
                  >
                    <Icon style={{ color: "white" }} />
                  </motion.div>
                }
              />
            ))}
          </BottomNavigation>
        </motion.div>
      </div>
    );
}

export default Navbar
