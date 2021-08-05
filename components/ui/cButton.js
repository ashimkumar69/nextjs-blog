// react
import React from "react";
// next
import Link from "next/link";
// material
import { Button } from "@material-ui/core";

function CButton(props) {
  const childProps = { ...props };
  const componentas = childProps.componentas;
  delete childProps.componentas;

  switch (componentas) {
    case "button":
      return <Button {...childProps}>{childProps.children}</Button>;
    case "a":
      return (
        <Link href={props.href}>
          <a {...childProps}>{childProps.children}</a>
        </Link>
      );

    default:
      return <Button {...childProps}>{childProps.children}</Button>;
  }
}

export default CButton;
