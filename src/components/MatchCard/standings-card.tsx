import { useMemo } from "react";
import { ENUM_CRICKET_MATCH_PAGES } from "../../types/enum";

interface StandingsProps {
  currentMatch: any; // Define a more specific type if possible
}

export default function Standings({ currentMatch }: StandingsProps) {
  console.log(currentMatch);
  const { sStatusStr } = currentMatch;

  const rewriteURLs = useMemo(() => {
    const urls: any= {};
    currentMatch?.oMatchSeos?.oSeo?.forEach((data: any) => {
      if (data?.sSlug) {
        //@ts-ignore
        urls[ENUM_CRICKET_MATCH_PAGES[data.eSubType]] = `/${data?.sSlug}`;
      }
    });

    urls.home = `/${currentMatch?.oSeo?.sSlug}`;
    return urls;
  }, [currentMatch, sStatusStr]);

  console.log('aka1', currentMatch)

  return (
    <div className='w-full p-4 rounded-b-lg bg-stone-50 dark:bg-stone-800 rounded text-left text-gray-600 dark:text-white text-base'>
      <a href={rewriteURLs['points-table']} target="_blank">
        Standings &gt;
      </a>
    </div>
  );
}
