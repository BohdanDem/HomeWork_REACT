import styles from './Fetch_UsersPostsComments.module.css'
import useFetch from "../../hooks/useFetch";

const FetchUsersPostsComments = () => {

    //const [endpoint, setEndpoint] = useState( null)
    const  users = useFetch('/users')
    const  posts = useFetch('/posts')
    const  comments = useFetch('/comments')

    // const AddEndpoint = (data) => {
    //     setEndpoint(data)
    // }
    // useEffect(() => {}, [endpoint])

    return (
        <div className={styles.btn}>
            {/*<button onClick={() => AddEndpoint('/users')}>Get Users</button>*/}
            {/*<button onClick={() => AddEndpoint('/posts')}>Get Posts</button>*/}
            {/*<button onClick={() => AddEndpoint('/comments')}>Get Comments</button>*/}
            <div>
                {users.map((user) =>
                    <div key={user.id} className={styles.user}>
                        <div>{user.name}</div>
                        <div>{user.username}</div>
                    </div>
                )}
            </div>
            <div>
                {posts.map((post) =>
                    <div key={post.id} className={styles.post}>
                        <div>{post.id}</div>
                        <div>{post.title}</div>
                        <div>{comments.body}</div>
                    </div>
                )}
            </div>
            <div>
                {comments.map((comment) =>
                    <div key={comment.id} className={styles.comment}>
                        <div>{comment.id}</div>
                        <div>{comment.name}</div>
                        <div>{comment.body}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FetchUsersPostsComments;