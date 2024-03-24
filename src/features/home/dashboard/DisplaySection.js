import { useLottie } from "lottie-react";
import developerAnimation from "../../../assets/animation.json";

const DisplaySection = () => {

  const { View } = useLottie({
    animationData: developerAnimation,
    loop: true
  });
  return (
    <div className='grid grid-cols-2 sm:grid-cols-1 items-center bg-black text-white py-4'>

      <div className="animation">
        {View}
        {/* <dotlottie-player src="https://lottie.host/24590414-81cb-4e76-9ff9-154aa1cca69d/sUoD2tUtFl.json" background="transparent" speed="1" loop autoplay></dotlottie-player> */}

      </div>

      <div className="dis-info sm:px-6">
        <h1>Hi, I am John</h1>
        <p className='italic text-orange-600'>Some Dev, Freelancer, Rounder</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum perferendis quas quo nam numquam, id sequi maiores officiis amet debitis velit obcaecati rerum nemo nisi quia corporis, vel assumenda veniam est temporibus vitae. Sit sapiente sunt ex ad aut vel eos ab eveniet ipsum fuga nulla quia at, omnis itaque.</p>
      </div>

    </div>
  )
}

export default DisplaySection