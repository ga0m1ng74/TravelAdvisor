import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    // <AppBar position="static" className="h-18">
    //   <Toolbar className='flex justify-between'>
    //     <Typography variant="h5" className='hidden md:block '>
    //       Travel Advisor
    //     </Typography>
    //     <Box display="flex">
    //       <div className="hidden md:block">
    //         <h6 className="w-40">Explore new places</h6>
    //       </div>
    //       {/* <Autocomplete> */}
    //         <div className='relative rounded-xl bg-cyan-100 hover:bg-cyan-200 mr-10 ml-0 w-full'>
    //           <div className='py-2 h-full absolute flex align-middle justify-center'>
    //             <SearchIcon />
    //           </div>
    //           <input type="text" placeholder="Search ..." className="absolute ml-2 rounded-xl"/>
    //         </div>

    //         <div>

    //         </div>
    //       {/* </Autocomplete> */}
    //     </Box>
    //   </Toolbar>
    // </AppBar>
    <div className="w-full bg-blue-500 h-16 flex justify-between items-center">
      <div>
        <h5 className=" text-white ml-8 text-2xl font-bold hidden md:block ">
          Travel Advistor
        </h5>
      </div>
      <div className="flex mr-8">
        <h6 className="text-white mr-4 hidden md:block font-bold">
          Explore new places
        </h6>
        <div className="flex items-center">
          <div className=''>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className=" text-slate-600 rounded-sm border-none bg-blue-300 focus:bg-blue-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
