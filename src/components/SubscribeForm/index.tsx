
import Button from "../Button"
const SubscribeForm = () => {
  return (
    <div className="relative h-16 w-96 ">
    <input className=" px-2 w-full h-full rounded-md border" placeholder="Your email address..."></input>
    <div className="absolute top-3 right-2"> <Button  theme="filled" text="Subscribe Now"></Button></div>
    </div>
  )
}

export default SubscribeForm