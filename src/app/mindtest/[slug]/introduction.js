'use client'

import Q from "@/../api/questionnaires.json"
import { memo } from "react"

function Introduction({ type })  {
  const tool = Q[type]

  return (
    <div className="mb-14">
      <h1 className="text-2xl mb-2">{ tool.name }</h1>
      <p className="text-lg opacity-90">{ tool.content }</p>
      <ul className="ml-6 list-disc text-lg opacity-90">
        <li>Số câu: { tool.number } câu</li>
        <li>Thời gian: { tool.time } phút</li>
      </ul>
    </div>
  )
}

export default memo(Introduction)