"use client"

import { normalizeProps, useMachine } from "@zag-js/react"
import * as tooltip from "@zag-js/tooltip"

export function Tooltip({
  closeOnClick,
  closeOnPointerDown
}: { closeOnClick: boolean, closeOnPointerDown: boolean }) {
  const service = useMachine(tooltip.machine, { id: "1", closeOnClick, closeOnPointerDown })

  const api = tooltip.connect(service, normalizeProps)

  return (
    <div>
      <button {...api.getTriggerProps()}>Hover me</button>
      {api.open && (
        <div {...api.getPositionerProps()}>
          <div {...api.getContentProps()}>Tooltip</div>
        </div>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <main>
      {/* work */}
      <Tooltip closeOnClick={false} closeOnPointerDown={false} />

      {/* not work */}
      <Tooltip closeOnClick={true} closeOnPointerDown={false} />

      {/* not work */}
      <Tooltip closeOnClick={false} closeOnPointerDown={true} />
    </main>
  );
}
