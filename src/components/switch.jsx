"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "../utils/cn"


const Switch = React.forwardRef((props, ref) => {
  const { className, ...rest } = props

  return (
    <SwitchPrimitives.Root
      ref={ref}
      className={cn(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-black data-[state=checked]:dark:bg-white data-[state=unchecked]:dark:bg-zinc-700 data-[state=unchecked]:bg-zinc-300",
        className
      )}
      {...rest}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "bg-white dark:bg-black pointer-events-none block h-4 w-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitives.Root>
  )
})

Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
