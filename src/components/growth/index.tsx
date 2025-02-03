import React from 'react'

type Props = {
    data: string
}

export const Growth = (props: Props) => {
  return (
    <div>
        <div className="text-green-700 text-xs flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 15 15"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M7.146 2.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L8 3.707V12.5a.5.5 0 0 1-1 0V3.707L3.854 6.854a.5.5 0 1 1-.708-.708z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-[0.6rem] lg:text-[0.6rem]">{props.data}% in 30 days</p>
        </div>
    </div>
  )
}