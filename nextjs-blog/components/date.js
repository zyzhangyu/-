import {parseISO, format } from 'date-fns';

export default function Date({dateString}) {

    const date = parseISO(dateString)
    // 其他字符串格式化选项 https://date-fns.org/v2.16.1/docs/format
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
} 