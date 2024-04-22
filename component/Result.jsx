import React from "react";

const Result = ({ repos }) => {
  console.log("Repos is: ", repos);

  const repoList = repos.map((item) => (
    <li key={item.id}>
      <a href={item.html_url}>{item.name}</a>
    </li>
  ));

  return (
    <ul>
      {repoList.length > 0 ? (
        repoList
      ) : (
        <li>
          <h4>No repositories found</h4>
        </li>
      )}
    </ul>
  );
};

export default Result;
