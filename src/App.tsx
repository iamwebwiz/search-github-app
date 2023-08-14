import { FormEvent, useEffect, useState } from "react";

export default function App() {
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<{ query: string; runCount: number; user: any }>({
    query: "",
    runCount: 0,
    user: {},
  });

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    console.log("form submitted with username as", username);

    const response = await fetch(`https://api.github.com/users/${username}`);
    const data: any = await response.json();

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
                    <span className="font-bold">GitHub user "{searchResult.query}" not found!</span>
                  </span>
                </div>
              ) : (
                <div>
                  <div className="card card-compact w-full sm:max-w-xs bg-base-100 shadow-xl mb-3">
                    <figure>
                      <img src={searchResult.user.avatar_url} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{searchResult.user.name}</h2>
                      <h3 className="text-lg">{searchResult.user.login}</h3>
                      <p>{searchResult.user.bio}</p>
                      <div className="card-actions justify-start mt-3">
                        <a href={searchResult.user.html_url} className="btn w-full btn-neutral" target="_blank">
                          Go to profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      ) : (
        <div className="flex justify-center sm:justify-start">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
    </div>
  );
}
