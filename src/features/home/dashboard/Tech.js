import { DiAndroid, DiApple, DiChrome, DiCss3, DiGit, DiNodejs, DiPython, DiReact } from "react-icons/di";

const Tech = () => {
  return (
    <div className="my-9 space-y-5">

      <h1 className="text-center font-semibold text-3xl">Technologies I Use</h1>



      <div className=" grid grid-cols-auto-fit place-items-center">

        <DiAndroid className="hover:scale-125" size={150} />
        <DiGit className="hover:scale-125" size={150} />
        <DiCss3 className="hover:scale-125" size={150} />
        <DiChrome className="hover:scale-150 transition-all duration-300 ease-in-out hover:text-red-600 cursor-pointer " size={150} />
        <DiReact className=" animate-spin" size={150} />
        <DiNodejs className="hover:scale-125" size={150} />
        <DiPython className="hover:scale-125" size={150} />
        <DiApple className="hover:scale-125 hover:text-blue-500 " size={150} />


      </div>
    </div>
  )
}

export default Tech