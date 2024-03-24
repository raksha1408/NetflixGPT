import { BG_URL } from "../utils/constant";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover flex w-screen" src={BG_URL} alt="logo" />
      </div>
      <div className="pt-[30%]">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};
export default GPTSearch;
