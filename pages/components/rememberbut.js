import Switch from 'react-switch';
import React, { useState } from 'react';

export function RememberBut() {
  const [isPublic, setIsPublic] = useState(false);

  return (
    <div className="flex items-center gap-2 mt-2">
            <Switch checked={isPublic} onChange={(checked) => setIsPublic(checked)} className="" />
            {' '}
            <span className="text-neutral-50 text-base font-semibold">Remember Me</span>
          </div>
  )
}