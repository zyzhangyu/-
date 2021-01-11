import React from "react";
import {parseISO, format} from 'date-fns';


interface Props {
    dateString: string;    
}

const DateFC = (props: Props) => {
    const date = parseISO(props.dateString)
    return (
        <>
            {/* // 其他字符串格式化选项 https://date-fns.org/v2.16.1/docs/format */}
            <time dateTime={props.dateString}>{format(date, 'LLLL d,  yyyy, p')}</time> 
        </>
    )
}

export default DateFC;