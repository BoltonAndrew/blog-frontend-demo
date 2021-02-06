const login = async (event, email, password, setUser) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    });
    const data = await response.json();
    setUser(data)
}

const addPost = async (event, title, content, user) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:5000/posts/${user._id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title,
            content: content,
        }),
    });
    const data = await response.json()
    console.log(data);
}

const fetchPosts = async (setPosts) => {
    const response = await fetch('http://localhost:5000/posts');
    const data = await response.json();
    let posts = data.reverse();
    setPosts(posts);
};

const fetchUsers = async (setUsers) => {
    const response = await fetch('http://localhost:5000/users');
    const data = await response.json();
    setUsers({data})
}

export {
    login,
    addPost,
    fetchPosts,
    fetchUsers
}