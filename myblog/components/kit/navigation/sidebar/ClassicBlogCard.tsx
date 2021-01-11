import React, {FC} from "react";
import DateFC from "../../../common/DateFC";

const ClassicBlogCard: FC = () => {

    return (
        <div className={`flex bg-white  rounded-lg shadow h-44`}>
            {/* 图片 */}
            <div className="flex-none w-48 relative">
                <img src="/images/object/8.jpg" alt="blog image" 
                className="absolute rounded-lg  inset-0 w-full h-full object-cover    "/>

            </div>

            {/* 数列 文字 */}
            <div className="flex-auto p-6 w-80">
                <div className="flex flex-wrap">

                    <h4 className="flex-auto text-xs font-medium ">
                        Architecture
                    </h4>

                    <div>
                    <h2 className="flex-auto text-xl font-semibold ">
                        Ground breaking building is a classic example of English architecuture
                    </h2>
                    </div>


                    <div>
                    <DateFC dateString={ '2020-01-01 08:43' }></DateFC>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ClassicBlogCard;