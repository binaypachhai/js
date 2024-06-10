import React from 'react'

const Display = () => {
  return (
    <div className='grid grid-cols-3 py-4  bg-black'>

      <div>
        <dotlottie-player src="https://lottie.host/39a7a20f-b099-4f4b-bb6b-ff97bdcee700/Sm0t5wTqYL.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
      </div>

      <div className='col-span-2 text-white'>
        <h1 className='text-2xl'>INFO</h1>
        <p>Hello I am a JS developer.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius blanditiis fuga iste optio, reprehenderit inventore eum! Fuga vel culpa dicta quos nisi, autem aperiam dolores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint aspernatur quibusdam cupiditate odit ab eum at commodi, doloremque corporis eos consequuntur dignissimos vel autem ducimus cumque recusandae aliquid sed quasi quo velit blanditiis excepturi? Vitae quae aliquid dolores? Nobis consectetur illum cum exercitationem dolorem repellat consequatur soluta! Odit, ad. Dolores?</p>
      </div>

    </div>
  )
}

export default Display