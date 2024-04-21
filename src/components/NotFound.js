import React from "react";
import { Button } from "@material-tailwind/react";
function NotFound() {
  return (
    <div className="flex lg:flex-col md:flex-col items-center sm:flex-col pt-24 bottom-0 place-items-center mx-auto px-4 font-droidserif justify-center min-h-screen ">
      <div className="flex flex-col items-center justify-center mb-12">
        <p>Sorry, the page you are looking for does not exist.</p>
        <br />
        <div className="flex justify-center">
        <a href="/" className="w-full items-center">
          <Button color="brown" className="rounded-full">
            Back to home
          </Button>
        </a>
        </div>
        
      </div>
    </div>
  );
}
export default NotFound;
