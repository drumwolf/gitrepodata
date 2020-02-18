class Loader {
  async getUser(user) {
    const resp = await fetch(`https://api.github.com/users/${user}`);
    const data = await resp.json();
    return data;
  }
  async getRepos(user) {
    const resp = await fetch(`https://api.github.com/users/${user}/repos`);
    const data = await resp.json();
    return data;
  }
}

export default new Loader();