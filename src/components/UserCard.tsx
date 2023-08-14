import { UserType } from "../types";

export default function UserCard(props: { user: UserType }) {
  return (
    <div className="card card-compact w-full sm:max-w-xs bg-base-100 shadow-xl mb-3">
      <figure>
        <img src={props.user.avatar_url} alt={`${props.user.login} avatar`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.user.name}</h2>
        <h3 className="text-lg">{props.user.login}</h3>
        <p>{props.user.bio}</p>
        <div className="card-actions justify-start mt-3">
          <a href={props.user.html_url} className="btn w-full btn-neutral" target="_blank">
            Go to profile
          </a>
        </div>
      </div>
    </div>
  );
}
