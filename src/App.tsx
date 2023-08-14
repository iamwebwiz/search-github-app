import { FormEvent, useState } from "react";
import ErrorMessage from "./components/ErrorMessage";
import UserCard from "./components/UserCard";
import { ISearchResultState, User } from "./types";
import Loading from "./components/Loading";

export default function App() {
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<ISearchResultState>({
    query: "",
    runCount: 0,
    user: {},
  });

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const response = await fetch(`https://api.github.com/users/${username}`);
    const data: User = await response.json();

    setSearchResult((prev) => {
      return {
        ...prev,
        query: username,
        runCount: prev.runCount++,
        user: data,
      };
    });
    setLoading(false);
  }

  return (
    <div className="pt-10 px-5 max-w-screen sm:px-14">
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row mb-5">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">GitHub Username</span>
          </label>
          <input
            type="text"
            placeholder="e.g. iamwebwiz"
            className="input input-bordered w-full max-w-xs"
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="pt-5 sm:pt-9 sm:pl-5">
          <button className="btn btn-success">Search!</button>
        </div>
      </form>

      {!loading ? (
        <>
          {!!searchResult.runCount && (
            <>
              <div className="divider mb-5">
                <h1 className="text-center text-3xl">Search Result</h1>
              </div>
              {searchResult.user.message ? (
                <ErrorMessage query={searchResult.query} />
              ) : (
                <UserCard user={searchResult.user} />
              )}
            </>
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
