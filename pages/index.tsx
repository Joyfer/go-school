import Head from "next/head";
import Layout from "../components/layout/Layout";
import PrimaryButton from "../components/resources/buttons/PrimaryButton";
import TextInput from "../components/resources/inputs/TextInput";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="h-screen flex items-center justify-center flex-col">
          <div className="text-center mb-4">
            <h1 className="mb-4">INICIA SESIÓN</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              voluptatem distinctio iure asperiores.
            </p>
          </div>
          <form className="space-y-4 w-full">
            <TextInput placeholder="User" />
            <TextInput placeholder="Password" type="password" />
            <PrimaryButton className="w-full py-2">hola</PrimaryButton>
          </form>
        </main>
      </Layout>
    </div>
  );
}
