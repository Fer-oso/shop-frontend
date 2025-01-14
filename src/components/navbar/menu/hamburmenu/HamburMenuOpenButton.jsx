import { Bars3Icon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { HamburMenu } from './HamburMenu';

export const HamburMenuOpenButton = ({routes}) => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon aria-hidden="true" className="size-6" />
      </button>

      <HamburMenu routes={routes} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </div>
  );
}
