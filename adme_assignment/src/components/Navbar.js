import React from "react";

export default function Navbar() {
  return (
    <nav class="navbar bg-body-tertiary border border-dark p-4">
      <div class=" d-flex  align-items-center w-100">
          <div class="border border-dark w-20 px-4 p-2">
            <span>Logo</span>
          </div>
          <div class="w-100  d-flex justify-content-center">
            <div class="w-50 border border-dark px-4">
              <span class="max-w-50">
                set-title
              </span>
            </div>
          </div>
         
        </div>
    </nav>
  );
}
