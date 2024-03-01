import React, { useEffect } from "react";

const SocialMedia = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.type = "text/javascript";
    script.dataset.pinbuild = "doBuild";
    script.src = "//assets.pinterest.com/js/pinit.js";
    document.body.appendChild(script);
    if (window.doBuild) window.doBuild();
  }, []);

  const pinterestLinks = [
    "https://hu.pinterest.com/pin/1057571924984730732/",
    "https://hu.pinterest.com/pin/1057571924984012259/",
    "https://hu.pinterest.com/pin/1057571924978610076/",
    "https://hu.pinterest.com/pin/635500197444466159/",
    "https://hu.pinterest.com/pin/1036531670466535962/",
  ];

  return (
    <div className="text-center font-medium text-xl py-2">
      <div>2024 is the year of the Olympics!</div>
      <div>
        Hungarians were always good at swimming! Check out some cool pictures!
      </div>
      <div className="flex flex-wrap justify-center pt-4">
        {pinterestLinks.map((item, index) => (
          <div className="p-2">
            <a key={index} href={item} data-pin-do="embedPin" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
