import { FormEvent, useEffect, useState } from "react";

export default function App() {
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<{ total: number; users: object[]; runCount: number }>({
    total: 0,
    users: [],
    runCount: 0,
  });

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    console.log("form submitted with username as", username);

    const response = await fetch(`https://api.github.com/search/users?q=${username}`);
    const data: { total_count: number; items: object[] } = await response.json();

    setSearchResult((prev) => {
      return {
        ...prev,
        total: data.total_count,
        users: data.items,
        runCount: prev.runCount++,
      };
    });
    setLoading(false);
  }

  useEffect(() => {
    console.log("search result", searchResult);
  }, [searchResult]);

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
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="pt-5 sm:pt-9 sm:pl-5">
          <button className="btn btn-success">Search!</button>
        </div>
      </form>

      {!loading ? (
        <>
          {!!searchResult.runCount &&
            (!searchResult.total ? (
              <div className="alert alert-error flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  <span className="font-bold">Error!</span> No search results for your "{username}"
                </span>
              </div>
            ) : (
              <div>result of search</div>
            ))}
        </>
      ) : (
        <div className="flex justify-center sm:justify-start">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
    </div>
  );
}
