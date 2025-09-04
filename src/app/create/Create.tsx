"use client"

import * as React from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Create</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogDescription className="text-center">
              What do you want to create?
            </DialogDescription>
          </DialogHeader>
          {/* pass setOpen */}
          <Buttons closeDialog={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>Create</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerDescription>
            What do you want to create?
          </DrawerDescription>
        </DrawerHeader>
        {/* pass setOpen */}
        <Buttons closeDialog={() => setOpen(false)} className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

interface ButtonsProps {
  closeDialog: () => void
  className?: string
}

function Buttons({ closeDialog, className }: ButtonsProps) {
  return (
    <div className={`btns grid grid-cols-2 gap-2 text-center space-y-5 ${className ?? ""}`}>
      <NavLink to="/client" onClick={closeDialog}>
        <Button className="w-full cursor-pointer" variant="outline">Client</Button>
      </NavLink>
      <NavLink to="/booking" onClick={closeDialog}>
        <Button className="w-full cursor-pointer" variant="outline">Booking</Button>
      </NavLink>
      <NavLink to="/quotes" onClick={closeDialog}>
        <Button className="w-full cursor-pointer" variant="outline">Quotes</Button>
      </NavLink>
      <NavLink to="/invoice" onClick={closeDialog}>
        <Button className="w-full cursor-pointer" variant="outline">Invoice</Button>
      </NavLink>
    </div>
  )
}

export default DrawerDialogDemo
