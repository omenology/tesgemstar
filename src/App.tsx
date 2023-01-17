import { useEffect, useState, Fragment } from "react";
import axios from "axios";

import { Card, TextField } from "@mui/material";

import { formatToCurrency, magintudeSymbol } from "./utils";

import BurgerIcon from "./assets/icons/BurgerIcon";
import CompanyLogo from "./assets/icons/CompanyLogo";
import DBSLogo from "./assets/icons/DBSLogo";
import MoreIcon from "./assets/icons/MoreIcon";
import ProudfootLogo from "./assets/icons/ProudfootLogo";
import RMILogo from "./assets/icons/RMILogo";
import Profilpict from "./assets/Profilepict";
import MaginfyIcon from "./assets/icons/MaginfyIcon";
import DashboardIcon from "./assets/icons/DashboardIcon";
import ApprovalIcon from "./assets/icons/ApprovalIcon";
import GearIcon from "./assets/icons/GearIcon";
import UserIcon from "./assets/icons/UserIcon";
import LogoutIcon from "./assets/icons/LogoutIcon";
import CrossIcon from "./assets/icons/CrossIcon";

function App() {
  const [data, setData] = useState<{ image: string; name: string; current_price: number; market_cap: number }[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&per_page=10")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="w-full bg-mainbg lg:flex lg:relative">
      <div className="sticky top-0 z-50 flex flex-col lg:min-w-[295px] lg:h-[100vh]">
        <div className="flex items-center bg-main h-[67px] ">
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-[58px] h-[58px] flex items-center justify-center border-r border-r-white hover:cursor-pointer hover:bg-[#1961a7] lg:hidden"
          >
            {isMenuOpen ? <CrossIcon /> : <BurgerIcon />}
          </div>
          <div className="grow flex items-center justify-center">
            <CompanyLogo />
          </div>
        </div>
        <div
          className={`w-[80%] max-w-[400px] h-[calc(100vh-67px)] bg-white absolute top-[67px] shadow-lg rounded-r-md lg:rounded-none flex flex-col p-[27px] transition-all ${
            isMenuOpen ? "" : "translate-x-[-100%]"
          } lg:translate-x-0 lg:w-full lg:relative lg:top-0`}
        >
          <div className="w-full flex flex-col items-center justify-center lg:items-start gap-3">
            <Profilpict />
            <div className="flex flex-col items-center lg:items-start gap-1">
              <h5 className="font-nunito font-bold text-[16px] text-blkfnt leading-[20px]">Radhika Dhawan Puri</h5>
              <p className="font-nunito font-normal text-[14px] text-blkfnt leading-[19px]">Senior Client Services</p>
            </div>
          </div>
          <hr className="border bg-dcdc border-dcdc rounded-full my-7 lg:hidden" />
          <div className="relative lg:hidden">
            <div className="absolute left-[12px] top-[10px]">
              <MaginfyIcon />
            </div>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              fullWidth
              placeholder="Search anything here..."
              inputProps={{
                style: { paddingLeft: "40px" },
              }}
            />
          </div>
          <hr className="border bg-dcdc border-dcdc rounded-full my-7" />
          <div className="overflow-y-auto h-[inherit]">
            <div className="flex flex-col gap-2">
              <p className="font-nunito font-normal text-[14px] text-blkfnt leading-[19px] tracking-widest">NAVIGATION</p>
              <div className="flex items-center justify-start gap-3">
                <DashboardIcon />
                <h5 className="font-nunito font-bold text-[16px] text-main leading-[20px]">Dashboard</h5>
              </div>
              <div className="flex items-center justify-start gap-3">
                <ApprovalIcon />
                <h5 className="font-nunito font-bold text-[16px] text-blkfnt hover:text-main leading-[20px]">Approvals</h5>
              </div>
            </div>
            <hr className="border bg-dcdc border-dcdc rounded-full my-7" />
            <div className="flex flex-col gap-2">
              <p className="font-nunito font-normal text-[14px] text-blkfnt leading-[19px] tracking-widest">MY ACCOUNT</p>
              <div className="flex items-center justify-start gap-3 ml-[-2px]">
                <UserIcon />
                <h5 className="font-nunito font-bold text-[16px] text-blkfnt hover:text-main leading-[20px] ">My clients</h5>
              </div>
              <div className="flex items-center justify-start gap-3">
                <GearIcon />
                <h5 className="font-nunito font-bold text-[16px] text-blkfnt hover:text-main leading-[20px]">Edit profiles</h5>
              </div>
            </div>
            <div className="flex items-center justify-start gap-3 mt-10 lg:hidden">
              <LogoutIcon />
              <h5 className="font-nunito font-bold text-[16px] text-red-500 leading-[20px]">Logout</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="p-[30px] lg:pt-0 max-w-[490px] m-auto lg:max-w-none">
        <div className="hidden lg:flex px-5 gap-2 items-center h-[65px] w-[clac(100%+30px)] bg-white mx-[-30px] mb-7">
          <div className="relative grow">
            <div className="absolute left-[12px] top-[10px]">
              <MaginfyIcon />
            </div>
            <input type="text" placeholder="Search anything here..." className="h-[40px] w-full pl-[40px] focus:outline-none" />
          </div>
          <div className="flex items-center justify-start gap-3">
            <LogoutIcon />
            <h5 className="font-nunito font-bold text-[16px] text-red-500 leading-[20px]">Logout</h5>
          </div>
          <div className="w-[58px] h-[58px] flex items-center justify-center rounded-md hover:cursor-pointer hover:bg-gray-50">
            <BurgerIcon color="black" />
          </div>
        </div>
        <h3 className="font-nunito font-bold text-[28px] text-blkfnt leading-[29px] w-[205px] lg:w-fit">Hi Radhika, welcome back!</h3>
        <hr className="border bg-blkfnt border-blkfnt rounded-full my-7 lg:bg-transparent lg:border-transparent" />
        <div className="flex flex-col mb-3">
          <h4 className="font-nunito font-bold text-[20px] text-blkfnt leading-[27px]">Your client list</h4>
          <p className="font-nunito font-normal text-[14px] text-blkfnt leading-[19px]">You currently servicing 3 clients</p>
        </div>
        <div className="flex flex-col gap-4 mb-7 lg:mb-20 lg:grid lg:grid-cols-3 xl:grid-cols-4">
          <Card className="p-5 relative flex flex-col gap-5">
            <div className="absolute top-2 right-3 w-[25px] h-[25px] flex items-center justify-center rounded-md hover:cursor-pointer hover:bg-gray-100">
              <MoreIcon />
            </div>
            <DBSLogo />
            <h5 className="font-nunito font-bold text-[16px] text-blkfnt leading-[20px]">DBS Bank</h5>
            <p className="font-nunito font-normal text-[11px] text-blkfnt leading-[15px]">
              DBS Bank Limited is a Singaporean multinational banking and financial services corporation headquartered at the Marina Bay Financial
              Centre in the Marina Bay district of Singapore.
            </p>
          </Card>
          <Card className="p-5 relative flex flex-col gap-5">
            <div className="absolute top-2 right-3 w-[25px] h-[25px] flex items-center justify-center rounded-md hover:cursor-pointer hover:bg-gray-100">
              <MoreIcon />
            </div>
            <ProudfootLogo />
            <h5 className="font-nunito font-bold text-[16px] text-blkfnt leading-[20px]">Proudfoot</h5>
            <p className="font-nunito font-normal text-[11px] text-blkfnt leading-[15px]">
              Proudfoot engages teams and leadership, at all levels, to create innovative solutions to operational constraints and solve the people
              challenge associated with making sure that change takes place.
            </p>
          </Card>
          <Card className="p-5 relative flex flex-col gap-5">
            <div className="absolute top-2 right-3 w-[25px] h-[25px] flex items-center justify-center rounded-md hover:cursor-pointer hover:bg-gray-100">
              <MoreIcon />
            </div>
            <RMILogo />
            <h5 className="font-nunito font-bold text-[16px] text-blkfnt leading-[20px]">DBS Bank</h5>
            <p className="font-nunito font-normal text-[11px] text-blkfnt leading-[15px]">
              DBS Bank Limited is a Singaporean multinational banking and financial services corporation headquartered at the Marina Bay Financial
              Centre in the Marina Bay district of Singapore.
            </p>
          </Card>
        </div>
        <div className="flex flex-col mb-3">
          <h4 className="font-nunito font-bold text-[20px] text-blkfnt leading-[27px]">Crypto Price</h4>
          <p className="font-nunito font-normal text-[14px] text-blkfnt leading-[19px]">You can find the recent crypto price here</p>
        </div>
        <div className="bg-white p-3 rounded-md shadow-sm lg:shadow-none lg:bg-transparent">
          <div className="grid grid-cols-3 gap-y-3">
            <div className="col-span-full flex p-3 lg:grid lg:grid-cols-3 lg:bg-white lg:rounded-md lg:shadow-sm ">
              <div className="flex items-center justify-start px-2">
                <p className="font-nunito font-semibold text-[16px] text-blkfnt leading-[122%]">Currency</p>
              </div>
              <div className="flex items-center justify-center grow">
                <p className="font-nunito font-semibold text-[16px] text-blkfnt leading-[122%]">Current Price</p>
              </div>
              <div className="flex items-center justify-center grow">
                <p className="font-nunito font-semibold text-[16px] text-blkfnt leading-[122%]">Market Cap</p>
              </div>
            </div>
            <hr className="col-span-full border bg-blkfnt border-blkfnt rounded-full lg:hidden" />
            {data.map((item, index) => (
              <Fragment key={index}>
                <div className="flex items-center gap-2 py-3 lg:px-3 lg:rounded-l-md lg:bg-white lg:shadow-sm">
                  <div className="w-[35px] h-[35px] flex items-center justify-center">
                    <img alt={item.name} src={item.image} />
                  </div>
                  <p className="font-nunito font-bold text-[14px] text-blkfnt leading-[122%] line-clamp-1 break-all">{item.name}</p>
                </div>
                <div className="flex items-center justify-center lg:bg-white lg:shadow-sm">
                  <p className="hidden font-nunito text-[12px] text-blkfnt leading-[16px] lg:block">{formatToCurrency(item.current_price, 15)}</p>
                  <p className="font-nunito text-[12px] text-blkfnt leading-[16px] lg:hidden">
                    {formatToCurrency(item.current_price).slice(0, 7) + magintudeSymbol(item.current_price)}
                  </p>
                </div>
                <div className="flex items-center justify-center lg:rounded-r-md lg:bg-white lg:shadow-sm">
                  <p className="hidden font-nunito text-[12px] text-blkfnt leading-[16px] lg:block">{formatToCurrency(item.market_cap, 15)}</p>
                  <p className="font-nunito text-[12px] text-blkfnt leading-[16px] lg:hidden">
                    {formatToCurrency(item.market_cap).slice(0, 7) + magintudeSymbol(item.market_cap)}
                  </p>
                </div>
                <hr className="col-span-full border bg-dcdc border-dcdc rounded-full lg:hidden" />
              </Fragment>
            ))}
          </div>
        </div>
        <div className="flex justify-center lg:justify-end items-center mt-10">
          <p className="font-nunito text-[14px] text-blkfnt leading-[19px]">© Manning&Co. 2022</p>
        </div>
      </div>
    </div>
  );
}

export default App;
