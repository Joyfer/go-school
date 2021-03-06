import React, { ReactElement } from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import CardLayout from "../components/resources/card/CardLayout";
import CardTitle from "../components/resources/card/CardTitle";
import CardText from "../components/resources/card/CardText";
import CardActions from "../components/resources/card/CardActions";
import Badge from "../components/resources/badge/Badge";

import Icon from "@mdi/react";
import { mdiSubdirectoryArrowRight } from "@mdi/js";

const LinkCard = React.forwardRef(
  ({ onClick, href, children }: any, ref: any) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        {children}
      </a>
    );
  }
);

export default function welcome(): ReactElement {
  return (
    <Layout>
      <div className="text-center mt-10">
        <h1 className="mb-4">¬°BIENVENIDO!</h1>
        <p>
         Tienes 3 tares nuevas y 3 blogs por leer.
        </p>
      </div>
      <div className="mt-6 space-y-2">
        {["Tareas", "Blogs"].map((el) => (
          <CardLayout key={el}>
            <Link href="/about" passHref>
              <LinkCard>
                <CardTitle>{el}</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quasi eos adipisci nobis velit.
                </CardText>
                <CardActions>
                  <div>
                    <Badge color="error">3</Badge>
                  </div>
                  <Icon path={mdiSubdirectoryArrowRight} size={1.2}>
                    hola
                  </Icon>
                </CardActions>
              </LinkCard>
            </Link>
          </CardLayout>
        ))}
      </div>
    </Layout>
  );
}
