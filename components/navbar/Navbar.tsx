import React, { ReactElement } from "react";
import Icon from "@mdi/react"
import PrimaryButton from "../resources/buttons/PrimaryButton";
import { mdiAccount } from '@mdi/js'

interface Props {}

export default function Navbar({}: Props): ReactElement {
  return (
    <div className="flex justify-center space-x-4 text-white mt-4">
      <PrimaryButton icon={<Icon path={mdiAccount} size={0.8} className="ml-1"></Icon>} text color="white" 
      className="text-sm hover:bg-white hover:bg-opacity-10">INICIAR</PrimaryButton>{" "}
      <PrimaryButton text color="white" className="text-sm hover:bg-white hover:bg-opacity-10"
      icon={<Icon path={mdiAccount} size={0.8} className="ml-1"></Icon>}>ACERCA</PrimaryButton>
    </div>
  );
}
