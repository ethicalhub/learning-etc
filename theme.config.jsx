import Image from "next/image";
import Logo from "./components/Logo";

export default {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Learning notes - @yasir-etc</title>
      <meta name="description" content="It's fine" />
      <meta property="og:title" content="Learning notes" />
      <meta property="og:description" content="It's fine" />
    </>
  ),
  logo: (
    <div className="font-bold text-primary flex items-center gap-2">
      <Logo />
      <span>Notes</span>
    </div>
  ),
  project: {
    link: "https://github.com/ethicalhub/learning-etc",
  },
  chat: {
    link: "https://github.com/ethicalhub/learning-etc",
  },
  docsRepositoryBase: "https://github.com/ethicalhub/learning-etc",
  footer: "null",
};
