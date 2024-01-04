import React from 'react'
import Logo from './logo';

export default function Email() {
  return (
    <>
<div className='d-flex justify-content-center align-items-center py-5' style={{backgroundColor:"#386040"}}>
<Logo/>

</div>
<div className='px-3'>
   <div className='mt-4 mb-1'>
  <big>

     <b>Hey, </b> 
    
    </big>
    </div> 
    <br />
    You logged in to your Cargenie account on 
    <div className='my-5'>
    Need help? Contact our support team or get in touch on Twitter <a style={{textDecoration:"none"}} href="https://mycargenie.herokuapp.com/">@cargenie. </a> 
Want to give us feedback? Let us know what you think on our feedback site.
    </div>
</div>
<div className='py-3 text-center bg-muted' style={{backgroundColor:"#f8f9fa"}}>

Sent by Cargenie • Check Our website • <a style={{textDecoration:"none"}} href="https://mycargenie.herokuapp.com/">@cargenie</a> 
<br />
1 Ajetumobi Street, Ajah, Lagos, Ng


</div>
    </>
  )
}
