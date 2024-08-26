import React, { useState } from 'react';

function RadioKnopka() {
    const [checked, setChecked] = useState(true);
   
   let msg;
   if(checked){
      msg = <span>галочка есть</span>
   }else{
      msg = <span>галочки нет</span>
   }

   return <div>
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
      <span>{msg}</span>
   </div>;
}

export default RadioKnopka;