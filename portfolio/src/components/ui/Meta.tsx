import Head from "next/head";
import { useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";
import { API_URL } from "@/utils/urls";

interface ISeo {
  title: string;
  description?: string;
  icon?: string;
}

export const titleMerge = (title: string) => `${title}`;

const Meta: FC<PropsWithChildren<ISeo>> = ({
  title,
  description,
  icon,
  children,
}) => {
  const { asPath } = useRouter();
  const currentUrl = `${API_URL}${asPath}`;

  return (
    <>
      <Head>
        <title itemProp="headline">{titleMerge(title)}</title>
        <link rel="icon" href={icon || "/favicon.ico"} />
        {description ? (
          <>
            <meta
              itemProp="description"
              name="description"
              content={description}
            />
            <link rel="canonical" href="{currentUrl}" />

            <meta property="og  :locale" content="ru_RU" />
            <meta property="og:title" content={titleMerge(title)} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:image" content={icon || "/favicon.ico"} />
            <meta property="og:description" content={description} />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      {children}
    </>
  );
};

export default Meta;
