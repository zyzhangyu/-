import React, {useState} from "react";

interface Links {
  label: string;
  selected?: boolean;
  icon?: JSX.Element;
  notifications?: number;
}

interface Props {
  headerText?: string;
  headerImg?: string;
  withBorder?: boolean;
  links: Links[];
  bottomLink?: { label: string; icon?: JSX.Element; link?: string };
  withDivider?: boolean;
}

const Sidebar = (props: Props) => {
  // undefined = false
  // !undefined = true
  // !!undefined = false
  const withHeader = !!props.headerText || props.headerImg;
  const [refresh, setRefresh] = useState(0);


  return (
    // relatice会保证他继续占有他原应有的空间
    <div className="relative bg-white dark:bg-gray-800">
      <div className="flex flex-col">
        <div className="w-72 h-screen">
          {withHeader && (
            <div className="flex justify-start items-center mx-6 mt-10">
              {props.headerImg && (
                <img className="h-10" src="/icons/rocket.svg" />
              )}
              {props.headerText && (
                <span
                  className={`text-gray-600 dark:text-gray-300 ml-4 text-2xl font-bold`}
                >
                  {props.headerText}
                </span>
              )}
            </div>
          )}

          <nav
            className={`mt-10 px-6 ${
              props.withDivider ? "divide-y divide-gray-200" : ""
            }`}
          >
            {props.links.map((link, index) => {
              return (
                <a
                  className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors duration=200 ${
                    props.withBorder && link.selected
                      ? "border-r-2 border-gray-600"
                      : ""
                  } ${
                    // link.selected
                    index == refresh
                      ? "text-gray-800 dark:text-gray-100"
                      : "text-gray-600 dark:text-gray-400"
                  } ${props.withBorder ? "bg-gray-100" : ""}`}
                  href="#"
                  onClick={()=>{
                      link.selected = true
                      console.log("hohoho")
                      setRefresh(index)
                  }}
                  key={link.label}
                >
                  <div
                    className={`w-7 h-7 flex items-center justify-center ${
                    //   link.selected
                    refresh == index
                        ? " bg-blue-500 rounded-t-md rounded-b-md "
                        : "bg-gray-200 rounded-t-md rounded-b-md"
                    }`}
                  >
                    {link.icon}
                  </div>

                  <span className="mx-4 text-lg font-normal">
                    {" "}
                    {link.label}{" "}
                  </span>
                  <span className="flex-grow text-right">
                    {link.notifications && (
                      <div className="rounded-2xl bg-blue-500 w-2 h-2 float-right"></div>
                    )}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
