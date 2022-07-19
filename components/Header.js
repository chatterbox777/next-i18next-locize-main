import Head from "next/head";
import { useTranslation } from "next-i18next";

export const Header = ({ title }) => {
  const { t, ready } = useTranslation("common");

  return (
    <>
      <Head>
        <title>next-i18next</title>
      </Head>
      <h2>
        next-i18next
        <hr />
      </h2>
      {ready ? <h1>{t("title")}</h1> : "...Loading title"}
      <a className="github" href="//github.com/i18next/next-i18next">
        <i className="typcn typcn-social-github-circular" />
      </a>
    </>
  );
};
