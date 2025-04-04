import "./chatList.css";

const ChatList = () => {
  return (
    <div className="chatList">
        <div className="search"> 
            <div className="searchBar">
                <img src="/search.png"/>
                <input placeholder="Search..."/>
            </div>
            <img src="/plus.png "/>
        </div>

    </div>
  )
}

export default ChatList