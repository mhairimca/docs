module.exports = {
  title: "Docs",
  logo: {
    alt: "UMA Logo",
    src: "img/UMA_square_red_logo.png",
  },
  items: [
    {
      to: "/",
      label: "Getting Started",
      position: "left",
      activeBaseRegex: "(getting-started/|/$)",
    },
    {
      to: "tutorials/setup",
      label: "Tutorials",
      position: "left",
      activeBasePath: "tutorials",
    },
    {
      label: "The Protocol",
      to: "synthetic-tokens/explainer",
      position: "left",
      activeBaseRegex: "(synthetic-tokens|oracle|uma-tokenholders)",
      items: [
        {
          to: "synthetic-tokens/explainer",
          label: "Synthetic Tokens",
          activeBasePath: "synthetic-tokens",
        },
        {
          to: "oracle/tech-architecture",
          label: "Oracle (DVM)",
          activeBasePath: "oracle",
        },
        {
          to: "uma-tokenholders/uma-holders",
          label: "UMA Tokenholders",
          activeBasePath: "uma-tokenholders",
        },
      ],
    },
    {
      to: "dev-ref/addresses",
      label: "Developer Reference",
      position: "left",
      activeBasePath: "dev-ref",
    },
    { to: "community/press", label: "Community", position: "right" },
    {
      href: "https://github.com/UMAprotocol/protocol",
      className: "header-github-link",
      position: "right",
    },
    {
      href: "https://twitter.com/UMAprotocol",
      className: "header-twitter-link",
      position: "right",
    },
    {
      href: "https://discord.umaproject.org/",
      className: "header-discord-link",
      position: "right",
    },
  ],
};
