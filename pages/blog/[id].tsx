import React, { ReactElement } from "react";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import Card from "../../components/resources/card/CardLayout";
import CardTitle from "../../components/resources/card/CardTitle";
import CardText from "../../components/resources/card/CardText";

interface Props {}

function blogView({}: Props): ReactElement {
  return (
    <Layout>
      <Card className="mt-14">
          <div>
          <input type="radio" className="rounded text-pink-500" />
          </div>
        <div className="mb-6">
          <img
            className="w-full rounded-lg shadow-2xl"
            src="https://i.ytimg.com/vi/0n5ehD9z4Qs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD3w24klLMcYgjsMJGw4iZDJi3fJQ"
          ></img>
        </div>
        <div className="mb-5">
          <h1 className="text-black text-2xl">Hola qué tal</h1>
          <CardTitle subtitle="Biología"></CardTitle>
        </div>
        <CardText>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugit
            repellendus excepturi quia, natus omnis sit ab illo aut velit qui
            veniam, quos eius ex iusto cupiditate veritatis. Sequi, magni?
          </p>
        </CardText>
      </Card>
    </Layout>
  );
}

export default blogView;
