import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
export default function MainServices() {
  return (
    <div className="w-11/12 mx-auto  my-28 ">
      <div className="flex bg-inherit  justify-center uppercase  px-4  text-xl sm:text-3xl font-semibold tracking-wider my-10 text-custom3 dark:text-gray-100">
        <div className="">Our Main Services</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  my-28 p-6">
        <div className="flex  flex-col  items-center text-custom1 dark:text-gray-200 sm:border-r my-2 py-4 ">
          <LocalShippingOutlinedIcon
            sx={{ color: "inherit", fontSize: "50px" }}
          />
          <p className="text-lg">Free Delivery</p>
          <p className="text-sm text-custom3 dark:text-inherit">
            Free Shipping on all order
          </p>
        </div>
        <div className="flex flex-col  items-center text-custom1 dark:text-gray-200  md:border-r my-2 py-4 ">
          <CachedOutlinedIcon sx={{ color: "inherit", fontSize: "50px" }} />
          <p className="text-lg">Return Policy</p>
          <p className="text-sm text-custom3 dark:text-inherit">
            Return the Order
          </p>
        </div>
        <div className="flex  flex-col  items-center text-custom1 dark:text-gray-200  sm:border-r my-2 py-4 ">
          <SupportAgentOutlinedIcon
            sx={{ color: "inherit", fontSize: "50px" }}
          />
          <p className="text-lg">24/7 Support</p>
          <p className="text-sm text-custom3 dark:text-inherit">
            We all time here for you
          </p>
        </div>
        <div className="flex flex-col items-center text-custom1 dark:text-gray-200  py-4">
          <DoneOutlinedIcon sx={{ color: "inherit", fontSize: "50px" }} />
          <p className="text-lg">Product Quality</p>
          <p className="text-sm text-custom3 dark:text-inherit">
            we guarantee our quality
          </p>
        </div>
      </div>
    </div>
  );
}
