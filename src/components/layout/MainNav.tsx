import { Navbar, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { globalAction } from "../../store/global-slice";

export default function MainNav() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Navbar className="mx-auto max-w-full py-2 px-4 lg:px-8 lg:py-4 bg-gradient-to-br from-cyan-200">
      <div className="container mx-auto flex items-center text-blue-gray-900 justify-between ">
        <FontAwesomeIcon
          icon={faBars}
          className={`cursor-pointer  sm:hidden`}
          onClick={() => dispatch(globalAction.openSlice())}
        />
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal  "
        >
          <span className="text-xl font-bold text-gray-800">YHONIMARD</span>
        </Typography>
      </div>
    </Navbar>
  );
}
