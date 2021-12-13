import logo from '../../../logo/logo.svg';
import "./topbar.css";

export const Topbar = (props) => {
return (
  <div className="topbar p-3 flex flex-row justify-between">
    <div className="logo">
      <img src={logo} width={200} className={'rounded-xl'}></img>
    </div>

    <div className="order-last">
      <div className="flex flex-row items-center">
        <div className="px-3 cursor-pointer hover:text-rose-800">Home</div>
        <div className="px-3 cursor-pointer hover:text-rose-800">Profile</div>
        <div className="px-3 cursor-pointer hover:text-rose-800">Pricing</div>
        <div className="px-3 cursor-pointer hover:text-rose-800">Contact us</div>
        <div className="px-3 cursor-pointer bg-rose-600 text-white p-2 rounded-lg">Changelog</div>
      </div>
    </div>
  </div>
)
}