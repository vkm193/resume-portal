export const GetGitRepos = async () => {
    let repos = [];
    await fetch("https://api.github.com/users/vkm193/repos").then(response => 
        {
            response.json().then(
            (data) => {
                if(data){
                    data.forEach(item => repos.push({name: item.name, url: item.html_url}));
                }
            }
        )
        .catch(error => console.log(error))
        })
        .catch(error => console.log(error));
        return repos;
}