import React from "react";
import { Icon } from "@iconify/react";
import ImageSlider from "./ImageSlider";

const StayCard = ({ space = {} }) => {
  console.log(space);
  const {
    images = [],
    name = "Unnamed Space",
    type = "Unknown Type",
    capacity = "N/A",
    address = {},
    pricing = [],
    property = {},
    distance = 0,
    slug = "",
  } = space;

  const currentImage = images[0] || "/default-image.jpg";
  const openTime = property.openingHours?.[0]?.openTime || "9:00 AM";
  const closeTime = property.openingHours?.[0]?.closeTime || "8:30 PM";
  const formattedAddress =
    address.area && address.city
      ? `${address.area}, ${address.city}`
      : "Address not available";
  const priceInfo = pricing[0] || {
    price: 0,
    currency: "INR",
    duration: "hour",
  };

  const href = (type, slug) => {
    let prefix = "";

    switch (type) {
      case "MEETING_ROOMS":
        prefix = "meeting-rooms";
        break;
      case "HOT_DESK":
        prefix = "hot-desk";
        break;
      case "CABINS":
        prefix = "private-office";
        break;
      default:
        prefix = "property"; // Default case if type doesn't match
    }

    return `https://desklinq.com/${prefix}/${slug}`;
  };

  const formatCurrency = (price, currency) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency,
    }).format(price);

  return (
    <div className="relative  shrink-0 bg-white rounded-lg shadow-sm group w-[240px]  hover:shadow-md cursor-pointer ">
      {/* Image Section */}
      <div className="relative ">
        <ImageSlider images={images} />
        <span className="absolute px-2 py-1 text-xs font-bold text-white bg-white bg-opacity-50 shadow bottom-6 right-2">
          {distance.toFixed(2)} m away
        </span>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Type and Capacity */}
        <div className="pt-2 mb-2 text-xs text-neutral-500">
          {type} · {capacity} capacity
        </div>

        {/* Name */}
        <h2 className="text-base font-semibold truncate text-neutral-900">
          {name}
        </h2>

        {/* Address */}
        <div className="flex items-center mt-2 text-sm text-neutral-500">
          <Icon icon="bx:map" className="mr-2" width="20" />
          <span className="text-xs">{formattedAddress}</span>
        </div>

        {/* Timings */}
        <div className="flex items-center mt-2 text-sm text-neutral-500">
          <Icon icon="iconamoon:clock" className="mr-2" width="20" />
          <span className="text-xs">
            {openTime} - {closeTime}
          </span>
        </div>

        {/* Divider */}
        <div className="my-3 border-b w-[30%]"></div>

        {/* Pricing and Action */}
        <div className="flex items-center justify-between">
          <div className="text-sm font-bold text-black">
            {formatCurrency(priceInfo.price, priceInfo.currency)}
            <span className="text-xs ">
              / {priceInfo.duration.toLowerCase()}
            </span>
          </div>
          <a
            href={href(type, slug)} // Call href function with `type` and `slug`
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice
            className="text-[#4A25E1]  
  text-sm font-bold flex items-center gap-1"
          >
           <span className="underline">Book Now
            </span> 
            <Icon icon="bi:arrow-right" width="16" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
