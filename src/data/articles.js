import React from "react";

function article_1() {
  return {
    date: "16 Mei 2023",
    title: "React Hook, Huk, huk, eehhhmmmm.....",
    description: "React Hook.",
    style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
    body: (
      <React.Fragment>
        <div className="article-content">
          <p>Test</p>
        </div>
      </React.Fragment>
    ),
  };
}

function article_2() {
  return {
    date: "7 May 2023",
    title: "Artificial Intelligence in Healthcare",
    description:
      "AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
    style: ``,
    body: (
      <React.Fragment>
        <h1>Content of article 2</h1>
      </React.Fragment>
    ),
  };
}

const myArticles = [article_1];

export default myArticles;
