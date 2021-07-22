import Head from "next/head";
import Layout from "../components/layout/Layout";
import CardLayout from "../components/resources/card/CardLayout";
import CardTitle from "../components/resources/card/CardTitle";
import CardText from "../components/resources/card/CardText";
import Icon from "@mdi/react";
import { mdiBookOpenPageVariant } from "@mdi/js";

export default function about() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Layout>
        <main className="text-center">
          <div className="mt-10">
            <h1 className="mb-4">Acerca</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates tempore nemo eaque ipsum delectus maxime quidem
              assumenda inventore ut repellat amet harum dolorum, doloremque
              laudantium molestiae totam fugiat ipsa quae.
            </p>
          </div>
          <h1 className="mt-6 mb-4">What this can do?</h1>
          <div className="space-y-2">
            {[1, 2, 3, 4].map((el) => (
              <CardLayout key={el}>
                <CardTitle
                  icon={
                    <Icon
                      path={mdiBookOpenPageVariant}
                      className="text-gray-700"
                      size={1}
                    ></Icon>
                  }
                >Animales en peligro</CardTitle>
                <CardText>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                  temporibus quod odio quos possimus. Nam, fugit? Itaque ad
                  repellendus voluptatibus.
                </CardText>
              </CardLayout>
            ))}
          </div>
        </main>
      </Layout>
    </div>
  );
}
