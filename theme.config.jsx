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
    <div className="font-bold text-primary flex text-sm sm:text-base md:text-lg items-center gap-3">
      <Logo />
      <span> Learning Notes</span>
    </div>
  ),
  project: {
    link: "https://github.com/ethicalhub/learning-etc",
  },
  chat: {
    link: "https://github.com/ethicalhub/learning-etc",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  darkMode: false,

  docsRepositoryBase: "https://github.com/ethicalhub/learning-etc",
  footer: "null",
};
