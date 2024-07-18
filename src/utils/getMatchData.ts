import { Match } from "../types/common";

export const getMatchData = async (url: string): Promise<Match[]> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was an error fetching the data!", error);
    return [];
  }
};
