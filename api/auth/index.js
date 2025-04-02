const { Octokit } = require("@octokit/rest");

module.exports = async function (context, req) {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    context.res = {
      status: 500,
      body: "Missing GITHUB_TOKEN in environment variables",
    };
    return;
  }

  const octokit = new Octokit({ auth: token });

  context.res = {
    body: {
      token: token,
    },
  };
};
