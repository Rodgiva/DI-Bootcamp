import { useDispatch } from "react-redux";
import { addReaction } from "./postSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();

  const renderReactions = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(addReaction({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reaction[name]}
      </button>
    );
  });
  return (
    <>
      <div>{renderReactions}</div>
    </>
  );
};

export default ReactionButton;
